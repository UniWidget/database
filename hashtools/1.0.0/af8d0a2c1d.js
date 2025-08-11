const types = {
    isInvisibleWidget: true,
    type: "hashtools",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "hash工具",
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
var CryptoJS = require("crypto-js");

types['methods'].push({
    key: 'md5',
    label: 'md5',
    params: [
      {
          key: 'md5string',
          label: 'md5',
          valueType: 'string',
          defaultValue: "",
      },],
    valueType: 'string',
    blockOptions: {
    color: '#3366ff',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.md5 = function (md5string,) {
      return (CryptoJS.MD5(md5string).toString());
}
types['methods'].push({
    key: 'sha1',
    label: 'sha1',
    params: [
      {
          key: 'sha1str',
          label: 'sha1',
          valueType: 'string',
          defaultValue: "",
      },],
    valueType: 'string',
    blockOptions: {
    color: '#3366ff',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.sha1 = function (sha1str,) {
      return (CryptoJS.SHA1(sha1str).toString());
}
types['methods'].push({
    key: 'sha256',
    label: 'sha256',
    params: [
      {
          key: 'sha1str',
          label: 'sha1',
          valueType: 'string',
          defaultValue: "",
      },],
    valueType: 'string',
    blockOptions: {
    color: '#3366ff',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.sha256 = function (sha1str,) {
      return (CryptoJS.SHA256(sha1str).toString());
}
types['methods'].push({
    key: 'aesa',
    label: 'aes加密',
    params: [
      {
          key: 'aesstr',
          label: 'str',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 'pwdstr',
          label: 'pwd',
          valueType: 'string',
          defaultValue: "",
      },],
    valueType: 'string',
    blockOptions: {
    color: '#3366ff',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.aesa = function (aesstr,pwdstr,) {
      return (CryptoJS.AES.encrypt(aesstr, pwdstr).toString());
}
types['methods'].push({
    key: 'aesk',
    label: 'aes解密',
    params: [
      {
          key: 'aesstr',
          label: 'str',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 'pwdstr',
          label: 'pwd',
          valueType: 'string',
          defaultValue: "",
      },],
    valueType: 'string',
    blockOptions: {
    color: '#3366ff',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.aesk = function (aesstr,pwdstr,) {
      return (CryptoJS.AES.decrypt(aesstr, pwdstr).toString(CryptoJS.enc.Utf8));
}
types['methods'].push({
    key: 'uuid',
    label: 'uuid',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: '#3366ff',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.uuid = function () {
      return (crypto.randomUUID());
}
exports.types = types;
exports.widget = Widget;
