/**
 * @author: 琦琦
 * 来自 Qii-UI 组件库
 */

const methodBlockColor = ' #2C9AFF'
const createBlockColor = ' #62B7FF'
const returnBlockColor = ' #F4AE3B'

let types = {
    title: "图片框",
    type: "QII_IMAGE_WIDGET",
    icon: "https://static.bcmcdn.com/coco/player/unstable/SJQ3xvF8Jl.image/png?hash=FpDv1ly96jptaNLMj7A_2JkUaMdN",
    docs: { url: 'https://www.yuque.com/yuqueyonghuslrsu6/qcqduw/xsz3g8nodpvqmmvv' },
    version: "1.5.0",
    isInvisibleWidget: false,
    isGlobalWidget: false,
    hasAnyWidget: true,
    properties: [
        { key: '__width', label: '宽度', valueType: 'number', defaultValue: 250 },
        { key: '__height', label: '高度', valueType: 'number', defaultValue: 150 },
        { key: 'imageUrl', label: '图片链接', valueType: 'string', editorType: 'TextArea', defaultValue: 'https://static.bcmcdn.com/coco/player/unstable/HkuzfT_L1x.image/png?hash=Ft5CIMwfdCejUgPvkjEU6EVUO7_r' },
        { key: 'imageMode', label: '显示模式', valueType: 'string', defaultValue: 'cover',
            dropdown: [
                { label: '超出裁剪', value: 'cover', },
                { label: '完整显示', value: 'contain', },
                { label: '拉伸适配', value: 'fill', },
            ],
        },
        { key: 'imageRadius', label: '圆角大小', unit: '像素', valueType: 'number', defaultValue: 10 },
        { key: 'imageBlur', label: '图片模糊', unit: '强度', valueType: 'number', defaultValue: 0 },
        { key: 'imageBrightness', label: '图片亮度', unit: '%', valueType: 'number', defaultValue: 100 },
        { key: 'imageSaturate', label: '图片饱和度', unit: '%', valueType: 'number', defaultValue: 100 },
        { key: 'rotate', label: '旋转角度', unit: '度', valueType: 'number', defaultValue: 0 },
        { key: 'imageScale', label: '图片缩放', unit: '倍', valueType: 'number', defaultValue: 1 },
        { key: 'borderSize', label: '边框宽度', unit: '像素', valueType: 'number', defaultValue: 0 },
        { key: 'bgColor', label: '背景颜色', valueType: 'color', defaultValue: '#EFEFF1' },
        { key: 'borderColor', label: '边框颜色', valueType: 'color', defaultValue: '#3080FF' },
        { key: 'shadowColor', label: '阴影颜色', valueType: 'color', defaultValue: '#00000000' },
        { key: 'shadowStyle', label: '阴影样式', valueType: 'string', defaultValue: '0px 5px 20px 0px' },
        { key: 'customRadius', label: '单独设置圆角', valueType: 'string', defaultValue: '' },
        { key: 'customAnim', label: '动画样式', valueType: 'string', defaultValue: 'all 0.5s ease' },
    ],
    events: [
        { key: 'onClick', label: '被点击', params: [] },
    ],
    methods: [
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
    }

    // 渲染控件
    render() { return (
        <div className={`Qii_${this.__widgetId}`} onClick={() => this.emit('onClick')}>

            <img src={this.imageUrl} style={{ objectFit: this.imageMode, filter: `blur(${this.imageBlur}px)`, }} />

            <style>
                {` 
                    .Qii_${this.__widgetId} {
                        overflow: hidden;
                        width: 100%;
                        height: 100%;
                        background-color: ${this.bgColor};
                        border-radius: ${this.customRadius == '' ? this.imageRadius + 'px' : this.customRadius};
                        border: ${this.borderSize}px solid ${this.borderColor};
                        transform: rotate(${this.rotate}deg);
                        filter: brightness(${this.imageBrightness}%) saturate(${this.imageSaturate}%);
                        box-shadow: ${this.shadowStyle + ' ' + this.shadowColor};
                        transition: ${this.customAnim};
                    }
                    .Qii_${this.__widgetId} img {
                        width: 100%;
                        height: 100%;
                        transform: scale(${this.imageScale});
                        transition: ${this.customAnim};
                    }
                    .Qii_${this.__widgetId} img[src=""] {
                        opacity: 0;
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