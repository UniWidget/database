const types = {
  isInvisibleWidget: false,
  type: "HTML_WIDGET",
  icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
  title: "HTML控件",
  version: "1.0.1",
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
    console.log('本控件通过Waddle制作');
  console.log('控件作者：中子星000（QQ：2422481178）');
  this.widgetLog('本控件通过Waddle制作');
  this.widgetLog('控件作者：中子星000（QQ：2422481178）');
  this.content=props.content
  }
  render() {
    return(
      React.createElement("div", {dangerouslySetInnerHTML: {__html: (this.content)}}, null)
  );

  }
}

types['properties'].push({
    key: 'content',
    label: 'HTML文本',
    valueType: 'string',
    editorType: 'TextArea',
    defaultValue: '<a href="https://coco-central.cn/">Hello, CoCo!</a>',
    blockOptions: {
    color: '#ffbb55',
    icon: '无',
    generateBlock: false,
    inputsInline: true,
    space: 16,
},
})

types['methods'].push({
    key: 'get_content',
    label: '获取HTML文本',
    params: [],
    valueType: 'string',

})
Widget.prototype.get_content = function () {
      return (this.content);
}
types['methods'].push({
    key: 'set_content',
    label: '设置HTML文本',
    params: [
      {
          key: 'content',
          label: '文本',
          valueType: 'multilineString',
      checkType: 'string',
          defaultValue: '<a href="https://coco-central.cn/">Hello, CoCo!</a>',
      },],


})
Widget.prototype.set_content = function (content,) {
      this.setProps({ 'content': content });

}
exports.types = types;
exports.widget = Widget;
