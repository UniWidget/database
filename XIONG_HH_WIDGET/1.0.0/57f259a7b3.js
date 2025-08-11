function colourRgb(r, g, b) {
  r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);
  g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);
  b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);
  return '#' + r + g + b;
}

function textToTitleCase(str) {
  return str.replace(/\S+/g,
      function(txt) {return txt[0].toUpperCase() + txt.substring(1).toLowerCase();});
}

function colourRandom() {
  var num = Math.floor(Math.random() * Math.pow(2, 24));
  return '#' + ('00000' + num.toString(16)).substr(-6);
}

function colourBlend(c1, c2, ratio) {
  ratio = Math.max(Math.min(Number(ratio), 1), 0);
  var r1 = parseInt(c1.substring(1, 3), 16);
  var g1 = parseInt(c1.substring(3, 5), 16);
  var b1 = parseInt(c1.substring(5, 7), 16);
  var r2 = parseInt(c2.substring(1, 3), 16);
  var g2 = parseInt(c2.substring(3, 5), 16);
  var b2 = parseInt(c2.substring(5, 7), 16);
  var r = Math.round(r1 * (1 - ratio) + r2 * ratio);
  var g = Math.round(g1 * (1 - ratio) + g2 * ratio);
  var b = Math.round(b1 * (1 - ratio) + b2 * ratio);
  r = ('0' + (r || 0).toString(16)).slice(-2);
  g = ('0' + (g || 0).toString(16)).slice(-2);
  b = ('0' + (b || 0).toString(16)).slice(-2);
  return '#' + r + g + b;
}


var document = this.document;
var window = this.window;
var navigator = this.navigator;
var history = this.history;const utils = require('utils');

const types = {
    isInvisibleWidget: true,
    type: "XIONG_HH_WIDGET",
    icon: "icon-widget-actor",
    title: "熊牌工具箱",
    version: "1.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);

    }

}

types['events'].push({
    key: 'bat_con',
    label: '收到全局广播',
    params: [
      {
          key: 'name',
          label: '广播名称',
          valueType: 'string',
      },],
    blockOptions: {
    color: '#ffbb55',
    icon: 'https://creation.codemao.cn/coconut/web/1.20.0/static/media/cloud.af9d6145.svg',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})

types['methods'].push({
    key: 'bat',
    label: '发送屏幕广播',
    params: [
      {
          key: 'name',
          label: '名称',
          valueType: 'string',
          defaultValue: '广播',
      },],

    blockOptions: {
    color: (colourRgb(96, 143, 238)),
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 30,
},
})
Widget.prototype.bat = function (name,) {
      this.emit("bat_con"  , name);
}
types['methods'].push({
    key: 'random',
    label: '0-1间随机小数',
    params: [],
    valueType: 'number',
    blockOptions: {
    color: (colourRgb(254, 174, 138)),
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.random = function () {
      return (Math.random());
}
types['methods'].push({
    key: 'none',
    label: '',
    params: [
      {
          key: 'text',
          label: '文本',
          valueType: 'string',
          defaultValue: '',
      },
      {
          key: 'tell',
          label: '',
          valueType: 'string',
          dropdown: [
    { label: '为空？', value: '为空？', },
  ],
      },

],
    valueType: 'boolean',
    blockOptions: {
    color: (colourRgb(254, 174, 138)),
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.none = function (text,tell,) {
      return (!text.length);
}
types['methods'].push({
    key: 'dxx',
    label: '将',
    params: [
      {
          key: 'text',
          label: '文本',
          valueType: 'string',
          defaultValue: 'hi',
      },
      {
          key: 'tell',
          label: '转',
          valueType: 'string',
          dropdown: [
    { label: '大写', value: '大写', },

    { label: '小写', value: '小写', },

    { label: '首字母大写', value: '首字母大写', },
  ],
      },

],
    valueType: 'string',
    blockOptions: {
    color: (colourRgb(254, 174, 138)),
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.dxx = function (text,tell,) {
      if (tell == '大写') {
    return (text.toUpperCase());} else if (tell == '小写') {
    return (text.toLowerCase());} else {
    return (textToTitleCase(text));}

}
types['methods'].push({
    key: 'HTMLzh',
    label: '转义HTML',
    params: [
      {
          key: 'text',
          label: '',
          valueType: 'string',
          defaultValue: '<p>hello CoCo!</p>',
      },],
    valueType: 'string',
    blockOptions: {
    color: (colourRgb(254, 174, 138)),
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.HTMLzh = function (text,) {
      return (text.replaceAll('<','&#60;').replaceAll('>','&#62;'));
}
types['methods'].push({
    key: 'dhtext',
    label: '',
    params: [
      {
          key: 'text',
          label: '',
          valueType: 'multilineString',
      checkType: 'string',
          defaultValue: '',
      },],
    valueType: 'number',
    blockOptions: {
    color: (colourRgb(254, 174, 138)),
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 30,
},
})
Widget.prototype.dhtext = function (text,) {
      return text;
}
types['methods'].push({
    key: 'jzx',
    label: '',
    params: [
      {
          key: 'css',
          label: '',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: '',
      },],

    blockOptions: {
    color: (colourRgb(104, 205, 255)),
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.jzx = function (css,) {

}
types['methods'].push({
    key: 'win_print',
    label: '浏览器输出',
    params: [
      {
          key: 'text',
          label: '文本',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: '输出内容',
      },],

    blockOptions: {
    color: (colourRgb(104, 205, 255)),
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.win_print = function (text,) {
      window.alert(text);

}
types['methods'].push({
    key: 'iffh',
    label: '如果',
    params: [
      {
          key: 'bolen',
          label: '',
          valueType: 'boolean',
          defaultValue: true,
      },
      {
          key: 'T',
          label: '返回',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: '',
      },
      {
          key: 'F',
          label: '否则返回',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: '',
      },],
    valueType: ['string','number','boolean','array','color','object',],
    blockOptions: {
    color: (colourRgb(104, 205, 255)),
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.iffh = function (bolen,T,F,) {
      return (bolen ? T : F);
}
types['methods'].push({
    key: 'util',
    label: '客户端已打包？',
    params: [],
    valueType: 'boolean',
    blockOptions: {
    color: (colourRgb(104, 205, 255)),
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.util = function () {
      return (utils.isNative());
}
types['methods'].push({
    key: 'llq',
    label: '网络状态',
    params: [],
    valueType: 'boolean',
    blockOptions: {
    color: (colourRgb(104, 205, 255)),
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.llq = function () {
      return (navigator.onLine);
}
types['methods'].push({
    key: 'ccxt',
    label: '操作系统',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: (colourRgb(104, 205, 255)),
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 30,
},
})
Widget.prototype.ccxt = function () {
      return (navigator.platform);
}
types['methods'].push({
    key: 'colorrandom',
    label: '随机颜色',
    params: [],
    valueType: 'color',
    blockOptions: {
    color: (colourRgb(231, 108, 234)),
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.colorrandom = function () {
      return (colourRandom());
}
types['methods'].push({
    key: 'colorJD',
    label: '混合',
    params: [
      {
          key: 'c1',
          label: '',
          valueType: 'color',
          defaultValue: '#ff0000',
      },
      {
          key: 'c2',
          label: '与',
          valueType: 'color',
          defaultValue: '#3366ff',
      },
      {
          key: 'num',
          label: '比例',
          valueType: 'number',
          defaultValue: 0.5,
      },],
    valueType: 'color',
    blockOptions: {
    color: (colourRgb(231, 108, 234)),
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 30,
},
})
Widget.prototype.colorJD = function (c1,c2,num,) {
      return (colourBlend(c1, c2, num));
}
/*make by cyan-b2la*/
; (function () {
    for (var i = 0; i < types['methods'].length; i ++) {
        types['methods'][i]['blockOptions']['callMethodLabel'] = false;
    };
})();
exports.types = types;
exports.widget = Widget;