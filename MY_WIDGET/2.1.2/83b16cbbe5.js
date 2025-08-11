var time;

function colourRgb(r, g, b) {
  r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);
  g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);
  b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);
  return '#' + r + g + b;
}



const types = {
    isInvisibleWidget: true,
    type: "MY_WIDGET",
    icon: "https://s1.chu0.com/src/img/png/1b/1b41d95d88ff4d2088620855b1d523d9.png?imageMogr2/auto-orient/thumbnail/!234x234r/gravity/Center/crop/234x234/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:y-ldIyh4KOmQgnsl6iV0wedpUqY=",
    title: "多久前2.1.2",
    version: "2.1.2",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
          this.widgetLog('本控件由明天的太阳QQ（898244138）制作，绝对正版！！！');

    }

}

types['methods'].push({
    key: 'methodName',
    label: '请输入',
    params: [
      {
          key: 'paramName',
          label: '分钟',
          valueType: 'string',
          defaultValue: '请输入现在时间减去发表时间的分钟（数字类型）',
      },],
    valueType: ['string','number','boolean','array','color','object',],
    blockOptions: {
    color: (colourRgb(131, 236, 140)),
    icon: 'https://s1.chu0.com/src/img/png/1b/1b41d95d88ff4d2088620855b1d523d9.png?imageMogr2/auto-orient/thumbnail/!234x234r/gravity/Center/crop/234x234/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:y-ldIyh4KOmQgnsl6iV0wedpUqY=',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.methodName = function (paramName,) {
      time = paramName;
  time = Math.round(time);
  if (time < 525600) {
    if (time < 44640) {
      if (time < 1440) {
        if (time < 60) {
          if (time > 3) {
            return (String(Math.floor(time / 1)) + '分钟前');} else {
            return '刚刚';}
        } else {
          return (String(Math.floor(time / 60)) + '小时前');}
      } else {
        return (String(Math.floor(time / 1440)) + '天前');}
    } else {
      return (String(Math.floor(time / 44640)) + '个月前');}
  } else {
    return (String(Math.floor(time / 525600)) + '年前');}

}
exports.types = types;
exports.widget = Widget;
