var types = {
  isInvisibleWidget: false,
  type: "HYPERLINK_WIDGET",
  icon: "https://static.codemao.cn/coco/player/unstable/H1AVe_eo0.image/svg+xml?hash=Fsmdw_jCzXpdTXj_XevpOY18UMeH.svg",
  title: "绘制特效卡片",
  version: "1.0.2",
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: 200,
      blockOptions: { generateBlock: false },
    },
    {
      key: '__height',
      label: '高度',
      valueType: 'number',
      defaultValue: 270,
      blockOptions: { generateBlock: false },
    },
    {
      key: '__size',
      label: '',
      valueType: 'number',
      defaultValue: 0,
      readonly: true,
      blockOptions: {
        setter: { keys: ['__height', '__width'] },
        getter: { keys: ['__height', '__width'] },
      },
    },
    {
      key: 'backgroundImage',
      label: '背景图片',
      valueType: 'string',
      defaultValue: '',
    },
    {
      key: 'backgroundMode',
      label: '背景模式',
      valueType: 'string',
      defaultValue: 'cover', // 默认模式为覆盖
      options: [
        { key: 'cover', label: '拉伸' },
        { key: 'contain', label: '全选' },
        { key: 'center', label: '裁剪' },
      ],
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
    this.borderRadius = props.borderRadius || 10;
    this.zcolor = props.zcolor || '#AFFFFF';
    this.x = props.x;
    this.y = props.y;
    this.mohu = props.mohu;
    this.color = props.color;

    this._blurEffect = 0;
    this._backgroundColor = this.zcolor;
    this._boxShadow = '15px 15px 30px #bebebe';
    this._backgroundImage = props.backgroundImage || '';
    this._backgroundMode = props.backgroundMode || 'cover'; // 默认模式
  }

  render() {
    const backgroundStyles = {
      background: this._backgroundImage ? `url(${this._backgroundImage}), ${this._backgroundColor}` : this._backgroundColor,
      backgroundSize: this._backgroundMode === 'center' ? '100% 100%' : this._backgroundMode,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: this._backgroundMode === 'center' ? 'center' : 'center', // 只在裁剪模式下使用
    };

    return React.createElement("div", {
      onClick: this.onClick.bind(this),
      style: {
        width: "100%",
        height: "100%",
        borderRadius: `${this.borderRadius}px`,
        boxShadow: this._boxShadow,
        backdropFilter: `blur(${this._blurEffect}px)`,
        ...backgroundStyles,
      },
    }, null);
  }
}

types['events'].push({
  key: 'onClick',
  label: '被点击',
  params: [],
});

Widget.prototype.onClick = function (event) {
  this.emit("onClick");
};

types['properties'].push({
  key: 'borderRadius',
  label: '圆角',
  valueType: 'number',
  defaultValue: 10,
});

types['properties'].push({
  key: 'zcolor',
  label: '背景颜色',
  valueType: 'string',
  defaultValue: '#AFFFFF',
});

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
    },
  ],
});

Widget.prototype.linearGradient = function (list, deg) {
  this._backgroundColor = `linear-gradient(${deg}deg, ${list})`;
  this.setProps({ zcolor: this._backgroundColor });
};

types['methods'].push({
  key: 'shadow',
  label: '进行阴影',
  params: [
    { key: 'x', label: 'x:', valueType: 'number', defaultValue: 2 },
    { key: 'y', label: 'y:', valueType: 'number', defaultValue: 2 },
    { key: 'mohu', label: '模糊:', valueType: 'number', defaultValue: 15 },
    { key: 'color', label: '颜色:', valueType: 'color', defaultValue: '#cccccc' },
  ],
});

Widget.prototype.shadow = function (x, y, mohu, color) {
  this._boxShadow = `${x}px ${y}px ${mohu}px ${color}`;
  this.setProps({ borderRadius: this.borderRadius });
};

types['methods'].push({
  key: 'blur',
  label: '进行毛玻璃效果',
  params: [
    { key: 'zhi', label: '效果值:', valueType: 'number', defaultValue: 5 },
  ],
});

Widget.prototype.blur = function (zhi) {
  this._blurEffect = zhi;
  this.setProps({ borderRadius: this.borderRadius });
};

types['methods'].push({
  key: 'setBackgroundImage',
  label: '设置背景图片',
  params: [
    { key: 'url', label: '图片 URL:', valueType: 'string', defaultValue: '' },
  ],
});

Widget.prototype.setBackgroundImage = function (url) {
  this._backgroundImage = url;
  this.setProps({ backgroundImage: this._backgroundImage });
};

types['methods'].push({
  key: 'setBackgroundMode',
  label: '设置背景模式',
  params: [
    { key: 'mode', label: '模式:', valueType: 'string', defaultValue: 'cover' },
  ],
});

Widget.prototype.setBackgroundMode = function (mode) {
  this._backgroundMode = mode;
  this.setProps({ backgroundMode: this._backgroundMode });
};

exports.types = types;
exports.widget = Widget;
