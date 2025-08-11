const types = {
  isInvisibleWidget: false,
  type: "SM_DMT_WIDGET",
  icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
  title: "代码显示",
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
    key: 'dm',
    label: '代码',
    valueType: 'string',
    editorType: 'TextArea',
    defaultValue: 'print(\'codemao\', 001)',

})

types['properties'].push({
    key: 'color',
    label: '代码颜色',
    valueType: 'color',
    defaultValue: '#ffffff',

})

types['properties'].push({
    key: 'muncolor',
    label: '底色',
    valueType: 'color',
    defaultValue: '#333333',

})

class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.__width = props.__width;
    this.__height = props.__height;
    this.dm=props.dm;
  this.color=props.color;
  this.muncolor=props.muncolor;

  }
  render() {
    return(
      React.createElement("kbd", {  style: {  color: (this.color),
        backgroundColor: (this.muncolor),
      },
    }, [this.dm])
  );

  }
}

exports.types = types;
exports.widget = Widget;
