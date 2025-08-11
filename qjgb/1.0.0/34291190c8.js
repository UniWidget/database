const types = {
    isInvisibleWidget: true,
    type: "qjgb",
    icon: "https://creation.codemao.cn/coconut/web/1.18.0/static/media/cloud.af9d6145.svg",
    title: "全局广播",
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
    key: '2',
    label: '收到广播',
    params: [
      {
          key: 'a',
          label: '值',
          valueType: ['string','number','boolean','color','array','object'],
      },],
    blockOptions: {
    color: '#3366ff',
    icon: 'https://creation.codemao.cn/coconut/web/1.18.0/static/media/cloud.af9d6145.svg',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})

types['methods'].push({
    key: 'methodName',
    label: '发送广播',
    params: [
      {
          key: 'paramName',
          label: '并传值',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: "",
      },],

    blockOptions: {
    color: '#ffbb55',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.methodName = function (paramName,) {
      this.emit("2"  , paramName);
}
exports.types = types;
exports.widget = Widget;
