const axios = require('axios');

const types = {
    isInvisibleWidget: true,
    type: "VVHAN_TIAN_API_WIDGET",
    icon: "icon-widget-http-client",
    title: "vvhan",
    version: "1.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
          this.widgetLog('控件作者：天上来的熊孩子（QQ：2639194612）');

    }

}

types['events'].push({
    key: 'win',
    label: '获得信息',
    params: [
      {
          key: 'tux',
          label: '消息源功能',
          valueType: 'string',
      },
      {
          key: 'text',
          label: '内容',
          valueType: ['string','number','boolean','color','array','object'],
      },],
    blockOptions: {
    color: '#ffbb55',
    icon: 'https://creation.codemao.cn/coconut/web/1.18.0/static/media/cloud.af9d6145.svg',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})

types['events'].push({
    key: 'err',
    label: '出错',
    params: [
      {
          key: 'errtxt',
          label: '错误',
          valueType: 'string',
      },],
    blockOptions: {
    color: '#ffbb55',
    icon: 'https://creation.codemao.cn/coconut/web/1.18.0/static/media/cloud.af9d6145.svg',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})

types['methods'].push({
    key: 'api1',
    label: '新冠肺炎实时数据',
    params: [
      {
          key: 'city',
          label: '城市',
          valueType: 'string',
          defaultValue: '南京',
      },
      {
          key: 'cmd',
          label: '取值',
          valueType: 'string',
          dropdown: [
    { label: '新增确诊', value: '新增确诊', },

    { label: '新增无症状', value: '新增无症状', },

    { label: '累计确诊', value: '累计确诊', },

    { label: '累计康复', value: '累计康复', },

    { label: '累计死亡', value: '累计死亡', },
  ],
      },

],

    blockOptions: {
    color: '#ff0000',
    icon: 'https://api.vvhan.com/static/hansvg/covid.svg',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.api1 = function (city,cmd,) {
      axios.get(('https://api.vvhan.com/api/covid?city=' + String(city)))
    .then((response) => {
      if (cmd == '新增确诊') {
      this.emit("win"  , '新冠肺炎实时数据', (String(response.data['data']['now']['sure_new_hid'])));} else if (cmd == '新增无症状') {
      this.emit("win"  , '新冠肺炎实时数据', (String(response.data['data']['now']['sure_new_loc'])));} else if (cmd == '累计确诊') {
      this.emit("win"  , '新冠肺炎实时数据', (String(response.data['data']['history']['sure_cnt'])));} else if (cmd == '累计康复') {
      this.emit("win"  , '新冠肺炎实时数据', (String(response.data['data']['history']['cure_cnt'])));} else {
      this.emit("win"  , '新冠肺炎实时数据', (response.data['data']['history']['die_cnt']));}

    })
    .catch((error) => {
      this.emit("err"  , (error));
    });

}
types['methods'].push({
    key: 'api2',
    label: '短网址还原',
    params: [
      {
          key: 'url',
          label: '短网址',
          valueType: 'string',
          defaultValue: 'https://sourl.cn/zXmhia',
      },],

    blockOptions: {
    color: '#ff0000',
    icon: 'https://api.vvhan.com/static/hansvg/short.svg',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.api2 = function (url,) {
      axios.get(('https://api.vvhan.com/api/short?url=' + String(url)))
    .then((response) => {
      this.emit("win"  , '短网址还原', (response.data['url']));
    })
    .catch((error) => {
      this.emit("err"  , (error));
    });

}
types['methods'].push({
    key: 'api3',
    label: '获取网站标题',
    params: [
      {
          key: 'url',
          label: '域名',
          valueType: 'string',
          defaultValue: 'www.baidu.com',
      },],

    blockOptions: {
    color: '#ff0000',
    icon: 'https://api.vvhan.com/static/hansvg/biaoti.svg',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.api3 = function (url,) {
      axios.get(('https://api.vvhan.com/api/title?url=' + String(url)))
    .then((response) => {
      this.emit("win"  , '获取网站标题', (response.data['title']));
    })
    .catch((error) => {
      this.emit("err"  , (error));
    });

}
types['methods'].push({
    key: 'api4',
    label: '垃圾分类',
    params: [
      {
          key: 'lj',
          label: '垃圾',
          valueType: 'string',
          defaultValue: '干电池',
      },],

    blockOptions: {
    color: '#ff0000',
    icon: 'https://api.vvhan.com/static/hansvg/laji.svg',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.api4 = function (lj,) {
      axios.get(('https://api.vvhan.com/api/la.ji?lj=' + String(lj)))
    .then((response) => {
      this.emit("win"  , '垃圾分类', (response.data['sort']));
    })
    .catch((error) => {
      this.emit("err"  , (error));
    });

}
types['methods'].push({
    key: 'api5',
    label: '翻译',
    params: [
      {
          key: 'text',
          label: '文本',
          valueType: 'string',
          defaultValue: '你好',
      },],

    blockOptions: {
    color: '#ff0000',
    icon: 'https://api.vvhan.com/static/hansvg/fanyi.svg',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.api5 = function (text,) {
      axios.get(('https://api.vvhan.com/api/fy?text=' + String(text)))
    .then((response) => {
      this.emit("win"  , '翻译', (response.data['data']['fanyi']));
    })
    .catch((error) => {
      this.emit("err"  , (error));
    });

}
exports.types = types;
exports.widget = Widget;