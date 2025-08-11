//@anthor: CHH
//未完善

window = this.window
document = this.document

const blockColor = '#20BE38'

let types = {
    title: "CSS控件",
    type: "CHH_CSS_SETTING_WIDGET",
    icon: "https://static.codemao.cn/pickduck/HyojwmMdkl.svg?hash=FgheiJFkXkmTRUXia1B1wxakSHc9",
    docs: { url: 'https://cos.chahehe.space/widget/#/page-7' },
    version: "1.0.0",
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [
        { key: 'cssCt', label: '样式内容', valueType: 'string', editorType: 'TextArea', defaultValue: '', 
            blockOptions: {
                generateBlock: false,
            },
        },
        { key: 'cssId', label: 'id', valueType: 'string', defaultValue: 'style-1', 
            blockOptions: {
                generateBlock: false,
            },
        },
        { key: 'donow', label: '是否直接执行', valueType: 'boolean', defaultValue: false, 
            blockOptions: {
                generateBlock: false,
            },
        },
        { key: 'tiptip', label: '未实现预览', valueType: 'string', defaultValue: '',
            blockOptions: {
                generateBlock: false,
            },
        },
    ],
    methods: [
        {
            key: 'CHH_CSS_SETTING_addORnew',
            label: '设置样式',
            params: [
            {
                key: 'CHH_CSS_SETTING_addORnew_content',
                label: '将内容',
                valueType: 'string',
                defaultValue: 'CSS样式内容',
            },

            {
                key: 'CHH_CSS_SETTING_addORnew_id',
                label: '设置到id为',
                valueType: 'string',
                defaultValue: 'css-1',
            },

            {
                label: '的样式表',
            },
            ],
        
            blockOptions: {
            color: blockColor,
            icon: 'https://static.codemao.cn/pickduck/BkNku7MO1e.svg?hash=Fj6SP-7abTGMAVSgM4j3nImi4SEF',
            generateBlock: true,
            inputsInline: true,
            space: 16,
            },
        },
    ],
    events: [],
    platforms: ["web", "android", "ios", "harmony"],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
          this.widgetLog('欢迎使用 CHH-CSS控件');
          console.log(`%c${props.tiptip}`, ' text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25);font-size:5em');
          if (props.donow) {
            const cssCt = props.cssCt;
            const cssId = props.cssId;
            addStyleToHead.call(this, cssCt, cssId);
        }
    }
}

function addStyleToHead(CHH_CSS_SETTING_addORnew_content, CHH_CSS_SETTING_addORnew_id) {
    const existingStyle = document.getElementById(CHH_CSS_SETTING_addORnew_id);
    if (existingStyle) {
        existingStyle.textContent = CHH_CSS_SETTING_addORnew_content;
        this.widgetLog(`已更新id为【${CHH_CSS_SETTING_addORnew_id}】的样式`);
    } else {
        const style = document.createElement('style');
        style.id = CHH_CSS_SETTING_addORnew_id;
        style.textContent = CHH_CSS_SETTING_addORnew_content;
        const head = document.head || document.getElementsByTagName('head')[0];
        head.appendChild(style);
        this.widgetLog(`已添加id为【${CHH_CSS_SETTING_addORnew_id}】的样式`);
    }
}


Widget.prototype.CHH_CSS_SETTING_addORnew = function (CHH_CSS_SETTING_addORnew_content, CHH_CSS_SETTING_addORnew_id) {
    addStyleToHead.call(this, CHH_CSS_SETTING_addORnew_content, CHH_CSS_SETTING_addORnew_id);
};


exports.types = types;
exports.widget = Widget;