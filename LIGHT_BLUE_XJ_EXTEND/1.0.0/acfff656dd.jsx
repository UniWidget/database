var document = this.document

const types = {
    type: "LIGHT_BLUE_XJ_EXTEND",
    icon: "https://ocean.codemao.cn/appcraft/resource/icon/基础/修改工具.svg",
    title: "轻蓝扩展包",
    version: '1.0.0',
    author: 'XJ王大哥(2357942846)',
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    methods: [
        {
            key: 'img',
            label: '图片',
            params: [{key:'src',label: '链接',valueType: 'string',defaultValue:""}],
            valueType: 'string',
            blockOptions: {color: "rgb(160, 115, 255)",callMethodLabel: false,line: '快速生成HTML'}
        },
        {
            key: 'audio',
            label: '音频',
            params: [{key:'src',label: '链接',valueType: 'string',defaultValue:""}],
            valueType: 'string',
            blockOptions: {color: "rgb(160, 115, 255)",callMethodLabel: false}
        },
        {
            key: 'video',
            label: '视频',
            params: [{key:'src',label: '链接',valueType: 'string',defaultValue:""}],
            valueType: 'string',
            blockOptions: {color: "rgb(160, 115, 255)",callMethodLabel: false}
        },
        {
            key: 'a',
            label: '超链接',
            params: [
                {key:'href',label: '链接',valueType: 'string',defaultValue:""},
                {key:'text',label: '文本',valueType: 'string',defaultValue:""}
            ],
            valueType: 'string',
            blockOptions: {color: "rgb(160, 115, 255)",callMethodLabel: false}
        },
        {
            key: 'set',
            label: '修改气泡',
            params: [
                {key:'start',label:'第',labelAfter:'行',valueType:'number',defaultValue:0},
                {key:'key',label:'属性',valueType:'string',defaultValue:''},
                {key:'value',label:'的值为',valueType:'string',defaultValue:''},
            ],
            blockOptions: {callMethodLabel: false,line: '修改气泡'}
        },
        {
            key: 'setStyle',
            label: '修改气泡',
            params: [
                {key:'start',label:'第',labelAfter:'行',valueType:'number',defaultValue:0},
                {key:'key',label:'样式',valueType:'string',defaultValue:''},
                {key:'value',label:'的值为',valueType:'string',defaultValue:''},
            ],
            blockOptions: {callMethodLabel: false}
        },
        {
            key: 'get',
            label: '读取气泡',
            params: [
                {key:'start',label:'第',labelAfter:'行',valueType:'number',defaultValue:0},
                {key:'key',label:'属性',valueType:'string',defaultValue:''},
            ],
            valueType: 'string',
            blockOptions: {callMethodLabel: false,line: '读取气泡'}
        },
        {
            key: 'getStyle',
            label: '读取气泡',
            params: [
                {key:'start',label:'第',labelAfter:'行',valueType:'number',defaultValue:0},
                {key:'key',label:'样式',valueType:'string',defaultValue:''},
            ],
            valueType: 'string',
            blockOptions: {callMethodLabel: false}
        },
        {
            key: 'modification',
            label: '',
            params: [
                {key:'object',label: '修改字典',valueType: ['string', 'number', 'boolean', 'array', 'color', 'object',],defaultValue:""},
                {key:'key',label: '键',valueType: ['string', 'number', 'boolean', 'array', 'color', 'object',],defaultValue:""},
                {key:'value',label: '的值为',valueType: ['string', 'number', 'boolean', 'array', 'color', 'object',],defaultValue:""},
            ],
            valueType: ['string', 'number', 'boolean', 'array', 'color', 'object',],
            blockOptions: {color: "rgb(160, 115, 255)",callMethodLabel: false,line: '快速修改字典'}
        },
        {
            key: 'delete',
            label: '',
            params: [
                {key:'object',label: '删除字典',valueType: ['string', 'number', 'boolean', 'array', 'color', 'object',],defaultValue:""},
                {key:'key',label: '的键',valueType: ['string', 'number', 'boolean', 'array', 'color', 'object',],defaultValue:""},
            ],
            valueType: 'string',
            blockOptions: {color: "rgb(160, 115, 255)",callMethodLabel: false}
        }
    ],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props)
    }
    img = s => `<img src="${s}">`
    audio = s => `<audio controls src="${s}"></audio>`
    video = s => `<video controls style="width:100%;" src="${s}"></video>`
    a = (h,t) => `<a href="${h}">${t}</a>`
    set = (s,k,v) => document.querySelector(`#lite-chatbox > div:nth-child(${s}) > span.content`).setAttribute(k,v)
    setStyle = (s,k,v) => document.querySelector(`#lite-chatbox > div:nth-child(${s}) > span.content`).style.setProperty(k,v)
    grt = (s,k) => document.querySelector(`#lite-chatbox > div:nth-child(${s}) > span.content`).getAttribute(k)
    getStyle = (s,k) => document.querySelector(`#lite-chatbox > div:nth-child(${s}) > span.content`).style.getPropertyValue(k)
    modification = (m,k,v) => {
        m[k] = v
        return m
    }
    delete = (m,k) => {
        delete m[k]
        return m
    }
}

exports.types = types
exports.widget = Widget