var document = this.document;

function loadScript (url) {
    var script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);
}
loadScript("https://static.codemao.cn/IFTC-Studio/HJ6bF_dnA.js");

const types = {
    isInvisibleWidget: true,
    type: "Eruda",
    icon: "https://cdn.cocotais.cn/project/waddle-2/logo/waddle2-logo.svg",
    title: "Eruda控制台",
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
    key: 'init',
    label: '开启',
    params: [],


})
Widget.prototype.init = function () {
    eruda.init()
}

types['methods'].push({
    key: 'close',
    label: '关闭',
    params: [],


})
Widget.prototype.close = function () {
    eruda.close()
}

exports.types = types;
exports.widget = Widget;