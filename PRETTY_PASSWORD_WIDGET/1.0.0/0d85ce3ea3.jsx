// 控件类型定义
const types = {
  type: 'PRETTY_PASSWORD_WIDGET',
  icon: 'https://static.codemao.cn/coco/player/unstable/rJZhYkL32.image/jpeg?hash=FucXTDVfBJdoSStUZvqy24ILwabo',
  title: '超级好看的密码框',
  isInvisibleWidget: false,
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: 300,
    },
    {
      key: '__height',
      label: '高度',
      valueType: 'number',
      defaultValue: 40,
    },
    {
      key: 'placeholder',
      label: '占位符',
      valueType: 'string',
      defaultValue: '请输入密码',
    },
    {
      key: 'borderColor',
      label: '边框颜色',
      valueType: 'color',
      defaultValue: '#ccc',
    },
    {
      key: 'backgroundColor',
      label: '背景颜色',
      valueType: 'color',
      defaultValue: '#f2f2f2',
    },
    {
      key: 'textColor',
      label: '文本颜色',
      valueType: 'color',
      defaultValue: '#333',
    },
    {
      key: 'borderRadius',
      label: '圆角',
      valueType: 'number',
      defaultValue: 5,
    },
    {
      key: 'focusBackgroundColor',
      label: '获得焦点时的背景颜色',
      valueType: 'color',
      defaultValue: '#e8f4ff',
    },
    {
      key: 'onValueChange',
      label: '值改变时',
      valueType: 'string',
      defaultValue: '无操作',
    },
  ],
  methods: [],
  events: [
    {
      key: 'onFocus',
      label: '获得焦点',
      params: [
        {
          key: 'value',
          label: '当前值',
          valueType: 'string',
        },
      ],
    },
    {
      key: 'onChange',
      label: '值改变',
      params: [
        {
          key: 'newValue',
          label: '新值',
          valueType: 'string',
        },
      ],
    },
  ],
};
// 控件实体定义
class PrettyPasswordWidget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.placeholder = props.placeholder;
    this.borderColor = props.borderColor;
    this.backgroundColor = props.backgroundColor;
    this.textColor = props.textColor;
    this.borderRadius = props.borderRadius;
    this.focusBackgroundColor = props.focusBackgroundColor;
    this.onValueChange = props.onValueChange;
  }

  render() {
    return (
      <input
        type="password"
        placeholder={this.placeholder}
        style={{
          width: '100%',
          height: '100%',
          border: `1px solid ${this.borderColor}`,
          borderRadius: this.borderRadius,
          backgroundColor: this.backgroundColor,
          color: this.textColor,
          padding: '10px',
          fontSize: '16px',
        }}
        onFocus={(event) => {
          this.emit('onFocus', event.target.value);
          event.target.style.backgroundColor = this.focusBackgroundColor;
        }}
        onChange={(event) => {
          this.emit('onChange', event.target.value);
          // 根据 onValueChange 属性执行操作
          if (this.onValueChange !== '无操作') {
            console.log('密码框值改变：', event.target.value);
            // 这里可以添加其他逻辑，例如记录日志或发送请求
          }
        }}
      />
    );
  }
}

exports.types = types;
exports.widget = PrettyPasswordWidget;
