const types = {
    isInvisibleWidget: true,
    type: "LB_TJ_WIDGET",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "字符串转任何类型",
    version: "1.0.1",
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
    key: 'sr_lb',
    label: '字符串转列表',
    params: [
      {
          key: 'sr',
          label: '字符串',
          valueType: 'string',
          defaultValue: '[0,1,2]',
      },],
    valueType: 'array',

})
Widget.prototype.sr_lb = function (sr,) {
      return (JSON.parse(['{"data":',sr,'}'].join(''))['data']);
}
types['methods'].push({
    key: 'sr_zd',
    label: '字符串转字典',
    params: [
      {
          key: 'sr2',
          label: '字符串',
          valueType: 'string',
          defaultValue: '{"1":2}',
      },],
    valueType: 'object',

})
Widget.prototype.sr_zd = function (sr2,) {
      return (JSON.parse(sr2));
}
exports.types = types;
exports.widget = Widget;
