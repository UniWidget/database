var CryptoJS = require("crypto-js");

const types = {
    isInvisibleWidget: true,
    type: "MD5_ENCODE",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "MD5加密",
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
    key: 'encode',
    label: '加密',
    params: [
      {
          key: 'text',
          label: '文本',
          valueType: 'string',
          defaultValue: '114514',
      },],
    valueType: 'string',

})
Widget.prototype.encode = function (text,) {
      return (CryptoJS.MD5(text).toString());
}
exports.types = types;
exports.widget = Widget;
