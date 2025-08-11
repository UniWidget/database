const types = {
  isInvisibleWidget: false,
  type: "MY_WIDGET",
  icon: "https://alpha-q3.sourcegcdn.com/2022/06/04/sIC9Ep5J.jpg",
  title: "HTML",
  version: "2.0.1",
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
    label: 'HTML代码',
    valueType: 'string',
    defaultValue: '<p>aba</p>',
})

exports.types = types;
exports.widget = Widget;
