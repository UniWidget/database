document=this.document;
window=this.window;
window.dynamicLoadJs=(url)=>{
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}
const types = {
    title: '动态引入JS',
    icon: 'icon-open-console-log',
    type: 'REQUIRE_JS',
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    methods: [
        {
            key: 'require',
            lebel: '引入',
            params: [
                {
                    key: 'text',
                    label: '链接',
                    valueType: 'string',
                    defaultValue: '',
                }
            ]
        }
    ],
    events: [],
}
class Widget extends InvisibleWidget {
    constructor(props){
        super(props);
        console.log("欢迎使用 动态引入JS控件")
        console.log("作者 刘lyxAndy")
        console.log("版本 1.2.1")
        console.warn("请勿抄袭，违者可追究法律责任！")
    }

    require=(text)=>{
        window.dynamicLoadJs(text)
    }
}
exports.types=types;
exports.widget=Widget;