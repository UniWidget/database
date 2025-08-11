//制作：树林林林

const antd = require('antd-mobile')
var document = this.document

const types = {
  isInvisibleWidget: false,
  type: "antd_avatar",
  icon: "https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg",
  title: "antd_avatar 头像",
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
    this.fallback=props.fallback;
    this.lazy=props.lazy;
    this.data = props.data;

  }
  render() {
    if (typeof this.data !== 'object') this.data = []
    try{
    return(
        <>
            {this.data.map((item, index) => (
              <antd.Space warp>
              <antd.Avatar
                  fallback={item.fallback==='' ? null : React.createElement("img", { src: this.fallback, alt: '', }, null)}
                  src={item.src==='' ? null : item.src}
                  fit={this.fit}
                  lazy={this.lazy}
                  onClick={() => this.emit('onClick',index+1,item.src)}
                  onError={() => this.emit('onError',index+1,item.src)}

                  style={{  
                      '--border-radius': item['--border-radius'],
                      '--size': item['--size'],
                      "margin":item['margin'],
                  }}
              />
              </antd.Space>
            ))}
        </>
      );
    }catch(err){
      this.emit('Error',err);
      this.widgetError(err);
      console.error(err);
    }

  }
}

types['properties'].push({
    key: 'fallback',
    label: '占位图',
    valueType: 'string',
    defaultValue: "",
    tooltip:'当src图片加载失败或不存在时会显示占位图，此时需要增大尺寸才能显示完全过大的占位图',

})

types['properties'].push({
    key: 'lazy',
    label: '是否懒加载图片',
    valueType: 'boolean',
    defaultValue: false,

})

types['properties'].push({
    key: 'data',
    label: '数据',
    valueType: ['string','number','boolean','array','object',],
    defaultValue: "",

})

types['methods'].push({
  key: 'addAvatar',
    label: '添加一个头像',
    params: [
      {
          key: 'fit',
          label: '填充模式',
          valueType: 'string',
          dropdown: [
    { label: 'contain', value: 'contain', },

    { label: 'cover', value: 'cover', },

    { label: 'fill', value: 'fill', },

    { label: 'none', value: 'none', },

    { label: 'scale-down', value: 'scale-down', },
  ],
      },
      {
        key: 'src',
        label: '图片',
        valueType: 'string',
        defaultValue: "",
    },
    {
        key: 'border_radius',
        label: '圆角',
        valueType: 'string',
        defaultValue: "4px",
    },
    {
        key: 'size',
        label: '尺寸',
        valueType: 'string',
        defaultValue: "44px",
    },
    {
        key: 'margin',
        label: '边距',
        valueType: 'string',
        defaultValue: "0px 10px",
    },],
  valueType: 'object',
})
Widget.prototype.addAvatar = function (fit,src,border_radius,size,margin,) {
  return {'fit': fit, 'src': src, '--border-radius': border_radius, '--size': size, 'margin': margin};
}

types['events'].push({
    key: 'onClick',
    label: '被点击',
    params: [
      {
        key: 'indexNum',
        label: '序',
        valueType: 'number',
    },
    {
        key: 'itemsrc',
        label: '头像',
        valueType: 'string',
    },
    ],

})

types['events'].push({
    key: 'onError',
    label: '加载失败',
    params: [
      {
        key: 'indexNum',
        label: '序',
        valueType: 'number',
    },
    {
        key: 'itemsrc',
        label: '头像',
        valueType: 'string',
    },
    ],

})

types['events'].push({
  key: 'Error',
  label: '渲染出错',
  params: [
    {
      key: 'Massage',
      label: '错误消息',
      valueType: 'string',
  },
  ],

})
exports.types = types;
exports.widget = Widget;
