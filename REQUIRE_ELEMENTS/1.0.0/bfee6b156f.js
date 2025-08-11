document = this.document;
window = this.window;
window.dynamicLoadJs = (url) => {
    return new Promise((resolve, reject) => {
        try {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;
            head.appendChild(script);
            resolve(true)
        }catch{
            reject(false)
        }
    })

}
window.dynamicLoadCSS = (url) => {
    return new Promise((resolve, reject) => {
        try {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('link');
            script.type = 'text/css';
            script.rel = 'stylesheet';
            script.href = url;
            head.appendChild(script);
            resolve(true)
        }catch{
            reject(false)
        }
    })

}
const types = {
    title: '动态引入JS/CSS',
    icon: 'icon-open-console-log',
    type: 'REQUIRE_ELEMENTS',
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    methods: [
        {
            key: 'require_js',
            lebel: '引入JS',
            params: [
                {
                    key: 'text',
                    label: '链接',
                    valueType: 'string',
                    defaultValue: '',
                }
            ]
        },
        {
            key: 'require_css',
            lebel: '引入CSS',
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
    constructor(props) {
        super(props);
        console.log("欢迎使用 动态引入JS/CSS控件")
        console.log("作者 刘lyxAndy")
        console.log("版本 2.0")
    }

    require_js = async (text) => {
        await window.dynamicLoadJs(text)
    }
    require_css = async (text) => {
        await window.dynamicLoadCSS(text)
    }
}
exports.types = types;
exports.widget = Widget;