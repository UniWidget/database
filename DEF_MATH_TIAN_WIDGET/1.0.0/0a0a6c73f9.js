function colourRgb(r, g, b) {
  r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);
  g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);
  b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);
  return '#' + r + g + b;
}



const types = {
    isInvisibleWidget: true,
    type: "DEF_MATH_TIAN_WIDGET",
    icon: "icon-toolbox-operation",
    title: "数学公式",
    version: "1.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
          this.widgetLog('控件作者：天上来的熊孩子（QQ：2639194612）');
  this.widgetLog('盗版可耻，正版光荣！');

    }

}

types['methods'].push({
    key: 'bi',
    label: '',
    params: [
      {
          key: 'frt',
          label: '',
          valueType: 'number',
          defaultValue: 2,
      },
      {
          key: 'sed',
          label: ':',
          valueType: 'number',
          defaultValue: 3,
      },],
    valueType: 'number',
    blockOptions: {
    color: (colourRgb(240, 170, 139)),
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.bi = function (frt,sed,) {
      return (frt / sed);
}
types['methods'].push({
    key: 'fenshu',
    label: '',
    params: [
      {
          key: 'frt',
          label: '',
          valueType: 'number',
          defaultValue: 2,
      },
      {
          key: 'fsx',
          label: '——',
          valueType: 'object',
          defaultValue: "",
      },
      {
          key: 'sed',
          label: '',
          valueType: 'number',
          defaultValue: 3,
      },],
    valueType: 'number',
    blockOptions: {
    color: (colourRgb(240, 170, 139)),
    icon: '无',
    generateBlock: true,
    inputsInline: false,
    space: 16,
},
})
Widget.prototype.fenshu = function (frt,fsx,sed,) {
      return (frt / sed);
}
types['methods'].push({
    key: 'a',
    label: '常数',
    params: [
      {
          key: 'e',
          label: '',
          valueType: 'string',
          dropdown: [
    { label: 'π', value: 'π', },

    { label: 'e', value: 'e', },

    { label: 'φ', value: 'φ', },

    { label: 'sqrt(2)', value: 'sqrt(2)', },

    { label: 'sqrt(½)', value: 'sqrt(½)', },

    { label: '∞', value: '∞', },
  ],
      },

],
    valueType: 'number',
    blockOptions: {
    color: (colourRgb(240, 170, 139)),
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.a = function (e,) {
      return (e == 'π' ? Math.PI : (e == 'e' ? Math.E : (e == 'φ' ? (1 + Math.sqrt(5)) / 2 : (e == 'sqrt(2)' ? Math.SQRT2 : (e == 'sqrt(½)' ? Math.SQRT1_2 : Infinity)))));
}
types['methods'].push({
    key: 'atan',
    label: '方位角',
    params: [
      {
          key: 'x',
          label: 'x',
          valueType: 'number',
          defaultValue: 1,
      },
      {
          key: 'y',
          label: 'y',
          valueType: 'number',
          defaultValue: 2,
      },],
    valueType: 'number',
    blockOptions: {
    color: (colourRgb(240, 170, 139)),
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.atan = function (x,y,) {
      return (Math.atan2(y, x) / Math.PI * 180);
}
types['methods'].push({
    key: 'dch',
    label: '等差和',
    params: [
      {
          key: 'a',
          label: '首项',
          valueType: 'number',
          defaultValue: 1,
      },
      {
          key: 'b',
          label: '末项',
          valueType: 'number',
          defaultValue: 100,
      },
      {
          key: 'l',
          label: '项数',
          valueType: 'number',
          defaultValue: 100,
      },],
    valueType: 'number',
    blockOptions: {
    color: (colourRgb(240, 170, 139)),
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.dch = function (a,b,l,) {
      return (((a + b) * l) / 2);
}
types['methods'].push({
    key: 'bfz',
    label: '',
    params: [
      {
          key: 'm',
          label: '',
          valueType: 'number',
          defaultValue: 50,
      },
      {
          key: 'bfh',
          label: '%',
          valueType: 'object',
          defaultValue: "",
      },],
    valueType: 'number',
    blockOptions: {
    color: (colourRgb(240, 170, 139)),
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.bfz = function (m,bfh,) {
      return (m / 100);
}
types['methods'].push({
    key: 'ds',
    label: '获取倒数',
    params: [
      {
          key: 'm',
          label: '',
          valueType: 'number',
          defaultValue: 5,
      },],
    valueType: 'number',
    blockOptions: {
    color: (colourRgb(240, 170, 139)),
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 30,
},
})
Widget.prototype.ds = function (m,) {
      return (1 / m);
}
types['methods'].push({
    key: 'ymj',
    label: '圆的面积（π取3.14）',
    params: [
      {
          key: 'r',
          label: '半径',
          valueType: 'number',
          defaultValue: 4,
      },],
    valueType: 'number',
    blockOptions: {
    color: (colourRgb(240, 170, 139)),
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.ymj = function (r,) {
      return (Math.pow(r, 2) * 3.14);
}
types['methods'].push({
    key: 'yzc',
    label: '圆的周长（π取3.14）',
    params: [
      {
          key: 'r',
          label: '半径',
          valueType: 'number',
          defaultValue: 4,
      },],
    valueType: 'number',
    blockOptions: {
    color: (colourRgb(240, 170, 139)),
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.yzc = function (r,) {
      return (r * 2 * 3.14);
}
types['methods'].push({
    key: 'piqz',
    label: 'π（取3.14）的',
    params: [
      {
          key: 'b',
          label: '倍数',
          valueType: 'number',
          defaultValue: 5,
      },],
    valueType: 'number',
    blockOptions: {
    color: (colourRgb(240, 170, 139)),
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 20,
},
})
Widget.prototype.piqz = function (b,) {
      return (b * 3.14);
}
types['methods'].push({
    key: 'plf',
    label: '数字',
    params: [
      {
          key: 'm',
          label: '',
          valueType: 'number',
          defaultValue: 5,
      },
      {
          key: 'ms',
          label: '的',
          valueType: 'string',
          dropdown: [
    { label: '平方', value: '平方', },

    { label: '立方', value: '立方', },

    { label: '四次方', value: '四次方', },

    { label: '五次方', value: '五次方', },

    { label: '根号', value: '根号', },
  ],
      },

],
    valueType: 'number',
    blockOptions: {
    color: (colourRgb(240, 170, 139)),
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.plf = function (m,ms,) {
      return (ms == '平方' ? Math.pow(m, 2) : (ms == '立方' ? Math.pow(m, 3) : (ms == '四次方' ? Math.pow(m, 4) : (ms == '五次方' ? Math.pow(m, 5) : Math.sqrt(m)))));
}
types['methods'].push({
    key: 'jzzh',
    label: '将',
    params: [
      {
          key: 'm',
          label: '数字',
          valueType: 'number',
          defaultValue: 5,
      },
      {
          key: 'jz',
          label: '转换成进制',
          valueType: 'number',
          defaultValue: 2,
      },],
    valueType: 'number',
    blockOptions: {
    color: (colourRgb(240, 170, 139)),
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.jzzh = function (m,jz,) {
      return (m).toString(jz);
}
exports.types = types;
exports.widget = Widget;