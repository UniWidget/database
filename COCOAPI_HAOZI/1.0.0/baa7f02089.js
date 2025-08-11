
const axios = require('axios');

const types = {
    isInvisibleWidget: true,
    type: "COCOAPI_HAOZI",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "CoCo-API辅助http客户端",
    version: "1.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);

  types['methods'].push({
      key: 'get',
      label: '发送get请求',
      params: [
        {
            key: 'URL',
            label: 'CoCo-API地址',
            valueType: 'string',
            defaultValue: 'https://appcraft.codemao.cn/player/156397037?channel=h5',
        },],
      valueType: ['string','number','boolean','array','color','object',],

  })
  Widget.prototype.get = function (URL,) {
        axios.get(URL)
      .then((response) => {
        return (response);
      })
      .catch((error) => {

      });

  }
  types['methods'].push({
      key: 'read',
      label: '解析CoCo-API请求结果',
      params: [
        {
            key: 'result',
            label: '内容为',
            valueType: 'string',
            defaultValue: "",
        },],
      valueType: 'string',

  })
  Widget.prototype.read = function (result,) {
        return (result.split('#')[1]);
  }
    }

}

exports.types = types;
exports.widget = Widget;
