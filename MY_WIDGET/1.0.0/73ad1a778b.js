function textToTitleCase(str) {
  return str.replace(/\S+/g,
      function(txt) {return txt[0].toUpperCase() + txt.substring(1).toLowerCase();});
}



const types = {
  isInvisibleWidget: true,
  type: "MY_WIDGET",
  icon: "https://waddle.coco-central.cn/static/img/logo.svg",
  title: "字符串工具",
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
  key: 'h1',
  label: '是空的',
  valueType: 'boolean',
  params: [

  {
    key: 'c1',
    label: '文本',
    valueType: 'string',
    defaultValue: '',
  },


  ],
})
Widget.prototype.h1 = function (c1,) {
    return (!(c1).length);;
}

types['methods'].push({
  key: 'h2',
  label: '在',
  valueType: 'number',
  params: [

  {
    key: 'c1',
    label: '文本',
    valueType: 'string',
    defaultValue: 'hello',
  },


  {
    key: 'c2',
    label: '中 搜索',
    valueType: 'string',
    dropdown: [
  	    { label: '第一次出现', value: '第一次出现', },
    { label: '最后一次出现', value: '最后一次出现', },
  ],
  },


  {
    key: 'c3',
    label: '的文本',
    valueType: 'string',
    defaultValue: 'o',
  },


  ],
})
Widget.prototype.h2 = function (c1,c2,c3,) {
    if ((c2) == '第一次出现') {
    return ((c1).indexOf(c3) + 1);} else {
    return ((c1).lastIndexOf(c3) + 1);}
;
}

types['methods'].push({
  key: 'h3',
  label: '将',
  valueType: 'string',
  params: [

  {
    key: 'c1',
    label: '文本',
    valueType: 'string',
    defaultValue: 'hello',
  },


  {
    key: 'c2',
    label: '',
    valueType: 'string',
    dropdown: [
  	    { label: '转换为大写', value: '转换为大写', },
    { label: '转换为小写', value: '转换为小写', },
    { label: '转换为首字母大写', value: '转换为首字母大写', },
  ],
  },


  ],
})
Widget.prototype.h3 = function (c1,c2,) {
    if ((c2) == '转换为大写') {
    return ((c1).toUpperCase());} else if ((c2) == '转换为小写') {
    return ((c1).toLowerCase());} else {
    return (textToTitleCase(c1));}
;
}

types['methods'].push({
  key: 'h4',
  label: '将',
  valueType: 'string',
  params: [

  {
    key: 'c1',
    label: '文本',
    valueType: 'string',
    defaultValue: '   hello   ',
  },


  {
    key: 'c2',
    label: '',
    valueType: 'string',
    dropdown: [
  	    { label: '清除两侧空白', value: '清除两侧空白', },
    { label: '清除左侧空白', value: '清除左侧空白', },
    { label: '清除右侧空白', value: '清除右侧空白', },
  ],
  },


  ],
})
Widget.prototype.h4 = function (c1,c2,) {
    if ((c2) == '清除两侧空白') {
    return ((c1).trim());} else if ((c2) == '清除左侧空白') {
    return ((c1).replace(/^[\s\xa0]+/, ''));} else {
    return ((c1).replace(/[\s\xa0]+$/, ''));}
;
}

exports.types = types;
exports.widget = Widget;
