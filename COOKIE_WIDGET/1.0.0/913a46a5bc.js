
document=this.document;

const types = {
    type: "COOKIE_WIDGET",
    icon: "https://ocean.codemao.cn/appcraft/resource/icon/基础/编辑_2.svg",
    title: "Cookie控件",
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    methods: [
        {
            key: 'setCookie',
            label: '添加Cookie',
            params: [
                {
                    key: 'cookieName',
                    label: '键',
                    valueType: 'string',
                    defaultValue: 'rickroll'
                },
                {
                    key: 'cookieValue',
                    label: '值',
                    valueType: 'string',
                    defaultValue: '114514'
                },
            ],
        },
        {
            key: 'proSetCookie',
            label: '高级 添加Cookie',
            params: [
                {
                    key: 'cookieName',
                    label: '键',
                    valueType: 'string',
                    defaultValue: 'rick'
                },
                {
                    key: 'cookieValue',
                    label: '值',
                    valueType: 'string',
                    defaultValue: 'lol'
                },
                {
                    key: 'expireTime',
                    label: '过期时间',
                    valueType: 'string',
                    defaultValue: 'Sat, 1 Apr 2828 11:45:14 GMT'
                },
            ],
        },
        {
            key: 'getAllCookie',
            label: '获取所有Cookie',
            params: [],
            valueType: 'array',
            tooltip: '返回值类型: ["键=值","键=值",...]'
        }
    ],
    events: [],
}

class Widget extends InvisibleWidget {
    constructor(props){super(props);}
    setCookie(cookieName,cookieValue){
        document.cookie = `${cookieName}=${cookieValue}`;
    }
    proSetCookie(cookieName,cookieValue,expireTime){
        document.cookie = `${cookieName}=${cookieValue}; expires=${expireTime}`
    }
    getAllCookie(){
        var cookie = document.cookie;
        var ACookie = cookie.split(';');
        return ACookie;
    }
}

exports.types=types;
exports.widget=Widget;