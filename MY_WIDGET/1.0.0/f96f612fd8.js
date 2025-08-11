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
          const axios = require('axios');
  var CryptoJS = require("crypto-js");

    }

}

types['methods'].push({
    key: 'methodName',
    label: '加密解密',
    params: [
      {
          key: 'Name1',
          label: 'in1',
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
    key: 'ip',
    label: '获取当前ip',
    params: [],
    valueType: 'string',

})
Widget.prototype.ip = function () {

}
exports.types = types;
exports.widget = Widget;
