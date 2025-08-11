const types = {
  isInvisibleWidget: false,
  type: "HTTPS_VM",
  icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
  title: "Https_Tools",
  version: "1.0.2",
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
    this.width=props.width;
  this.height=props.height;
  this.https=props.https;

  }
  render() {
    return(
      React.createElement("iframe", {  width: (this.width),
      height: (this.height),
      src: (this.https),
    }, null)
  );

  }
}

types['properties'].push({
    key: 'width',
    label: '宽度',
    valueType: 'number',
    defaultValue: 100,

})

types['properties'].push({
    key: 'height',
    label: '高度',
    valueType: 'number',
    defaultValue: 100,

})

types['properties'].push({
    key: 'https',
    label: '地址',
    valueType: 'string',
    defaultValue: 'https://coco.codemao.cn',

})

types['methods'].push({
    key: 'get_width_height',
    label: '获取',
    params: [
      {
          key: 'get_mode',
          label: '',
          valueType: 'string',
          dropdown: [
    { label: '宽度', value: '宽度', },

    { label: '高度', value: '高度', },
  ],
      },

],
    valueType: 'number',
    blockOptions: {
    color: '#33cc00',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.get_width_height = function (get_mode,) {
      if ('高度' == get_mode) {
    return (this.height);} else {
    return (this.width);}

}
types['methods'].push({
    key: 'set_width_height',
    label: '设置',
    params: [
      {
          key: 'set_mode',
          label: '',
          valueType: 'string',
          dropdown: [
    { label: '宽度', value: '宽度', },

    { label: '高度', value: '高度', },
  ],
      },


      {
          key: 'set_Nm',
          label: '为',
          valueType: 'number',
          defaultValue: 100,
      },],

    blockOptions: {
    color: '#33cc00',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.set_width_height = function (set_mode,set_Nm,) {
      if ('高度' == set_mode) {
    this.setProps({ 'height': set_Nm });
  } else {
    this.setProps({ 'width': set_Nm });
  }

}
types['methods'].push({
    key: 'set_https',
    label: '设置',
    params: [
      {
          key: 'set_http',
          label: '为',
          valueType: 'string',
          defaultValue: 'https://',
      },],

    blockOptions: {
    color: '#3366ff',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.set_https = function (set_http,) {
      this.setProps({ 'https': set_http });

}
exports.types = types;
exports.widget = Widget;
