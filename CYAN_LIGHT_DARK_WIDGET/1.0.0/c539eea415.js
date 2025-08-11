const auther = '青舒计';//
const qq = 2635725313;//
var document = this.document;
var window = this.window;

const types = {
    isInvisibleWidget: true,
    type: "CYAN_LIGHT_DARK_WIDGET",
    icon: "https://ocean.codemao.cn/appcraft/resource/icon/基础/调节.svg",
    title: "检测明暗模式",
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
  this.light_and_dark=props.light_and_dark;
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {//
  	this.emit("light_and_dark_change"  , event.matches);//
  });
    }

}

types['events'].push({
    key: 'light_and_dark_change',
    label: '暗或亮切换',
    params: [
      {
          key: 'is_dark2',
          label: '是否暗',
          valueType: 'boolean',
      },],

})

types['methods'].push({
    key: 'is_dark2',
    label: '是否暗',
    params: [],
    valueType: 'boolean',

})
Widget.prototype.is_dark2 = function () {
      return (window.matchMedia('(prefers-color-scheme: dark)').matches);
}
exports.types = types;
exports.widget = Widget;
