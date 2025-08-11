/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

const types = {
  isInvisibleWidget: false,
  type: "RICH_TEXT_INPUT_WIDGET",
  icon: "https://example.cn",
  title: "富文本输入框",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: 400,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: '__height',
      label: '高度',
      valueType: 'number',
      defaultValue: 200,
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

class RichTextInputWidget extends VisibleWidget {
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
      <div
        style={{
          width: this.__width,
          height: this.__height,
          border: '1px solid #ccc',
          borderRadius: 5,
          padding: 10,
        }}
      >
        <textarea
          style={{
            width: '100%',
            height: '100%',
            fontSize: 16,
            border: 'none',
            outline: 'none',
            resize: 'none',
          }}
          placeholder={this.placeholder}
          value={this.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

exports.types = types;
exports.widget = RichTextInputWidget;