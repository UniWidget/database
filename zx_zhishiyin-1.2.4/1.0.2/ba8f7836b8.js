var document = this.document;
var window = this.window;
const types = {
    isInvisibleWidget: true,
    type: "zx_zhishiyin-1.2.4",
    icon: "https://static.codemao.cn/pickduck/B1NZp0Uc1g.svg?hash=FiwfcvxpVTZxA7FdAqwGiEbk2sIT",
    title: "一键自适应_zx",
    version: "1.0.2",
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
    key: 'zhishiyin',
    label: '一键自适应',
    params: [
        {
            key: 's_height',
            label: '屏幕高',
            valueType: 'number',
            defaultValue: 0,
        },
    ],


})



Widget.prototype.zhishiyin = function (s_height) {

    const parent = document.getElementById('rootPlayer').querySelector('.screen-view').querySelector('.screen-view-inner')
    const children = parent.children;
    const originalHeight = 640; // 父容器原始高度
    parent.style.visibility = 'hidden';
    Array.from(children).forEach(child => {
        let computedTop = window.getComputedStyle(child).top;
        if (computedTop == 'auto') {
            computedTop = window.getComputedStyle(child.children[0]).top
        }
        const originalTop = parseFloat(computedTop);
        const scale = s_height / originalHeight;
        const newTop = originalTop * scale - (s_height - originalHeight) / 2;
        if (window.getComputedStyle(child).position == 'static') {
            child.children[0].style.position = 'absolute';
            child.children[0].style.top = `${newTop}px`;
        }
        else {
            child.style.position = 'absolute';
            child.style.top = `${newTop}px`;
        }
    });
    parent.style.visibility = 'visible';
}


exports.types = types;
exports.widget = Widget;
