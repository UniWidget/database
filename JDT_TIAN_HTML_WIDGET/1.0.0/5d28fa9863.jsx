const types = {
  isInvisibleWidget: false,
  type: "JDT_TIAN_HTML_WIDGET",
  icon: "icon-toolbox-control",
  title: "进度条",
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
      defaultValue: 30,
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
    this.max=props.max;
  this.value=props.value;
  this.widgetLog('控件作者：天上来的熊孩子（QQ：2639194612）');
  this.widgetLog('盗版可耻，正版光荣！');

  }
  render() {
    return(
      React.createElement("progress", {  value: (this.value),
      max: (this.max),
      style: {  width: "100%",
        height: "100%",
      },
    }, [])
  );

  }
}

types['properties'].push({
    key: 'max',
    label: '最大值',
    valueType: 'number',
    defaultValue: 100,

})

types['properties'].push({
    key: 'value',
    label: '当前值',
    valueType: 'number',
    defaultValue: 50,

})

types['methods'].push({
    key: 'up',
    label: '将',
    params: [
      {
          key: 'ms',
          label: '',
          valueType: 'string',
          dropdown: [
    { label: '当前值', value: '当前值', },

    { label: '最大值', value: '最大值', },
  ],
      },


      {
          key: 'jiajian',
          label: '',
          valueType: 'string',
          dropdown: [
    { label: '增加', value: '增加', },

    { label: '减少', value: '减少', },
  ],
      },


      {
          key: 'num',
          label: '',
          valueType: 'number',
          defaultValue: 1,
      },],

    blockOptions: {
    color: '#330099',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.up = function (ms,jiajian,num,) {
      if (ms == '当前值') {
    if (jiajian == '增加') {
      this.setProps({ 'value': ((this.value) + num) });
    } else {
      this.setProps({ 'value': ((this.value) - num) });
    }
  } else {
    if (jiajian == '增加') {
      this.setProps({ 'max': ((this.max) + num) });
    } else {
      this.setProps({ 'max': ((this.max) - num) });
    }
  }

}
exports.types = types;
exports.widget = Widget;


