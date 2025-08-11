const types = {
    isInvisibleWidget: true,
    type: "JERS_SHARE_WIDGET",
    icon: "https://www.cloudroo.top/favicon.ico",
    title: "调起系统分享",
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
    key: 'navigatorShare',
    label: '调起系统分享',
    params: [
      {
          key: 'title',
          label: '分享标题',
          valueType: 'string',
          defaultValue: '分享标题',
      },
      {
          key: 'text',
          label: '分享描述',
          valueType: 'string',
          defaultValue: '分享描述',
      },
      {
          key: 'url',
          label: '分享内容',
          valueType: 'string',
          defaultValue: '链接、文件、文字等',
      },],

    blockOptions: {
    color: '#ffbb55',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.navigatorShare = function (title,text,url) {
navigator.share({
        title:title ,
        text:text,
        url:url,
      });
}
exports.types = types;
exports.widget = Widget;