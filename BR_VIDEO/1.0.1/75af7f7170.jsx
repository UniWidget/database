var these;
/**copyright 2023/1/10 borderRadius ;
 * This code are not supposed to publish in any ways unless get the writer's acceptment;
 * 注意：控件允许编辑，但请在自己作品中使用编辑后
 * 未经允许，严禁编辑后再次发布到coco任何区域！
 */

these = document.getElementById('borderRadiusvideo');

const types = {
  isInvisibleWidget: false,
  type: "BR_VIDEO",
  icon: "data:image/png;base64,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",
  title: "视频积木",
  version: "1.0.1",
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: 300,
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

class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.widgetLog('欢迎使用1.0.1版本，该版本更新了：鼠标事件优化，可以返回参数；默认视频改为《诈骗视频》；')
    console.log('欢迎使用1.0.1版本，该版本更新了：鼠标事件优化，可以返回参数；默认视频改为《诈骗视频》；')
    this.__width = props.__width;
    this.__height = props.__height;
    this.auto=props.auto;
  this.src=props.src;
  this.controls=props.controls;
  this.loop=props.loop;
  this.muted=props.muted;
  this.poster=props.poster;
  this.color=props.color;
  this.radius=props.radius;
  this.filter=props.filter;
  this.deg=props.deg;
  this.second=props.second;
  this.degtwo=props.degtwo;
  this.degthree=props.degthree;
  this.disabled=props.disabled;

  }
  render() {
    return(
      React.createElement("video", {  autoPlay: (this.auto),
      src: (this.src),
      controls: (this.controls),
      loop: (this.loop),
      muted: (this.muted),
      poster: (this.poster),
      disabled: (this.disabled),
      width: "100%",
      height: "100%",
      onPause: this.onpause.bind(this),
      onPlaying: this.onplaying.bind(this),
      onClick: this.onClick.bind(this),
      onMouseOver:this.onMouseOver.bind(this),
      onTimeUpdate: this.ontimeupdate.bind(this),
      onError: this.onerror.bind(this),
      onCanPlay: this.oncanplay.bind(this),
      onBlur: this.onblur.bind(this),
      onWaiting: this.waiting.bind(this),
      id: 'borderRadiusvideo',
      style: {  backgroundColor: (this.color),
        borderRadius: (this.radius),
        filter: (this.filter),
        transform: (['rotate(',String(this.deg) + 'deg) skew(',this.degtwo,'deg,',this.degthree,'deg)'].join('')),
        transitionProperty: 'all',
        transitionDuration: (String(this.second) + 's'),
        transitionTimingFunction: 'ease-in-out',
      },
    }, null)
  );

  }
}

types['properties'].push({
    key: 'auto',
    label: '自动播放',
    valueType: 'boolean',
    defaultValue: true,

})

types['properties'].push({
    key: 'controls',
    label: '显示视频控制台',
    valueType: 'boolean',
    defaultValue: true,

})

types['properties'].push({
    key: 'loop',
    label: '循环',
    valueType: 'boolean',
    defaultValue: false,

})

types['properties'].push({
    key: 'muted',
    label: '播放静音',
    valueType: 'boolean',
    defaultValue: true,

})

types['properties'].push({
  key: 'disabled',
  label: '禁用',
  valueType: 'boolean',
  defaultValue: false,

})

types['properties'].push({
    key: 'src',
    label: '视频源链接',
    valueType: 'string',
    editorType: 'TextArea',
    defaultValue: 'https://vdse.bdstatic.com//192d9a98d782d9c74c96f09db9378d93.mp4?authorization=bce-auth-v1/40f207e648424f47b2e3dfbb1014b1a5/2021-07-12T02:14:24Z/-1/host/530146520a1c89fb727fbbdb8a0e0c98ec69955459aed4b1c8e00839187536c9',

})

types['properties'].push({
    key: 'poster',
    label: '封面图片',
    valueType: 'string',
    editorType: 'TextArea',
    defaultValue: "",

})

types['properties'].push({
    key: 'color',
    label: '超出框内时视频背景颜色',
    valueType: 'color',
    defaultValue: '#cccccc',

})

types['properties'].push({
    key: 'radius',
    label: '圆角',
    valueType: 'number',
    defaultValue: 34,

})

types['properties'].push({
    key: 'deg',
    label: '面向度数',
    valueType: 'number',
    defaultValue: 360,

})

types['properties'].push({
    key: 'degtwo',
    label: '拉伸X轴度数',
    valueType: 'number',
    defaultValue: 0,

})

types['properties'].push({
    key: 'degthree',
    label: '拉伸Y轴度数',
    valueType: 'number',
    defaultValue: 0,

})

types['properties'].push({
    key: 'second',
    label: '动画播放秒数',
    valueType: 'number',
    defaultValue: 0,

})

types['events'].push({
    key: 'onClick',
    label: '被点击',
    params: [{
      key:"videox",
      label:"控件内部X坐标",
      valueType:'number',   
     }
    ,{
      key:"videoy",
      label:"控件内部y坐标",
      valueType: 'number'
    },{
      key:"screenx",
      label:"屏幕X坐标",
      valueType: 'number'
    },{
      key:"screeny",
      label:"屏幕y坐标",
      valueType: 'number'
    }],

})
Widget.prototype.onClick = function (event) {
      this.emit("onClick",event.clientX,event.clientY,event.screenX,event.screenY);
}

types['events'].push({
  key: 'onpause',
  label: '暂停',
  params: [],

})
Widget.prototype.onpause = function (event) {
    this.emit("onpause");
}

types['events'].push({
    key: 'onMouseOver',
    label: '检测到光标移动到控件上',
    params: [{
      key:"videox",
      label:"控件内部X坐标",
      valueType:'number',   
     }
    ,{
      key:"videoy",
      label:"控件内部y坐标",
      valueType: 'number'
    },{
      key:"screenx",
      label:"屏幕X坐标",
      valueType: 'number'
    },{
      key:"screeny",
      label:"屏幕y坐标",
      valueType: 'number'
    }],

})
Widget.prototype.onMouseOver = function (event) {
      this.emit("onMouseOver",event.clientX,event.clientY,event.screenX,event.screenY);
}

types['events'].push({
    key: 'onplaying',
    label: '正在播放',
    params: [],

})
Widget.prototype.onplaying = function (event) {
      this.emit("onplaying");
}

types['events'].push({
    key: 'ontimeupdate',
    label: '快进',
    params: [],

})
Widget.prototype.ontimeupdate = function (event) {
      this.widgetLog('视频被快进');
  this.emit("ontimeupdate");
}

types['events'].push({
    key: 'onerror',
    label: '加载失败',
    params: [],

})
Widget.prototype.onerror = function (event) {
      this.widgetError('AWA~加载失败了！请检查地址是否正确或地址是否有效！');
  this.emit("onerror");
}

types['events'].push({
    key: 'oncanplay',
    label: '可以播放视频',
    params: [],

})
Widget.prototype.oncanplay = function (event) {
      this.emit("oncanplay");
}

types['events'].push({
    key: 'onblur',
    label: '控件失去焦点',
    params: [],

})
Widget.prototype.onblur = function (event) {
      this.emit("onblur");
}

types['events'].push({
    key: 'waiting',
    label: '网络不好而缓冲',
    params: [],

})
Widget.prototype.waiting = function (event) {
      this.emit("waiting");
}

types['methods'].push({
    key: 'Black',
    label: '设置效果为黑白',
    params: [],


})
Widget.prototype.Black = function () {
      this.setProps({ 'filter': 'grayscale(100%)' });

}
types['methods'].push({
    key: 'Invert',
    label: '设置效果为反色',
    params: [],


})
Widget.prototype.Invert = function () {
      this.setProps({ 'filter': 'invert(100%)' });

}
types['methods'].push({
    key: 'SAT',
    label: '设置饱和度',
    params: [
      {
          key: 'Params',
          label: '饱和值',
          valueType: 'number',
          defaultValue: 99,
      },],


})
Widget.prototype.SAT = function (Params,) {
      if (!Params.length) {
    this.widgetWarn('borderRadius提醒您：您在使用该积木时必须设定参数，否则无效！');
  }
  this.setProps({ 'filter': (['saturate(',Params,'%)'].join('')) });

}
types['methods'].push({
    key: 'Reload',
    label: '重新加载视频',
    params: [],


})
Widget.prototype.Reload = function () {
      ((document).getElementById('borderRadiusvideo').load());

}
types['methods'].push({
    key: 'Play',
    label: '播放视频',
    params: [],


})
Widget.prototype.Play = function () {
      ((document).getElementById('borderRadiusvideo').play());

}
types['methods'].push({
    key: 'Pause',
    label: '暂停视频',
    params: [],


})
Widget.prototype.Pause = function () {
      ((document).getElementById('borderRadiusvideo').pause());

}
types['methods'].push({
    key: 'Value',
    label: '跳转到',
    params: [
      {
          key: 'This_second',
          label: '对应秒数',
          valueType: 'number',
          defaultValue: '2',
      },],


})
Widget.prototype.Value = function (This_second,) {
      ((document).getElementById('borderRadiusvideo').currentTime = This_second );

}
types['methods'].push({
    key: 'Speed',
    label: '设置播放速度',
    params: [
      {
          key: 'This_second',
          label: '对应值（负数为倒放）',
          valueType: 'number',
          defaultValue: '1.0',
      },],


})
Widget.prototype.Speed = function (This_second,) {
      ((document).getElementById('borderRadiusvideo').playbackRate= This_second );

}
types['methods'].push({
    key: 'Lengthofvideo',
    label: '读取视频总计时长',
    params: [],
    valueType: 'string',

})
Widget.prototype.Lengthofvideo = function () {
      return ((document).getElementById('borderRadiusvideo').duration);
}

types['methods'].push({
  key: 'volume',
  label: '(0为静音，1为最大)修改音量为',
  params:[{
    key: 'vol',
    label: '你想改动的值',
    valueType: 'string',
    defaultValue: '0.114514'
  }]
})

Widget.prototype.volume = function(vol){
  document.getElementById('borderRadiusvideo').volume = vol;
}

types["methods"].push({
  key: 'current',
  label: '获取当前视频放到哪啦？',
  valueType: 'string',
  params:[]
})

Widget.prototype.currentTime = function(){
  return document.getElementById('borderRadiusvideo').currentTime;
}

types["methods"].push({
  key: 'shot',
  label: '截图（开发中）',
  valueType: 'object',
  params:[],
  blockOptions: {
    color: '#000000',
    generateBlock: true,
    space: 16,
  }
})

Widget.prototype.currentTime = function(){
  return document.getElementById('borderRadiusvideo').captureStream();
}


exports.types = types;
exports.widget = Widget;
