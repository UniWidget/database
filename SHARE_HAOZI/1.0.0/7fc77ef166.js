var document = this.document;
var window = this.window;
var navigator = this.navigator;
var history = this.history;
const types = {
    isInvisibleWidget: true,
    type: "SHARE_HAOZI",
    icon: "https://ocean.codemao.cn/appcraft/resource/icon/社交/分享.svg",
    title: "分享到第三方平台",
    version: "1.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
          this.widgetLog('©耗子 2023 制作分享控件');
  this.widgetWarn('第一次使用该控件请一定要看完：');
  this.widgetWarn('使用该控件须允许页面弹出新窗口');
  this.widgetWarn('由于一些浏览器的问题（如Edge)，有时“分享到QQ空间”的css会被吞掉，需要自行到浏览器中设置，建议使用谷歌浏览器或手机浏览器');
  this.widgetLog('©耗子 2023 制作分享控件');
  console.log('©耗子 2023 制作分享控件');
  console.error('第一次使用该控件请一定要看完：');
  console.warn('使用该控件须允许页面弹出新窗口');
  console.warn('由于一些浏览器的问题（如Edge)，有时“分享到QQ空间”的css会被吞掉，需要自行到浏览器中设置，建议使用谷歌浏览器或手机浏览器');
  console.log('©耗子 2023 制作分享控件');

    }

}

types['methods'].push({
    key: 'QQ',
    label: '分享到QQ',
    params: [
      {
          key: 'QTITLE',
          label: '标题（可空）',
          valueType: 'string',
          defaultValue: 'CoCo-让世界没有难做的APP',
      },
      {
          key: 'QURL',
          label: '链接（必填）',
          valueType: 'string',
          defaultValue: 'https://coco.codemao.cn/',
      },
      {
          key: 'QWORD',
          label: '内容（可空）',
          valueType: 'string',
          defaultValue: '©耗子 2023 制作分享控件',
      },
      {
          key: 'QPHOTO',
          label: '图片URL（可空）',
          valueType: 'string',
          defaultValue: 'https://cdn-community.codemao.cn/47/community/d2ViXzEwMDFfMzkxNjY2N18zOTE2NjY3XzE2NDAwODk0MjE5OTVfYjZmNmEzMDk.jpeg',
      },],

    blockOptions: {
    color: '#6600cc',
    icon: 'https://ocean.codemao.cn/appcraft/resource/icon/社交/QQ.svg',
    generateBlock: true,
    inputsInline: false,
    space: 16,
},
})
Widget.prototype.QQ = function (QTITLE,QURL,QWORD,QPHOTO,) {
      window.open("https://connect.qq.com/widget/shareqq/index.html?url="+QURL+"&sharesource=qzone&title="+QTITLE+"&pics="+QPHOTO+"&summary="+QWORD);
}
types['methods'].push({
    key: 'QZ',
    label: '分享到QQ空间',
    params: [
      {
          key: 'QZTITLE',
          label: '标题（必填）',
          valueType: 'string',
          defaultValue: 'CoCo-让世界没有难做的APP',
      },
      {
          key: 'QZURL',
          label: '链接（必填）',
          valueType: 'string',
          defaultValue: 'https://coco.codemao.cn/',
      },
      {
          key: 'QZWORD',
          label: '内容摘要（可空）',
          valueType: 'string',
          defaultValue: '©耗子 2023 制作分享控件',
      },
      {
          key: 'QZPHOTO',
          label: '图片URL（可空）',
          valueType: 'string',
          defaultValue: 'https://cdn-community.codemao.cn/47/community/d2ViXzEwMDFfMzkxNjY2N18zOTE2NjY3XzE2NDAwODk0MjE5OTVfYjZmNmEzMDk.jpeg',
      },],

    blockOptions: {
    color: '#6600cc',
    icon: 'https://creation.codemao.cn/716/appcraft/IMAGE_3UAjnPFth_1648170224437.png',
    generateBlock: true,
    inputsInline: false,
    space: 16,
},
})
Widget.prototype.QZ = function (QZTITLE,QZURL,QZWORD,QZPHOTO,) {
      window.open("https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?title="+QZTITLE+"&url="+QZURL+"&summary="+QZWORD+"&pics="+QZPHOTO);
}
types['methods'].push({
    key: 'WB',
    label: '分享到新浪微博',
    params: [
      {
          key: 'WBTITLE',
          label: '标题（可空）',
          valueType: 'string',
          defaultValue: 'CoCo-让世界没有难做的APP',
      },
      {
          key: 'WBURL',
          label: '链接（可空）',
          valueType: 'string',
          defaultValue: 'https://coco.codemao.cn/',
      },
      {
          key: 'WBPHOTO',
          label: '图片URL（可空）',
          valueType: 'string',
          defaultValue: 'https://cdn-community.codemao.cn/47/community/d2ViXzEwMDFfMzkxNjY2N18zOTE2NjY3XzE2NDAwODk0MjE5OTVfYjZmNmEzMDk.jpeg',
      },],

    blockOptions: {
    color: '#6600cc',
    icon: 'https://ocean.codemao.cn/appcraft/resource/icon/社交/微博.svg',
    generateBlock: true,
    inputsInline: false,
    space: 16,
},
})
Widget.prototype.WB = function (WBTITLE,WBURL,WBPHOTO,) {
      window.open("https://service.weibo.com/share/share.php?url="+WBURL+"&sharesource=weibo&title="+WBTITLE+"&pics="+WBPHOTO);
}
types['methods'].push({
    key: 'DB',
    label: '分享到豆瓣',
    params: [
      {
          key: 'DBTITLE',
          label: '标题',
          valueType: 'string',
          defaultValue: 'CoCo-让世界没有难做的APP',
      },
      {
          key: 'DBURL',
          label: '链接',
          valueType: 'string',
          defaultValue: 'https://coco.codemao.cn/',
      },
      {
          key: 'DBWORD',
          label: '内容',
          valueType: 'string',
          defaultValue: '©耗子 2023 制作分享控件',
      },
      {
          key: 'DBPHOTO',
          label: '图片URL',
          valueType: 'string',
          defaultValue: 'https://cdn-community.codemao.cn/47/community/d2ViXzEwMDFfMzkxNjY2N18zOTE2NjY3XzE2NDAwODk0MjE5OTVfYjZmNmEzMDk.jpeg',
      },],

    blockOptions: {
    color: '#6600cc',
    icon: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.xxxQHY-ihd956fXeAZ1MxAAAAA?w=170&h=180&c=7&r=0&o=5&dpr=3&pid=1.7',
    generateBlock: true,
    inputsInline: false,
    space: 60,
},
})
Widget.prototype.DB = function (DBTITLE,DBURL,DBWORD,DBPHOTO,) {
      window.open("http://shuo.douban.com/!service/share?image="+DBPHOTO+"&href="+DBURL+"&name="+DBTITLE+"&text="+DBWORD);
}
types['methods'].push({
    key: 'T',
    label: '分享到Twitter',
    params: [
      {
          key: 'TTITLE',
          label: '标题',
          valueType: 'string',
          defaultValue: 'CoCo-让世界没有难做的APP',
      },
      {
          key: 'TURL',
          label: '链接',
          valueType: 'string',
          defaultValue: 'https://coco.codemao.cn/',
      },],

    blockOptions: {
    color: '#339999',
    icon: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.abHddQnqMk0gaQbWVKLQUAHaFo?w=249&h=190&c=7&r=0&o=5&dpr=3&pid=1.7',
    generateBlock: true,
    inputsInline: false,
    space: 16,
},
})
Widget.prototype.T = function (TTITLE,TURL,) {
      window.open("https://twitter.com/share?text="+TTITLE+"&url="+TURL);
}
types['methods'].push({
    key: 'F',
    label: '分享到Facebook',
    params: [
      {
          key: 'FTITLE',
          label: '标题',
          valueType: 'string',
          defaultValue: 'CoCo-让世界没有难做的APP',
      },
      {
          key: 'FURL',
          label: '链接',
          valueType: 'string',
          defaultValue: 'https://coco.codemao.cn/',
      },],

    blockOptions: {
    color: '#339999',
    icon: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.DL1JzciyLhRv2NVK4Ts2bAHaHa?w=148&h=180&c=7&r=0&o=5&dpr=3&pid=1.7',
    generateBlock: true,
    inputsInline: false,
    space: 60,
},
})
Widget.prototype.F = function (FTITLE,FURL,) {
      window.open("https://www.facebook.com/sharer.php?title="+FTITLE+"&u="+FURL);
}
types['methods'].push({
    key: 'URGGET',
    label: '获取当前页面完整链接',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: '#ff9966',
    icon: 'https://ocean.codemao.cn/appcraft/resource/icon/基础/链接.svg',
    generateBlock: true,
    inputsInline: true,
    space: 60,
},
})
Widget.prototype.URGGET = function () {
      return (window.location.href);
}
types['methods'].push({
    key: 'QP',
    label: 'QQ图标',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: '#33ccff',
    icon: 'https://ocean.codemao.cn/appcraft/resource/icon/媒体/图片.svg',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.QP = function () {
      return 'https://ocean.codemao.cn/appcraft/resource/icon/媒体/图片.svg';
}
types['methods'].push({
    key: 'ZP',
    label: 'QQ空间图标',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: '#33ccff',
    icon: 'https://ocean.codemao.cn/appcraft/resource/icon/媒体/图片.svg',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.ZP = function () {
      return 'https://creation.codemao.cn/716/appcraft/IMAGE_3UAjnPFth_1648170224437.png';
}
types['methods'].push({
    key: 'WP',
    label: '微博图标',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: '#33ccff',
    icon: 'https://ocean.codemao.cn/appcraft/resource/icon/媒体/图片.svg',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.WP = function () {
      return 'https://ocean.codemao.cn/appcraft/resource/icon/社交/微博.svg';
}
types['methods'].push({
    key: 'DP',
    label: '豆瓣图标',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: '#33ccff',
    icon: 'https://ocean.codemao.cn/appcraft/resource/icon/媒体/图片.svg',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.DP = function () {
      return 'https://tse4-mm.cn.bing.net/th/id/OIP-C.xxxQHY-ihd956fXeAZ1MxAAAAA?w=170&h=180&c=7&r=0&o=5&dpr=3&pid=1.7';
}
types['methods'].push({
    key: 'TP',
    label: 'Twitter图标',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: '#33ccff',
    icon: 'https://ocean.codemao.cn/appcraft/resource/icon/媒体/图片.svg',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.TP = function () {
      return 'https://tse4-mm.cn.bing.net/th/id/OIP-C.abHddQnqMk0gaQbWVKLQUAHaFo?w=249&h=190&c=7&r=0&o=5&dpr=3&pid=1.7';
}
types['methods'].push({
    key: 'FP',
    label: 'Facebook图标',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: '#33ccff',
    icon: 'https://ocean.codemao.cn/appcraft/resource/icon/媒体/图片.svg',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.FP = function () {
      return 'https://tse4-mm.cn.bing.net/th/id/OIP-C.DL1JzciyLhRv2NVK4Ts2bAHaHa?w=148&h=180&c=7&r=0&o=5&dpr=3&pid=1.7';
}
exports.types = types;
exports.widget = Widget;
