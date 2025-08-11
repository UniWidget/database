/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

const types = {
  isInvisibleWidget: false,
  type: "NUMBER_INPUT_NEW_WIDGET",
  icon: "https://example.cn",
  title: "纯数字输入框",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: "value",
      label: "数值",
      valueType: "number",
      defaultValue: 0,
    },
  ],
  methods: [],
  events: [
    {
      key: "onChange",
      label: "数值改变",
      params: [
        {
          key: "value",
          label: "数值",
          valueType: "number",
        },
      ],
    },
  ],
};

class NumberInputWidget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  handleChange = (event) => {
    const newValue = event.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    this.setState({ value: newValue }, () => {
      this.emit("onChange", parseInt(newValue, 10));
    });
  };

  handleInput = (event) => {
    const newValue = event.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    this.setState({ value: newValue });
  };

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
        onInput={this.handleInput}
        style={{ padding: "10px", marginBottom: "10px" }}
      />
    );
  }
}

exports.types = types;
exports.widget = NumberInputWidget;
