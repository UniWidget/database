
var document = this.document;
const types = {
    isInvisibleWidget: true,
    type: "zx_zhishiyin-1.02",
    icon: "https://cdn.cocotais.cn/project/waddle-2/logo/waddle2-logo.svg",
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
    document.getElementById('rootPlayer').querySelector('.screen-view').querySelector('.screen-view-inner').childNodes.forEach(item => {
        let substring = "px";
        let newStr = item.childNodes[0].style.top.replace(new RegExp(substring, 'g'), '');
        item.childNodes[0].style.top = (newStr / 640 * s_height) - (s_height - 640) / 2 + 'px';
        let Str = item.style.top.replace(new RegExp(substring, 'g'), '');
        item.style.top = (Str / 640 * s_height) - (s_height - 640) / 2 + 'px';

    })

}


exports.types = types;
exports.widget = Widget;
