const types = {
    isInvisibleWidget: true,
    type: "YJJZ",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "禁止右键",
    version: "1.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
          document.oncontextmenu = new Function("return false;");
    }

}

exports.types = types;
exports.widget = Widget;
