const axios = require('axios');

const types = {
    isInvisibleWidget: true,
    type: "MY_WIDGET",
    icon: "icon-widget-sms-service",
    title: "极客邮箱",
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

types['properties'].push({
    key: 'e',
    label: '接收邮箱',
    valueType: 'string',
    defaultValue: '2479957077@qq.com',

})

types['properties'].push({
    key: 'b',
    label: '标题',
    valueType: 'string',
    defaultValue: '你好世界',

})

types['properties'].push({
    key: 'n',
    label: '内容',
    valueType: 'string',
    defaultValue: 'Hello world',

})

types['methods'].push({
    key: 'methodName',
    label: '发送',
    params: [],


})
Widget.prototype.methodName = function () {
      axios.get((['https://v.api.aa1.cn/api/qqemail/new/?to=',this.e,'&subject=',this.b,'-服务由极客邮件提供&message=',this.n,'<br>❤️服务由极客邮件提供❤️&frommail=1@1.cn','',''].join('')))
    .then((response) => {

    })
    .catch((error) => {

    });
  this.widgetLog('如果无法使用请联系作者.');
  this.widgetLog('作者QQ：2479957077');

}
exports.types = types;
exports.widget = Widget;
