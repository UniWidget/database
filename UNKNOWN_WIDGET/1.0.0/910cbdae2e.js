function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}
var Lv = mathRandomInt(100, 2222);
const types = {
    isInvisibleWidget: true,
    type: "W"+mathRandomInt(0, 999),
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "Lv."+Lv,
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
for (var count = 0;count < Lv+1;count++) {
  types['methods'].push({
      key: 'say_'+count,
      label: 'Lv.'+count,
      params: [],
  })
  Widget.prototype.say_ = function () {
        console.log(i);

  }}

exports.types = types;
exports.widget = Widget;
