var document = this.document;
const types = {
    type: 'OPTIMIZATION_COCO',
    icon: 'https://static.codemao.cn/coco/player/unstable/rJenQZM03.image/png?hash=FvJjSLkZJwhh6XMquWvTB6MqxL',
    title: '优化CoCo',
    version: '1.0.0',
    author: 'XJ王大哥(QQ2357942846)',
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: []
};

class XJWidget extends InvisibleWidget {
    constructor(p) {
        super(p);
    }
}

exports.types = types;
exports.widget = XJWidget;

if (!document.querySelector('script[src="https://greasyfork.org/scripts/473811-%E4%BC%98%E5%8C%96coco/code/%E4%BC%98%E5%8C%96CoCo.js"]')) {
    var script = document.createElement("script");
    script.src = "https://greasyfork.org/scripts/473811-%E4%BC%98%E5%8C%96coco/code/%E4%BC%98%E5%8C%96CoCo.js";
    document.body.appendChild(script);
}