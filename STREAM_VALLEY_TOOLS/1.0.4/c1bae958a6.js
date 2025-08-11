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

function mathMean(myList) {
  return myList.reduce(function(x, y) {return x + y;}) / myList.length;
}

function mathMedian(myList) {
  var localList = myList.filter(function (x) {return typeof x === 'number';});
  if (!localList.length) return null;
  localList.sort(function(a, b) {return b - a;});
  if (localList.length % 2 === 0) {
    return (localList[localList.length / 2 - 1] + localList[localList.length / 2]) / 2;
  } else {
    return localList[(localList.length - 1) / 2];
  }
}

function mathModes(values) {
  var modes = [];
  var counts = [];
  var maxCount = 0;
  for (var i = 0; i < values.length; i++) {
    var value = values[i];
    var found = false;
    var thisCount;
    for (var j = 0; j < counts.length; j++) {
      if (counts[j][0] === value) {
        thisCount = ++counts[j][1];
        found = true;
        break;
      }
    }
    if (!found) {
      counts.push([value, 1]);
      thisCount = 1;
    }
    maxCount = Math.max(thisCount, maxCount);
  }
  for (var j = 0; j < counts.length; j++) {
    if (counts[j][1] === maxCount) {
        modes.push(counts[j][0]);
    }
  }
  return modes;
}

function mathStandardDeviation(numbers) {
  var n = numbers.length;
  if (!n) return null;
  var mean = numbers.reduce(function(x, y) {return x + y;}) / n;
  var variance = 0;
  for (var j = 0; j < n; j++) {
    variance += Math.pow(numbers[j] - mean, 2);
  }
  variance = variance / n;
  return Math.sqrt(variance);
}

function mathRandomList(list) {
  var x = Math.floor(Math.random() * list.length);
  return list[x];
}

function listsGetSortCompare(type, direction) {
  var compareFuncs = {
    "NUMERIC": function(a, b) {
        return Number(a) - Number(b)},
    "TEXT": function(a, b) {
        return a.toString() > b.toString() ? 1 : -1},
    "IGNORE_CASE": function(a, b) {
        return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1},
  };
  var compare = compareFuncs[type];
  return function(a, b) { return compare(a, b) * direction}
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



const types = {
    isInvisibleWidget: true,
    type: "STREAM_VALLEY_TOOLS",
    icon: "https://static.codemao.cn/coco/player/unstable/S1ESnXWti.image/svg+xml?hash=FtU8QVwSEsKE-4CpJcuXlBgVa-jz",
    title: "溪谷工具箱",
    version: "1.0.4",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
          this.widgetLog('欢迎使用溪谷工具箱，作者：溪谷VALLEY');
  var document = this.document;
  var window = this.window;
  var navigator = this.navigator;
  var history = this.history;const utils = require('utils');

    }

}
// 注释

  types['methods'].push({
      key: 'annotation',
      label: '',
      params: [
        {
            key: 'annotation_',
            label: '',
            valueType: 'multilineString',
        checkType: 'string',
            defaultValue: '注释',
        },],

      blockOptions: {
      color: (colourRgb(139, 139, 139)),
      icon: '无',
      generateBlock: true,
      inputsInline: true,
      space: 32,
  },
  })
  Widget.prototype.annotation = function (annotation_,) {

  }
// 运算

  types['methods'].push({
      key: 'z',
      label: '',
      params: [
        {
            key: 'z',
            label: '',
            valueType: 'string',
            dropdown: [
      { label: 'π', value: 'π', },

      { label: 'e', value: 'e', },

      { label: 'φ', value: 'φ', },

      { label: '√2', value: '√2', },

      { label: '√(1/2)', value: '√(1/2)', },

      { label: '∞', value: '∞', },
    ],
        },

  ],
      valueType: 'string',
      blockOptions: {
      color: (colourRgb(120, 200, 245)),
      icon: '无',
      generateBlock: true,
      inputsInline: true,
      space: 16,
  },
  })
  Widget.prototype.z = function (z,) {
        return (z == 'π' ? Math.PI : (z == 'e' ? Math.E : (z == 'φ' ? (1 + Math.sqrt(5)) / 2 : (z == '√2' ? Math.SQRT2 : (z == '√(1/2)' ? Math.SQRT1_2 : Infinity)))));
  }
  types['methods'].push({
      key: 'daXiaoXie',
      label: '转',
      params: [
        {
            key: 'dxx',
            label: '',
            valueType: 'string',
            dropdown: [
      { label: '大写', value: '大写', },

      { label: '小写', value: '小写', },

      { label: '首字母大写', value: '首字母大写', },
    ],
        },


        {
            key: 'contact',
            label: '',
            valueType: 'multilineString',
        checkType: 'string',
            defaultValue: '',
        },],
      valueType: 'string',
      blockOptions: {
      color: (colourRgb(120, 200, 245)),
      icon: '无',
      generateBlock: true,
      inputsInline: true,
      space: 16,
  },
  })
  Widget.prototype.daXiaoXie = function (dxx,contact,) {
        if (dxx == '大写') {
      return (contact.toUpperCase());} else {
      if (dxx == '小写') {
        return (contact.toLowerCase());} else {
        if (dxx == '首字母大写') {
          return (textToTitleCase(contact));} else {
          return 'NaN';}
      }
    }

  }
  types['methods'].push({
      key: 'jiang',
      label: '将',
      params: [
        {
            key: '1',
            label: '',
            valueType: 'multilineString',
        checkType: 'string',
            defaultValue: 11,
        },
        {
            key: '2',
            label: '限制在最低',
            valueType: 'number',
            defaultValue: 45,
        },
        {
            key: '3',
            label: '到最高',
            valueType: 'number',
            defaultValue: 14,
        },],
      valueType: 'number',
      blockOptions: {
      color: (colourRgb(120, 200, 245)),
      icon: '无',
      generateBlock: true,
      inputsInline: true,
      space: 16,
  },
  })
  Widget.prototype.replace = function (a,b,c,) {
        return (Math.min(Math.max(a, b), c));
  }

  types['methods'].push({
    key: 'replace',
      label: '',
      params: [
        {
            key: 'replace1',
            label: '把',
            valueType: 'multilineString',
        checkType: 'string',
            defaultValue: '',
        },
        {
            key: 'kind',
            label: '中的',
            valueType: 'string',
            dropdown: [
      { label: '第一个', value: '第一个', },

      { label: '所有', value: '所有', },
    ],
        },


        {
            key: 'replace2',
            label: '',
            valueType: 'multilineString',
        checkType: 'string',
            defaultValue: '',
        },
        {
            key: 'replace3',
            label: '替换为',
            valueType: 'multilineString',
        checkType: 'string',
            defaultValue: '',
        },],
      valueType: 'string',
      blockOptions: {
      color: (colourRgb(120, 200, 245)),
      icon: '无',
      generateBlock: true,
      inputsInline: true,
      space: 16,
  },
  })
  Widget.prototype.replace = function (replace1,kind,replace2,replace3,) {
        return (kind == '第一个' ? (replace1.replace(replace2,replace3)) : (replace1.replaceAll(replace2,replace3)));
  }
types['methods'].push({
  key: 'lookup',
  label: '查找',
  params: [
    {
      key: 'str1',
      label: '字符串',
      valueType: 'string',
      defaultValue: 'Hello, World!',
    },
    {
      key: 'str2',
      label: '从',
      valueType: 'string',
      defaultValue: 'e',
    },
    {
      key: 'str3',
      label: '到',
      valueType: 'string',
      defaultValue: 'r',
    },],
  valueType: 'string',
  blockOptions: {
    color: (colourRgb(120, 200, 245)),
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
  },
})
Widget.prototype.lookup = function (str1, str2, str3,) {
  return (str1.split(str2)[1].split(str3)[0]);
}
  types['methods'].push({
    key: 'escape',
      label: 'HTML转义',
      params: [
        {
            key: 'contact',
            label: '内容',
            valueType: 'multilineString',
        checkType: 'string',
            defaultValue: '<p>溪谷万岁！！！</p>',
        },],
      valueType: 'string',
      blockOptions: {
      color: (colourRgb(120, 200, 245)),
      icon: '无',
      generateBlock: true,
      inputsInline: true,
      space: 16,
  },
  })
  Widget.prototype.replace = function (contact,) {
        return (contact.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;'));
  }
  types['methods'].push({
      key: 'uri',
      label: 'URI',
      params: [
        {
            key: 'bjm',
            label: '',
            valueType: 'string',
            dropdown: [
      { label: '编码', value: '编码', },

      { label: '解码', value: '解码', },
    ],
        },


        {
            key: 'urii',
            label: '',
            valueType: 'string',
            defaultValue: "",
        },],
      valueType: 'string',
      blockOptions: {
      color: (colourRgb(120, 200, 245)),
      icon: '无',
      generateBlock: true,
      inputsInline: true,
      space: 32,
  },
  })
  Widget.prototype.uri = function (bjm,urii,) {
        if (bjm == '编码') {
      return (encodeURI(urii));} else {
      return (decodeURI(urii));}

  }
// 列表

  types['methods'].push({
      key: 'list',
      label: '求',
      params: [
        {
            key: 'kind',
            label: '',
            valueType: 'string',
            dropdown: [
      { label: '和', value: '和', },

      { label: '最大值', value: '最大值', },

      { label: '最小值', value: '最小值', },

      { label: '平均数', value: '平均数', },

      { label: '中位数', value: '中位数', },

      { label: '众数', value: '众数', },

      { label: '标准差', value: '标准差', },

      { label: '随机项', value: '随机项', },
    ],
        },


        {
            key: 'listt',
            label: '',
            valueType: 'string',
            defaultValue: '',
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
  Widget.prototype.list = function (kind,listt,) {
        if (kind == '和') {
      return (listt.split(',').reduce(function(x, y) {return x + y;}));} else {
      if (kind == '最大值') {
        return (Math.max.apply(null, listt.split(',')));} else {
        if (kind == '最小值') {
          return (Math.min.apply(null, listt.split(',')));} else {
          if (kind == '平均数') {
            return (mathMean(listt.split(',')));} else {
            if (kind == '中位数') {
              return (mathMedian(listt.split(',')));} else {
              if (kind == '众数') {
                return (mathModes(listt.split(',')));} else {
                if (kind == '标准差') {
                  return (mathStandardDeviation(listt.split(',')));} else {
                  if (kind == '随机项') {
                    return (mathRandomList(listt.split(',')));} else {
                    return 'NaN';}
                }
              }
            }
          }
        }
      }
    }

  }
  types['methods'].push({
      key: 'sork',
      label: '排序',
      params: [
        {
            key: 'kind0',
            label: '',
            valueType: 'string',
            dropdown: [
      { label: '按数字', value: '按数字', },

      { label: '按字母', value: '按字母', },

      { label: '按字母（忽略大小写）', value: '按字母（忽略大小写）', },
    ],
        },


        {
            key: 'kind0_',
            label: '',
            valueType: 'string',
            dropdown: [
      { label: '升序', value: '升序', },

      { label: '降序', value: '降序', },
    ],
        },


        {
            key: 'list0',
            label: '',
            valueType: 'string',
            defaultValue: '',
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
  Widget.prototype.sork = function (kind0,kind0_,list0,) {
        if (kind0_ == '升序') {
      if (kind0 == '按数字') {
        return (list0.split(',').slice().sort(listsGetSortCompare("NUMERIC", 1)));} else {
        if (kind0 == '按字母') {
          return (list0.split(',').slice().sort(listsGetSortCompare("TEXT", 1)));} else {
          if (kind0 == '按字母（忽略大小写）') {
            return (list0.split(',').slice().sort(listsGetSortCompare("TEXT", 1)));} else {
            return 'NaN';}
        }
      }
    } else {
      if (kind0 == '按数字') {
        return (list0.split(',').slice().sort(listsGetSortCompare("NUMERIC", -1)));} else {
        if (kind0 == '按字母') {
          return (list0.split(',').slice().sort(listsGetSortCompare("TEXT", -1)));} else {
          if (kind0 == '按字母（忽略大小写）') {
            return (list0.split(',').slice().sort(listsGetSortCompare("TEXT", -1)));} else {
            return 'NaN';}
        }
      }
    }

  }
  types['methods'].push({
      key: 'azimuthAngle',
      label: '方位角',
      params: [
        {
            key: 'x',
            label: 'x:',
            valueType: 'number',
            defaultValue: 114,
        },
        {
            key: 'y',
            label: 'y:',
            valueType: 'number',
            defaultValue: 514,
        },],
      valueType: 'string',
      blockOptions: {
      color: (colourRgb(254, 174, 138)),
      icon: '无',
      generateBlock: true,
      inputsInline: true,
      space: 32,
  },
  })
  Widget.prototype.azimuthAngle = function (x,y,) {
        return (Math.atan2(y, x) / Math.PI * 180);
  }
// 颜色

  types['methods'].push({
      key: 'random_color',
      label: '随机颜色',
      params: [],
      valueType: 'color',
      blockOptions: {
      color: (colourRgb(43, 201, 167)),
      icon: '无',
      generateBlock: true,
      inputsInline: true,
      space: 16,
  },
  })
  Widget.prototype.random_color = function () {
        return (colourRandom());
  }
  types['methods'].push({
      key: 'RGB',
      label: '颜色',
      params: [
        {
            key: 'R',
            label: '红',
            valueType: 'number',
            defaultValue: 11,
        },
        {
            key: 'G',
            label: '绿',
            valueType: 'number',
            defaultValue: 45,
        },
        {
            key: 'B',
            label: '蓝',
            valueType: 'number',
            defaultValue: 14,
        },],
      valueType: 'color',
      blockOptions: {
      color: (colourRgb(43, 201, 167)),
      icon: '无',
      generateBlock: true,
      inputsInline: true,
      space: 16,
  },
  })
  Widget.prototype.RGB = function (R,G,B,) {
        return (colourRgb(R, G, B));
  }
  types['methods'].push({
      key: 'mix',
      label: '混合颜色',
      params: [
        {
            key: '1',
            label: '颜色1',
            valueType: 'color',
            defaultValue: 11,
        },
        {
            key: '2',
            label: '颜色2',
            valueType: 'color',
            defaultValue: 45,
        },
        {
            key: 'a',
            label: '比例',
            valueType: 'number',
            defaultValue: 14,
        },],
      valueType: 'color',
      blockOptions: {
      color: (colourRgb(43, 201, 167)),
      icon: '无',
      generateBlock: true,
      inputsInline: true,
      space: 32,
  },
  })
  Widget.prototype.mix = function (a,b,c,) {
        return (colourBlend(a, b, c));
  }
// 侦测

  types['methods'].push({
      key: 'screen',
      label: '屏幕',
      params: [
        {
            key: 'screen',
            label: '',
            valueType: 'string',
            dropdown: [
      { label: '宽度', value: '宽度', },

      { label: '高度', value: '高度', },
    ],
        },

  ],
      valueType: 'number',
      blockOptions: {
      color: (colourRgb(119, 214, 87)),
      icon: '无',
      generateBlock: true,
      inputsInline: true,
      space: 16,
  },
  })
  Widget.prototype.screen = function (screen,) {
        return (screen == '宽度' ? (screen.width) : (screen.height));
  }
  types['methods'].push({
      key: 'screen_',
      label: '屏幕可用',
      params: [
        {
            key: 'screen',
            label: '',
            valueType: 'string',
            dropdown: [
      { label: '宽度', value: '宽度', },

      { label: '高度', value: '高度', },
    ],
        },

  ],
      valueType: 'number',
      blockOptions: {
      color: (colourRgb(119, 214, 87)),
      icon: '无',
      generateBlock: true,
      inputsInline: true,
      space: 16,
  },
  })
  Widget.prototype.screen_ = function (screen,) {
        return (screen == '宽度' ? (screen.availWidth) : (screen.availHeight));
  }
  types['methods'].push({
      key: 'colorDepth',
      label: '屏幕色深',
      params: [],
      valueType: 'number',
      blockOptions: {
      color: (colourRgb(119, 214, 87)),
      icon: '无',
      generateBlock: true,
      inputsInline: true,
      space: 16,
  },
  })
  Widget.prototype.colorDepth = function () {
        return (screen.colorDepth);
  }
  types['methods'].push({
      key: 'browserLanguage',
      label: '浏览器语言',
      params: [],
      valueType: 'string',
      blockOptions: {
      color: (colourRgb(119, 214, 87)),
      icon: '无',
      generateBlock: true,
      inputsInline: true,
      space: 16,
  },
  })
  Widget.prototype.browserLanguage = function () {
        return (navigator.language);
  }
  types['methods'].push({
      key: 'OS',
      label: '操作系统',
      params: [],
      valueType: 'string',
      blockOptions: {
      color: (colourRgb(119, 214, 87)),
      icon: '无',
      generateBlock: true,
      inputsInline: true,
      space: 16,
  },
  })
  Widget.prototype.OS = function () {
        return (navigator.platform);
  }
  types['methods'].push({
      key: 'zzz',
      label: '当前界面',
      params: [
        {
            key: 'zzz',
            label: '',
            valueType: 'string',
            dropdown: [
      { label: 'URL', value: 'URL', },

      { label: 'URL路径名', value: 'URL路径名', },

      { label: '主机域名', value: '主机域名', },

      { label: '主机端口', value: '主机端口', },
    ],
        },

  ],
      valueType: 'number',
      blockOptions: {
      color: (colourRgb(119, 214, 87)),
      icon: '无',
      generateBlock: true,
      inputsInline: true,
      space: 16,
  },
  })
  Widget.prototype.zzz = function (zzz,) {
        return (screen == 'URL' ? (window.location.href) : (screen == 'URL路径名' ? (window.location.pathname) : (screen == '主机域名' ? (window.location.hostname) : (window.location.port))));
  }
  types['methods'].push({
      key: 'internet',
      label: '是否有网',
      params: [],
      valueType: 'boolean',
      blockOptions: {
      color: (colourRgb(119, 214, 87)),
      icon: '无',
      generateBlock: true,
      inputsInline: true,
      space: 16,
  },
  })
  Widget.prototype.internet = function () {
        return (navigator.onLine);
  }
  types['methods'].push({
      key: 'DB',
      label: '是否打包',
      params: [],
      valueType: 'boolean',
      blockOptions: {
      color: (colourRgb(119, 214, 87)),
      icon: '无',
      generateBlock: true,
      inputsInline: true,
      space: 32,
  },
  })
  Widget.prototype.DB = function () {
        return (utils.isNative());
  }

/*make by cyan-b2la*/
; (function () {
    for (var i = 0; i < types['methods'].length; i ++) {
        types['methods'][i]['blockOptions']['callMethodLabel'] = false;
    };
})();
/*
 功能：
 控件去掉调用标签
 使用方法：
 在控件方面加上这个代码即可
 切记：
 这段代码一定要在最后三行前面加上！
*/

exports.types = types;
exports.widget = Widget;
