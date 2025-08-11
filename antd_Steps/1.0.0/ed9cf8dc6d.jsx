//制作：树林林林

const antd = require('antd-mobile')
var document = this.document

const types = {
    isInvisibleWidget: false,
    type: "antd_Steps",
    icon: "https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg",
    title: "antd_Steps 步骤条",
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
      this.direction=props.direction;
      this.data=props.data;
      this.DIYStyle=props.DIYStyle;
  
    }
    render() {
        if (typeof this.data != 'object') this.data = []
            return(
                <>
                    <antd.Steps direction={this.direction} current={this.current}>
                        {this.data.map((item, index) => (
                                <antd.Steps.Step
                                    title={item.title}
                                    icon={item.icon ==='' ? null : React.createElement("img", { src: item.icon, alt: '', }, null) }
                                    status={item.status}
                                    description={item.description}
                                />
                        ))}
                    </antd.Steps>
                </>
            );
        };
  
    }
  
  types['properties'].push({
      key: 'data',
      label: '数据',
      valueType: ['string','number','boolean','array','object',],
      defaultValue: "",
  
  })
  
  types['methods'].push({
      key: 'setDirection',
      label: '指定步骤条方向',
      params: [
        {
            key: 'direction',
            label: '水平/竖直',
            valueType: 'string',
            dropdown: [
      { label: '水平', value: 'horizontal', },
  
      { label: '竖直', value: 'vertical', },
    ],
        },
  
  ],
  
  
  })
  Widget.prototype.setDirection = function (direction,) {
        this.direction = direction;
  
  }
  types['methods'].push({
      key: 'fastSetProp',
      label: '快捷设置属性',
      params: [
        {
            key: 'title',
            label: '标题',
            valueType: 'string',
            defaultValue: "",
        },
        {
            key: 'status',
            label: '状态',
            valueType: 'string',
            dropdown: [
      { label: '等待（灰色样式，不连接下一点）', value: 'wait', },
  
      { label: '过程（蓝色样式，不连接下一点）', value: 'process', },
  
      { label: '完成（蓝色样式，连接下一点）', value: 'finish', },
  
      { label: '错误（红色样式，不连接下一点）', value: 'error', },
    ],
        },
        {
          key: 'icon',
          label: '图标',
          valueType: 'string',
          defaultValue: "",
        },
        {
            key: 'description',
            label: '描述',
            valueType: 'string',
            defaultValue: "",
        },],
      valueType: 'object',
  
  })
  Widget.prototype.fastSetProp = function (title,status,icon,description,) {
        return {'title': title, 'status': status, 'icon': icon, 'description': description};
  }
  types['methods'].push({
    key: 'TheSteps',
    label: '生成步骤条',
    params: [
      {
          key: 'data',
          label: '数据列表',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: "",
      },],
    })
    Widget.prototype.TheSteps = function (data,DIYStyle,) {
        this.setProps({ 'data': data });

    }
  exports.types = types;
  exports.widget = Widget;
  