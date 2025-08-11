const types = {
    isInvisibleWidget: true,
    type: "solve_CORS",
    icon: "https://public.coco-central.cn/waddle/2/waddle2.svg",
    title: "快速解决跨域问题",
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
    key: 'solveCORS',
    label: '',
    params: [
      {
          key: 'URL',
          label: '网址',
          valueType: 'string',
          defaultValue: "",
      },],
    valueType: 'string',

})
Widget.prototype.solveCORS = function (URL,) {
      if (URL.startsWith('http://')) {
    return (URL.replace('http://','https://coco.codemao.cn/http-widget-proxy/http@SEP@'));} else if (URL.startsWith('https://')) {
    return (URL.replace('https://','https://coco.codemao.cn/http-widget-proxy/https@SEP@'));}

}
exports.types = types;
exports.widget = Widget;