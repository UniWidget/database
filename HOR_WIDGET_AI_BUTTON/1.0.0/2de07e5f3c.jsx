/**
 * @author: [Your Name]
 * AI Button Widget from Hor Widget Library
 */

const methodBlockColor = '#2FD16C'
const createBlockColor = '#68E396'
const returnBlockColor = '#F4AE3B'

var document = this.document
var window = this.window

const types = {
    title: "AI按钮",
    type: "HOR_WIDGET_AI_BUTTON",
    icon: "https://static.bcmcdn.com/coco/player/unstable/ry8900mSJx.image/svg+xml?hash=FsYOLXpxnmH2losy47-80nFgg2Hn",
    docs: { url: 'https://www.yuque.com/seekyhor/horkj/ai_button_docs' },
    version: "1.0.0",
    isInvisibleWidget: false,
    isGlobalWidget: false,
    hasAnyWidget: true,
    properties: [
        { key: '__width', label: '宽度', valueType: 'number', defaultValue: 120 },
        { key: '__height', label: '高度', valueType: 'number', defaultValue: 40 },
        {
            key: 'text',
            label: '按钮文字',
            valueType: 'string',
            defaultValue: 'AI按钮',
            blockOptions: { generateBlock: true },
        },
        {
            key: 'bgColor',
            label: '背景颜色',
            valueType: 'color',
            defaultValue: '#4CAF50',
            blockOptions: { generateBlock: true },
        },
        {
            key: 'textColor',
            label: '文字颜色',
            valueType: 'color',
            defaultValue: '#FFFFFF',
            blockOptions: { generateBlock: true },
        },
        {
            key: 'radius',
            label: '圆角半径',
            valueType: 'number',
            defaultValue: 4,
            unit: 'px',
            blockOptions: { generateBlock: true },
        },
        {
            key: 'disabled',
            label: '禁用状态',
            valueType: 'boolean',
            defaultValue: false,
            blockOptions: { generateBlock: true },
        }
    ],
    events: [
        { 
            key: 'onClick', 
            label: '点击事件', 
            params: [
                { key: 'timestamp', label: '时间戳', valueType: 'number' }
            ],
        },
        {
            key: 'onHover',
            label: '悬停事件',
            params: [
                { key: 'isHovering', label: '是否悬停', valueType: 'boolean' }
            ],
        }
    ],
    methods: [
        {
            key: "setText",
            label: '设置按钮文字',
            params: [
                { key: "text", label: '文字内容', valueType: 'string', defaultValue: '' },
            ],
            blockOptions: { color: methodBlockColor },
        },
        {
            key: "setDisabled",
            label: '设置禁用状态',
            params: [
                { key: "disabled", label: '是否禁用', valueType: 'boolean', defaultValue: false },
            ],
            blockOptions: { color: methodBlockColor },
        },
        {
            key: "getButtonState",
            label: '获取按钮状态',
            valueType: 'object',
            params: [],
            blockOptions: { color: returnBlockColor },
        }
    ],
}

class Widget extends VisibleWidget {
    constructor(props) {
        super(props)
        Object.assign(this, props)
        this.state = {
            isHovering: false
        }
    }

    handleClick() {
        if (this.disabled) return
        this.emit('onClick', { timestamp: Date.now() })
    }

    handleMouseEnter() {
        this.setState({ isHovering: true })
        this.emit('onHover', { isHovering: true })
    }

    handleMouseLeave() {
        this.setState({ isHovering: false })
        this.emit('onHover', { isHovering: false })
    }

    setText(text) {
        this.text = text
        this.rerender()
    }

    setDisabled(disabled) {
        this.disabled = disabled
        this.rerender()
    }

    getButtonState() {
        return {
            text: this.text,
            disabled: this.disabled,
            isHovering: this.state.isHovering
        }
    }

    render() { 
        const buttonStyle = {
            width: '100%',
            height: '100%',
            backgroundColor: this.bgColor,
            color: this.textColor,
            borderRadius: `${this.radius}px`,
            border: 'none',
            cursor: this.disabled ? 'not-allowed' : 'pointer',
            opacity: this.disabled ? 0.6 : 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            transform: this.state.isHovering && !this.disabled ? 'scale(1.05)' : 'scale(1)'
        }

        return (
            <div className={`AIButton_${this.__widgetId}`}>
                <button 
                    style={buttonStyle}
                    onClick={() => this.handleClick()}
                    onMouseEnter={() => this.handleMouseEnter()}
                    onMouseLeave={() => this.handleMouseLeave()}
                    disabled={this.disabled}
                >
                    {this.text}
                </button>

                <style>
                    {`
                        .AIButton_${this.__widgetId} {
                            width: 100%;
                            height: 100%;
                        }
                        .AIButton_${this.__widgetId}:active button:not(:disabled) {
                            transform: scale(0.95);
                        }
                    `}
                </style>
            </div>
        )
    }
}

exports.types = types
exports.widget = Widget