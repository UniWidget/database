const axios = require('axios');
let yan = null;
const types = {
    isInvisibleWidget: true,
    type: "qingnin_mail_send_zx",
    icon: "https://cdn.cocotais.cn/project/waddle-2/logo/waddle2-logo.svg",
    title: "青柠邮件发送_zx",
    version: "1.2.1",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);

    }
    send(sendren, send_title, send_text) {
        const url = "https://api.lihouse.xyz/send";
        const mailRequest = {
            sendTo: sendren,
            title: send_title,
            content: send_text
        };
        // console.log(sendren);

        axios({
            url: url,
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(mailRequest)
        })
            .then(response => {

                console.log("Request sent successfully");
                if (response['data']['status'] || response['status']) {
                    this.emit('sendok', response)
                }
                else {
                    this.emit('sendnot', response['data']['reason'])
                }
            })
            // .then(data => {
            //     console.log("Response content:", data);
            // })
            .catch(error => {
                this.emit('sendnot', error)
                console.error("Error:", error.message);
            });
    }

}

types['events'].push({
    key: 'sendok',
    label: '发送成功',
    params: [
        {
            key: 'json',
            label: 'json',
            valueType: 'string',
        },
    ],

})
types['events'].push({
    key: 'sendnot',
    label: '发送失败',
    params: [
        {
            key: 'json',
            label: 'json',
            valueType: 'string',
        },
    ],

})
types['events'].push({
    key: 'yanzhenok',
    label: '验证码验证成功',
    params: [],

})
types['events'].push({
    key: 'yanzhennot',
    label: '验证码验证失败',
    params: [],

})

types['methods'].push({
    key: 'mailsend',
    label: '发送邮件',
    params: [
        {
            key: 'sendren',
            label: '发送至',
            valueType: 'string',
            defaultValue: "",
        },
        {
            key: 'send_title',
            label: '标题',
            valueType: 'string',
            defaultValue: "",
        },
        {
            key: 'send_text',
            label: '文本',
            valueType: 'string',
            defaultValue: "",
        },
    ],


})
types['methods'].push({
    key: 'Captchasend',
    label: '发送验证码',
    params: [
        {
            key: 'sendren',
            label: '发送至',
            valueType: 'string',
            defaultValue: "",
        },
        {
            key: 'send_title',
            label: '标题',
            valueType: 'string',
            defaultValue: "",
        },
        {
            key: 'send_text',
            label: '验证码文本',
            valueType: 'string',
            defaultValue: "",
        },
        // {
        //     key: 'send_number',
        //     label: '验证码位数',
        //     valueType: 'number',
        //     defaultValue: "",
        // },

    ],


})
types['methods'].push({
    key: 'Captchayanzhen',
    label: '验证验证码(注意是字符串)',
    params: [
        {
            key: 'Captcha',
            label: '验证码',
            valueType: 'string',
            defaultValue: "",
        },
    ],
})


types['methods'].push({
    key: 'Captchayanzhen',
    label: 'html美化验证码发送',
    params: [
        {
            key: 'Captcha',
            label: '文本',
            valueType: 'string',
            defaultValue: "",
        },
    ],
})


Widget.prototype.Captchayanzhen = function (Captcha) {
    if (yan == Captcha) {
        this.emit('yanzhenok')
    }
    else {
        this.emit('yanzhennot')
    }

}
Widget.prototype.Captchasend = function (sendren, send_title, send_text) {
    let z = /(?<=%).*?(?=%)/
    // let s = 'adawd%awfaw%awfawf'
    var result = send_text.match(z)[0].length;
    console.log(result);
    let max = 10
    let min = 1
    for (let i = 0; i < result - 1; i++) {
        min = min * 10
        max = max * 10
    }
    yan = Math.floor(Math.random() * ((max - 1) - min + 1)) + min;
    let sendtext = send_text.replace(/%.*?(%)/, yan)
    this.send(sendren, send_title, sendtext)


}



Widget.prototype.mailsend = function (sendren, send_title, send_text) {
    this.send(sendren, send_title, send_text)
}


exports.types = types;
exports.widget = Widget;
