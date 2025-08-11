const types = {
    isInvisibleWidget: false,
    type: "INPUT_WIDGET",
    icon: "",
    title: "防盗控件",
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
        defaultValue: 40,
        blockOptions: {
          generateBlock: false,
        },
      },
      {
        key: 'defaultText',
        label: '默认文本',
        valueType: 'string',
        defaultValue: '',
      },
      {
        key: 'inputValue',
        label: '输入值',
        valueType: 'string',
        defaultValue: '',
        blockOptions: {
          setter: {
            keys: ['defaultText'],
          },
          getter: {
            keys: ['inputValue'],
          },
        },
      },
    ],
    methods: [],
    events: [
      {
        key: 'onTextChange',
        label: '文本改变',
        parameters: [
          {
            key: 'value',
            valueType: 'string',
            label: '文本值',
          },
        ],
      },
    ],
  };
  
  class Widget extends VisibleWidget {
    constructor(props) {
      super(props);
      this.__width = props.__width;
      this.__height = props.__height;
      this.defaultText = props.defaultText;
      this.inputValue = this.defaultText;
    }
  
    handleInputChange(event) {
      this.inputValue = event.target.value;
      this.forceUpdate();
  
      // 触发 onTextChange 事件，传递当前输入框的值
      this.triggerEvent('onTextChange', { value: this.inputValue });
    }
  
    render() {
      return React.createElement(
        "input",
        {
          type: "text",
          value: this.inputValue,
          onChange: this.handleInputChange.bind(this),
          style: {
            width: this.__width + "px",
            height: this.__height + "px",
          },
        },
        null
      );
    }
  }
  
  types.properties.push({
    key: 'defaultText',
    label: '默认文本',
    valueType: 'string',
    defaultValue: '',
  });
  
  exports.types = types;
  exports.widget = Widget;
  