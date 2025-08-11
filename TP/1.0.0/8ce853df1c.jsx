const types = {
  isInvisibleWidget: false,
  type: "TP",
  icon: "",
  title: "圆角图片",
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
types.auther = '嘎嘎叫的青蛙';
class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.__width = props.__width;
    this.__height = props.__height;
    console.log('本控件通过Waddle制作');
  console.log('控件作者：嘎嘎叫的青蛙（QQ：359148497）');
  this.widgetLog('本控件通过Waddle制作');
  this.widgetLog('控件作者：嘎嘎叫的青蛙（QQ：359148497）');
  this.src=props.src;
  this.yj=props.yj;

  }
  render() {
    return(
      React.createElement("div", {  onClick: this.onClick.bind(this),
      style: {  width: "100%",
        height: "100%",
        borderRadios: "(this.yj)px",
      },
    dangerouslySetInnerHTML: {__html: (['<img src="',this.src,'">'].join(''))}}, null)
  );

  }
}

types['events'].push({
    key: 'onClick',
    label: '被点击',
    params: [],

})
Widget.prototype.onClick = function (event) {
      this.emit("onClick");
}

types['properties'].push({
    key: 'src',
    label: '图片地址',
    valueType: 'string',
    defaultValue: '',
    blockOptions: {
    color: '#ffbb55',
    icon: '无',
    generateBlock: false,
    inputsInline: true,
    space: 16,
},
})

types['properties'].push({
    key: 'yj',
    label: '圆角',
    valueType: 'number',
    defaultValue: 30,
    blockOptions: {
    color: '#ffbb55',
    icon: '无',
    generateBlock: false,
    inputsInline: true,
    space: 16,
},
})

types['methods'].push({
    key: 'set_src',
    label: '设置图片地址',
    params: [
      {
          key: 'imgsrc',
          label: '链接',
          valueType: 'multilineString',
      checkType: 'string',
          defaultValue: "",
      },],


})
Widget.prototype.set_src = function (imgsrc,) {
      this.setProps({ 'src': imgsrc });

}
types['methods'].push({
    key: 'set_yj',
    label: '设置图片圆角',
    params: [
      {
          key: 'imgyj',
          label: '圆角',
          valueType: 'number',
          defaultValue: 30,
      },],


})
Widget.prototype.set_yj = function (imgyj,) {
      this.setProps({ 'yj': imgyj });

}
exports.types = types;
exports.widget = Widget;
