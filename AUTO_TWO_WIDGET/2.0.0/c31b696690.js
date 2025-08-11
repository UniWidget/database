const types = {
    isInvisibleWidget: true,
    type: "AUTO_TWO_WIDGET",
    icon: "https://ocean.codemao.cn/appcraft/resource/icon/%E5%9F%BA%E7%A1%80/%E7%BC%96%E8%BE%91_2.svg",
    title: "自动炸机2.0",
    version: "2.0.0",
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

types['properties'].push({
    key: 'propertyName',
    label: '输入需求即可炸电脑！高性能病毒！炸鸡内容',
    valueType: 'string',
    defaultValue: '我是傻逼',
})

types['methods'].push({
    key: 'methodNam',
    label: '添加此积木（模式）',
    params: [
      {
          key: 'paramName',
          label: '纯病毒模式？',
          valueType: 'string',
          dropdown: [
    { label: 'True', value: 'True', },

    { label: 'False', value: 'False', },
  ],
      },

],

})
Widget.prototype.methodNam = function (paramName,) {

}
types['methods'].push({
    key: 'methodName',
    label: '添加此积木（协议）',
    params: [
      {
          key: 'paramNamee',
          label: '请阅读协议（下拉菜单）',
          valueType: 'string',
          dropdown: [
    { label: '1.您不能使用', value: '1.您不能使用', },

    { label: '2.一切病毒造成的后果自行负责', value: '2.一切病毒造成的后果自行负责', },

    { label: '3.禁止使用此控件', value: '3.禁止使用此控件', },

    { label: '我已同意该协议（选择此项同意）', value: '我已同意该协议（选择此项同意）', },
  ],
      },

],

})
Widget.prototype.methodName = function (paramNamee,) {

}
types['methods'].push({
    key: 'methodNamee',
    label: '请勿添加此积木！警告：该控件需要强大的CPU算力，一定会导致电脑卡死（因为这是病毒），请不要等待~',
    params: [],

})
Widget.prototype.methodNamee = function () {

}
types['methods'].push({
    key: 'methodNameee',
    label: '开始自动制作（先备份！）',
    params: [],

})
Widget.prototype.methodNameee = function () {
      while (2 % 2 === 0) {
    console.log('WAIT');
    console.warn('？？？');
  }

}
exports.types = types;
exports.widget = Widget;
