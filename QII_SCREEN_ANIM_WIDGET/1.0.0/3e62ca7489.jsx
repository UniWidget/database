/**
 * @author: 琦琦
 * 来自 Qii-UI 组件库
 */

const blockColor = '#1E90FF'
var document = this.document
var window = this.window

let types = {
    title: "屏幕切换 (测试)",
    type: "QII_SCREEN_ANIM_WIDGET",
    icon: "https://static.bcmcdn.com/coco/player/unstable/SyODvbcLye.image/svg+xml?hash=FmKlLIuZB0vX4zRiaJ5ToTS7gZ3W",
    docs: { url: 'https://www.yuque.com/yuqueyonghuslrsu6/qcqduw/xsz3g8nodpvqmmvv' },
    version: "1.0.0",
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    events: [],
    methods: [
        {
            key: 'startTransition',
            params: [
                {
                    key: 'animDirection',
                    label: '动画方向',
                    valueType: 'string',
                    dropdown: [
                        { label: '右侧', value: 'right', },
                        { label: '底部', value: 'bottom', },
                    ],
                },
                {
                    key: 'animType',
                    label: '模式',
                    valueType: 'string',
                    dropdown: [
                        { label: '打开', value: 'open', },
                        { label: '返回', value: 'back', },
                    ],
                },
                {
                    key: 'time',
                    label: '时间',
                    labelAfter: '秒',
                    valueType: 'number',
                    defaultValue: 0.5,
                },
            ],
            blockOptions: { color: blockColor },
        }
    ],
}


class Widget extends VisibleWidget {
    constructor(props) {
        super(props)
        Object.assign(this, props)
    }

    // 缓存当前屏幕
    cacheScreen() {
        const screenView = document.querySelector('#rootPlayer .screen-view')
        const tempScreen = screenView.cloneNode(true)
        tempScreen.id = 'qii_temp_screen'
        tempScreen.style.display = 'none'
        screenView.parentNode.insertBefore(tempScreen, screenView.nextSibling)

        if (!document.getElementById('qii_screen_style')) {
            let styleElement = document.createElement('style')
            styleElement.id = 'qii_screen_style'
            styleElement.innerHTML = `
                #qii_temp_screen {
                    position: fixed; top: 0; left: 0;
                    padding-top: ${(window.innerHeight - 640) / 2}px;
                    width: 360px;
                    height: 100%;
                    pointer-events: none;
                }
            `;
            screenView.parentNode.insertBefore(styleElement, screenView)
        }
    }

    // 开始过渡
    startTransition(animDirection, animType, time) {
        this.cacheScreen()

        let screenView = document.querySelector('#rootPlayer .screen-view')
        let tempScreen = document.getElementById('qii_temp_screen')
        if (!tempScreen) return

        // 隐藏屏幕区域的滑动条
        document.getElementById('rootPlayer').style.overflow = 'hidden'
        // 禁用屏幕点击事件
        screenView.style.pointerEvents = 'none'

        if (animType === 'open') {
            screenView.style.transform = animDirection === 'right' ? `translateX(100%)` : `translateY(100%)`
            tempScreen.style.transform = `translateX(0%)`
            tempScreen.style.zIndex = 1
            tempScreen.style.display = 'block'
            void screenView.offsetWidth
            void tempScreen.offsetWidth
            screenView.style.transition = `transform ${time}s cubic-bezier(.25,.65,.3,1)`
            screenView.style.transform = animDirection === 'right' ? `translateX(0%)` : `translateY(0%)`
            tempScreen.style.transition = `transform ${time}s ease`
            tempScreen.style.transform = animDirection === 'right' ? `translateX(-30%)` : `translateY(0%)`
        }

        if (animType === 'back') {
            screenView.style.transform = animDirection === 'right' ? `translateX(-30%)` : `translateY(0%)`
            tempScreen.style.transform = `translateX(0%)`
            tempScreen.style.zIndex = 20
            tempScreen.style.display = 'block'
            void screenView.offsetWidth
            void tempScreen.offsetWidth
            screenView.style.transition = `transform ${time}s cubic-bezier(.25,.65,.3,1)`
            screenView.style.transform = animDirection === 'right' ? `translateX(0%)` : `translateY(0%)`
            tempScreen.style.transition = `transform ${time}s ease`
            tempScreen.style.transform = animDirection === 'right' ? `translateX(100%)` : `translateY(100%)`
        }

        // 动画结束，恢复样式
        setTimeout(() => {
            tempScreen.remove()
            screenView.style.transform = ''
            screenView.style.transition = ''
            screenView.style.pointerEvents = ''
            document.getElementById('rootPlayer').style.overflow = 'auto'
        }, time * 1000)
    }
}

exports.types = types
exports.widget = Widget