const types = {
    type: 'SORT_YB_WIDGET',
    icon: 'https://static.codemao.cn/coco/image/share-dialog/qrlogo.png',
    title: '列表排序升级',
    version: '2.2.0',
    author: '云碧学者',
    isInvisibleWidget: true,
    isGlobalWidget: true,
    docs: { url: 'https://www.yuque.com/yunbixuezhe' },
    properties: [],
    methods: [
        // 原始排序方法
        {
            key: 'sort',
            label: '排序列表',
            valueType: 'array',
            params: [
                {
                    key: 'list',
                    label: '列表',
                    valueType: ['array', 'string'],
                    defaultValue: '',
                },
                {
                    key: 'mode',
                    label: '排序方式',
                    valueType: 'string',
                    defaultValue: 'textLength',
                    dropdown: [
                        { label: '文本长度', value: 'textLength' },
                        { label: '数字大小', value: 'number' },
                        { label: '字符串转数字', value: 'stringToNumber' },
                        { label: '时间排序', value: 'time' }
                    ]
                },
                {
                    key: 'order',
                    label: '排序方向',
                    valueType: 'string',
                    defaultValue: 'asc',
                    dropdown: [
                        { label: '升序', value: 'asc' },
                        { label: '降序', value: 'desc' }
                    ]
                }
            ],
            blockOptions: {
                callMethodLabel: false
            }
        },
        
        // 按索引项排序（未修改）
        {
            key: 'sortByIndex',
            label: '按索引项排序',
            valueType: 'array',
            params: [
                {
                    key: 'list',
                    label: '列表',
                    valueType: ['array', 'string'],
                    defaultValue: '',
                },
                {
                    key: 'index',
                    label: '索引位置',
                    valueType: 'number',
                    defaultValue: 0,
                    controller: {
                        min: 0,
                        max: 100,
                        leftText: '首项',
                        rightText: '末项'
                    }
                },
                {
                    key: 'mode',
                    label: '排序方式',
                    valueType: 'string',
                    defaultValue: 'textLength',
                    dropdown: [
                        { label: '文本长度', value: 'textLength' },
                        { label: '数字大小', value: 'number' },
                        { label: '字符串转数字', value: 'stringToNumber' },
                        { label: '时间排序', value: 'time' }
                    ]
                },
                {
                    key: 'order',
                    label: '排序方向',
                    valueType: 'string',
                    defaultValue: 'asc',
                    dropdown: [
                        { label: '升序', value: 'asc' },
                        { label: '降序', value: 'desc' }
                    ]
                }
            ],
            blockOptions: {
                callMethodLabel: false
            }
        },
        
        // 修改后的按键名排序（第3块积木）
        {
            key: 'sortByKey',
            label: '按键名排序',
            valueType: 'array',
            params: [
                {
                    key: 'list',
                    label: '对象列表',
                    valueType: 'string', // 改为字符串类型以支持用户输入
                    defaultValue: '',
                    tooltip: '输入逗号分隔的列表（如："item1,item2,item3"）', // 添加提示
                },
                {
                    key: 'key',
                    label: '键名',
                    valueType: 'string',
                    defaultValue: 'name',
                },
                {
                    key: 'mode',
                    label: '排序方式',
                    valueType: 'string',
                    defaultValue: 'textLength',
                    dropdown: [
                        { label: '文本长度', value: 'textLength' },
                        { label: '数字大小', value: 'number' },
                        { label: '字符串转数字', value: 'stringToNumber' },
                        { label: '时间排序', value: 'time' }
                    ]
                },
                {
                    key: 'order',
                    label: '排序方向',
                    valueType: 'string',
                    defaultValue: 'asc',
                    dropdown: [
                        { label: '升序', value: 'asc' },
                        { label: '降序', value: 'desc' }
                    ]
                }
            ],
            blockOptions: {
                callMethodLabel: false
            }
        }
    ],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
    }
    
    // 核心排序逻辑（未修改）
    getSorter(mode, order) {
        const sorters = {
            textLength: (a, b) => String(a).length - String(b).length,
            number: (a, b) => Number(a) - Number(b),
            stringToNumber: (a, b) => {
                const numA = isNaN(Number(a)) ? 0 : Number(a);
                const numB = isNaN(Number(b)) ? 0 : Number(b);
                return numA - numB;
            },
            time: (a, b) => {
                const timeA = new Date(a).getTime() || 0;
                const timeB = new Date(b).getTime() || 0;
                return timeA - timeB;
            }
        };

        const compareFn = sorters[mode] || sorters.textLength;
        return order === 'desc' ? 
            (a, b) => compareFn(b, a) : 
            compareFn;
    }
    
    // 原始排序方法（未修改）
    sort(list, mode, order) {
        const arr = Array.isArray(list) ? [...list] : [list];
        const sorter = this.getSorter(mode, order);
        return arr.sort(sorter);
    }
    
    // 按索引项排序（未修改）
    sortByIndex(list, index, mode, order) {
        const arr = Array.isArray(list) ? [...list] : [list];
        const sorter = this.getSorter(mode, order);
        
        return arr.sort((a, b) => {
            const valA = a?.[index] !== undefined ? a[index] : '';
            const valB = b?.[index] !== undefined ? b[index] : '';
            return sorter(valA, valB);
        });
    }
    
    // 修改后的按键名排序
    sortByKey(list, key, mode, order) {
        // 解析用户输入的字符串为数组
        let parsedList;
        if (typeof list === 'string') {
            // 支持逗号分隔的列表（如："item1,item2,item3"）
            parsedList = list.split(',').map(item => item.trim());
        } else if (Array.isArray(list)) {
            parsedList = [...list];
        } else {
            parsedList = [list];
        }
        
        const sorter = this.getSorter(mode, order);
        
        return parsedList.sort((a, b) => {
            // 处理键不存在的情况
            const valA = a?.[key] !== undefined ? a[key] : '';
            const valB = b?.[key] !== undefined ? b[key] : '';
            return sorter(valA, valB);
        });
    }
}

exports.types = types;
exports.widget = Widget;
