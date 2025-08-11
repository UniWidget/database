const types = {
    isInvisibleWidget: true,
    type: "length",
    icon: "https://waddle.coco-central.cn/static/img/logo.svg",
    title: "正确获取emoji长度",
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
    key: 'ArrayFrom_',
    label: '使用Array.from获取',
    params: [
      {
          key: 'text1',
          label: '文本',
          valueType: 'string',
          defaultValue: '😭😄🙅‍♀️🉐',
      },],
    valueType: 'number',
})
Widget.prototype.ArrayFrom_ = function (text1,) {
      return (Array.from(text1).length);
}
types['methods'].push({
    key: 'JGYSF_',
    label: '使用解构运算符获取',
    params: [
      {
          key: 'text2',
          label: '文本',
          valueType: 'string',
          defaultValue: '😭😄🙅‍♀️🉐',
      },],
    valueType: 'number',
})
Widget.prototype.JGYSF_ = function (text2,) {
      return ([...text1].length);
}
exports.types = types;
exports.widget = Widget;
