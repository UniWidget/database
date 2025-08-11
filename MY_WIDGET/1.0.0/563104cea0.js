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

    }

}

types['events'].push({
    key: 'ab',
    label: '',
    params: [
      {
          key: 'abab',
          label: '阿巴',
          valueType: 'string',
      },],

})

exports.types = types;
exports.widget = Widget;
