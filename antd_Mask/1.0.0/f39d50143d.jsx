const antd = require('antd-mobile');

const types = {
  isInvisibleWidget: false,
  type: "antd_Mask",
  icon: "https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg",
  title: "antd_Mask 背景蒙层",
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
    this.color=props.color;
    this.disableBodyScroll=props.disableBodyScroll;
    this.opacity=props.opacity;
    this.visible=props.visible;

  }
  render() {
    try{
    return(
        <>
            <antd.Mask
                visible={this.visible}
                color={this.color}
                opacity={this.opacity}
                disableBodyScroll={this.disableBodyScroll}
                destroyOnClose={true}
                onMaskClick={() => this.emit('onMaskClick')}
                afterClose={() => this.emit('afterClose')}
                afterShow={() => this.emit('afterShow')}
            />
        </>
    );
    } catch(err) {
        this.emit('catchError',err)
    }

  }
}
types['properties'].push({
    key: 'visible',
    label: '是否可见',
    valueType: 'boolean',
    defaultValue: false,
})

types['methods'].push({
    key: 'showMask',
    label: '显示蒙层',
    params: [
      {
          key: 'color',
          label: '颜色',
          valueType: 'string',
          dropdown: [
    { label: 'black', value: 'black', },

    { label: 'white', value: 'white', },
  ],
      },


      {
          key: 'disableBodyScroll',
          label: '是否禁用 body 滚动',
          valueType: 'boolean',
          defaultValue: true,
      },
      {
          key: 'opacity1',
          label: '透明度类型',
          valueType: 'string',
          dropdown: [
    { label: 'default', value: 'default', },

    { label: 'thin', value: 'thin', },

    { label: 'thick', value: 'thick', },

    { label: '自定义', value: '自定义', },
  ],
      },


      {
          key: 'opacity2',
          label: '自定义透明度',
          valueType: 'number',
          defaultValue: "",
      },],

    blockOptions: {
    color: '#ffbb55',
    icon: '无',
    generateBlock: false,
    inputsInline: false,
    space: 16,
},
})
Widget.prototype.showMashk = function (color,disableBodyScroll,opacity1,opacity2,) {
      this.visible = true;
  this.disableBodyScroll = disableBodyScroll;
  this.color = color;
  if (opacity1 == '自定义') {
    this.setProps({ 'opacity': opacity2 });
  } else {
    this.setProps({ 'opacity': opacity1 });
  }

}

types['events'].push({
    key: 'afterClose',
    label: '完全关闭',
    params: [],

})

types['events'].push({
    key: 'afterShow',
    label: '完全展示',
    params: [],

})

types['events'].push({
    key: 'onMaskClick',
    label: '被点击',
    params: [],

})

types['events'].push({
    key: 'catchError',
    label: '出错',
    params: [
      {
          key: 'errorMassage',
          label: '错误消息',
          valueType: 'string',
      },],

})

exports.types = types;
exports.widget = Widget;