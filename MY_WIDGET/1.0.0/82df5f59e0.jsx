const types = {
    isInvisibleWidget: false,
    type: "MY_WIDGET",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "测试控件",
    version: "1.0.0",
    isGlobalWidget: false,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
        this.propertyName = props.propertyName;
        console.log('当前字体', this.propertyName);
    }
  render() {
    return(
      <div style={{"font-family": this.fontFamily}}>
        测试文本<br/>在设置中调整字体，会有不同的效果哦
      </div>
    );
  }
}

types['properties'].push({
    key: 'fontFamily',
    label: '字体',
    valueType: ['string','number','boolean','array','object'],
    defaultValue: 'sans-serif',
    editorType: 'FontFamily'
})

exports.types = types;
exports.widget = Widget;
