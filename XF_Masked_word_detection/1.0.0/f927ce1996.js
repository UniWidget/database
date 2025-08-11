const axios = require('axios')
const methodBlockColor = '#00AFC3'
const apiEndpoint = 'https://v.api.aa1.cn/api/api-mgc/index.php?msg='

const types = {
    title: "包含屏蔽词",
    type: "XF_Masked_word_detection",
    icon: "https://static.codemao.cn/pickduck/Skv3Cbj-ex.svg?hash=Fj6GoY6O-Q2S-V1jAiWihR3pwcol",
    docs: { url: 'https://www.yuque.com/xiaofeng-0fczj/rie0lc/fc1pf2hec0v5oipr' },
    version: "1.0.0",
    isInvisibleWidget: true,
    isGlobalWidget: true,
    hasAnyWidget: false,
    properties: [],
    events: [],
    methods: []
}

class Widget extends VisibleWidget {
    constructor(props) {
        super(props)
        Object.assign(this, props)
    }
}

types.methods.push({
    key: "containsSensitiveWord",
    valueType: 'boolean',
    params: [
        { key: 'text', valueType: 'string', defaultValue: '' }
    ],
    blockOptions: {
        color: methodBlockColor,
        callMethodLabel: false,
        tooltip: '输入文本检测是否包含屏蔽词'
    }
})

Widget.prototype.containsSensitiveWord = async function(text) {
    try {
        const encodedText = encodeURIComponent(text)
        const response = await axios.get(`${apiEndpoint}${encodedText}`)
        

        if (typeof response.data !== 'object' || response.data === null) {
            return false
        }
        
        return Object.prototype.hasOwnProperty.call(response.data, 'num')
    } catch (error) {
        console.error(`[屏蔽词检测] API调用失败: ${error.message}`)
        return false
    }
}

exports.types = types
exports.widget = Widget