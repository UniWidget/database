var document = this.document;

const types = {
    type: "COURSE_TREE_XJ",
    icon: "https://cn.vuejs.org/logo.svg",
    title: "教程-树形控件",
    isInvisibleWidget: false,
    isGlobalWidget: false,
    docs: {
        url: "https://xjwangdage.feishu.cn/wiki/Zmr2w3grnilSh7kjkaZcp1VwnVh?from=from_copylink",
    },
    properties: [],
    methods: [],
    events: [],
};

class Widget extends VisibleWidget {

    // 引入脚本部分，写在初始化函数里
    constructor(props) {
        super(props);

        // 用于记录脚本加载数量，加载完成后进行初始化
        this.scriptLoadCount = 0;

        // 引入3个脚本
        // element-plus样式，可以替换成别的组件库链接
        let src = document.createElement("link");
        src.rel = "stylesheet";
        src.href = "//unpkg.com/element-plus/dist/index.css";
        src.onload = this.init; // 加载完成就执行初始化函数
        document.head.appendChild(src);

        // element-plus脚本，可以替换成别的组件库链接
        src = document.createElement("script");
        src.src = "//unpkg.com/element-plus";
        src.onload = this.init;
        document.body.appendChild(src);

        // vue3脚本
        src = document.createElement("script");
        src.src = "//unpkg.com/vue@3";
        src.onload = this.init;
        document.body.appendChild(src);
    }

    // 初始化部分
    init = () => {
        // 检测脚本是否加载完成，脚本加载数量大于等于3才执行初始化
        this.scriptLoadCount++;
        if (this.scriptLoadCount < 3) return;


        // App对象里写Vue脚本，需要用到Vue知识
        const App = {
            data() {
                return {
                    // data属性为官方示例数据
                    data: [{ label: "Level one 1", children: [{ label: "Level two 1-1", children: [{ label: "Level three 1-1-1" }] }] }, { label: "Level one 2", children: [{ label: "Level two 2-1", children: [{ label: "Level three 2-1-1" }] }, { label: "Level two 2-2", children: [{ label: "Level three 2-2-1" }] }] }, { label: "Level one 3", children: [{ label: "Level two 3-1", children: [{ label: "Level three 3-1-1" }] }, { label: "Level two 3-2", children: [{ label: "Level three 3-2-1" }] }] }]
                };
            },
        };

        // 这步不用管
        const app = Vue.createApp(App);
        // 使用组件库，这块写什么看组件库文档示例
        app.use(ElementPlus);
        // 绑定到控件上，渲染控件
        app.mount('#' + this.__widgetId);
    };

    // 渲染部分
    render() {
        return (
            // 注意：不能直接写vue结构，需要在__html: 后面以字符串形式写，用斜引号包裹可以换行
            // 一个简单的树形控件，使用了data属性
            <div dangerouslySetInnerHTML={{
                __html: `
                <el-tree :data="data"/>
            ` }}></div>
        );
    }
}

exports.types = types;
exports.widget = Widget;