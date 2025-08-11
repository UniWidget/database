var openWindow;


var document = this.document;
var window = this.window;
var navigator = this.navigator;
var history = this.history;
const types = {
    isInvisibleWidget: true,
    type: "CYAN_WIN_WIDGET",
    icon: "https://ocean.codemao.cn/appcraft/resource/icon/基础/链接.svg",
    title: "新的窗口",
    version: "1.0.0",
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
          defaultValue: '',
      },
      {
          key: 'specs_S',
          label: '属性',
          valueType: 'string',
          defaultValue: '',
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
    space: 16,
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
exports.types = types;
exports.widget = Widget;
