const antd = require('antd-mobile')
const types = {
  isInvisibleWidget: false,
  type: "SENIOR_SELECTGROUP_BY_SUN",
  icon: "https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg",
  title: "高级选择组",
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

types['properties'].push({
  key: 'data',
  label: '数据',
  valueType: ['string', 'number', 'boolean', 'array', 'object',],
  defaultValue: "",
  blockOptions: {
    color: '#cc66cc',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
  },
})

class Widget extends VisibleWidget {
  constructor(p) {
    super(p);
    Object.assign(this,p)
  }
  render() {
    if (typeof this.data !== 'object') this.data = []
    return (
      <>
        {this.data.map((item, index) => (
          <antd.Selector
          style={{
            '--border-radius': '--border-radius',
          }}
          showCheckMark={item.showCheckMark}
          options={item.options}
          defaultValue={item.defaultValue}
          columns={item.columns}
          multiple={item.multiple}
          disabled={item.disabled}
          value={item.value}
          onChange={(arr, extend) =>{this.emit("onclick",arr,extend.items)}}
        
          />
        ))}
      </>
    );

  }
}
types['events'].push({
  key: 'onclick',
  label: '被点击时',
  params: [
    {
      key: 'clicknumber',
      label: '选项',
      valueType:  ['string','number','boolean','color','array','object'],
    },
    {
      key: 'clickdata',
      label: '数据',
      valueType:  ['string','number','boolean','color','array','object'],
    },],
  blockOptions: {
    color: '#3366ff',
    icon: 'https://creation.codemao.cn/coconut/web/1.21.0/static/media/tab.906ad81b.svg',
    generateBlock: true,
    inputsInline: true,
    space: 16,
  },
})
exports.types = types;
exports.widget = Widget;
