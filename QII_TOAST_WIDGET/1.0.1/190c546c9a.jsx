/**
 * @author: 琦琦
 * 来自 Qii-UI 组件库
 */

const methodBlockColor = ' #2C9AFF'
const returnBlockColor = ' #F4AE3B'
var document = this.document

let types = {
    title: "轻提示",
    type: "QII_TOAST_WIDGET",
    icon: "https://static.bcmcdn.com/coco/player/unstable/r1ZLPEBhkg.image/svg+xml?hash=Fo20LvSKp9j5gfkTUh3v_WrvAmCF",
    docs: { url: 'https://www.yuque.com/yuqueyonghuslrsu6/qcqduw/xsz3g8nodpvqmmvv' },
    version: "1.0.1",
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [
        {
            key: 'rotation',
            label: '旋转角度',
            unit: '度',
            valueType: 'number',
            defaultValue: 0,
            min: -180,
            max: 180
        },
        { key: 'bgColor', label: '背景颜色', valueType: 'color', defaultValue: '#38383A' },
        { key: 'textColor', label: '文字颜色', valueType: 'color', defaultValue: '#FFFFFF' },
        { key: 'fontSize', label: '文字大小', valueType: 'number', defaultValue: 14, unit: '像素' },
        { key: 'borderRadius', label: '圆角大小', valueType: 'number', defaultValue: 12, unit: '像素' },
        { key: 'offset', label: '上下偏移', valueType: 'number', defaultValue: 80, unit: '像素' },
        { key: 'shadow', label: '阴影', valueType: 'boolean', defaultValue: true },
    ],
    events: [],
    methods: [
        {
            key: "showToast",
            params: [
                { key: "message", label: '文本', valueType: 'string', defaultValue: '提示文本' },
                { key: "duration", label: '时间', labelAfter: '秒', valueType: 'number', defaultValue: 1.5 },
                { 
                    key: 'position', 
                    valueType: 'string',
                    dropdown: [
                        { label: '底部', value: 'bottom' },
                        { label: '中间', value: 'center' },
                        { label: '顶部', value: 'top' }
                    ]
                },
                { 
                    key: 'iconSize', 
                    label: '图标',
                    valueType: 'string',
                    dropdown: [
                        { label: '小', value: 'small' },
                        { label: '大', value: 'large' }
                    ]
                },
                { 
                    key: "icon", 
                    valueType: 'string',
                    dropdown: [
                        { label: '无', value: 'none' },
                        { label: '成功', value: 'success' },
                        { label: '失败', value: 'error' },
                        { label: '加载中', value: 'loading' },
                        { label: '自定义', value: 'custom' }
                    ]
                },
                { key: 'customIcon', valueType: 'string', defaultValue: "" },
                { key: 'clickBg', valueType: 'boolean', label: '背景点击', defaultValue: true }
            ],
            blockOptions: { color: methodBlockColor, inputsInline: true },
        },
        {
            key: "hideToast",
            label: '关闭弹出的提示',
            params: [],
            blockOptions: { color: methodBlockColor, inputsInline: true },
        }
    ],
}

class Widget extends VisibleWidget {
    constructor(props) {
        super(props)
        Object.assign(this, props)
    }

    showToast(message, duration, position, iconSize, icon, customIcon, clickBg) {
        let hasToast = document.querySelector('.qii_toast_container')
        if (hasToast) hasToast.parentNode.removeChild(hasToast)

        const successIcon = 'm64.5 173.8c5.1 5.4 17.9 6.6 25.3 0 9.6-9.2 108.1-109.2 111.1-112.3 7.6-9-2.8-23.5-15.4-15.4-1.7 1.4-103.3 96.3-103.3 96.3 0 0-4.4 4.7-11.2 0-6.4-4.6-32-29.3-38.1-35-11.9-9-26.7 5.1-16.8 16.8 9.6 10.3 46.5 47.7 48.4 49.6z'
        const errorIcon = 'm108 127.1l47.7 47.7c2.6 2.6 6 4 9.6 4 3.6 0 7-1.4 9.5-4 2.6-2.5 4-5.9 4-9.5 0-3.6-1.4-7-4-9.6l-47.7-47.7 47.7-47.7c2.5-2.6 4-6 4-9.6 0-3.6-1.5-7-4-9.5-2.5-2.6-6-4-9.5-4-3.6 0-7.1 1.5-9.6 4l-47.7 47.7-47.7-47.7c-2.5-2.6-6-4.1-9.6-4.1-3.6-0.1-7.1 1.3-9.7 3.9-2.5 2.6-4 6-3.9 9.7 0 3.6 1.5 7 4.1 9.6l47.7 47.7-47.7 47.7c-2.6 2.6-4.1 6-4.1 9.6-0.1 3.7 1.4 7.1 3.9 9.7 2.6 2.6 6.1 4 9.7 3.9 3.6 0 7.1-1.5 9.6-4.1z'
        const iconSizeValue = iconSize === 'small' ? '20px' : '34px'

        const toastElement = `
            <div class="content">
                <div class="icon">
                    <svg class="icon_svg" viewBox="0 0 216 216">
                        <path d="${icon === 'success' ? successIcon : errorIcon}"></path>
                    </svg>
                    <svg class="icon_loading" viewBox="25 25 50 50">
                        <circle r="20" cy="50" cx="50"></circle>
                    </svg>
                    <img class="icon_custom" src="${customIcon}"/>
                </div>
                <p class="message">${message}</p>
            </div>

            <style>
                .qii_toast_container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    user-select: none;
                    pointer-events: ${clickBg ? 'none' : 'auto'};
                    z-index: 99999;
                    opacity: 0;
                }

                .qii_toast_container .content {
                    position: absolute;
                    left: 50%;
                    top: ${position === 'top' ? this.offset + 'px' : position === 'center' ? '50%' : 'auto'};
                    bottom: ${position === 'bottom' ? this.offset + 'px' : 'auto'};
                    transform: ${position === 'center' 
                        ? 'translate(-50%, -50%) rotate(' + this.rotation + 'deg)' 
                        : 'translateX(-50%) rotate(' + this.rotation + 'deg)'};
                    transform-origin: center center;
                    transition: transform 0.2s;
                    padding: ${iconSize === 'small' ? '9.5px 20px 8px 20px' : '20px 20px'};
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: ${iconSize === 'small' ? 'row' : 'column'};
                    min-width: 120px;
                    max-width: 90%;
                    background: ${this.bgColor};
                    border-radius: ${this.borderRadius}px;
                    box-shadow: ${this.shadow ? '0 6px 20px #00003010, 0 0 5px #0000300C' : 'none'};
                }

                .qii_toast_container .message {
                    margin: 0 !important;
                    display: ${message ? 'block' : 'none'};
                    color: ${this.textColor};
                    font-size: ${this.fontSize}px;
                    text-align: center;
                    word-break: break-all;
                }
                
                .qii_toast_container .icon {
                    display: ${icon === 'none' ? 'none' : 'block'};
                    margin: ${iconSize === 'small' ? '0 6px 0 0' : '0 0 6px 0'};
                    fill: ${this.textColor};
                }
                .qii_toast_container .icon .icon_svg {
                    display: ${['success', 'error'].includes(icon) ? 'block' : 'none'};
                    width: ${iconSizeValue};
                    height: ${iconSizeValue};
                }

                .qii_toast_container .icon_loading {
                    display: ${icon === 'loading' ? 'block' : 'none'};
                    width: ${iconSizeValue};
                    animation: rotate 2s linear infinite;
                }
                @keyframes rotate {
                    100% { transform: rotate(360deg); }
                }
                .qii_toast_container .icon_loading circle {
                    fill: none;
                    stroke: ${this.textColor};
                    stroke-width: 5;
                    stroke-dasharray: 1, 200;
                    stroke-dashoffset: 0;
                    stroke-linecap: round;
                    animation: circle 1.5s ease-in-out infinite;
                }
                @keyframes circle {
                    0% { stroke-dasharray: 1, 200; stroke-dashoffset: 0; }
                    50% { stroke-dasharray: 90, 200; stroke-dashoffset: -35px; }
                    100% { stroke-dashoffset: -125px; }
                }

                .qii_toast_container .icon_custom {
                    display: ${icon === 'custom' ? 'block' : 'none'};
                    width: ${iconSizeValue};
                    height: ${iconSizeValue};
                }
            </style>
        `

        let toastContainer = document.createElement('div')
        toastContainer.className = 'qii_toast_container'
        toastContainer.innerHTML = toastElement
        document.body.appendChild(toastContainer)
        
        setTimeout(() => {
            toastContainer.style.transition = 'opacity 0.15s'
            toastContainer.style.opacity = 1
        }, 0)

        if (duration !== 0) {
            setTimeout(() => {
                toastContainer.style.transition = 'opacity 0.3s'
                toastContainer.style.opacity = 0
                setTimeout(() => toastContainer.parentNode.removeChild(toastContainer), 300)
            }, duration * 1000)
        }
    }

    hideToast() {
        let toastContainer = document.querySelector('.qii_toast_container')
        if (toastContainer) {
            toastContainer.style.transition = 'opacity 0.3s'
            toastContainer.style.opacity = 0
            setTimeout(() => toastContainer.parentNode.removeChild(toastContainer), 300)
        }
    }
}

exports.types = types
exports.widget = Widget