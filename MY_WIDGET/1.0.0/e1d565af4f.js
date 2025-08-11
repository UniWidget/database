const utils = require('utils');
var CryptoJS = require("crypto-js");

const types = {
    isInvisibleWidget: true,
    type: "MY_WIDGET",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "安卓工具箱",
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
    key: 'methodName',
    label: '加密解密',
    params: [
      {
          key: 'Name1',
          label: '模式',
          valueType: 'string',
          dropdown: [
    { label: '加密', value: '加密', },

    { label: '解密', value: '解密', },
  ],
      },


      {
          key: 'Name2',
          label: '内容',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 'Name3',
          label: '秘钥',
          valueType: 'string',
          defaultValue: "",
      },],
    valueType: 'string',
    blockOptions: {
    color: '#33ffff',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.methodName = function (Name1,Name2,Name3,) {
      if (Name1 == '加密') {
    return (CryptoJS.AES.encrypt(Name2, Name3));} else {
    return (CryptoJS.AES.decrypt(Name2, Name3));}

}
types['methods'].push({
    key: 'getPhone',
    label: '是否为打包后的客户端',
    params: [],
    valueType: ['string','number','boolean','array','color','object',],
    blockOptions: {
    color: '#ffcc00',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.getPhone = function () {
      if (utils.isNative()) {
    return 1;} else {
    return 0;}

}
exports.types = types;
exports.widget = Widget;
