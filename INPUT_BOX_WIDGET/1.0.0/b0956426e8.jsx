// 控件类型定义
const types = {
  type: 'INPUT_BOX_WIDGET',
  icon: 'https://example.com/input-box-icon.svg',
  title: '两用输入框',
  isInvisibleWidget: false,
  isGlobalWidget: false,
  properties: [
    {
      key: 'value',
      label: '输入值',
      valueType: 'string',
      defaultValue: '',
    },
    {
      key: 'placeholder',
      label: '占位符',
      valueType: 'string',
      defaultValue: '请输入内容',
    },
    {
      key: 'type',
      label: '类型',
      valueType: 'string',
      dropdown: [
        { label: '文本', value: 'text' },
        { label: '密码', value: 'password' },
      ],
      defaultValue: 'text',
    },
  ],
  methods: [],
  events: [],
};

// 控件实体定义
class InputBoxWidget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.value = props.value;
    this.placeholder = props.placeholder;
    this.type = props.type;
  }

  render() {
    return (
      <input
        type={this.type}
        value={this.value}
        placeholder={this.placeholder}
        onChange={e => this.setProps({ value: e.target.value })}
      />
    );
  }
}

// 导出控件
exports.types = types;
exports.widget = InputBoxWidget;
