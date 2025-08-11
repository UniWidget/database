var _E6_B8_90_E5_8F_98_E6_95_88_E6_9E_9C, _E9_98_B4_E5_BD_B1, _E7_8E_BB_E7_92_83_E6_95_88_E6_9E_9C;



const types = {
  isInvisibleWidget: false,
  type: "HYPERLINK_WIDGET",
  icon: "https://ocean.codemao.cn/appcraft/resource/icon/%E5%9F%BA%E7%A1%80/%E7%BC%96%E8%BE%91_1.svg",
  title: "绘制特效卡片",
  version: "1.0.2",
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
      defaultValue: 270,
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
    this.borderRadius=props.borderRadius;
  this.zcolor=props.zcolor;
  this.x=props.x;
  this.y=props.y;
  this.mohu=props.mohu;
  this.color=props.color;
  _E7_8E_BB_E7_92_83_E6_95_88_E6_9E_9C = 0;
  _E6_B8_90_E5_8F_98_E6_95_88_E6_9E_9C = (this.zcolor);
  _E9_98_B4_E5_BD_B1 = '15px 15px 30px #bebebe';

  }
  render() {
    return(
      React.createElement("div", {  onClick: this.onClick.bind(this),
      style: {  width: "100%",
        height: "100%",
        borderRadius: (String(this.borderRadius) + 'px'),
        boxShadow: _E9_98_B4_E5_BD_B1,
        backdropFilter: (['blur(',_E7_8E_BB_E7_92_83_E6_95_88_E6_9E_9C,'px)'].join('')),
        background: _E6_B8_90_E5_8F_98_E6_95_88_E6_9E_9C,
      },
    }, [])
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
    key: 'borderRadius',
    label: '圆角',
    valueType: 'number',
    defaultValue: 10,

})

types['properties'].push({
    key: 'zcolor',
    label: '背景颜色',
    valueType: 'string',
    defaultValue: '#AFFFFF',

})

types['methods'].push({
    key: 'linearGradient',
    label: '进行渐变效果',
    params: [
      {
          key: 'list',
          label: '渐变颜色列表:',
          valueType: 'multilineString',
      checkType: 'string',
          defaultValue: '#98FB98,#228B22',
      },
      {
          key: 'deg',
          label: '渐变方向:',
          valueType: 'number',
          defaultValue: 0,
      },],


})
Widget.prototype.linearGradient = function (list,deg,) {
      _E6_B8_90_E5_8F_98_E6_95_88_E6_9E_9C = ['linear-gradient(',deg,'deg,',list,')'].join('');
  this.setProps({ 'zcolor': _E6_B8_90_E5_8F_98_E6_95_88_E6_9E_9C });

}
types['methods'].push({
    key: 'shadow',
    label: '进行阴影',
    params: [
      {
          key: 'x',
          label: 'x:',
          valueType: 'number',
          defaultValue: 2,
      },
      {
          key: 'y',
          label: 'y:',
          valueType: 'number',
          defaultValue: 2,
      },
      {
          key: 'mohu',
          label: '模糊:',
          valueType: 'number',
          defaultValue: 15,
      },
      {
          key: 'color',
          label: '颜色:',
          valueType: 'color',
          defaultValue: '#cccccc',
      },],


})
Widget.prototype.shadow = function (x,y,mohu,color,) {
      _E9_98_B4_E5_BD_B1 = [x,'px ',y,'px ',mohu,'px ',color].join('');
  this.setProps({ 'borderRadius': (this.borderRadius) });

}
types['methods'].push({
    key: 'blur',
    label: '进行毛玻璃效果',
    params: [
      {
          key: 'zhi',
          label: '效果值:',
          valueType: 'number',
          defaultValue: 5,
      },],


})
Widget.prototype.blur = function (zhi,) {
      _E7_8E_BB_E7_92_83_E6_95_88_E6_9E_9C = zhi;
  this.setProps({ 'borderRadius': (this.borderRadius) });

}
exports.types = types;
exports.widget = Widget;
