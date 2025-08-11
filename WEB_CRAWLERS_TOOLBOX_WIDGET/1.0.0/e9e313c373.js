const types = {
    isInvisibleWidget: true,
    type: "WEB_CRAWLERS_TOOLBOX_WIDGET",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "爬虫工具箱",
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

types['methods'].push({
    key: 'lookup',
    label: '查找',
    params: [
      {
          key: 'str1',
          label: '字符串',
          valueType: 'string',
          defaultValue: '<h1>Hello！</h1>',
      },
      {
          key: 'str2',
          label: '从',
          valueType: 'string',
          defaultValue: '<h1>',
      },
      {
          key: 'str3',
          label: '到',
          valueType: 'string',
          defaultValue: '</h1>',
      },],
    valueType: 'string',

})
Widget.prototype.lookup = function (str1,str2,str3,) {
      return (str1.split(str2)[1].split(str3)[0]);
}
exports.types = types;
exports.widget = Widget;
