const types = {
    isInvisibleWidget: true,
    type: "CloudTime",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "获取时区时间",
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

types['events'].push({
    key: 'getSuccess',
    label: '获取时区服务器时间成功',
    params: [
      {
          key: 'CloudTime',
          label: '时区服务器时间',
          valueType: ['string','number','boolean','color','array','object'],
      },],

})

types['methods'].push({
    key: 'getCloudTime',
    label: '获取用户时区服务器时间',
    params: [],


})
Widget.prototype.getCloudTime = function () {
      var userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;var options = {timeZone: userTimezone,hour12: false,year: 'numeric',month: '2-digit',day: '2-digit',hour: '2-digit',minute: '2-digit',second: '2-digit'};var dtf = new Intl.DateTimeFormat('zh-CN', options);var formatter = dtf.formatToParts(new Date());var localTime = '';for (var i = 0; i < formatter.length; i++) {var { type, value } = formatter[i];if (type !== 'literal') {localTime += value;}}this.emit("getSuccess",localTime)
}
exports.types = types;
exports.widget = Widget;
