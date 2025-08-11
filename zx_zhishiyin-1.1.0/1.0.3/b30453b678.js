
var document = this.document;
var window = this.window;
const types = {
    isInvisibleWidget: true,
    type: "zx_zhishiyin-1.1.0",
    icon: "https://cdn.cocotais.cn/project/waddle-2/logo/waddle2-logo.svg",
    title: "一键自适应_zx",
    version: "1.0.3",
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

        // 获取控件
        let targetItem = item.hasAttribute('id') ? item : item.children[0]
        
        // 计算顶部距离
        let currentTop = parseInt(window.getComputedStyle(targetItem).top, 10)
        let ratio = s_height / 640
        let newTop = (640 - s_height) / 2 + (currentTop * ratio)
        
        // 设置样式
        targetItem.style.top = newTop + 'px'
    })

}


exports.types = types;
exports.widget = Widget;
