const types = {
    isInvisibleWidget: true,
    type: "NOTIFICATION",
    icon: "https://tse1-mm.cn.bing.net/th/id/OIP-C.F119LVb83d-7FdTsPP-KIgHaHa",
    title: "Notification通知",
    version: "2.1.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
          this.widgetLog('感谢使用本控件');
  this.widgetLog('作者:嘎嘎叫的青蛙');
  this.widgetLog('QQ:359148497');
  console.log('感谢使用本控件');
  console.log('作者:嘎嘎叫的青蛙');
  console.log('QQ:359148497');

    }

}

types['properties'].push({
    key: 'doc_one',
    label: 'MDN教程（英文，比较全面）',
    valueType: 'string',
    defaultValue: 'https://developer.mozilla.org/zh-CN/docs/Web/API/notification',
    blockOptions: {
    color: '#ffbb55',
    icon: '',
    generateBlock: false,
    inputsInline: true,
    space: 16,
},
})

types['properties'].push({
    key: 'doc_two',
    label: 'CSDN教程（中文，建议看这个）',
    valueType: 'string',
    defaultValue: 'https://blog.csdn.net/WangMrII/article/details/121143235',
    blockOptions: {
    color: '#ffbb55',
    icon: '',
    generateBlock: false,
    inputsInline: true,
    space: 16,
},
})

types['methods'].push({
    key: 'doc',
    label: '点开属性去看看教程吧',
    params: [],

    blockOptions: {
    color: '#ff9966',
    icon: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.F119LVb83d-7FdTsPP-KIgHaHa',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.doc = function () {

}
types['methods'].push({
    key: 'notification',
    label: '弹出通知',
    params: [
      {
          key: 'title',
          label: '标题',
          valueType: 'string',
          defaultValue: 'Hello!',
      },
      {
          key: 'origin',
          label: '点击后是否跳转',
          valueType: 'boolean',
          defaultValue: true,
      },
      {
          key: 'originUrl',
          label: '点击后跳转的网址',
          valueType: 'string',
          defaultValue: 'https://developer.mozilla.org/zh-CN/docs/Web/API/notification/Notification',
      },
      {
          key: 'data',
          label: 'options对象',
          valueType: 'string',
          defaultValue: '{"body":"notification是个很好用的API"}',
      },],

    blockOptions: {
    color: '#ff9900',
    icon: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.F119LVb83d-7FdTsPP-KIgHaHa',
    generateBlock: true,
    inputsInline: false,
    space: 16,
},
})
Widget.prototype.notification = function (title,origin,originUrl,data,) {
      notification = new Notification(title, JSON.parse(data));if (origin) {
    notification.onclick = function() {window.open(originUrl,"_blank");notification.close();}}

}
types['methods'].push({
    key: 'options',
    label: '生成一个options对象（改参数时请对照文档，不然可能无法正常显示）',
    params: [
      {
          key: 'dir',
          label: '文字方向（字符串）',
          valueType: 'string',
          dropdown: [
    { label: 'auto', value: 'auto', },

    { label: 'ltr', value: 'ltr', },

    { label: 'rtl', value: 'rtl', },
  ],
      },


      {
          key: 'lang',
          label: '语言（字符串）',
          valueType: 'string',
          defaultValue: 'zh-CN',
      },
      {
          key: 'badge',
          label: '代替正文的图像（URL字符串）',
          valueType: 'string',
          defaultValue: '',
      },
      {
          key: 'body',
          label: '正文（字符串）',
          valueType: 'string',
          defaultValue: 'Hello!',
      },
      {
          key: 'tag',
          label: '标签（字符串）',
          valueType: 'string',
          defaultValue: '',
      },
      {
          key: 'icon',
          label: '图标（URL字符串）',
          valueType: 'string',
          defaultValue: '',
      },
      {
          key: 'image',
          label: '显示的图像（URL字符串）',
          valueType: 'string',
          defaultValue: '',
      },
      {
          key: 'data',
          label: '和通知有关的数据（对象）',
          valueType: 'string',
          defaultValue: '{"name":"一封邮件","id":"5f7ced"}',
      },
      {
          key: 'vibrate',
          label: '震动和停止的时间(ms)（列表）',
          valueType: 'string',
          defaultValue: '[500,500,500,500]',
      },
      {
          key: 'renotify',
          label: '只读属性（布尔值）',
          valueType: 'boolean',
          defaultValue: false,
      },
      {
          key: 'requireInteraction',
          label: '通知应保持有效（布尔值）',
          valueType: 'boolean',
          defaultValue: false,
      },],
    valueType: 'string',
    blockOptions: {
    color: '#ff9900',
    icon: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.F119LVb83d-7FdTsPP-KIgHaHa',
    generateBlock: true,
    inputsInline: false,
    space: 16,
},
})
Widget.prototype.options = function (dir,lang,badge,body,tag,icon,image,data,vibrate,renotify,requireInteraction,) {
      return {'dir': dir, 'lang': lang, 'badge': badge, 'body': body, 'tag': tag, 'icon': icon, 'image': image, 'data': (JSON.parse(data)), 'vibrate': vibrate, 'renotify': Boolean(renotify), 'requireInteraction': Boolean(requireInteraction)};
}
exports.types = types;
exports.widget = Widget;
