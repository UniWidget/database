/**
 * @author: 琦琦
 * 来自 Qii 控件库
 */

const methodBlockColor = ' #2C9AFF'
const createBlockColor = ' #62B7FF'
const returnBlockColor = ' #F4AE3B'

var document = this.document
var window = this.window

let types = {
    title: "滚动文本",
    type: "QII_TEXT_SCROLL_WIDGET",
    icon: "https://static.bcmcdn.com/coco/player/unstable/H11F4qv2yx.image/png?hash=FtsH7qOkkQeW4_S0ivka2eWPE8lz",
    docs: { url: 'https://www.yuque.com/yuqueyonghuslrsu6/qcqduw/xsz3g8nodpvqmmvv' },
    version: "1.0.0",
    isInvisibleWidget: false,
    isGlobalWidget: false,
    hasAnyWidget: true,
    properties: [
        { key: '__width', label: '宽度', valueType: 'number', defaultValue: 240 },
        { key: '__height', label: '高度', valueType: 'number', defaultValue: 50 },
        { key: 'text', label: '文案', valueType: 'string', editorType: 'TextArea', defaultValue: '这是一段很长的文本，需要滚动才能完整显示。' },
        { key: 'textColor', label: '文字颜色', valueType: 'color', defaultValue: '#101010' },
        { key: 'textSize', label: '文字大小', valueType: 'number', defaultValue: 16, unit: '像素' },
        { key: 'textBold', label: '文字加粗', valueType: 'boolean', defaultValue: false },
        { key: 'fontFamily', label: '字体名称', valueType: 'string', defaultValue: '' },
        { key: 'scrollSpeed', label: '滚动速度', valueType: 'number', defaultValue: 20, unit: '速度' },
        { key: 'textScrollState', label: '滚动状态', valueType: 'boolean', defaultValue: false },
    ],
    events: [
        { key: 'onClick', label: '被点击', params: [] },
    ],
    methods: [
        {
            key: "setText",
            label: '设置 文案 为',
            params: [
                { key: "text", valueType: 'string', defaultValue: '' },
            ],
            blockOptions: { color: returnBlockColor },
        },
        {
            key: "updateState",
            label: '更新滚动状态',
            params: [],
            blockOptions: { color: returnBlockColor, space: 40 },
        },
        {
            key: "getWidgetId",
            label: '的 ID',
            valueType: 'string',
            params: [],
            blockOptions: { color: returnBlockColor, callMethodLabel: false },
        },
    ],
}


class Widget extends VisibleWidget {
    constructor(props) {
        super(props)
        Object.assign(this, props)
        
        setTimeout(() => {
            this.checkTextWidth()
        }, 50)
    }

    // 设置文案
    setText(text) {
        this.setProps({
            text: text
        })
        setTimeout(() => {
            this.checkTextWidth()
        }, 0)
    }

    // 更新滚动状态
    updateState() {
        this.checkTextWidth()
    }

    // 检测文本宽度是否超过容器宽度
    checkTextWidth() {
        const widget = document.querySelector(`.Qii_${this.__widgetId}`)
        const content = document.querySelector(`.Qii_${this.__widgetId} .content`)
        const text = document.querySelector(`.Qii_${this.__widgetId} .content .text`)
        if (!content) return
        if (text.offsetWidth > widget.offsetWidth) {
            content.style.animation = 'none'
            void content.offsetWidth
            content.style.animation = `scroll ${text.offsetWidth / this.scrollSpeed}s linear infinite`
            this.setProps({
                textScrollState: true
            })
        } else {
            content.style.animation = 'none'
            this.setProps({
                textScrollState: false
            })
        }
        if (!this.textScrollState) {
            content.style.animation = 'none'
        }
    }

    // 渲染控件
    render() { return (
        <div className={`Qii_${this.__widgetId} ${this.textScrollState ? 'scroll' : ''}`} onClick={() => this.emit('onClick')}>
            
            <div className="content">
                <span className="text">{this.text}</span>
                { this.textScrollState && <span className="text-scroll">{ this.text }</span> }
            </div>

            <style>
                {`
                    .Qii_${this.__widgetId} {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        color: ${this.textColor};
                        font-size: ${this.textSize}px;
                        font-weight: ${this.textBold ? 'bold' : 'normal'};
                        font-family: ${this.fontFamily};
                        white-space: nowrap;
                        overflow: hidden;
                        mask-image: linear-gradient(to right, rgba(0,0,0,1) calc(100% - 14px), rgba(0,0,0,0));
                    }
                    .Qii_${this.__widgetId}.scroll {
                        mask-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 14px, rgba(0,0,0,1) calc(100% - 14px), rgba(0,0,0,0));
                    }
                    .Qii_${this.__widgetId} .content {
                        width: fit-content;
                    }
                    .Qii_${this.__widgetId} .content span {
                        padding-right: ${this.textScrollState ? '60px' : '0'};
                    }
                    @keyframes scroll {
                        0% {
                            transform: translateX(0%);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                `}
            </style>
        </div>
    )}

    // 返回控件的 ID
    getWidgetId() { return this.__widgetId }
}

exports.types = types
exports.widget = Widget