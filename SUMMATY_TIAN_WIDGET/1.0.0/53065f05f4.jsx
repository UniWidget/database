const types = {
  isInvisibleWidget: false,
  type: "SUMMATY_TIAN_WIDGET",
  icon: "icon-widget-text",
  title: "说明文本",
  version: "1.0.0",
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

types['properties'].push({
    key: 'title',
    label: '标题',
    valueType: 'string',
    defaultValue: '蔡徐坤',

})

types['properties'].push({
    key: 'text',
    label: '解释说明',
    valueType: 'string',
    defaultValue: '蔡徐坤就是蔡徐坤',

})

class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.__width = props.__width;
    this.__height = props.__height;
    this.widgetLog('控件作者：天上来的熊孩子（QQ：2639194612）');
  this.title=props.title;
  this.text=props.text;

  }
  render() {
    return(
      React.createElement("div", {dangerouslySetInnerHTML: {__html: (['<details>   <summary>',this.title,'</summary>   <p>',this.text,'</p> </details>'].join(''))}}, null)
  );

  }
}

exports.types = types;
exports.widget = Widget;