const types = {
    isInvisibleWidget: true,
    type: "json",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "文本转json",
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
    label: '文本',
    params: [
      {
          key: 'paramName',
          label: '转json',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: null,
      },],
    valueType: 'object',
    blockOptions: {
    color: '#ffbb55',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.methodName = function (paramName,) {
      return (JSON.parse(paramName));
}
exports.types = types;
exports.widget = Widget;
