var document = this.document;
var window = this.window;
var navigator = this.navigator;
var history = this.history;
var e = document.createElement("script")
e.setAttribute("src","https://liulyxandy-codemao.github.io/coco-library/jsOnline/recaptcha.js")
document.getElementsByTagName("body")[0].appendChild(e)
const types = {
  isInvisibleWidget: false,
  type: "HCAPTCHA",
  icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
  title: "hCaptcha",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: 300,
      blockOptions: {
        generateBlock: false,
      },
      readonly: true
    },
    {
      key: '__height',
      label: '高度',
      valueType: 'number',
      defaultValue: 83.320,
      blockOptions: {
        generateBlock: false,
      },
      readonly: true
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
    var q = setInterval(()=>{
      try{
      if(this.done()){
        this.emit("finish")
        clearInterval(q)
      }}catch(e){console.log('error')}
    },500)
  }
  render() {
    return(
      React.createElement("div", {  id: 'h-captcha',
    }, [])
  );

  }
}

types['methods'].push({
    key: 'active',
    label: '激活',
    params: [],


})
Widget.prototype.active = function () {
      window.hcaptcha.execute(window.capid);

}
types['methods'].push({
    key: 'response',
    label: '获取结果',
    params: [],
    valueType: 'string'

})
Widget.prototype.response = function () {
      return window.hcaptcha.getResponse(window.capid);

}
types['methods'].push({
  key: 'done',
  label: '完成验证',
  params: [],
  valueType: 'boolean'

})
Widget.prototype.done = function () {
    if(window.hcaptcha.getResponse(window.capid)!=''){return true;}else{return false;}

}
types['methods'].push({
    key: 'reset',
    label: '重置',
    params: [],


})
Widget.prototype.reset = function () {
      window.hcaptcha.reset(window.capid);

}
types['events'].push({
    key: 'finish',
    label: '完成验证',
    params: [],

})

exports.types = types;
exports.widget = Widget;
