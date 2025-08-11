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
    title: "提示页",
    type: "YUE_PROMPT_PAGE_WIDGET",
    icon: "https://static.codemao.cn/flowchunkflex/SJaBVZqyxl.svg?hash=FshdW1tY5jf6GR5VXYrt04aiSDzR",
    docs: { url: 'https://www.yuque.com/yuqueyonghuhelltp/yuekj/wptydkelmbqnyfww' },
    version: "1.0.0",
    isInvisibleWidget: false,
    isGlobalWidget: false,
    hasAnyWidget: true,
    properties: [
        { key: '__width', label: '宽度', valueType: 'number', defaultValue: 340 },
        { key: '__height', label: '高度', valueType: 'number', defaultValue: 500 },
        { key: 'bgColor', label: '背景颜色', valueType: 'string', editorType: 'Color', defaultValue: '#000' },
        { key: 'image', label: '图片', valueType: 'string', defaultValue: 'https://static.bcmcdn.com/coco/player/unstable/Syn-SYyRke.image/png?hash=FtEe8EuVX9_yyRGSRFpLeOUbvkfq' },
        { key: 'imageY', label: '图片y坐标', valueType: 'number', defaultValue: 30, unit: '像素' },
        { key: 'imageStyle', label: '图片样式', valueType: 'string', editorType: 'TextArea', 
            defaultValue: 'width: 200px;height: 200px;object-fit: cover;border-radius: 15px;box-shadow: 5px 5px 10px #aaaaaa70;border: 2px solid #62B7FF;' 
        },
        { key: 'wenzi', label: '文字', valueType: 'string', editorType: 'TextArea', defaultValue: '鸭鸭寻觅不见了它的椰子' },
        { key: 'wenziY', label: '文字y坐标', valueType: 'number', defaultValue: 260, unit: '像素' },
        { key: 'wenziStyle', label: '文字样式', valueType: 'string', editorType: 'TextArea', 
            defaultValue: 'width: 180px;height: 100px;color: #FFFFFF;font-family: Arial, sans-serif;text-align: center;font-weight: 700;font-size: 16px;' 
        },
        { key: 'btn', label: '按钮', valueType: 'string', editorType: 'TextArea', defaultValue: '摘个椰子给鸭鸭' },
        { key: 'btnY', label: '按钮y坐标', valueType: 'number', defaultValue: 340, unit: '像素' },
        { key: 'btnStyle', label: '按钮样式', valueType: 'string', editorType: 'TextArea',
             defaultValue: 'border-radius: 15px;background-color: #2FD16C;color: #FFFFFF;font-weight: 700;font-family: Arial, sans-serif;padding: 10px 20px;font-size: 16px;'
        },
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
            key: 'onClickIn', 
            label: '被点击', 
            subTypes: [
                {
                    key: 'event',
                    dropdown: [
                        { label: '图片', value: 'Image' },
                        { label: '文字', value: 'Wenzi' },
                        { label: '按钮', value: 'Btn' },
                    ]
                }
            ],
            params: [],
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
            key: "getWidgetIdIn",
            label: '中',
            valueType: 'string',
            params: [
                { key: "name", label: '的', valueType: 'string', defaultValue: 'image',
                    dropdown: [
                        { label: '图片', value: 'image' },
                        { label: '文字', value: 'wenzi' },
                        { label: '按钮', value: 'btn' },
                    ],
                    labelAfter:'的 ID' 
                },
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

    onEventIn(name) {
        this.emit('onClickIn' + name)
    }

    // 渲染控件
    render() { return (
        <div className={`Yue_${this.__widgetId}`}>
            
            <div onClick={() => this.onEvent('Click')} onMouseDown={() => this.onEvent('Down')} onMouseUp={() => this.onEvent('Up')} onContextMenu={() => this.onEvent('Contextmenu')} className={`Yue_${this.__widgetId}_bg`}>
                <img onClick={() => this.onEventIn('Image')} src={this.image} className={`Yue_${this.__widgetId}_image`} id={`Yue_${this.__widgetId}_image`}/>
                <div onClick={() => this.onEventIn('Wenzi')} className={`Yue_${this.__widgetId}_wenzi`} id={`Yue_${this.__widgetId}_wenzi`}>{this.wenzi}</div>
                <div onClick={() => this.onEventIn('Btn')} className={`Yue_${this.__widgetId}_btn`} id={`Yue_${this.__widgetId}_btn`}>{this.btn}</div>
            </div>

            <style>
                {`
                    .Yue_${this.__widgetId} {
                        width: 100%;
                        height: 100%;
                    }

                    .Yue_${this.__widgetId}_bg {
                        width: 100%;
                        height: 100%;
                        background-color: ${this.bgColor};
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    .Yue_${this.__widgetId}_image {
                        position: absolute;
                        top: ${this.imageY}px;
                        ${this.imageStyle}
                    }

                    .Yue_${this.__widgetId}_wenzi {
                        position: absolute;
                        top: ${this.wenziY}px;
                        ${this.wenziStyle}
                    }

                    .Yue_${this.__widgetId}_btn {
                        position: absolute;
                        top: ${this.btnY}px;
                        ${this.btnStyle}
                    }
                `}
            </style>
        </div>
    )}

    // 返回控件的 ID
    getWidgetId() { return this.__widgetId }

    getWidgetIdIn(name) {
        return `Yue_${this.__widgetId}_` + name;
    }
}

exports.types = types
exports.widget = Widget