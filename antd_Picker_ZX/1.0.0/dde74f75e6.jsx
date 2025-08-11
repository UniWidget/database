//制作：ZX

const antd = require('antd-mobile')
const types = {
  isInvisibleWidget: false,
  type: "antd_Picker_ZX",
  icon: "",
  title: "antd_ZX 选择器",
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
    this.visible = props.visible;
    this.columns = props.columns;

  }
  render() {

    return (

      <antd.Picker
        columns={JSON.parse(this.columns)}
        visible={this.visible}
        onClose={() => {//关闭
          this.emit('onClose')

        }}
        onCancel={() => {//取消
          this.emit('onCancel')

        }}
        onConfirm={(v, e) => {//完成
          this.emit('onConfirm', v)

        }}
      />
    )
  }
}
types['properties'].push({
  key: 'visible',
  label: '是否开启',
  valueType: 'boolean',
  defaultValue: false,
})

types['properties'].push({
  key: 'columns',
  label: '数据',
  valueType: 'string',
  defaultValue: '[ [ { "label": "Foo", "value": "foo" },{ "label": "bar", "value": "bar111" } ] ]'
})
types['events'].push({
  key: 'onConfirm',
  label: '选择完成',
  params: [
    {
      key: 'data',
      label: '数据',
      valueType: 'string',
    }],

})
types['events'].push({
  key: 'onClose',
  label: '被关闭',
  params: [],

})
types['events'].push({
  key: 'onCancel',
  label: '被取消',
  params: [],

})
exports.types = types;
exports.widget = Widget;
