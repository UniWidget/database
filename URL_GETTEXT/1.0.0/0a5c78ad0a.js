const types = {
    isInvisibleWidget: true,
    type: "URL_GETTEXT",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "传参获取",
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
var document = this.document;
var window = this.window;
var navigator = this.navigator;
var history = this.history;
types['methods'].push({
    key: 'GET_URL_TEXT_TOOLS',
    label: '获取传参',
    params: [
      {
          key: 'Get_Url_Set_Tools',
          label: '第',
          valueType: 'number',
          defaultValue: 0,
      },
      {
          key: 'Set_Url_Mode',
          label: '个，模式',
          valueType: 'string',
          dropdown: [
    { label: '获取参数的值', value: '获取参数的值', },

    { label: '获取参数的名字', value: '获取参数的名字', },
  ],
      },

],
    valueType: 'string',
    blockOptions: {
    color: '#33cc00',
    icon: '无',
    generateBlock: true,
    inputsInline: false,
    space: 16,
},
})
Widget.prototype.GET_URL_TEXT_TOOLS = function (Get_Url_Set_Tools,Set_Url_Mode,) {
      if (Set_Url_Mode == '获取参数的名字') {
    return ((window.location.href).split('&')[((1 + Get_Url_Set_Tools) - 1)].split('=')[0]);} else {
    return ((window.location.href).split('&')[((1 + Get_Url_Set_Tools) - 1)].split('=')[1]);}

}
exports.types = types;
exports.widget = Widget;
