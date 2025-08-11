/** 
 * @author: 琦琦 
 * 修改人：垃圾桶
 * 版本：1.3.2 PRO+
 * 来自 Qii-UI 组件库
 */

const methodBlockColor = ' #2C9AFF'
const createBlockColor = ' #62B7FF'
const returnBlockColor = ' #F4AE3B'

var document = this.document
let timer = null

const defaultMsgData = JSON.stringify([
    {
        id: "001",
        type: "text",
        position: "left",
        name: "组件库",
        avatar: "https://img.picgo.net/2025/01/04/-2023-11-29-1453small5e6a2609de01ed01.png",
        msg: "你好，有什么事吗？",
        image: "",
        file: "",
        level: "Qii",
        levelType: "blue",
        tag: ""
    },
    {
        id: "002",
        type: "text",
        position: "right",
        name: "琦琦",
        avatar: "https://img.picgo.net/2024/12/14/2921809d8ae9b27884.jpeg",
        msg: "这是一条测试消息，纯文本类型，显示在右侧。",
        image: "",
        file: "",
        level: "至高无上",
        levelType: "gold",
        tag: ""
    },
    {
        id: "003",
        type: "tips",
        position: "",
        avatar: "",
        name: "",
        msg: "12:30",
        image: "",
        file: "",
        level: "",
        levelType: "",
        tag: ""
    },
    {
        id: "004",
        type: "textImage",
        position: "left",
        name: "不知名群友",
        avatar: "https://img.picgo.net/2025/01/04/-2023-11-30-211709565d5471c24518fb.png",
        msg: "可以发送图片、视频、音频消息，也支持图片和文字混合发送。",
        image: "https://img.picgo.net/2025/01/04/20FE37D7BFF2D55628B4CD816DBAF82F212d0326161cd39c.jpg",
        file: "",
        level: "LV100",
        levelType: "grey",
        tag: ""
    },
    {
        id: "005",
        type: "audio",
        position: "right",
        name: "琦琦",
        avatar: "https://img.picgo.net/2024/12/14/2921809d8ae9b27884.jpeg",
        msg: "",
        image: "",
        file: "http://m701.music.126.net/20250206090312/2f0052919a6945a49da6d07b5abbf56c/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/45416588313/3f07/0eb2/b810/a9dd28895837e0425e0b2ef215f30207.mp3?vuutv=MTR4235NygyrjXsMILvl0+zFervbEp5Z2VBC60oO0vGkvhKwr83oETayoa4K5iblQ6TWx8kaPTBAqD/EhcNeFQn9OUk0CVZTEbNsqya+288=",
        level: "至高无上",
        levelType: "gold",
        tag: ""
    },
    {
        id: "006",
        type: "video",
        position: "left",
        name: "不知名群友",
        avatar: "https://img.picgo.net/2025/01/04/-2023-11-30-211709565d5471c24518fb.png",
        msg: "",
        image: "https://p1.music.126.net/p35Nj1sTP8eDXbNHJQY5Pw==/3411784582361783.jpg?imageView&quality=75",
        file: "http://vodkgeyttp8.vod.126.net/cloudmusic/OCFgJDQgIDAxNiAgNSE5IA==/mv/503273/5c827eeb595bde8d3a41b1bd9399552d.mp4?wsSecret=7b71b6cdbd27c54dc17b9e9ac7447a96&wsTime=1738802845",
        level: "LV100",
        levelType: "grey",
        tag: ""
    }
], null, 2)

let types = {
    title: "聊天框 PRO+",
    type: "QII_CHAT_BOX_WIDGET",
    icon: "https://static.bcmcdn.com/coco/player/unstable/Hyu5RLKI1e.image/png?hash=FjQnwvVW8GPSjKmsp58K-6l6U6SR",
    docs: { url: 'https://www.yuque.com/yuqueyonghuslrsu6/qcqduw/xsz3g8nodpvqmmvv' },
    version: "1.3.2 PRO+",
    isInvisibleWidget: false,
    isGlobalWidget: false,
    properties: [
        { key: '__width', label: '宽度', valueType: 'number', defaultValue: 360 },
        { key: '__height', label: '高度', valueType: 'number', defaultValue: 640 },
        { key: 'msgData', label: '聊天数据', valueType: 'string', editorType: 'TextArea', defaultValue: defaultMsgData },
        { key: 'showLeftAvatar', label: '显示左侧头像', valueType: 'boolean', defaultValue: true },
        { key: 'showRightAvatar', label: '显示右侧头像', valueType: 'boolean', defaultValue: true },
        { key: 'showLeftName', label: '显示左侧昵称', valueType: 'boolean', defaultValue: true },
        { key: 'showRightName', label: '显示右侧昵称', valueType: 'boolean', defaultValue: true },
        { key: 'avatarRadius', label: '头像圆角大小', valueType: 'number', defaultValue: 10, unit: '像素' },
        { key: 'msgSize', label: '气泡文本大小', valueType: 'number', defaultValue: 14, unit: '像素' },
        { key: 'leftMsgColor', label: '左侧文本颜色', valueType: 'color', defaultValue: '#101010' },
        { key: 'rightMsgColor', label: '右侧文本颜色', valueType: 'color', defaultValue: '#FFFFFF' },
        { key: 'nameColor', label: '昵称颜色', valueType: 'color', defaultValue: '#6F6F6F' },
        { key: 'leftBubbleColor', label: '左侧气泡颜色', valueType: 'color', defaultValue: '#F2F2F5' },
        { key: 'rightBubbleColor1', label: '右上渐变', valueType: 'color', defaultValue: '#1E90FF' },
        { key: 'rightBubbleColor2', label: '左下渐变', valueType: 'color', defaultValue: '#58CDFF' },
        { key: 'bubbleStyle', label: '气泡样式', valueType: 'string', defaultValue: 'three',
            dropdown: [
                { label: '圆角矩形', value: 'all' },
                { label: '有小啾啾', value: 'three' },
            ],
        },
        { key: 'bubbleRadius', label: '气泡圆角', valueType: 'number', defaultValue: 8, unit: '像素' },
        { key: 'tipsTextColor', label: '提示消息文字颜色', valueType: 'color', defaultValue: '#A0A0A0' },
        { key: 'topBlank', label: '顶部留白', valueType: 'number', defaultValue: 10, unit: '像素' },
        { key: 'bottomBlank', label: '底部留白', valueType: 'number', defaultValue: 10, unit: '像素' },
        { key: 'leftBlank', label: '两侧留白', valueType: 'number', defaultValue: 50, unit: '像素' },
        { key: 'charSpeed', label: '逐字速度', valueType: 'number', defaultValue: 100, unit: '毫秒/字', 
          description: '数值越小速度越快' },
        { key: 'theme', label: '主题', valueType: 'string', defaultValue: 'default',
            dropdown: [
                { label: '默认', value: 'default' },
                { label: '奶龙', value: '奶龙' },
            ],
        },
    ],
    events: [
        { 
            key: 'onClick', 
            label: '点击',
            subTypes: [
                {
                    key: 'event',
                    dropdown: [
                        { label: '消息', value: 'Message' },
                        { label: '气泡', value: 'Bubble' },
                        { label: '提示', value: 'Tips' },
                        { label: '头像', value: 'Avatar' },
                        { label: '昵称', value: 'Name' },
                        { label: '头衔', value: 'Level' },
                    ]
                }
            ],
            params: [
                { key: 'number', label: '行数', valueType: 'number' },
                { key: 'data', label: '数据', valueType: 'string' }
            ],
        },
        {
            key: 'onLongPress',
            label: '长按',
            subTypes: [
                {
                    key: 'event',
                    dropdown: [
                        { label: '气泡', value: 'Bubble' },
                        { label: '头像', value: 'Avatar' },
                    ]
                }
            ],
            params: [
                { key: 'number', label: '行数', valueType: 'number' }, 
                { key: 'data', label: '数据', valueType: 'string' }, 
                { key: 'x', label: 'X', valueType: 'number' },
                { key: 'y', label: 'Y', valueType: 'number' },
            ],
        }
    ],
    methods: [
        {
            key: 'createMessage',
            label: '创建消息',
            valueType: 'string',
            params: [
                { 
                    key: "type", valueType: 'string', defaultValue: 'text', 
                    dropdown: [
                        { label: '纯文本', value: 'text' },
                        { label: '富文本', value: 'richText' },
                        { label: '（有风险）高级富文本', value: 'richTextUnsafe' },
                        { label: '逐字输出（纯文本）', value: 'charByChar' },
                        { label: '文本+图片', value: 'textImage' },
                        { label: '图片', value: 'image' },
                        { label: '视频', value: 'video' },
                        { label: '音频', value: 'audio' },
                    ], 
                },
                { key: "position", valueType: 'string', defaultValue: 'right', 
                    dropdown: [
                        { label: '右侧', value: 'right' },
                        { label: '左侧', value: 'left' },
                    ], 
                },
                { key: "name", label: '昵称', valueType: 'string', defaultValue: '' },
                { key: "avatar", label: '头像', valueType: 'string', defaultValue: '' },
                { key: "msg", label: '内容', valueType: 'string', defaultValue: '' },
                { key: "image", label: '图片链接', valueType: 'string', defaultValue: '' },
                { key: "file", label: '文件链接', valueType: 'string', defaultValue: '' },
                { key: "level", label: '头衔', valueType: 'string', defaultValue: '' },
                { key: "levelType", valueType: 'string', defaultValue: 'gold', 
                    dropdown: [
                        { label: '金色', value: 'gold' },
                        { label: '青色', value: 'cyan' },
                        { label: '蓝色', value: 'blue' },
                        { label: '灰色', value: 'grey' },
                    ], 
                },
                { key: "tag", label: '备注', valueType: 'string', defaultValue: '' },
                { key: "id", label: 'ID', valueType: 'string', defaultValue: '' },
                { key: "charSpeed", label: '逐字速度(ms)', valueType: 'number', defaultValue: 0, 
                  description: '0=使用全局设置，>0 自定义速度' },
            ],
            blockOptions: { callMethodLabel: false, line: '创建消息', color: createBlockColor },
        },

        {
            key: 'createTips',
            label: '创建提示',
            valueType: 'string',
            params: [
                { key: "text", valueType: 'string', defaultValue: '' },
                { key: "tag", label: '备注', valueType: 'string', defaultValue: '' },
            ],
            blockOptions: { callMethodLabel: false, color: createBlockColor },
        },
        {
            key: 'addMessage',
            label: '添加',
            params: [
                { key: "data", label: '消息', valueType: 'string', defaultValue: '' },
            ],
            blockOptions: { line: '编辑数据', color: methodBlockColor },
        },
        {
            key: 'addMsgData',
            label: '添加',
            params: [
                { key: "data", label: '聊天数据', valueType: ['array', 'string'], defaultValue: '' },
            ],
            blockOptions: { color: methodBlockColor },
        },
        {
            key: 'insertMsg',
            label: '插入',
            params: [
                { key: "line", label: '在第', labelAfter: '行之后', valueType: 'number', defaultValue: 1 },
                { key: "data", label: '消息', valueType: 'string', defaultValue: '' },
            ],
            blockOptions: { color: methodBlockColor },
        },
        {
            key: 'replaceMsg',
            label: '替换',
            params: [
                { key: "line", label: '第', labelAfter: '行的消息', valueType: 'number', defaultValue: 1 },
                { key: "data", label: '为', valueType: 'string', defaultValue: '' },
            ],
            blockOptions: { color: methodBlockColor },
        },
        {
            key: 'deleteMsg',
            label: '删除',
            params: [
                { key: "line", label: '第', labelAfter: '行的消息', valueType: 'number', defaultValue: 1 },
            ],
            blockOptions: { color: methodBlockColor },
        },
        {
            key: 'deleteEndMsg',
            label: '删除最后一行的消息',
            params: [],
            blockOptions: { color: methodBlockColor },
        },
        {
            key: 'emptyMsg',
            label: '清空所有消息',
            params: [],
            blockOptions: { color: methodBlockColor },
        },
        {
            key: 'pauseCharAnimation',
            label: '逐字输出暂停',
            params: [
                { key: "seconds", label: '暂停', labelAfter: '秒', valueType: 'number', defaultValue: 1 },
            ],
            blockOptions: { color: methodBlockColor },
        },
        {
            key: 'terminateCharAnimation',
            label: '终止逐字输出',
            params: [],
            blockOptions: { color: methodBlockColor },
        },
        {
            key: 'resumeCharAnimation',
            label: '恢复逐字输出',
            params: [],
            blockOptions: { color: methodBlockColor },
        },

        {
            key: 'getLineMsg',
            label: '读取',
            valueType: 'string',
            params: [
                { key: "line", label: '第', labelAfter: '行的消息', valueType: 'number', defaultValue: 1 },
            ],
            blockOptions: { callMethodLabel: false, line: '读取数据', color: returnBlockColor },
        },
        {
            key: 'getTargetMsg',
            label: '获取',
            valueType: 'number',
            params: [
                { key: "key", valueType: 'string', defaultValue: 'tag',
                    dropdown: [
                        { label: '备注', value: 'tag' },
                        { label: 'ID', value: 'id' },
                    ], 
                },
                { key: "value", label: '为', labelAfter: '的消息所在行数', valueType: 'string', defaultValue: '' },
            ],
            blockOptions: { callMethodLabel: false , color: returnBlockColor },
        },
        {
            key: 'getMsgLength',
            label: '消息数量',
            valueType: 'number',
            params: [],
            blockOptions: { callMethodLabel: false, color: returnBlockColor },
        },
        {
            key: 'getJsonData',
            label: '聊天数据',
            valueType: ['string'],
            params: [],
            blockOptions: { callMethodLabel: false, color: returnBlockColor },
        },
        {
            key: 'getCurrentCharIndex',
            label: '当前逐字输出的字符数',
            valueType: 'number',
            params: [],
            blockOptions: { callMethodLabel: false, color: returnBlockColor },
        },

        {
            key: 'scrollToLine',
            label: '滚动到',
            params: [
                { key: "line", label: '第', labelAfter: '行', valueType: 'number', defaultValue: 1 },
                { key: "anim", label: '动画', valueType: 'boolean', defaultValue: true },
            ],
            blockOptions: { line: '滚动', color: '#08C2D6' },
        },
        {
            key: 'scrollToBottom',
            label: '滚动到底部',
            params: [
                { key: "anim", label: '动画', valueType: 'boolean', defaultValue: true },
            ],
            blockOptions: { color: '#08C2D6' },
        },
        {
            key: "getWidgetId",
            label: '的 ID',
            valueType: 'string',
            params: [],
            blockOptions: { line: '其他', callMethodLabel: false, color: returnBlockColor },
        },
    ],
}

class Widget extends VisibleWidget {
    constructor(props) {
        super(props)
        Object.assign(this, props)
        this.charByCharTimers = {} // 存储逐字输出定时器的对象
        this.charByCharPauseTimers = {} // 存储暂停定时器的对象
        this.lastTerminatedCharMsg = null // 存储最后终止的逐字消息
        this.themeStyles = {
            'default': {},
            '奶龙': {
                rightBubbleColor1: '#FFD700', // 金黄色
                rightBubbleColor2: '#FFA500', // 橙黄色
                rightMsgColor: '#000000',     // 黑色文本
                nameColor: '#8B7500'          // 深金色昵称
            }
        }
    }

    // 生成唯一ID
    generateUniqueId() {
        return Date.now() + '-' + Math.random().toString(36).substr(2, 9)
    }

    // 获取当前主题的样式
    getThemeStyle(prop) {
        if (this.theme && this.themeStyles[this.theme] && this.themeStyles[this.theme][prop]) {
            return this.themeStyles[this.theme][prop]
        }
        return this[prop] // 返回默认值
    }

    // 创建消息
    createMessage(type, position, name, avatar, msg, image, file, level, levelType, id, tag, charSpeed = 0) {
        const result = { 
            type, 
            position, 
            name, 
            avatar, 
            msg, 
            image, 
            file, 
            level, 
            levelType, 
            tag 
        }
        
        // 确保每条消息都有唯一ID
        if (!id || id.trim() === "") {
            result.id = this.generateUniqueId()
        } else {
            result.id = id
        }
        
        // 为逐字输出类型添加初始状态
        if (type === 'charByChar') {
            result.charIndex = 0 // 当前显示的字符索引
            result.fullMsg = msg // 存储完整消息
            result.isAnimating = true // 动画进行中标志
            result.charSpeed = charSpeed > 0 ? charSpeed : this.charSpeed
        }
        
        return result
    }
    
    createTips(text, tag) {
        return { 
            type: 'tips', 
            msg: text, 
            tag: tag,
            id: this.generateUniqueId() // 提示消息也添加ID
        }
    }

    // JSON 格式校验
    isJsonString(str) {
        if (!str) {
            this.widgetError('数据不能为空')
            return false
        }
        try {
            const obj = JSON.parse(str)
            return typeof obj === 'object' && obj !== null
        } catch (e) {
            this.widgetError('请传入正确的 JSON 数据')
            return false
        }
    }

    // 添加消息
    addMessage(data) {
        if (!this.isJsonString(data)) return
        const jsonData = JSON.parse(data)
        
        // 确保消息有唯一ID
        if (!jsonData.id || jsonData.id.trim() === "") {
            jsonData.id = this.generateUniqueId()
        }
        
        const newMsgData = [...JSON.parse(this.msgData), jsonData]
        this.setProps({
            msgData: JSON.stringify(newMsgData)
        })
        this.__autoScrollToBottom(data)
        
        // 如果是逐字输出类型，启动逐字动画
        if (jsonData.type === 'charByChar' && jsonData.fullMsg) {
            this.startCharByCharAnimation(jsonData.id, jsonData.fullMsg.length, jsonData.charSpeed || this.charSpeed)
        }
    }

    // 添加聊天数据
    addMsgData(data) {
        if (data === '') {
            this.widgetError('聊天数据不能为空。')
            return
        }
        
        try {
            const parseData = JSON.parse(data)
            if (Array.isArray(parseData)) {
                // 为每条消息生成唯一ID（如果缺失）
                parseData.forEach(item => {
                    if (!item.id || item.id.trim() === "") {
                        item.id = this.generateUniqueId()
                    }
                })
                
                this.setProps({
                    msgData: JSON.stringify([...JSON.parse(this.msgData), ...parseData])
                })
                
                // 检查是否有逐字输出类型的消息
                parseData.forEach(item => {
                    if (item.type === 'charByChar' && item.fullMsg) {
                        const speed = item.charSpeed > 0 ? item.charSpeed : this.charSpeed
                        this.startCharByCharAnimation(item.id, item.fullMsg.length, speed)
                    }
                })
            } else {
                this.widgetError('格式错误，聊天数据需要数组格式。')
            }
        } catch (error) {
            this.widgetError('聊天数据解析失败: ' + error.message)
        }
    }

    // 插入消息
    insertMsg(line, data) {
        if (!this.isJsonString(data)) return
        const jsonData = JSON.parse(data)
        
        // 确保消息有唯一ID
        if (!jsonData.id || jsonData.id.trim() === "") {
            jsonData.id = this.generateUniqueId()
        }
        
        const msgData = JSON.parse(this.msgData)
        msgData.splice(line, 0, jsonData)
        this.setProps({
            msgData: JSON.stringify(msgData)
        })
        
        // 如果是逐字输出类型，启动逐字动画
        if (jsonData.type === 'charByChar' && jsonData.fullMsg) {
            const speed = jsonData.charSpeed > 0 ? jsonData.charSpeed : this.charSpeed
            this.startCharByCharAnimation(jsonData.id, jsonData.fullMsg.length, speed)
        }
    }

    // 替换消息
    replaceMsg(line, data) {
        if (!this.isJsonString(data)) return
        const jsonData = JSON.parse(data)
        const msgData = JSON.parse(this.msgData)
        
        // 清除原有逐字动画定时器
        if (msgData[line - 1] && msgData[line - 1].type === 'charByChar') {
            this.stopCharByCharAnimation(msgData[line - 1].id)
        }
        
        // 确保新消息有唯一ID
        if (!jsonData.id || jsonData.id.trim() === "") {
            jsonData.id = this.generateUniqueId()
        }
        
        msgData[line - 1] = jsonData
        this.setProps({
            msgData: JSON.stringify(msgData)
        })
        
        // 如果是逐字输出类型，启动逐字动画
        if (jsonData.type === 'charByChar' && jsonData.fullMsg) {
            const speed = jsonData.charSpeed > 0 ? jsonData.charSpeed : this.charSpeed
            this.startCharByCharAnimation(jsonData.id, jsonData.fullMsg.length, speed)
        }
    }

    // 删除消息
    deleteMsg(line) {
        const msgData = JSON.parse(this.msgData)
        const deletedMsg = msgData[line - 1]
        
        // 如果是逐字输出类型，清除定时器
        if (deletedMsg && deletedMsg.type === 'charByChar') {
            this.stopCharByCharAnimation(deletedMsg.id)
        }
        
        msgData.splice(line - 1, 1)
        this.setProps({
            msgData: JSON.stringify(msgData)
        })
    }

    // 删除最后一行的消息
    deleteEndMsg() {
        const msgData = JSON.parse(this.msgData)
        if (msgData.length === 0) return
        const deletedMsg = msgData[msgData.length - 1]
        
        // 如果是逐字输出类型，清除定时器
        if (deletedMsg && deletedMsg.type === 'charByChar') {
            this.stopCharByCharAnimation(deletedMsg.id)
        }
        
        msgData.pop()
        this.setProps({
            msgData: JSON.stringify(msgData)
        })
    }

    // 清空所有消息
    emptyMsg() {
        // 清除所有逐字输出定时器
        Object.keys(this.charByCharTimers).forEach(id => {
            clearInterval(this.charByCharTimers[id])
            delete this.charByCharTimers[id]
        })
        
        // 清除所有暂停定时器
        Object.keys(this.charByCharPauseTimers).forEach(id => {
            clearTimeout(this.charByCharPauseTimers[id])
            delete this.charByCharPauseTimers[id]
        })
        
        this.setProps({
            msgData: '[]'
        })
    }
    
    // 启动逐字输出动画
    startCharByCharAnimation(msgId, totalChars, speed = 100) {
        // 如果已经有定时器，先清除
        if (this.charByCharTimers[msgId]) {
            clearInterval(this.charByCharTimers[msgId])
            delete this.charByCharTimers[msgId]
        }
        
        // 设置定时器逐字显示
        this.charByCharTimers[msgId] = setInterval(() => {
            const msgData = JSON.parse(this.msgData)
            const msgIndex = msgData.findIndex(msg => msg.id === msgId)
            
            if (msgIndex === -1) {
                // 消息已被删除，清除定时器
                clearInterval(this.charByCharTimers[msgId])
                delete this.charByCharTimers[msgId]
                return
            }
            
            const msg = msgData[msgIndex]
            if (msg.charIndex < totalChars) {
                msg.charIndex++
                this.setProps({
                    msgData: JSON.stringify(msgData)
                })
            } else {
                // 动画完成，清除定时器
                clearInterval(this.charByCharTimers[msgId])
                delete this.charByCharTimers[msgId]
                msg.isAnimating = false
                this.setProps({
                    msgData: JSON.stringify(msgData)
                })
            }
        }, speed) // 使用自定义速度
    }
    
    // 停止逐字输出动画
    stopCharByCharAnimation(msgId) {
        if (this.charByCharTimers[msgId]) {
            clearInterval(this.charByCharTimers[msgId])
            delete this.charByCharTimers[msgId]
            
            // 更新消息状态
            const msgData = JSON.parse(this.msgData)
            const msgIndex = msgData.findIndex(msg => msg.id === msgId)
            if (msgIndex !== -1) {
                const msg = msgData[msgIndex]
                msg.isAnimating = false
                this.setProps({
                    msgData: JSON.stringify(msgData)
                })
            }
        }
    }
    
    // 暂停逐字输出动画
    pauseCharAnimation(seconds) {
        // 找到最后一条正在运行的逐字消息
        const msgData = JSON.parse(this.msgData)
        const charMsg = msgData.reverse().find(
            msg => msg.type === 'charByChar' && msg.isAnimating
        )
        
        if (!charMsg) return
        
        const msgId = charMsg.id
        
        // 清除原有的定时器
        if (this.charByCharTimers[msgId]) {
            clearInterval(this.charByCharTimers[msgId])
            delete this.charByCharTimers[msgId]
        }
        
        // 设置暂停定时器，在指定秒后恢复动画
        if (this.charByCharPauseTimers[msgId]) {
            clearTimeout(this.charByCharPauseTimers[msgId])
        }
        
        this.charByCharPauseTimers[msgId] = setTimeout(() => {
            const msgData = JSON.parse(this.msgData)
            const msgIndex = msgData.findIndex(msg => msg.id === msgId)
            
            if (msgIndex !== -1 && 
                msgData[msgIndex].type === 'charByChar' &&
                msgData[msgIndex].charIndex < msgData[msgIndex].fullMsg.length) {
                
                this.startCharByCharAnimation(
                    msgId, 
                    msgData[msgIndex].fullMsg.length,
                    msgData[msgIndex].charSpeed || this.charSpeed
                )
            }
            
            delete this.charByCharPauseTimers[msgId]
        }, seconds * 1000)
    }
    
    // 终止逐字输出动画
    terminateCharAnimation() {
        // 找到最后一条正在运行的逐字消息
        const msgData = JSON.parse(this.msgData)
        const charMsg = msgData.reverse().find(
            msg => msg.type === 'charByChar' && msg.isAnimating
        )
        
        if (!charMsg) return
        
        // 存储最后终止的消息信息
        this.lastTerminatedCharMsg = {
            msgId: charMsg.id,
            charIndex: charMsg.charIndex,
            fullMsg: charMsg.fullMsg,
            charSpeed: charMsg.charSpeed || this.charSpeed
        }
        
        // 停止动画
        this.stopCharByCharAnimation(charMsg.id)
    }
    
    // 恢复逐字输出动画
    resumeCharAnimation() {
        if (!this.lastTerminatedCharMsg) return
        
        const { msgId, charIndex, fullMsg, charSpeed } = this.lastTerminatedCharMsg
        const msgData = JSON.parse(this.msgData)
        const msgIndex = msgData.findIndex(msg => msg.id === msgId)
        
        // 检查消息是否存在且未完成
        if (msgIndex !== -1 && 
            msgData[msgIndex].type === 'charByChar' &&
            charIndex < fullMsg.length) {
            
            // 更新消息状态
            msgData[msgIndex].isAnimating = true
            msgData[msgIndex].charIndex = charIndex
            
            this.setProps({
                msgData: JSON.stringify(msgData)
            })
            
            // 重新启动动画
            this.startCharByCharAnimation(
                msgId, 
                fullMsg.length,
                charSpeed
            )
        }
        
        // 清除存储的信息
        this.lastTerminatedCharMsg = null
    }
    
    // 获取当前逐字输出的字符数
    getCurrentCharIndex() {
        // 找到最后一条正在运行的逐字消息
        const msgData = JSON.parse(this.msgData)
        const charMsg = msgData.reverse().find(
            msg => msg.type === 'charByChar' && msg.isAnimating
        )
        
        return charMsg ? charMsg.charIndex : 0
    }

    // 读取指定行的消息
    getLineMsg(line) {
        const msgData = JSON.parse(this.msgData)
        if (line > 0 && line <= msgData.length) {
            return JSON.stringify(msgData[line - 1])
        }
        return ''
    }

    // 获取指定参数所匹配的消息行数
    getTargetMsg(key, value) {
        const msgData = JSON.parse(this.msgData)
        for (let i = 0; i < msgData.length; i++) {
            if (msgData[i][key] === value) {
                return i + 1
            }
        }
        return 0
    }

    // 获取消息数量
    getMsgLength() {
        return JSON.parse(this.msgData).length
    }

    // 获取聊天数据
    getJsonData() {
        return this.msgData
    }

    // 滚动到指定行
    scrollToLine(line, anim) {
        const childElement = document.querySelector(`.Qii_${this.__widgetId} .msg_list > div:nth-child(${line})`)
        if (childElement) {
            childElement.scrollIntoView({ behavior: anim ? 'smooth' : 'auto', block: 'center' })
        }
    }

    // 滚动到底部
    scrollToBottom(anim) {
        const list = document.querySelector(`.Qii_${this.__widgetId} .msg_list`)
        if (anim) {
            list.classList.add('scrollAnim')
        } else {
            list.classList.remove('scrollAnim')
        }
        list.scrollTop = list.scrollHeight
    }

    // 判断是否自动滚动到底部
    __autoScrollToBottom(data) {
        const jsonData = JSON.parse(data)
        const list = document.querySelector(`.Qii_${this.__widgetId} .msg_list`)
        const isBottom = list.scrollHeight - (list.scrollTop + list.clientHeight) <= 500

        // 左侧消息，并且已滚动到底部，才会自动滚动。右侧消息始终自动滚动
        if (jsonData.position == 'left' && isBottom) {
            this.scrollToBottom(false)
        } else if (jsonData.position == 'right') {
            this.scrollToBottom(false)
        }
    }

    // 头像
    avatarElement(data, index) { 
        const handleLongPress = (e) => {
            e.preventDefault()
            this.fireEvent('onLongPress', {
                event: 'Avatar',
                number: index,
                data: JSON.stringify(data),
                x: e.clientX,
                y: e.clientY
            })
        }
        return (
        <div className="avatar"
            onClick={() => this.fireEvent('onClick', {
                event: 'Avatar',
                number: index,
                data: JSON.stringify(data)
            })}
            onContextMenu={(e) => handleLongPress(e)}
            >
            <img 
                src={data.avatar} alt="" 
                style={{ borderRadius: this.avatarRadius + 'px' }} 
            />
        </div>
    )}

    // 昵称和头衔
    nameElement(data, index) { return (
        <div className="user_info">
            { data.level && <div className={`level ${data.levelType}`} 
                onClick={() => this.fireEvent('onClick', {
                    event: 'Level',
                    number: index,
                    data: JSON.stringify(data)
                })}>
                {data.level}
            </div> }
            <p className="name" style={{ color: this.getThemeStyle('nameColor') }} 
                onClick={() => this.fireEvent('onClick', {
                    event: 'Name',
                    number: index,
                    data: JSON.stringify(data)
                })}>
                {data.name}
            </p>
        </div>
    )}

    // 气泡渲染
    bubbleElement(data, index) { 
        const handleLongPress = (e) => {
            e.preventDefault()
            this.fireEvent('onLongPress', {
                event: 'Bubble',
                number: index,
                data: JSON.stringify(data),
                x: e.clientX,
                y: e.clientY
            })
        }
        
        // 处理逐字输出
        let displayContent = null
        
        if (data.type === 'charByChar') {
            // 逐字类型
            const displayText = data.fullMsg ? data.fullMsg.substring(0, data.charIndex || 0) : data.msg
            displayContent = <p style={{ fontSize: this.msgSize + 'px' }}>{displayText}</p>
        } else {
            // 非逐字类型
            switch(data.type) {
                case 'richText':
                    displayContent = <div dangerouslySetInnerHTML={{ __html: data.msg }}></div>
                    break
                case 'richTextUnsafe':
                    displayContent = <div className="richTextUnsafe" dangerouslySetInnerHTML={{ __html: data.msg }}></div>
                    break
                case 'textImage':
                    displayContent = (
                        <>
                            <p style={{ fontSize: this.msgSize + 'px' }}>{data.msg}</p>
                            <img className="image" src={data.image} alt="" style={{ borderRadius: this.bubbleRadius - 2 + 'px' }}/>
                        </>
                    )
                    break
                default:
                    displayContent = <p style={{ fontSize: this.msgSize + 'px' }}>{data.msg}</p>
            }
        }
        
        // 获取气泡背景
        let bubbleBackground
        if (data.position === 'left') {
            bubbleBackground = this.getThemeStyle('leftBubbleColor')
        } else {
            if (this.theme === '奶龙') {
                bubbleBackground = 'linear-gradient(225deg, #FFD700, #FFA500)'
            } else {
                bubbleBackground = `linear-gradient(225deg, ${this.getThemeStyle('rightBubbleColor1')}, ${this.getThemeStyle('rightBubbleColor2')})`
            }
        }
        
        // 获取文本颜色
        const textColor = data.position === 'left' 
            ? this.getThemeStyle('leftMsgColor') 
            : this.getThemeStyle('rightMsgColor')
        
        return (
        <div 
            className={`bubble ${data.position}`} 
            onClick={() => this.fireEvent('onClick', {
                event: 'Bubble',
                number: index,
                data: JSON.stringify(data)
            })}
            onContextMenu={(e) => handleLongPress(e)}
            style={{ 
                background: bubbleBackground,
                borderRadius: this.radiusStyle(data),
                color: textColor
            }}
        >
            {displayContent}
        </div>
    )}

    // 圆角样式
    radiusStyle(data) {
        const radius = this.bubbleRadius
        if (this.bubbleStyle === 'three') {
            return data.position === 'left' 
                ? `2px ${radius}px ${radius}px ${radius}px` 
                : `${radius}px 2px ${radius}px ${radius}px`
        } else {
            return `${radius}px`
        }
    }

    // 图片消息
    imageMsgElement(data, index) { return (
        <div className={`image_msg`}>
            <img 
                src={data.image} alt="" 
                onClick={() => this.fireEvent('onClick', {
                    event: 'Bubble',
                    number: index,
                    data: JSON.stringify(data)
                })}
                style={{ borderRadius: this.radiusStyle(data) }} 
            />
        </div>
    )}

    // 视频消息
    videoMsgElement(data, index) { return (
        <div className={`video_msg`}>
            <video
                poster={data.image}
                controls 
                onClick={() => this.fireEvent('onClick', {
                    event: 'Bubble',
                    number: index,
                    data: JSON.stringify(data)
                })}
                style={{ borderRadius: this.radiusStyle(data) }} 
            >
                <source src={data.file} type="video/mp4"></source>
                浏览器不支持播放视频
            </video>
        </div>
    )}

    // 音频消息
    audioMsgElement(data, index) { return (
        <div className={`audio_msg`}>
            <audio
                controls 
                onClick={() => this.fireEvent('onClick', {
                    event: 'Bubble',
                    number: index,
                    data: JSON.stringify(data)
                })}
                style={{ borderRadius: this.radiusStyle(data) }} 
            >
                <source src={data.file} type="audio/mpeg"></source>
                浏览器不支持播放音频
            </audio>
        </div>
    )}

    // 消息结构
    messageElement(data, index) { return (
        <div className={`msg_item ${data.position}`} 
            onClick={() => this.fireEvent('onClick', {
                event: 'Message',
                number: index,
                data: JSON.stringify(data)
            })}>
            
            { this.showLeftAvatar && data.position === 'left' && this.avatarElement(data, index) }
            
            <div className={`content`}>
                { this.showLeftName && data.position === 'left' && this.nameElement(data, index) }
                { this.showRightName && data.position === 'right' && this.nameElement(data, index) }
                
                {/* 文本类型消息 */}
                {(data.type === 'text' || 
                  data.type === 'richText' || 
                  data.type === 'richTextUnsafe' ||
                  data.type === 'charByChar') && 
                  this.bubbleElement(data, index)}
                
                {/* 复合类型消息 */}
                { data.type === 'textImage' && this.bubbleElement(data, index) }
                
                {/* 媒体类型消息 */}
                { data.type === 'image' && this.imageMsgElement(data, index) }
                { data.type === 'video' && this.videoMsgElement(data, index) }
                { data.type === 'audio' && this.audioMsgElement(data, index) }
            </div>
            
            { this.showRightAvatar && data.position === 'right' && this.avatarElement(data, index) }
        </div>
    )}

    // 提示类型消息结构
    tipsElement(data, index) { return (
        <div className={`tips_item`} 
            onClick={() => this.fireEvent('onClick', {
                event: 'Tips',
                number: index,
                data: JSON.stringify(data)
            })}>
            <div className="content">
                <p className="text" style={{ color: this.tipsTextColor }}>{data.msg}</p>
            </div>
        </div>
    )}

    // 遍历聊天数据，渲染消息
    renderMsg() {
        try {
            const data = JSON.parse(this.msgData || '[]')
            return data.map((item, index) => {
                if (item.type === 'tips') {
                    return this.tipsElement(item, index + 1)
                } else {
                    return this.messageElement(item, index + 1)
                }
            })
        } catch (error) {
            if (this.msgData === '') {
                console.warn('请添加聊天数据。')
            } else {
                this.widgetError('聊天数据解析失败，请检查格式是否正确。')
                console.error('聊天数据解析失败:', error)
            }
            return null
        }
    }

    // 渲染控件
    render() { return (
        <div className={`Qii_${this.__widgetId}`}>

            <div className="msg_list">
                { this.renderMsg() }
            </div>

            <style>
                {` 
                    .Qii_${this.__widgetId} {
                        width: 100%;
                        height: 100%;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    }
                    .Qii_${this.__widgetId} p {
                        margin: 0;
                        padding: 0;
                    }
                    .Qii_${this.__widgetId} .msg_list {
                        padding: ${this.topBlank}px 10px ${this.bottomBlank}px 10px;
                        width: 100%;
                        height: 100%;
                        overflow-y: auto;
                        scrollbar-width: none;
                        box-sizing: border-box;
                    }
                    .Qii_${this.__widgetId} .msg_list.scrollAnim {
                        scroll-behavior: smooth;
                    }
                    .Qii_${this.__widgetId} .msg_list::-webkit-scrollbar {
                        display: none !important;
                    }
                    
                    /* 消息项 */
                    .Qii_${this.__widgetId} .msg_item {
                        padding-top: 5px;
                        margin-bottom: 10px;
                        display: flex;
                        align-items: flex-start;
                        box-sizing: border-box;
                    }
                    .Qii_${this.__widgetId} .msg_item.left {
                        padding-right: ${this.leftBlank}px;
                        justify-content: flex-start;
                    }
                    .Qii_${this.__widgetId} .msg_item.right {
                        padding-left: ${this.leftBlank}px;
                        justify-content: flex-end;
                    }
                    .Qii_${this.__widgetId} .msg_item.left .content {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        max-width: 80%;
                    }
                    .Qii_${this.__widgetId} .msg_item.right .content {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                        max-width: 80%;
                    }

                    /* 头像 */
                    .Qii_${this.__widgetId} .avatar {
                        width: 36px;
                        height: 36px;
                        object-fit: cover;
                        overflow: hidden;
                        flex-shrink: 0;
                    }
                    .Qii_${this.__widgetId} .avatar img {
                        width: 100%;
                        height: 100%;
                    }
                    .Qii_${this.__widgetId} .msg_item.left .avatar {
                        margin-right: 10px;
                    }
                    .Qii_${this.__widgetId} .msg_item.right .avatar {
                        margin-left: 10px;
                    }

                    /* 头衔和昵称区域 */
                    .Qii_${this.__widgetId} .user_info {
                        margin-bottom: 4px;
                        display: flex;
                        align-items: center;
                    }
                    .Qii_${this.__widgetId} .msg_item.left .user_info {
                        justify-content: flex-start;
                    }
                    .Qii_${this.__widgetId} .msg_item.right .user_info {
                        justify-content: flex-end;
                    }
                    
                    /* 头衔 */
                    .Qii_${this.__widgetId} .user_info .level {
                        padding: 1px 4px 0 4px;
                        margin-right: 5px;
                        height: 18px;
                        border-radius: 4px;
                        color: #FFFFFF;
                        font-size: 12px;
                        font-weight: bold;
                        transform: scale(0.9);
                        white-space: nowrap;
                    }
                    .Qii_${this.__widgetId} .user_info .level.gold {
                        background: linear-gradient(225deg, #FFC73E, #FFC636);
                    }
                    .Qii_${this.__widgetId} .user_info .level.cyan {
                        background: linear-gradient(225deg, #36DACC, #44E9DB);
                    }
                    .Qii_${this.__widgetId} .user_info .level.blue {
                        background: linear-gradient(225deg, #1E90FF, #1EB2FF);
                    }
                    .Qii_${this.__widgetId} .user_info .level.grey {
                        background: linear-gradient(225deg, #A8B0C5, #A8B0C5);
                    }

                    /* 昵称 */
                    .Qii_${this.__widgetId} .user_info .name {
                        font-size: 12px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        max-width: 150px;
                    }

                    /* 气泡 - 优化换行 */
                    .Qii_${this.__widgetId} .bubble {
                        padding: 8px 12px;
                        margin-top: 0px;
                        border-radius: ${this.bubbleRadius}px;
                        word-wrap: break-word;
                        overflow-wrap: break-word;
                        word-break: break-word;
                        max-width: 100%;
                        box-sizing: border-box;
                        line-height: 1.4;
                    }
                    .Qii_${this.__widgetId} .msg_item.left .bubble {
                        border-top-left-radius: ${this.bubbleStyle === 'three' ? '2px' : this.bubbleRadius}px;
                    }
                    .Qii_${this.__widgetId} .msg_item.right .bubble {
                        border-top-right-radius: ${this.bubbleStyle === 'three' ? '2px' : this.bubbleRadius}px;
                    }

                    /* 气泡内的文本 */
                    .Qii_${this.__widgetId} .bubble p {
                        word-wrap: break-word;
                        overflow-wrap: break-word;
                        word-break: break-word;
                        line-height: 1.4;
                    }

                    /* 气泡内的图片 */
                    .Qii_${this.__widgetId} .bubble .image {
                        max-width: 100%;
                        max-height: 300px;
                        margin: 5px 0;
                        border-radius: ${this.bubbleRadius - 2}px;
                    }

                    /* 高级富文本样式 */
                    .Qii_${this.__widgetId} .richTextUnsafe {
                        max-width: 100%;
                        overflow: hidden;
                    }
                    .Qii_${this.__widgetId} .richTextUnsafe p {
                        margin: 0;
                        padding: 0;
                        line-height: 1.4;
                    }
                    .Qii_${this.__widgetId} .richTextUnsafe img {
                        max-width: 100%;
                        height: auto;
                    }
                    .Qii_${this.__widgetId} .richTextUnsafe a {
                        color: #1E90FF;
                        text-decoration: underline;
                    }
                    
                    /* 图片消息 */
                    .Qii_${this.__widgetId} .msg_item .image_msg img {
                        margin-top: 2px;
                        max-width: 160px;
                        max-height: 300px;
                        border-radius: ${this.bubbleRadius}px;
                    }

                    /* 视频消息 */
                    .Qii_${this.__widgetId} .msg_item .video_msg video {
                        margin-top: 2px;
                        max-width: 220px;
                        max-height: 300px;
                        border-radius: ${this.bubbleRadius}px;
                    }

                    /* 音频消息 */
                    .Qii_${this.__widgetId} .msg_item .audio_msg audio {
                        margin-top: 2px;
                        width: 240px;
        height: 42px;
        border-radius: ${this.bubbleRadius}px;
    }
    .Qii_${this.__widgetId} .msg_item.left .audio_msg audio {
        color-scheme: light;
    }
    .Qii_${this.__widgetId} .msg_item.left .audio_msg audio::-webkit-media-controls-panel {
        background-color: #FFFFFF;
    }
    .Qii_${this.__widgetId} .msg_item.right .audio_msg audio {
        color-scheme: dark;
    }
    .Qii_${this.__widgetId} .msg_item.right .audio_msg audio::-webkit-media-controls-panel {
        background-color: ${this.theme === '奶龙' ? '#FFD700' : '#1E90FF'};
    }
    
    /* 提示类型消息 */
    .Qii_${this.__widgetId} .tips_item {
        margin: 10px 0;
        display: flex;
        justify-content: center;
        text-align: center;
    }
    .Qii_${this.__widgetId} .tips_item .content {
        padding: 3px 6px;
        background: rgba(0, 0, 0, 0.05);
        border-radius: 8px;
        font-size: 12px;
        display: inline-block;
        max-width: 80%;
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