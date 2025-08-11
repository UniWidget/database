var navigator = this.navigator
var window = this.window
const types = {
    title: 'UA检测器',
    icon: 'icon-open-console-log',
    type: 'USERAGENT_CHECKER',
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    methods: [
        {
            key: 'getUA',
            label: '获取User-Agent',
            params: [],
            valueType: 'string',
        },
        {
            key: 'isUA',
            label: '浏览器的User-Agent是否为',
            params: [
                {
                    key: 'browser',
                    label: '浏览器名',
                    valueType: 'string',
                    defaultValue: 'QQinside',
                    dropdown: [
                        {label: 'QQ内置浏览器', value: 'PA QQ'},
                        {label: '微信内置浏览器', value: 'Weixin'},
                        {label: 'IE浏览器', value: 'MSIE'},
                        {label: '世界之窗浏览器', value: 'The World'},
                        {label: 'TT浏览器', value: 'TencentTraveler'},
                        {label: '360浏览器', value: '360SE'},
                        //{label: 'Safari浏览器', value: 'Safari'},
                        {label: '火狐浏览器', value: 'Firefox'},
                        {label: 'Edge浏览器', value: 'Edg'},

                    ]
                }
            ],
            valueType: 'boolean',
        },
    ],
    events: [],
}
class Widget extends InvisibleWidget {
    constructor(props){
        super(props);
        console.log("欢迎使用控件")
        console.log("作者 刘lyxAndy")
        console.log("版本 1.0.0")
        console.warn("请勿抄袭，违者可追究法律责任！")
    }

    getUA(){
        return navigator.userAgent;
    }

    isUA=(browser)=>{
        //window.alert(browser)
        if(navigator.userAgent.includes(browser))
        {
            return true;
        }else{
            return false;
        }
    }
}
exports.types=types;
exports.widget=Widget;