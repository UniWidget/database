function colourRgb(r, g, b) {
  r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);
  g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);
  b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);
  return '#' + r + g + b;
}


const axios = require('axios');

const types = {
    isInvisibleWidget: true,
    type: "http",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "更好用的http客户端",
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
    key: 'wb',
    label: '获得文本',
    params: [
      {
          key: 'txt',
          label: '数据',
          valueType: ['string','number','boolean','color','array','object'],
      },],
    blockOptions: {
    color: '#3366ff',
    icon: 'https://creation.codemao.cn/coconut/web/1.18.0/static/media/cloud.af9d6145.svg',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})

types['events'].push({
    key: 'cw',
    label: '出错',
    params: [
      {
          key: 'error',
          label: '错误',
          valueType: ['string','number','boolean','color','array','object'],
      },],
    blockOptions: {
    color: '#3366ff',
    icon: 'https://creation.codemao.cn/coconut/web/1.18.0/static/media/cloud.af9d6145.svg',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})

types['methods'].push({
    key: 'methodName',
    label: '发送',
    params: [
      {
          key: 'qq',
          label: '',
          valueType: 'string',
          dropdown: [
    { label: 'GET', value: 'GET', },

    { label: 'POST', value: 'POST', },

    { label: 'PUT', value: 'PUT', },

    { label: 'DELETE', value: 'DELETE', },
  ],
      },


      {
          key: 'url',
          label: '请求 请求网址',
          valueType: 'string',
          defaultValue: '',
      },
      {
          key: 'date',
          label: '请求数据（没有可不填）',
          valueType: 'string',
          defaultValue: '',
      },],

    blockOptions: {
    color: (colourRgb(104, 205, 255)),
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.methodName = function (qq,url,date,) {
      if (qq == 'GET') {
    if (date == '') {
      axios.get(url)
        .then((response) => {
          this.emit("wb"  , (response));
        })
        .catch((error) => {
          this.emit("cw"  , (error));
        });
    } else {

      axios.get(url,{
          data: date,

        })
        .then((response) => {
          this.emit("wb"  , (response));
        })
        .catch((error) => {
          this.emit("cw"  , (error));
        });
    }
  } else if (qq == 'POST') {
    if (date == '') {
      axios.post(url)
        .then((response) => {
          this.emit("wb"  , (response));
        })
        .catch((error) => {
          this.emit("cw"  , (error));
        });
    } else {

      axios.post(url,{
          data: date,

        })
        .then((response) => {
          this.emit("wb"  , (response));
        })
        .catch((error) => {
          this.emit("cw"  , (error));
        });
    }
  } else if (qq == 'PUT') {
    if (date == '') {
      axios.put(url)
        .then((response) => {
          this.emit("wb"  , (response));
        })
        .catch((error) => {
          this.emit("cw"  , (error));
        });
    } else {

      axios.put(url,{
          data: date,

        })
        .then((response) => {
          this.emit("wb"  , (response));
        })
        .catch((error) => {
          this.emit("cw"  , (error));
        });
    }
  } else if (qq == 'DELETE') {
    if (date == '') {
      axios.delete(url)
        .then((response) => {
          this.emit("wb"  , (response));
        })
        .catch((error) => {
          this.emit("cw"  , (error));
        });
    } else {

      axios.delete(url,{
          data: date,

        })
        .then((response) => {
          this.emit("wb"  , (response));
        })
        .catch((error) => {
          this.emit("cw"  , (error));
        });
    }
  }

}
types['methods'].push({
    key: 'wz',
    label: '将',
    params: [
      {
          key: 'json',
          label: 'json',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: '',
      },
      {
          key: 'z',
          label: '获取属性值',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: '',
      },],
    valueType: 'object',
    blockOptions: {
    color: (colourRgb(104, 205, 255)),
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.wz = function (json,z,) {
      return (json[z]);
}
exports.types = types;
exports.widget = Widget;
