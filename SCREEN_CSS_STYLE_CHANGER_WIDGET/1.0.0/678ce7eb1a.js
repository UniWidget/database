//星河共无限 AI生成
const types = {
    type: 'SCREEN_CSS_STYLE_CHANGER_WIDGET',
    icon: 'https://creation.codemao.cn/716/appcraft/IMAGE_KvkhthrhIl_1643078284866',
    title: '更改屏幕H5宽高',
    version: '1.0.0',
    platforms: ['web'],
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [
      {
        key: 'selector',
        label: 'CSS Selector',
        valueType: 'string',
        defaultValue: '.styles_playerWrapper__22L9v',
        tooltip: 'The CSS selector of the element to change style.'
      },
      {
        key: 'width',
        label: 'Width',
        valueType: 'number',
        defaultValue: '100%',
        tooltip: 'Width of the element.'
      },
      {
        key: 'height',
        label: 'Height',
        valueType: 'number',
        defaultValue: '100%',
        tooltip: 'Height of the element.'
      },
      {
        key: 'overflow',
        label: 'Overflow',
        valueType: 'string',
        defaultValue: 'hidden',
        tooltip: 'Overflow behavior of the element.'
      }
    ],
    methods: [],
    events: []
  };
  

  class SCREEN_CSS_STYLE_CHANGER_WIDGET extends InvisibleWidget {
    constructor(props) {
      super(props);
      this.style = {
        width: this.props.width,
        height: this.props.height,
        overflow: this.props.overflow
      };
    }
  
    componentDidMount() {
      this.updateStyle();
    }
  
    componentDidUpdate(prevProps) {
      if (prevProps.width !== this.props.width ||
          prevProps.height !== this.props.height ||
          prevProps.overflow !== this.props.overflow) {
        this.updateStyle();
      }
    }
  
    updateStyle() {
      const elements = document.querySelectorAll(this.props.selector);
      elements.forEach(element => {
        element.style.width = this.props.width;
        element.style.height = this.props.height;
        element.style.overflow = this.props.overflow;
      });
    }
  
    render() {
      return null; // 该控件不显示任何内容
    }
  }
  
  exports.types = types;
  exports.widget = Widget;  
  