const types = {
    isInvisibleWidget: true,
    type: "TEXTJM_TIAN_WIDGET",
    icon: "icon-widget-local-storage",
    title: "熊牌加密工具",
    version: "1.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
          this.widgetLog('控件作者：天上来的熊孩子（QQ：2639194612）');

    }

}

types['methods'].push({
    key: 'code1',
    label: '',
    params: [
      {
          key: 'ms',
          label: '',
          valueType: 'string',
          dropdown: [
    { label: '加密', value: '加密', },

    { label: '破译', value: '破译', },
  ],
      },


      {
          key: 'txt',
          label: '文本',
          valueType: 'string',
          defaultValue: "",
      },],
    valueType: 'string',
    blockOptions: {
    color: ('#fEAE8AAA'),
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.code1 = function (ms,txt,) {
      if (ms == '加密') {
    return (btoa(encodeURI(escape((encodeURI(txt).replaceAll('%','/'))))));} else {
    return (decodeURI(unescape((decodeURI(atob(txt)))).replaceAll('/','%')));}

}
exports.types = types;
exports.widget = Widget;