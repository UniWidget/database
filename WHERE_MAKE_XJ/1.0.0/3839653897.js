var document = this.document

const types = {
    type: 'WHERE_MAKE_XJ',
    icon: 'https://ocean.codemao.cn/appcraft/resource/icon/社交/口红.svg',
    title: '去哪里制作',
    version: '1.0.0',
    author: 'XJ王大哥(2357942846)',
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    methods: [
        {
            key: 'text',
            label: '修改文案',
            params: [{key: 'text', valueType: 'string', defaultValue: ""}],
            blockOptions: {callMethodLabel: false}
        },
        {
            key: 'icon',
            label: '修改图标',
            params: [{key: 'text', valueType: 'string', defaultValue: ""}],
            blockOptions: {callMethodLabel: false}
        },
        {
            key: 'background',
            label: '修改背景色',
            params: [{key: 'text', valueType: 'string', defaultValue: ""}],
            blockOptions: {callMethodLabel: false}
        }
    ],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props)
    }
    text = t => document.querySelector("#root > div > div.styles_appUrlBtn__1rsjt > span").innerText=t
    icon = t => document.querySelector("#root > div > div.styles_appUrlBtn__1rsjt > img").src=t
    background = t => document.querySelector("#root > div > div.styles_appUrlBtn__1rsjt").style.background=t
}

exports.types = types
exports.widget = Widget