var confirmWindow, promptWindow;


var document = this.document;
var window = this.window;
var navigator = this.navigator;
var history = this.history;
const types = {
    isInvisibleWidget: true,
    type: "CYAN_WIN_WIDGET",
    icon: "https://ocean.codemao.cn/appcraft/resource/icon/基础/链接.svg",
    title: "浏览器功能",
    version: "8.0.0",
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
  this.widgetLog('©青舒计 2022 精心制作');

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
    space: 48,
},
})
Widget.prototype.javascript_prompt_JSP = function (text_T2,) {
      promptWindow = (window.prompt(text_T2));
  this.emit("JSP_OK"  , promptWindow);return promptWindow;
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
