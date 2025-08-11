const auther = '青舒计';//
const qq = 2635725313;//
var document = this.document;
var window = this.window;
var navigator = this.navigator;
var history = this.history;
const types = {
  isInvisibleWidget: false,
  type: "CYAN_LIGHT_DARK_WIDGET",
  icon: "https://ocean.codemao.cn/appcraft/resource/icon/基础/调节.svg",
  title: "明暗模式",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: 0,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: '__height',
      label: '高度',
      valueType: 'number',
      defaultValue: 0,
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
types.docs={url:""};
types.platforms=["android","ios","web"]
class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.__width = props.__width;
    this.__height = props.__height;
    this.widgetLog('编程猫：8525855');
  this.widgetLog('B站：1523540905');
  this.widgetLog('QQ：2635725313');
  this.widgetLog('©青舒计 2022 精心制作');
  this.light_and_dark=props.light_and_dark;
  window.matchMedia('(prefers-color-scheme: dark)')//
        .addEventListener('change', event => {//
    this.emit("light_and_dark_change"  , event.matches);//
  });
  }
  render() {
    return(
      React.createElement("style", {}, [['html{filter:invert(',Number(this.light_and_dark),')'].join('')])
  );

  }
}

types['events'].push({
    key: 'light_and_dark_change',
    label: '暗或亮切换',
    params: [
      {
          key: 'is_dark1',
          label: '是否暗',
          valueType: 'boolean',
      },],

})
Widget.prototype.light_and_dark_change = function (event) {
      this.emit("light_and_dark_change"  , event.matches);
}

types['methods'].push({
    key: 'is_dark2',
    label: '是否暗',
    params: [],
    valueType: 'boolean',

})
Widget.prototype.is_dark2 = function () {
      return (window.matchMedia('(prefers-color-scheme: dark)').matches);
}
types['properties'].push({
    key: 'light_and_dark',
    label: '暗或亮',
    valueType: 'boolean',
    defaultValue: false,

})

exports.types = types;
exports.widget = Widget;
