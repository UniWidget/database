/**
 * @author: 何我寻月
 * 来自 Yue 控件库
 */

const methodBlockColor = ' #2FD16C'
const createBlockColor = ' #62B7FF'
const returnBlockColor = ' #F4AE3B'

var document = this.document
var window = this.window

const types = {
    title: "导航块",
    type: "YUE_NAV_BLOCK_WIDGET",
    icon: "https://static.codemao.cn/pickduck/r1MZ-ebyel.svg?hash=FuxKeAhmscqtCAx4ZMpg_ggjJkEV",
    docs: { url: 'https://www.yuque.com/yuqueyonghuhelltp/yuekj/gt0wcylnl0dzl2bq' },
    version: "1.0.1",
    isInvisibleWidget: false,
    isGlobalWidget: false,
    hasAnyWidget: true,
    properties: [
        { key: '__width', label: '宽度', valueType: 'number', defaultValue: 76 },
        { key: '__height', label: '高度', valueType: 'number', defaultValue: 30 },
        { key: 'radius', label: '圆角', valueType: 'number', defaultValue: 50, unit: '像素' },
        { key: 'hengShu', label: '横竖', valueType: 'string', defaultValue: 'heng',
            dropdown: [
                { label: '横排', value: 'heng' },
                { label: '竖排', value: 'shu' },
            ],
        },
        { key: 'bgColor', label: '背景颜色', valueType: 'string', editorType: 'Color', defaultValue: '#FFFFFFFF' },
        { key: 'lineColor', label: '线条颜色', valueType: 'string', editorType: 'Color', defaultValue: '#EBEBEBFF' },
        { key: 'gapgap', label: '边距', valueType: 'number', defaultValue: 10, unit: '像素' },
        { key: 'gap', label: '间距', valueType: 'number', defaultValue: 10, unit: '像素' },
        { key: 'iconDaxiao', label: '图标大小', valueType: 'number', defaultValue: 22, unit: '像素' },
        { key: 'iconArray', label: '图标对象列表', valueType: 'string', editorType: 'TextArea', defaultValue: '[{"类型":"图标","值":"M5 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4m7 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4m7 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4","颜色":"#000000"},{"类型":"图标","值":"m12 14.122 5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879 6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z","颜色":"#000000"}]' },
        { key: 'viewBox', label: '图标区域viewbox', valueType: 'string', defaultValue: '0 0 24 24' },
        { key: 'wenziDaxiao', label: '文字大小', valueType: 'number', defaultValue: 16, unit: '像素' },
        { key: 'wenziWeight', label: '文字字重', valueType: 'number', defaultValue: 700 },
        { key: 'fontFamily', label: '自定义字体', valueType: 'string', defaultValue: '' },
    ],
    events: [
        { 
            key: 'on', 
            label: '被', 
            subTypes: [
                {
                    key: 'event',
                    dropdown: [
                        { label: '点击', value: 'Click' },
                        { label: '按下', value: 'Down' },
                        { label: '松开', value: 'Up' },
                        { label: '右键点击', value: 'Contextmenu' },
                    ]
                }
            ],
            params: [],
        },
        {
            key: 'onEventIcon',
            label: '被点击',
            params: [
                { key: 'id', label: 'id', valueType: 'string', }
            ],
        },
    ],
    methods: [
        {
            key: "getWidgetId",
            label: '的 ID',
            valueType: 'string',
            params: [],
            blockOptions: { color: returnBlockColor, callMethodLabel: false },
        },
        {
            key: "getWidgetIdMore",
            label: '的',
            valueType: 'string',
            params: [
                { key: "num", label: '第', valueType: 'number', defaultValue: 1, labelAfter:'项的 ID' }
            ],
            blockOptions: { color: returnBlockColor, callMethodLabel: false },
        },
    ],
}


class Widget extends VisibleWidget {
    constructor(props) {
        super(props)
        Object.assign(this, props)
    }

    // 点击事件
    onEvent(name) {
        this.emit('on' + name)
    }

    onEventIconFont(id) {
        this.emit('onEventIcon', id )
    }

    /**
     * 解析SVG图标数据（JSX版本）
     * @param {Array|string} input - 接受数组或JSON字符串
     * @return {JSX.Element[]} 返回JSX元素数组
     */
    parseSvgIcons(input) {
        try {
            // 1. 安全转换输入为数组
            const items = (() => {
                if (Array.isArray(input)) return input;
                if (typeof input === 'string') {
                    try { return JSON.parse(input); } 
                    catch { return []; }
                }
                return [];
            })();
        
            // 2. 过滤无效数据项
            const validItems = items.filter(item => 
                item && 
                typeof item === 'object' &&
                (item.类型 === '图标' || item.类型 === '文字') &&
                item.值 &&
                item.颜色
            );
        
            // 3. 生成JSX元素
            return validItems.map((item, index) => {
                const sanitizedValue = this.escapeHtml(item.值);
                const sanitizedColor = /^#[0-9A-F]{6}$|^[a-z]+$/i.test(item.颜色) 
                    ? item.颜色 
                    : 'black';
                const elementId = `Yue_${this.__widgetId}_${index}`;

                if (item.类型 === '图标') {
                    return (
                        <svg
                            key={elementId}
                            id={elementId}
                            viewBox={this.viewBox}
                            width={this.iconDaxiao}
                            height={this.iconDaxiao}
                            onClick={() => this.onEventIconFont(elementId)}
                        >
                            <path d={sanitizedValue} fill={sanitizedColor} />
                        </svg>
                    );
                } else {
                    return (
                        <span 
                            key={elementId}
                            id={elementId}
                            style={{ color: sanitizedColor }}
                            onClick={() => this.onEventIconFont(elementId)}
                        >
                            {sanitizedValue}
                        </span>
                    );
                }
            });
        } catch {
            return [];
        }
    }
    
    // 辅助函数：简单HTML转义
    escapeHtml(str) {
        return str.toString()
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    }


    // 渲染控件
    render() { return (
        <div className={`Yue_${this.__widgetId}`}>
            
            <div onClick={() => this.onEvent('Click')} onMouseDown={() => this.onEvent('Down')} onMouseUp={() => this.onEvent('Up')} onContextMenu={() => this.onEvent('Contextmenu')} className={`Yue_${this.__widgetId}_div`}>
                <div className={`Yue_${this.__widgetId}_icondiv`}>
                    {this.parseSvgIcons(this.iconArray)}
                </div>
            </div>

            <style>
                {`
                    .Yue_${this.__widgetId} {
                        width: 100%;
                        height: 100%;
                    }

                    .Yue_${this.__widgetId}_div {
                        width: 100%;
                        height: 100%;
                        background-color: ${this.bgColor};
                        border: 1px solid ${this.lineColor};
                        border-radius: ${this.radius}px;
                        padding: ${this.hengShu === 'heng' ? `0 ${this.gapgap}px` : `${this.gapgap}px 0`};
                    }

                    .Yue_${this.__widgetId}_icondiv {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: ${this.hengShu === 'heng' ? 'row' : 'column'};
                        gap: ${this.gap}px;
                        align-items: center;
                        font-size: ${this.wenziDaxiao}px;
                        font-weight: ${this.wenziWeight};
                        white-space: nowrap;
                        font-family: ${this.fontFamily}, sans-serif;
                    }

                    .Yue_${this.__widgetId}_icondiv > * {
                        cursor: pointer;
                        transition: filter 0.15s ease;
                    }

                    .Yue_${this.__widgetId}_icondiv > *:active {
                        filter: brightness(0.85);
                    }
                `}
            </style>
        </div>
    )}

    // 返回控件的 ID
    getWidgetId() { return this.__widgetId }

    getWidgetIdMore(number) {
        return `Yue_${this.__widgetId}_${number - 1}`;
    }
}

exports.types = types
exports.widget = Widget