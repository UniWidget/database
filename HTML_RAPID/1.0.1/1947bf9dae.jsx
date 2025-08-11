const types = {
  isInvisibleWidget: false,
  type: "HTML_RAPID",
  icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
  title: "HTML_RAPID",
  version: "1.0.1",
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: 200,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: '__height',
      label: '高度',
      valueType: 'number',
      defaultValue: 150,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: '__size',
      label: '',
      valueType: 'number',
      defaultValue: 0,
      readonly: true,
      blockOptions: {
        setter: {
          keys: ['__height', '__width'],
        },
        getter: {
          keys: ['__height', '__width'],
        },
      },
    },
  ],
  methods: [],
  events: [],
};

class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.__width = props.__width;
    this.__height = props.__height;
    this.content=props.content;

  }
  render() {
    return(
      React.createElement("div", {dangerouslySetInnerHTML: {__html: (this.content)}}, null)
  );

  }
}

types['properties'].push({
    key: 'content',
    label: 'HTML文本',
    valueType: 'string',
    editorType: 'TextArea',
    defaultValue: '<a href="https://coco-central.cn/">Hello, CoCo!</a>',

})

exports.types = types;
exports.widget = Widget;
