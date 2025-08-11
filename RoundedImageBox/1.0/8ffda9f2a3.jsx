// 圆角图片框控件
//星辰随便制作，慢慢使用，哈哈哈
// 控件类型定义
const types = {
  isInvisibleWidget: false,
  type: "RoundedImageBox",
  icon: "https://static.codemao.cn/coco/player/unstable/H1AVe_eo0.image/svg+xml?hash=Fsmdw_jCzXpdTXj_XevpOY18UMeH.svg",
  title: "圆角图片框",
  version: "1.0",
  isGlobalWidget: false,
  properties: [
    {
      key: 'image',
      label: '图片',
      valueType: 'string',
      defaultValue: '',
      tooltip: '选择图片文件'
    },
    {
      key: 'radius',
      label: '圆角半径',
      valueType: 'number',
      defaultValue: 8,
      tooltip: '圆角的大小，单位为像素'
    },
    {
      key: 'borderWidth',
      label: '边框宽度',
      valueType: 'number',
      defaultValue: 0,
      tooltip: '边框的宽度，单位为像素'
    },
    {
      key: 'borderColor',
      label: '边框颜色',
      valueType: 'color',
      defaultValue: '#000000',
      tooltip: '边框的颜色'
    },
    {
      key: 'backgroundColor',
      label: '背景颜色',
      valueType: 'color',
      defaultValue: '#FFFFFF',
      tooltip: '背景的颜色'
    }
  ],
  methods: [],
  events: []
};

// 控件实体定义
class RoundedImageBoxWidget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.image = props.image;
    this.radius = props.radius;
    this.borderWidth = props.borderWidth;
    this.borderColor = props.borderColor;
    this.backgroundColor = props.backgroundColor;
  }

  render() {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        backgroundColor: this.backgroundColor,
        borderRadius: `${this.radius}px`,
        overflow: 'hidden',
        border: `${this.borderWidth}px solid${this.borderColor}`
      }}>
        < img src={this.image} alt="圆角图片框" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    );
  }
}

// 导出控件
exports.types = types;
exports.widget = RoundedImageBoxWidget;