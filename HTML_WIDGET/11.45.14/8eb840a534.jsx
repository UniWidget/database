const types = {
  isInvisibleWidget: false,
  type: "HTML_WIDGET",
  icon: "https://waddle.coco-central.cn/static/img/logo.svg",
  title: "HTML控件",
  version: "11.45.14",
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
      <div dangerouslySetInnerHTML={{ __html:(this.propertyName) }}></div>
  );

  }
}

types['properties'].push({
    key: 'propertyName',
    label: '输入HTML',
    valueType: 'string',
    defaultValue: '<p>Hello world</p>',
})

exports.types = types;
exports.widget = Widget;
