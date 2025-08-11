const types = {
    isInvisibleWidget: true,
    type: "HS_WIDGET",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "万能函数",
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
    key: 'eventName',
    label: '接收到函数',
    params: [
      {
          key: 'name',
          label: '函数名',
          valueType: 'string',
      },
      {
          key: 'data',
          label: '传参',
          valueType: 'string',
      },],

})

types['methods'].push({
    key: 'methodName',
    label: '发送函数',
    params: [
      {
          key: 'names',
          label: '函数名',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 'datas',
          label: '参数',
          valueType: 'string',
          defaultValue: "",
      },],


})
Widget.prototype.methodName = function (names,datas,) {
      this.emit("eventName"  , names, datas);
}
exports.types = types;
exports.widget = Widget;
