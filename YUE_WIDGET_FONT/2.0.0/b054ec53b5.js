/**
 * @author: 何我寻月
 * 来自 Yue 控件库
 */

const methodBlockColor = ' #2FD16C'
const createBlockColor = ' #68E396'
const returnBlockColor = ' #F4AE3B'

var document = this.document
var window = this.window

const defaultFontUrl = [{
    key:'鸿蒙常规体',
    value: 'https://cdn.yuntower.cn/font/HarmonyOS Sans/HarmonyOS_Sans/HarmonyOS_Sans_Regular.ttf'
},{
    key:'鸿蒙紧缩常规体',
    value:'https://cdn.yuntower.cn/font/HarmonyOS Sans/HarmonyOS_Sans_Condensed/HarmonyOS_Sans_Condensed_Regular.ttf'
},{
    key:'鸿蒙紧缩常规斜体',
    value:'https://cdn.yuntower.cn/font/HarmonyOS Sans/HarmonyOS_Sans_Condensed_Italic/HarmonyOS_Sans_Condensed_Regular_Italic.ttf'
},{
    key:'鸿蒙常规斜体',
    value:'https://cdn.yuntower.cn/font/HarmonyOS Sans/HarmonyOS_Sans_Italic/HarmonyOS_Sans_Regular_Italic.ttf'
},{
    key:'鸿蒙简体中文常规体',
    value:'https://cdn.yuntower.cn/font/HarmonyOS Sans/HarmonyOS_Sans_SC/HarmonyOS_Sans_SC_Regular.ttf'
},{
    key:'鸿蒙繁体中文常规体',
    value:'https://cdn.yuntower.cn/font/HarmonyOS Sans/HarmonyOS_Sans_TC/HarmonyOS_Sans_TC_Regular.ttf'
},{
    key:'MiSans Regular',
    value:'https://cdn.yuntower.cn/font/MiSans/woff2/MiSans-Regular.woff2'
},{
    key:'MiSans Bold',
    value:'https://cdn.yuntower.cn/font/MiSans/woff2/MiSans-Bold.woff2'
},{
    key:'MiSans Heavy',
    value:'https://cdn.yuntower.cn/font/MiSans/woff2/MiSans-Heavy.woff2'
},{
    key:'MiSans Thin',
    value:'https://cdn.yuntower.cn/font/MiSans/woff2/MiSans-Thin.woff2'
},{
    key:'MiSans VF',
    value:'https://cdn.yuntower.cn/font/MiSans/MiSans VF.ttf'
},{
    key:'平方韶华体',
    value:'https://static.codemao.cn/flowchunkflex/S1U79dSZxx.ttf?hash=Fpf_r16p6BBs5XEq0Jsak0rcKT5l'
}]

const types = {
    title: "字体库",
    type: "YUE_WIDGET_FONT",
    icon: "https://static.codemao.cn/flowchunkflex/r1zp0DBZee.svg?hash=FjE_hbQ4A0coI-pzglMQj67q63cC",
    docs: { url: 'https://www.yuque.com/yuqueyonghuhelltp/yuekj/ampt5x1s7al91zsl' },
    version: "2.0.0",
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [
        { key: 'fontUrl', label: '字体链接', valueType: 'array', editorType:'HttpHeader', defaultValue: defaultFontUrl,
            blockOptions: { generateBlock: false },
        },
    ],
    events: [],
    methods: [
        {
            key: "letFontIn",
            label: '引入',
            tooltip: '将字体引入，字体<名称>自定义，<链接>可填字体名称（需已在属性面板配置）或字体链接；\n<id>是字体的标识，请填英文。',
            params: [
                { key: "fontName", label: '名称', valueType: 'string', defaultValue: '字体名称' },
                { key: "fontUrl", label: '链接', valueType: 'string', defaultValue: '鸿蒙常规体' },
                { key: "fontId", label: 'id', valueType: 'string', defaultValue: 'id' },
            ],
            blockOptions: { color: methodBlockColor, callMethodLabel: false, line: '引入字体' },
        },
        {
            key: "letFontOut",
            label: '取消引入',
            tooltip: '取消引入对应<id>的字体。',
            params: [
                { key: "fontId", label: 'id', valueType: 'string', defaultValue: 'id' },
            ],
            blockOptions: { color: methodBlockColor, callMethodLabel: false },
        },
        {
            key: "letFontGlobal",
            label: '全局',
            tooltip: '全局应用字体，<名称>填字体名称（需已引入）。',
            params: [
                { key: "fontName", label: '名称', valueType: 'string', defaultValue: '字体名称' },
            ],
            blockOptions: { color: methodBlockColor, callMethodLabel: false, line: '全局字体' },
        },
        {
            key: "letFontGlobalNo",
            label: '取消全局',
            tooltip: '取消全局应用字体。',
            params: [],
            blockOptions: { color: methodBlockColor, callMethodLabel: false },
        },
        {
            key: "letFontWidget",
            label: '控件',
            tooltip: '设置控件的字体（不含控件内部：如果内部设置了字体，就不会覆盖内部的字体），如果控\n件自带<自定义字体>，优先用自带。<名称>填字体名称（需已引入）；<控件id>填要设\n置的控件的id。',
            params: [
                { key: "widgetId", label: 'ID', valueType: 'string', defaultValue: 'WIDGET_ID' },
                { key: "fontName", label: '名称', valueType: 'string', defaultValue: '字体名称' },
            ],
            blockOptions: { color: methodBlockColor, callMethodLabel: false, line: '控件字体' },
        },
    ],
}


class Widget extends VisibleWidget {
    constructor(props) {
        super(props)
        Object.assign(this, props)
    }

    letFontIn(fontName, fontUrl, fontId) {
        // 检查参数是否存在
        if (!fontUrl || !fontId || !fontName) {
            this.widgetWarn('请正确填写<引入>字体的名称、链接、id。');
            return;
        }

        // 确保 this.fontUrl 存在且是数组
        if (!Array.isArray(this.fontUrl)) {
            this.fontUrl = [];
        }

        // 查找匹配的字体URL
        let finalFontUrl = fontUrl;
        const matchedFont = this.fontUrl.find(item => item.key === fontUrl);
        if (matchedFont && matchedFont.value) {
            finalFontUrl = matchedFont.value;
        }

        // 生成样式ID
        const styleId = (this.__widgetId || '') + '_letIn' + fontId;

        // 创建或更新样式标签
        let styleTag = document.getElementById(styleId);
        if (!styleTag) {
            styleTag = document.createElement('style');
            styleTag.id = styleId;
            document.head.appendChild(styleTag);
        }

        // 创建字体样式
        const fontFaceRule = `
        @font-face {
        font-family: '${fontName}';
        src: url('${finalFontUrl}');
        font-display: swap;
        }
        `;

        // 更新样式内容
        styleTag.textContent = fontFaceRule;
    }


    letFontOut(fontId) {
        // 检查参数是否存在
        if (!fontId) {
            this.widgetWarn('请正确填写<取消引入>字体的<id>。');
            return;
        }

        // 生成完整的样式标签ID
        const styleId = (this.__widgetId || '') + '_letIn' + fontId;

        // 查找样式标签
        const styleTag = document.getElementById(styleId);

        // 如果找到则删除
        if (styleTag) {
            styleTag.parentNode.removeChild(styleTag);
        } else {
            this.widgetWarn(`id为 "${fontId}" 的字体未找到。`);
        }
    }


    letFontGlobal(fontName) {
        // 检查参数
        if (!fontName) {
            this.widgetWarn('请正确填写设置<全局>字体的<名称>。');
            return;
        }

        // 生成样式标签 ID
        const styleId = (this.__widgetId || '') + '_body';

        // 查找或创建 <style> 标签
        let styleTag = document.getElementById(styleId);
        if (!styleTag) {
            styleTag = document.createElement('style');
            styleTag.id = styleId;
            document.head.appendChild(styleTag);
        }

        // 设置全局字体样式（通配符 * + !important）
        styleTag.textContent = `
            * {
            font-family: ${fontName} !important;
            }
        `;
    }


    letFontGlobalNo() {
        // 生成样式标签 ID
        const styleId = (this.__widgetId || '') + '_body';

        // 查找对应的 style 标签
        const styleTag = document.getElementById(styleId);

        // 如果存在则删除
        if (styleTag) {
            styleTag.remove();
        }
    }


    letFontWidget(widgetId, fontName) {
        if (!widgetId || !fontName) {
            this.widgetWarn('请正确填写设置<控件>字体的ID、名称。');
            return;
        }

        const widget = document.getElementById(widgetId);
        if (!widget) {
            this.widgetWarn(`ID为 "${widgetId}" 的控件未找到。`);
            return;
        }

        // 直接设置 font-family（无论是否已存在）
        widget.style.fontFamily = fontName;
    }
}

exports.types = types
exports.widget = Widget