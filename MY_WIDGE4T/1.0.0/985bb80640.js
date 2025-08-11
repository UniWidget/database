const types = {
    isInvisibleWidget: true,
    type: "MY_WIDGE4T",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "崩溃",
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
    key: 'methodName',
    label: '',
    params: [],

})
Widget.prototype.methodName = function () {
      while (true) {
    console.log('你的PC没了');
  }

}
exports.types = types;
exports.widget = Widget;
