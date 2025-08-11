var confirmWindow, promptWindow, printWindow, openWindow;


var document = this.document;
var window = this.window;
var navigator = this.navigator;
var history = this.history;
const types = {
    isInvisibleWidget: true,
    type: "CYAN_WIN_WIDGET",
    icon: "https://ocean.codemao.cn/appcraft/resource/icon/基础/链接.svg",
    title: "浏览器功能",
    version: "7.2.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};
types.docs={url:"https://www.yuque.com/cyan_b2la/coco_document/navigator"};
types.platforms=["web"]
class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
          this.widgetLog('编程猫：8525855');
  this.widgetLog('B站：1523540905');
  this.widgetLog('QQ：2635725313');
  this.widgetLog('青B2la 出品');

    }

}

types['events'].push({
    key: 'JSA_OK',
    label: '通知完毕',
    params: [],
    blockOptions: {
    color: "#608FEEFF",
    icon: 'https://creation.codemao.cn/coconut/web/1.16.0/static/media/tab.906ad81b.svg',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})

types['events'].push({
    key: 'JSC_OK',
    label: '选择完毕',
    params: [
      {
          key: 'JSC_text',
          label: '选择',
          valueType: 'boolean',
      },],
    blockOptions: {
    color: "#608FEEFF",
    icon: 'https://creation.codemao.cn/coconut/web/1.16.0/static/media/tab.906ad81b.svg',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})

types['events'].push({
    key: 'JSP_OK',
    label: '输入完毕',
    params: [
      {
          key: 'JSP_text',
          label: '输入',
          valueType: 'string',
      },],
    blockOptions: {
    color: "#608FEEFF",
    icon: 'https://creation.codemao.cn/coconut/web/1.16.0/static/media/tab.906ad81b.svg',
    generateBlock: true,
    inputsInline: true,
    space: 48,
},
})

types['methods'].push({
    key: 'method',
    label: '仅运行',
    params: [
      {
          key: 'param',
          label: '',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: '用事件获取放到这里',
      },],

    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 48,
},
})
Widget.prototype.method = function (param,) {

}
types['methods'].push({
    key: 'javascript_alert_JSA',
    label: '弹出通知',
    params: [
      {
          key: 'text_T1',
          label: '',
          valueType: 'multilineString',
      checkType: 'string',
          defaultValue: '提示',
      },],

    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_alert_JSA = function (text_T1,) {
      window.alert(text_T1);
  this.emit("JSA_OK");
}
types['methods'].push({
    key: 'javascript_confirm_JSC',
    label: '弹出选择并获取选择',
    params: [
      {
          key: 'text_T1',
          label: '',
          valueType: 'multilineString',
      checkType: 'string',
          defaultValue: '提示',
      },],
    valueType: 'boolean',
    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_confirm_JSC = function (text_T1,) {
      confirmWindow = (window.confirm(text_T1));
  this.emit("JSC_OK"  , confirmWindow);return confirmWindow;
}
types['methods'].push({
    key: 'javascript_prompt_JSP',
    label: '弹出输入并获取输入',
    params: [
      {
          key: 'text_T2',
          label: '',
          valueType: 'multilineString',
      checkType: 'string',
          defaultValue: '提示',
      },],
    valueType: 'string',
    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_prompt_JSP = function (text_T2,) {
      promptWindow = (window.prompt(text_T2));
  this.emit("JSP_OK"  , promptWindow);return promptWindow;
}
types['methods'].push({
    key: 'javascript_print_JS',
    label: '当前窗口打印或下载PDF',
    params: [],

    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_print_JS = function () {
      window.print();

}
types['methods'].push({
    key: 'javascript_html_print_JS',
    label: '自定义打印或下载PDF',
    params: [
      {
          key: 'html',
          label: 'HTML',
          valueType: 'multilineString',
      checkType: 'string',
          defaultValue: '<p>CoCo - 让世界没有难做的APP</p>',
      },],

    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_html_print_JS = function (html,) {
      printWindow = (window.open('','_blank',''));
  (printWindow.document.open());
  (printWindow.document.write(html));
  (printWindow.document.close());
  (printWindow.window.print());
  (printWindow.window.close());

}
types['methods'].push({
    key: 'javascript_open_JS',
    label: '打开新的窗口',
    params: [
      {
          key: 'replace_R',
          label: '',
          valueType: 'string',
          defaultValue: 'https://coco.codemao.cn',
      },
      {
          key: 'name_N',
          label: '名称',
          valueType: 'string',
          defaultValue: 'CoCo - 让世界没有难做的APP',
      },
      {
          key: 'specs_S',
          label: '属性',
          valueType: 'string',
          defaultValue: 'width=200,height=100',
      },],

    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_open_JS = function (replace_R,name_N,specs_S,) {
      openWindow = (window.open(replace_R,name_N,specs_S));

}
types['methods'].push({
    key: 'javascript_close_JS',
    label: '关闭新的窗口',
    params: [],

    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 48,
},
})
Widget.prototype.javascript_close_JS = function () {
      (openWindow.window.close());

}
types['methods'].push({
    key: 'javascript_openWindow_document_open_JS',
    label: '新的窗口写入',
    params: [
      {
          key: 'html',
          label: 'HTML',
          valueType: 'multilineString',
      checkType: 'string',
          defaultValue: '<p>CoCo - 让世界没有难做的APP</p>',
      },],

    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_openWindow_document_open_JS = function (html,) {
      (openWindow.document.open());
  (openWindow.document.write(html));
  (openWindow.document.close());

}
types['methods'].push({
    key: 'javascript_document_open_JS',
    label: '当前窗口写入',
    params: [
      {
          key: 'html',
          label: 'HTML',
          valueType: 'multilineString',
      checkType: 'string',
          defaultValue: '<p>CoCo - 让世界没有难做的APP</p>',
      },],

    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 48,
},
})
Widget.prototype.javascript_document_open_JS = function (html,) {
      document.open();
  document.write(html);
  document.close();

}
types['methods'].push({
    key: 'javascript_location_href_JSLH',
    label: '当前URL网址',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_location_href_JSLH = function () {
      return (window.location.href);
}
types['methods'].push({
    key: 'javascript_location_search_JSLS',
    label: '当前URL参数',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_location_search_JSLS = function () {
      return (window.location.search);
}
types['methods'].push({
    key: 'javascript_location_pathname_JSLP',
    label: '当前URL路径',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_location_pathname_JSLP = function () {
      return (window.location.pathname);
}
types['methods'].push({
    key: 'javascript_location_hash_JSLH',
    label: '当前URL锚点',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_location_hash_JSLH = function () {
      return (window.location.hash);
}
types['methods'].push({
    key: 'javascript_location_hostname_JSLH',
    label: '当前URL域名',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_location_hostname_JSLH = function () {
      return (window.location.hostname);
}
types['methods'].push({
    key: 'javascript_location_protocol_JSLP',
    label: '当前URL协议',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_location_protocol_JSLP = function () {
      return (window.location.protocol);
}
types['methods'].push({
    key: 'javascript_location_port_JSLP',
    label: '当前URL端口',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_location_port_JSLP = function () {
      return (window.location.port);
}
types['methods'].push({
    key: 'javascript_location_replace_JSLR',
    label: '跳转URL到当前页面',
    params: [
      {
          key: 'location_href_LH',
          label: '',
          valueType: 'string',
          defaultValue: 'https://coco.codemao.cn',
      },],

    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_location_replace_JSLR = function (location_href_LH,) {
      window.location.replace(location_href_LH);

}
types['methods'].push({
    key: 'javascript_location_reload_JSLR',
    label: '刷新当前URL',
    params: [],

    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 48,
},
})
Widget.prototype.javascript_location_reload_JSLR = function () {
      window.location.reload;

}
types['methods'].push({
    key: 'javascript_history_length_JSHL',
    label: '历史列表中的网址数',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_history_length_JSHL = function () {
      return (history.length);
}
types['methods'].push({
    key: 'javascript_history_back_JSHB',
    label: '跳转历史中的上一个',
    params: [],

    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_history_back_JSHB = function () {
      history.back();

}
types['methods'].push({
    key: 'javascript_history_forward_JSHF',
    label: '跳转历史中的下一个',
    params: [],

    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_history_forward_JSHF = function () {
      history.forward();

}
types['methods'].push({
    key: 'javascript_history_go_JSHG',
    label: '跳转历史中的某一个',
    params: [
      {
          key: 'history_go_HG',
          label: '',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: '数字或URL',
      },],

    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 48,
},
})
Widget.prototype.javascript_history_go_JSHG = function (history_go_HG,) {
      history.go(history_go_HG);

}
types['methods'].push({
    key: 'javascript_navigator_cookieEnabled_JSNC',
    label: 'cookie是否启用',
    params: [],
    valueType: 'boolean',
    blockOptions: {
    color: "#FFBB55FF",
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
    label: '应用名称',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#FFBB55FF",
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
    label: '应用代码名称',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#FFBB55FF",
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
    label: '引擎',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#FFBB55FF",
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
    label: '版本',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#FFBB55FF",
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
    label: '代理',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#FFBB55FF",
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
    label: '操作系统',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#FFBB55FF",
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
    label: '文字语言',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#FFBB55FF",
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
    label: '是否联网',
    params: [],
    valueType: 'boolean',
    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_navigator_onLine_JSNO = function () {
      return (navigator.onLine);
}
types['methods'].push({
    key: 'javascript_navigator_javaEnabled_JSNJ',
    label: 'java是否启用',
    params: [],
    valueType: 'boolean',
    blockOptions: {
    color: "#FFBB55FF",
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
    key: 'Unicode_CURI_codeURI_CURI',
    label: '',
    params: [
      {
          key: 'code_URI_ENCURI1',
          label: '网页传参',
          valueType: 'string',
          dropdown: [
    { label: '编码', value: '编码', },

    { label: '解码', value: '解码', },
  ],
      },


      {
          key: 'text_code_TC1',
          label: '',
          valueType: 'string',
          defaultValue: '内容',
      },],
    valueType: 'string',
    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.Unicode_CURI_codeURI_CURI = function (code_URI_ENCURI1,text_code_TC1,) {
      return (code_URI_ENCURI1 == '编码' ? (encodeURI(escape(text_code_TC1))) : (code_URI_ENCURI1 == '解码' ? (unescape((decodeURI(text_code_TC1)))) : null));
}
types['methods'].push({
    key: 'Unicode_CURI',
    label: '',
    params: [
      {
          key: 'code_URI_ENCURI1',
          label: 'Unicode',
          valueType: 'string',
          dropdown: [
    { label: '编码', value: '编码', },

    { label: '解码', value: '解码', },
  ],
      },


      {
          key: 'text_code_TC1',
          label: '',
          valueType: 'string',
          defaultValue: '内容',
      },],
    valueType: 'string',
    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.Unicode_CURI = function (code_URI_ENCURI1,text_code_TC1,) {
      return (code_URI_ENCURI1 == '编码' ? (escape(text_code_TC1)) : (code_URI_ENCURI1 == '解码' ? (unescape(text_code_TC1)) : null));
}
types['methods'].push({
    key: 'codeURI_CURI',
    label: '',
    params: [
      {
          key: 'code_URI_ENCURI',
          label: 'URL',
          valueType: 'string',
          dropdown: [
    { label: '编码', value: '编码', },

    { label: '解码', value: '解码', },
  ],
      },


      {
          key: 'text_code_TC',
          label: '',
          valueType: 'string',
          defaultValue: '内容',
      },],
    valueType: 'string',
    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 48,
},
})
Widget.prototype.codeURI_CURI = function (code_URI_ENCURI,text_code_TC,) {
      return (code_URI_ENCURI == '编码' ? (encodeURI(text_code_TC)) : (code_URI_ENCURI == '解码' ? (decodeURI(text_code_TC)) : null));
}
exports.types = types;
exports.widget = Widget;
