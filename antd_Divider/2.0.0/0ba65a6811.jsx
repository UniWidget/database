const antd = require('antd-mobile')
const types = {
  isInvisibleWidget: false,
  type: "antd_Divider",
  icon: "https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg",
  title: "Antd_Divider 分割线",
  version: "2.0.0",
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
      defaultValue: 25,
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
    this.Title=props.Title;
    this.color=props.color;
    this.borderColor=props.borderColor;
  }
  render() {
    return(
     <>
    <antd.Divider style={{color:this.color,borderColor:this.borderColor
}}>{this.Title}
    </antd.Divider>
    </>
  );

  }
}

types['methods'].push({
    key: 'SetTitle',
    label: '设置分割线样式',
    params: [
      {
          key: 'Title',
          label: '标题',
          valueType: 'string',
          defaultValue: '这是一条分割线',
      },
{
          key: 'color',
          label: '文本颜色',
          valueType: 'color',
          defaultValue: '#ffcc33',
      },
{
          key: 'borderColor',
          label: '分割线颜色',
          valueType: 'color',
          defaultValue: '#ffcc33',
      },
],

    blockOptions: {
    color: '#ffcc33',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.SetTitle = function (Title,color,borderColor) {
      this.setProps({ 'Title': Title });
      this.setProps({ 'color': color });
      this.setProps({ 'borderColor': borderColor });
}

exports.types = types;
exports.widget = Widget;