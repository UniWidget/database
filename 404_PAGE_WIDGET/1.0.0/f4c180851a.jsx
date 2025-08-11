const types = {
  isInvisibleWidget: false,
  type: "404_PAGE_WIDGET",
  icon: "https://public.coco-central.cn/waddle/2/waddle2.svg",
  title: "404页面",
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

  }
  render() {
    return(
      React.createElement("iframe", {  src: 'https://api.heylie.cn/api/mistake',
      width: '100%',
      height: '100%',
    }, [])
  );

  }
}

exports.types = types;
exports.widget = Widget;