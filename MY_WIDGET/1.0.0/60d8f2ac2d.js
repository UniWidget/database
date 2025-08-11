const axios = require('axios');

const types = {
    isInvisibleWidget: true,
    type: "MY_WIDGET",
    icon: "https://pic.stackoverflow.wiki/uploadImages/112/234/185/189/2022/07/11/21/30/56001661-52b2-46f1-be57-38a4a2710a51.svg",
    title: "科宇邮箱发送",
    version: "1.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
          this.widgetLog('科宇邮箱发送（由Vrctn QQ:1770038917 制作）（1：发送成功 0：发送失败）有问题请反馈~');

    }

}

types['methods'].push({
    key: 'mailbox',
    label: '收件人邮箱',
    params: [
      {
          key: 'yx',
          label: '收件人邮箱',
          valueType: 'string',
          defaultValue: 'eyuservice@keyutech.cn',
      },
      {
          key: 'bt',
          label: '标题',
          valueType: 'string',
          defaultValue: '标题',
      },
      {
          key: 'nr',
          label: '内容',
          valueType: 'string',
          defaultValue: '内容',
      },],

    blockOptions: {
    color: '#ffbb55',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.mailbox = function (yx,bt,nr,) {
      axios.get((['https://api.dzzui.com/api/mail?Host=smtp.feishu.cn&Username=keyumailbox@keyutech.cn&Password=TjWZjO04xNOg0Aoq&Port=465&SMTPSecure=ssl&addAddress=',yx,'&title=',bt,'&text=',nr].join('')))
    .then((response) => {

    })
    .catch((error) => {

    });

}
exports.types = types;
exports.widget = Widget;
