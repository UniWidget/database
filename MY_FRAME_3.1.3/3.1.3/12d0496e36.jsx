const types = {
  isInvisibleWidget: false,
  type: "MY_FRAME_3.1.3",
  icon: "https://static.codemao.cn/coco/player/unstable/Hke8SJ1C3.image/png?hash=Fr5c2xDNqLnVtwSmxKgstfA0kSbp",
  title: "iframe网页3.1.3",
  version: "3.1.3",
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: 360,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: '__height',
      label: '高度',
      valueType: 'number',
      defaultValue: 640,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: '__size',
      label: '',
      valueType: 'number',
      defaultValue: 0,
      readonly: true,
      blockOptions: {
        setter: {
          keys: ['__height', '__width'],
        },
        getter: {
          keys: ['__height', '__width'],
        },
      },
    },
  ],
  methods: [],
  events: [],
};

class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.__width = props.__width;
    this.__height = props.__height;
    this.widgetLog('Yfyka的淼飞工作室提供技术支持');
  this.src=props.src;
  this.w=props.w;
  this.h=props.h;
  this.sandbox=props.sandbox;
  this.importance=props.importance;
  this.allow=props.allow;
  this.referrer=props.referrer;
  this.tishi=props.tishi;

  }
  render() {
    return(
      React.createElement("iframe", {  onLoad: this.onLoad.bind(this),
      onClick: this.onClick.bind(this),
      onError: this.onError.bind(this),
      frameborder: 0,
      src: (this.src),
      width: (this.w),
      height: (this.h),
      sandbox: (this.sandbox),
      importance: (this.importance),
      allow: (this.allow),
      referrerpolicy: (this.referrer),
    }, null)
  );

  }
}

types['properties'].push({
    key: 'tishi',
    label: '提示',
    valueType: 'string',
    editorType: 'TextArea',
    defaultValue: '属性内容在https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe里看',

})

types['properties'].push({
    key: 'sandbox',
    label: '沙盒安全',
    valueType: 'string',
    editorType: 'TextArea',
    defaultValue: '',

})

types['properties'].push({
    key: 'referrer',
    label: '发送referrer首部设置',
    valueType: 'string',
    editorType: 'TextArea',
    defaultValue: '',

})

types['properties'].push({
    key: 'importance',
    label: '加载优先级',
    valueType: 'string',
    editorType: 'TextArea',
    defaultValue: '',

})

types['properties'].push({
    key: 'propertyName',
    label: '允许全屏（非作品内的”全屏模式设置“）',
    valueType: 'string',
    editorType: 'TextArea',
    defaultValue: '',

})

types['properties'].push({
    key: 'w',
    label: '宽',
    valueType: 'number',
    defaultValue: "100%",

})

types['properties'].push({
    key: 'h',
    label: '高',
    valueType: 'number',
    defaultValue: "100%",

})

types['properties'].push({
    key: 'src',
    label: '网址',
    valueType: 'string',
    editorType: 'TextArea',
    defaultValue: 'https://cn.bing.com/',

})

types['events'].push({
    key: 'onError',
    label: '网页加载失败',
    params: [],

})
Widget.prototype.onError = function (event) {
      this.emit("onError");
}

types['events'].push({
    key: 'onLoad',
    label: '网页加载完成',
    params: [],

})
Widget.prototype.onLoad = function (event) {
      this.emit("onLoad");
}

types['events'].push({
    key: 'onClick',
    label: '网页被点击',
    params: [],

})
Widget.prototype.onClick = function (event) {
      this.emit("onClick");
}

exports.types = types;
exports.widget = Widget;