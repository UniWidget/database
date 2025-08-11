var window = this.window
const types = {
    isInvisibleWidget: true,
    type: "yuyinshibie_zx",
    icon: "https://static.codemao.cn/pickduck/H17mhnwPye.png?hash=FlCFX6KF2yqCsP19hc1qWUbR-jiP",
    title: "语音识别_zx",
    version: "1.1.1",
    docs: 'https://www.yuque.com/u37737036/zx/nm9p2896ozo2yg2f?singleDoc#',
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);

    }
    jianche() {
        if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
            return true
        }
        else {
            return false
        }
    }


    kaishi(lang, interimResults, maxAlternatives) {
        if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognition = new SpeechRecognition();

            recognition.lang = lang;
            recognition.interimResults = interimResults; // 是否返回临时结果
            recognition.maxAlternatives = maxAlternatives; // 返回的最大结果数量

            recognition.start();

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                this.emit('isok', transcript)
            };

            recognition.onerror = (event) => {
                this.emit('isnot', event.error)
            };

            recognition.onend = () => {
                this.emit('iswan')
            };
        } else {
            this.emit('isnot', '浏览器不支持Web Speech API')
        }
    }
}

types['events'].push({
    key: 'isok',
    label: '识别成功',
    params: [
        {
            key: 'zhi',
            label: '值',
            valueType: 'string',
        },
    ],

})
types['events'].push({
    key: 'iswan',
    label: '识别完成',
    params: [],

})
types['events'].push({
    key: 'isnot',
    label: '识别失败',
    params: [
        {
            key: 'error',
            label: '错误原因',
            valueType: 'string',
        },
    ],

})


types['methods'].push({
    key: 'jianche',
    label: '检测是否能使用',
    valueType: 'boolean',
    params: [],
})

types['methods'].push({
    key: 'kaishi',
    label: '开始识别',
    params: [
        {
            key: 'lang',
            label: '语言',
            valueType: 'string',
            defaultValue: "zh-CN",
        },
        {
            key: 'interimResults',
            label: '返回临时结果?',
            valueType: 'boolean',
            defaultValue: false,
        },
        {
            key: 'maxAlternatives',
            label: '返回结果最大值',
            valueType: 'number',
            defaultValue: 1,
        },
    ],
})

exports.types = types;
exports.widget = Widget;
