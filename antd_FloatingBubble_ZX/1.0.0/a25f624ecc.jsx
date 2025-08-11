//制作：ZX

const antd = require('antd-mobile')
const types = {
  isInvisibleWidget: false,
  type: "antd_FloatingBubble_ZX",
  icon: "",
  title: "antd_ZX 浮动气泡",
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
    this.typee = props.typee;
    this.icon = props.icon;
    this.iconheight = props.iconheight
    this.iconwidth = props.iconwidth
    this.magnetic = props.magnetic;
  }
  render() {
    return (

      <div
        onClick={() => {
          this.emit('onClick')
        }}
      >
        <antd.FloatingBubble
          axis='xy'
          magnetic='x'
          style={{
            '--initial-position-bottom': '0',
            '--initial-position-right': '0',
          }}
        // onOffsetChange={(e) => {
        //   this.emit('onOffsetChange', e.x, e.y)
        // }}
        // onClick={() => {
        //   this.emit('onClick')
        // }}
        // offset={{
        //   x: 10,
        //   y: 10
        // }}
        >
          <antd.Image
            src={this.icon}
            width={this.iconwidth}
            height={this.iconheight}
          >
          </antd.Image>
        </antd.FloatingBubble>

      </div >
    )
  }
}
types['properties'].push({
  key: 'icon',
  label: '图标',
  valueType: 'string',
  defaultValue: '',
})

types['properties'].push({
  key: 'typee',
  label: '模式',
  valueType: 'string',
  defaultValue: 'x',
  dropdown: [
    { label: 'x轴移动', value: 'x' },

    { label: 'y轴移动', value: 'y' },

    { label: '自由移动', value: 'xy' },

    { label: '仅开始方向移动', value: 'lock' }
  ]

})
types['properties'].push({
  key: 'magnetic',
  label: '自动磁吸',
  valueType: 'string',
  defaultValue: 'x',
  dropdown: [
    { label: 'x', value: 'x' },

    { label: 'y', value: 'y' },
  ]

})
types['properties'].push({
  key: 'iconwidth',
  label: '图标宽',
  valueType: 'number',
  defaultValue: 50

})
types['properties'].push({
  key: 'iconheight',
  label: '图标高',
  valueType: 'number',
  defaultValue: 50

})
types['events'].push({
  key: 'onOffsetChange',
  label: '被移动',
  params: [
    {
      key: 'x',
      label: 'x',
      valueType: 'number',
    },
    {
      key: 'y',
      label: 'y',
      valueType: 'number',
    }
  ],

})
types['events'].push({
  key: 'onClick',
  label: '被点击',
  params: [],

})
exports.types = types;
exports.widget = Widget;
