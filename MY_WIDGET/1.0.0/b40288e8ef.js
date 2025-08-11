const types = {
    isInvisibleWidget: true,
    type: "MY_WIDGET",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "我的控件",
    version: "1.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
          while ('嗨害嗨' == '嗨害嗨') {
    this.widgetLog('嗨害嗨');
    this.widgetWarn('嗨害嗨');
    this.widgetError('嗨害嗨');
    console.error('嗨害嗨');
    console.warn('嗨害嗨');
    console.log('嗨害嗨');
  }

    }

}

exports.types = types;
exports.widget = Widget;
