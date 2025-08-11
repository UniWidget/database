function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}



const types = {
    isInvisibleWidget: true,
    type: "HAOZI_RANDOM_WIDGET",
    icon: "",
    title: "更随机的随机整数",
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
    key: 'sjs',
    label: '取更随机的随机整数',
    params: [
      {
          key: 'min',
          label: '从',
          valueType: 'number',
          defaultValue: 0,
      },
      {
          key: 'max',
          label: '到',
          valueType: 'number',
          defaultValue: 114514,
      },],
    valueType: 'number',

})
Widget.prototype.sjs = function (min,max,) {
      return (mathRandomInt(min, max));
}
exports.types = types;
exports.widget = Widget;