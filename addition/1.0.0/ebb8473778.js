const types = {
    isInvisibleWidget: true,
    type: "addition",
    icon: "https://cdn.cocotais.cn/project/waddle-2/logo/waddle2-logo.svg",
    title: "计算加法",
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
    key: 'addition',
    label: '计算加法（高级）',
    params: [
      {
          key: 'addend',
          label: '加数',
          valueType: 'number',
          defaultValue: 0,
      },
      {
          key: 'addend2',
          label: '加数2',
          valueType: 'number',
          defaultValue: 0,
      },],
    valueType: 'number',

})
Widget.prototype.addition = function (addend,addend2,) {
      return ((addend * 100) / 100 + (addend2 * 100) / 100);
}
types['methods'].push({
    key: 'addition2',
    label: '计算加法',
    params: [
      {
          key: 'addend3',
          label: '加数',
          valueType: 'number',
          defaultValue: 0,
      },
      {
          key: 'addend4',
          label: '加数2',
          valueType: 'number',
          defaultValue: 0,
      },],
    valueType: 'number',

})
Widget.prototype.addition2 = function (addend3,addend4,) {
      return (addend3 + addend4);
}
exports.types = types;
exports.widget = Widget;
