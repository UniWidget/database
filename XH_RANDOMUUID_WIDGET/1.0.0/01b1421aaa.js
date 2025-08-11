
const types = {
    isInvisibleWidget: true,
    type: "XH_RANDOMUUID_WIDGET",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "随机UID",
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
    key: 'get',
    label: '获取',
    params: [],
    valueType: 'string',

})
Widget.prototype.get = function () {
      return crypto.randomUUID();
}
exports.types = types;
exports.widget = Widget;