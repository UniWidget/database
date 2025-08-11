const axios = require('axios');

const types = {
    isInvisibleWidget: true,
    type: "ikun_mail",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "ikun邮api",
    version: "1.1.9",
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
    key: '400',
    label: '邮件发送成功',
    params: [
      {
          key: 'all',
          label: '返回数据',
          valueType: 'string',
      },],

})

types['events'].push({
    key: '-400',
    label: '发送失败',
    params: [
      {
          key: 'err',
          label: '错误信息',
          valueType: 'string',
      },],

})

types['methods'].push({
    key: 'id',
    label: '发送邮件',
    params: [
      {
          key: 'popaddress',
          label: '收件邮箱',
          valueType: 'string',
          defaultValue: 'admin@alcex.top',
      },
      {
          key: 'title',
          label: '标题',
          valueType: 'string',
          defaultValue: '你好,世界',
      },
      {
          key: 'al',
          label: '内容(可以发送html)',
          valueType: 'string',
          defaultValue: 'ikun邮测试',
      },],

    blockOptions: {
    color: '#ffbb55',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.id = function (popaddress,title,al,) {
      axios.get(('https://mail.alcex.top/' + String(String('?address=' + String(popaddress)) + String(String('&name=' + String(title)) + String('&certno=' + String(al))))))
    .then((response) => {
      this.emit("all"  , (response.data));
    })
    .catch((error) => {
      this.emit("err"  , (error));
    });

}
types['methods'].push({
    key: 'id1',
    label: '本api由replit强力驱动.由星点云及replit提供云计算支持',
    params: [],

    blockOptions: {
    color: '#ffbb55',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.id1 = function () {

}
types['methods'].push({
    key: 'id2',
    label: '博客: blog.alcex.top',
    params: [],

    blockOptions: {
    color: '#ffbb55',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.id2 = function () {

}
types['methods'].push({
    key: 'id3',
    label: 'api有发送记录及ip记录切勿滥用！若api无法使用请发送邮件至admin@alcex.top',
    params: [],

    blockOptions: {
    color: '#ffbb55',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.id3 = function () {

}
exports.types = types;
exports.widget = Widget;
