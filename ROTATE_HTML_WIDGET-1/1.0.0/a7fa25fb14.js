const types = {
  isInvisibleWidget: false,
  type: "ROTATE_HTML_WIDGET-1",
  icon: "https://cdn.cocotais.cn/project/waddle-2/logo/waddle2-logo.svg",
  title: "可旋转HTML框",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: 40,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: '__height',
      label: '高度',
      valueType: 'number',
      defaultValue: 120,
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
    this.widgetid = props.widgetid;
    this.html = props.html;
    this.deg = props.deg;
    this.Tcolor = props.Tcolor;
    this.bgcolor = props.bgcolor;
    this.fontsize = props.fontsize;
    this.x = props.x;
    this.y = props.y;
    this.w = props.w;
    this.h = props.h;
    this.hor = props.hor;
    this.ver = props.ver;

  }
  haddleClick = () => {
    this.emit('click');
  }
  haddleDBClick = () => {
    this.emit('dbclick');
  }
  haddleUp = () => {
    this.emit('up');
  }
  haddleDown = () => {
    this.emit('down');
  }
  render() {
    return (
      <div
        id={this.widgetid}
        dangerouslySetInnerHTML={{ __html: this.html }}
        style={{
            width: `${this.w}px`,
            height: `${this.h}px`,
            transform: `rotate(${this.deg}deg)`,
            color: `${this.Tcolor}`,
            backgroundColor: `${this.bgcolor}`,
            fontSize: `${this.fontsize}px`,
            position: 'relative',
            top: `${this.y}px`,
            left: `${this.x}px`,
            display: 'flex',
            justifyContent: `${this.hor}`,
            alignItems: `${this.ver}`,
        }}
        onClick={() => this.haddleClick()}
        onMouseDown={() => this.haddleDown()}
        onMouseUp={() => this.haddleUp()}
        onDoubleClick={() => this.haddleDBClick()}
      />
    );
  }
}

types['properties'].push({
    key: 'widgetid',
    label: '控件ID',
    valueType: 'string',
    defaultValue: "ROTATE_HTML",
});

types['properties'].push({
    key: 'html',
    label: 'HTML',
    valueType: 'string',
    defaultValue: "可旋转HTML框",
})

types['properties'].push({
    key: 'deg',
    label: '旋转角度',
    valueType: 'number',
    defaultValue: 90,
});

types['properties'].push({
    key: 'x',
    label: 'X偏移量',
    valueType: 'number',
    defaultValue: 0,
})

types['properties'].push({
    key: 'y',
    label: 'Y偏移量',
    valueType: 'number',
    defaultValue: 0,
})

types['properties'].push({
    key: 'w',
    label: '宽',
    valueType: 'number',
    defaultValue: 120,
})

types['properties'].push({
    key: 'h',
    label: '高',
    valueType: 'number',
    defaultValue: 40,
})

types['properties'].push({
    key: 'hor',
    label: '水平居',
    valueType: 'string',
    defaultValue: 'center',
    dropdown: [
    { label: '中', value: 'center', },
    { label: '左', value: 'flex-start', },
    { label: '右', value: 'flex-end', },
  ],
})

types['properties'].push({
    key: 'ver',
    label: '垂直居',
    valueType: 'string',
    defaultValue: 'center',
    dropdown: [
    { label: '中', value: 'center', },
    { label: '上', value: 'flex-start', },
    { label: '下', value: 'flex-end', },
  ],
})

types['properties'].push({
    key: 'Tcolor',
    label: '文本颜色',
    valueType: 'color',
    defaultValue: "#333",
});

types['properties'].push({
    key: 'bgcolor',
    label: '背景颜色',
    valueType: 'color',
    defaultValue: "#00000000",
});

types['properties'].push({
    key: 'fontsize',
    label: '字体大小',
    valueType: 'number',
    defaultValue: 16,
});

types['events'].push({
    key: 'click',
    label: '被点击',
    params: [],

})

types['methods'].push({
    key: 'OverFlow',
    label: '文本',
    params: [
      {
          key: 'overflow',
          label: '溢出',
          valueType: 'string',
          dropdown: [
    { label: '允许', value: 'visible', },
    { label: '不允许', value: 'hidden', },
    { label: '滚动', value: 'scroll', },
  ],
      },

],


})
Widget.prototype.OverFlow = function (overflow,) {
    document.getElementById(this.widgetid).style.overflow = overflow;
}

types['methods'].push({
    key: 'setStyle',
    label: '设置',
    params: [
      {
          key: 'name',
          label: '属性名',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 'value',
          label: '属性值',
          valueType: 'string',
          defaultValue: "",
      },],


})
Widget.prototype.setStyle = function (name,value,) {
    document.getElementById(this.widgetid).style[name] = value;
}

types['events'].push({
  key: 'dbclick',
  label: '被双击',
  params: [],

})

types['events'].push({
    key: 'down',
    label: '被按下',
    params: [],

})

types['events'].push({
    key: 'up',
    label: '被松开',
    params: [],

})
exports.types = types;
exports.widget = Widget;