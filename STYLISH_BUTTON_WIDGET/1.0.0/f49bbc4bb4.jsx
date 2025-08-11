/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

var document = this.document;

const types = {
  isInvisibleWidget: false,
  type: "STYLISH_BUTTON_WIDGET",
  icon: "https://example.cn",
  title: "超级好看的按钮",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: "label",
      label: "按钮文本",
      valueType: "string",
      defaultValue: "点击我",
    },
  ],
  methods: [
    {
      key: "click",
      label: "点击按钮",
      params: [],
    },
  ],
  events: [
    {
      key: "onClick",
      label: "按钮点击事件",
      params: [],
    },
  ],
};

class StylishButtonWidget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.label = props.label;
    this.id = crypto.randomUUID()
  }

  handleButtonClick = () => {
    this.emit("onClick");
  };

  click() {
    document.querySelector("#STYLISH_BUTTON_WIDGET_" + this.id).click();
  }

  render() {
    return (
      <button
        onClick={this.handleButtonClick}
        id={"STYLISH_BUTTON_WIDGET_" + this.id}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#3498db",
          color: "#ffffff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
          transition: "background-color 0.3s",
        }}
      >
        {this.label}
      </button>
    );
  }
}

exports.types = types;
exports.widget = StylishButtonWidget;
