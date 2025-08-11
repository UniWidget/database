function colourRandom() {
  var num = Math.floor(Math.random() * Math.pow(2, 24));
  return '#' + ('00000' + num.toString(16)).substr(-6);
}



const types = {
    isInvisibleWidget: true,
    type: "MY_codemao",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "随机颜色",
    version: "1.0",
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
    key: 'k',
    label: '颜色',
    params: [],
    valueType: 'color',
})
Widget.prototype.k = function () {
      return (colourRandom());
}
exports.types = types;
exports.widget = Widget;
