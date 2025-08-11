const axios = require('axios');

const types = {
    isInvisibleWidget: true,
    type: "QQAPI_TIAN_WIDGET",
    icon: "icon-widget-contact-picker",
    title: "QQ会话",
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
  this.widgetLog('盗版可耻，正版光荣！');

    }

}

types['events'].push({
    key: 'err',
    label: '出错',
    params: [
      {
          key: 'text',
          label: '错误信息',
          valueType: 'string',
      },],
    blockOptions: {
    color: '#6600cc',
    icon: 'https://maker.codemao.cn/assets/assets/dbc79713d712f5a9c6310ec78f099c65.svg',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})

types['events'].push({
    key: 'winQQxinxi',
    label: '头像、昵称获取成功',
    params: [
      {
          key: 'img',
          label: '头像URL',
          valueType: 'string',
      },
      {
          key: 'name',
          label: '昵称',
          valueType: 'string',
      },],
    blockOptions: {
    color: '#6600cc',
    icon: 'https://maker.codemao.cn/assets/assets/dbc79713d712f5a9c6310ec78f099c65.svg',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})

types['events'].push({
    key: 'winQQpc',
    label: '电脑在线成功',
    params: [
      {
          key: 'tf',
          label: '在线状态',
          valueType: 'boolean',
      },],
    blockOptions: {
    color: '#6600cc',
    icon: 'https://maker.codemao.cn/assets/assets/dbc79713d712f5a9c6310ec78f099c65.svg',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})

types['methods'].push({
    key: 'QQxinxi',
    label: '获取QQ头像、昵称',
    params: [
      {
          key: 'QQ',
          label: 'QQ',
          valueType: 'string',
          defaultValue: '2639194612',
      },],

    blockOptions: {
    color: '#6600cc',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.QQxinxi = function (QQ,) {
      axios.get(('https://api.vvhan.com/api/qq?qq=' + String(QQ)))
    .then((response) => {
      this.emit("winQQxinxi"  , (response.data['imgurl']), (response.data['name']));
    })
    .catch((error) => {
      this.emit("err"  , (error));
    });

}
types['methods'].push({
    key: 'QQpc',
    label: '获取电脑在线查询',
    params: [
      {
          key: 'QQ',
          label: 'QQ',
          valueType: 'string',
          defaultValue: '2639194612',
      },],

    blockOptions: {
    color: '#6600cc',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.QQpc = function (QQ,) {
      axios.get(('https://api.vvhan.com/api/qqcode?qq=' + String(QQ)))
    .then((response) => {
      this.emit("winQQpc"  , ((response.data['state']) == '电脑在线'));
    })
    .catch((error) => {
      this.emit("err"  , (error));
    });

}
types['methods'].push({
    key: 'QQzlk',
    label: 'QQ资料跳转（URL）',
    params: [
      {
          key: 'QQ',
          label: 'QQ',
          valueType: 'string',
          defaultValue: '2639194612',
      },],
    valueType: 'string',
    blockOptions: {
    color: '#6600cc',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.QQzlk = function (QQ,) {
      return ('https://api.vvhan.com/api/qqCard?qq=' + String(QQ));
}
types['methods'].push({
    key: 'QQtalk',
    label: 'QQ聊天跳转（URL）',
    params: [
      {
          key: 'QQ',
          label: 'QQ',
          valueType: 'string',
          defaultValue: '2639194612',
      },],
    valueType: 'string',
    blockOptions: {
    color: '#6600cc',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.QQtalk = function (QQ,) {
      return ('https://api.vvhan.com/api/qqChat?qq=' + String(QQ));
}
exports.types = types;
exports.widget = Widget;
