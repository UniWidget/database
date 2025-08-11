/**
 * @author: 琦琦
 * 来自 Qii-UI 组件库
 */

const blockColor = '#F96949'
var document = this.document
var window = this.window

let types = {
    title: "语音转文字",
    type: "QII_SPEECH_API_WIDGET",
    icon: "https://static.bcmcdn.com/coco/player/unstable/ry8900mSJx.image/svg+xml?hash=FsYOLXpxnmH2losy47-80nFgg2Hn",
    docs: { url: 'https://www.yuque.com/yuqueyonghuslrsu6/qcqduw/xsz3g8nodpvqmmvv' },
    version: "1.0.0",
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    events: [
        { key: 'onStart', label: '识别开始', params: [] },
        { key: 'onEnd', label: '识别结束', params: [] },
        { key: 'onError', label: '识别出错', 
            params: [
                { key: 'error', label: '错误信息', valueType: 'string', }
            ]
        },
        { key: 'onResult', label: '识别到文本', 
            params: [
                { key: 'text', label: '文本', valueType: 'string', }
            ]
        },
        { key: 'onFinal', label: '为最终结果', 
            params: [
                { key: 'text', label: '文本', valueType: 'string', }
            ]
        },
    ],
    methods: [
        {
            key: "onStartSpeech",
            label: '开始识别',
            params: [
                { key: 'lang', valueType: 'string', defaultValue: 'zh-CN',
                    dropdown: [
                        { label: '简体中文', value: 'zh-CN', },
                        { label: '繁体中文', value: 'zh-TW', },
                        { label: '英文（美国）', value: 'en-US', },
                        { label: '英文（英国）', value: 'en-GB', },
                        { label: '法语', value: 'fr-FR', },
                        { label: '俄语', value: 'ru-RU', },
                        { label: '日语', value: 'ja-JP', },
                    ],
                },
                { key: 'continuous', label: '连续识别', valueType: 'boolean', defaultValue: false, },
                { key: 'interimResults', label: '返回实时结果', valueType: 'boolean', defaultValue: true, },
            ],
            blockOptions: { color: blockColor },
        },
        {
            key: "onStopSpeech",
            label: '结束识别',
            params: [],
            blockOptions: { color: blockColor },
        }
    ],
}


class Widget extends VisibleWidget {
    constructor(props) {
        super(props)
        Object.assign(this, props)

        // 语音识别实例
        this.recognition = null
    }

    // 开始识别
    onStartSpeech(lang, continuous, interimResults) {
        // 初始化 Web Speech API
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null
        if (!window.SpeechRecognition) {
            this.widgetError('浏览器不支持 Web Speech API')
            return
        }

        // 创建语音识别实例
        this.recognition = new window.SpeechRecognition()
        this.recognition.lang = lang                        // 设置语言
        this.recognition.continuous = continuous            // 连续识别
        this.recognition.interimResults = interimResults    // 中间结果

        // 开始识别
        this.recognition.start()

        // 识别开始的回调
        this.recognition.onstart = () => {
            this.emit('onStart')
        }
        // 识别结束的回调
        this.recognition.onend = () => {
            this.emit('onEnd')
        }
        // 识别出错的回调
        this.recognition.onerror = (event) => {
            this.emit('onError', event.error)
        }
        // 识别到文本的回调
        this.recognition.onresult = (event) => {
            for (let i = event.resultIndex; i < event.results.length; i++) {
                const result = event.results[i]
                const text = result[0].transcript.trim()
                const isFinal = result.isFinal
                
                // 判断是否为最终结果
                if (isFinal) {
                    this.emit('onFinal', text)
                } else {
                    this.emit('onResult', text)
                }
            }
        }
    }

    // 结束识别
    onStopSpeech() {
        if (!this.recognition) {
            this.widgetWarn('暂未开始识别')
            return
        }
        this.recognition.stop()
    }

}

exports.types = types
exports.widget = Widget