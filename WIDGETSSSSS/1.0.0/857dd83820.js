const types = {
    isInvisibleWidget: true,
    type: "WIDGETSSSSS",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "一百块",
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
for (var count = 0;count < 100;count++) {
  types['methods'].push({
      key: 'say_'+count,
      label: '输出'+count,
      params: [],
  })
  Widget.prototype.say_ = function () {
        console.log(i);

  }}

exports.types = types;
exports.widget = Widget;
