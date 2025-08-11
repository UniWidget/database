const types = {
  type: 'NAVIGATION_BAR_WIDGET',
  title: '导航栏控件',
  icon: 'navigation_bar_icon_url', // 假定的图标URL
  platforms: ['web', 'android', 'ios'],
  isInvisibleWidget: false,
  isGlobalWidget: false,
  properties: [
    {
      key: 'items',
      label: '导航项',
      valueType: 'array',
      itemValueType: 'string',
      defaultValue: ['首页', '关于我们', '联系方式'],
    },
  ],
  methods: [
    {
      key: 'updateItemText',
      label: '更新导航项文本',
      params: [
        {
          key: 'index',
          label: '项索引',
          valueType: 'number',
        },
        {
          key: 'newText',
          label: '新文本',
          valueType: 'string',
        },
      ],
    },
  ],
  events: [
    {
      key: 'onItemClick',
      label: '导航项点击',
      params: [
        {
          key: 'index',
          label: '项索引',
          valueType: 'number',
        },
      ],
    },
  ],
};
class NavigationBarWidget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items || ['首页', '关于我们', '联系方式'], // 默认导航项
    };
  }

  // 更新导航项文本的方法
  updateItemText = (index, newText) => {
    const items = [...this.state.items];
    if (index >= 0 && index < items.length) {
      items[index] = newText;
      this.setState({ items });
    }
  };

  // 导航项点击事件处理
  handleItemClick = (index) => {
    // 触发外部事件
    this.triggerEvent('onItemClick', { index });
  };

  // 渲染控件
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px 0' }}>
        {this.state.items.map((item, index) => (
          <div
            key={index}
            style={{ cursor: 'pointer' }}
            onClick={() => this.handleItemClick(index)}
          >
            {item}
          </div>
        ))}
      </div>
    );
  }
}

// 导出控件
exports.types = types;
exports.widget = NavigationBarWidget;