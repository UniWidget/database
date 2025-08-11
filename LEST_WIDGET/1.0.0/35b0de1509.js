function listsGetSortCompare(type, direction) {
  var compareFuncs = {
    "NUMERIC": function(a, b) {
        return Number(a) - Number(b); },
    "TEXT": function(a, b) {
        return a.toString() > b.toString() ? 1 : -1; },
    "IGNORE_CASE": function(a, b) {
        return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },
  };
  var compare = compareFuncs[type];
  return function(a, b) { return compare(a, b) * direction; }
}

function mathMean(myList) {
  return myList.reduce(function(x, y) {return x + y;}) / myList.length;
}

function listsRepeat(value, n) {
  var array = [];
  for (var i = 0; i < n; i++) {
    array[i] = value;
  }
  return array;
}



const types = {
    isInvisibleWidget: true,
    type: "LEST_WIDGET",
    icon: "https://creation.codemao.cn/716/appcraft/IMAGE_hjPo16YqJ__1657281509597",
    title: "列表工具",
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

types['methods'].push({
    key: 'nlllest',
    label: '空列表',
    params: [],
    valueType: 'array',
    blockOptions: {
    color: '#009900',
    icon: 'https://creation.codemao.cn/716/appcraft/IMAGE_yLqXO92XZc_1657281506242',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.nlllest = function () {
      return [];
}
types['methods'].push({
    key: 'backsl',
    label: '在',
    params: [
      {
          key: 'lest',
          label: '列表',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: '',
      },
      {
          key: 'text',
          label: '中寻找最后一个',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: '',
      },],
    valueType: 'number',
    blockOptions: {
    color: '#009900',
    icon: 'https://creation.codemao.cn/716/appcraft/IMAGE_yLqXO92XZc_1657281506242',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.backsl = function (lest,text,) {
      return (lest.lastIndexOf(text) + 1);
}
types['methods'].push({
    key: 'lestztext',
    label: '拆分列表为文本',
    params: [
      {
          key: 'lest',
          label: '列表',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: '',
      },
      {
          key: 'text',
          label: '分隔符',
          valueType: 'string',
          defaultValue: '',
      },],
    valueType: 'string',
    blockOptions: {
    color: '#009900',
    icon: 'https://creation.codemao.cn/716/appcraft/IMAGE_yLqXO92XZc_1657281506242',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.lestztext = function (lest,text,) {
      return (lest.join(text));
}
types['methods'].push({
    key: 'lestx',
    label: '排序',
    params: [
      {
          key: 'lest',
          label: '列表',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: '',
      },
      {
          key: 'ps',
          label: '按',
          valueType: 'string',
          dropdown: [
    { label: '数字', value: '数字', },

    { label: '字母', value: '字母', },
  ],
      },


      {
          key: 'x',
          label: '',
          valueType: 'string',
          dropdown: [
    { label: '升序', value: '升序', },

    { label: '降序', value: '降序', },
  ],
      },

],
    valueType: 'array',
    blockOptions: {
    color: '#009900',
    icon: 'https://creation.codemao.cn/716/appcraft/IMAGE_yLqXO92XZc_1657281506242',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.lestx = function (lest,ps,x,) {
      if (ps == '数字') {
    if (x == '升序') {
      return (lest.slice().sort(listsGetSortCompare("NUMERIC", 1)));} else {
      return (lest.slice().sort(listsGetSortCompare("NUMERIC", -1)));}
  } else {
    if (x == '升序') {
      return (lest.slice().sort(listsGetSortCompare("TEXT", 1)));} else {
      return (lest.slice().sort(listsGetSortCompare("TEXT", -1)));}
  }

}
types['methods'].push({
    key: 'lestxl',
    label: '',
    params: [
      {
          key: 'lest',
          label: '列表',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: '',
      },
      {
          key: 'ps',
          label: '的',
          valueType: 'string',
          dropdown: [
    { label: '总和值', value: '总和值', },

    { label: '最大值', value: '最大值', },

    { label: '最小值', value: '最小值', },

    { label: '平均值', value: '平均值', },
  ],
      },

],
    valueType: 'array',
    blockOptions: {
    color: '#009900',
    icon: 'https://creation.codemao.cn/716/appcraft/IMAGE_yLqXO92XZc_1657281506242',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.lestxl = function (lest,ps,) {
      return (ps == '总和值' ? lest.reduce(function(x, y) {return x + y;}) : (ps == '最大值' ? Math.max.apply(null, lest) : (ps == '最小值' ? Math.min.apply(null, lest) : mathMean(lest))));
}
types['methods'].push({
    key: 'luoji',
    label: '如果',
    params: [
      {
          key: 'bol',
          label: '',
          valueType: 'boolean',
          defaultValue: true,
      },
      {
          key: 'C1',
          label: '返回',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: '',
      },
      {
          key: 'CB',
          label: '否则返回',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: '',
      },],
    valueType: ['string','number','boolean','array','color','object',],
    blockOptions: {
    color: '#009900',
    icon: 'https://creation.codemao.cn/716/appcraft/IMAGE_yLqXO92XZc_1657281506242',
    generateBlock: true,
    inputsInline: false,
    space: 16,
},
})
Widget.prototype.luoji = function (bol,C1,CB,) {
      return (bol ? C1 : CB);
}
types['methods'].push({
    key: 'lestsusu',
    label: '快速列表',
    params: [
      {
          key: 'C1',
          label: '',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: '',
      },
      {
          key: 'C2',
          label: '',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: '',
      },],
    valueType: 'array',
    blockOptions: {
    color: '#009900',
    icon: 'https://creation.codemao.cn/716/appcraft/IMAGE_yLqXO92XZc_1657281506242',
    generateBlock: true,
    inputsInline: false,
    space: 16,
},
})
Widget.prototype.lestsusu = function (C1,C2,) {
      return [C1, C2];
}
types['methods'].push({
    key: 'weikong',
    label: '判断是否为空',
    params: [
      {
          key: 'list',
          label: '列表',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: '',
      },],
    valueType: 'boolean',
    blockOptions: {
    color: '#009900',
    icon: 'https://creation.codemao.cn/716/appcraft/IMAGE_yLqXO92XZc_1657281506242',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.weikong = function (list,) {
      return (!list.length);
}
types['methods'].push({
    key: 'qie',
    label: '切割',
    params: [
      {
          key: 'list',
          label: '列表',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: '',
      },
      {
          key: 'C1',
          label: '开始位置',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: 0,
      },
      {
          key: 'C2',
          label: '结束位置',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: 5,
      },],
    valueType: 'array',
    blockOptions: {
    color: '#009900',
    icon: 'https://creation.codemao.cn/716/appcraft/IMAGE_yLqXO92XZc_1657281506242',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.qie = function (list,C1,C2,) {
      return (list.slice((C1 - 1), C2));
}
types['methods'].push({
    key: 'forx',
    label: '建立重复',
    params: [
      {
          key: 'list',
          label: '列表',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: '',
      },
      {
          key: 'C',
          label: '次数',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: 5,
      },],
    valueType: 'array',
    blockOptions: {
    color: '#009900',
    icon: 'https://creation.codemao.cn/716/appcraft/IMAGE_yLqXO92XZc_1657281506242',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.forx = function (list,C,) {
      return (listsRepeat(list, C));
}
exports.types = types;
exports.widget = Widget;
