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
    version: "1.2.0",
    isInvisibleWidget: true,
    isGlobalWidget: false,
    properties: [
        { key: 'startId', label: '起始控件ID', valueType: 'string', defaultValue: '' },
        { key: 'endId', label: '末尾控件ID', valueType: 'string', defaultValue: '' },
        { key: 'noHuaDongTiao', label: '隐藏滑动条', valueType: 'boolean', defaultValue: true },
        {
            key: 'huaDongTiaoXorY', label: '滑动方向', valueType: 'string', defaultValue: 'xandy',
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
            blockOptions: { color: returnBlockColor, callMethodLabel: false, space: 40 },
        },
        {
            key: "getScrollLength",
            label: '获取滑动条的长度',
            valueType: 'number',
            params: [
                { key: "id", label: 'id', valueType: 'string', defaultValue: '' },
                {
                    key: "d", label: '方向', valueType: 'string', defaultValue: 'vertical',
                    dropdown: [
                        { label: '垂直', value: 'vertical' },
                        { label: '水平', value: 'horizontal' },
                    ],
                },
            ],
            blockOptions: { color: returnBlockColor, callMethodLabel: false, space: 40 },
        },
        {
            key: "getWidgetId",
            label: '的滑动框的 ID',
            valueType: 'string',
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
            // 参数验证
            if (!this.startId || !this.endId) {
                this.widgetError('必须提供起始和末尾控件ID');
                throw new Error('缺少startId或endId');
            }
            if (!this.boxWidth || !this.boxHeight) {
                this.widgetError('必须提供滑动框宽度和高度');
                throw new Error('缺少boxWidth或boxHeight');
            }

            // 获取DOM元素
            const startEl = document.getElementById(this.startId);
            const endEl = document.getElementById(this.endId);
            if (!startEl || !endEl) {
                this.widgetError(`无法找到ID为${this.startId}或${this.endId}的元素`);
                throw new Error('元素未找到');
            }

            // 收集需要包裹的元素
            const elements = [];
            let el = startEl, found = false, maxIter = 1000;
            while (el && !found && maxIter--) {
                elements.push(el);
                if (el === endEl || el.children[0] === endEl) found = true;
                el = el.nextElementSibling ? el.nextElementSibling : el.parentNode.nextElementSibling;
            }
            if (!found) throw new Error('无法在起始和末尾元素之间建立连接');

            // 创建/获取容器
            const containerId = `Yue_${this.__widgetId}`;
            let container = document.getElementById(containerId);
            if (!container) {
                container = document.createElement('div');
                container.id = containerId;
                startEl.parentNode?.insertBefore(container, startEl);
                elements.forEach(el => container.appendChild(el));
            }

            // 设置容器样式
            const toPx = v => typeof v === 'number' ? `${v}px` : (/^\d+$/.test(v) ? `${v}px` : v);
            Object.assign(container.style, {
                position: 'absolute',
                left: toPx(this.boxX || 0),
                top: toPx(this.boxY || 0),
                width: toPx(this.boxWidth),
                height: toPx(this.boxHeight),
                boxSizing: 'border-box',
                background: 'transparent',
                overflowX: this.huaDongTiaoXorY === 'y' ? 'hidden' : 'scroll',
                overflowY: this.huaDongTiaoXorY === 'x' ? 'hidden' : 'scroll',
                ...(this.noHuaDongTiao && {
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                })
            });

            // 隐藏滚动条样式
            if (this.noHuaDongTiao && !document.getElementById(`style_${containerId}`)) {
                const style = document.createElement('style');
                style.id = `style_${containerId}`;
                style.textContent = `#${containerId}::-webkit-scrollbar{display:none}`;
                document.head.appendChild(style);
            }


            // 调整子元素位置
            if (container.children.length) {
                const firstTop = parseFloat(getComputedStyle(container.children[0]).top) || 0;
                
                Array.from(container.children).forEach(child => {
                    // 检查是否为无ID但有class的div
                    if (child.tagName === 'DIV' && 
                        !child.id && 
                        child.hasAttribute('class') && 
                        child.children.length > 0) {
                        
                        // 找出这个div中第一个有ID的子元素
                        const childWithId = Array.from(child.children).find(el => el.id);
                        if (childWithId) {
                            const style = getComputedStyle(childWithId);
                            Object.assign(childWithId.style, {
                                position: 'absolute',
                                top: `${(parseFloat(style.top) || 0) - firstTop}px`,
                                left: style.left
                            });
                        }
                    } else {
                        // 正常处理其他元素
                        const style = getComputedStyle(child);
                        Object.assign(child.style, {
                            position: 'absolute',
                            top: `${(parseFloat(style.top) || 0) - firstTop}px`,
                            left: style.left
                        });
                    }
                });
            }


            // 嵌套滚动处理
            const handleWheel = (e, el) => {
                const canScroll = {
                    up: el.scrollTop > 0,
                    down: el.scrollTop < el.scrollHeight - el.clientHeight,
                    left: el.scrollLeft > 0,
                    right: el.scrollLeft < el.scrollWidth - el.clientWidth
                };

                const isVertical = Math.abs(e.deltaY) > Math.abs(e.deltaX);
                const dir = isVertical ?
                    (e.deltaY < 0 ? 'up' : 'down') :
                    (e.deltaX < 0 ? 'left' : 'right');

                if (canScroll[dir]) {
                    e.stopPropagation();
                    e.preventDefault();
                    el[isVertical ? 'scrollTop' : 'scrollLeft'] += isVertical ? e.deltaY : e.deltaX;
                    return true;
                }
                return false;
            };

            // 检测可滚动子元素
            container.querySelectorAll('*').forEach(child => {
                if (child.scrollHeight > child.clientHeight || child.scrollWidth > child.clientWidth) {
                    child.addEventListener('wheel', e => handleWheel(e, child), { passive: false });
                }
            });

            // 容器滚动处理
            if (this.noHuaDongTiao) {
                container.addEventListener('wheel', e => {
                    const target = document.elementFromPoint(e.clientX, e.clientY);
                    if (!target?.closest(`#${containerId} [scrollable]`)) {
                        if (this.huaDongTiaoXorY === 'x') {
                            container.scrollLeft += e.deltaY;
                        } else if (this.huaDongTiaoXorY === 'y') {
                            container.scrollTop += e.deltaY;
                        } else {
                            container.scrollLeft += e.deltaX;
                            container.scrollTop += e.deltaY;
                        }
                        e.preventDefault();
                    }
                }, { passive: false });
            }

            return container;
        } catch (error) {
            console.error('sheZhiHuoGengXin错误:', error);
            this.widgetError(`执行出错:${error.message}`);
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

    // 获取滑动条长
    getScrollLength(containerId, direction = 'vertical') {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`找不到ID为${containerId}的元素`);
            return 0;
        }

        // 检查元素是否可滚动
        const isScrollable = direction === 'vertical'
            ? container.scrollHeight > container.clientHeight
            : container.scrollWidth > container.clientWidth;

        if (!isScrollable) return 0;

        try {
            if (direction === 'vertical') {
                return Math.max(0, container.scrollHeight - container.clientHeight);
            } else if (direction === 'horizontal') {
                return Math.max(0, container.scrollWidth - container.clientWidth);
            }
        } catch (error) {
            console.error('计算滚动长度时出错:', error);
            return 0;
        }

        console.error('方向参数必须是"vertical"或"horizontal"');
        return 0;
    }

    // 返回控件的 ID
    getWidgetId() { return `Yue_${this.__widgetId}` }
}

exports.types = types
exports.widget = Widget