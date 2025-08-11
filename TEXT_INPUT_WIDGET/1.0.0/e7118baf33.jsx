/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

const types = {
  isInvisibleWidget: false,
  type: "TEXT_INPUT_WIDGET",
  icon: "https://example.cn",
  title: "输入框",
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
      defaultValue: 30,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: 'placeholder',
      label: '占位符',
      valueType: 'string',
      defaultValue: '请输入内容',
    },
    {
      key: 'value',
      label: '文本内容',
      valueType: 'string',
      defaultValue: '',
      blockOptions: {
        generateBlock: true,
      },
    },
  ],
  methods: [],
  events: [],
};

class TextInputWidget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.__width = props.__width;
    this.__height = props.__height;
    this.placeholder = props.placeholder;
    this.value = props.value;
  }

  handleChange = (event) => {
    this.setProps({
      value: event.target.value,
    });
  };

  render() {
    return (
      <input
        type="text"
        style={{
          width: this.__width,
          height: this.__height,
          fontSize: 16,
        }}
        placeholder={this.placeholder}
        value={this.value}
        onChange={this.handleChange}
      />
    );
  }
}

exports.types = types;
exports.widget = TextInputWidget;
