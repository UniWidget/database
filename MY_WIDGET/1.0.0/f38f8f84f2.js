const types = {
    isInvisibleWidget: true,
    type: "MY_WIDGET",
    icon: "https://public.coco-central.cn/waddle/2/waddle2.svg",
    title: "符合程度检测",
    version: "1.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);

    }

}

types['methods'].push({
    key: 'methodName',
    label: '内容1和内容2符合程度',
    params: [
      {
          key: 'a',
          label: '内容1',
          valueType: 'string',
          defaultValue: '',
      },
      {
          key: 'b',
          label: '内容2',
          valueType: 'string',
          defaultValue: '',
      },],

    blockOptions: {
    color: '#cc9933',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.methodName = function (a,b,) {
      e = 0;
  var i_end = a.length;
  var i_inc = 1;
  if (0 > i_end) {
    i_inc = -i_inc;
  }
  for (i = 0; i_inc >= 0 ? i <= i_end : i >= i_end; i += i_inc) {
    if (i == 0) {
      continue;
    }
    if (b.indexOf(a.charAt((i - 1))) + 1 != 0) {
      e = (typeof e === 'number' ? e : 0) + 1;
    }
  }
  return e;
}
exports.types = types;
exports.widget = Widget;

