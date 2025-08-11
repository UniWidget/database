const antd = require('antd-mobile')
const types = {
  isInvisibleWidget: false,
  type: "SENIOR_LIST_BY_SUN",
  icon: "https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg",
  title: "高级列表框",
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
  constructor(props) {
    super(props);
    this.__width = props.__width;
    this.__height = props.__height;

  }
  render() {
    if (typeof this.data !== 'object') this.data = []
    return (
      <>

        {this.data.map((item, index) => (
          <antd.List header={item.header} mode={item.mode}>
            <antd.List.Item extra=
              {
                item.switch === 1
                  ? (<antd.Switch defaultChecked onChange={v => { this.emit("switchclick", v, index + 1) }} />)
                  : item.extra
              }
              description={item.description}
              title={item.title}
              prefix={React.createElement("img", { src: item.prefix, alt: '', }, null)}
              arrow={item.arrow}
              onClick={() => { this.emit("onclick", index + 1); }}
            >{item.text}</antd.List.Item>
          </antd.List >
        ))
        }

        <div dangerouslySetInnerHTML={{ __html: '<style>.ql-editor{overflow:auto!important}.ql-snow{overflow:hidden!important}</style>' }} />
      </>
    );

  }
}
types['events'].push({
  key: 'onclick',
  label: '被点击时',
  params: [
    {
      key: 'listnumber',
      label: '行',
      valueType: 'number',
    },],
  blockOptions: {
    color: '#3366ff',
    icon: 'https://creation.codemao.cn/coconut/web/1.21.0/static/media/tab.906ad81b.svg',
    generateBlock: true,
    inputsInline: true,
    space: 16,
  },
})
types['events'].push({
  key: 'switchclick',
  label: '开关被点击时',
  params: [
    {
      key: 'switchdata',
      label: '状态',
      valueType: 'boolean',
    },
    {
      key: 'listdata',
      label: '行',
      valueType: 'number',
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
