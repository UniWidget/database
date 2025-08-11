var b64;



const types = {
    isInvisibleWidget: true,
    type: "YYSWYS_B64",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "114514次安全BASE64加密",
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
    label: '执行114514次安全加密',
    params: [
      {
          key: 'paramName',
          label: '等待处刑值',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: '填写要加密的文本',
      },],
    valueType: ['string','number','boolean','array','color','object',],
})
Widget.prototype.methodName = function (paramName,) {
      b64 = (paramName);
  for (var count = 0; count < 114514; count++) {
    b64 = (btoa(encodeURI(b64)));
  }

}
exports.types = types;
exports.widget = Widget;
