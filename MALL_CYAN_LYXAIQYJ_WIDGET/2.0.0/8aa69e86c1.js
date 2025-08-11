const axios = require('axios');
var CryptoJS = require("crypto-js");

// URL编码解码
function URLCode(text, openOrClose) {
    return openOrClose ? (unescape((decodeURI(text)))) : (escape((decodeURI(text))));
}

const types = {
    type: "MALL_CYAN_LYXAIQYJ_WIDGET",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "lyxandy电子邮件",
    version: "2.0.0",
    auther: "青舒计（API是刘andy）",
    docs: {
        url: "https://mail.lyxaiqyj.ml/docs"
    },
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [
        {
            key: "apiName",
            label: "[API Name]",
            valueType: "string",
            defaultValue: "悬浮停留查看说明",
            tooltip: "系统分配给你的用户名，默认以mail开头\nhttps://mail.lyxaiqyj.ml/docs"
        },
        {
            key: "apiKey",
            label: "[API Key]",
            valueType: "string",
            defaultValue: "悬浮停留查看说明",
            tooltip: "付款界面时设置的密码\nhttps://mail.lyxaiqyj.ml/docs"
        },
        {
            key: "from",
            label: "发件人名",
            valueType: "string",
            defaultValue: "测试邮件"
        },
        {
            key: "to",
            label: "收件人邮箱",
            valueType: "string",
            defaultValue: "test@example.com"
        },
        {
            key: "title",
            label: "标题",
            valueType: "string",
            defaultValue: "CoCo"
        },
        {
            key: "content",
            label: "内容",
            valueType: "string",
            editorType: "TextArea",
            defaultValue: "CoCo\n让世界在无难做的网页\n阿巴"
        }
    ],
    methods: [
        {
            key: "sendMail",
            label: "发送邮件并使用",
            params: [
                {
                    key: "getOrPost",
                    label: "",
                    labelAfter: "方法",
                    valueType: "string",
                    dropdown: [
                        {
                            label: "GET",
                            value: "get"
                        },
                        {
                            label: "POST",
                            value: "post"
                        }
                    ],
                    defaultValue: "get"
                }
            ]
        },
        {
            key: "get",
            label: "GET请求",
            params: [
                {
                    key: "url",
                    label: "",
                    labelAfter: "URL",
                    valueType: "string",
                    defaultValue: "/api/sendmail.php?apiName=[API Name]&from=测试邮件&to=test@example.com&title=CoCo&content=CoCo%0A让世界在无难做的网页%0A阿巴&check=[MD5字串]"
                }
            ],
            valueType: "object"
        },
        {
            key: "post",
            label: "POST请求",
            params: [
                {
                    key: "url",
                    label: "",
                    labelAfter: "URL",
                    valueType: "string",
                    defaultValue: "/api/sendmail.php"
                },
                {
                    key: "data",
                    label: "",
                    labelAfter: "数据",
                    valueType: ["string", "object", "array"],
                    defaultValue: '{"apiName": "[API Name]", "from": "测试邮件", "to": "test@example.com", "title": "测试邮件", "content": "CoCo\\n让世界在无难做的网页\\n阿巴", "check": "[MD5字串]"}'
                }
            ],
            valueType: "object"
        }
    ],
    events: [
        {
            key: "onResponse",
            label: "发送成功",
            params: []
        },
        {
            key: "onError",
            label: "发送失败",
            params: [
                {
                    key: "error",
                    label: "错误消息",
                    valueType: "string"
                }
            ]
        }
    ]
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
        this.apiName = props.apiName;
        this.apiKey = props.apiKey;
        this.from = props.from;
        this.to = props.to;
        this.title = props.title;
        this.content = props.content;
    }
    sendMail = (getOrPost) => {
        axios[getOrPost]('https://mail.lyxaiqyj.ml/api/sendmail.php' + (getOrPost == "get" ? `?apiName=${URLCode(this.apiName, true)}&from=${URLCode(this.from, true)}&to=${URLCode(this.to, true)}&title=${URLCode(this.title, true)}&content=${URLCode(this.content, true)}&check=${CryptoJS.MD5(`${this.apiName}${this.apiKey}`).toString()}` : ''), (getOrPost == "post" ? {
            data: {
                "apiName": this.apiName,
                "from": this.from,
                "to": this.to,
                "title": this.title,
                "content": this.content,
                "check": CryptoJS.MD5(`${this.apiName}${this.apiKey}`).toString()
            }
        } : {}))
            .then((response) => {
                if (JSON.parse(response)['status']) {
                    this.emit("onResponse")
                } else {
                    this.emit("onError", response['errinfo'])
                };
            })
            .catch((error) => {
                if (JSON.parse(response)['status']) {
                    this.emit("onResponse")
                } else {
                    this.emit("onError", error['errinfo'])
                };
            });
    }

    get = (url) => {
        var json = {};
        axios.get(url)
            .then((response) => {
                json = JSON.parse(response);
            })
            .catch((error) => {
                json = JSON.parse(error);
            });
        return json;
    }

    post = (url, data) => {
        var json = {};
        axios.get(url, {
            data: data
        })
            .then((response) => {
                json = JSON.parse(response);
            })
            .catch((error) => {
                json = JSON.parse(error);
            });
        return json;
    }
}

exports.types = types;
exports.widget = Widget;
