const axios = require('axios');
const types = {
    isInvisibleWidget: true,
    type: "qingnin_mail_send_zx",
    icon: "https://cdn.cocotais.cn/project/waddle-2/logo/waddle2-logo.svg",
    title: "青柠邮件发送_zx",
    version: "1.1.0",
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
Widget.prototype.mailsend = function (sendren, send_title, send_text) {
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
exports.types = types;
exports.widget = Widget;
