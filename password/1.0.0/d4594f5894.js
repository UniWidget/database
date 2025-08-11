var a, w, i;



const types = {
    isInvisibleWidget: true,
    type: "password",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "密码安全程度检测",
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
    label: '密码安全检测（ 位数和是否包含字母或字符）',
    params: [
      {
          key: 'paramName',
          label: '密码',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 'sz',
          label: '不少于的位数',
          valueType: 'number',
          defaultValue: "",
      },],
    valueType: 'boolean',
    blockOptions: {
    color: '#ffcc66',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.methodName = function (paramName,sz,) {
      a = paramName.split('');
  w = 0;
  var i_end = a.length;
  var i_inc = 1;
  if (1 > i_end) {
    i_inc = -i_inc;
  }
  for (i = 1;i_inc >= 0 ? i <= i_end : i >= i_end;i += i_inc) {
    if (a[(i - 1)] != 0 && a[(i - 1)] != 1 && a[(i - 1)] != 2 && a[(i - 1)] != 3 && a[(i - 1)] != 4 && a[(i - 1)] != 5 && a[(i - 1)] != 6 && a[(i - 1)] != 7 && a[(i - 1)] != 8 && a[(i - 1)] != 9) {
      w = 1;
    }
  }
  if (paramName.length >= sz && w == 1) {
    return true;} else {
    return false;}

}
exports.types = types;
exports.widget = Widget;
