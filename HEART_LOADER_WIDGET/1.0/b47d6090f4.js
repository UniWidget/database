// 定义控件类型
const HEART_LOADER_WIDGET = {
  type: 'HEART_LOADER_WIDGET',
  icon: 'https://static.codemao.cn/coco/player/unstable/H1AVe_eo0.image/svg+xml?hash=Fsmdw_jCzXpdTXj_XevpOY18UMeH.svg', // 替换为实际的心形图标链接
  title: '爱心加载动效',
  version: '1.0',
  isInvisibleWidget: false,
  isGlobalWidget: false,
  properties: [
    {
      key: 'loadingTime',
      label: '加载时间',
      valueType: 'number',
      defaultValue: 3000, // 默认加载时间为3000毫秒
      tooltip: '设置爱心加载动效的加载时间'
    },
    {
      key: 'successColor',
      label: '成功颜色',
      valueType: 'color',
      defaultValue: '#ff0000', // 默认成功颜色为红色
      tooltip: '设置加载成功部分的背景颜色'
    }
  ],
  methods: [],
  events: []
};

// 定义控件实体
class HeartLoaderWidget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.loadingTime = props.loadingTime;
    this.successColor = props.successColor;
    this.timer = null;
    this.progress = 0;
  }

  render() {
    return (
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: this.progress >= 1 ? this.successColor : '#ccc',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            xmlns="https://static.codemao.cn/coco/player/unstable/H1AVe_eo0.image/svg+xml?hash=Fsmdw_jCzXpdTXj_XevpOY18UMeH.svg"
            style={{ position: 'absolute', top: 0, left: 0 }}
          >
            <path
              fill={this.progress >= 1 ? this.successColor : '#ccc'}
              d="M20,100 C40,100 60,0 100,0 C100,0 100,50 80,30 L20,30 C0,30 0,100 20,100 Z"
            />
          </svg>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.progress += 0.01; // 每10毫秒增加1%的加载进度
      if (this.progress >= 1) {
        clearInterval(this.timer);
      }
      this.setProps({ progress: this.progress });
    }, 10); // 每10毫秒更新一次加载进度
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
}

exports.types = HEART_LOADER_WIDGET;
exports.widget = HeartLoaderWidget;