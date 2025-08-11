// 控件类型定义
const types = {
  type: 'SCROLLABLE_WIDGET',
  icon: 'https://static.codemao.cn/coco/player/unstable/H1AVe_eo0.image/svg+xml?hash=Fsmdw_jCzXpdTXj_XevpOY18UMeH.svg', 
  title: 'XC可滚动文字控件',
  version: '1.0',
  isInvisibleWidget: false,
  isGlobalWidget: false,
  properties: [
    {
      key: 'content',
      label: '滚动内容',
      valueType: 'string',
      defaultValue: '这里是可以滚动的内容区域。',
    },
    {
      key: 'height',
      label: '控件高度',
      valueType: 'number',
      defaultValue: 200,
    },
  ],
  methods: [],
  events: [],
};

// 控件实体定义
class ScrollableWidget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.content = props.content;
    this.height = props.height;
  }

  render() {
    return (
      <div
        style={{
          height: `${this.height}px`,
          overflowY: 'auto', // 允许垂直滚动
          border: '1px solid #ccc',
          borderRadius: '5px',
          padding: '10px',
          backgroundColor: '#fff',
        }}
        onScroll={(e) => {
          // 可以在这里添加滚动事件的处理逻辑
        }}
      >
        {this.content}
      </div>
    );
  }
}

// 导出控件
exports.types = types;
exports.widget = ScrollableWidget;