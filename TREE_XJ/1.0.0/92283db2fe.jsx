var document = this.document;

const types = {
    type: "TREE_XJ",
    icon: "https://cn.vuejs.org/logo.svg",
    title: "树形控件",
    version: '1.0.0',
    author: 'XJ王大哥(2357942846)',
    docs: {
        url: "https://element-plus.org/zh-CN/component/tree.html",
    },
    isInvisibleWidget: false,
    isGlobalWidget: false,
    properties: [
        {
            key: 'data',
            label: '数据',
            valueType: ['string', 'array'],
            defaultValue: ''
        },
    ],
    methods: [],
    events: [],
};

class Widget extends VisibleWidget {
    constructor(props) {
        super(props);

        // 加载完成后进行初始化
        this.scriptLoadCount = 0;

        // 引入3个脚本
        let src = document.createElement("link");
        src.rel = "stylesheet";
        src.href = "//unpkg.com/element-plus/dist/index.css";
        src.onload = this.init;
        document.head.appendChild(src);

        src = document.createElement("script");
        src.src = "//unpkg.com/vue@3";
        src.onload = this.init;
        document.body.appendChild(src);

        src = document.createElement("script");
        src.src = "//unpkg.com/element-plus";
        src.onload = this.init;
        document.body.appendChild(src);
    }

    init = () => {
        // 检测脚本是否加载完成
        this.scriptLoadCount++;
        if (this.scriptLoadCount < 3) return;

        let widget = this;

        const App = {
            data() {
                return {
                    data: widget.data ?? [{ label: "Level one 1", children: [{ label: "Level two 1-1", children: [{ label: "Level three 1-1-1" }] }] }, { label: "Level one 2", children: [{ label: "Level two 2-1", children: [{ label: "Level three 2-1-1" }] }, { label: "Level two 2-2", children: [{ label: "Level three 2-2-1" }] }] }, { label: "Level one 3", children: [{ label: "Level two 3-1", children: [{ label: "Level three 3-1-1" }] }, { label: "Level two 3-2", children: [{ label: "Level three 3-2-1" }] }] }]
                };
            },
        };
        const app = Vue.createApp(App);
        app.use(ElementPlus);
        app.mount("#FLEE_REACT_XJ");
    };

    render() {
        return (
            <div
                id="FLEE_REACT_XJ"
                dangerouslySetInnerHTML={{
                    __html: `
                    <el-tree :data="data"/>
                ` }}
            >
            </div>
        );
    }
}

exports.types = types;
exports.widget = Widget;