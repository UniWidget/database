var document = this.document;
var window = this.window;
var navigator = this.navigator;
var history = this.history;
const types = {
    isInvisibleWidget: true,
    type: "SYSYTEM_HAOZI",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "设备检测",
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
    key: 'SYSTEM',
    label: '设备系统',
    params: [],
    valueType: 'string',

})
Widget.prototype.SYSTEM = function () {
      return (navigator.platform);
}
types['methods'].push({
    key: 'SYS',
    label: '设备类型（手机/电脑）',
    params: [],
    valueType: 'string',

})
Widget.prototype.SYS = function () {
      if ((navigator.platform).startsWith('Win')) {
    return '电脑';} else if ((navigator.platform).startsWith('MacIntel')) {
    return '手机';} else if ((navigator.platform).startsWith('Mac')) {
    return '电脑';} else if ((navigator.platform).startsWith('Linux aarch')) {
    return '手机';} else if ((navigator.platform).startsWith('Linux')) {
    return '电脑';} else {
    return '无法识别';}

}
exports.types = types;
exports.widget = Widget;
