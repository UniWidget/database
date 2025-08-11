const types = {
  isInvisibleWidget: true,
  type: "EXAMPLE_WIDGET",
  icon: "icon-toolbox-feature",
  title: "示例控件",
  version: "1.0.0",
  docs: {
    url: 'https://example.com/docs/widget',
  },
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


exports.types = types;
exports.widget = Widget;
