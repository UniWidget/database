const types = {
  isInvisibleWidget: false,
  type: "VIDEO_TIAN_WIDGET",
  icon: "https://static.codemao.cn/coco/player/unstable/S11dbB0Bj.image/svg+xml?hash=FgVO8nMZUT1n-2WjionBiUZSZcml",
  title: "媒体播放器",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: 350,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: '__height',
      label: '高度',
      valueType: 'number',
      defaultValue: 240,
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
    label: '媒体链接',
    valueType: 'string',
    defaultValue: 'https://static.codemao.cn/coco/player/unstable/SJwgzBRrs.video/mp4?hash=FskLRKlu0IDBpsjOiIikClqqp-fK',

})

types['properties'].push({
    key: 'autoPlay',
    label: '自动播放',
    valueType: 'boolean',
    defaultValue: false,

})

class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.__width = props.__width;
    this.__height = props.__height;
    this.autoPlay=props.autoPlay;
  this.url=props.url;
  this.widgetLog('控件作者：天上来的熊孩子（QQ：2639194612）');

  }
  render() {
    return(
      React.createElement("div", {  height: "100%",
      width: "100%",
    dangerouslySetInnerHTML: {__html: (['<video  autoPlay=',(this.autoPlay) ? 'autoPlay' : ' ','controls>   <source ',' src=',this.url,'> </video>'].join(''))}}, null)
  );

  }
}

exports.types = types;
exports.widget = Widget;