/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

const types = {
  isInvisibleWidget: false,
  type: "MULTI_CHECKBOX_WIDGET",
  icon: "https://example.cn",
  title: "多选框控件",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: "options",
      label: "选项",
      valueType: "string",
      defaultValue: "Option 1,Option 2,Option 3",
    },
    {
      key: "selectedOptions",
      label: "已选项",
      valueType: "string",
      defaultValue: "",
    },
  ],
  methods: [],
  events: [
    {
      key: "onSelectionChange",
      label: "选择改变",
      params: [
        {
          key: "selectedOptions",
          label: "已选项",
          valueType: "array",
        },
      ],
    },
  ],
};

class MultiCheckboxWidget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.options = props.options;
    this.selectedOptions = props.selectedOptions;
  }


  p = v => typeof v === "object" ? Object.assign([], v) : Object.assign([], v.split(","));

  handleOptionChange = (option) => {
    const updatedSelectedOptions = this.p(this.selectedOptions).includes(option)
      ? this.p(this.selectedOptions).filter((item) => item !== option)
      : [...this.p(this.selectedOptions), option];

    this.setProps({ selectedOptions: updatedSelectedOptions.join(",") });
    this.emit("onSelectionChange", updatedSelectedOptions);
  };

  render() {
    return (
      <div>
        {this.p(this.options).map((option, index) => (
          <label key={index} style={{ display: "block", margin: "5px" }}>
            <input
              type="checkbox"
              value={option}
              checked={this.p(this.selectedOptions).includes(option)}
              onChange={() => this.handleOptionChange(option)}
            />
            {option}
          </label>
        ))}
      </div>
    );
  }
}

exports.types = types;
exports.widget = MultiCheckboxWidget;
