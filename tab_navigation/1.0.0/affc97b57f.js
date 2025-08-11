const types = {
  isInvisibleWidget: false,
  type: "tab_navigation",
  icon: "",
  title: "多标签导航栏",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: 'tabs',
      label: '标签',
      valueType: 'string',
      defaultValue: '标签1,标签2,标签3',
    },
    {
      key: 'activeTabIndex',
      label: '激活标签索引',
      valueType: 'number',
      defaultValue: 0,
    },
    {
      key: 'textColor',
      label: '文字颜色',
      valueType: 'string',
      defaultValue: '#000000',
    },
    {
      key: 'underlineColor',
      label: '下划线颜色',
      valueType: 'string',
      defaultValue: '#69c0ff',
    },
    {
      key: 'textSize',
      label: '文字大小',
      valueType: 'number',
      defaultValue: 16,
    },
    {
      key: 'underlineWidth',
      label: '下划线宽度',
      valueType: 'number',
      defaultValue: 100,
    },
  ],
  methods: [],
  events: [
    {
      key: 'handleClick',
      label: '被点击',
      params: [
        {key:'index',label:'索引',valueType:'number'}
      ]
    }
  ],
};

class TabNavigation extends VisibleWidget {
  constructor(props) {
    super(props);
    this.tabs = props.tabs.split(',');
    this.activeTabIndex = props.activeTabIndex;
    this.textColor = props.textColor;
    this.underlineColor = props.underlineColor;
    this.textSize = props.textSize;
    this.underlineWidth = props.underlineWidth;
  }

  handleClick(index) {
    this.activeTabIndex = index;
    this.render();
    this.emit('handleClick',index)
  }

  render() {
    const tabWidth = 100 / this.tabs.length;

    const tabs = this.tabs.map((tab, index) => {
      const isActive = index === this.activeTabIndex;
      const tabStyle = {
        flex: 1,
        cursor: 'pointer',
        padding: '10px 15px',
        textAlign: 'center',
        color: this.textColor,
        fontSize: `${this.textSize}px`, // 使用 textSize 设置字体大小
      };

      return React.createElement('div', {
        key: index,
        style: tabStyle,
        onClick: () => this.handleClick(index),
      }, tab);
    });

    const underlineStyle = {
      position: 'absolute',
      bottom: 0,
      left: `calc(${tabWidth * this.activeTabIndex}% + ${(tabWidth - this.underlineWidth) / 2}%)`, // 使用 underlineWidth 修改下划线位置
      width: `${this.underlineWidth}%`, // 使用 underlineWidth 修改下划线宽度
      height: '2px',
      backgroundColor: this.underlineColor,
      transition: 'left 0.3s ease',
    };

    const containerStyle = {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
      backgroundColor: '#ffffff',
    };

    return React.createElement('div', { style: containerStyle },
      [
        ...tabs,
        React.createElement('div', { style: underlineStyle }),
      ]
    );
  }
}

exports.types = types;
exports.widget = TabNavigation;