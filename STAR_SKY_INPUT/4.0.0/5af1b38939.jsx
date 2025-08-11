const types = {
  type: 'STAR_SKY_INPUT',
  icon: 'https://creation.codemao.cn/716/appcraft/IMAGE_star_icon.svg',
  title: '星空输入框',
  isInvisibleWidget: false,
  isGlobalWidget: false,
  version: '4.0.0',
  platforms: ['web', 'android', 'ios'],
  defaultWidth: 200,
  defaultHeight: 40,
  minWidth: 50,
  minHeight: 30,
  properties: [
    {
      key: 'ssid',
      label: '控件ID',
      valueType: 'string',
      defaultValue: '',
      isHidden: true
    },
    {
      key: 'content',
      label: '输入内容',
      valueType: 'string',
      defaultValue: '',
      blockOptions: { generateBlock: true }
    },
    {
      key: 'placeholder',
      label: '提示内容',
      valueType: 'string',
      defaultValue: '请输入内容...',
      blockOptions: { generateBlock: true }
    },
    {
      key: 'style',
      label: '样式选择',
      valueType: 'string',
      defaultValue: 'bordered',
      dropdown: [
        { label: '边框带底', value: 'bordered' },
        { label: '纯色圆角', value: 'solid' },
        { label: '单线无边框', value: 'singleLine' }
      ],
      blockOptions: { generateBlock: true }
    },
    {
      key: 'inputMode',
      label: '输入类型',
      valueType: 'string',
      defaultValue: 'text',
      dropdown: [
        { label: '输入框', value: 'text' },
        { label: '密码框', value: 'password' }
      ],
      blockOptions: { generateBlock: true }
    },
    {
      key: 'radius',
      label: '边框圆角',
      valueType: 'number',
      defaultValue: 8,
      blockOptions: { generateBlock: true }
    },
    {
      key: 'borderColor',
      label: '边框颜色',
      valueType: 'color',
      defaultValue: '#cccccc',
      blockOptions: { generateBlock: true }
    },
    {
      key: 'bgColor',
      label: '背景颜色',
      valueType: 'color',
      defaultValue: '#ffffff',
      blockOptions: { generateBlock: true }
    },
    {
      key: 'lineColor',
      label: '单线颜色',
      valueType: 'color',
      defaultValue: '#1890ff',
      blockOptions: { generateBlock: true }
    },
    {
      key: 'textColor',
      label: '输入文本颜色',
      valueType: 'color',
      defaultValue: '#333333',
      blockOptions: { generateBlock: true }
    },
    {
      key: 'placeholderColor',
      label: '提示文本颜色',
      valueType: 'color',
      defaultValue: '#999999',
      blockOptions: { generateBlock: true }
    }
  ],
  methods: [
    {
      key: 'setContent',
      label: '设置输入内容为',
      valueType: 'void',
      params: [{ key: 'value', label: '内容', valueType: 'string' }]
    },
    {
      key: 'setPlaceholder',
      label: '设置提示内容为',
      valueType: 'void',
      params: [{ key: 'value', label: '提示文本', valueType: 'string' }]
    },
    {
      key: 'setInputMode',
      label: '设置输入类型为',
      valueType: 'void',
      params: [{ key: 'mode', label: '类型', valueType: 'string', dropdown: [{ label: '输入框', value: 'text' }, { label: '密码框', value: 'password' }] }]
    },
    {
      key: 'setStyle',
      label: '设置样式为',
      valueType: 'void',
      params: [{ key: 'style', label: '样式', valueType: 'string', dropdown: [{ label: '边框带底', value: 'bordered' }, { label: '纯色圆角', value: 'solid' }, { label: '单线无边框', value: 'singleLine' }] }]
    },
    {
      key: 'setRadius',
      label: '设置边框圆角为',
      valueType: 'void',
      params: [{ key: 'radius', label: '圆角值', valueType: 'number' }]
    },
    {
      key: 'setBorderColor',
      label: '设置边框颜色为',
      valueType: 'void',
      params: [{ key: 'color', label: '颜色', valueType: 'color' }]
    },
    {
      key: 'setBgColor',
      label: '设置背景颜色为',
      valueType: 'void',
      params: [{ key: 'color', label: '颜色', valueType: 'color' }]
    },
    {
      key: 'setLineColor',
      label: '设置单线颜色为',
      valueType: 'void',
      params: [{ key: 'color', label: '颜色', valueType: 'color' }]
    },
    {
      key: 'setTextColor',
      label: '设置输入文本颜色为',
      valueType: 'void',
      params: [{ key: 'color', label: '颜色', valueType: 'color' }]
    },
    {
      key: 'setPlaceholderColor',
      label: '设置提示文本颜色为',
      valueType: 'void',
      params: [{ key: 'color', label: '颜色', valueType: 'color' }]
    },
    {
      key: 'getContent',
      label: '获取输入内容',
      valueType: 'string',
      params: []
    }
  ],
  events: [
    {
      key: 'onFocus',
      label: '获得焦点时',
      params: [{ key: 'ssid', label: '控件ID', valueType: 'string' }]
    },
    {
      key: 'onBlur',
      label: '失去焦点时',
      params: [{ key: 'ssid', label: '控件ID', valueType: 'string' }]
    },
    {
      key: 'onChange',
      label: '内容改变时',
      params: [
        { key: 'newValue', label: '新内容', valueType: 'string' },
        { key: 'oldValue', label: '旧内容', valueType: 'string' },
        { key: 'ssid', label: '控件ID', valueType: 'string' }
      ]
    }
  ]
};

class StarSkyInput extends VisibleWidget {
  constructor(props) {
    super(props);
    this.ssid = props.ssid || `ssi_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    this.content = props.content || '';
    this.placeholder = props.placeholder || '请输入内容...';
    this.style = props.style || 'bordered';
    this.inputMode = props.inputMode || 'text';
    this.radius = props.radius || 8;
    this.borderColor = props.borderColor || '#cccccc';
    this.bgColor = props.bgColor || '#ffffff';
    this.lineColor = props.lineColor || '#1890ff';
    this.textColor = props.textColor || '#333333';
    this.placeholderColor = props.placeholderColor || '#999999';
    this.oldValue = this.content;

    this.setProps({
      ssid: this.ssid,
      content: this.content,
      placeholder: this.placeholder,
      style: this.style,
      inputMode: this.inputMode,
      radius: this.radius,
      borderColor: this.borderColor,
      bgColor: this.bgColor,
      lineColor: this.lineColor,
      textColor: this.textColor,
      placeholderColor: this.placeholderColor
    });
  }

  setContent = (value) => {
    const oldValue = this.content;
    this.content = value;
    this.emit('onChange', value, oldValue, this.ssid);
    this.setProps({ content: value });
  };

  getContent = () => this.content;

  setPlaceholder = (value) => {
    this.placeholder = value;
    this.setProps({ placeholder: value });
  };

  setInputMode = (mode) => {
    this.inputMode = mode;
    this.setProps({ inputMode: mode });
  };

  setStyle = (style) => {
    this.style = style;
    this.setProps({ style: style });
  };

  setRadius = (radius) => {
    this.radius = radius;
    this.setProps({ radius: radius });
  };

  setBorderColor = (color) => {
    this.borderColor = color;
    this.setProps({ borderColor: color });
  };

  setBgColor = (color) => {
    this.bgColor = color;
    this.setProps({ bgColor: color });
  };

  setLineColor = (color) => {
    this.lineColor = color;
    this.setProps({ lineColor: color });
  };

  setTextColor = (color) => {
    this.textColor = color;
    this.setProps({ textColor: color });
  };

  setPlaceholderColor = (color) => {
    this.placeholderColor = color;
    this.setProps({ placeholderColor: color });
  };

  handleChange = (e) => {
    const newValue = e.target.value;
    const oldValue = this.content;
    this.content = newValue;
    this.emit('onChange', newValue, oldValue, this.ssid);
    this.setProps({ content: newValue });
  };

  handleFocus = () => this.emit('onFocus', this.ssid);
  
  handleBlur = () => this.emit('onBlur', this.ssid);

  render() {
    const baseStyle = {
      borderRadius: `${this.radius}px`,
      backgroundColor: this.bgColor,
      color: this.textColor,
      padding: '8px 12px',
      fontSize: '14px',
      width: '100%',
      height: '40px',
      border: 'none',
      outline: 'none',
      boxSizing: 'border-box',
      '&::placeholder': { color: this.placeholderColor }
    };

    let inputStyle = { ...baseStyle };
    switch (this.style) {
      case 'bordered': inputStyle.border = `1px solid ${this.borderColor}`; break;
      case 'singleLine': 
        inputStyle.borderBottom = `1px solid ${this.lineColor}`;
        inputStyle.backgroundColor = 'transparent';
        break;
    }

    return (
      <input
        type={this.inputMode}
        value={this.content}
        placeholder={this.placeholder}
        style={inputStyle}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        data-ssid={this.ssid}
      />
    );
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { types, widget: StarSkyInput };
} else {
  exports.types = types;
  exports.widget = StarSkyInput;
}
