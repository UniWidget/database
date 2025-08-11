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
    title: "滑动组控件框",
    type: "YUE_WIDGET_GROUP_SCROLL_BOX_WIDGET",
    icon: "https://static.codemao.cn/flowchunkflex/Bym1u3yggg.svg?hash=FlWDr8m_faIa2_whAbsisNsise30",
    docs: { url: 'https://www.yuque.com/yuqueyonghuhelltp/yuekj/zaixzy912s4tncl1' },
    version: "1.0.0",
    isInvisibleWidget: true,
    isGlobalWidget: false,
    properties: [
        { key: 'startId', label: '起始控件ID', valueType: 'string', defaultValue: '' },
        { key: 'endId', label: '末尾控件ID', valueType: 'string', defaultValue: '' },
        { key: 'noHuaDongTiao', label: '隐藏滑动条', valueType: 'boolean', defaultValue: true },
        { key: 'huaDongTiaoXorY', label: '滑动方向', valueType: 'string', defaultValue: 'xandy',
            dropdown: [
                { label: 'x和y', value: 'xandy' },
                { label: 'x', value: 'x' },
                { label: 'y', value: 'y' },
            ],
        },
        { key: 'boxWidth', label: '滑动框宽度', valueType: 'number', defaultValue: 300, unit: '像素' },
        { key: 'boxHeight', label: '滑动框高度', valueType: 'number', defaultValue: 500, unit: '像素' },
        { key: 'boxX', label: '滑动框x坐标', valueType: 'number', defaultValue: 0 },
        { key: 'boxY', label: '滑动框y坐标', valueType: 'number', defaultValue: 100 },
    ],
    events: [],
    methods: [
        {
            key: "sheZhiHuoGengXin",
            label: '设置或更新滑动框',
            params: [],
            blockOptions: { color: createBlockColor, callMethodLabel: false, space: 40 },
        },
        {
            key: "letHuaDongTiaoX",
            label: '设置滑动条x坐标',
            params: [
                { key: "x", label: '为', valueType: 'number', defaultValue: 10 },
            ],
            blockOptions: { color: methodBlockColor, callMethodLabel: false },
        },
        {
            key: "letHuaDongTiaoY",
            label: '设置滑动条y坐标',
            params: [
                { key: "y", label: '为', valueType: 'number', defaultValue: 10 },
            ],
            blockOptions: { color: methodBlockColor, callMethodLabel: false, space: 40 },
        },
        {
            key: "getScrollX",
            label: '获取滑动条x坐标',
            valueType: 'number',
            params: [],
            blockOptions: { color: returnBlockColor, callMethodLabel: false },
        },
        {
            key: "getScrollY",
            label: '获取滑动条y坐标',
            valueType: 'number',
            params: [],
            blockOptions: { color: returnBlockColor, callMethodLabel: false },
        },
    ],
}


class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
        Object.assign(this, props);
    }

    sheZhiHuoGengXin() {
        try {
            // ============== 参数验证 ==============
            if (typeof this.startId === 'undefined' || typeof this.endId === 'undefined') {
                this.widgetError('必须提供 起始控件ID 和 末尾控件ID');
                throw new Error('必须提供 startId 和 endId');
            }
            if (typeof this.boxWidth === 'undefined' || typeof this.boxHeight === 'undefined') {
                this.widgetError('必须提供 滑动框宽度 和 滑动框高度');
                throw new Error('必须提供 boxWidth 和 boxHeight');
            }

            // ============== 智能单位处理 ==============
            const addPxIfNeeded = (value) => {
                if (typeof value === 'number') return `${value}px`;
                if (typeof value === 'string' && /^\d+$/.test(value)) return `${value}px`;
                return value;
            };

            // ============== 获取DOM元素 ==============
            const startElement = document.getElementById(this.startId);
            const endElement = document.getElementById(this.endId);

            if (!startElement || !endElement) {
                this.widgetError(`无法找到ID为 ${this.startId} 或 ${this.endId} 的控件`);
                throw new Error(`无法找到ID为 ${this.startId} 或 ${this.endId} 的元素`);
            }

            // ============== 收集需要包裹的元素 ==============
            const elementsToWrap = [];
            let currentElement = startElement;
            let foundEndElement = false;
            const maxIterations = 1000;
            let iterations = 0;

            while (currentElement && !foundEndElement && iterations < maxIterations) {
                elementsToWrap.push(currentElement);
                if (currentElement === endElement) foundEndElement = true;
                currentElement = currentElement.nextElementSibling;
                iterations++;
            }

            if (!foundEndElement) {
                this.widgetError(`无法在 ${this.startId} 和 ${this.endId} 之间找到连续的元素`);
                throw new Error(`无法在 ${this.startId} 和 ${this.endId} 之间找到连续的元素`);
            }

            // ============== 创建/获取容器 ==============
            const containerId = `Yue_${this.__widgetId}`;
            let container = document.getElementById(containerId);

            if (!container) {
                container = document.createElement('div');
                container.id = containerId;
                
                if (startElement.parentNode) {
                    startElement.parentNode.insertBefore(container, startElement);
                } else {
                    this.widgetError('起始控件没有父节点');
                    throw new Error('起始元素没有父节点');
                }
                
                elementsToWrap.forEach(el => {
                    container.appendChild(el);
                });
            }

            // ============== 设置容器样式 ==============
            const containerStyle = {
                position: 'absolute',
                left: addPxIfNeeded(this.boxX || 0),
                top: addPxIfNeeded(this.boxY || 0),
                width: addPxIfNeeded(this.boxWidth),
                height: addPxIfNeeded(this.boxHeight),
                boxSizing: 'border-box',
                background: 'transparent'
            };

            // ============== 滚动行为控制 ==============
            // 1. 先设置允许滚动
            switch (this.huaDongTiaoXorY || 'xandy') {
                case 'x':
                    containerStyle.overflowX = 'scroll';
                    containerStyle.overflowY = 'hidden';
                    break;
                case 'y':
                    containerStyle.overflowX = 'hidden';
                    containerStyle.overflowY = 'scroll';
                    break;
                case 'xandy':
                default:
                    containerStyle.overflow = 'scroll';
                    break;
            }

            // 2. 再处理滚动条可见性
            if (this.noHuaDongTiao) {
                // 隐藏滚动条但保留滚动功能
                containerStyle.scrollbarWidth = 'none'; // Firefox
                containerStyle.msOverflowStyle = 'none'; // IE/Edge
                
                // Webkit浏览器样式
                const styleId = `scrollbar_style_${containerId}`;
                if (!document.getElementById(styleId)) {
                    const style = document.createElement('style');
                    style.id = styleId;
                    style.textContent = `
                        #${containerId}::-webkit-scrollbar {
                            display: none;
                            width: 0;
                            height: 0;
                            background: transparent;
                        }
                        #${containerId} {
                            -ms-overflow-style: none;
                            scrollbar-width: none;
                        }
                    `;
                    document.head.appendChild(style);
                }
            }

            Object.assign(container.style, containerStyle);

            // ============== 调整子元素位置 ==============
            if (container.children.length > 0) {
                const firstChild = container.children[0];
                const firstChildStyle = window.getComputedStyle(firstChild);
                const firstChildTop = parseFloat(firstChildStyle.top) || 0;
                
                Array.from(container.children).forEach(child => {
                    const childStyle = window.getComputedStyle(child);
                    Object.assign(child.style, {
                        position: 'absolute',
                        top: `${(parseFloat(childStyle.top) || 0) - firstChildTop}px`,
                        left: childStyle.left
                    });
                });
            }

            // ============== 添加滚轮事件支持 ==============
            if (this.noHuaDongTiao) {
                container.addEventListener('wheel', (e) => {
                    if (this.huaDongTiaoXorY === 'x') {
                        container.scrollLeft += e.deltaY;
                    } else if (this.huaDongTiaoXorY === 'y') {
                        container.scrollTop += e.deltaY;
                    } else {
                        container.scrollLeft += e.deltaX;
                        container.scrollTop += e.deltaY;
                    }
                    e.preventDefault();
                }, { passive: false });
            }

            return container;

        } catch (error) {
            console.error('sheZhiHuoGengXin 执行出错:', error);
            this.widgetError('执行出错:');
            return null;
        }
    }

    //  设置滚动位置
    letHuaDongTiaoX(scrollX) {
        const container = document.getElementById(`Yue_${this.__widgetId}`);
        container?.scrollTo({ left: scrollX, behavior: 'smooth' });
    }
    
    letHuaDongTiaoY(scrollY) {
        const container = document.getElementById(`Yue_${this.__widgetId}`);
        container?.scrollTo({ top: scrollY, behavior: 'smooth' });
    }

    //  获取滚动位置
    getScrollX() {
        const container = document.getElementById(`Yue_${this.__widgetId}`);
        return container?.scrollLeft || 0;
    }
    
    getScrollY() {
        const container = document.getElementById(`Yue_${this.__widgetId}`);
        return container?.scrollTop || 0;
    }
}

exports.types = types
exports.widget = Widget