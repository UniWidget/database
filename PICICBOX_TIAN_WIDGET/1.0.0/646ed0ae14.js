var document = this.document;
var window = this.window;
var navigator = this.navigator;
var history = this.history;const utils = require('utils');

const types = {
    isInvisibleWidget: true,
    type: "PICICBOX_TIAN_WIDGET",
    icon: "icon-widget-slider",
    title: "工具箱",
    version: "1.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
          this.widgetLog('控件作者：天上来的熊孩子（2639194612）');

    }

}

types['methods'].push({
    key: 'cipaut',
    label: '是否为打包后的客户端',
    params: [],
    valueType: 'boolean',
    blockOptions: {
    color: '#3333ff',
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.cipaut = function () {
      return (utils.isNative());
}
types['methods'].push({
    key: 'ifeac',
    label: '如果',
    params: [
      {
          key: 'bool',
          label: '',
          valueType: 'boolean',
          defaultValue: null,
      },
      {
          key: 'cm1',
          label: '返回',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: '成立',
      },
      {
          key: 'cm2',
          label: '否则 返回',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: '不成立',
      },],
    valueType: ['string','number','boolean','array','color','object',],
    blockOptions: {
    color: '#3333ff',
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.ifeac = function (bool,cm1,cm2,) {
      return (bool ? cm1 : cm2);
}
types['methods'].push({
    key: 'strmon',
    label: '多行输入',
    params: [
      {
          key: 'str',
          label: '',
          valueType: 'multilineString',
      checkType: 'string',
          defaultValue: '文本',
      },],
    valueType: 'string',
    blockOptions: {
    color: '#3333ff',
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.strmon = function (str,) {
      return str;
}
types['methods'].push({
    key: 'jyx',
    label: '',
    params: [
      {
          key: 'cz',
          label: '',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: '',
      },],

    blockOptions: {
    color: '#3333ff',
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 20,
},
})
Widget.prototype.jyx = function (cz,) {

}
types['methods'].push({
    key: 'and',
    label: '位运算',
    params: [
      {
          key: 'c1',
          label: '',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: '',
      },
      {
          key: 'c2',
          label: '',
          valueType: 'string',
          dropdown: [
    { label: '&', value: '&', },

    { label: '|', value: '|', },

    { label: '^', value: '^', },
  ],
      },


      {
          key: 'c3',
          label: '',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: '',
      },],
    valueType: 'number',
    blockOptions: {
    color: '#33cc00',
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.and = function (c1,c2,c3,) {
      return (c2 == '&' ? (c1 & c3) : (c2 == '|' ? (c1 | c3) : (c1 ^ c3)));
}
types['methods'].push({
    key: 'math',
    label: '',
    params: [
      {
          key: 'c',
          label: '',
          valueType: 'string',
          dropdown: [
    { label: 'e', value: 'e', },

    { label: 'π', value: 'π', },
  ],
      },

],
    valueType: 'number',
    blockOptions: {
    color: '#33cc00',
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.math = function (c,) {
      return (c == 'π' ? (Math.PI) : (Math.E));
}
types['methods'].push({
    key: 'agb',
    label: '转化字典',
    params: [
      {
          key: 'text',
          label: '文本',
          valueType: 'string',
          defaultValue: '',
      },],
    valueType: 'object',
    blockOptions: {
    color: '#33cc00',
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 20,
},
})
Widget.prototype.agb = function (text,) {
      return (JSON.parse(text));
}
types['methods'].push({
    key: 'webtf',
    label: '网络状态',
    params: [],
    valueType: 'boolean',
    blockOptions: {
    color: '#ff6600',
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.webtf = function () {
      return (navigator.onLine);
}
types['methods'].push({
    key: 'url',
    label: '当前url',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: '#ff6600',
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.url = function () {
      return (window.location.href);
}
exports.types = types;
exports.widget = Widget;
