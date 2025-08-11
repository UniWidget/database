const antd = require('antd-mobile');

const types = {
  isInvisibleWidget: false,
  type: "WCF_ANTDM_BUTTON",
  icon: "https://creation.codemao.cn/716/appcraft/IMAGE_5KkbRIrUfv_1691835267103",
  title: "Antd-mobile按钮",
  version: "1.0.1",
  docs: {url:"https://mobile.ant.design/zh/components/button"},
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: 60,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: '__height',
      label: '高度',
      valueType: 'number',
      defaultValue: 40,
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
    this.text=props.text;
    if (props.isDisabled){
        this.isDisabled="disabled";
    }else{
        this.isDisabled="";
    }
    this.bgColor=props.bgColor;
    this.textColor=props.textColor;
    this.borderColor=props.borderColor;
    this.borderWidth=props.borderWidth;
    this.radius=props.radius;
    if (props.isLoading){
        this.isLoading="disabled";
    }else{
        this.isLoading="";
    }
    this.loadingText=props.loadingText;
    this.isUseIcon=props.isUseIcon;
    this.icon=props.icon;
  }

  onClick = () => {
    this.emit('onClick');
    };

  render() {
    if (this.isUseIcon){
        return(
            <>
              <antd.Button style={{height: "100%",width: "100%",'--background-color': `${this.bgColor}`,'--border-color': `${this.borderColor}`,'--text-color': `${this.textColor}`,'--border-width': `${this.borderWidth}px`,'--border-style': `${this.style}`,'--border-radius': `${this.radius}px`}} disabled={this.isDisabled} loading={this.isLoading} loadingText={this.loadingText} onClick={this.onClick}><img src={this.icon} alt="Ant Design Mobile的按钮"></img><span>{this.text}</span></antd.Button>
            </> 
        );
    }else{
        return(
            <>
              <antd.Button style={{height: "100%",width: "100%",'--background-color': `${this.bgColor}`,'--border-color': `${this.borderColor}`,'--text-color': `${this.textColor}`,'--border-width': `${this.borderWidth}px`,'--border-style': `${this.style}`,'--border-radius': `${this.radius}px`}} disabled={this.isDisabled} loading={this.isLoading} loadingText={this.loadingText} onClick={this.onClick}>{this.text}</antd.Button>
            </> 
        );
    }
  }
}

types['events'].push({
    key: 'onClick',
    label: '被点击',
    params: [],

})

types['properties'].push({
    key: 'text',
    label: '文本',
    valueType: 'string',
    defaultValue: '按钮',

})

types['properties'].push({
    key: 'isDisabled',
    label: '是否禁用',
    valueType: 'boolean',
    defaultValue: false,

})

types['properties'].push({
    key: 'bgColor',
    label: '背景颜色',
    valueType: 'color',
    defaultValue: '#1677FF',
    tooltip: "通过CSS变量设置"
})

types['properties'].push({
    key: 'textColor',
    label: '文字颜色',
    valueType: 'color',
    defaultValue: '#FFFFFF',
    tooltip: "通过CSS变量设置"
})

types['properties'].push({
    key: 'borderColor',
    label: '边框颜色',
    valueType: 'color',
    defaultValue: '#00000000',
    tooltip: "通过CSS变量设置"
})

types['properties'].push({
    key: 'borderWidth',
    label: '边框宽度',
    valueType: 'number',
    defaultValue: 1,
    tooltip: "通过CSS变量设置"
})

types['properties'].push({
    key: 'radius',
    label: '圆角',
    valueType: 'number',
    defaultValue: 4,
    tooltip: "通过CSS变量设置,最大20"
})

types['properties'].push({
    key: 'isLoading',
    label: '是否加载中',
    valueType: 'boolean',
    defaultValue: false,
})

types['properties'].push({
    key: 'loadingText',
    label: '加载文本',
    valueType: 'string',
    defaultValue: "加载中",
})

types['properties'].push({
    key: 'isUseIcon',
    label: '是否使用图标',
    valueType: 'boolean',
    defaultValue: false,
})

types['properties'].push({
    key: 'icon',
    label: '图标URL',
    valueType: 'string',
    defaultValue: "https://ocean.codemao.cn/appcraft/resource/icon/%E5%9F%BA%E7%A1%80/%E4%B8%BB%E9%A1%B5.svg",
    tooltip: "不限格式，矢量向量均可"
})

exports.types = types;
exports.widget = Widget;
