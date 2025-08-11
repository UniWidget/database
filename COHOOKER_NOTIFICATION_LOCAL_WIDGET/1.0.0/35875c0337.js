const types = {
  isInvisibleWidget: true,
  type: "COHOOKER_NOTIFICATION_LOCAL_WIDGET",
  icon: "icon-toolbox-feature",
  title: "弹出本地消息#CH",
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
  key: "requestPermission",
  label: "请求/检查权限",
  params: [],

  blockOptions: {
    color: "#009900",
    icon: "无",
    generateBlock: true,
    inputsInline: true,
    space: 16,
  },
});
Widget.prototype.requestPermission = function () {
  gWindow.cordova.plugins.notification.local.requestPermission((p)=>{
    this.emit('onRequestPermissionReturn',p);
  });
};

types["events"].push({
  key: "onRequestPermissionReturn",
  label: "请求/检查权限完成",
  params: [
    {
      key: "hasPermission",
      label: "是否有通知权限",
      valueType: "boolean",
    },
  ],
});
types["methods"].push({
  key: "clearAll",
  label: "清除所有",
  params: [],

  blockOptions: {
    color: "#009900",
    icon: "无",
    generateBlock: true,
    inputsInline: true,
    space: 16,
  },
});
Widget.prototype.clearAll = function () {
  gWindow.cordova.plugins.notification.local.clearAll();
};
types["methods"].push({
  key: "schedule",
  label: "本地通知",
  params: [
    {
      key: "notification",
      label: "",
      valueType: ["string", "number", "boolean", "color", "array", "object"],
      defaultValue: "此处放入通知积木",
    },
  ],

  blockOptions: {
    color: "#009900",
    icon: "无",
    generateBlock: true,
    inputsInline: true,
    space: 16,
  },
});
Widget.prototype.schedule = function (notification) {
  gWindow.cordova.plugins.notification.local.schedule(notification);
};
types["methods"].push({
  key: "genNotification_simple",
  label: "通知_普通",
  params: [
    {
      key: "id",
      label: "id",
      valueType: "number",
      defaultValue: 1,
    },
    {
      key: "title",
      label: "标题",
      valueType: "string",
      defaultValue: "Hello World",
    },
    {
      key: "text",
      label: "文字",
      valueType: "string",
      defaultValue: "This is my first notification!",
    },
    {
      key: "foreground",
      label: "前景显示",
      valueType: "boolean",
      defaultValue: true,
    },
  ],
  valueType: ["string", "number", "boolean", "array", "color", "object"],
  blockOptions: {
    color: "#ff6600",
    icon: "无",
    generateBlock: true,
    inputsInline: false,
    space: 16,
  },
});
Widget.prototype.genNotification_simple = function (
  id,
  title,
  text,
  foreground
) {
  return {
    id: id,
    title: title,
    text: text,
    foreground: foreground,
  };
};
types["methods"].push({
  key: "genNotification_only_title",
  label: "通知_仅标题",
  params: [
    {
      key: "id",
      label: "id",
      valueType: "number",
      defaultValue: 1,
    },
    {
      key: "title",
      label: "标题",
      valueType: "string",
      defaultValue: "Hello World",
    },
    {
      key: "foreground",
      label: "前景显示",
      valueType: "boolean",
      defaultValue: true,
    },
  ],
  valueType: ["string", "number", "boolean", "array", "color", "object"],
  blockOptions: {
    color: "#ff6600",
    icon: "无",
    generateBlock: true,
    inputsInline: false,
    space: 16,
  },
});
Widget.prototype.genNotification_only_title = function (id, title, foreground) {
  return {
    id: id,
    title: title,
    foreground: foreground,
  };
};
types["methods"].push({
  key: "genNotification_processbar",
  label: "通知_进度条",
  params: [
    {
      key: "id",
      label: "id",
      valueType: "number",
      defaultValue: 1,
    },
    {
      key: "title",
      label: "标题",
      valueType: "string",
      defaultValue: "Hello World",
    },
    {
      key: "text",
      label: "文字",
      valueType: "string",
      defaultValue: "This is my first notification!",
    },
    {
      key: "progressBar_value",
      label: "进度条(0-100)",
      valueType: "number",
      defaultValue: 20,
    },
  ],
  valueType: ["string", "number", "boolean", "array", "color", "object"],
  blockOptions: {
    color: "#ff6600",
    icon: "无",
    generateBlock: true,
    inputsInline: false,
    space: 16,
  },
});
Widget.prototype.genNotification_processbar = function (
  id,
  title,
  text,
  progressBar_value
) {
  return {
    id: id,
    title: title,
    text: text,
    progressBar: { value: progressBar_value },
  };
};

exports.types = types;
exports.widget = Widget;
