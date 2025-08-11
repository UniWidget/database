var text, c, g, _E8_AF_8D, jc, _E6_96_87_E6_9C_AC, z, y, i, _E6_96_87_E6_9C_AC1;

function colourRgb(r, g, b) {
  r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);
  g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);
  b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);
  return '#' + r + g + b;
}



const types = {
    isInvisibleWidget: true,
    type: "cyjkj Pro",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "字符替换",
    version: "3.0.0",
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

types['events'].push({
    key: 'eventName',
    label: '替换成功',
    params: [
      {
          key: 'jg',
          label: '结果',
          valueType: 'string',
      },
      {
          key: 'bc',
          label: '报错',
          valueType: 'number',
      },],
    blockOptions: {
    color: (colourRgb(131, 236, 140)),
    icon: 'https://s1.chu0.com/src/img/png/26/26119ecb6e24425ba281edddadae30f6.png?imageMogr2/auto-orient/thumbnail/!234x234r/gravity/Center/crop/234x234/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:jLk-vI7Es6kUULXaJd-xrYXk5LU=',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})

types['methods'].push({
    key: 'methodName',
    label: '请输入',
    params: [
      {
          key: 'text',
          label: '文本',
          valueType: 'multilineString',
      checkType: 'string',
          defaultValue: '请输入要修改的文本',
      },
      {
          key: 'c',
          label: '全部屏蔽词',
          valueType: 'multilineString',
      checkType: 'string',
          defaultValue: '请输入屏蔽词',
      },
      {
          key: 'g',
          label: '都替换为',
          valueType: 'multilineString',
      checkType: 'string',
          defaultValue: '喵',
      },],
    valueType: ['string','number','boolean','array','color','object',],
    blockOptions: {
    color: (colourRgb(131, 236, 140)),
    icon: 'https://s1.aigei.com/src/img/png/92/92819146d21744c7b27624e43425c3fb.png?imageMogr2/auto-orient/thumbnail/!234x234r/gravity/Center/crop/234x234/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:7v1PtdqgLB8esXJwnVnPk9c_Ugc=',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.methodName = function (text,c,g,) {
      text = text;
  c = c;
  g = g;
  _E8_AF_8D = [];
  _E8_AF_8D = c;
  jc = [];
  _E6_96_87_E6_9C_AC = [];
  _E6_96_87_E6_9C_AC = text;
  if (c == g) {
    this.widgetError('屏蔽词不能与修改屏蔽词的词语相同！！！');
    this.emit("eventName"  , '屏蔽词不能与修改屏蔽词的词语相同！！！', 1);} else {
    z = 1;
    var repeat_end3 = text.length;
    for (var count3 = 0;count3 < repeat_end3;count3++) {
      if (text.charAt((z - 1)) == c.charAt(0)) {
        y = z + 1;
        i = 1;
        if (c.length != 1) {
          var repeat_end = c.length - 1;
          for (var count = 0;count < repeat_end;count++) {
            if (text.charAt((y - 1)) == c.charAt(((i + 1) - 1))) {
              i = (typeof i === 'number' ? i : 0) + 1;
            }
            y = (typeof y === 'number' ? y : 0) + 1;
          }
        }
        _E6_96_87_E6_9C_AC1 = '';
        if (i == c.length) {
          y = 1;
          while (!(y == z)) {
            _E6_96_87_E6_9C_AC1 = String(_E6_96_87_E6_9C_AC1) + String(_E6_96_87_E6_9C_AC[(y - 1)]);
            y = (typeof y === 'number' ? y : 0) + 1;
          }
          var repeat_end2 = c.length;
          for (var count2 = 0;count2 < repeat_end2;count2++) {
            _E6_96_87_E6_9C_AC1 = String(_E6_96_87_E6_9C_AC1) + String(g);
            y = (typeof y === 'number' ? y : 0) + 1;
          }
          while (!(y == text.length + 1)) {
            _E6_96_87_E6_9C_AC1 = String(_E6_96_87_E6_9C_AC1) + String(_E6_96_87_E6_9C_AC[(y - 1)]);
            y = (typeof y === 'number' ? y : 0) + 1;
          }
          _E6_96_87_E6_9C_AC = _E6_96_87_E6_9C_AC1;
        }
      }
      z = (typeof z === 'number' ? z : 0) + 1;
    }
    this.emit("eventName"  , _E6_96_87_E6_9C_AC, 0);this.widgetLog('本控件由明天的太阳QQ（898244138）制作，绝对正版！！！');
    return _E6_96_87_E6_9C_AC;}

}
exports.types = types;
exports.widget = Widget;
