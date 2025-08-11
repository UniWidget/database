var document = this.document;

const types = {
    type: "ARCO_WATERMARK_WIDGET",
    icon: "https://arco.design/favicon.ico",
    title: "Arco Design 水印控件",
    version: '1.0.0',
    author: '刘lyxAndy',
    docs: {
        url: "https://arco.design/vue/component/watermark",
    },
    license: 'MIT',
    isInvisibleWidget: false,
    isGlobalWidget: false,
    properties: [
        {
            key: 'content',
            label: '水印内容',
            valueType: ['string'],
            defaultValue: 'Arco Design'
        },
    ],
    methods: [],
    events: [],
};

class Widget extends VisibleWidget {
    constructor(props) {
        super(props);
        this.__width = "100vw";
        this.__height = "100vh";
        this.content = props.content
        /* 灵感来自于@XJ王大哥，在此鸣谢 */
        let src = document.createElement("link");
        src.rel = "stylesheet";
        src.href = "//unpkg.com/@arco-design/web-vue/dist/arco.css";
        document.head.appendChild(src);

        src = document.createElement("script");
        src.src = "//unpkg.com/vue@3";
        src.onload = this.initArco;
        document.body.appendChild(src);
    }
/*
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
*/
    initArco = () => {
        let src = document.createElement("script");
        src.src = "//unpkg.com/@arco-design/web-vue";
        src.onload = this.init;
        document.body.appendChild(src);
    };
    init = () => {
        let widget = this;

        const App = {
            data() {
                return {
                    content: widget.content,
                    wid: widget.__width,
                    hei: widget.__height
                };
            },
        };
        const app = Vue.createApp(App);
        app.use(ArcoVue);
        app.mount("#WATERMARK");
    }
    render() {
        return (
            <div
                id="WATERMARK"
                dangerouslySetInnerHTML={{
                    __html: `
                    <a-watermark :content="content"><div :style="{width:wid,height:hei}"></div></a-watermark>
                ` }}
            >
            </div>
        );
    }
}

exports.types = types;
exports.widget = Widget;