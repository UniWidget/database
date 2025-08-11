const types = {
    isInvisibleWidget: true,
    type: "MY_WIDGET",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "通知",
    version: "1.0.4",
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
    key: 'methodName',
    label: '通知',
    params: [
      {
          key: 'title',
          label: '通知标题',
          valueType: 'string',
          defaultValue: '作者：',
      },
      {
          key: 'body',
          label: '通知内容',
          valueType: 'string',
          defaultValue: 'ZouBochen',
      },
      {
          key: 'icon',
          label: '图标',
          valueType: 'string',
          defaultValue: '/favicon.ico',
      },],


})
Widget.prototype.methodName = function (title,body,icon,) {
      var n=new Notification(title,{body:body,icon:icon});
}
exports.types = types;
exports.widget = Widget;
