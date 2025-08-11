var CryptoJS = require("crypto-js");
const axios = require('axios');

const types = {
    isInvisibleWidget: true,
    type: "XH_STARDREAMNET_EMAIL_SENDER",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "星梦邮件代发快速版",
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
    label: '邮件发送成功',
    params: [],

})

types['events'].push({
    key: 'error',
    label: '邮件发送失败',
    params: [
      {
          key: 'paramName',
          label: '错误原因',
          valueType: 'string',
      },],

})

types['methods'].push({
    key: 'send',
    label: '发送邮件',
    params: [
      {
          key: 'name',
          label: '邮件发件人昵称',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 'to',
          label: '收件人',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 'title',
          label: '邮件标题',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 'text',
          label: '邮件正文',
          valueType: 'multilineString',
      checkType: 'string',
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
Widget.prototype.send = function (name,to,title,text,) {
      axios.post((['https://coco.codemao.cn/http-widget-proxy/http@SEP@www.bluestarnet.top/api/email.php?appid=','fdc6779d2f60b14e9b9745ce592fff83567afbfde7245f192861e0a2799164fd','&key=',CryptoJS.SHA256(([title,to,name,text,'fb4a675897ee1875a748e063bd822c9d59ebf656782d7e5a65ecb2fd57d01f08'].join(''))),'&to=',to,'&title=' + String(title),['&name=',name,'&text=' + String(text)].join('')].join('')))
    .then((response) => {
      if ((response.data["code"]) == 200) {
      this.emit("success");} else {
      this.emit("error"  , (response.data["info"]));}

    })
    .catch((error) => {
      this.emit("error"  , '请求失败');
    });

}
exports.types = types;
exports.widget = Widget;
