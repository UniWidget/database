const cocoProxy = 'https://coco.codemao.cn/http-widget-proxy/'
const axios = require('axios');
const utils = require('utils');
var document = this.document;
var window = this.window;
var navigator = this.navigator;
var history = this.history;
const types = {
    isInvisibleWidget: true,
    type: "XF_user_tool",
    icon: "https://static.codemao.cn/pickduck/rkASyobbel.svg?hash=Fg_lAlKBPkQYXia8mroiOOd5kI2-",
    title: "设备",
    author: '小风(QQ2085270395)',
    version: "1.5.0",
    docs: {
        url: "https://www.yuque.com/xiaofeng-0fczj/rie0lc/tzzs7ahuddmbxm8g"
    },
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

types.methods.push({
    key: 'Screen2',
    valueType: 'string',
    label: '屏幕',
    params: [{
            key: 'Screen',
            label: '',
            valueType: 'string',
            dropdown: [{
                    label: '的',
                    value: '的'
                },
                {
                    label: '可见',
                    value: '可见'
                }
            ]
        },
        {
            key: 'Screen3',
            label: '',
            valueType: 'string',
            dropdown: [{
                    label: '高度',
                    value: '高度'
                },
                {
                    label: '宽度',
                    value: '宽度'
                }
            ]
        }
    ],
    blockOptions: {
        color: '#00AFC3',
        icon: '无',
        generateBlock: true,
        inputsInline: true,
        space: 16,
        callMethodLabel: false,
        line: "屏幕信息"
    },
});

Widget.prototype.Screen2 = function(Screen, Screen3) {
    if (Screen === '的') {
        return Screen3 === '高度' ? screen.height : screen.width;
    } else if (Screen === '可见') {
        return Screen3 === '高度' ? screen.availHeight : screen.availWidth;
    }
    return 0;
};

// Screen_information2 method
types.methods.push({
    key: 'Screen_information2',
    label: '屏幕',
    valueType: 'string',
    params: [{
        key: 'Screen_information',
        label: '',
        valueType: 'string',
        dropdown: [{
                label: '色深',
                value: '色深'
            },
            {
                label: '像素深度',
                value: '像素深度'
            }
        ]
    }],
    blockOptions: {
        color: '#00AFC3',
        icon: '无',
        generateBlock: true,
        inputsInline: true,
        space: 16,
        callMethodLabel: false,
    },
});

Widget.prototype.Screen_information2 = function(Screen_information) {
    if (Screen_information === '色深') {
        return screen.colorDepth;
    } else if (Screen_information === '像素深度') {
        return screen.pixelDepth;
    }
    return 0;
};

// Equipment_information2 method
types.methods.push({
    key: 'Equipment_information2',
    label: '',
    valueType: 'string',
    params: [{
        key: 'Equipment_information',
        label: '',
        valueType: 'string',
        dropdown: [{
                label: '语言',
                value: '语言'
            }, // 修改value值与方法内case匹配
            {
                label: '系统信息',
                value: '系统信息'
            },
            {
                label: '界面URL',
                value: '界面URL'
            },
            {
                label: '界面URL路径',
                value: '界面URL路径'
            },
            {
                label: '主机域名',
                value: '主机域名'
            },
            {
                label: '主机端口',
                value: '主机端口'
            }
        ]
    }],
    blockOptions: {
        color: '#00AFC3',
        icon: '无',
        generateBlock: true,
        inputsInline: true,
        space: 16,
        callMethodLabel: false,
        line: "设备信息"
    },
});

Widget.prototype.Equipment_information2 = function(Equipment_information) {
    switch (Equipment_information) {
        case '语言':
            return navigator.language;
        case '系统信息':
            return navigator.platform;
        case '界面URL':
            return window.location.href;
        case '界面URL路径':
            return window.location.pathname;
        case '主机端口':
            return window.location.port;
        case '主机域名':
            return window.location.hostname;
        default:
            return '';
    }
};

types.methods.push({
    key: 'user_wifi',
    label: '有网络',
    params: [],
    valueType: 'boolean',
    blockOptions: {
        color: '#00AFC3',
        icon: '无',
        generateBlock: true,
        inputsInline: true,
        space: 16,
        callMethodLabel: false,
        line: "判断"
    },
});

Widget.prototype.user_wifi = function() {
    return navigator.onLine;
};

// user_dabao method
types.methods.push({
    key: 'user_dabao',
    label: '在客户端打开',
    params: [],
    valueType: 'boolean',
    blockOptions: {
        color: '#00AFC3',
        icon: '无',
        generateBlock: true,
        inputsInline: true,
        space: 16,
        callMethodLabel: false,
    },
});

Widget.prototype.user_dabao = function() {
    return utils.isNative();
};

types.methods.push({
    key: 'time',
    label: '',
    params: [{
            key: 'timestamp',
            label: '',
            valueType: 'number',
            defaultValue: Date.now(),
        },
        {
            key: 'format',
            label: '转',
            valueType: 'string',
            defaultValue: 'YYYY年MM月dd日 HH:mm:ss',
        }
    ],
    valueType: 'string',
    blockOptions: {
        color: '#FFBB55',
        icon: '无',
        generateBlock: true,
        inputsInline: true,
        space: 16,
        callMethodLabel: false,
        line: "时间"
    },
});

Widget.prototype.time = function(timestamp, format) { // 修正参数顺序
    if (timestamp === undefined || timestamp === null || isNaN(timestamp)) {
        timestamp = Date.now();
    }
    if (typeof format !== 'string') {
        format = 'YYYY年MM月dd日 HH:mm:ss';
    }
    return this.formatTimestamp(timestamp, format);
};

// time_user method
types.methods.push({
    key: 'time_user',
    label: '',
    params: [{
        key: 'time_list',
        label: '',
        valueType: 'string',
        dropdown: [{
                label: '云端时间戳',
                value: '云端时间戳'
            },
            {
                label: '设备时间戳',
                value: '设备时间戳'
            }
        ]
    }],
    valueType: 'number',
    blockOptions: {
        color: '#00AFC3',
        icon: '无',
        generateBlock: true,
        inputsInline: true,
        space: 16,
        callMethodLabel: false,
    },
});


Widget.prototype.getTimeStamp = async function(format) {
    try {
        const result = await axios.get(cocoProxy + `https://f.m.suning.com/api/ct.do`)
        if (format == '') {
            return result.data.currentTime;
        } else {
            return formatTimestamp(result.data.currentTime, format);
        }
    } catch (error) {
        this.widgetError('获取时间戳出错: ' + error.message)
        return 0;
    }
}

Widget.prototype.time_user = async function(time_list) {
    if (time_list === '云端时间戳') {
        try {
            const result = await axios.get(cocoProxy + `https://f.m.suning.com/api/ct.do`)
            return result.data.currentTime;
        } catch (error) {
            this.widgetError('获取时间戳出错: ' + error.message)
            return 0;
        }
    }
    return Date.now(); // 设备时间戳
};

// formatTimestamp method
Widget.prototype.formatTimestamp = function(timestamp, format) {
    try {
        if (typeof timestamp !== 'number' || isNaN(timestamp)) {
            throw new Error('时间戳必须是有效的数值');
        }

        const date = new Date(timestamp);
        if (isNaN(date.getTime())) {
            throw new Error('无效的时间戳');
        }

        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');

        return format
            .replace(/YYYY/g, year)
            .replace(/MM/g, month)
            .replace(/dd/g, day)
            .replace(/HH/g, hours)
            .replace(/mm/g, minutes)
            .replace(/ss/g, seconds);
    } catch (error) {
        this.widgetError('时间格式化失败: ' + error.message);
        return '无效时间';
    }
};

Widget.prototype.getTimeStamp = async function(format = '') {
    try {
        const result = await axios.get(cocoProxy + `https://f.m.suning.com/api/ct.do`);

        // 3. 验证返回数据
        if (!result.data || typeof result.data.currentTime !== 'number') {
            throw new Error('云端返回的时间戳格式无效');
        }

        if (format === '') {
            return result.data.currentTime; // 返回原始时间戳
        } else {
            return this.formatTimestamp(result.data.currentTime, format); // 返回格式化后的时间
        }

    } catch (error) {
        this.widgetError('获取云端时间戳出错: ' + error.message);
        return {
            error: true,
            message: '获取云端时间戳失败',
            details: error.message
        };

    }
}

exports.types = types;
exports.widget = Widget;