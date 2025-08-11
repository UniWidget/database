/**
 * Copyright (c) 2023 xiaohong2022
 * 
 * 本控件为定制控件
 * 定制人员：旁观者JErS（561013124）
 * 控件名：鸭信小程序接口
 */

// 一些常量
const auther = "小宏XeLa" // 作者
const version = "1.0.0" // 版本号
const qq = 3174251894 // 作者QQ
const color = "#33ccff" // 积木颜色
const icon = 'https://www.cloudroo.top/favicon.ico'; // 图标

// 一些变量
var window = this.window; // window

// MD5 加密（来自 @伤心郁闷的BCX的一只萌新 的 md5加密控件）
var hexcase = 0; /* hex output format. 0 - lowercase; 1 - uppercase        */
var chrsz = 8; /* bits per input character. 8 - ASCII; 16 - Unicode      */

/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */
function hex_md5(s) {
    return binl2hex(core_md5(str2binl(s), s.length * chrsz));
}
/*
 * Perform a simple self-test to see if the VM is working
 */
function md5_vm_test() {
    return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
}

/*
 * Calculate the MD5 of an array of little-endian words, and a bit length
 */
function core_md5(x, len) {
    /* append padding */
    x[len >> 5] |= 0x80 << len % 32;
    x[(((len + 64) >>> 9) << 4) + 14] = len;

    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;

    for (var i = 0; i < x.length; i += 16) {
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;

        a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
        d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

        a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
        a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

        a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
        c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

        a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
        d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

        a = safe_add(a, olda);
        b = safe_add(b, oldb);
        c = safe_add(c, oldc);
        d = safe_add(d, oldd);
    }
    return Array(a, b, c, d);
}

/*
 * These functions implement the four basic operations the algorithm uses.
 */
function md5_cmn(q, a, b, x, s, t) {
    return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
}
function md5_ff(a, b, c, d, x, s, t) {
    return md5_cmn((b & c) | (~b & d), a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t) {
    return md5_cmn((b & d) | (c & ~d), a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t) {
    return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t) {
    return md5_cmn(c ^ (b | ~d), a, b, x, s, t);
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safe_add(x, y) {
    var lsw = (x & 0xffff) + (y & 0xffff);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xffff);
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function bit_rol(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt));
}

/*
 * Convert a string to an array of little-endian words
 * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
 */
function str2binl(str) {
    var bin = Array();
    var mask = (1 << chrsz) - 1;
    for (var i = 0; i < str.length * chrsz; i += chrsz) bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << i % 32;
    return bin;
}

/*
 * Convert an array of little-endian words to a hex string.
 */
function binl2hex(binarray) {
    var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    var str = "";
    for (var i = 0; i < binarray.length * 4; i++) {
        str +=
            hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xf) +
            hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xf);
    }
    return str;
}

var types = { // 自定义控件设置
    type: 'XH_STARDREAMNET_DUCKCHAT_APPLET_INTERFACE_WIDGET', // 控件编号
    icon, // 控件图标
    title: '鸭信小程序接口', // 控件名称
    platforms: ['android', 'ios', 'web'], // 控件可用范围
    version, // 控件版本
    auther, // 控件作者
    docs: { url: "https://coco.codemao.cn/editor/player/193961132?channel=h5&from=sdmdcai_widget", }, // 帮助链接
    isInvisibleWidget: true, // 是功能控件
    isGlobalWidget: true, // 是全局控件
    properties: [ // 属性
        {
            key: "appid",
            label: "app_id",
            valueType: 'string',
            defaultValue: "",
        }, {
            key: "appkey",
            label: "app_key",
            valueType: 'string',
            defaultValue: "",
        },
    ],
    methods: [ // 方法
        {
            key: 'START',
            label: '启动服务',
            params: [],
            blockOptions: {
                color,
                line: "不会使用？打开控件属性面板“如何使用”看看？"
            },
            tooltip: "启动服务。"
        }, {
            key: 'JUDGE',
            label: '是否使用鸭信小程序打开',
            params: [],
            valueType: "boolean",
            blockOptions: {
                color,
                space: 28
            },
            tooltip: "判断是否是使用点鸭小程序打开的，\n是则返回真，不是则返回假。"
        }, {
            key: 'APPLICATION_AUTHORIZED',
            label: '申请小程序授权用户数据',
            params: [
                {
                    key: "CONTENT",
                    label: "申请说明",
                    valueType: 'string',
                    defaultValue: "",
                },
            ],
            blockOptions: {
                color,
                line: "授权相关"
            },
            tooltip: "申请小程序授权用户数据，\n授权成功后触发“当授权成功时”事件。\n具体实现请看文档。"
        }, {
            key: 'GET_LOGIN_URL',
            label: '获取星梦登录网址',
            valueType: "string",
            params: [],
            blockOptions: {
                color,
                space: 28
            },
            tooltip: "获取星梦登录网址，\n放在网页框里即可实现以用户操作登录的形式授权，\n授权成功后触发“当授权成功时”事件。\n具体实现请看文档。"
        }, {
            key: 'GET_USER_DATA',
            label: '获取用户数据',
            params: [
                {
                    key: 'DATA',
                    label: '',
                    valueType: ['string', 'number', 'boolean', 'color', 'array', 'object'],
                    defaultValue: ''
                },
                {
                    key: 'KEY',
                    label: '中的',
                    valueType: 'string',
                    dropdown: [
                        { label: 'UID', value: 'id', },
                        { label: '昵称', value: 'name', },
                        { label: '头像', value: 'img', },
                        { label: '邮箱', value: 'email', },
                        { label: '星梦币', value: 'money', },
                    ],
                },
            ],
            valueType: 'string',
            blockOptions: {
                color
            },
        }, {
            key: 'SHARING',
            label: '调用分享功能',
            params: [
                {
                    key: "URL",
                    label: "链接",
                    valueType: 'string',
                    defaultValue: "",
                },
                {
                    key: "TITLE",
                    label: "标题",
                    valueType: 'string',
                    defaultValue: "",
                },
                {
                    key: "TEXT",
                    label: "内容",
                    valueType: 'string',
                    defaultValue: "",
                },
                {
                    key: "PICTURE_URL",
                    label: "图片链接",
                    valueType: 'string',
                    defaultValue: "",
                },
            ],
            blockOptions: {
                color,
                inputsInline: false,
                line: "功能调用"
            },
            tooltip: "调用鸭信的分享功能。\n具体实现请看文档。"
        }, {
            key: 'CODE_SCANNING',
            label: '调用扫码功能',
            params: [],
            blockOptions: {
                color
            },
            tooltip: "调用扫码功能，\n扫码成功后触发“获得扫码数据”事件。\n具体实现请看文档。"
        }, {
            key: 'CLOSE_APPLET',
            label: '关闭小程序',
            params: [],
            blockOptions: {
                color
            },
            tooltip: "关闭小程序（即退出小程序）"
        }, {
            key: 'SEND_MESSAGE_TO_OFFICIAL_ACCOUNT',
            label: '发送消息至公众号',
            params: [
                {
                    key: "CONTENT",
                    label: "消息内容",
                    valueType: 'string',
                    defaultValue: "",
                },
            ],
            blockOptions: {
                color
            },
            tooltip: "发送消息至公众号。\n具体实现请看文档。"
        }, {
            key: 'MD5',
            label: 'MD5加密',
            valueType: "string",
            params: [
                {
                    key: "CONTENT",
                    label: "",
                    valueType: 'string',
                    defaultValue: "",
                },
            ],
            blockOptions: {
                color,
                line: "其他"
            },
            tooltip: "MD5加密"
        },
    ],
    events: [{ // 事件   
        key: 'auth_userdata_CALLBACK',
        label: '授权成功',
        params: [
            {
                key: 'DATA',
                label: '用户数据',
                valueType: 'object',
            },
        ],
    }, {
        key: 'scan_code_CALLBACK',
        label: '获得扫码数据',
        params: [
            {
                key: 'DATA',
                label: '数据',
                valueType: 'object',
            },
        ],
    }, {
        key: 'error_CALLBACK',
        label: '发生错误',
        params: [
            {
                key: 'TYPE',
                label: '错误码',
                valueType: 'number',
            },
            {
                key: 'MSG',
                label: '错误消息',
                valueType: 'string',
            },
        ],
    }],
};

class Widget extends VisibleWidget { // 控件函数代码
    // 构造器
    constructor(props) {
        super(props);
        Object.assign(this, props);
        this._inited = false;
        this.widgetLog(`制作者：小宏XeLa`);
        this.widgetLog(`编程猫个人主页：https://shequ.codemao.cn/user/9232151`);
        this.widgetLog(`使用说明：控件属性面板“如何使用”点进去（里面有相关的指引），登录星梦开放平台，点击“我的应用”，选择/创建一个应用，打开小程序功能，点击“帮助文档”，根据提示进行属性和积木配置`);
    };
    _SEND(name, param) {
        window.parent.postMessage({
            "DUCKCHAT": this._SIGN(name, param),
            "data": {
                "name": name,
                "param": param,
            }
        });
    };
    _SIGN(name, param) {
        return hex_md5(JSON.stringify({
            data: {
                name, param
            },
            app_key: this.appkey,
            app_id: this.appid
        }));
    };
    _CHECKSIGN(sign, name, param) {
        var ns = this._SIGN(name, param);
        return ns == sign;
    };
    START() {
        if (this._inited) return;
        this._inited = true;
        window.addEventListener('message', ({ data }) => {
            if (!data["DUCKCHAT"]) return;
            var sign = data["DUCKCHAT"];
            if (data.data.name == "error") {
                this.emit("error_CALLBACK", data.data.param.type, data.data.param.msg);
            } else {
                if (!this._CHECKSIGN(sign, data.data.name, data.data.param)) return;
                this.emit(data.data.name + "_CALLBACK", data.data.param.data);
            }
        });
    };
    JUDGE() {
        return window.location.href.includes("duckchat");
    };
    APPLICATION_AUTHORIZED(CONTENT) {
        this._SEND("auth_userdata", {
            content: CONTENT
        });
    };
    GET_LOGIN_URL() {
        return "https://coco.codemao.cn/editor/player/158588267?app_id=" + encodeURIComponent(this.appid) + "&sign=" + hex_md5(JSON.stringify({
            app_id: this.appid,
            app_key: this.appkey
        })) + "&channel=h5";
    };
    SHARING(URL, TITLE, TEXT, PICTURE_URL) {
        this._SEND("share", {
            url: URL,
            title: TITLE,
            text: TEXT,
            picture_url: PICTURE_URL,
        });
    };
    CODE_SCANNING() {
        this._SEND("scan_code", {});
    };
    CLOSE_APPLET() {
        this._SEND("close", {});
    };
    SEND_MESSAGE_TO_OFFICIAL_ACCOUNT(CONTENT) {
        this._SEND("sendmsg_toa", {
            content: CONTENT
        });
    };
    GET_USER_DATA(DATA, KEY) {
        return DATA[KEY];
    };
    MD5(text) {
        return hex_md5(text);
    }
};

// 导出控件
exports.types = types;
exports.widget = Widget;