
//一些常量
const auther = "小宏XeLa"//作者
const version = "1.0.0"//版本号
const qq = 3174251894//作者QQ
const color = "#66ccff"//积木颜色
const icon = 'icon-toolbox-feature';//图标
//一些变量
var window = this.window;//window
var document = this.document;//document

var types = {//自定义控件设置
    type: 'XH_TOPPOSTMESSAGE_WIDGET',//控件编号
    icon,//控件图标
    title: '网页框传参工具',//控件名称
    platforms: ['android', 'ios', 'web'],//控件可用范围
    version,//控件版本
    auther,//控件作者
    docs: { url: "https://btmu8uap4l.feishu.cn/wiki/wikcnCLgVaiBD7aE5yKL59TTSNd", },//帮助链接
    isInvisibleWidget: true,//是功能控件
    isGlobalWidget: true,//是全局控件
    properties: [],//属性
    methods: [//方法
        {
            key: 'stardevent',
            label: '开始监听',
            params: [],
            blockOptions: {
                color,
            }
        }, {
            key: 'posttofather',
            label: '向父端传参',
            params: [
                {
                    key: "text",
                    label: "",
                    valueType: ['string', 'number', 'boolean', 'array', 'color', 'object',],
                    defaultValue: "114514",
                },
            ],
            blockOptions: {
                color,
            }
        }, {
            key: 'post',
            label: '向top端传参',
            params: [
                {
                    key: "text",
                    label: "",
                    valueType: ['string', 'number', 'boolean', 'array', 'color', 'object',],
                    defaultValue: "114514",
                },
            ],
            blockOptions: {
                color,
            }
        },{
            key: 'postin',
            label: '向网页框控件ID',
            params: [
                {
                    key: "id",
                    label: "",
                    valueType: 'string',
                    defaultValue: "请开F12获取控件ID！",
                },
                {
                    key: "text",
                    label: "传参",
                    valueType: ['string', 'number', 'boolean', 'array', 'color', 'object',],
                    defaultValue: "114514",
                },
            ],
            blockOptions: {
                color,
            }
        }
    ],
    events: [],//事件   
};


types['events'].push({
    key: 'message',
    label: '收到消息',
    params: [
        {
            key: 'paramName',
            label: '消息内容',
            valueType: ['string', 'number', 'boolean', 'array', 'color', 'object',],
        },
        {
            key: 'url',
            label: '网页框链接',
            valueType: 'string',
        },
    ],

})

class Widget extends VisibleWidget {//控件函数代码
    //构造器
    constructor(props) {
        super(props);
        this.widgetLog(`制作者：小宏XeLa`);
        this.widgetLog(`编程猫个人主页：https://shequ.codemao.cn/user/9232151`)
    };
    stardevent = () => {
        window.addEventListener('message', (event) => {
            var url = null;
            try {
                url = event.source.location.href;
            } catch (e) { }
            this.emit("message", event.data, url);
        })
    };
    post(a) {
        window.top.postMessage(a);
    }
    postin(id, a) {
        var x = document.querySelector("#" + id);
        if (!x) return this.widgetError("找不到该控件！请到F12获取控件ID!");
        var y = x.querySelector("iframe");
        if (!y) return this.widgetError("该控件不是网页框控件或找不到该控件！请到F12获取控件ID!");
        var z = y.contentWindow;
        if (!z) return this.widgetError("该控件不是网页框控件或找不到该控件！请到F12获取控件ID!");
        z.postMessage(a);
    }

    posttofather(a) {
        window.parent.postMessage(a);
    }
};

//导出控件
exports.types = types;
exports.widget = Widget;