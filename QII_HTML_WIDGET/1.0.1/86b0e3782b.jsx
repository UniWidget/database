/**
 * @author: 琦琦
 * 来自 Qii 组件库
 */

var document = this.document
var window = this.window

let types = {
    title: "HTML控件",
    type: "QII_HTML_WIDGET",
    icon: "https://static.bcmcdn.com/coco/player/unstable/ry8900mSJx.image/svg+xml?hash=FsYOLXpxnmH2losy47-80nFgg2Hn",
    docs: { url: 'https://www.yuque.com/yuqueyonghuslrsu6/qcqduw/xsz3g8nodpvqmmvv' },
    version: "1.0.1",  // 版本号更新
    isInvisibleWidget: false,
    isGlobalWidget: false,
    hasAnyWidget: true,
    properties: [
        {
            key: '__width',
            label: '宽度',
            valueType: 'number',
            defaultValue: 220,
        },
        {
            key: '__height',
            label: '高度',
            valueType: 'number',
            defaultValue: 100,
        },
        // 新增旋转角度属性
        {
            key: 'rotationAngle',
            label: '旋转角度',
            valueType: 'number',
            defaultValue: 0,
            unit: '度',
            blockOptions: { 
                setter: { 
                    space: 20,
                    keys: ['rotationAngle'] 
                }
            }
        },
        {
            key: 'htmlContent',
            label: 'HTML 内容',
            valueType: 'string',
            editorType: 'TextArea',
            defaultValue: `<div class="myDiv">
  <div id="text1">你好，CoCo!</div>
  <div id="text2">这是 HTML 控件</div>
</div>`,
            blockOptions: { generateBlock: false },
        },
        {
            key: 'styleContent',
            label: '样式',
            valueType: 'string',
            editorType: 'TextArea',
            defaultValue: `.myDiv {
    padding: 12px 14px;
    width: 100%;
    height: 100%;
    background: #0000200C;
    border-radius: 10px;
    border: 1px solid #00002020;
    color: #202022;
    font-size: 15px;
    transform-origin: center;  // 新增旋转中心设置
}`,
            blockOptions: { generateBlock: false },
        },
    ],
    events: [
        {
            key: 'onClick',
            label: '被点击',
            params: [
                { key: 'itemId', label: '元素ID', valueType: 'string', }
            ],
        },
        // 新增滑动事件
        {
            key: 'onSwipe',
            label: '滑动事件',
            params: [
                { key: 'direction', label: '方向', valueType: 'string' }
            ]
        }
    ],
    methods: [
        {
            key: "setHtmlContent",
            label: '设置',
            params: [
                { key: "html", label: 'HTML', valueType: 'string', defaultValue: '' },
                { key: "style", label: '样式', valueType: 'string', defaultValue: '' },
            ],
            blockOptions: { space: 40, color: ' #2C9AFF' },
        },
        {
            key: "getHtmlContent",
            label: '获取 HTML 内容',
            valueType: 'string',
            params: [],
            blockOptions: { callMethodLabel: false, color: ' #F4AE3B' },
        },
        {
            key: "getWidgetId",
            label: '的 ID',
            valueType: 'string',
            params: [],
            blockOptions: { callMethodLabel: false, color: ' #F4AE3B' },
        },
    ],
}

class Widget extends VisibleWidget {
    constructor(props) {
        super(props)
        Object.assign(this, props)
        this.touchStart = { x: 0, y: 0 }  // 触摸起点坐标
        this.rotation = 0  // 当前旋转角度
    }

    // 设置 HTML 和样式
    setHtmlContent(html, style) {
        this.setProps({
            htmlContent: html,
            styleContent: style,
        })
    }

    // 返回 HTML 内容
    getHtmlContent() {
        return this.htmlContent + `<style>${this.styleContent}</style>`
    }

    // 点击事件处理
    onClickItem(event) {
        let targetElement = event.target;
        this.emit('onClick', targetElement.id || '')
    }

    // 触摸开始事件
    handleTouchStart = (e) => {
        const touch = e.touches[0]
        this.touchStart = {
            x: touch.clientX,
            y: touch.clientY,
            time: Date.now()
        }
    }

    // 触摸结束事件
    handleTouchEnd = (e) => {
        const touch = e.changedTouches[0]
        const dx = touch.clientX - this.touchStart.x
        const dy = touch.clientY - this.touchStart.y
        const duration = Date.now() - this.touchStart.time
        
        // 计算旋转后的方向
        const angle = this.rotation * Math.PI / 180
        const rotatedDx = dx * Math.cos(angle) + dy * Math.sin(angle)
        const rotatedDy = -dx * Math.sin(angle) + dy * Math.cos(angle)
        
        // 判断滑动方向
        let direction = ''
        if (Math.abs(rotatedDx) > 20 || Math.abs(rotatedDy) > 20) {
            if (Math.abs(rotatedDx) > Math.abs(rotatedDy)) {
                direction = rotatedDx > 0 ? '右' : '左'
            } else {
                direction = rotatedDy > 0 ? '下' : '上'
            }
            this.emit('onSwipe', direction)
        }
    }

    // 渲染控件
    render() { 
        this.rotation = this.rotationAngle % 360  // 角度标准化
        return (
            <div 
                style={{ 
                    width: '100%', 
                    height: '100%',
                    transform: `rotate(${this.rotation}deg)`,  // 应用旋转
                    transformOrigin: 'center'
                }}
                onClick={(e) => this.onClickItem(e)}
                onTouchStart={this.handleTouchStart}
                onTouchEnd={this.handleTouchEnd}
                dangerouslySetInnerHTML={{__html: this.getHtmlContent()}}>
            </div>
        )
    }

    // 返回控件的 ID
    getWidgetId() { return this.__widgetId }
}

exports.types = types
exports.widget = Widget