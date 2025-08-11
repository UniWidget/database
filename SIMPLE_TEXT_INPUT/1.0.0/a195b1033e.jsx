const types = {
  isInvisibleWidget: false,
  type: "SIMPLE_TEXT_INPUT",
  icon: "https://example.com/text-input-icon.svg",
  title: "普通输入框",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: 'placeholder',
      label: '占位符',
      valueType: 'string',
      defaultValue: '请输入文本',
    },
    {
      key: 'value',
      label: '文本内容',
      valueType: 'string',
      defaultValue: '',
    },
    {
      key: 'maxLength',
      label: '最大长度',
      valueType: 'number',
      defaultValue: 100,
    },
    {
      key: 'disabled',
      label: '禁用',
      valueType: 'boolean',
      defaultValue: false,
    },
  ],
  methods: [],
  events: [
    {
      key: 'onChange',
      label: '文本改变',
      params: [
        {
          key: 'value',
          label: '文本内容',
          valueType: 'string',
        },
      ],
    },
    {
      key: 'onFocus',
      label: '获得焦点',
      params: [],
    },
    {
      key: 'onBlur',
      label: '失去焦点',
      params: [],
    },
  ],
};

class SimpleTextInput extends VisibleWidget {
  constructor(props) {
    super(props);
    this.placeholder = props.placeholder;
    this.value = props.value;
    this.maxLength = props.maxLength;
    this.disabled = props.disabled;
  }

  onChange = (event) => {
    const newValue = event.target.value;
    this.setProps({
      value: newValue,
    });
    this.emit('onChange', newValue);
  };

  onFocus = () => {
    this.emit('onFocus');
  };

  onBlur = () => {
    this.emit('onBlur');
  };

  render() {
    return (
      <input
        type="text"
        placeholder={this.placeholder}
        value={this.value}
        maxLength={this.maxLength}
        disabled={this.disabled}
        onChange={this.onChange}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
      />
    );
  }
}

exports.types = types;
exports.widget = SimpleTextInput;