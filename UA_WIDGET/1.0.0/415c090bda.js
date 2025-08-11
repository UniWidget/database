var platform = this.window.navigator.platform;
var language = this.window.navigator.language;

const types = {
  type: 'UA_WIDGET',
  isInvisibleWidget: true,
  icon: 'icon-toolbox-variable',
  title: 'UA侦测',
  isGlobalWidget: true,
  version: "1.0.0",
  docs: {
    url: 'https://www.runoob.com/jsref/obj-navigator.html'
  },
  platforms: ['web', 'android', 'ios'],
  properties: [],
  methods: [
    {
      key: 'toSystem',
      label: '获取当前操作系统',
      valueType: 'string',
      params: [],
      blockOptions: {
        color: 'rgba(40,123,255,0.95)',
      },
      tooltip: `获取运行浏览器的操作系统平台`,
    },
    {
      key: 'toLanguage',
      label: '获取当前语言',
      valueType: 'string',
      params: [],
      blockOptions: {
        color: 'rgba(40,123,255,0.95)',
      },
      tooltip: `获取运行浏览器的使用语言`,
    },
  ],
  events: []
};

// 控件实体定义
class Widget extends InvisibleWidget {
  constructor(props) {
    super(props);
  }
  toSystem() {
    return platform;
  }
  toLanguage() {
    return language;
  }
}

exports.types = types;
exports.widget = Widget;
