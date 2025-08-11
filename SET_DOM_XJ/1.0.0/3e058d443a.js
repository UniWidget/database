const any = ['string', 'number', 'boolean', 'array', 'object', 'color', 'undefined'];
const defaultValueObj = {
    string: '',
    multilineString: '',
    number: 0,
    boolean: false,
};
var document = this.document;
var window = this.window;
const types = {
    type: 'SET_DOM_XJ',
    icon: 'https://ocean.codemao.cn/appcraft/resource/icon/基础/修改工具.svg',
    title: '操作DOM',
    version: '1.0.0',
    author: 'XJ王大哥(QQ2357942846)',
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    methods: [
        {
            key: '设置元素属性',
            line: '通用操作',
            params: [
                { label: '设置选择器', valueType: 'string' },
                { dropdown: ['属性', '样式'] },
                { label: '键', valueType: 'string' },
                { label: '的值为', valueType: 'string' },
            ],
            def: (a, b, c, d) => {
                switch (b) {
                    case '属性':
                        return document.querySelector(a).setAttribute(c, d);
                    case '样式':
                        return document.querySelector(a).style.setProperty(c, d);
                }
            },
        },
        {
            key: '获取元素属性',
            valueType: any,
            params: [
                { label: '获取选择器', valueType: 'string' },
                { dropdown: ['属性', '样式'] },
                { label: '键', labelAfter: '的值', valueType: 'string' },
            ],
            def: (a, b, c) => {
                switch (b) {
                    case '属性':
                        return document.querySelector(a).getAttribute(c);
                    case '样式':
                        return document.querySelector(a).style.getPropertyValue(c);
                }
            },
        },
        {
            key: '删除元素属性',
            params: [
                { label: '删除选择器', valueType: 'string' },
                { dropdown: ['属性', '样式'] },
                { label: '的键', valueType: 'string' },
            ],
            def: (a, b, c) => {
                switch (b) {
                    case '属性':
                        return document.querySelector(a).removeAttribute(c);
                    case '样式':
                        return document.querySelector(a).style.removeAttribute(c);
                }
            },
        },
    ],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(p) {
        super(p);
        Object.assign(this, p);
    }
}

let color, line, currentLine;
types.methods = types.methods
    .map(v => {
        if ('line' in v) {
            // 处理分组
            if (v.color) color = v.color;
            currentLine = v.line;
        } else {
            // 处理方法
            if (!('key' in v)) v.key = v.label;
            v.key = currentLine + '_' + v.key;
            if ('def' in v) Widget.prototype[v.key] = v.def;
            v.blockOptions = {
                ...v.blockOptions,
                callMethodLabel: false,
                line: line,
                color: color,
            };
            // 处理介绍
            v.tooltip = `${v.key}${v.tooltip ? `\n小技巧：${v.tooltip}` : ''}${
                v.author ? `\n贡献者：${v.author}` : ''
            }`;
            // 处理参数
            v.params = v.params.map((v, i) => {
                // 处理缺省key
                v.key = i;
                if ('valueType' in v) {
                    // 根据valueType处理缺省defaultValue
                    if (!('defaultValue' in v)) v.defaultValue = defaultValueObj[v.valueType];
                } else {
                    // 处理缺省valueType
                    v.valueType = any;
                    v.defaultValue = '';
                }
                // 处理选项
                if ('dropdown' in v) {
                    v.valueType = 'string';
                    v.defaultValue = v.dropdown[0];
                    v.dropdown = v.dropdown.map(v => ({ label: v, value: v }));
                }
                return v;
            });
        }
        line = v.line;
        return v;
    })
    .filter(v => !('line' in v));

exports.types = types;
exports.widget = Widget;
