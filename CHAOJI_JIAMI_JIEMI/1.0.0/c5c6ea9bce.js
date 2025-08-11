const types = {
    isInvisibleWidget: true,
    type: "CHAOJI_JIAMI_JIEMI",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "多重加密",
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
    key: 'jm',
    label: '加密',
    params: [
      {
          key: 'txt',
          label: '文本',
          valueType: 'string',
          defaultValue: '',
      },],
    valueType: 'string',
    blockOptions: {
    color: '#ffbb55',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.jm = function (txt,) {
      return (btoa(encodeURI(encodeURI(btoa(encodeURI(escape(((txt).toUpperCase()))))))));
}
types['methods'].push({
    key: 'jiem',
    label: '解密',
    params: [
      {
          key: 'txtjm',
          label: '密文',
          valueType: 'string',
          defaultValue: '',
      },],
    valueType: 'string',
    blockOptions: {
    color: '#ffbb55',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.jiem = function (txtjm,) {
      return ((unescape((decodeURI(atob(decodeURI(decodeURI(atob(txtjm)))))))).toLowerCase());
}
exports.types = types;
exports.widget = Widget;
