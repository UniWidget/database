var _E7_AC_A6_E5_90_88_E7_A8_8B_E5_BA_A6, i;



const types = {
    isInvisibleWidget: true,
    type: "MY_WIDGET",
    icon: "https://public.coco-central.cn/waddle/2/waddle2.svg",
    title: "我的控件",
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
    label: '方法1',
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


})
Widget.prototype.methodName = function (a,b,) {
      _E7_AC_A6_E5_90_88_E7_A8_8B_E5_BA_A6 = 0;
  var i_end = a.length;
  var i_inc = 1;
  if (0 > i_end) {
    i_inc = -i_inc;
  }
  for (i = 0; i_inc >= 0 ? i <= i_end : i >= i_end; i += i_inc) {
    if (i == 0) {
      continue;
    }
    if (a.indexOf(b.charAt((i - 1))) + 1 != 0) {
      i = (typeof i === 'number' ? i : 0) + 1;
    }
  }
  return _E7_AC_A6_E5_90_88_E7_A8_8B_E5_BA_A6;
}
exports.types = types;
exports.widget = Widget;