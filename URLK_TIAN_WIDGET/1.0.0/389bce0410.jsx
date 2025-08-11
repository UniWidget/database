const types = {
  isInvisibleWidget: false,
  type: "URLK_TIAN_WIDGET",
  icon: "https://30022264.s21i.faiusr.com/4/4/ABUIABAEGAAg26eznwYo9OO6jwIwsAk4wAc!300x300.png.webp",
  title: "weycloud",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: "__width",
      label: "宽度",
      valueType: "number",
      defaultValue: 300,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: "__height",
      label: "高度",
      valueType: "number",
      defaultValue: 500,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: "__size",
      label: "",
      valueType: "number",
      defaultValue: 0,
      readonly: true,
      blockOptions: {
        setter: {
          keys: ["__height", "__width"],
        },
        getter: {
          keys: ["__height", "__width"],
        },
      },
    },
  ],
  methods: [],
  events: [],
};

types["properties"].push({
  key: "url",
  label: "链接",
  valueType: "string",
  defaultValue: "https://coco.codemao.cn/editor/player/181437140?channel=h5",
});

class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.__width = props.__width;
    this.__height = props.__height;
    this.widgetLog("wey出品");
    this.url = props.url;
  }
  render() {
    return React.createElement(
      "iframe",
      { loading: "lazy", src: this.url, width: "100%", height: "100%",style: {  border: 'none', }, },
      []
    );
  }
}

exports.types = types;
exports.widget = Widget;
