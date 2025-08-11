/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

/**
 * JavaScript控件
 * 制作：中子星000（QQ：2422481178）
 */

/* 一些常量 */

const WIDGET_ICON = 'icon-toolbox-feature';
const AUTHER = '中子星000';
const VERSION = '1.1.0';
const QQ = 2422481178;
const ANY_TYPE = ['object', 'string', 'number', 'boolean', 'image', 'array', 'color'];
const BLOCK_COLOR = '#4EC9B0';
const DEFAULT_BLOCK_OPTIONS_INLINE = { color: BLOCK_COLOR, callMethodLabel: false, };
const DEFAULT_BLOCK_OPTIONS = { ...DEFAULT_BLOCK_OPTIONS_INLINE, inputsInline: false, };
const TOOLTIP = `
控件名：JavaScript控件
版本：${VERSION}
功能：
·对象操作
·创建JavaScript函数，可写JavaScript代码
·访问window对象
默认值占位标识符介绍：
格式：symbol：type，other
object：对象，可以使用create_new_object（积木名鼠标悬停查看）创建或其他积木返回（JavaScript里一切皆对象）
attr：字符串，对象的参数名，需要符合变量命名规则
value：任意类型，值
method：字符串，对象方法名
arg_list：字符串或列表，实参列表，传入函数中的
param_list：字符串或列表，形参列表，定义函数的
code：字符串，JavaScript代码
function：函数对象，可以使用create_new_function创建
其中，当arg_list，param_list输入为列表时以“,”英文逗号分割参数
且还是建议用列表传参，直接输字符串可能会有bug！

create_new_function使用方法：
（创建并返回一个函数 形参列表（“a, b”） 代码（“return a + b;”））
`

/* 一些工具函数 */
set_space = (blockType, key, space) => {
    types[blockType].forEach(block => {
        if (block.key === key) {
            block.blockOptions = { ...block.blockOptions, space: space };
        }
    });
};

const types = {
    type: 'JAVASCRIPT_ZZX_WIDGET',
    icon: WIDGET_ICON,
    title: 'JavaScript控件',
    version: VERSION,
    auther: AUTHER,
    platforms: ['android', 'ios', 'web'],
    isInvisibleWidget: true,
    isGlobalWidget: true,
    docs: {
        url: 'https://www.yuque.com/coco-central/widget/widgetguide'
    },
    properties: [],
    methods: [
        {/*introduction*/
            key: 'introduction', label: '说明（鼠标悬停查看或在控制台输出）', valueType: 'string',
            tooltip: TOOLTIP,
            blockOptions: DEFAULT_BLOCK_OPTIONS_INLINE,
            params: [],
        },

        {/*return_null*/
            key: 'return_null', label: '返回null值', valueType: ANY_TYPE,
            tooltip: `return_null\n返回null值\nreturn null;`,
            blockOptions: DEFAULT_BLOCK_OPTIONS_INLINE,
            params: []
        }, {/*return_undefined*/
            key: 'return_undefined', label: '返回undefined值', valueType: ANY_TYPE,
            tooltip: `return_undefined\n返回undefined值\nreturn undefined;`,
            blockOptions: DEFAULT_BLOCK_OPTIONS_INLINE,
            params: []
        }, {/*return_window*/
            key: 'return_window', label: '返回window对象', valueType: ANY_TYPE,
            tooltip: `return_window\n返回window对象\nreturn this.window;`,
            blockOptions: DEFAULT_BLOCK_OPTIONS_INLINE,
            params: []
        }, {/*create_new_object*/
            key: 'create_new_object', label: '创建并返回一个简单对象', valueType: ANY_TYPE,
            tooltip: `create_new_object\n创建并返回一个简单对象\nreturn new Object();`,
            blockOptions: DEFAULT_BLOCK_OPTIONS_INLINE,
            params: []
        },

        {/*set_object_attr*/
            key: 'set_object_attr', label: '设置对象', valueType: ANY_TYPE,
            tooltip: `set_object_attr\n设置对象属性\nobject[attr] = value; return object[attr];`,
            blockOptions: DEFAULT_BLOCK_OPTIONS_INLINE,
            params: [
                { key: 'object', valueType: ANY_TYPE, defaultValue: 'object', },
                { key: 'attr', label: '属性', labelAfter: '的', valueType: 'string', defaultValue: 'attr', },
                { key: 'value', label: '值为', labelAfter: '并返回对象', valueType: ANY_TYPE, defaultValue: 'value', },
            ],
        }, {/*get_object_attr*/
            key: 'get_object_attr', label: '获取对象', valueType: ANY_TYPE,
            tooltip: `get_object_attr\n获取对象属性\nreturn object[attr];`,
            blockOptions: DEFAULT_BLOCK_OPTIONS_INLINE,
            params: [
                { key: 'object', valueType: ANY_TYPE, defaultValue: 'object', },
                { key: 'attr', label: '的', valueType: 'string', defaultValue: 'attr', },
            ],
        }, {/*call_object_method*/
            key: 'call_object_method', label: '调用对象',
            tooltip: `call_object_method\n调用对象方法\nobject[method].apply(null, arg_list);`,
            blockOptions: DEFAULT_BLOCK_OPTIONS_INLINE,
            params: [
                { key: 'object', valueType: ANY_TYPE, defaultValue: 'object', },
                { key: 'method', label: '的方法', valueType: 'string', checkType: 'string', defaultValue: 'method' },
                { key: 'arg_list', label: '参数列表', valueType: ANY_TYPE, checkType: ANY_TYPE, defaultValue: 'arg_list' },
            ],
        }, {/*call_object_method_with_return*/
            key: 'call_object_method_with_return', label: '调用对象', valueType: ANY_TYPE,
            tooltip: `call_object_method_with_return\n调用对象方法并获取返回值\nreturn object[method].apply(null, arg_list);`,
            blockOptions: DEFAULT_BLOCK_OPTIONS_INLINE,
            params: [
                { key: 'object', valueType: ANY_TYPE, defaultValue: 'object', },
                { key: 'method', label: '的方法', valueType: 'string', checkType: 'string', defaultValue: 'method' },
                { key: 'arg_list', label: '参数列表', valueType: ANY_TYPE, checkType: ANY_TYPE, defaultValue: 'arg_list' },
            ],
        },

        {/*create_new_function*/
            key: 'create_new_function', label: '创建并返回一个函数', valueType: ANY_TYPE,
            tooltip: `create_new_function\n创建并返回一个匿名函数\nreturn (Function.apply(null, this._toList(param_list).concat(code)));`,
            blockOptions: DEFAULT_BLOCK_OPTIONS_INLINE,
            params: [
                { key: 'param_list', label: '形参列表', valueType: 'string', checkType: 'string', defaultValue: 'param_list' },
                { key: 'code', label: '代码', valueType: 'multilineString', checkType: 'string', defaultValue: 'code' },
            ],
        }, {/*call_method*/
            key: 'call_method', label: '调用函数',
            tooltip: `call_method\n调用函数\nfunction_.apply(null, arg_list);`,
            blockOptions: DEFAULT_BLOCK_OPTIONS_INLINE,
            params: [
                { key: 'function_', label: '', valueType: ANY_TYPE, defaultValue: 'function' },
                { key: 'arg_list', label: '参数列表', valueType: ANY_TYPE, checkType: ANY_TYPE, defaultValue: 'arg_list' },
            ],
        }, {/*call_method_with_return*/
            key: 'call_method_with_return', label: '调用函数', valueType: ANY_TYPE,
            tooltip: `call_method_with_return\n调用函数\nreturn Function.apply(null, param_list.concat(code));`,
            blockOptions: DEFAULT_BLOCK_OPTIONS_INLINE,
            params: [
                { key: 'function_', label: '', valueType: ANY_TYPE, defaultValue: 'function' },
                { key: 'arg_list', label: '参数列表', labelAfter: '并返回', valueType: ANY_TYPE, checkType: ANY_TYPE, defaultValue: 'arg_list' },
            ],
        },

        {/*run_javascript*/
            key: 'run_javascript', label: '一键执行',
            tooltip: `run_javascript\一键执行JavaScript代码\nFunction.call(null, code)();`,
            blockOptions: DEFAULT_BLOCK_OPTIONS_INLINE,
            params: [
                { key: 'code', label: '代码', valueType: 'multilineString', checkType: 'string', defaultValue: 'code' },
            ],
        }, {/*run_javascript_with_return*/
            key: 'run_javascript_with_return', label: '一键执行', valueType: ANY_TYPE,
            tooltip: `run_javascript_with_return\一键执行JavaScript代码\nreturn (Function.call(null, code))();`,
            blockOptions: DEFAULT_BLOCK_OPTIONS_INLINE,
            params: [
                { key: 'code', label: '代码', labelAfter: '并返回', valueType: 'multilineString', checkType: 'string', defaultValue: 'code' },
            ],
        },

    ],
    events: []
};

set_space('methods', 'introduction', 40);
set_space('methods', 'create_new_object', 40);
set_space('methods', 'call_object_method_with_return', 40);
set_space('methods', 'call_method_with_return', 40);

window_ = this.window

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
        this.widgetLog(`
 * JavaScript控件
 * 制作：中子星000（QQ：2422481178）
            `);
    };

    window = window_

    _toList = (a) => { return typeof a === 'string' ? a.split(',') : a; }

    introduction = () => { return TOOLTIP; };

    return_null = () => { return null; };
    return_undefined = () => { return undefined; };
    return_window = () => { return this.window; };
    create_new_object = () => { return new Object(); };

    set_object_attr = (object, attr, value) => { object[attr] = value; return object[attr]; };
    get_object_attr = (object, attr) => { return object[attr]; };
    call_object_method = (object, method, arg_list) => { object[method].apply(null, this._toList(arg_list)); }
    call_object_method_with_return = (object, method, arg_list) => { return object[method].apply(null, this._toList(arg_list)); }

    create_new_function = (param_list, code) => { return (Function.apply(null, this._toList(param_list).concat(code))); }
    call_method = (function_, arg_list) => { function_.apply(null, this._toList(arg_list)); }
    call_method_with_return = (function_, arg_list) => { return function_.apply(null, this._toList(arg_list)); }

    run_javascript = (code) => { (Function.call(null, code))(); }
    run_javascript_with_return = (code) => { return (Function.call(null, code))(); }
}

console.log(`
* JavaScript控件
* 制作：中子星000（QQ：2422481178）
`);

exports.types = types;
exports.widget = Widget;
