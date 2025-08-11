const types = {
  isInvisibleWidget: false,
  type: "MY_WIDGET",
  icon: "https://waddle.coco-central.cn/static/img/logo.svg",
  title: "我的控件",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [],
  methods: [],
  events: [],
};

class Widget extends VisibleWidget {
  constructor(props) {
    super(props);

  }
  render() {
    return(
      <div dangerouslySetInnerHTML={{ __html:(this.HTMLinner) }}></div>
  );

  }
}

types['properties'].push({
    key: 'HTMLinner',
    label: 'HTML内容',
    valueType: 'string',
    defaultValue: '<p>HTML</p>',
})

exports.types = types;
exports.widget = Widget;
