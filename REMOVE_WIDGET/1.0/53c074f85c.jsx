// 控件类型定义
//有问题的话，咳咳咳，别找星辰，星辰不知道
//星辰自制的点牛控件
const REMOVE_WIDGET = {
  type: 'REMOVE_WIDGET',
  icon: 'https://static.codemao.cn/coco/player/unstable/H1AVe_eo0.image/svg+xml?hash=Fsmdw_jCzXpdTXj_XevpOY18UMeH.svg',
  title: 'XC移除自定义控件',
  version: '1.0',
  platforms: ['web', 'android', 'ios'],
  isInvisibleWidget: false,
  isGlobalWidget: true,
  properties: [],
  methods: [
    {
      key: 'removeControl',
      label: '移除控件',
      valueType: 'void',
      params: [
        {
          key: 'widgetType',
          label: '移除的控件类型',
          valueType: 'string',
          defaultValue: '',
          blockOptions: {
            generateBlock: false,
          },
        },
      ],
    },
  ],
  events: [],
};

// 控件实体定义
class RemoveWidget extends VisibleWidget {
  constructor(props) {
    super(props);
  }

  removeControl(widgetType) {
    // 实现移除指定类型的控件的点牛逻辑
    console.log(`XC移除自定义控: ${widgetType}`);
  }

  render() {
    return (
      <button onClick={() => this.removeControl(this.props.widgetType)}>
        移除
      </button>
    );
  }
}

// 导出控件
exports.types = REMOVE_WIDGET;
exports.widget = RemoveWidget;