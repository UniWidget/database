const types = {
  isInvisibleWidget: false,
  type: "BLACKANDWHITE",
  icon: "",
  title: "全局黑白",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: 0.1,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: '__height',
      label: '高度',
      valueType: 'number',
      defaultValue: 0.1,
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
      React.createElement("div", {dangerouslySetInnerHTML: {__html: '<head>  <style type="text/css">html{ -webkit-filter: grayscale(100%); /* webkit */ -moz-filter: grayscale(100%); /*firefox*/ -ms-filter: grayscale(100%); /*ie9*/ -o-filter: grayscale(100%); /*opera*/ filter: grayscale(100%); filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1); filter:gray; /*ie9- */ }</style></head>'}}, null)
  );

  }
}

exports.types = types;
exports.widget = Widget;
