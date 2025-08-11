const types = {
    isInvisibleWidget: true,
    type: "WINDOW",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "window消息",
    version: "1.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
          this.widgetLog('B站：1523540905');
  this.widgetLog('QQ：2635725313');
  this.widgetLog('青B2la 出品');

    }

}

types['methods'].push({
    key: 'alert_',
    label: '提示消息',
    params: [
      {
          key: 'response_alert_',
          label: '消息文本',
          valueType: 'multilineString',
      checkType: 'string',
          defaultValue: '',
      },],

    blockOptions: {
    color: '#6666cc',
    icon: '无',
    generateBlock: true,
    inputsInline: false,
    space: 16,
},
})
Widget.prototype.alert_ = function (response_alert_,) {
      window.alert(response_alert_);

}
types['methods'].push({
    key: 'prompt_',
    label: '要求输入',
    params: [
      {
          key: 'response_prompt_',
          label: '消息文本',
          valueType: 'multilineString',
      checkType: 'string',
          defaultValue: '',
      },],
    valueType: 'string',
    blockOptions: {
    color: '#6666cc',
    icon: '无',
    generateBlock: true,
    inputsInline: false,
    space: 16,
},
})
Widget.prototype.prompt_ = function (response_prompt_,) {
      return (window.prompt(response_prompt_));
}
exports.types = types;
exports.widget = Widget;
