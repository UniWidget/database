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
    send(sendren, send_title, send_user, send_text) {
        const url = "https://api.lihouse.xyz/send";
        const mailRequest = {
            sendTo: sendren,
            title: send_title,
            user: send_user,
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
                if (response['data']['status']) {
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
            label: '失败原因',
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
            key: 'send_user',
            label: '发送者',
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
            key: 'send_user',
            label: '发送者',
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
    key: 'Captchahtml',
    label: 'html美化验证码发送',
    params: [
        {
            key: 'sendren',
            label: '发送至',
            valueType: 'string',
            defaultValue: "",
        },
        {
            key: 'title',
            label: '标题',
            valueType: 'string',
            defaultValue: "",
        },
        {
            key: 'send_title',
            label: 'html标题',
            valueType: 'string',
            defaultValue: "",
        },
        {
            key: 'send_text',
            label: '文本',
            valueType: 'string',
            defaultValue: "",
        },
        {
            key: 'send_user',
            label: '发送者',
            valueType: 'string',
            defaultValue: "",
        },
        {
            key: 'send_num',
            label: '验证码位数',
            valueType: 'number',
            defaultValue: 4,
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
Widget.prototype.Captchasend = function (sendren, send_title, send_user, send_text) {
    if (send_text.includes('%')) {
        let z = /(?<=%).*?(?=%)/
        // let s = 'adawd%awfaw%awfawf'
        var result = send_text.match(z)[0].length;
        console.log(result);
        if (result <= 0) {
            this.widgetWarn('验证码文本可能不规范,访问https://www.yuque.com/u37737036/zx/nm9p2896ozo2yg2f 查看教程')
        }
        let max = 10
        let min = 1
        for (let i = 0; i < result - 1; i++) {
            min = min * 10
            max = max * 10
        }
        yan = Math.floor(Math.random() * ((max - 1) - min + 1)) + min;
        let sendtext = send_text.replace(/%.*?(%)/, yan)
        this.send(sendren, send_title, send_user, sendtext)

    }
    else {
        this.emit('sendnot', '验证码文本不规范,访问https://www.yuque.com/u37737036/zx/nm9p2896ozo2yg2f 查看教程')
    }

}
Widget.prototype.Captchahtml = function (sendren, title, send_title, send_text, send_user, send_num) {
    let max = 10
    let min = 1
    for (let i = 0; i < send_num - 1; i++) {
        min = min * 10
        max = max * 10
    }
    yan = Math.floor(Math.random() * ((max - 1) - min + 1)) + min;
    let sendtext = `<div class="card"><span class="title">${send_title}</span><div class="text">${send_text}</div><strong>验证码:</strong><u class="yan">${yan}</u>
</div>
<style>
    .card {
        display: flex;
        flex-direction: column;
        margin-left: auto;
        margin-right: auto;
        max-width: 320px;
        min-height: 500px;
        border-radius: 10px;
        /* justify-content: center; */
        text-align: center;
        background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
    }

    .title {
        font-size: 30px;
        overflow: auto;
        min-height: 50px;
        font-weight: 600;
    }

    .text {
        font-size: 18px;
        width: 320px;
        height: 200px;
        overflow-y: auto;
    }

    .yan {
        /* background-color: #c4c4c4; */
        font-size: 20px;
    }
</style>`
    this.send(sendren, title, send_user, sendtext)


}



Widget.prototype.mailsend = function (sendren, send_title, send_user, send_text) {
    this.send(sendren, send_title, send_user, send_text)
}


exports.types = types;
exports.widget = Widget;
