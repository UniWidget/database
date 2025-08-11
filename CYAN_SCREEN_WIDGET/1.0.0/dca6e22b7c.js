const auther = '青舒计';//
const qq = 2635725313;//
var document = this.document;
var window = this.window;
var navigator = this.navigator;
var history = this.history;
const types = {
    isInvisibleWidget: true,
    type: "CYAN_SCREEN_WIDGET",
    icon: "https://ocean.codemao.cn/appcraft/resource/icon/基础/查询.svg",
    title: "获取屏幕",
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
    key: 'javascript_screen_availHeight_JSSA',
    label: '的屏幕可用高度',
    params: [],
    valueType: 'number',
    blockOptions: {
    color: "#E55F46",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_screen_availHeight_JSSA = function () {
      return (window.screen.availHeight);
}
types['methods'].push({
    key: 'javascript_screen_availWidth_JSSA',
    label: '的屏幕可用宽度',
    params: [],
    valueType: 'number',
    blockOptions: {
    color: "#E55F46",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_screen_availWidth_JSSA = function () {
      return (window.screen.availWidth);
}
types['methods'].push({
    key: 'javascript_screen_height_JSSH',
    label: '的屏幕总体高度',
    params: [],
    valueType: 'number',
    blockOptions: {
    color: "#E55F46",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_screen_height_JSSH = function () {
      return (window.screen.height);
}
types['methods'].push({
    key: 'javascript_screen_width_JSSW',
    label: '的屏幕总体宽度',
    params: [],
    valueType: 'number',
    blockOptions: {
    color: "#E55F46",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_screen_width_JSSW = function () {
      return (window.screen.width);
}
types['methods'].push({
    key: 'javascript_screen_colorDepth_JSSC',
    label: '的屏幕颜色深度',
    params: [],
    valueType: 'number',
    blockOptions: {
    color: "#E55F46",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_screen_colorDepth_JSSC = function () {
      return (window.screen.colorDepth);
}
types['methods'].push({
    key: 'javascript_screen_pixelDepth_JSSC',
    label: '的屏幕颜色深度',
    params: [],
    valueType: 'number',
    blockOptions: {
    color: "#E55F46",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 48,
},
})
Widget.prototype.javascript_screen_pixelDepth_JSSC = function () {
      return (window.screen.pixelDepth);
}
exports.types = types;
exports.widget = Widget;
