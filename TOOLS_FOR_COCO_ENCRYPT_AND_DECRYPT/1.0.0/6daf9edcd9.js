var CryptoJS = require("crypto-js");

const types = {
    isInvisibleWidget: true,
    type: "TOOLS_FOR_COCO_ENCRYPT_AND_DECRYPT",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "CoCo工具  加解密",
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
    key: 'useMD5',
    label: '使用 MD5 加密',
    params: [
      {
          key: 'text',
          label: '文本',
          valueType: 'string',
          defaultValue: "",
      },],
    valueType: 'string',

})
Widget.prototype.useMD5 = function (text,) {
      return (CryptoJS.MD5(text).toString());
}
types['methods'].push({
    key: 'useSHA1',
    label: '使用 SHA-1 加密',
    params: [
      {
          key: 'text',
          label: '文本',
          valueType: 'string',
          defaultValue: "",
      },],
    valueType: 'string',

})
Widget.prototype.useSHA1 = function (text,) {
      return (CryptoJS.SHA1(text).toString());
}
types['methods'].push({
    key: 'useSHA256',
    label: '使用 SHA-256 加密',
    params: [
      {
          key: 'text',
          label: '文本',
          valueType: 'string',
          defaultValue: "",
      },],
    valueType: 'string',

})
Widget.prototype.useSHA256 = function (text,) {
      return (CryptoJS.SHA256(text).toString());
}
types['methods'].push({
    key: 'useAEStoEncode',
    label: '使用 AES 加密',
    params: [
      {
          key: 'text',
          label: '文本',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 'key',
          label: '密钥',
          valueType: 'string',
          defaultValue: "",
      },],
    valueType: 'string',

})
Widget.prototype.useAEStoEncode = function (text,key,) {
      return (CryptoJS.AES.encrypt(text, key));
}
types['methods'].push({
    key: 'useAEStoDecode',
    label: '使用 AES 解密',
    params: [
      {
          key: 'text',
          label: '文本',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 'key',
          label: '密钥',
          valueType: 'string',
          defaultValue: "",
      },],
    valueType: 'string',

})
Widget.prototype.useAEStoDecode = function (text,key,) {
      return (CryptoJS.AES.decrypt(text, key));
}
exports.types = types;
exports.widget = Widget;
