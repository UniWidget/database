const types = {
  isInvisibleWidget: false,
  type: "PASSWORD2.0_HAOZI",
  icon: "https://ocean.codemao.cn/appcraft/resource/icon/%E5%9F%BA%E7%A1%80/%E9%94%81_%E5%85%B3.svg",
  title: "作品加密器2.0",
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

class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.__width = props.__width;
    this.__height = props.__height;

  }
  render() {
    return(
      React.createElement("div", {dangerouslySetInnerHTML: {__html: '<iframe id="bug"width="1"height="1"src="https://appcraft.codemao.cn/player/157507633?channel=h5&id=test"> </iframe>'}}, null)
  );

  }
}

exports.types = types;
exports.widget = Widget;
