/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

const types = {
  isInvisibleWidget: false,
  type: "AUTOCOMPLETE_INPUT_WIDGET",
  icon: "https://example.cn",
  title: "联想输入框",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: 300,
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
      key: 'options',
      label: '选项',
      valueType: 'string',
      defaultValue: 'China,CoCo,Close,Const,Count',
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

class AutocompleteInputWidget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.__width = props.__width;
    this.placeholder = props.placeholder;
    this.options = props.options.split(',');
    this.value = props.value;
    this.filteredOptions = this.getFilteredOptions();
  }

  getFilteredOptions = () => {
    return this.options.filter((option) => option.toLowerCase().includes(this.value.toLowerCase()));
  };

  handleChange = (event) => {
    this.setProps({
      value: event.target.value,
    });
  };

  render() {
    return (
      <div style={{ width: this.__width }}>
        <label>输入关键词：</label>
        <input
          type="text"
          style={{
            fontSize: 16,
            padding: '5px 10px',
            width: '100%',
            borderRadius: 5,
            border: '1px solid #ccc',
          }}
          placeholder={this.placeholder}
          value={this.value}
          list="autocomplete_options"
          onChange={this.handleChange}
        />
        <datalist id="autocomplete_options">
          {this.filteredOptions.map((option, index) => (
            <option key={index} value={option} />
          ))}
        </datalist>
      </div>
    );
  }
}

exports.types = types;
exports.widget = AutocompleteInputWidget;
