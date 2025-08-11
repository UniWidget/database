const types = {
    isInvisibleWidget: false,
    type: "SIMULATE_COMPUTER_KEY_BUTTON_WIDGET",
    icon: "https://uiverse.io/build/_assets/logo-OR7QQX33.svg",
    title: "仿电脑按键按钮",
    author: "WCF（1635873939）",
    version: "1.0.0",
    isGlobalWidget: false,
    properties: [
      {
        key: '__width',
        label: '宽度',
        valueType: 'number',
        defaultValue: 60,
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
        key: '__size',
        label: '',
        valueType: 'number',
        defaultValue: 0,
        readonly: true,
        blockOptions: {
          setter: {
            keys: ['__height', '__width'],
          },
          getter: {
            keys: ['__height', '__width'],
          },
        },
      },
    ],
    methods: [],
    events: [],
  };
  
  class Widget extends VisibleWidget {
    constructor(props) {
      super(props);
      this.__width = props.__width;
      this.__height = props.__height;
      this.widgetLog('【仿电脑按键按钮】 作者：WCF QQ：1635873939');
    this.text=props.text;
    this.color=props.color;
    this.ulg=props.ulg;
    this.lrg=props.lrg;
  
    }
    render() {
      return(
        React.createElement("button", {  style: {  border: 'none',
          background: (['linear-gradient(-225deg,',this.ulg,',',this.lrg,')'].join('')),
          borderRadius: "3px",
          boxShadow: 'inset 0 -2px 0 0 #cdcde6,inset 0 0 1px 1px #fff,0 1px 2px 1px rgba(30,35,90,0.4)',
          color: (this.color),
          textAlign: 'center',
          padding: "0.6em",
          display: 'inline-block',
          fontWeight: 'bold',
          fontSize: "16px",
          minWidth: "1em",
          lineHeight: "1em",
          userSelect: 'none',
          width: (this.__width),
          height: (this.__height),
        },
        onClick: this.onClick.bind(this),
      }, [(this.text)])
    );
  
    }
  }
  
  types['properties'].push({
      key: 'text',
      label: '文本内容',
      valueType: 'string',
      defaultValue: 'CTRL',
  
  })
  
  types['properties'].push({
      key: 'color',
      label: '文本颜色',
      valueType: 'color',
      defaultValue: "#969faf",
  
  })
  
  types['properties'].push({
      key: 'ulg',
      label: '左上渐变',
      valueType: 'color',
      defaultValue: "#d5dbe4",
  
  })
  
  types['properties'].push({
      key: 'lrg',
      label: '右下渐变',
      valueType: 'color',
      defaultValue: "#f8f8f8",
  
  })
  
  types['events'].push({
      key: 'onClick',
      label: '被点击',
      params: [],
  
  })
  Widget.prototype.onClick = function (event) {
        this.emit("onClick");
  }
  
  exports.types = types;
  exports.widget = Widget;
  