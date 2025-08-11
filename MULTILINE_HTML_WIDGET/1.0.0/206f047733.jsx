const types = {
  isInvisibleWidget: false,
  type: "MULTILINE_HTML_WIDGET",
  icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
  title: "多行HTML",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: 360,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: '__height',
      label: '高度',
      valueType: 'number',
      defaultValue: 640,
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
    this.text=props.text;

  }
  render() {
    return(
      React.createElement("div", {dangerouslySetInnerHTML: {__html: (String(String(String(String(String('<div style="width: ' + String(this.__width)) + 'px;height: ') + String(this.__height)) + 'px; overflow-x:hidden;">') + String(this.text)) + '</div>')}}, null)
  );

  }
}

types['properties'].push({
    key: 'text',
    label: '文本',
    valueType: 'string',
    editorType: 'TextArea',
    defaultValue: '<s>文本</s>',

})

exports.types = types;
exports.widget = Widget;
