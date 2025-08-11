/**
 * @author: 何我寻月
 * 来自 Yue 控件库
 */

// 积木颜色
// #2FD16C
const blockColor= "#2FD16C"

var document = this.document
var window = this.window

let types = {
    title: "设置字体",
    type: "YUE_FONT_SETTING_WIDGET",
    icon: "https://static.codemao.cn/pickduck/r1bcUJVhkg.svg?hash=Fvi4FgXzYWRv4I93KI66ELWIl4Dd",
    docs: { url: 'https://cos.chahehe.space/widget/#/page-1' },
    version: "1.0.0",
    isInvisibleWidget: true,
    isGlobalWidget: true,
    hasAnyWidget: true, // YUE
    properties: [
        { key: 'choosefont', label: '选择字体', valueType: 'string', defaultValue: 'HarmonyOS_Sans_Black',
            dropdown: [
                { label: 'HarmonyOS_Sans_Black', value: 'HarmonyOS_Sans_Black' },
                { label: 'HarmonyOS_Sans_Bold', value: 'HarmonyOS_Sans_Bold' },
                { label: 'HarmonyOS_Sans_Light', value: 'HarmonyOS_Sans_Light' },
                { label: 'HarmonyOS_Sans_Medium', value: 'HarmonyOS_Sans_Medium' },
                { label: 'HarmonyOS_Sans_Regular', value: 'HarmonyOS_Sans_Regular' },
                { label: 'HarmonyOS_Sans_Thin', value: 'HarmonyOS_Sans_Thin' },
                { label: 'HarmonyOS_SansSC_Medium', value: 'HarmonyOS_SansSC_Medium' },
                { label: 'MiSans L3', value: 'MiSans L3' },
                { label: 'MisansTC-Medium', value: 'MisansTC-Medium' },
            ],
            blockOptions: { generateBlock: false },
        },
        { key: 'dofont', label: '一键设置', valueType: 'boolean', defaultValue: false, 
            blockOptions: {
                generateBlock: false,
            },
        },
    ],
    events: [],
    methods: [
        {
            key: "makefont1",
            label: '一键设置为',
            tooltip: '选择字体可以一键全局替换',
            params: [
                { key: "mf1font", label: '', valueType: 'string', defaultValue: 'HarmonyOS_Sans_Black',
                    dropdown: [
                        { label: 'HarmonyOS_Sans_Black', value: 'HarmonyOS_Sans_Black' },
                        { label: 'HarmonyOS_Sans_Bold', value: 'HarmonyOS_Sans_Bold' },
                        { label: 'HarmonyOS_Sans_Light', value: 'HarmonyOS_Sans_Light' },
                        { label: 'HarmonyOS_Sans_Medium', value: 'HarmonyOS_Sans_Medium' },
                        { label: 'HarmonyOS_Sans_Regular', value: 'HarmonyOS_Sans_Regular' },
                        { label: 'HarmonyOS_Sans_Thin', value: 'HarmonyOS_Sans_Thin' },
                        { label: 'HarmonyOS_SansSC_Medium', value: 'HarmonyOS_SansSC_Medium' },
                        { label: 'MiSans L3', value: 'MiSans L3' },
                        { label: 'MisansTC-Medium', value: 'MisansTC-Medium' },
                    ],
                    labelAfter: '字体',
                },
            ],
            blockOptions: { color: blockColor },
        },
        {
            key: "makefont2",
            label: '一键设置为',
            params: [
                { key: "mf2fontUrl", label: '字体url', valueType: 'string', defaultValue: 'https://fastly.jsdelivr.net/gh/Seeky-yue/cdnfont@1.0.6/HarmonyOS_Sans_Thin.ttf',},
                { key: "mf2fontName", label: '名称', valueType: 'string', defaultValue: 'HarmonyOS_Sans_Thin',},
                { key: "mf2fontID", label: '编号', valueType: 'string', defaultValue: 'hm1',},
            ],
            blockOptions: { color: blockColor ,inputsInline: false,},
        },
        {
            key: "delfont1",
            label: '一键取消设置的字体',
            params: [
                { key: "df1font", label: '', valueType: 'string', defaultValue: 'HarmonyOS_Sans_Black',
                    dropdown: [
                        { label: 'HarmonyOS_Sans_Black', value: 'HarmonyOS_Sans_Black' },
                        { label: 'HarmonyOS_Sans_Bold', value: 'HarmonyOS_Sans_Bold' },
                        { label: 'HarmonyOS_Sans_Light', value: 'HarmonyOS_Sans_Light' },
                        { label: 'HarmonyOS_Sans_Medium', value: 'HarmonyOS_Sans_Medium' },
                        { label: 'HarmonyOS_Sans_Regular', value: 'HarmonyOS_Sans_Regular' },
                        { label: 'HarmonyOS_Sans_Thin', value: 'HarmonyOS_Sans_Thin' },
                        { label: 'HarmonyOS_SansSC_Medium', value: 'HarmonyOS_SansSC_Medium' },
                        { label: 'MiSans L3', value: 'MiSans L3' },
                        { label: 'MisansTC-Medium', value: 'MisansTC-Medium' },
                    ],
                },
            ],
            blockOptions: { color: blockColor ,icon: 'https://static.codemao.cn/pickduck/SJYU5jGnJg.svg?hash=Fn_N25yaYzPWuozgLSPnXxVixzK4',},
        },
        {
            key: "delfont2",
            label: '一键取消设置的字体',
            params: [
                { key: "df2fontID", label: '编号', valueType: 'string', defaultValue: 'hm1',},
            ],
            blockOptions: { color: blockColor ,icon: 'https://static.codemao.cn/pickduck/SJYU5jGnJg.svg?hash=Fn_N25yaYzPWuozgLSPnXxVixzK4',},
        },
        {
            key: "getWidgetId",
            label: '的 ID',
            valueType: 'string',
            params: [],
            blockOptions: { callMethodLabel: false, color: ' #F4AE3B' },
        },
        {
            key: "letinfont",
            label: '引入字体文件',
            params: [
                { key: "letinfontUrl", label: 'url', valueType: 'string', defaultValue: 'https://github.com/Seeky-yue/cdnfont/raw/refs/heads/main/MiSans%20L3.ttf',},
                { key: "letinfontName", label: '名称', valueType: 'string', defaultValue: 'MISANSL3',},
                { key: "letinfontID", label: '编号', valueType: 'string', defaultValue: 'mi2',},
            ],
            blockOptions: { color: blockColor ,icon: 'https://static.codemao.cn/pickduck/BJ6ZW1421g.svg?hash=FiMHtYgwaMGVcA5QYbw5FxRcBl64',},
        },
        {
            key: "letinfontNo",
            label: '取消引入字体文件',
            params: [
                { key: "letinfontID", label: '编号', valueType: 'string', defaultValue: 'mi2',},
            ],
            blockOptions: { color: blockColor ,icon: 'https://static.codemao.cn/pickduck/SJYU5jGnJg.svg?hash=Fn_N25yaYzPWuozgLSPnXxVixzK4',},
        },
        {
            key: "setffbyid",
            label: '设置',
            params: [
                { key: "sfID", label: 'id为', valueType: 'string', defaultValue: 'ID_WID',},
                { key: "sfziti", label: '的控件的字体为', valueType: 'string', defaultValue: 'MiSans',},
            ],
            blockOptions: { color: blockColor ,icon: 'https://static.codemao.cn/pickduck/Syixoof3yx.svg?hash=FpHl62J3bOP2BSQ_wyUn7e8HEzO-',},
        },
    ],
}


class Widget extends InvisibleWidget {
    constructor(props) {
        super(props)
        Object.assign(this, props)

        if (props.dofont) {
            const choosefont = props.choosefont;
            MakeFont1.call(this, `YUE_FONTSETTING_WIDGET-style-dofont-${choosefont}`, `https://fastly.jsdelivr.net/gh/Seeky-yue/cdnfont@1.0.6/${choosefont}.ttf`, choosefont);
        }
    }

    // 返回控件的 ID
    getWidgetId() { return this.__widgetId }
}

function MakeFont1(id, fontUrl, fontName) {
    let styleTag = document.getElementById(id);
    
    // 构建 CSS 内容
    const cssContent = `
        @font-face {
            font-family: '${fontName}';
            src: url('${fontUrl}');
        }
        
        * {
            font-family: '${fontName}' !important;
        }
    `;

    if (styleTag) {
        // 如果样式标签已存在，更新内容
        styleTag.textContent = cssContent;
    } else {
        // 创建新的 style 标签
        styleTag = document.createElement('style');
        styleTag.id = id;
        styleTag.type = 'text/css';
        styleTag.textContent = cssContent;
        
        // 插入到 head 最前面
        document.head.insertBefore(styleTag, document.head.firstChild);
    }
}

Widget.prototype.makefont1 = function (mf1font) {
    MakeFont1.call(this, `YUE_FONTSETTING_WIDGET-style-makefont1-${mf1font}`, `https://fastly.jsdelivr.net/gh/Seeky-yue/cdnfont@1.0.6/${mf1font}.ttf`, mf1font)
}

Widget.prototype.makefont2 = function (mf2fontUrl, mf2fontName, mf2fontID) {
    MakeFont1.call(this, `YUE_FONTSETTING_WIDGET-style-makefont2-${mf2fontID}`, mf2fontUrl, mf2fontName)
}

Widget.prototype.delfont1 = function (df1font) {
    const styleTag = document.getElementById(`YUE_FONTSETTING_WIDGET-style-makefont1-${df1font}`);
    if (styleTag) {
        styleTag.parentNode.removeChild(styleTag);
    }
}

Widget.prototype.delfont2 = function (df2fontID) {
    const styleTag = document.getElementById(`YUE_FONTSETTING_WIDGET-style-makefont2-${df2fontID}`);
    if (styleTag) {
        styleTag.parentNode.removeChild(styleTag);
    }
}

Widget.prototype.letinfont = function (letinfontUrl, letinfontName, letinfontID) {
    let styleTag = document.getElementById(`YUE_FONTSETTING_WIDGET-style-letinfont-${letinfontID}`);
    
    // 构建 CSS 内容
    const cssContent = `
        @font-face {
            font-family: '${letinfontName}';
            src: url('${letinfontUrl}');
        }
        
    `;

    if (styleTag) {
        // 如果样式标签已存在，更新内容
        styleTag.textContent = cssContent;
    } else {
        // 创建新的 style 标签
        styleTag = document.createElement('style');
        styleTag.id = `YUE_FONTSETTING_WIDGET-style-letinfont-${letinfontID}`;
        styleTag.type = 'text/css';
        styleTag.textContent = cssContent;
        
        // 插入到 head 最前面
        document.head.insertBefore(styleTag, document.head.firstChild);
    }
}

Widget.prototype.letinfontNo = function (letinfontID) {
    const styleTag = document.getElementById(`YUE_FONTSETTING_WIDGET-style-letinfont-${letinfontID}`);
    if (styleTag) {
        styleTag.parentNode.removeChild(styleTag);
    }
}

Widget.prototype.setffbyid = function (sfID, sfziti) {
    const element = document.getElementById(sfID);
    if (element) {
        element.style.setProperty('font-family', sfziti, 'important');
    }
}

exports.types = types
exports.widget = Widget