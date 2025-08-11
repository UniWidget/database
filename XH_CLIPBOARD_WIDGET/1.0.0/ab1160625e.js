//一些常量
const auther = "小宏XeLa"//作者
const version = "1.0.0"//版本号
const qq = 3174251894//作者QQ
const color = "#66ccff"//积木颜色
const icon = 'icon-toolbox-feature';//图标
//一些变量
var document = this.document;//获取document的调用权限navigator
var navigator = this.navigator;

var types = {//自定义控件设置
    type: 'XH_CLIPBOARD_WIDGET',//控件编号
    icon,//控件图标
    title: '剪切板',//控件名称
    platforms: ['android', 'ios', 'web'],//控件可用范围
    version,//控件版本
    auther,//控件作者
    isInvisibleWidget: true,//是功能控件
    isGlobalWidget: true,//是全局控件
    properties: [],//属性
    methods: [//方法
        {
            key: 'copy',
            label: '复制文本',
            params: [
                {
                    key: "text",
                    label: "",
                    valueType: "string",
                    defaultValue: "Hello~",
                },
            ],
            blockOptions: {
                color,
                icon,
            }
        },{
            key: 'readcopy',
            label: '读取你复制的文本',
            params: [],
            valueType: "string",
            blockOptions: {
                color,
                icon,
            }
        }
    ],
    events: [],//事件   
};

class Widget extends VisibleWidget {//控件函数代码
    //构造器
    constructor(props) {
        super(props);
        this.widgetLog(`制作者：小宏XeLa`);
        this.widgetLog(`编程猫个人主页：https://shequ.codemao.cn/user/9232151`);
    };
    copy(text){
        try{navigator.clipboard.writeText(text)}catch(e){}
    };
    readcopy=async()=>{
        try{var t=await navigator.clipboard.readText();return(t)}catch(e){return("null")}
    };
};

//导出控件
exports.types = types;
exports.widget = Widget;