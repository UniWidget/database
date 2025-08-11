/*
获取排序函数主要函数
type：num（数字），text（文本）
direction：up（升序），down（降序）
dimension：几维列表，只能是0（1维）或1（2维）
i：二维列表的第几列，只有dimension为1时使用
*/
function listGetSortFunc(type, direction, dimension, i) {
    var compareFuncs = {
        num: {
            up: [
                function (a, b) {
                    return a - b;
                },//一维列表
                function (a, b) {
                    return a[i] - b[i];
                }//二维列表
            ],//升序
            down: [
                function (a, b) {
                    return b - a;
                },//一维列表
                function (a, b) {
                    return b[i] - a[i];
                }//二维列表
            ]//降序
        },//按数字
        text: {
            up: [
                function (a, b) {
                    return (a > b) ? 1 : -1;
                },
                function (a, b) {
                    return (a[i] > b[i]) ? 1 : -1;
                }
            ],
            down: [
                function (a, b) {
                    return (b > a) ? 1 : -1;
                },
                function (a, b) {
                    return (b[i] > a[i]) ? 1 : -1;
                }
            ]
        }//按文本
    };
    return compareFuncs[type][direction][dimension];
}

/*
列表工具箱.js 控件商城特供版
作者：青舒计
QQ：2635725313
主要原理：JavaScript自带方法
未经许可，禁止盗用！
*/

//这是常量
const block = {
    callMethodLabel: false,
    color: 'rgb(249, 204, 55)'
};

const types = {
    type: 'SORT_LIST_CYAN_WIDGET',
    icon: 'https://static.codemao.cn/coco/player/unstable/By1BcMlqi.image/svg+xml?hash=Fi4vO5F0eV8vdUnd7pN-s8l8Ly4A',
    title: '列表排序',
    version: '1.0.0',
    auther: '青舒计',
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    methods: [
        {
            key: 'sort2',
            label: '按',
            params: [
                {
                    key: 'type',
                    label: '',
                    labelAfter: '',
                    valueType: 'string',
                    dropdown: [
                        {
                            label: '数字',
                            value: 'num'
                        },
                        {
                            label: '文本',
                            value: 'text'
                        }
                    ],
                    defaultValue: 'num'
                },
                {
                    key: 'direction',
                    label: '',
                    labelAfter: '',
                    valueType: 'string',
                    dropdown: [
                        {
                            label: '升序',
                            value: 'up'
                        },
                        {
                            label: '降序',
                            value: 'down'
                        }
                    ],
                    defaultValue: 'up'
                },
                {
                    key: 'list',
                    label: '',
                    labelAfter: '',
                    valueType: ['string', 'array'],
                    defaultValue: '二维列表'
                },
                {
                    key: 'i',
                    label: '第',
                    labelAfter: '列',
                    valueType: ['number', 'string'],
                    defaultValue: 1
                }
            ],
            valueType: 'array',
            blockOptions: {
                callMethodLabel: false,
                color: 'rgb(249, 204, 55)'
            },
            tooltip: `放入二维列表，
选择排序模式即可
注意：
排序云数据库，“第（1）列”需使用数字；
排序维格云表格，“第（1）列”需使用字符串
`
        },
        {
            key: 'sort1',
            label: '按',
            params: [
                {
                    key: 'type',
                    label: '',
                    labelAfter: '',
                    valueType: 'string',
                    dropdown: [
                        {
                            label: '数字',
                            value: 'num'
                        },
                        {
                            label: '文本',
                            value: 'text'
                        }
                    ],
                    defaultValue: 'num'
                },
                {
                    key: 'direction',
                    label: '',
                    labelAfter: '',
                    valueType: 'string',
                    dropdown: [
                        {
                            label: '升序',
                            value: 'up'
                        },
                        {
                            label: '降序',
                            value: 'down'
                        }
                    ],
                    defaultValue: 'up'
                },
                {
                    key: 'list',
                    label: '',
                    labelAfter: '',
                    valueType: ['string', 'array'],
                    defaultValue: '一维列表'
                }
            ],
            valueType: 'array',
            blockOptions: {
                callMethodLabel: false,
                color: 'rgb(249, 204, 55)'
            },
            tooltip: `放入一维列表，
选择排序模式即可`
        }
    ],
    events: []
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
        this.widgetLog(`作者：青舒计
编程猫：8525855
QQ：2635725313`);
    }

    sort2 = (type, direction, list, i) => {
        if (!Array.isArray(list)) {
            this.widgetError(`${list} 不是一个列表`);
            return;
        };
        return list.sort(
            listGetSortFunc(
                type,
                direction,
                1,//二维列表
                typeof i == 'number' ? (i - 1) : i/*适配多种格式*/
            )
        );//自带方法
        //直接返回排序后的列表
    }

    sort1 = (type, direction, list) => {
        if (!Array.isArray(list)) {
            this.widgetError(`${list} 不是一个列表`);
            return;
        };
        return list.sort(
            listGetSortFunc(
                type,
                direction,
                0//一维列表
            )
        );//自带方法
        //直接返回排序后的列表
    }
}

exports.types = types;
exports.widget = Widget;
