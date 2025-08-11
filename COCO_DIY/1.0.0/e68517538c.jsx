const types = {
  isInvisibleWidget: false,
  type: "COCO_DIY",
  icon: "",
  title: "CoCo主题自定义",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: 0,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: '__height',
      label: '高度',
      valueType: 'number',
      defaultValue: 0,
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
    this.color=props.color;

  }
  render() {
    return(
      React.createElement("div", {dangerouslySetInnerHTML: {__html: (['<style> .Header_wrapper__3tGRg, .WidgetTree_wrapper__3yHXC, .WidgetPanel_basicBlockBox__20LLE, .RightSideMenu_wrapper__pn2lJ, .WidgetList_categoryBody__2VTUU, .ScreenList_wrapper__nhsQ3, .WidgetList_tabContent__3Ov_Z, .WidgetList_tabNav__aT0g3{   background-color: ',this.color,' !important; } </style>'].join(''))}}, null)
  );

  }
}

types['properties'].push({
    key: 'color',
    label: 'color',
    valueType: 'string',
    defaultValue: '#95a4dd',
    blockOptions: {
    color: '#ffbb55',
    icon: '无',
    generateBlock: false,
    inputsInline: true,
    space: 16,
},
})

types['methods'].push({
    key: 's',
    label: '设置',
    params: [
      {
          key: 'color',
          label: '颜色',
          valueType: 'multilineString',
      checkType: 'string',
          defaultValue: '#95a4dd',
      },],


})
Widget.prototype.s = function (color,) {
      this.setProps({ 'color': color });

}
exports.types = types;
exports.widget = Widget;
