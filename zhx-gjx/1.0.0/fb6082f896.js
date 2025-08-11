const types = {
    isInvisibleWidget: true,
    type: "zhx-gjx",
    icon: "https://cdn.cocotais.cn/project/waddle-2/logo/waddle2-logo.svg",
    title: "正轩工具箱",
    version: "1.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
          console.log('正轩工具箱by橙子侠');
  console.log('余正轩制作');
  this.widgetLog('正轩工具箱by橙子侠');
  this.widgetLog('余正轩制作');

    }

}
var document = this.document;
var window = this.window;
var navigator = this.navigator;
var history = this.history;var CryptoJS = require("crypto-js");
const utils = require('utils');

types['methods'].push({
    key: 'window',
    label: '获取窗口',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: '#993399',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.window = function () {
      return (window);
}
types['methods'].push({
    key: 'navigator',
    label: '获取浏览器',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: '#993399',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.navigator = function () {
      return (navigator);
}
types['methods'].push({
    key: 'document',
    label: '获取文档',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: '#993399',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.document = function () {
      return (document);
}
types['methods'].push({
    key: 'history',
    label: '获取历史记录',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: '#993399',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.history = function () {
      return (history);
}
types['methods'].push({
    key: 'lrq',
    label: '获取语言',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: '#993399',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.lrq = function () {
      return (navigator.language);
}
types['methods'].push({
    key: 'win',
    label: '获取操作系统',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: '#993399',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.win = function () {
      return (navigator.platform);
}
types['methods'].push({
    key: 'dqjmurl',
    label: '获取当前界面url',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: '#993399',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.dqjmurl = function () {
      return (window.location.href);
}
types['methods'].push({
    key: 'urlrijm',
    label: '获取当前界面url路径名',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: '#993399',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.urlrijm = function () {
      return (window.location.pathname);
}
types['methods'].push({
    key: 'zhujyum',
    label: '获取主机域名',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: '#993399',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.zhujyum = function () {
      return (window.location.hostname);
}
types['methods'].push({
    key: 'zhujdk',
    label: '获取主机端口',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: '#993399',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.zhujdk = function () {
      return (window.location.port);
}
types['methods'].push({
    key: 'wifi',
    label: '获取网络状态',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: '#993399',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.wifi = function () {
      return (navigator.onLine);
}
types['methods'].push({
    key: 'ssh',
    label: '获取屏幕色深',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: '#993399',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.ssh = function () {
      return (screen.colorDepth);
}
types['methods'].push({
    key: 'xsshd',
    label: '获取屏幕像素深度',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: '#993399',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.xsshd = function () {
      return (screen.pixelDepth);
}
types['methods'].push({
    key: 'qnk',
    label: '获取屏幕宽度',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: '#993399',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.qnk = function () {
      return (screen.width);
}
types['methods'].push({
    key: 'qmg',
    label: '获取屏幕高度',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: '#993399',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.qmg = function () {
      return (screen.height);
}
types['methods'].push({
    key: 'kyg',
    label: '获取屏幕可用高度',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: '#993399',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.kyg = function () {
      return (screen.availHeight);
}
types['methods'].push({
    key: 'kyk',
    label: '获取屏幕可用宽度',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: '#993399',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 32,
},
})
Widget.prototype.kyk = function () {
      return (screen.availWidth);
}
types['methods'].push({
    key: 'b',
    label: '（搭配轻蓝聊天框使用）制作加粗文本标签',
    params: [
      {
          key: 'bbb',
          label: '文本',
          valueType: 'string',
          defaultValue: "",
      },],
    valueType: 'string',
    blockOptions: {
    color: '#ff6600',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.b = function (bbb,) {
      return (['<b>',bbb,'</b>'].join(''));
}
types['methods'].push({
    key: 'p',
    label: '（搭配轻蓝聊天框使用）制作普通文本标签',
    params: [
      {
          key: 'ppp',
          label: '文本',
          valueType: 'string',
          defaultValue: "",
      },],
    valueType: 'string',
    blockOptions: {
    color: '#ff6600',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.p = function (ppp,) {
      return ('<p>' + String(ppp));
}
types['methods'].push({
    key: 'mp4',
    label: '（搭配轻蓝聊天框使用）制作视频标签',
    params: [
      {
          key: 'mp44',
          label: 'url',
          valueType: 'string',
          defaultValue: "",
      },],
    valueType: 'string',
    blockOptions: {
    color: '#ff6600',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.mp4 = function (mp44,) {
      return (['<video controls style="width:100%;" src="',mp44,'"></video>'].join(''));
}
types['methods'].push({
    key: 'img',
    label: '（搭配轻蓝聊天框使用）制作图片标签',
    params: [
      {
          key: 'img1',
          label: 'url',
          valueType: 'string',
          defaultValue: "",
      },],
    valueType: 'string',
    blockOptions: {
    color: '#ff6600',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.img = function (img1,) {
      return (['<img src="',img1,'">'].join(''));
}
types['methods'].push({
    key: 'mp3',
    label: '（搭配轻蓝聊天框使用）制作音频标签',
    params: [
      {
          key: 'mp33',
          label: 'url',
          valueType: 'string',
          defaultValue: "",
      },],
    valueType: 'string',
    blockOptions: {
    color: '#ff6600',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.mp3 = function (mp33,) {
      return (['<video controls style="width:100%;" src="',mp33,'"></video>'].join(''));
}
types['methods'].push({
    key: 'urlpro',
    label: '（搭配轻蓝聊天框使用）制作超链接标签',
    params: [
      {
          key: 'urlpro1',
          label: 'url',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 'urlpro2',
          label: '文本',
          valueType: 'string',
          defaultValue: "",
      },],
    valueType: 'string',
    blockOptions: {
    color: '#ff6600',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 32,
},
})
Widget.prototype.urlpro = function (urlpro1,urlpro2,) {
      return (['<a href="',urlpro1,'">',urlpro2,'</a>'].join(''));
}
types['methods'].push({
    key: 'uuid',
    label: '生成uuid',
    params: [
      {
          key: 'uuid',
          label: '文本',
          valueType: 'string',
          defaultValue: "",
      },],
    valueType: 'string',
    blockOptions: {
    color: '#3366ff',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 32,
},
})
Widget.prototype.uuid = function (uuid,) {
      return (crypto.randomUUID());
}
types['methods'].push({
    key: 'jsonjx',
    label: 'json解析对象',
    params: [
      {
          key: 'jsonjx1',
          label: '文本',
          valueType: 'string',
          defaultValue: "",
      },],
    valueType: 'string',
    blockOptions: {
    color: '#33cc00',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.jsonjx = function (jsonjx1,) {
      return (JSON.parse(jsonjx1));
}
types['methods'].push({
    key: 'jsondxz',
    label: 'json对象转文本',
    params: [
      {
          key: 'jxondxz1',
          label: '对象',
          valueType: 'string',
          defaultValue: "",
      },],
    valueType: 'string',
    blockOptions: {
    color: '#33cc00',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.jsondxz = function (jxondxz1,) {
      return (JSON.stringify(jsondxz1));
}
types['methods'].push({
    key: 'js',
    label: '获取json对象属性x为x的值',
    params: [
      {
          key: 'js1',
          label: '对象',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 'js2',
          label: '属性',
          valueType: 'string',
          defaultValue: "",
      },],
    valueType: 'string',
    blockOptions: {
    color: '#33cc00',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 32,
},
})
Widget.prototype.js = function (js1,js2,) {
      return (js1[js2]);
}
types['methods'].push({
    key: 'timesj',
    label: '获取当前时间戳',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: '#ff6666',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.timesj = function () {
      return (new Date().getTime());
}
types['methods'].push({
    key: 'time',
    label: '获取当前时间（精确到毫秒）',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: '#ff6666',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 32,
},
})
Widget.prototype.time = function () {
      return ([new Date().getTime(),'：',new Date().getFullYear(),'-',new Date().getMonth(),'-',new Date().getDate(),'       ',new Date().getHours(),'：',new Date().getMinutes(),'：',new Date().getSeconds(),'：',new Date().getMilliseconds(),'        ',new Date().getDay()].join(''));
}
types['methods'].push({
    key: 'email1',
    label: '（搭配HTTP客户端使用）发送邮件api地址',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: '#cc0000',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.email1 = function () {
      return 'https://api.mu-jie.cc/email';
}
types['methods'].push({
    key: 'mail2',
    label: '（搭配HTTP客户端使用）发送邮件api请求头',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: '#cc0000',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.mail2 = function () {
      return '{"Content-Type":"application/json","agent":"n"}';
}
types['methods'].push({
    key: 'mail3',
    label: '（搭配HTTP客户端使用）发送邮件',
    params: [
      {
          key: 'q',
          label: '收件人',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 'w',
          label: '标题',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 'e',
          label: '内容',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 'r',
          label: '发件人',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 't',
          label: '授权码',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 'y',
          label: 'stmp',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 'u',
          label: '端口',
          valueType: 'string',
          defaultValue: "",
      },],
    valueType: 'string',
    blockOptions: {
    color: '#cc0000',
    icon: '无',
    generateBlock: true,
    inputsInline: false,
    space: 32,
},
})
Widget.prototype.mail3 = function (q,w,e,r,t,y,u,) {
      return (['{   "to": "',q,'",   "title": "',w,'",   "content": "',e,'",   "host": "',y,'",   "from": "',r,'",   "pass": "',t,'",   "type": "html",   "port": ',u,'}'].join(''));
}
types['methods'].push({
    key: '客户端',
    label: '是否是客户端',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: '#009900',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.客户端 = function () {
      return (utils.isNative());
}
exports.types = types;
exports.widget = Widget;
