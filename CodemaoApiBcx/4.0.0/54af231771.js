//冷鱼闲风制作
//更新日期：2023年11月30日
var document = this.document;
var window = this.window;
const types = {
    isInvisibleWidget: true,
    type: "CodemaoApiBcx",
    icon: "https://cdn-community.codemao.cn/47/community/d2ViXzMwMDFfODQzODE4XzBfMTcwMTI1NzA4Nzg2Ml9jYjYzZmE5Yw.png",
    title: "点猫奇梦社会化",
    version: "4.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};
types.docs = {
    url: "https://doc.account.pgaot.com/doc-3323695"
};
types.platforms = ['web', 'android', 'ios'],
    types['events'].push({
        key: 'get_code',
        label: '登录信息回调',
        tooltip: '当用户登录后，反馈格式为JSON的结果',
        params: [{
            key: 'getcode',
            label: '数据',
            valueType: 'object',
            defaultValue: '',
        }, {
            key: 'PGToken',
            label: 'PGToken',
            valueType: 'string',
            defaultValue: '',
        },],
    }, {
        key: 'get_data',
        label: '转发信息回调',
        params: [{
            key: 'getcode',
            label: '数据',
            valueType: 'object',
            defaultValue: '',
        }, {
            key: 'code',
            label: '状态码',
            valueType: 'Number',
            defaultValue: '',
        }],
    })
types['methods'].push({
    key: 'openlogin',
    label: '打开授权界面',
    tooltip: '打开统一身份认证平台登录界面，登录成功后回调用户信息，具体可以看开发文档',
    params: [{
        key: 'type',
        label: '限制登录方式',
        valueType: 'string',
        defaultValue: '不限制',
        dropdown: [{
            label: '不限制',
            value: '不限制'
        }, {
            label: '编程猫',
            value: 'bcm'
        }, {
            label: '代码岛',
            value: 'dao3'
        }, {
            label: 'PG账户',
            value: 'pg'
        }, {
            label: 'PG二维码【生成】',
            value: 'qr'
        }, {
            label: 'PG二维码【扫码功能，可选】',
            value: 'qrscan'
        }],
    }],
}, {
    key: 'qrscan',
    label: '[二维码]获取用户数据',
    tooltip: '如果使用PG二维码登录的，需要使用本接口提取用户信息。',
    params: [{
        key: 'key',
        label: 'key',
        valueType: 'string',
        defaultValue: '',
    }, {
        key: 'sign',
        label: 'sign',
        valueType: 'string',
        defaultValue: '',

    }, {
        key: 'time',
        label: 'time',
        valueType: 'string',
        defaultValue: '',
    }],
}, {
    key: 'api',
    label: 'PG接口转发',
    tooltip: '接口来源于极艺星创作者社团接口开放平台，由极艺星社服务器转发。提交方式和原生接口相同',
    blockOptions: {
        color: "#FF003FAA"
    },
    params: [{
        key: 'lj',
        label: '路径',
        valueType: 'string',
        defaultValue: '',
    }, {
        key: 'fs',
        label: '提交方式',
        defaultValue: 'GET',
        dropdown: [{
            label: 'GET',
            value: 'GET'
        }, {
            label: 'POST',
            value: 'POST'
        }],
    }, {
        key: 'type',
        label: '接口',
        defaultValue: '编程猫',
        dropdown: [{
            label: '编程猫',
            value: 'codemao'
        }, {
            label: '神奇代码岛',
            value: 'dao3'
        }],
    }, {
        key: 'cookie',
        label: 'PGToken',
        valueType: 'string',
        defaultValue: '',
    }, {
        key: 'data',
        label: '参数',
        labelAfter: '(JSON格式字符串)',
        valueType: 'string',
        defaultValue: '',
    },],
},)
class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
    }
    qrscan = (key, sign, time) => {
        let json = {
            "key": key,
            "sign": sign,
            "time": time,
        }
        $.ajax("https://api.pgaot.com/login/qr_login_sign", {
            method: "POST",
            data: JSON.stringify(json),
            headers: { "Content-Type": "application/json;charset=UTF-8" },
            crossDomain: true,
            contentType: "application/json",
            success: (result) => {
                let json = JSON.parse(result);
                this.emit('get_data', json, json.code)
            }
        }
        )
    };
    api = (lj, fs, type, cookie, data) => {
        $.ajax("https://" + type + ".api.pgaot.com/" + lj, {
            method: fs,
            data: data,
            headers: { "X-Pgaot-Token": cookie, "Content-Type": "application/json;charset=UTF-8" },
            crossDomain: true,
            success: (result) => {
                let json = JSON.parse(result);
                this.emit('get_data', json, json.code)
            }
        }
        )
    };


    openlogin = (type) => {
        let url = '';
        if (type == 'pg') url = 'https://account.pgaot.com/auth_login?disable=1&message_return=' + window.location.protocol + "//" + window.location.host + "/";
        else if (type == '不限制') url = 'https://account.pgaot.com/auth_login?message_return=' + window.location.protocol + "//" + window.location.host + "/";
        else url = 'https://account.pgaot.com/auth_login_' + type + '?disable=1&message_return=' + window.location.protocol + "//" + window.location.host + "/";
        window.open(url, '点鸭奇梦社会化授权', 'scrollbars=0,status=0,menubar=0,resizable=no,location=no,toolbar=no,top=150,left=150,height=900,width=600');
        window.addEventListener("message", (event) => {
            let json = event.data;
            if (json.msg) {
                this.emit('get_code', json, json.token);
            }
        });
    }
}

function importScript(scriptUrl) {
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", scriptUrl);
    document.body.appendChild(script);
}
importScript("//static.pgaot.com/Assets/js/jquery-2.2.4.min.js")


exports.types = types;
exports.widget = Widget;