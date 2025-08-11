var window = this.window;

const types = {
    isInvisibleWidget: true,
    type: "JSLH",
    icon: "https://ocean.codemao.cn/appcraft/resource/icon/基础/链接.svg",
    title: "跳转网页",
    version: "2.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
          this.widgetLog('编程猫：8525855');
  this.widgetLog('B站：1523540905');
  this.widgetLog('QQ：2635725313');
  this.widgetLog('青B2la 出品');

    }

}

types['methods'].push({
    key: 'javascript_location_href_JSLH',
    label: '跳转网页',
    params: [
      {
          key: 'location_href_LH',
          label: '链接',
          valueType: 'string',
          defaultValue: 'https://eincent.cn',
      },],

    blockOptions: {
    color: "#B8DFFF",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_location_href_JSLH = function (location_href_LH,) {
      window.location.href=location_href_LH;

}
exports.types = types;
exports.widget = Widget;
