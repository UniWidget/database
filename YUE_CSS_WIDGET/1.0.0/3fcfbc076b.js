/**
 * @author: 何我寻月
 * 来自 Yue 控件库
 */

const methodBlockColor = ' #2FD16C'
const createBlockColor = ' #62B7FF'
const returnBlockColor = ' #F4AE3B'

var document = this.document
var window = this.window

let types = {
    title: "CSS控件",
    type: "YUE_CSS_WIDGET",
    icon: "https://static.codemao.cn/pickduck/BJf3bhRTyg.svg?hash=FnpcKqrTKtOVYFRohiQKwqrpnEwz",
    docs: { url: 'https://www.yuque.com/yuqueyonghuhelltp/yuekj/wgvbry5rttxg0tyq' },
    version: "1.0.0",
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    events: [],
    methods: [
        {
            key: "letCssInHeadStyle",
            label: '设置',
            params: [
                { key: "style", label: '样式', valueType: 'string', defaultValue: '', labelAfter: '到'},
                { key: "id", label: 'id为', valueType: 'string', defaultValue: 'id', labelAfter: '的样式'},
            ],
            blockOptions: { color: methodBlockColor },
        },
        {
            key: "noLetCssInHeadStyle",
            label: '删除',
            params: [
                { key: "id", label: 'id为', valueType: 'string', defaultValue: 'id', labelAfter: '的样式'},
            ],
            blockOptions: { color: methodBlockColor ,space: 40 },
        },
        {
            key: "letCssInHeadLink",
            label: '引入',
            params: [
                { key: "style", label: '样式表网址', valueType: 'string', defaultValue: '', labelAfter: '到'},
                { key: "id", label: 'id为', valueType: 'string', defaultValue: 'id', labelAfter: '的引入'},
            ],
            blockOptions: { color: methodBlockColor },
        },
        {
            key: "noLetCssInHeadLink",
            label: '取消',
            params: [
                { key: "id", label: 'id为', valueType: 'string', defaultValue: 'id', labelAfter: '的引入'},
            ],
            blockOptions: { color: methodBlockColor ,space: 40 },
        },
        {
            key: "valueCssInHeadStyle",
            label: '获取',
            valueType: 'string',
            params: [
                { key: "id", label: 'id为', valueType: 'string', defaultValue: 'id', labelAfter: '的样式的样式'},
            ],
            blockOptions: { color: returnBlockColor },
        },
        {
            key: "valueCssInHeadLink",
            label: '获取',
            valueType: 'string',
            params: [
                { key: "id", label: 'id为', valueType: 'string', defaultValue: 'id', labelAfter: '的引入的网址'},
            ],
            blockOptions: { color: returnBlockColor },
        },
    ],
}


class Widget extends VisibleWidget {
    constructor(props) {
        super(props)
        Object.assign(this, props)
    }

    /**
     * 动态添加或更新 <style> 标签到 <head> 中，ID 自动添加前缀
     * @param {string} style - CSS 样式内容
     * @param {string} id - 样式标签的基础 ID（会自动添加前缀）
     */
    letCssInHeadStyle(style, id) {
        if (typeof style !== 'string' || typeof id !== 'string') {
            console.error('letCssInHeadStyle: 参数必须是字符串');
            return;
        }

        const PREFIX = 'YUE_CSS_WIDGET_style-';
        const styleId = PREFIX + id;
        const head = document.head || document.getElementsByTagName('head')[0];

        if (!head) {
            console.error('letCssInHeadStyle: 未找到 <head> 元素');
            return;
        }

        let styleElement = document.getElementById(styleId);

        if (styleElement) {
            // 更新现有样式
            styleElement.textContent = style;
        } else {
            // 创建新样式标签
            styleElement = document.createElement('style');
            styleElement.id = styleId;
            styleElement.type = 'text/css';
            styleElement.textContent = style;
            head.appendChild(styleElement);
        }
    }

    /**
     * 移除动态添加的 CSS <style> 标签（带前缀 YUE_CSS_WIDGET_style-）
     * @param {string} id - 样式标签的基础 ID（自动添加前缀）
     */
    noLetCssInHeadStyle(id) {
        if (typeof id !== 'string') {
            console.warn('noLetCssInHeadStyle: 参数必须是字符串');
            return;
        }

        const styleElement = document.getElementById(`YUE_CSS_WIDGET_style-${id}`);
        styleElement?.remove();
    }

    /**
     * 动态添加/更新外部 CSS 的 <link> 标签（带前缀 YUE_CSS_WIDGET_style-）
     * @param {string} href - 外部样式表的 URL
     * @param {string} id - 样式链接的基础 ID（自动添加前缀）
     */
    letCssInHeadLink(href, id) {
        if (typeof href !== 'string' || typeof id !== 'string') {
            console.warn('letCssInHeadLink: 参数必须是字符串');
            return;
        }

        const linkId = `YUE_CSS_WIDGET_style-${id}`;
        const oldLink = document.getElementById(linkId);

        // 强制重新加载：先移除旧标签（如果存在）
        if (oldLink) oldLink.remove();

        // 创建新 <link> 标签（确保浏览器重新请求）
        const link = document.createElement('link');
        link.id = linkId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = href.includes('?') 
        ? `${href}&_=${Date.now()}` 
        : `${href}?_=${Date.now()}`; // 避免缓存
        document.head.append(link);
    }

    /**
     * 移除动态添加的外部CSS样式表
     * @param {string} id - 要移除的样式表基础ID（自动添加YUE_CSS_WIDGET_style-前缀）
     */
    noLetCssInHeadLink(id) {
        try {
            const styleId = `YUE_CSS_WIDGET_style-${id}`;
            const styleElement = document.getElementById(styleId);
            
            if (styleElement) {
                styleElement.remove();
                console.debug(`已成功移除样式表: ${styleId}`);
            } else {
                console.warn(`未找到要移除的样式表: ${styleId}`);
            }
        } catch (error) {
            console.error(`移除样式表时发生错误:`, error);
        }
    }

    /**
     * 获取指定ID的<style>标签的CSS内容
     * @param {string} id - 样式标签的基础ID（自动添加前缀）
     * @returns {string|null} - 返回CSS内容，未找到则返回null
     */
    valueCssInHeadStyle(id) {
        if (typeof id !== 'string') {
            console.warn('valueCssInHeadStyle: id必须是字符串');
            return null;
        }

        const styleId = `YUE_CSS_WIDGET_style-${id}`;
        const styleElement = document.getElementById(styleId);

        if (!styleElement) {
            console.debug(`未找到ID为 ${styleId} 的<style>标签`);
            return null;
        }

        // 返回textContent（兼容IE）或innerHTML（标准）
        return styleElement.textContent || styleElement.innerHTML;
    }

    /**
     * 获取指定ID的<link>标签的CSS URL
     * @param {string} id - 样式表链接的基础ID（自动添加前缀）
     * @returns {string|null} - 返回CSS的URL，未找到则返回null
     */
    valueCssInHeadLink(id) {
        if (typeof id !== 'string') {
            console.warn('valueCssInHeadLink: id必须是字符串');
            return null;
        }

        const linkId = `YUE_CSS_WIDGET_style-${id}`;
        const linkElement = document.getElementById(linkId);

        if (!linkElement) {
            console.debug(`未找到ID为 ${linkId} 的<link>标签`);
            return null;
        }

        // 返回href属性（去掉可能的时间戳参数）
        const url = linkElement.href;
        return url.split(/[?&]_=/)[0]; // 去除缓存破坏参数
    }
}

exports.types = types
exports.widget = Widget