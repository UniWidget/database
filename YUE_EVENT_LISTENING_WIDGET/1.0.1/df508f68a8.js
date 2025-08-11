/**
 * @author: 何我寻月
 * 来自 Yue 控件库
 */

const methodBlockColor = " #2FD16C"
const createBlockColor = ' #62B7FF'
const returnBlockColor = ' #F4AE3B'

var document = this.document
var window = this.window

let types = {
    title: "事件监听",
    type: "YUE_EVENT_LISTENING_WIDGET",
    icon: "https://static.codemao.cn/pickduck/SyQP4FaTkg.svg?hash=FnZP3U2dMbsNy_pmS4GkNKETXqWm",
    docs: { url: 'https://www.yuque.com/yuqueyonghuhelltp/yuekj/tpg85e4sg3la9d0o' },
    version: "1.0.1",
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    events: [
        {
            key: 'oneClick',
            label: '单击',
            params: [
                { key: 'id', label: 'ID', valueType: 'string', }
            ],
        },
        {
            key: 'twoClick',
            label: '双击',
            params: [
                { key: 'id', label: 'ID', valueType: 'string', }
            ],
        },
        {
            key: 'threeClick',
            label: '三击',
            params: [
                { key: 'id', label: 'ID', valueType: 'string', }
            ],
        },
        {
            key: 'rightClick',
            label: '右键点击/触屏长按',
            params: [
                { key: 'id', label: 'ID', valueType: 'string', }
            ],
        },
        {
            key: 'onClick',
            label: '按下',
            params: [
                { key: 'id', label: 'ID', valueType: 'string', }
            ],
        },
        {
            key: 'offClick',
            label: '放开',
            params: [
                { key: 'id', label: 'ID', valueType: 'string', }
            ],
        },
        {
            key: 'mouse',
            label: '鼠标',
            subTypes: [
                {
                    key: 'event',
                    dropdown: [
                        { label: '按下', value: 'Mousedown' },
                        { label: '放开', value: 'Mouseup' },
                        { label: '单击', value: 'Click' },
                        { label: '双击', value: 'Dblclick' },
                        { label: '三击', value: 'Tripleclick' },
                        { label: '右键点击', value: 'Contextmenu' },
                    ]
                }
            ],
            params: [
                { key: 'x', label: 'X坐标', valueType: 'number', },
                { key: 'y', label: 'Y坐标', valueType: 'number', },
            ],
        },
    ],
    methods: [
        {
            key: "listenOpen",
            label: '监听',
            tooltip: '填一个id，注意不要滥用添加监听',
            params: [
                { key: "id", label: 'ID', valueType: 'string', defaultValue: 'YUE-ID' },
            ],
            blockOptions: { color: methodBlockColor ,space: 40 },
        },
        {
            key: "listenMouse",
            label: '监听鼠标',
            params: [],
            blockOptions: { color: methodBlockColor },
        },
        {
            key: "noListenMouse",
            label: '取消监听鼠标',
            params: [],
            blockOptions: { color: methodBlockColor ,space: 40 },
        },
        {
            key: "noRight",
            label: '禁止右键默认菜单弹出',
            params: [
                { key: "id", label: 'ID', valueType: 'string', defaultValue: 'YUE-ID' },
            ],
            blockOptions: { color: methodBlockColor },
        },
        {
            key: "okRight",
            label: '恢复右键默认菜单弹出',
            params: [
                { key: "id", label: 'ID', valueType: 'string', defaultValue: 'YUE-ID' },
            ],
            blockOptions: { color: methodBlockColor },
        },
        {
            key: "noAllRight",
            label: '禁止所有右键默认菜单弹出',
            params: [],
            blockOptions: { color: methodBlockColor },
        },
        {
            key: "okAllRight",
            label: '恢复所有右键默认菜单弹出',
            params: [],
            blockOptions: { color: methodBlockColor },
        },
    ],
}


class Widget extends InvisibleWidget {
    constructor(props) {
        super(props)
        Object.assign(this, props)

        // 用于存储添加的事件处理器
        this.mouseEventHandlers = {};

        this._rightClickHandler = null; // 显式初始化
    }

    /**
     * 事件监听器
     * @param {string} id - 要监听的元素ID
     */
    listenOpen(id) {
        // 元素获取与校验
        const element = document.getElementById(id);
        if (!element) {
            console.error(`元素查找失败: ID为"${id}"的元素不存在`);
            return;
        }

        // 常量配置
        const CLICK_TIMEOUT = 300;
        const EVENT_MAP = {
            'mousedown': 'onClick', // 按下
            'mouseup': 'offClick', // 放开
            'contextmenu': 'rightClick' // 右键点击
        };

        // 状态变量
        let clickSeries = 0;
        let debounceTimer = null;

        // 1. 绑定基础事件
        Object.entries(EVENT_MAP).forEach(([event, name]) => {
            element.addEventListener(event, (e) => { 
                this.emit(name, id)
                window.qii_click_position = e.currentTarget.getBoundingClientRect(); // 记录位置
            });
        });

        // 2. 智能点击分析 (核心逻辑)
        element.addEventListener('click', (e) => {
            clearTimeout(debounceTimer);
            clickSeries++;

            window.qii_click_position = e.currentTarget.getBoundingClientRect(); // 记录位置
            
            debounceTimer = setTimeout(() => {
                switch (clickSeries) {
                    case 1: this.emit('oneClick', id); break; // 单击
                    case 2: this.emit('twoClick', id); break; // 双击
                    case 3: this.emit('threeClick', id); break; // 三击
                }
                clickSeries = 0;
            }, CLICK_TIMEOUT);
        });
    }

    // 监听鼠标
    listenMouse() {
        let clicks = 0;
        let timer = null;
        const CLICK_DELAY = 300;

        // 事件处理器
        const handleEvent = (type, e) => {
            this.emit(`mouse${type}`, e.clientX, e.clientY);
            // 使用实际点击的目标元素（而非事件绑定的元素）
            const target = e.target || e.srcElement; // srcElement 兼容旧浏览器
            if (target && target.getBoundingClientRect) {
                window.qii_click_position = target.getBoundingClientRect();
            } // 记录位置
        };

        // 点击检测
        const handleClick = (e) => {
            clicks++;
            clearTimeout(timer);
            timer = setTimeout(() => {
                const types = ['Click', 'Dblclick', 'Tripleclick'];
                if (clicks <= 3) handleEvent(types[clicks - 1], e);
                clicks = 0;
            }, CLICK_DELAY);
        };

        // 添加监听
        const handlers = {
            mousedown: (e) => handleEvent('Mousedown', e),
            mouseup: (e) => handleEvent('Mouseup', e),
            click: handleClick,
            contextmenu: (e) => handleEvent('Contextmenu', e)
        };

        Object.entries(handlers).forEach(([event, handler]) => {
            document.addEventListener(event, handler);
            // 记录事件处理器
            this.mouseEventHandlers[event] = handler;
        });

    }

    // 移除鼠标事件监听
    noListenMouse() {
        Object.entries(this.mouseEventHandlers).forEach(([event, handler]) => {
            document.removeEventListener(event, handler);
        });
        // 清空记录
        this.mouseEventHandlers = {};
    }


    // 禁止对应 id 元素的右键默认菜单弹出
    noRight(id) {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('contextmenu', function (e) {
                e.preventDefault(); // 阻止右键菜单的默认行为
            });
        }
    }

    // 恢复对应 id 元素的右键默认菜单弹出
    okRight(id) {
        const element = document.getElementById(id);
        if (element) {
            element.removeEventListener('contextmenu', function (e) {
                e.preventDefault();
            });
        }
    }


    // 全局右键
    noAllRight() {
        this._rightClickHandler = (e) => e.preventDefault();
        document.addEventListener('contextmenu', this._rightClickHandler);
    }
    
    okAllRight() {
        if (this._rightClickHandler) {
            document.removeEventListener('contextmenu', this._rightClickHandler);
            this._rightClickHandler = null;
        }
    }
}

exports.types = types
exports.widget = Widget