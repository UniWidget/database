/**
 * @author: 琦琦
 * Qii-UI 组件库
 */

const blockColor = '#1E90FF'

let types = {
    title: "圆角卡片",
    type: "QII_CARD_WIDGET",
    icon: "https://static.bcmcdn.com/coco/player/unstable/ry8900mSJx.image/svg+xml?hash=FsYOLXpxnmH2losy47-80nFgg2Hn",
    docs: {
        url: ''
    },
    version: "1.0.0",
    isInvisibleWidget: false,
    isGlobalWidget: false,
    properties: [
        {
            key: '__width',
            label: '宽度',
            valueType: 'number',
            defaultValue: 240,
        },
        {
            key: '__height',
            label: '高度',
            valueType: 'number',
            defaultValue: 150,
        },
        {
            key: 'cardColor',
            label: '卡片颜色',
            valueType: 'color',
            defaultValue: '#1E90FF',
        },
        {
            key: 'cardRadius',
            label: '圆角大小',
            unit: '像素',
            valueType: 'number',
            defaultValue: 16,
        },
        {
            key: 'cardBlur',
            label: '卡片模糊',
            unit: '强度',
            valueType: 'number',
            defaultValue: 0,
        },
        {
            key: 'bgBlur',
            label: '背景模糊',
            unit: '强度',
            valueType: 'number',
            defaultValue: 10,
        },
        {
            key: 'shadowStyle',
            label: '阴影样式',
            valueType: 'string',
            defaultValue: '0px 0px 10px 0px',
        },
        {
            key: 'shadowColor',
            label: '阴影颜色',
            valueType: 'color',
            defaultValue: '#00000020',
        },
        {
            key: 'html',
            label: 'html',
            valueType: 'string',
            defaultValue: '<a>123</a>',
        },
    ],
    events: [
        { key: 'onClick', label: '被点击', params: [], },
    ],
    methods: [],
}


class Widget extends VisibleWidget {
    constructor(props) {
        super(props)
        Object.assign(this, props)
    }

    // 渲染函数
    render() {
        return (
            <div
                dangerouslySetInnerHTML={{ __html: this.html }}
                className="Qii_Card_Widget"
                onClick={() => this.emit('onClick')}
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: this.cardColor,
                    borderRadius: this.cardRadius + 'px',
                    filter: 'blur(' + this.cardBlur + 'px)',
                    backdropFilter: 'blur(' + this.bgBlur + 'px)',
                    boxShadow: this.shadowStyle + ' ' + this.shadowColor,
                }}>
            </div>
        )
    }
}

exports.types = types
exports.widget = Widget