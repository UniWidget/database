var document = this.document;

const types = {
    isInvisibleWidget: true,
    type: "GET_TITLE_WIDGET",
    icon: "https://public.coco-central.cn/waddle/2/waddle2.svg",
    title: "获取网页标题",
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
    key: 'Get',
    label: '获取网页标题',
    params: [],


})
Widget.prototype.Get = function () {
      return (document.title);
}
exports.types = types;
exports.widget = Widget;