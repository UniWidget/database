const types = {
  isInvisibleWidget: false,
  type: "IMG_URL_XIONG_WIDGET",
  icon: "icon-widget-web-view",
  title: "图片超链接",
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
      defaultValue: 150,
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
    key: 'img_url',
    label: '图片链接',
    valueType: 'string',
    defaultValue: 'https://static.codemao.cn/coco/player/unstable/HJ-3HLgOn.image/png?hash=FpoVFQDkBMex1GJzDdOTyxjw2-mu',

})

types['properties'].push({
    key: 'url',
    label: '目标链接',
    valueType: 'string',
    defaultValue: 'https://coco.codemao.cn/editor/',

})

class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.__width = props.__width;
    this.__height = props.__height;
    this.widgetLog('控件作者：天上来的熊孩子（QQ：2639194612）');
  this.img_url=props.img_url;
  this.url=props.url;

  }
  render() {
    return(
      React.createElement("div", {dangerouslySetInnerHTML: {__html: (['<a href=',this.url,'><img border="0" src=',this.img_url,' style="width:100%;height:100%"></img></a>'].join(''))}}, null)
  );

  }
}

exports.types = types;
exports.widget = Widget;
