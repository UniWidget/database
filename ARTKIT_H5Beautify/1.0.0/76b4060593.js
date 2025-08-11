// ARTKIT 文档链接
// 原名称：Appcraft界面美化 作者：冷鱼闲风
// 获取当前环境的 document 对象
var document = this.document;
// 获取当前环境的 window 对象
var window = this.window;

/**
 * 定义组件类型对象，包含组件的基本信息、属性、方法和事件等
 * @type {Object}
 */
const types = {
    // 标识该组件为不可见组件
    isInvisibleWidget: true,
    // 组件类型名称
    type: "ARTKIT_H5Beautify",
    // 组件图标链接
    icon: "https://static.codemao.cn/bcx/HJQDN4Rxxg.svg?hash=FlKq277lGb8Rf6JC7Xde8fapiM75",
    // 组件标题
    title: "H5美化",
    // 组件版本号
    version: "1.0.0",
    // 组件文档链接
    docs: { url: "https://www.yuque.com/apanzinc/artkit" },
    // 标识该组件为全局组件
    isGlobalWidget: true,
    // 组件属性列表
    properties: [],
    // 组件方法列表
    methods: [],
    // 组件事件列表
    events: [],
};
// 指定组件支持的平台为 web
types.platforms = ["web"]

/**
 * 定义组件类，继承自 InvisibleWidget
 * @class Widget
 * @extends InvisibleWidget
 */
class Widget extends InvisibleWidget {
    /**
     * 构造函数，初始化组件实例
     * @param {Object} props - 组件属性
     */
    constructor(props) {
        // 调用父类构造函数
        super(props);
    }
}

// 向组件的方法列表中添加多个方法定义
types['methods'].push({
    // 方法键名
    key: 'light_and_dark',
    // 方法显示名称
    label: '前往 CoCo 制作按钮',
    // 方法参数列表
    params: [{
        // 参数键名
        key: 'is_dark',
        // 参数显示名称
        label: '隐藏',
        // 参数值类型
        valueType: 'boolean',
        // 参数默认值
        defaultValue: true,
    }, ],
}, {
    key: 'BigBackground',
    label: '替换主背景',
    params: [{
        key: 'bg',
        defaultValue: 'https://img.tt98.com/d/file/96kaifa/2019062118246693/004.jpg',
        valueType: 'string',
    }, ],
}, {
    key: 'LeftDistance',
    label: '调整手机位置',
    params: [{
        key: 'bg',
        defaultValue: -128,
        valueType: 'number',
        label: '左边距',
    }, {
        key: 'bg1',
        defaultValue: -50,
        valueType: 'number',
        label: '上边距',
    }, {
        key: 'bg2',
        defaultValue: 1.2,
        valueType: 'number',
        label: '手机缩放比例',
    }, ],

}, {
    key: 'PhysicalFunctionality',
    label: '切换手机物理栏显示',
    params: [{
        key: 'is_dark',
        label: '隐藏',
        valueType: 'boolean',
        defaultValue: true,
    }, ],
}, {
    key: 'PhoneCase',
    label: '切换手机壳显示',
    params: [{
        key: 'is_dark',
        label: '隐藏',
        valueType: 'boolean',
        defaultValue: true,
    }, ],
}, {
    key: 'PhoneFrame',
    label: '自定义手机壳边框',
    params: [{
        key: 'weigt',
        label: '边框宽度',
        valueType: 'number',
        defaultValue: 1,
    }, {
        key: 'color',
        label: '边框颜色',
        valueType: 'color',
        defaultValue: '#fb0404',
    }, {
        key: 'yuan',
        label: '边框圆角',
        valueType: 'number',
        defaultValue: 25,
    }, ],
}, {
    key: 'PhoneIframe',
    label: '调整手机屏幕尺寸',
    params: [{
        key: 'w',
        label: '宽度(px,%)',
        valueType: 'string',
        defaultValue: 'calc(100% - 56px)',
    }, {
        key: 'h',
        label: '高度(px,%)',
        valueType: 'string',
        defaultValue: 'calc(100% - 76px)',
    }, ],
})

/**
 * 隐藏或显示 CoCo 制作按钮
 * @param {boolean} is_dark - 是否隐藏按钮
 */
Widget.prototype.light_and_dark = function(is_dark) {
    // 根据 is_dark 和 GetQueryString() 的结果隐藏按钮
    is_dark ? GetQueryString() ? document.querySelector("#root > div > div.styles_appUrlBtn__2S9g4")
        .style = "display:none" : document.querySelector("#root > div > div.styles_appUrlBtn__1rsjt")
        .style = "display:none" : null;
}

/**
 * 替换主背景
 * @param {string} bg - 背景图片的 URL
 */
Widget.prototype.BigBackground = function(bg) {
    // 设置主容器的背景图片
    document.querySelector("#root > div")
        .style = 'background-image: url(' + bg + ');';
}

/**
 * 调整手机位置
 * @param {number} bg - 左边距百分比
 * @param {number} bg1 - 上边距百分比
 * @param {number} bg2 - 手机缩放比例
 */
Widget.prototype.LeftDistance = function(bg, bg1, bg2) {
    // 根据 GetQueryString() 的结果设置手机位置
    GetQueryString() ? document.querySelector("#root > div > div.styles_main__Simke")
        .style = 'transform: translate(' + bg + '%, ' + bg1 + '%) scale(' + bg2 + ');left: 50%;' : document.querySelector("#root > div > div.styles_main__VRzeV")
        .style = 'transform: translate(' + bg + '%, ' + bg1 + '%) scale(' + bg2 + ');left: 50%;';
}

/**
 * 切换手机物理栏显示
 * @param {boolean} is_dark - 是否隐藏物理栏
 */
Widget.prototype.PhysicalFunctionality = function(is_dark) {
    // 根据 is_dark 和 GetQueryString() 的结果隐藏物理栏
    is_dark ? GetQueryString() ? document.querySelector("#root > div > div.styles_main__Simke > div.styles_emulatorWrapper__TNDc-")
        .style = 'display:none' : document.querySelector("#webPlayer > div.styles_emulatorWrapper__1U-3v")
        .style = 'display:none' : null;
}

/**
 * 切换手机壳显示
 * @param {boolean} is_dark - 是否隐藏手机壳
 */
Widget.prototype.PhoneCase = function(is_dark) {
    // 根据 is_dark 和 GetQueryString() 的结果清除手机壳背景图片
    is_dark ? GetQueryString() ? document.querySelector("#root > div > div.styles_main__Simke > div.styles_deviceFrame__3X4QA")
        .style = 'background-image: url();' : document.querySelector("#webPlayer > div.styles_deviceFrame__266Il")
        .style = 'background-image: url();' : null;
}

/**
 * 自定义手机壳边框
 * @param {number} weigt - 边框宽度（像素）
 * @param {string} color - 边框颜色
 * @param {number} yuan - 边框圆角（像素）
 */
Widget.prototype.PhoneFrame = function(weigt, color, yuan) {
    // 设置手机屏幕的边框样式
    document.querySelector("#SCREEN_27hxQK2x7")
        .style = 'border: ' + weigt + 'px solid ' + color + ';border-radius: ' + yuan + 'px;';
}

/**
 * 调整手机屏幕尺寸
 * @param {string} w - 屏幕宽度
 * @param {string} h - 屏幕高度
 */
Widget.prototype.PhoneIframe = function(w, h) {
    // 根据 GetQueryString() 的结果设置容器样式
    GetQueryString() ? document.querySelector("#root > div > div.styles_main__Simke")
        .style = 'display: flex;justify-content: center;/*垂直居中*/align-items: center;/*水平居中*/transform: translate(-50%, -50%) scale(1);left: 50%;width: 66vw;height: height: 80vh;' : document.querySelector("#webPlayer")
        .style = 'display: flex;justify-content: center;/*垂直居中*/align-items: center;/*水平居中*/transform: translate(-50%, -50%) scale(1);left: 50%;width: 66vw;height: height: 80vh;';
    // 根据 GetQueryString() 的结果设置播放器包装器的尺寸
    GetQueryString() ? document.querySelector("#root > div > div.styles_main__Simke > div.styles_playerWrapper__3f-SH")
        .style = 'width: ' + w + ';height: ' + h + ';' : document.querySelector("#webPlayer")
        .style = 'width: ' + w + ';height: ' + h + ';'
}

/**
 * 获取 URL 查询参数中 channel 的值并进行判断
 * @returns {number|null} - 如果 channel 为 h5 返回 0，否则返回 1；未找到返回 null
 */
function GetQueryString() {
    // 定义正则表达式用于匹配 channel 参数
    var reg = new RegExp("(^|&)channel=([^&]*)(&|$)");
    // 获取 URL 查询字符串并去除开头的 ?
    var r = window.location.search.substr(1)
        .match(reg);

    if(r != null) {
        if(r[2] == 'h5') {
            return 0;
        } else {
            return 1;
        }
    } else {
        return null;
    }
}

// 导出组件类型对象
exports.types = types;
// 导出组件类
exports.widget = Widget;