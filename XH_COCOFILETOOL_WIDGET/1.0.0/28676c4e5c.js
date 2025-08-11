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
    type: 'XH_COCOFILETOOL_WIDGET',//控件编号
    icon,//控件图标
    title: '文件工具箱',//控件名称
    platforms: ['android', 'ios', 'web'],//控件可用范围
    version,//控件版本
    auther,//控件作者
    docs:{url:"https://www.yuque.com/xiaohong2022/xhwidgets/filetoolbook",},//帮助链接
    isInvisibleWidget: true,//是功能控件
    isGlobalWidget: true,//是全局控件
    properties: [],//属性
    methods: [//方法
        {
            key: 'openfile',//
            label: '打开文件',
            params: [
                {
                    key: "type",
                    label: "类型",
                    valueType: "string",
                    defaultValue: ".txt",
                },
                {
                    key: "encode",
                    label: "读取编码",
                    valueType: "string",
                    dropdown: [
                        { label: 'UTF-8', value: 'UTF-8', },
                        { label: 'Unicode', value: 'Unicode', },
                        { label: 'Unicode big endian', value: 'Unicode big endian', },
                        { label: 'ANSI', value: 'ANSI', },
                    ]
                }
            ],
            blockOptions: {
                color,
                icon,
            }
        },
        {
            key: 'savefile',
            label: '保存文件',
            params: [
                {
                    key: "name",
                    label: "名称",
                    valueType: "string",
                    defaultValue: "text.txt",
                },
                {
                    key: "content",
                    label: "内容",
                    valueType: 'string',
                    defaultValue: "CoCo，让世界没有难做的APP！",
                }
            ],
            blockOptions: {
                color,
                icon,
                space:50,
            }
        },
        {
            key: 'json',
            label: '使用 JSON 将',
            valueType: ['string','number','boolean','array','color','object'],
            params: [
                {
                    key: 'mode',
                    label: '',
                    valueType: 'string',
                    dropdown: [
                        { label: '文本转换为对象', value: 'parse', },
                        { label: '对象转换为文本', value: 'stringify', },
                    ]
                },
                {
                    key: "text",
                    label: "",
                    valueType: ['string','number','boolean','array','color','object'],
                    defaultValue: "{a:[1,2,3],b:'hello'}",
                },
            ],
            blockOptions: {
                color,
                icon,
            }
        },
        {
            key: 'datedata',
            label: '将时间戳',
            valueType: ['number', "string"], 
            params: [
                {
                    key: 'ms',
                    label: '',
                    valueType: 'number',
                    defaultValue: 9493344e5,
                },
                {
                    key: "mode",
                    label: "转换为时间，返回这个时间的",
                    valueType: 'string',
                    dropdown: [
                        { label: '完整时间', value: 'all'},
                        { label: '年份', value: 'year'},
                        { label: '月份', value: 'month'},
                        { label: '日份', value: 'day'},
                        { label: '星期（文本）', value: 'week'},
                        { label: '星期（数字）', value: 'weekn'},
                        { label: '小时', value: 'hour'},
                        { label: '分钟', value: 'min'},
                        { label: '秒', value: 'sec'},
                        { label: '毫秒', value: 'msec'},
                    ]
                },
            ],
            blockOptions: {
                color,
                icon,
            }
        },
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
    events: [//事件
        {
            key: 'onopenfile',
            label: '获取到文件',
            params: [
                {
                    key: "name",
                    label: "名称",
                    valueType: "string"
                },
                {
                    key: "type",
                    label: "类型",
                    valueType: "string"
                },
                {
                    key: "size",
                    label: "大小（数字）",
                    valueType: "number"
                },
                {
                    key: "data",
                    label: "修改日期（数字）",
                    valueType: "number"
                },
                {
                    key: "text",
                    label: "内容",
                    valueType: "string"
                },
            ],
            blockOptions: {
                icon:"https://creation.codemao.cn/coconut/web/1.15.0/static/media/cloud.af9d6145.svg",
            }
        }
    ],
};

class Widget extends VisibleWidget {//控件函数代码
    //构造器
    constructor(props) {
        super(props);
        this.widgetLog(`制作者：小宏XeLa`);
        this.widgetLog(`编程猫个人主页：https://shequ.codemao.cn/user/9232151`);
    };
    openfile = (type,encode)=>{//打开文件
        var input = document.createElement("input");//新建一个inputHTML元素
        input.setAttribute("type", "file")//将这个元素的type属性改为file
        input.setAttribute("accept",type)//将这个元素的type属性改为file
        input.click();//调用点击函数
        input.onchange = ()=>{//当拿到文件时
            var files = input.files[0];
            var fileread = new FileReader();
            fileread.onload = ()=>{
               var content = fileread.result;
               this.emit("onopenfile", files.name, files.type, files.size, files.lastModified, fileread.result);
            }
            fileread.readAsText(files, encode);
        };
    };
    savefile = (name,content)=>{//保存文件
        var urlObject = window.URL || window.webkitURL || window;
        var export_blob = new Blob([content]);
        var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
        save_link.href = urlObject.createObjectURL(export_blob);
        save_link.download = name;
        var ev = document.createEvent("MouseEvents");
        ev.initMouseEvent(
          "click", true, false, window, 0, 0, 0, 0, 0
          , false, false, false, false, 0, null
        );
        save_link.dispatchEvent(ev);//将文件下载到电脑
    };
    sizedata = (size,mode)=>{
        var a = "B KB MB GB TB PB EB".split(" ");
        var b = "B" ;
        var c = size;
        var d = 1;
        if(size>=8){
            for(var e = 0; e < a.length; e++){
                c = ~~(size/(8*d));
                b = a[d];
                if(c>=1024){
                    if(d>=5){break};
                    d++;
                }
                else{break};
            };
        };
        var f = `${c}${b}`;
        if(mode == "all"){return(f)};
        if(mode == "data"){return(c)};
        if(mode == "unit"){return(b)};
    };
    datedata = (ms,mode)=>{
        var a = new Date(ms)
        if(mode == "all"){return(a.toString())}
        if(mode == "year"){return(a.getFullYear())}
        if(mode == "month"){return(a.getMonth()+1)}
        if(mode == "day"){return(a.getDate())}
        if(mode == "week"){return("星期"+"日一二三四五六".split("")[a.getDay()])}
        if(mode == "weekn"){return(a.getDay())}
        if(mode == "hour"){return(a.getHour())}
        if(mode == "min"){return(a.getMinutes())}
        if(mode == "sec"){return(a.getSeconds())}
        if(mode == "msec"){return(a.getMilliseconds())}
    };
    json = (mode,text)=>{if(mode=="stringify"){return JSON.stringify(text)}else{return JSON.parse(text)}}
};

//导出控件
exports.types = types;
exports.widget = Widget;