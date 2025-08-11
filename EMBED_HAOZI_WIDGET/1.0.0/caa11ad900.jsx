const types = {
  isInvisibleWidget: false,
  type: "EMBED_HAOZI_WIDGET",
  icon: "",
  title: "Embed网页框",
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
      defaultValue: 250,
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
    defaultValue: 'http://www.baidu.com',

})

types['properties'].push({
    key: 'qrlx',
    label: '嵌入类型',
    valueType: 'string',
    defaultValue: 'text/html',

})

class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.__width = props.__width;
    this.__height = props.__height;
    this.url=props.url;
  this.qrlx=props.qrlx;

  }
  render() {
    return(
      React.createElement("div", {dangerouslySetInnerHTML: {__html: (['<embed src="',this.url,'" height=',this.__height,' width=',this.__width,' type="',this.qrlx,'"></embed>'].join(''))}}, null)
  );

  }
}

types['methods'].push({
    key: 'qrtype',
    label: '选择嵌入类型',
    params: [
      {
          key: 'xzlx',
          label: '类型',
          valueType: 'string',
          dropdown: [
    { label: 'text/html', value: 'text/html', },

    { label: 'image/jpg', value: 'image/jpg', },

    { label: 'video/webm', value: 'video/webm', },
  ],
      },

],
    valueType: 'string',
    blockOptions: {
    color: '#3333ff',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 25,
},
})
Widget.prototype.qrtype = function (xzlx,) {
      return xzlx;
}
types['methods'].push({
    key: 'new',
    label: '重新加载网页框',
    params: [],

    blockOptions: {
    color: '#339999',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.new = function () {
      this.setProps({ 'url': (this.url) });

}
exports.types = types;
exports.widget = Widget;