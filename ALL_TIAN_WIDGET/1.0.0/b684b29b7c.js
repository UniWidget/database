const types = {
    isInvisibleWidget: true,
    type: "ALL_TIAN_WIDGET",
    icon: "icon-widget-phone-dialer",
    title: "全局控件-天版",
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
    key: 'cn',
    label: '发送广播',
    params: [
      {
          key: 'name',
          label: '广播名称',
          valueType: 'string',
          defaultValue: '广播1',
      },],

    blockOptions: {
    color: '#6666cc',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.cn = function (name,) {
      this.emit("de"  , name);
}
types['events'].push({
    key: 'de',
    label: '收到广播',
    params: [
      {
          key: 'name',
          label: '广播名称',
          valueType: 'string',
      },],
    blockOptions: {
    color: '#6666cc',
    icon: 'https://creation.codemao.cn/coconut/web/1.18.0/static/media/cloud.af9d6145.svg',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})

exports.types = types;
exports.widget = Widget;