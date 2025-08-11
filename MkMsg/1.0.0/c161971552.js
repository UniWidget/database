
var window = this.window
var document = this.document


const types = {
    isInvisibleWidget: true,
    type: "MkMsg",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "MK消息提示",
    version: "1.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
          this.widgetLog('By MarkJY');
    }

}

function Toast(msg,duration){
  duration=isNaN(duration)?3000:duration;
  var m = document.createElement('div');
  m.innerHTML = msg;
  m.style.cssText="max-width:60%;min-width: 150px;padding:0 14px;height: 40px;color: rgb(255, 255, 255);line-height: 40px;text-align: center;border-radius: 4px;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 9999999999;background: rgba(0, 0, 0,.7);font-size: 16px;";
  document.body.appendChild(m);
  setTimeout(function() {
    var d = 0.5;
    m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
    m.style.opacity = '0';
    setTimeout(function() { document.body.removeChild(m) }, d * 1000);
  }, duration);
}

types['methods'].push({
    key: 'toast',
    label: 'Toast弹出',
    params: [{
          key: 'id',
          label: '内容',
          valueType: 'string',
          defaultValue: 'WWW.EINCENT.CN',
      },],

    blockOptions: {
    color: "#FFBB55FF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.toast = function (id,) {
    Toast(id,2000)
}

exports.types = types;
exports.widget = Widget;
