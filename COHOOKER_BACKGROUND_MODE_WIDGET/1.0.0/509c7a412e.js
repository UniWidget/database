const types = {
  isInvisibleWidget: true,
  type: "COHOOKER_BACKGROUND_MODE_WIDGET",
  icon: "icon-toolbox-feature",
  title: "保持后台运行#CH",
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
  key: "setBackgroundMode",
  label: "设置后台模式",
  params: [
    {
      key: "bool",
      label: "",
      valueType: "string",
      dropdown: [
        { label: "启用", value: "E" },
        { label: "禁用", value: "D" },
      ],
    },
  ],
});
Widget.prototype.setBackgroundMode = function (bool) {
  if (bool === "E") {
    gWindow.cordova.plugins.backgroundMode.enable();
  } else {
    gWindow.cordova.plugins.backgroundMode.disable();
  }
};
types["methods"].push({
  key: "isInBackground",
  label: "是否在后台模式",
  params: [],
  valueType: "boolean",
});
Widget.prototype.isInBackground = function () {
  return gWindow.cordova.plugins.backgroundMode.isActive();
};
types["methods"].push({
  key: "turnTo",
  label: "切换到",
  params: [
    {
      key: "mode",
      label: "",
      valueType: "string",
      dropdown: [
        { label: "后台", value: "Background" },
        { label: "前台", value: "Foreground" },
      ],
    },
  ],
});
Widget.prototype.turnTo = function (mode) {
  gWindow.cordova.plugins.backgroundMode["moveTo" + mode]();
};
types["methods"].push({
  key: "overrideBackButton",
  label: "覆盖返回按钮",
  params: [],
});
Widget.prototype.overrideBackButton = function () {
  return gWindow.cordova.plugins.backgroundMode.overrideBackButton();
};
types["methods"].push({
  key: "excludeFromTaskList",
  label: "从最近的任务列表中排除",
  params: [],
});
Widget.prototype.excludeFromTaskList = function () {
  return gWindow.cordova.plugins.backgroundMode.excludeFromTaskList();
};
types["methods"].push({
  key: "disableWebViewOptimizations",
  label: "禁用WebView的傻逼优化",
  params: [],
});
Widget.prototype.excludeFromTaskList = function () {
  return gWindow.cordova.plugins.backgroundMode.disableWebViewOptimizations();
};
types["methods"].push({
  key: "screen",
  label: "操作屏幕",
  params: [
    {
      key: "mode",
      label: "",
      valueType: "string",
      dropdown: [
        { label: "亮起", value: "wakeUp" },
        { label: "解锁并显示app", value: "unlock" },
      ],
    },
  ],
});
Widget.prototype.screen = function (mode) {
  return gWindow.cordova.plugins.backgroundMode[mode]();
};
types["methods"].push({
  key: "tongzhi",
  label: "设置常驻通知",
  params: [
    {
      key: "mode",
      label: "",
      valueType: "string",
      dropdown: [
        { label: "显示", value: "T" },
        { label: "隐藏（可能会被杀后台）", value: "F" },
      ],
    },
  ],
});
Widget.prototype.screen = function (mode) {
  if (mode === "T") {
    gWindow.cordova.plugins.backgroundMode.setDefaults({ silent: false });
  } else {
    gWindow.cordova.plugins.backgroundMode.setDefaults({ silent: true });
  }
};
exports.types = types;
exports.widget = Widget;
