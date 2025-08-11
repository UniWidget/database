const types = {
    type: 'SORT_YB_WIDGET',
    icon: 'https://static.codemao.cn/appcraft/extension-widgets/production/sort-icon.svg',
    title: '列表排序',
    version: '1.0.0',
    author: 'YBXZ',
    isInvisibleWidget: true,
    isGlobalWidget: true,
    docs: { url: 'https://www.yuque.com/yunbixuezhe' },
    properties: [],
    methods: [
        {
            key: 'sort',
            label: '排序',
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
        }
    ],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
    }
    
    sort(list, mode, order) {
        // 确保处理的是数组
        const arr = Array.isArray(list) ? [...list] : [list];
        
        // 定义排序函数
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

        // 执行排序
        const compareFn = sorters[mode] || sorters.textLength;
        const sorted = arr.sort(compareFn);
        
        // 处理排序方向
        return order === 'desc' ? sorted.reverse() : sorted;
    }
}

exports.types = types;
exports.widget = Widget;
