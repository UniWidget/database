
let types = {
    title: "文本动效",
    type: "HW_TEXTDX_WIDGET",
    icon: "https://static.codemao.cn/pickduck/ByMV9mb81x.svg?hash=Fl9x4t-zn594KFLQkt8CYcXn6YdB",
    docs: { url: 'https://cos.chahehe.space/' },
    version: "1.0.0",
    isInvisibleWidget: false,
    isGlobalWidget: false,
    properties: [
        { key: '__width',label: '宽度',valueType: 'number',defaultValue: 240, },
        { key: '__height',label: '高度',valueType: 'number',defaultValue: 50, },
        { key: 'text', label: '文案', valueType: 'string', editorType: 'TextArea', defaultValue: '这是一段文本', },
        { key: 'textSize', label: '文字大小', valueType: 'number', defaultValue: 16, unit: '像素', },
        { key: 'textColor', label: '文字颜色', valueType: 'color', defaultValue: '#101010', },
        { key: 'fontFamily', label: '自定义字体', valueType: 'string', defaultValue: '', },
    ],
    events: [
        {
            key: 'onClick',
            label: '被点击',
            params: [],
        },
    ],
    methods: [],
}


class Widget extends VisibleWidget {
    constructor(props) {
        super(props)
        Object.assign(this, props)
    }

    // 渲染控件
    render() {
        return (
            <div onClick={() => this.emit('onClick')}>
                
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h1 className={`HW_TextDX_Widget${this.__widgetId}`}>{ this.text }</h1>
                </div>

                <style>
                    {` 
                        .HW_TextDX_Widget${this.__widgetId} {
                            width: 100%;
                            height: 100%;
                            display: flex;
                            font-size: ${this.textSize}px;
                            font-weight: bold;
                            overflow: ${this.overflow ? 'hidden' : 'visible'};
                            font-family: ${this.fontFamily};
                            color: transparent;
                            background: linear-gradient(to right, #000, ${this.textColor},#000);
                            -webkit-background-clip: text;
                            background-size: 80%;
                            background-repeat: no-repeat;
                            animation: move 3s linear infinite;
                        } 
                        

                        @keyframes move {
                            0% {
                                background-position: -500%;
                            }
                            100% {
                                background-position: 500%;
                            }
                        }
                    
                        .HW_TextDx_Widget${this.__widgetId} > div {
                            width: 100%;
                        }
                    `}
                </style>
            </div>
        )
    }
}

exports.types = types
exports.widget = Widget