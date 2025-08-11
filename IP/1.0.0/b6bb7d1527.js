const axios = require('axios');
var document = this.document;
var window = this.window;
var navigator = this.navigator;
var history = this.history;
const types = {
    isInvisibleWidget: true,
    type: "IP",
    icon: "https://creation.codemao.cn/coconut/web/1.20.0/static/media/internet.8da56d4e.svg",
    title: "IP地址查询",
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
    key: 'hqxx',
    label: '获取到信息',
    params: [
      {
          key: 'xx',
          label: '信息',
          valueType: 'string',
      },],
    blockOptions: {
    color: '#3366ff',
    icon: 'https://creation.codemao.cn/coconut/web/1.20.0/static/media/internet.8da56d4e.svg',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})

types['events'].push({
    key: 'hqcw',
    label: '错误',
    params: [
      {
          key: 'cw',
          label: '错误',
          valueType: 'string',
      },],
    blockOptions: {
    color: '#3366ff',
    icon: 'https://creation.codemao.cn/coconut/web/1.20.0/static/media/internet.8da56d4e.svg',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})

types['methods'].push({
    key: 'methodName',
    label: '定位',
    params: [
      {
          key: 'ip',
          label: 'IP',
          valueType: 'string',
          defaultValue: "",
      },],

    blockOptions: {
    color: '#ffbb55',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.methodName = function (ip,) {
      axios.get(('https://api.vvhan.com/api/getIpInfo?ip=' + String(ip)))
    .then((response) => {
      this.emit("hqxx"  , (response));
    })
    .catch((error) => {
      this.emit("hqcw"  , (error));
    });

}
exports.types = types;
exports.widget = Widget;
