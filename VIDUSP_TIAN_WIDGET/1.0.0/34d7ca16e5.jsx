const types = {
  isInvisibleWidget: false,
  type: "VIDUSP_TIAN_WIDGET",
  icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
  title: "视频框",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: 200,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: '__height',
      label: '高度',
      valueType: 'number',
      defaultValue: 200,
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

types['properties'].push({
    key: 'url',
    label: '视频链接',
    valueType: 'string',
    defaultValue: 'https://static.codemao.cn/coco/player/unstable/SJeKpU539.video/mp4?hash=llC5mgOjC5DQH4q3JFBTphHrUhVE',

})

class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.__width = props.__width;
    this.__height = props.__height;
    this.url=props.url;

  }
  render() {
    return(
      React.createElement("div", {dangerouslySetInnerHTML: {__html: (['<video width=',this.__width,' height=',this.__height,' controls>   <source src=',this.url,' type="video/mp4"> </video>'].join(''))}}, null)
  );

  }
}

exports.types = types;
exports.widget = Widget;
