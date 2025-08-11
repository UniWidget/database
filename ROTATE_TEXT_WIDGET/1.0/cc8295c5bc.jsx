// 定义控件类型和基本信息
const types = {
  type: 'ROTATE_TEXT_WIDGET',
  icon: 'https://creation.codemao.cn/716/appcraft/IMAGE_KvkhthrhIl_1643078284866',
  title: '旋转文字控件',
  version: '1.0',
  isInvisibleWidget: false,
  isGlobalWidget: false,
  properties: [
    {
      key: 'text',
      label: '文本',
      valueType: 'string',
      defaultValue: '旋转文字',
    },
    {
      key: 'fontSize',
      label: '文字大小',
      valueType: 'number',
      defaultValue: 16,
    },
    {
      key: 'rotationAngle',
      label: '旋转角度',
      valueType: 'number',
      defaultValue: 0,
    },
    {
      key: 'textColor',
      label: '文本颜色',
      valueType: 'color',
      defaultValue: '#000000',
    },
  ],
  methods: [],
  events: [
    {
      key: 'onClick',
      label: '点击事件',
      params: [],
    },
  ],
};

// 控件实体定义
class RotateTextWidget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.text = props.text;
    this.fontSize = props.fontSize;
    this.rotationAngle = props.rotationAngle;
    this.textColor = props.textColor;
  }

  // 渲染函数
  render() {
    return (
      <div
        style={{
          transform: `rotate(${this.rotationAngle}deg)`,
          color: this.textColor,
          fontSize: `${this.fontSize}px`,
        }}
        onClick={() => this.emit('onClick')}
      >
        {this.text}
      </div>
    );
  }
}

// 导出控件
exports.types = types;
exports.widget = RotateTextWidget;
