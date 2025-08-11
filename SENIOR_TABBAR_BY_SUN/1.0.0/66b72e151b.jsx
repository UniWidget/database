const antd = require('antd-mobile')
const antdIcon = require('antd-mobile-icons')
const types = {
  isInvisibleWidget: false,
  type: "SENIOR_TABBAR_BY_SUN",
  icon: "https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg",
  title: "高级标签栏",
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
types['properties'].push({
  key: 'usekey',
  label: '选中项key',
  valueType: 'string',
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
    if (typeof this.data !== 'object') try {this.data = JSON.parse(this.data)} catch(e) {this.data = []}
    return (
      <>
        <antd.TabBar 
        activeKey={this.usekey}
              onChange={k => {
              this.setProps({ 'usekey': k})
              this.emit("onclick" ,k)
              }}>
          {this.data.map((item,index)=> (
            <antd.TabBar.Item
              key={item.key}
              icon={React.createElement("img", { src: item.icon, width:"20px",height:"20px",alt: '', }, null)}
              title={item.title}
              badge={item.badge}
            />
          ))}
        </antd.TabBar>
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
      label: '选中项key',
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
