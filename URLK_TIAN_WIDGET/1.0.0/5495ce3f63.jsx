const types = {
  isInvisibleWidget: false,
  type: "URLK_TIAN_WIDGET",
  icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
  title: "网页框",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: 300,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: '__height',
      label: '高度',
      valueType: 'number',
      defaultValue: 500,
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
    key: 'url',
    label: '链接',
    valueType: 'string',
    defaultValue: 'https://waddle-beta.coco-central.cn/',

})

class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.__width = props.__width;
    this.__height = props.__height;
    this.widgetLog('控件作者：天上来的熊孩子（QQ：2639194612）');
  this.url=props.url;

  }
  render() {
    return(
      React.createElement("iframe", {  loading: "lazy",
      src: (this.url),
      width: "100%",
      height: "100%",
    }, [])
  );

  }
}

exports.types = types;
exports.widget = Widget;
