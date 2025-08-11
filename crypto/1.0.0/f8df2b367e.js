var CryptoJS = require("crypto-js");

const types = {
    isInvisibleWidget: true,
    type: "crypto",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "加密",
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
    key: 'md5',
    label: 'MD5',
    params: [
      {
          key: 'text',
          label: '内容',
          valueType: 'multilineString',
      checkType: 'string',
          defaultValue: "",
      },],
    valueType: ['string','number','boolean','array','color','object',],

})
Widget.prototype.md5 = function (text,) {
      return (CryptoJS.MD5(text));
}
types['methods'].push({
    key: 'sha256',
    label: 'SHA-256',
    params: [
      {
          key: 'text',
          label: '内容',
          valueType: 'multilineString',
      checkType: 'string',
          defaultValue: "",
      },],
    valueType: ['string','number','boolean','array','color','object',],

})
Widget.prototype.sha256 = function (text,) {
      return (CryptoJS.SHA256(text));
}
exports.types = types;
exports.widget = Widget;
