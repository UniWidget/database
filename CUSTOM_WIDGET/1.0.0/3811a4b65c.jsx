var window = this.window
const types = {
    isInvisibleWidget: false,
    type: "CUSTOM_WIDGET",
    icon: "https://www.cloudroo.top/file/image/SDN.png",
    title: "小黑子狂喜",
    version: "1.0.0",
    isGlobalWidget: false,
    properties: [],
    methods: [],
    events: [],
  };
  
  class CustomWidget extends VisibleWidget {
    constructor(props) {
      super(props);
    }
  
    handleClick() {
      window.alert("你干嘛~嗨嗨哟");
    }
  
    render() {
      return (
        React.createElement("button", { onClick: this.handleClick.bind(this) }, "姬霓太美")
      );
    }
  }
  
  exports.types = types;
  exports.widget = CustomWidget;
  