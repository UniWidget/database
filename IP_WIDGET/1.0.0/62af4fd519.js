const types = {
    isInvisibleWidget: true,
    type: "IP_WIDGET",
    icon: "https://ocean.codemao.cn/appcraft/resource/icon/%E5%9F%BA%E7%A1%80/%E6%9F%A5%E8%AF%A2.svg",
    title: "IP增强",
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
const axios = require('axios');

types['methods'].push({
    key: 'ip',
    label: '获取IP',
    params: [],
    valueType: 'string',
})
Widget.prototype.ip = function () {
      axios.get('http://ip-api.com/json/')
    .then((response) => {
      return (response.data['query']);
    })
    .catch((error) => {

    });

}
types['methods'].push({
    key: 'ipcity',
    label: '获取IP来源',
    params: [],
    valueType: 'string',
})
Widget.prototype.ipcity = function () {
      axios.get('http://ip-api.com/json/?lang=zh-CN')
    .then((response) => {
      return ([response.data['regionName'],',',response.data['city']].join(''));
    })
    .catch((error) => {

    });

}
types['methods'].push({
    key: 'iplonlat',
    label: '获取IP经纬度',
    params: [],
    valueType: 'string',
})
Widget.prototype.iplonlat = function () {
      axios.get('http://ip-api.com/json/')
    .then((response) => {
      return ([response.data['lat'],',',response.data['lon']].join(''));
    })
    .catch((error) => {

    });

}
types['methods'].push({
    key: 'ipisp',
    label: '获取IP对应的ISP',
    params: [],
    valueType: 'string',
})
Widget.prototype.ipisp = function () {
      axios.get('http://ip-api.com/json/')
    .then((response) => {
      return (response.data['isp']);
    })
    .catch((error) => {

    });

}
types['methods'].push({
    key: 'ipfancha',
    label: '反查IP',
    params: [
      {
          key: 'type',
          label: '输入IP',
          valueType: 'string',
          defaultValue: '203.107.52.6',
      },
      {
          key: 'mode',
          label: '模式',
          valueType: 'string',
          dropdown: [
    { label: '获取来源', value: '获取来源', },

    { label: '获取经纬', value: '获取经纬', },

    { label: '获取ISP', value: '获取ISP', },
  ],
      },

],
    valueType: 'string',
})
Widget.prototype.ipfancha = function (type,mode,) {
      axios.get((['http://ip-api.com/json/',type,'?lang=zh-CN'].join('')))
    .then((response) => {
      if ((mode) == '获取来源') {
      return ([response.data['regionName'],',',response.data['city']].join(''));}
    if ((mode) == '获取经纬') {
      return ([response.data['lat'],',',response.data['lon']].join(''));}
    if ((mode) == '获取ISP') {
      return (response.data['isp']);}

    })
    .catch((error) => {

    });

}
types['methods'].push({
    key: 'ipcn',
    label: 'IP是否来自中国',
    params: [],
    valueType: 'boolean',
})
Widget.prototype.ipcn = function () {
      axios.get('http://ip-api.com/json/')
    .then((response) => {
      if ((response.data['country']) == 'China') {
      return true;} else {
      return false;}

    })
    .catch((error) => {

    });

}
exports.types = types;
exports.widget = Widget;
