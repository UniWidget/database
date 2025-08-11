const types = {
    isInvisibleWidget: true,
    type: "MY_WIDGET",
    icon: "https://waddle.coco-central.cn/static/img/logo.svg",
    title: "时间戳",
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
    label: '返回时间戳',
    params: [],
    valueType: 'number',
})
Widget.prototype.methodName = function () {
      return (new Date().getTime());
}
exports.types = types;
exports.widget = Widget;
