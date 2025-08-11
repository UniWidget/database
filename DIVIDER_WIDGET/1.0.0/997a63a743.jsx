const types = {  
  type: 'DIVIDER_WIDGET',  
  icon: 'https://static.codemao.cn/coco/player/unstable/rJZhYkL32.image/jpeg?hash=FucXTDVfBJdoSStUZvqy24ILwabo', // 替换为实际的图标URL  
  title: '分割线控件',  
  platforms: ['web'], // 根据需要添加其他平台  
  isInvisibleWidget: false,  
  isGlobalWidget: false,  
  properties: [  
    {  
      key: 'color',  
      label: '颜色',  
      valueType: 'string',  
      defaultValue: '#cccccc',  
    },  
    {  
      key: 'height',  
      label: '高度',  
      valueType: 'number',  
      defaultValue: 1,  
      min: 1,  
      max: 10,  
    },  
    {  
      key: 'margin',  
      label: '外边距',  
      valueType: 'string',  
      defaultValue: '10px 0',  
    },  
  ],  
  methods: [],  
  events: [],  
};  
  
class DividerWidget extends VisibleWidget {  
  constructor(props) {  
    super(props);  
    this.color = props.color;  
    this.height = props.height;  
    this.margin = props.margin;  
  }  
  
  render() {  
    const style = {  
      backgroundColor: this.color,  
      height: `${this.height}px`,  
      margin: this.margin,  
    };  
    return <hr style={style} />;  
  }  
}  
  
exports.types = types;  
exports.widget = DividerWidget;
