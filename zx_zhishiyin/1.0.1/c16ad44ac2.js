
var document = this.document;
const types = {
    isInvisibleWidget: true,
    type: "zx_zhishiyin",
    icon: "https://cdn.cocotais.cn/project/waddle-2/logo/waddle2-logo.svg",
    title: "一键自适应_zx",
    version: "1.0.1",
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
    console.log(document);
    console.log(document.getElementById('rootPlayer').querySelector('.screen-view').querySelector('.screen-view-inner'));
    console.log(document.getElementById('rootPlayer').querySelector('.screen-view').querySelector('.screen-view-inner').children);
    console.log(document.getElementById('rootPlayer').querySelector('.screen-view').querySelector('.screen-view-inner').childNodes);


    document.getElementById('rootPlayer').querySelector('.screen-view').querySelector('.screen-view-inner').childNodes.forEach(item => {
        console.log('高' + s_height);
        console.log(item);
        console.log(item.childNodes[0].style.top);
        let substring = "px";
        let newStr = item.childNodes[0].style.top.replace(new RegExp(substring, 'g'), '');
        console.log(newStr);

        console.log((newStr / 640 * s_height) - (s_height - 640) / 2);

        item.childNodes[0].style.top = (newStr / 640 * s_height) - (s_height - 640) / 2 + 'px';

    })

}


exports.types = types;
exports.widget = Widget;
