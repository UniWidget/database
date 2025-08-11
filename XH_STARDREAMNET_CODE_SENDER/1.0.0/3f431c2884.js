var CryptoJS = require("crypto-js");
const axios = require('axios');

const types = {
    isInvisibleWidget: true,
    type: "XH_STARDREAMNET_CODE_SENDER",
    icon: "https://www.cloudroo.top/file/image/SDN.png",
    title: "星梦验证码代发",
    version: "1.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);

    }

}

types['events'].push({
    key: 'success',
    label: '验证码发送成功',
    params: [],

})

types['events'].push({
    key: 'error',
    label: '验证码发送失败',
    params: [
        {
            key: 'paramName',
            label: '错误原因',
            valueType: 'string',
        },],
})

types['events'].push({
    key: 'error_check',
    label: '验证码效验失败',
    params: [
        {
            key: 'paramName',
            label: '错误原因',
            valueType: 'string',
        },],
})

types['methods'].push({
    key: 'send',
    label: '发送验证码',
    params: [
        {
            key: 'appid',
            label: 'appid',
            valueType: 'string',
            defaultValue: "",
        },
        {
            key: 'token',
            label: 'token',
            valueType: 'string',
            defaultValue: "",
        },
        {
            key: 'to',
            label: '对方邮箱',
            valueType: 'string',
            defaultValue: "",
        },],

    blockOptions: {
        color: '#ffbb55',
        icon: '',
        generateBlock: true,
        inputsInline: false,
        space: 16,
    },
})
Widget.prototype.send = function (appid, token, to,) {
    axios.post((['https://www.cloudroo.top/api/code.php?mode=send&appid=', appid, '&key=', CryptoJS.SHA256(([to, token].join(''))), '&to=', to].join('')))
        .then((response) => {
            if ((response.data["code"]) == 200) {
                this.emit("success");
            } else {
                this.emit("error", (response.data["info"]));
            }

        })
        .catch((error) => {
            this.emit("error", '请求失败');
        });

}


types['methods'].push({
    key: 'check',
    label: '效验验证码',
    params: [
        {
            key: 'to',
            label: '邮箱',
            valueType: 'string',
            defaultValue: "",
        },
        {
            key: 'code',
            label: '验证码',
            valueType: 'string',
            defaultValue: "",
        },],
    valueType: "boolean",
    blockOptions: {
        color: '#ffbb55',
        icon: '',
        generateBlock: true,
        inputsInline: true,
        space: 16,
    },
})
Widget.prototype.check = function (to, code) {
    return new Promise(r => {
        axios.post((['https://www.cloudroo.top/api/code.php?to=', to, '&code=', code].join('')))
            .then((response) => {
                if ((response.data["code"]) == 200) {
                    r(true)
                } else {
                    this.emit("error_check", (response.data["info"]));
                    r(false);
                }

            })
            .catch((error) => {
                this.emit("error_check", '请求失败');
                r(false);
            });
    })
}
exports.types = types;
exports.widget = Widget;
