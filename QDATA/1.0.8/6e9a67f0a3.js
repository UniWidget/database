var API;


const axios = require('axios');

const types = {
    isInvisibleWidget: true,
    type: "QDATA",
    icon: "https://cdn-community.codemao.cn/47/community/d2ViXzMwMDFfMTIwNjgxMzlfNDY2MDc0XzE2Njk5MDU3OTc3MzZfZTdhMWExNGM.png",
    title: "Qdata",
    version: "1.0.8",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
          API = 'https://api.codekpy.site/api/index.php';
  this.widgetLog('感谢使用Qdata账号管理系统');
  this.widgetLog('作者：嘎嘎叫的青蛙');
  this.widgetLog('QQ：359148497');

    }

}

types['events'].push({
    key: 'posterror',
    label: '请求失败',
    params: [],

})

types['events'].push({
    key: 'post',
    label: '请求完成',
    params: [
      {
          key: 'paramName',
          label: '返回数据（字符串）',
          valueType: 'string',
      },],

})

types['methods'].push({
    key: 'getdata',
    label: '获取数据',
    params: [
      {
          key: 'get_program_id',
          label: '作品ID',
          valueType: 'string',
          defaultValue: '',
      },
      {
          key: 'get_user_id',
          label: '用户ID',
          valueType: 'string',
          defaultValue: '',
      },],

    blockOptions: {
    color: '#cc66cc',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.getdata = function (get_program_id,get_user_id,) {

  axios.post(API,{
      data: {'mode': 'get', 'program_id': get_program_id, 'user_id': get_user_id},

    })
    .then((response) => {
      this.widgetLog('请求成功');
    this.emit("post"  , (response));
    })
    .catch((error) => {
      this.widgetError('请求失败');
    this.emit("posterror");
    });

}
types['methods'].push({
    key: 'sign_up',
    label: '注册',
    params: [
      {
          key: 'sign_up_name',
          label: '用户名',
          valueType: 'string',
          defaultValue: '',
      },
      {
          key: 'sign_up_key',
          label: '密码',
          valueType: 'string',
          defaultValue: '',
      },
      {
          key: 'sign_up_program_id',
          label: '作品id',
          valueType: 'string',
          defaultValue: '',
      },],

    blockOptions: {
    color: '#cc66cc',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.sign_up = function (sign_up_name,sign_up_key,sign_up_program_id,) {

  axios.post(API,{
      data: {'mode': 'sign_up', 'program_id': sign_up_program_id, 'name': sign_up_name, 'key': sign_up_key},

    })
    .then((response) => {
      this.widgetLog('请求成功');
    this.emit("post"  , (response));
    })
    .catch((error) => {
      this.widgetError('请求失败');
    this.emit("posterror");
    });

}
types['methods'].push({
    key: 'sign_in',
    label: '登录',
    params: [
      {
          key: 'sign_in_name',
          label: '用户名',
          valueType: 'string',
          defaultValue: '',
      },
      {
          key: 'sign_in_key',
          label: '密码',
          valueType: 'string',
          defaultValue: '',
      },
      {
          key: 'sign_in_program_id',
          label: '作品id',
          valueType: 'string',
          defaultValue: '',
      },],

    blockOptions: {
    color: '#cc66cc',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.sign_in = function (sign_in_name,sign_in_key,sign_in_program_id,) {

  axios.post(API,{
      data: {'mode': 'sign_in', 'program_id': sign_in_program_id, 'name': sign_in_name, 'key': sign_in_key},

    })
    .then((response) => {
      this.widgetLog('请求成功');
    this.emit("post"  , (response));
    })
    .catch((error) => {
      this.widgetError('请求失败');
    this.emit("posterror");
    });

}
types['methods'].push({
    key: 'writedata',
    label: '写入数据',
    params: [
      {
          key: 'write_program_id',
          label: '作品ID',
          valueType: 'string',
          defaultValue: '',
      },
      {
          key: 'write_user_id',
          label: '用户ID',
          valueType: 'string',
          defaultValue: '',
      },
      {
          key: 'write_data',
          label: '数据',
          valueType: 'string',
          defaultValue: '',
      },],

    blockOptions: {
    color: '#cc66cc',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.writedata = function (write_program_id,write_user_id,write_data,) {

  axios.post(API,{
      data: {'mode': 'write', 'program_id': write_program_id, 'user_id': write_user_id, 'data': write_data},

    })
    .then((response) => {
      this.widgetLog('请求成功');
    this.emit("post"  , (response));
    })
    .catch((error) => {
      this.widgetError('请求失败');
    this.emit("posterror");
    });

}
exports.types = types;
exports.widget = Widget;
