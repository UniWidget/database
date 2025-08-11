/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

/**
 * 工具箱
 * 制作：中子星000（QQ：2422481178）
 */

/*
TODO：部分变量名改成英文
TODO：部分变量名改成蛇形
*/

/* 一些常量 */

const WIDGET_ICON = 'icon-toolbox-feature';
const BLOCK_ICON = 'https://creation.codemao.cn/coconut/web/1.10.0/static/media/internet.8da56d4e.svg';
const AUTHER = '中子星000';
const VERSION = '1.4.1';
const QQ = 2422481178;
const ANY_TYPE = ['object', 'string', 'number', 'boolean', 'image', 'array', 'color'];
const BLOCK_COLOR = '#6e4ff4';
const BLOCK_COLOR_OPERATION = '#FEAE8A';
const BLOCK_COLOR_REGEXP = '#7FBA00';
const BLOCK_COLOR_TIME = '#00AFC3';
const BLOCK_COLOR_HTMLTOOL = '#ff701b';
const BLOCK_COLOR_JSON = '#68cdff';
const DEFAULT_BLOCK_OPTIONS_INLINE = { color: BLOCK_COLOR, callMethodLabel: false, };
const DEFAULT_BLOCK_OPTIONS = { ...DEFAULT_BLOCK_OPTIONS_INLINE, inputsInline: false, };
const OPERATION_OPTIONS_INLINE = { ...DEFAULT_BLOCK_OPTIONS_INLINE, color: BLOCK_COLOR_OPERATION, };
const OPERATION_OPTIONS = { ...OPERATION_OPTIONS_INLINE, inputsInline: false, };
const REGEXP_OPTIONS_INLINE = { ...DEFAULT_BLOCK_OPTIONS_INLINE, color: BLOCK_COLOR_REGEXP, };
const REGEXP_OPTIONS = { ...REGEXP_OPTIONS_INLINE, inputsInline: false, };
const TIME_OPTIONS_INLINE = { ...DEFAULT_BLOCK_OPTIONS_INLINE, color: BLOCK_COLOR_TIME, };
const TIME_OPTIONS = { ...TIME_OPTIONS_INLINE, inputsInline: false, };
const HTMLTOOL_OPTIONS_INLINE = { ...DEFAULT_BLOCK_OPTIONS_INLINE, color: BLOCK_COLOR_HTMLTOOL, };
const HTMLTOOL_OPTIONS = { ...HTMLTOOL_OPTIONS_INLINE, inputsInline: false, };
const JSON_OPTIONS_INLINE = { ...DEFAULT_BLOCK_OPTIONS_INLINE, color: BLOCK_COLOR_JSON, };
const JSON_OPTIONS = { ...JSON_OPTIONS_INLINE, inputsInline: false, };

/* 导入库 */
// const axios = require('axios');
const utils = require('utils');

/* 一些工具函数 */
set_space = (blockType, key, space) => {
    types[blockType].forEach(block => {
        if (block.key === key) {
            block.blockOptions = { ...block.blockOptions, space: space };
        }
    });
};

const types = {
    type: 'TOOLBOX_ZZX_WIDGET',
    icon: WIDGET_ICON,
    title: '工具箱',
    version: VERSION,
    auther: AUTHER,
    platforms: ['android', 'ios', 'web'],
    isInvisibleWidget: true,
    isGlobalWidget: true,
    docs: {
        url: 'https://www.yuque.com/coco-central/widget/widgetguide'
    },
    properties: [
        {
            key: 'debugger', label: '无限debugger', valueType: 'boolean', defaultValue: false,
            tooltip: 'true则开启无限debugger防F12',
        }
    ],
    methods: [
        /* 额，这个积木名字不改了！ */
        {/*meaningless_block*/
            key: 'meaningless_block', label: '',
            tooltip: `用来执行不想获取返回值的积木`,
            blockOptions: OPERATION_OPTIONS_INLINE,
            params: [
                {
                    key: 'meaninglessInput', valueType: ['string', 'number', 'boolean', 'image', 'object'], defaultValue: '', checkType: ['string', 'number', 'boolean', 'image', 'object']
                }
            ]
        }, {/*multiline_string*/
            key: 'multiline_string', label: '多行文本', valueType: 'string',
            tooltip: `多行文本`,
            blockOptions: OPERATION_OPTIONS_INLINE,
            params: [
                { key: 'text', valueType: 'multilineString', checkType: 'string', defaultValue: 'Hello,\nworld!', },
            ],
        }, {/*trim*/
            key: 'trim', label: '去头尾空白', valueType: 'string',
            tooltip: `去除字符串头尾空白`,
            blockOptions: OPERATION_OPTIONS_INLINE,
            params: [
                { key: 'text', valueType: 'string', defaultValue: ' Hello world!  ', },
            ],
        }, {/*join*/
            key: 'join', label: '将', valueType: 'string',
            tooltip: `方法将数组作为字符串返回，即array.join(text)`,
            blockOptions: OPERATION_OPTIONS_INLINE,
            params: [
                { key: 'list', label: '列表', labelAfter: '插入', valueType: ['string', 'array'], defaultValue: [], },
                { key: 'text', label: '字符串', valueType: 'string', defaultValue: ',', },
            ],
        },

        {/*位运算*/
            key: '位运算', label: '', valueType: 'number',
            tooltip: `位运算`,
            blockOptions: OPERATION_OPTIONS_INLINE,
            params: [
                { key: 'a', valueType: 'number', defaultValue: 0, },
                {
                    key: 'o', valueType: 'string', defaultValue: '&',
                    dropdown: [
                        { label: '&', value: '&' },
                        { label: '|', value: '|' },
                        { label: '^', value: '^' },
                    ],
                },
                { key: 'b', valueType: 'number', defaultValue: 0, },
            ],
        }, {/*按位非*/
            key: '按位非', label: '', valueType: 'number',
            tooltip: `按位非 NOT ~ a`,
            blockOptions: OPERATION_OPTIONS_INLINE,
            params: [
                { key: 'a', label: '~', valueType: 'number', defaultValue: 0, },
            ],
        }, {/*位移*/
            key: '位移', label: '', valueType: 'number',
            tooltip: `位移`,
            blockOptions: OPERATION_OPTIONS_INLINE,
            params: [
                { key: 'a', valueType: 'number', defaultValue: 0, },
                {
                    key: 'o', valueType: 'string', defaultValue: '<<',
                    dropdown: [
                        { label: '<<', value: '<<' },
                        { label: '>>', value: '>>' },
                        { label: '>>>', value: '>>>' },
                    ],
                },
                { key: 'b', valueType: 'number', defaultValue: 0, },
            ],
        }, {/*ifelse_inline*/
            key: 'ifelse_inline', label: '如果', valueType: ANY_TYPE,
            tooltip: `三元运算符`,
            blockOptions: OPERATION_OPTIONS_INLINE,
            params: [
                { key: 'expression', label: '', valueType: 'boolean', defaultValue: true, },
                { key: 't_return', label: '成立返回', valueType: ANY_TYPE, defaultValue: '', },
                { key: 'f_return', label: '不成立返回', valueType: ANY_TYPE, defaultValue: '', },
            ],
        }, {/*ifelse*/
            key: 'ifelse', label: '如果', valueType: ANY_TYPE,
            tooltip: `三元运算符`,
            blockOptions: OPERATION_OPTIONS,
            params: [
                { key: 'expression', label: '', valueType: 'boolean', defaultValue: true, },
                { key: 't_return', label: '成立返回', valueType: ANY_TYPE, defaultValue: '', },
                { key: 'f_return', label: '不成立返回', valueType: ANY_TYPE, defaultValue: '', },
            ],
        },

        {/*regexp*/
            key: 'regexp', label: '创建', valueType: 'object',
            tooltip: `创建一个正则表达式\n到此页面查看完整教程https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions`,
            blockOptions: REGEXP_OPTIONS_INLINE,
            params: [
                { key: 'pattern', label: '表达式', valueType: 'string', defaultValue: '', },
                { key: 'flags', label: '标志', valueType: 'string', defaultValue: '', },
            ],
        }, {/*regexp_test*/
            key: 'regexp_test', label: '检索', valueType: 'boolean',
            tooltip: `test方法，返回布尔值\n到此页面查看完整教程https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions`,
            blockOptions: REGEXP_OPTIONS_INLINE,
            params: [
                { key: 'regexp', label: '正则表达式', valueType: ANY_TYPE, defaultValue: '请把创建表达式积木放这里', },
                { key: 'str', label: '字符串', valueType: 'string', defaultValue: '待匹配字符串', },
            ],
        }, {/*regexp_match*/
            key: 'regexp_match', label: '匹配', valueType: 'array',
            tooltip: `match方法，返回列表\n到此页面查看完整教程https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions`,
            blockOptions: REGEXP_OPTIONS_INLINE,
            params: [
                { key: 'regexp', label: '正则表达式', valueType: ANY_TYPE, defaultValue: '请把创建表达式积木放这里', },
                { key: 'str', label: '字符串', valueType: 'string', defaultValue: '待匹配字符串', },
            ],
        }, {/*regexp_search*/
            key: 'regexp_search', label: '索引', valueType: 'number',
            tooltip: `search方法，返回数字\n到此页面查看完整教程https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions`,
            blockOptions: REGEXP_OPTIONS_INLINE,
            params: [
                { key: 'regexp', label: '正则表达式', valueType: ANY_TYPE, defaultValue: '请把创建表达式积木放这里', },
                { key: 'str', label: '字符串', valueType: 'string', defaultValue: '待匹配字符串', },
            ],
        }, {/*replace*/
            key: 'replace', label: '把', valueType: 'string',
            tooltip: `替换字符串中的第一个相应字符串或所有相应字符串`,
            blockOptions: REGEXP_OPTIONS_INLINE,
            params: [
                { key: 'text1', label: '', labelAfter: '中的', valueType: 'string', defaultValue: 'Hello, world!', },
                {
                    key: 'mode', valueType: 'string', defaultValue: 'replace',
                    dropdown: [
                        { label: '第一个', value: 'replace' },
                        { label: '所有', value: 'replaceAll' },
                    ],
                },
                { key: 'text2', label: '', valueType: ANY_TYPE, defaultValue: 'world（这里也可以用正则表达式积木）', },
                { key: 'text3', label: '替换为', valueType: 'string', defaultValue: 'CoCo', },
            ],
        },

        {/*当前时间戳*/
            key: '当前时间戳', label: '当前时间戳', valueType: 'number',
            tooltip: `返回当前时间戳`,
            blockOptions: TIME_OPTIONS_INLINE,
            params: [],
        }, {/*转时间戳*/
            key: '转时间戳', label: '把', valueType: 'number',
            tooltip: `把指定时间转为时间戳`,
            blockOptions: TIME_OPTIONS_INLINE,
            params: [
                { key: 'y', labelAfter: '年', valueType: 'number', defaultValue: (new Date()).getFullYear(), },
                { key: 'mo', labelAfter: '月', valueType: 'number', defaultValue: (new Date()).getMonth() + 1, },
                { key: 'd', labelAfter: '日', valueType: 'number', defaultValue: (new Date()).getDay(), },
                { key: 'h', labelAfter: '时', valueType: 'number', defaultValue: (new Date()).getHours(), },
                { key: 'mi', labelAfter: '分', valueType: 'number', defaultValue: (new Date()).getMinutes(), },
                { key: 's', labelAfter: '秒 转为时间戳', valueType: 'number', defaultValue: (new Date()).getSeconds(), },
            ],
        }, {/*获取时间*/
            key: '获取时间', label: '获取', valueType: 'number',
            tooltip: `把指定时间转为时间戳`,
            blockOptions: TIME_OPTIONS_INLINE,
            params: [
                { key: 't', label: '时间戳', valueType: 'number', defaultValue: (new Date()).getTime(), },
                {
                    key: 'o', valueType: 'string', defaultValue: '&',
                    dropdown: [
                        { label: '年', value: 'getFullYear' },
                        { label: '月', value: 'getMonth' },
                        { label: '日', value: 'getDay' },
                        { label: '时', value: 'getHours' },
                        { label: '分', value: 'getMinutes' },
                        { label: '秒', value: 'getSeconds' },
                    ],
                },
            ],
        },

        // {/*copy*/
        //     key: 'copy', label: '复制文本',
        //     tooltip: `复制文本到粘贴板`,
        //     blockOptions: { color: BLOCK_COLOR, },
        //     params: [
        //         { key: 'text', valueType: 'string', defaultValue: 'Hello world!', },
        //     ],
        // },

        {/*to_html_string_inline*/
            key: 'to_html_string_inline', label: '元素', valueType: 'string',
            tooltip: `生成html元素字符串`,
            blockOptions: HTMLTOOL_OPTIONS_INLINE,
            params: [
                { key: 'tag', label: '标签：', valueType: 'string', checkType: 'string', defaultValue: 'p', },
                { key: 'style', label: 'style：', valueType: 'multilineString', checkType: 'string', defaultValue: '', },
                { key: 'otherAttrs', label: '其他属性：', valueType: 'multilineString', checkType: 'string', defaultValue: '', },
                { key: 'innerHtml', label: '内容：', valueType: 'multilineString', checkType: 'string', defaultValue: 'Hello world', }
            ],
        }, {/*to_html_string*/
            key: 'to_html_string', label: '元素', valueType: 'string',
            tooltip: `生成html元素字符串`,
            blockOptions: HTMLTOOL_OPTIONS,
            params: [
                { key: 'tag', label: '标签：', valueType: 'string', checkType: 'string', defaultValue: 'p', },
                { key: 'style', label: 'style：', valueType: 'multilineString', checkType: 'string', defaultValue: '', },
                { key: 'otherAttrs', label: '其他属性：', valueType: 'multilineString', checkType: 'string', defaultValue: '', },
                { key: 'innerHtml', label: '内容：', valueType: 'multilineString', checkType: 'string', defaultValue: 'Hello world', }
            ],
        }, {/*escape_html*/
            key: 'escape_html', label: '转义', valueType: 'string',
            tooltip: `转义HTML，防止注入`,
            blockOptions: HTMLTOOL_OPTIONS_INLINE,
            params: [
                { key: 'text', valueType: 'string', defaultValue: '&lt;p&gt;Hello, world!&lt;/p&gt;', },
            ],
        },

        {/*is_mobile*/
            key: 'is_mobile', label: '是移动端？', valueType: 'boolean',
            tooltip: `是移动端返回true，不是返回false`,
            blockOptions: DEFAULT_BLOCK_OPTIONS_INLINE,
            params: [],
        },

        {/*JSON_prase*/
            key: 'JSON_prase', label: '解析', valueType: 'object',
            tooltip: `解析JSON字符串`,
            blockOptions: JSON_OPTIONS_INLINE,
            params: [
                { key: 'json', label: 'JSON', valueType: 'string', checkType: 'string', defaultValue: '' },
            ],
        }, {/*JSON_stringify*/
            key: 'JSON_stringify', label: 'JSON字符串化', valueType: 'string',
            tooltip: `生成JSON字符串`,
            blockOptions: JSON_OPTIONS_INLINE,
            params: [
                { key: 'obj', label: '对象', valueType: ANY_TYPE, checkType: ANY_TYPE, defaultValue: '' },
            ],
        },
    ],
    events: []
};


set_space('methods', 'ifelse', 40);
set_space('methods', 'replace', 40);
set_space('methods', 'escape_html', 40);
set_space('methods', '获取时间', 40);
set_space('methods', 'is_mobile', 40);

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);

        this.debugger = props.debugger;
        if (this.debugger) { setInterval(() => { debugger; }, 1000); };/*无限debugger*/

        this.vars = {};

        // axios.defaults.baseURL = 'https://api.codemao.cn/';
        this.widgetLog(`
 * 工具箱
 * 制作：中子星000（QQ：2422481178）
            `);
    };
    meaningless_block = (block) => { };
    multiline_string = (text) => { return text; };
    trim = (text) => { return text.trim(); };
    join = (list, text) => { return list.join(text); };

    位运算 = (a, o, b) => {
        if (o === '&') { return a & b; }
        else if (o === '|') { return a | b; }
        else if (o === '^') { return a ^ b; }
    };
    按位非 = (a) => { return ~a; };
    位移 = (a, o, b) => {
        if (o === '<<') { return a << b; }
        else if (o === '>>') { return a >> b; }
        else if (o === '>>>') { return a >>> b; }
    };
    ifelse_inline = (expression, t_return, f_return) => { return expression ? t_return : f_return; };
    ifelse = this.ifelse_inline
    // copy = (text) => { copy(text); }

    regexp = (pattern, flags) => { return new RegExp(pattern, flags); };
    regexp_test = (regexp, str) => { return regexp.test(str); };
    regexp_match = (regexp, str) => { return str.match(regexp); };
    regexp_search = (regexp, str) => { return str.search(regexp); };
    replace = (text1, mode, text2, text3) => { return text1[mode](text2, text3); };

    当前时间戳 = () => { return (new Date()).getTime(); };
    转时间戳 = (y, mo, d, h, mi, s) => { return (new Date(`${y}-${mo}-${d} ${h}:${mi}:${s}`)).getTime(); };
    获取时间 = (t, o) => { return o !== 'getMonth' ? (new Date(t))[o]() : (new Date(t))['getMonth']() + 1; };

    to_html_string_inline = (tag, style, otherAttrs, innerHtml) => { return (`<${tag}\u0020style="${style}"\u0020${otherAttrs}>${innerHtml}</${tag}>`); };
    to_html_string = this.to_html_string_inline;
    escape_html = (text) => { var matchHtmlRegExp = /["'&<>]/; var str = '' + text; var match = matchHtmlRegExp.exec(str); if (!match) { return str } var escape = void 0; var html = ''; var index = 0; var lastIndex = 0; for (index = match.index; index < str.length; index++) { switch (str.charCodeAt(index)) { case 34: escape = '&quot;'; break; case 38: escape = '&amp;'; break; case 39: escape = '&#x27;'; break; case 60: escape = '&lt;'; break; case 62: escape = '&gt;'; break; default: continue }if (lastIndex !== index) { html += str.substring(lastIndex, index) } lastIndex = index + 1; html += escape } return lastIndex !== index ? html + str.substring(lastIndex, index) : html };

    is_mobile = () => { return (utils.isNative() ? true : false); }

    JSON_prase = (json) => { console.log(json);; return JSON.parse(json); }
    JSON_stringify = (obj) => { return JSON.stringify(obj); }

}

console.log(`
* 工具箱
* 制作：中子星000（QQ：2422481178）
`);

exports.types = types;
exports.widget = Widget;
