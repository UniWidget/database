/**
 * @author: 琦琦
 * 来自 Qii 组件库
 */

var document = this.document
var window = this.window

let types = {
    title: "屏幕适应",
    type: "QII_SCREEN_ADAPTS_WIDGET",
    icon: "https://static.bcmcdn.com/coco/player/unstable/ry8900mSJx.image/svg+xml?hash=FsYOLXpxnmH2losy47-80nFgg2Hn",
    docs: { url: 'https://www.yuque.com/yuqueyonghuslrsu6/qcqduw/xsz3g8nodpvqmmvv' },
    version: "1.0.0",
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    events: [],
    methods: [
        {
            key: "autoAdapt",
            label: '一键自适应',
            params: [
                { key: "bottom", label: '底部区域高度', valueType: 'number', defaultValue: 60 },
            ],
            tooltip: '在底部区域内的控件都会设置为底部对齐',
            blockOptions: { line: '自动适应', space: 30, color: ' #2C9AFF' },
        },
        {
            key: "calcWidget",
            valueType: 'number',
            params: [
                { key: "position", valueType: 'string', defaultValue: 'top', 
                    dropdown: [
                        { label: '顶部控件', value: 'top' },
                        { label: '底部控件', value: 'bottom' },
                    ],
                 },
                 { key: "widgetY", valueType: 'number', defaultValue: 0 },
            ],
            tooltip: '传入控件的 Y 坐标，返回计算后的 Y 坐标',
            blockOptions: { line: '手动适应', callMethodLabel: false, color: ' #F4AE3B' },
        },
        {
            key: "calcWidgetHeight",
            valueType: 'number',
            label: '计算高度',
            params: [
                { key: "height", valueType: 'number', defaultValue: 0, },
                { key: "widgetY", valueType: 'number', defaultValue: 0 },
            ],
            tooltip: '传入控件的 "高度" 和 "Y 坐标"，返回计算后的高度',
            blockOptions: { callMethodLabel: false, color: ' #F4AE3B' },
        },
    ],
}


class Widget extends VisibleWidget {
    constructor(props) {
        super(props)
        Object.assign(this, props)
    }

    // 自动适应
    autoAdapt(area) {
        // 获取当前屏幕中的所有控件
        const items = document.querySelectorAll('.screen-view-inner > *')
        items.forEach(item => {
            // 获取控件
            const targetItem = item.hasAttribute('id') ? item : item.children[0]
            let itemTop = parseInt(targetItem.style.top)
            let itemHeight = parseInt(targetItem.style.height)
            
            // 让所有控件顶部对齐
            targetItem.style.top = this.calcWidget('top', itemTop) + 'px'
            
            // 在底部区域内的控件实现底部对齐
            if (itemTop >= 640 - area) {
                targetItem.style.top = this.calcWidget('bottom',itemTop) + 'px'
            }

            // 高度为640的控件设置为屏幕高度
            if (itemHeight === 640) {
                targetItem.style.height = window.innerHeight + 'px'
            }
        })
    }

    // 手动适应
    calcWidget(position, widgetY) {
        if (position === 'top') {
            const topWidget = (window.innerHeight - 640) / 2;
            return widgetY - topWidget;
        }
        if (position === 'bottom') {
            const bottomWidget = (window.innerHeight - 640) / 2 + 640;
            return bottomWidget - (640 - widgetY);
        }
        return widgetY;
    }

    // 计算控件高度
    calcWidgetHeight(height, widgetY) {
        return (window.innerHeight - widgetY) - (640 - (height + widgetY))
    }
}

exports.types = types
exports.widget = Widget