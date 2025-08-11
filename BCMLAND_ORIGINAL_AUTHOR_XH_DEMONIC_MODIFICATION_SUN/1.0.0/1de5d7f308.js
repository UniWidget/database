
//一些常量
const auther = "原作者：小宏XeLa  魔改：明天的太阳"//作者
const version = "1.0.0"//版本号
const qq = "原作者：3174251894  魔改：898244138"//作者QQ
const color = "#66ccff"
//积木颜色
const icon = 'icon-toolbox-feature';//图标
//一些变量
var window = this.window;//window
var document = this.document;//document

var types = {//自定义控件设置
    type: 'BCMLAND_ORIGINAL_AUTHOR_XH_DEMONIC_MODIFICATION_SUN',//控件编号
    icon,//控件图标
    title: '编程猫授权登录返回',//控件名称
    platforms: ['android', 'ios', 'web'],//控件可用范围
    version,//控件版本
    auther,//控件作者
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
        },
    ],
    events: [],//事件   
};


types['events'].push({
    key: 'message',
    label: '收到数据',
    params: [
        {
            key: 'data',
            label: '数据内容',
            valueType: 'object',
        },{
            key: 'key',
            label: '密钥',
            valueType: 'string',
        },
    ],

})

class Widget extends VisibleWidget {//控件函数代码
    //构造器
    constructor(props) {
        super(props);
    };
    stardevent = () => {
        window.addEventListener('message', (event) => {
            var url = null;
            try {
                url = event.source.location.href;
            } catch (e) { }
            if ((event.data['call']) == 'bcmland') {
                this.emit("message", event.data['data'],event.data['key']);
            }
        })
    };
};

//导出控件
exports.types = types;
exports.widget = Widget;