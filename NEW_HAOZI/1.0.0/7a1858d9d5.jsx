const types = {
  isInvisibleWidget: false,
  type: "NEW_HAOZI",
  icon: "https://ocean.codemao.cn/appcraft/resource/icon/%E5%9F%BA%E7%A1%80/%E4%BA%91%E7%AB%AF%E4%B8%8B%E8%BD%BD.svg",
  title: "自动更新",
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
      defaultValue: 100,
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

class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.__width = props.__width;
    this.__height = props.__height;
    this.html=props.html;
  // 初始渲染值
  this.html = '<center><p><h2>你好,欢迎使用作品自动更新控件1.0.0<h2></p><p><h3>©耗子 2022 精心制作</h3></p><h3>注：</br>1.本段文字配置完成后运行时将自动隐藏</br>2.使用前须前往配置端配置更新序列号</br>3.版本号必须为3位形，例如：2.1.5</br>4.打包后将链接填入，须至少运行一次发布后的作品</br><a href="https://appcraft.codemao.cn/player/159028300?channel=h5" target="_Blank"><button>点击此按钮前往配置自动更新</button></a></h3></center>';

  }
  render() {
    return(
      React.createElement("div", {dangerouslySetInnerHTML: {__html: (this.html)}}, null)
  );

  }
}

types['methods'].push({
    key: 'information',
    label: '配置作品信息',
    params: [
      {
          key: 'id',
          label: '标识序列号',
          valueType: 'string',
          defaultValue: '请前往配置端获取',
      },
      {
          key: 'banben',
          label: '当前版本',
          valueType: 'string',
          defaultValue: '1.0.0',
      },
      {
          key: 'url',
          label: '当前版本安装包链接',
          valueType: 'string',
          defaultValue: 'https://',
      },],

    blockOptions: {
    color: '#c0c0c0',
    icon: '无',
    generateBlock: true,
    inputsInline: false,
    space: 16,
},
})
Widget.prototype.information = function (id,banben,url,) {
      this.sid = id;
  this.sbanben = banben;
  this.surl = url;
  this.setProps({ 'html': '' });

}
types['methods'].push({
    key: 'ethods',
    label: '进行检查并更新',
    params: [],

    blockOptions: {
    color: '#c0c0c0',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.ethods = function () {
      this.setProps({ 'html': (['<iframe id="new"width="1"height="1"src="','https://appcraft.codemao.cn/player/159028300?channel=h5&id=',this.sid,'&banben=',this.sbanben,'&url=',this.surl,'"> </iframe>'].join('')) });

}
exports.types = types;
exports.widget = Widget;
