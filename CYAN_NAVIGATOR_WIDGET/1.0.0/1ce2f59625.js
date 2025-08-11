const auther = '青舒计';//
const qq = 2635725313;//
var document = this.document;
var window = this.window;
var navigator = this.navigator;
var history = this.history;
const types = {
    isInvisibleWidget: true,
    type: "CYAN_NAVIGATOR_WIDGET",
    icon: "https://ocean.codemao.cn/appcraft/resource/icon/基础/查询.svg",
    title: "获取浏览器",
    version: "1.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};
types.docs={url:""};
types.platforms=["web"]
class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
          this.widgetLog('编程猫：8525855');
  this.widgetLog('B站：1523540905');
  this.widgetLog('QQ：2635725313');
  this.widgetLog('©青舒计 2022 精心制作');

    }

}

types['methods'].push({
    key: 'javascript_navigator_javaEnabled_JSNJ',
    label: '浏览器java是否启用',
    params: [],
    valueType: 'boolean',
    blockOptions: {
    color: "#E55F46",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 48,
},
})
Widget.prototype.javascript_navigator_javaEnabled_JSNJ = function () {
      return (navigator.javaEnabled());
}
types['methods'].push({
    key: 'javascript_navigator_cookieEnabled_JSNC',
    label: '的cookie是否启用',
    params: [],
    valueType: 'boolean',
    blockOptions: {
    color: "#E55F46",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_navigator_cookieEnabled_JSNC = function () {
      return (navigator.cookieEnabled);
}
types['methods'].push({
    key: 'javascript_navigator_appName_JSNA',
    label: '的浏览器应用名称',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#E55F46",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_navigator_appName_JSNA = function () {
      return (navigator.appName);
}
types['methods'].push({
    key: 'javascript_navigator_appCodeName_JSNA',
    label: '的浏览器应用代码名称',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#E55F46",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_navigator_appCodeName_JSNA = function () {
      return (navigator.appCodeName);
}
types['methods'].push({
    key: 'javascript_navigator_product_JSNP',
    label: '的浏览器引擎',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#E55F46",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_navigator_product_JSNP = function () {
      return (navigator.product);
}
types['methods'].push({
    key: 'javascript_navigator_appVersion_JSNA',
    label: '的浏览器版本',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#E55F46",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_navigator_appVersion_JSNA = function () {
      return (navigator.appVersion);
}
types['methods'].push({
    key: 'javascript_navigator_userAgent_JSNU',
    label: '的浏览器代理',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#E55F46",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_navigator_userAgent_JSNU = function () {
      return (navigator.userAgent);
}
types['methods'].push({
    key: 'javascript_navigator_platform_JSNP',
    label: '的浏览器操作系统',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#E55F46",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_navigator_platform_JSNP = function () {
      return (navigator.platform);
}
types['methods'].push({
    key: 'javascript_navigator_language_JSNL',
    label: '的浏览器语言',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#E55F46",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_navigator_language_JSNL = function () {
      return (navigator.language);
}
types['methods'].push({
    key: 'javascript_navigator_onLine_JSNO',
    label: '的浏览器是否联网',
    params: [],
    valueType: 'boolean',
    blockOptions: {
    color: "#E55F46",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 48,
},
})
Widget.prototype.javascript_navigator_onLine_JSNO = function () {
      return (navigator.onLine);
}
exports.types = types;
exports.widget = Widget;
