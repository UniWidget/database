const antd = require('antd-mobile')
const types = {
  isInvisibleWidget: false,
  type: "antd_Divider",
  icon: "https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg",
  title: "Antd_Divider 分割线",
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
    this.Title=props.Title;

  }
  render() {
    return(
     <>
    <antd.Divider>{this.Title}
    </antd.Divider>
    </>
  );

  }
}

types['methods'].push({
    key: 'SetTitle',
    label: '设置标题',
    params: [
      {
          key: 'Title',
          label: '标题',
          valueType: 'string',
          defaultValue: '这是一条分割线',
      },],

    blockOptions: {
    color: '#ffcc33',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.SetTitle = function (Title,) {
      this.setProps({ 'Title': Title });

}
exports.types = types;
exports.widget = Widget;