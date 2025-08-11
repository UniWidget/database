const types = {
    isInvisibleWidget: true,
    type: "CONSOLE_WIDGET",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "F12控制台",
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
    key: 'log',
    label: '输出',
    params: [
      {
          key: 'content',
          label: '内容',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: '控制台调试信息',
      },],


})
Widget.prototype.log = function (content,) {
      console.log(content);

}
types['methods'].push({
    key: 'warn',
    label: '警告',
    params: [
      {
          key: 'content',
          label: '内容',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: '控制台调试信息',
      },],


})
Widget.prototype.warn = function (content,) {
      console.warn(content);

}
types['methods'].push({
    key: 'error',
    label: '错误',
    params: [
      {
          key: 'content',
          label: '内容',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: '控制台调试信息',
      },],


})
Widget.prototype.error = function (content,) {
      console.error(content);

}
types['methods'].push({
    key: 'clear',
    label: '清空',
    params: [],


})
Widget.prototype.clear = function () {
      console.clear();
  this.widgetLog('Cleared!');

}
exports.types = types;
exports.widget = Widget;