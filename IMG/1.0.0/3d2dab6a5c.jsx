function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}

function colourRandom() {
  var num = Math.floor(Math.random() * Math.pow(2, 24));
  return '#' + ('00000' + num.toString(16)).substr(-6);
}



const types = {
  isInvisibleWidget: false,
  type: "IMG",
  icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
  title: "Lightroom控件（doge）",
  version: "1.0.0",
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

class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.__width = props.__width;
    this.__height = props.__height;
    this.img=props.img;
  this.filter=props.filter;
  this.color=props.color;
  this.bd=props.bd;
  this.tra=props.tra;
  this.trs=props.trs;

  }
  render() {
    return(
      React.createElement("img", {  src: (this.img),
      height: "100%",
      width: "100%",
      alt: '无图像',
      onClick: this.onClick.bind(this),
      style: {  filter: (this.filter),
        backgroundColor: (this.color),
        transition: (this.tra),
        transform: (this.trs),
        clip: (this.clip),
      },
    }, null)
  );

  }
}

types['properties'].push({
    key: 'img',
    label: '图像',
    valueType: 'string',
    editorType: 'TextArea',
    defaultValue: 'https://cdn-community.codemao.cn/community_frontend/asset/banner_1366_85f02.png',

})

types['properties'].push({
    key: 'color',
    label: '透明背景渲染颜色',
    valueType: 'color',
    defaultValue: '#999999',

})

types['events'].push({
    key: 'onClick',
    label: '被点击',
    params: [],

})
Widget.prototype.onClick = function (event) {
      this.emit("onClick");
}

types['methods'].push({
    key: 'BANDW',
    label: '设置图像滤镜为黑白',
    params: [
      {
          key: 'BRIGHT',
          label: '黑白值',
          valueType: 'number',
          defaultValue: 100,
      },],

    blockOptions: {
    color: '#666666',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.BANDW = function (BRIGHT,) {
      this.setProps({ 'filter': ('grayscale' + String('(' + String(String(BRIGHT) + '%)'))) });

}
types['methods'].push({
    key: 'BLUR',
    label: '图像模糊处理',
    params: [
      {
          key: 'BLUR',
          label: '模糊值',
          valueType: 'number',
          defaultValue: 15,
      },],

    blockOptions: {
    color: '#990000',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.BLUR = function (BLUR,) {
      this.setProps({ 'filter': ('blur' + String('(' + String(String(BLUR) + 'px)'))) });

}
types['methods'].push({
    key: 'BR',
    label: '图像亮度处理',
    params: [
      {
          key: 'BRIGHT',
          label: '亮值',
          valueType: 'number',
          defaultValue: 100,
      },],

    blockOptions: {
    color: '#666666',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.BR = function (BRIGHT,) {
      this.setProps({ 'filter': ('brightness' + String('(' + String(String(BRIGHT) + '%)'))) });

}
types['methods'].push({
    key: 'contrast',
    label: '图像对比度处理',
    params: [
      {
          key: 'contrast',
          label: '对比度',
          valueType: 'number',
          defaultValue: 100,
      },],

    blockOptions: {
    color: '#ffcc99',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.contrast = function (contrast,) {
      this.setProps({ 'filter': ('contrast(' + String(String(contrast) + '%)')) });

}
types['methods'].push({
    key: 'saturate',
    label: '图像饱和度处理',
    params: [
      {
          key: 'saturate',
          label: '值（允许大于100）',
          valueType: 'number',
          defaultValue: 100,
      },],

    blockOptions: {
    color: '#ff6600',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.saturate = function (saturate,) {
      this.setProps({ 'filter': ('saturate(' + String(String(saturate) + '%)')) });

}
types['methods'].push({
    key: 'invert',
    label: '图像颜色反转度处理',
    params: [
      {
          key: 'invert',
          label: '反转程度（最大100）',
          valueType: 'number',
          defaultValue: 100,
      },],

    blockOptions: {
    color: '#ff6600',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.invert = function (invert,) {
      this.setProps({ 'filter': ('invert(' + String(String(invert) + '%)')) });

}
types['methods'].push({
    key: 'sepia',
    label: '图像颜色偏棕褐色度处理',
    params: [
      {
          key: 'sepia',
          label: '值',
          valueType: 'number',
          defaultValue: 100,
      },],

    blockOptions: {
    color: '#993300',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.sepia = function (sepia,) {
      this.setProps({ 'filter': ('sepia(' + String(String(sepia) + '%)')) });

}
types['methods'].push({
    key: 'huerotate',
    label: '颜色变换处理',
    params: [
      {
          key: 'huerotate',
          label: '值（最大360）',
          valueType: 'number',
          defaultValue: 100,
      },],

    blockOptions: {
    color: '#33ff33',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.huerotate = function (huerotate,) {
      this.setProps({ 'filter': ('hue-rotate(' + String(String(huerotate) + 'deg)')) });

}
types['methods'].push({
    key: 'multifilter',
    label: '将图像多个滤镜设定为',
    params: [
      {
          key: 'OBJ',
          label: '内容',
          valueType: 'string',
          defaultValue: "",
      },],


})
Widget.prototype.multifilter = function (OBJ,) {
      this.setProps({ 'filter': OBJ });

}
types['methods'].push({
    key: 'PROP',
    label: '拼接滤镜属性',
    params: [
      {
          key: 'oneday',
          label: '',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: "",
      },
      {
          key: 'twoday',
          label: '和',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: "",
      },],
    valueType: ['string','number','boolean','array','color','object',],

})
Widget.prototype.PROP = function (oneday,twoday,) {
      return (String(oneday) + String(' ' + String(twoday)));
}
types['methods'].push({
    key: 'GRA',
    label: '黑白值',
    params: [
      {
          key: 'BRIGHT',
          label: '为',
          valueType: 'string',
          defaultValue: "",
      },],
    valueType: ['string','number','boolean','array','color','object',],

})
Widget.prototype.GRA = function (BRIGHT,) {
      return ('grayscale' + String('(' + String(String(BRIGHT) + '%)')));
}
types['methods'].push({
    key: 'BLURR323',
    label: '模糊',
    params: [
      {
          key: 'BRIGHT',
          label: '为',
          valueType: 'string',
          defaultValue: "",
      },],
    valueType: ['string','number','boolean','array','color','object',],

})
Widget.prototype.BLURR323 = function (BRIGHT,) {
      return ('blur' + String('(' + String(String(BRIGHT) + 'px)')));
}
types['methods'].push({
    key: 'brightness32323',
    label: '亮度',
    params: [
      {
          key: 'BRIGHT',
          label: '为',
          valueType: 'string',
          defaultValue: "",
      },],
    valueType: ['string','number','boolean','array','color','object',],

})
Widget.prototype.brightness32323 = function (BRIGHT,) {
      return ('brightness' + String('(' + String(String(BRIGHT) + '%)')));
}
types['methods'].push({
    key: 'contrast3232',
    label: '对比度',
    params: [
      {
          key: 'BRIGHT',
          label: '为',
          valueType: 'string',
          defaultValue: "",
      },],
    valueType: ['string','number','boolean','array','color','object',],

})
Widget.prototype.contrast3232 = function (BRIGHT,) {
      return ('contrast' + String('(' + String(String(BRIGHT) + '%)')));
}
types['methods'].push({
    key: 'huerotate2324',
    label: '颜色值转换',
    params: [
      {
          key: 'BRIGHT',
          label: '为',
          valueType: 'string',
          defaultValue: "",
      },],
    valueType: ['string','number','boolean','array','color','object',],

})
Widget.prototype.huerotate2324 = function (BRIGHT,) {
      return ('hue-rotate' + String('(' + String(String(BRIGHT) + 'deg)')));
}
types['methods'].push({
    key: 'invert22',
    label: '颜色翻转',
    params: [
      {
          key: 'BRIGHT',
          label: '为',
          valueType: 'string',
          defaultValue: "",
      },],
    valueType: ['string','number','boolean','array','color','object',],

})
Widget.prototype.invert22 = function (BRIGHT,) {
      return ('invert' + String('(' + String(String(BRIGHT) + '%)')));
}
types['methods'].push({
    key: 'saturate32323',
    label: '饱和度',
    params: [
      {
          key: 'saturate',
          label: '为',
          valueType: 'string',
          defaultValue: "",
      },],
    valueType: ['string','number','boolean','array','color','object',],

})
Widget.prototype.saturate32323 = function (saturate,) {
      return ('saturate' + String('(' + String(String(saturate) + '%)')));
}
types['methods'].push({
    key: 'anm',
    label: '设置渐变动画',
    params: [
      {
          key: 'ANM',
          label: '是否开启',
          valueType: 'boolean',
          defaultValue: "",
      },],


})
Widget.prototype.anm = function (ANM,) {
      if (ANM) {
    this.setProps({ 'tra': 'all 1.6s ease-in-out 0.1s' });
  } else {
    this.setProps({ 'tra': 'all 0 ease 0' });
  }

}
types['methods'].push({
    key: 'ROTATE',
    label: '图像旋转（顺时针）',
    params: [
      {
          key: 'RO',
          label: '度数',
          valueType: 'string',
          defaultValue: "",
      },],


})
Widget.prototype.ROTATE = function (RO,) {
      this.setProps({ 'trs': ('rotate(' + String(String(RO) + 'deg)')) });

}
types['methods'].push({
    key: 'XR',
    label: '沿X轴倾斜',
    params: [
      {
          key: 'RO',
          label: '度数',
          valueType: 'string',
          defaultValue: "",
      },],


})
Widget.prototype.XR = function (RO,) {
      this.setProps({ 'trs': ('skewX(' + String(String(RO) + 'deg)')) });

}
types['methods'].push({
    key: 'YR',
    label: '沿Y轴倾斜',
    params: [
      {
          key: 'RO',
          label: '度数',
          valueType: 'string',
          defaultValue: "",
      },],


})
Widget.prototype.YR = function (RO,) {
      this.setProps({ 'trs': ('skewY(' + String(String(RO) + 'deg)')) });

}
types['methods'].push({
    key: 'XXR',
    label: '沿X轴旋转',
    params: [
      {
          key: 'RO',
          label: '度数',
          valueType: 'string',
          defaultValue: "",
      },],


})
Widget.prototype.XXR = function (RO,) {
      this.setProps({ 'trs': ('rotateX(' + String(String(RO) + 'deg)')) });

}
types['methods'].push({
    key: 'YYR',
    label: '沿Y轴旋转',
    params: [
      {
          key: 'RO',
          label: '度数',
          valueType: 'string',
          defaultValue: "",
      },],


})
Widget.prototype.YYR = function (RO,) {
      this.setProps({ 'trs': ('rotateY(' + String(String(RO) + 'deg)')) });

}
types['methods'].push({
    key: 'ZZR',
    label: '沿Z轴旋转',
    params: [
      {
          key: 'RO',
          label: '度数',
          valueType: 'string',
          defaultValue: "",
      },],


})
Widget.prototype.ZZR = function (RO,) {
      this.setProps({ 'trs': ('rotateZ(' + String(String(RO) + 'deg)')) });

}
types['methods'].push({
    key: 'SHAN',
    label: '进行闪烁',
    params: [],


})
Widget.prototype.SHAN = function () {
      setTimeout(((()=>{  this.setProps({ 'filter': ('hue-rotate(' + String(String(mathRandomInt(1, 360)) + 'deg)')) });
    this.setProps({ 'color': (colourRandom()) });
  })),100);
  setTimeout(((()=>{  this.setProps({ 'filter': ('hue-rotate(' + String(String(mathRandomInt(1, 360)) + 'deg)')) });
    this.setProps({ 'color': (colourRandom()) });
  })),200);
  setTimeout(((()=>{  this.setProps({ 'filter': ('hue-rotate(' + String(String(mathRandomInt(1, 360)) + 'deg)')) });
    this.setProps({ 'color': (colourRandom()) });
  })),300);
  setTimeout(((()=>{  this.setProps({ 'filter': ('hue-rotate(' + String(String(mathRandomInt(1, 360)) + 'deg)')) });
    this.setProps({ 'color': (colourRandom()) });
  })),400);
  setTimeout(((()=>{  this.setProps({ 'filter': ('hue-rotate(' + String(String(mathRandomInt(1, 360)) + 'deg)')) });
    this.setProps({ 'color': (colourRandom()) });
  })),500);

}
exports.types = types;
exports.widget = Widget;
