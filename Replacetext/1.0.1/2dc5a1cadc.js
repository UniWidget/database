const http = require('http');

const types = {
    isInvisibleWidget: true,
    type: "Replacetext",
    icon: "https://cdn.cocotais.cn/project/waddle-2/logo/waddle2-logo.svg",
    title: "替换文本",
    version: "1.0.1",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
          console.log('敏感词检测API请求参数：https://v.api.aa1.cn/api/api-mgc/index.php?msg=');
  types.docs={url:"https://www.yuque.com/g/wodemaya-ehvj0/rcpffo/wetal4xv52agsmg1/collaborator/join?token=b1KdAAmNJwMyrXFx&source=doc_collaborator# 《替换文本》"};
  types.platforms=["android","ios","web"]
    }

}

types['methods'].push({
    key: 'Subject',
    label: '替换文本（建议搭配敏感词检测API实现替换敏感词）',
    params: [
      {
          key: 'Thetexttoreplace',
          label: '替换',
          valueType: 'string',
          defaultValue: '🙄💅',
      },
      {
          key: 'Whatyouwanttoreplace',
          label: '中的',
          valueType: 'string',
          defaultValue: '🙄💅',
      },
      {
          key: 'Replacewith',
          label: '替换为',
          valueType: 'string',
          defaultValue: '🙄💅',
      },
      {
          key: 'replacement',
          label: '只替换',
          valueType: 'string',
          dropdown: [
    { label: '第一个', value: '第一个', },

    { label: '所有', value: '所有', },
  ],
      },

],
    valueType: 'string',

})
Widget.prototype.Subject = function (Thetexttoreplace,Whatyouwanttoreplace,Replacewith,replacement,) {
      if (replacement == '第一个') {
    return (Thetexttoreplace.replace(Whatyouwanttoreplace,Replacewith));}
  if (replacement == '所有') {
    return (Thetexttoreplace.replaceAll(Whatyouwanttoreplace,Replacewith));}

}
types['methods'].push({
    key: 'aaa',
    label: '敏感词检测API（由夏柔API提供支持！）使用方法看控件配置中的文档链接',
    params: [],
    valueType: 'string',

})
Widget.prototype.aaa = function () {
      return 'https://v.api.aa1.cn/api/api-mgc/index.php?msg=';
}
exports.types = types;
exports.widget = Widget;
