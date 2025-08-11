/**
 * @author: 琦琦
 * 来自 Qii 组件库
 */

const blockColor = '#1E90FF'
var document = this.document
var window = this.window

let types = {
    title: "动画库",
    type: "QII_ANIMATION_WIDGET",
    icon: "https://static.bcmcdn.com/coco/player/unstable/ry8900mSJx.image/svg+xml?hash=FsYOLXpxnmH2losy47-80nFgg2Hn",
    docs: { url: 'https://www.yuque.com/yuqueyonghuslrsu6/qcqduw/xsz3g8nodpvqmmvv' },
    version: "1.0.0",
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    events: [],
    methods: [
        {
            key: "animBasic",
            label: '基本动画',
            params: [
                { key: "startSize", label: '大小', valueType: 'number', defaultValue: 0 },
                { key: "endSize", valueType: 'number', defaultValue: 1 },
                { key: "startRotate", label: '旋转', valueType: 'number', defaultValue: 0 },
                { key: "endRotate", valueType: 'number', defaultValue: 0 },
                { key: "startOpacity", label: '透明度', valueType: 'number', defaultValue: 0 },
                { key: "endOpacity", valueType: 'number', defaultValue: 1 },
                { key: "duration", label: '时间/秒', valueType: 'number', defaultValue: 0.5 },
                { key: "id", label: '控件ID', valueType: 'string', defaultValue: '' },
            ],
            blockOptions: { color: blockColor },
        },
    ],
}


class Widget extends VisibleWidget {
    constructor(props) {
        super(props)
        Object.assign(this, props)
    }

    // 基本动画
    animBasic(startSize, endSize, startRotate, endRotate, startOpacity, endOpacity, duration, id) {
        const element = document.getElementById(id)
        element.style.transition = ``
        element.style.transform = `scale(${startSize}) rotate(${startRotate}deg)`
        element.style.opacity = startOpacity
        void element.offsetWidth
        element.style.transition = `all ${duration}s cubic-bezier(.23, .93, .26, 1)`
        element.style.transform = `scale(${endSize}) rotate(${endRotate}deg)`
        element.style.opacity = endOpacity
    }

}

const animStyle = `
    @keyframes zoom-in {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }
    @keyframes zoom-out {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    }
    @keyframes zoom-in-opacity {
        0% {
            transform: scale(0);
            opacity: 0;
        }
        80% {
            opacity: 1;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
    @keyframes zoom-out-opacity {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        20% {
            opacity: 1;
        }
        100% {
            transform: scale(0);
            opacity: 0;
        }
    }
`;

exports.types = types
exports.widget = Widget