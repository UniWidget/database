var nx, ny, nw, nh;


var document = this.document;
var window = this.window;
var navigator = this.navigator;
var history = this.history;
const types = {
    isInvisibleWidget: true,
    type: "WISE_XOY",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "坐标自适应",
    version: "1.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
          types.docs={url:""};
  types.platforms=["android","ios","web"]
    }

}

types['methods'].push({
    key: 'getXOY',
    label: '获取该元素的',
    params: [
      {
          key: 'x',
          label: 'X坐标',
          valueType: 'number',
          defaultValue: "",
      },
      {
          key: 'y',
          label: 'Y坐标',
          valueType: 'number',
          defaultValue: "",
      },
      {
          key: 'w',
          label: '宽度w',
          valueType: 'number',
          defaultValue: "",
      },
      {
          key: 'h',
          label: '高度h',
          valueType: 'number',
          defaultValue: "",
      },],
    valueType: ['string','number','boolean','array','color','object',],
    blockOptions: {
    color: '#3366ff',
    icon: 'https://waddle.coco-central.cn/static/img/logo/logo-white.svg',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.getXOY = function (x,y,w,h,) {
      nx = (x / 360) * (screen.width);
  ny = (y / 640 - 0.1) * (screen.height);
  nw = (w / 360 - 0.1) * (screen.width);
  nh = (h / 640 - 0.1) * (screen.height);
  return ([['x坐标:',nx,','].join(''),['y坐标:',ny,','].join(''),['宽度:',nw,','].join(''),['高度:',nh,','].join('')].join(''));
}
types['methods'].push({
    key: 'getMonitor',
    label: '屏幕像素',
    params: [],
    valueType: ['string','number','boolean','array','color','object',],
    blockOptions: {
    color: '#3366ff',
    icon: 'https://waddle.coco-central.cn/static/img/logo/logo-white.svg',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.getMonitor = function () {
      return ([screen.width,',',screen.height].join(''));
}
exports.types = types;
exports.widget = Widget;
