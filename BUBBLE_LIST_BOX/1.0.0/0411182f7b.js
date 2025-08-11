// 控件类型定义
const types = {
  type: 'BUBBLE_LIST_BOX',
  icon: 'https://static.codemao.cn/coco/player/unstable/H1AVe_eo0.image/svg+xml?hash=Fsmdw_jCzXpdTXj_XevpOY18UMeH.svg',
  title: 'XC列表框气泡',
  version: '1.0.0',
  isGlobalWidget: false,
  properties: [
    {
      key: 'avatarList',
      label: '头像列表',
      valueType: 'array',
      defaultValue: []
    },
    {
      key: 'bubbleContent',
      label: '气泡内容',
      valueType: 'string',
      defaultValue: ''
    },
    {
      key: 'bubbleColor',
      label: '气泡颜色',
      valueType: 'color',
      defaultValue: '#ffffff'
    }
  ],
  methods: [],
  events: []
};

// 控件实体定义
class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.avatarList = props.avatarList;
    this.bubbleContent = props.bubbleContent;
    this.bubbleColor = props.bubbleColor;
  }

  render() {
    // 渲染列表框和头像
    return (
      <div>
        {this.avatarList.map((avatar, index) => (
          <div key={index}>
            <img src={avatar} alt="头像" />
            <div style={{ backgroundColor: this.bubbleColor, position: 'absolute', top: '10px', left: '10px' }}>{this.bubbleContent}</div>
          </div>
        ))}
      </div>
    );
  }
}

exports.types = types;
exports.widget = Widget;
