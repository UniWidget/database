var address, name2, certno;


const axios = require('axios');

const types = {
  isInvisibleWidget: true,
  type: "EMAIL",
  icon: "icon-widget-sms-service",
  title: "发送邮件",
  version: "2.2.1",
  isGlobalWidget: true,
  properties: [],
  methods: [],
  events: [],
};

class Widget extends InvisibleWidget {
  constructor(props) {
    super(props);

  types['properties'].push({
    key: 'address',
    label: '邮箱地址',
    valueType: 'string',
    defaultValue: '1234567890@qq.com',

  })

  types['properties'].push({
    key: 'name2',
    label: '邮件标题',
    valueType: 'string',
    defaultValue: '标题',

  })

  types['properties'].push({
    key: 'certno',
    label: '邮件内容',
    valueType: 'string',
    defaultValue: '内容【支持HTML格式】',

  })

  types['methods'].push({
    key: 'send',
    label: '发送邮件',

    params: [

    ],
  })
  Widget.prototype.send = function () {
      axios.get((['http://gm.ailingxi.cn/api/mail/mail.php?address=',address,'&name=',name2,'&certno=',certno].join('')))
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
    label: '发送完成',
    params: [

    {
      key: 'response',
      label: '响应内容',
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
      label: '获取错误',
      valueType: 'string',

    },


    ],
    valueType: 'string',

  })

  }

}

exports.types = types;
exports.widget = Widget;
