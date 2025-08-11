const axios = require('axios');

const types = {
  isInvisibleWidget: true,
  type: "EMAIL",
  icon: "icon-widget-sms-service",
  title: "发送邮件2.0",
  version: "2.0.0",
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
  key: 'address',
  label: '邮箱地址',
  valueType: 'string',
  defaultValue: '1234567890@qq.com',

})

types['properties'].push({
  key: 'name',
  label: '邮件标题',
  valueType: 'string',
  defaultValue: '标题',

})

types['properties'].push({
  key: 'certno',
  label: '邮件内容',
  valueType: 'string',
  editorType: 'TextArea',
  defaultValue: '内容【支持HTML格式】',

})

types['methods'].push({
  key: 'send',
  label: '发送邮件',

  params: [

  ],
})
Widget.prototype.send = function () {
    axios.get((['https://mzystudio.top/api/mail/mail.php?address=',this.address,'&name=',this.name,'&certno=',this.certno].join('')))
    .then((response) => {
      this.emit('complete'  , (response));
    })
    .catch((error) => {
      this.emit('fail'  , (error));
    });
;
}

types['events'].push({
  key: 'complete',
  label: '发送成功',
  params: [

  {
    key: 'response',
    label: '成功消息',
    valueType: 'string',

  },


  ],
  valueType: 'string',

})

types['events'].push({
  key: 'fail',
  label: '发送失败',
  params: [

  {
    key: 'error',
    label: '错误原因',
    valueType: 'string',

  },


  ],
  valueType: 'string',

})

exports.types = types;
exports.widget = Widget;
