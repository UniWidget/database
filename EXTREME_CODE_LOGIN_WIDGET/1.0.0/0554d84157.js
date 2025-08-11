const path = "https://login.extreme-code.cn/connect.php"; // API接口链接
const name = "极码云聚合登录"; // 控件名
const icon = "https://login.extreme-code.cn/assets/img/logo.png"; // 控件图标

const axios = require('axios');

var types = {
    type: 'EXTREME_CODE_LOGIN_WIDGET',
    icon: icon,
    title: name,
    docs: { url: "https://www.yuque.com/asnake/xcqwcw/pk5c3gl7cgurhfic?singleDoc", },
    platforms: ['android', 'ios', 'web'],
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends VisibleWidget {
    constructor(props) {
        super(props);
        Object.assign(this, props);
    };
};

types['properties'].push({
    key: 'appid',
    label: 'APPID',
    valueType: 'string',
    defaultValue: '',
});

types['properties'].push({
    key: 'appkey',
    label: 'APPKEY',
    valueType: 'string',
    defaultValue: '',
});

[{
    key: "Login",
    name: "获取跳转登录地址",
    event: [
        {
            key: 'url',
            label: '链接',
            valueType: 'string',
            defaultValue: '',
        },
        {
            key: 'qrcode',
            label: '二维码链接',
            valueType: 'string',
            defaultValue: '',
        },
    ],
    methods: [
        {
            key: 'type',
            label: '登录方式',
            valueType: 'string',
            defaultValue: 'qq'
        },
        {
            key: 'redirect_uri',
            label: '返回链接',
            valueType: 'string',
            defaultValue: "",
        },
    ],
    url: (type, redirect_uri) => 'act=login&type=' + type + '&redirect_uri=' + redirect_uri
}, {
    key: "Callback",
    name: "获取授权信息",
    event: [
        {
            key: 'social_uid',
            label: '第三方登录UID',
            valueType: 'string',
            defaultValue: '',
        },
        {
            key: 'nickname',
            label: '用户昵称',
            valueType: 'string',
            defaultValue: '',
        },
        {
            key: 'faceimg',
            label: '用户头像',
            valueType: 'string',
            defaultValue: '',
        },
        {
            key: 'gender',
            label: '用户性别',
            valueType: 'string',
            defaultValue: '',
        },
        {
            key: 'location',
            label: '用户所在地',
            valueType: 'string',
            defaultValue: '',
        },
        {
            key: 'ip',
            label: '用户登录IP',
            valueType: 'string',
            defaultValue: '',
        },
    ],
    methods: [
        {
            key: 'type',
            label: '登录方式',
            valueType: 'string',
            defaultValue: 'qq'
        },
        {
            key: 'code',
            label: 'Authorization Code',
            valueType: 'string',
            defaultValue: "",
        },
    ],
    url: (type, code) => 'act=callback&type=' + type + '&code=' + code
}, {
    key: "Query",
    name: "获取用户信息",
    event: [
        {
            key: 'nickname',
            label: '用户昵称',
            valueType: 'string',
            defaultValue: '',
        },
        {
            key: 'faceimg',
            label: '用户头像',
            valueType: 'string',
            defaultValue: '',
        },
        {
            key: 'gender',
            label: '用户性别',
            valueType: 'string',
            defaultValue: '',
        },
        {
            key: 'location',
            label: '用户所在地',
            valueType: 'string',
            defaultValue: '',
        },
        {
            key: 'ip',
            label: '用户登录IP',
            valueType: 'string',
            defaultValue: '',
        },
    ],
    methods: [
        {
            key: 'type',
            label: '登录方式',
            valueType: 'string',
            defaultValue: 'qq'
        },
        {
            key: 'social_uid',
            label: '第三方登录UID',
            valueType: 'string',
            defaultValue: "",
        },
    ],
    url: (type, social_uid) => 'act=query&type=' + type + '&social_uid=' + social_uid
}].forEach(item => {
    types['events'].push({
        key: 'on' + item.key + 'Success',
        label: item.name + '成功',
        params: item.event,
    });

    types['events'].push({
        key: 'on' + item.key + 'Error',
        label: item.name + '失败',
        params: [
            {
                key: 'code',
                label: '错误代码',
                valueType: 'number',
                defaultValue: 0,
            },
            {
                key: 'msg',
                label: '错误消息',
                valueType: 'string',
                defaultValue: '',
            },
        ],
    });

    types['methods'].push({
        key: item.key,
        label: item.name,
        params: item.methods,
        blockOptions: {
            inputsInline: false,
        },
    });

    Widget.prototype[item.key] = function (...args) {
        axios({
            method: 'get',
            baseURL: path,
            url: (
                '?appid=' +
                encodeURIComponent(this.appid) +
                '&appkey=' +
                encodeURIComponent(this.appkey) +
                '&' + item.url(...args)
            ),
        }).then(({ data }) => {
            if (data.code == 0) {
                this.emit('on' + item.key + 'Success', ...(item.event.map(v => data[v.key])));
            }
            else {
                this.emit('on' + item.key + 'Error', data.errcode, data.msg);
            }
        }).catch((error) => {
            this.emit('on' + item.key + 'Error', -1, '请求失败');
        });
    };
})

types['methods'].push({
    key: 'getType',
    label: '登录类型',
    valueType: 'string',
    params: [{
        key: 'type',
        valueType: 'string',
        dropdown: [
            { label: 'QQ', value: 'qq', },
            { label: '微信', value: 'wx', },
            { label: '支付宝', value: 'alipay', },
            { label: '抖音', value: 'douyin', },
            { label: '微博', value: 'sina', },
            { label: '百度', value: 'baidu', },
            { label: '华为', value: 'huawei', },
            { label: '小米', value: 'xiaomi', },
            { label: '谷歌', value: 'google', },
            { label: '微软', value: 'microsoft', },
            { label: 'Twitter', value: 'twitter', },
            { label: '钉钉', value: 'dingtalk', },
            { label: 'Line', value: 'line', },
            { label: 'Gitee', value: 'gitee', },
            { label: 'GitHub', value: 'github', },
        ],
    }],
});

Widget.prototype.getType = v => v;

exports.types = types;
exports.widget = Widget;