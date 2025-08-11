/*
列表工具箱.js
作者：青舒计
QQ：2635725313
主要原理：JavaScript自带方法
未经许可，禁止盗用！
*/

//这是常量
const allType = ['object', 'string', 'number', 'boolean', 'image', 'array', 'color'];
const block = {
    callMethodLabel: false,
    color: 'rgb(249, 204, 55)'
};
const blockSpace = {
    space: 48
};
//部分控件信息要从这里修改
const wTitle = "列表工具箱";
const wVersion = "1.4.0";
const wAuther = "青舒计";
const wQQ = 2635725313;
const allTooltip = `
控件名：${wTitle}
版本：${wVersion}
作者：${wAuther}
作者QQ：${wQQ}
功能：
·排序列表
目前只有排序，将来会添加更多！
可以配合JavaScript.js 中子星000（一门鸽鸽）的控件
按（“函数”）排序（“列表”）：
·第1个参数配合下面的两个方法，也可以配合JavaScript.js
·第2个参数可以是一维列表，也可以是二维列表
·列表.sort(函数);
`;

/*
获取排序函数主要函数
type：num（数字），text（文本）
direction：up（升序），down（降序）
dimension：几维列表，只能是0（1维）或1（2维）
i：二维列表的第几列，只有dimension为1时使用
*/
function listGetSortFunc(type, direction, dimension, i) {
    var compareFunc = {
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
    return compareFunc[type][direction][dimension];
}

const types = {
    type: 'SORT_LIST_CYAN_WIDGET',
    icon: 'https://static.codemao.cn/coco/player/unstable/By1BcMlqi.image/svg+xml?hash=Fi4vO5F0eV8vdUnd7pN-s8l8Ly4A',
    title: wTitle,
    version: wVersion,
    auther: wAuther,
    docs: {
        url: 'https://coco.codemao.cn/editor/player/156697458/dt/269?channel=h5'
    },
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    methods: [
        {
            key: 'sort',
            label: '按',
            params: [
                {
                    key: 'func',
                    label: '',
                    labelAfter: '排序',
                    valueType: allType,
                    defaultValue: 'JavaScript函数'
                },
                {
                    key: 'list',
                    label: '',
                    labelAfter: '',
                    valueType: ['string', 'array'],
                    defaultValue: '列表'
                }
            ],
            valueType: 'array',
            blockOptions: block,
            tooltip: allTooltip
        },//排序相关，函数需要用下面的两个方法
        {
            key: 'oneDimensionLGSF',
            label: '',
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
                }
            ],
            valueType: allType,
            blockOptions: block,
            tooltip: allTooltip
        },
        {
            key: 'twoDimensionLGSF',
            label: '',
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
                    key: 'i',
                    label: '第',
                    labelAfter: '列',
                    valueType: ['number', 'string'],
                    defaultValue: 1
                }//二维列表需要
            ],
            valueType: allType,
            blockOptions: {...block, ...blockSpace},
            tooltip: allTooltip
        }
    ],
    events: []
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
        console.log(allTooltip);
        this.widgetLog(allTooltip);
    }

    sort = (func, list) => {
        return list.sort(func);//直接返回排序后的列表
    }

    oneDimensionLGSF = (type, direction) =>{
        return listGetSortFunc(type, direction, 0, undefined);
    }//1.1.0版本的更新

    twoDimensionLGSF = (type, direction, i) =>{
        return listGetSortFunc(type, direction, 1, (typeof i == 'number') ? (i - 1) : i);
        /*
(typeof i == 'number') ? (i - 1) : i
判断i是不是数字
如果是的话就减1返回
因为JavaScript的列表索引是从0开始
而编程猫CoCo是1
如果是字符串
就原样返回
（云数据库排序与维格表排序的兼容关键部分）
        */
    }//1.1.0版本的更新
}

exports.types = types;
exports.widget = Widget;
