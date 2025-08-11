var fz;



const types = {
    isInvisibleWidget: true,
    type: "hblb_cyj",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "合并列表",
    version: "1.0.0",
    isGlobalWidget: false,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);

    }

}
fz = [];

types['methods'].push({
    key: 'methodName',
    label: '合并',
    params: [
      {
          key: 'sz',
          label: '列表',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: '列表',
      },],
    valueType: ['string','number','boolean','array','color','object',],
    blockOptions: {
    color: '#ffbb55',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.methodName = function (sz,) {
      fz = sz;
  return (fz.join(''));
}
exports.types = types;
exports.widget = Widget;
