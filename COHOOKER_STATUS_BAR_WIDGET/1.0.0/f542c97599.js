const types = {
  isInvisibleWidget: true,
  type: "COHOOKER_STATUS_BAR_WIDGET",
  icon: "icon-toolbox-feature",
  title: "手机状态栏#CH",
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

types.platforms = ["android"];
const gWindow = new Function("return window")();

types["methods"].push({
  key: "setStatusBarVisible",
  label: "设置状态栏可见状态",
  params: [
    {
      key: "visible",
      label: "",
      valueType: "boolean",
      defaultValue: true,
    },
  ],

  blockOptions: {
    color: "#999900",
    icon: "无",
    generateBlock: true,
    inputsInline: true,
    space: 16,
  },
});
Widget.prototype.setStatusBarVisible = function (visible) {
  if(visible){
    gWindow.StatusBar.show();
  }else{
    gWindow.StatusBar.hide();
  }
};
types["methods"].push({
  key: "getStatusBarVisible",
  label: "获取状态栏可见状态",
  params: [],
  valueType: "boolean",
  blockOptions: {
    color: "#999900",
    icon: "无",
    generateBlock: true,
    inputsInline: true,
    space: 16,
  },
});
Widget.prototype.getStatusBarVisible = function () {
  return gWindow.StatusBar.isVisible;
};

types["methods"].push({
  key: "getStatusBarTextColor",
  label: "设置状态栏文字颜色",
  params: [
    {
      key: "color",
      label: "",
      valueType: "string",
      dropdown: [
        { label: "亮色", value: "light" },

        { label: "暗色", value: "dark" },
      ],
    },
  ],

  blockOptions: {
    color: "#999900",
    icon: "无",
    generateBlock: true,
    inputsInline: true,
    space: 16,
  },
});
Widget.prototype.getStatusBarTextColor = function (color) {
  if(color==='light'){
    gWindow.StatusBar.styleLightContent();
  }else{
    gWindow.StatusBar.styleDefault();
  }
};
types["methods"].push({
  key: "overlaysWebView",
  label: "设置状态栏后透明显示APP页面",
  params: [
    {
      key: "s",
      label: "",
      valueType: "boolean",
      defaultValue: true,
    },
  ],

  blockOptions: {
    color: "#999900",
    icon: "无",
    generateBlock: true,
    inputsInline: true,
    space: 16,
  },
});
Widget.prototype.overlaysWebView = function (s) {
  gWindow.StatusBar.overlaysWebView(s)
};
types["methods"].push({
  key: "setStatusBarBackgroundColor",
  label: "设置状态栏背景颜色",
  params: [
    {
      key: "color",
      label: "",
      valueType: "string",
      defaultValue: "#C0C0C0",
    },
  ],

  blockOptions: {
    color: "#999900",
    icon: "无",
    generateBlock: true,
    inputsInline: true,
    space: 16,
  },
});
Widget.prototype.setStatusBarBackgroundColor = function (color) {
  gWindow.StatusBar.backgroundColorByHexString(color);
};

exports.types = types;
exports.widget = Widget;
