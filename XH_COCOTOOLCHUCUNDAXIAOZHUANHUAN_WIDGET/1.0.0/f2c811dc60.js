//一些常量
const auther = "小宏XeLa"//作者
const version = "1.0.1"//版本号
const qq = 3174251894//作者QQ
const color = "RGB(241,122,126)"//积木颜色
const icon = 'icon-widget-local-storage';//图标
//一些变量
var document = this.document;//获取document的调用权限
var window = this.window//获取window的调用权限

var types = {//自定义控件设置
    type: 'XH_COCOTOOLCHUCUNDAXIAOZHUANHUAN_WIDGET',//控件编号
    icon,//控件图标
    title: '储存大小转换',//控件名称
    platforms: ['android', 'ios', 'web'],//控件可用范围
    version,//控件版本
    auther,//控件作者
    docs:{url:"https://www.yuque.com/xiaohong2022/xhwidgets/filetoolbook",},//帮助链接
    isInvisibleWidget: true,//是功能控件
    isGlobalWidget: true,//是全局控件
    properties: [],//属性
    methods: [//方法
        {
            key: 'sizedata',
            label: '将数字',
            valueType: ['number', "string"], 
            params: [
                {
                    key: 'size',
                    label: '',
                    valueType: 'number',
                    defaultValue: 800,
                },
                {
                    key: "mode",
                    label: "转换为 数据存储类型，返回",
                    valueType: 'string',
                    dropdown: [
                        { label: '完整内容', value: 'all'},
                        { label: '数据', value: 'data'},
                        { label: '单位', value: 'unit'},
                    ]
                },
            ],
            blockOptions: {
                color,
                icon,
            }
        },
    ],
    events: [],
};

class Widget extends VisibleWidget {//控件函数代码
    //构造器
    constructor(props) {
        super(props);
        this.widgetLog(`制作者：小宏XeLa`);
        this.widgetLog(`编程猫个人主页：https://shequ.codemao.cn/user/9232151`);
    };
    sizedata = (bytes,mode)=>{
        if (bytes === 0) return '0B';
        var k = 1024,
            sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            i = Math.floor(Math.log(bytes) / Math.log(k));
        var c = (bytes / Math.pow(k, i)).toFixed(2);
        var f = `${c}${sizes[i]}`;
        if(mode == "all"){return(f)};
        if(mode == "data"){return(c)};
        if(mode == "unit"){return(sizes[i])};
    };
};

//导出控件
exports.types = types;
exports.widget = Widget;