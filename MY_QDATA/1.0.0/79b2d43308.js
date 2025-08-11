const axios = require('axios');

const types = {
    isInvisibleWidget: true,
    type: "MY_QDATA",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "Qdata云数据表",
    version: "1.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
          this.widgetLog('作者：CodeKpy');
  this.widgetLog('版本：1.0.0');

    }

}

types['events'].push({
    key: 'wrong',
    label: '获取值失败',
    params: [],

})

types['methods'].push({
    key: 'set',
    label: '设置',
    params: [
      {
          key: 'table_id',
          label: '数据表ID',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 'table_key',
          label: '数据表秘钥',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 'name',
          label: '键名',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 'value',
          label: '值',
          valueType: 'string',
          defaultValue: "",
      },],

    blockOptions: {
    color: '#33ccff',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.set = function (table_id,table_key,name,value,) {
      axios.get((['https://qdata.space/api.php?','table_id=' + String(table_id),'&mode=' + 'set','&name=' + String(name),'&value=' + String(value),'&key=' + String(CryptoJS.SHA256(([new Date().getMinutes(),table_id,table_key].join(''))).toString())].join('')))
    .then((response) => {
      this.widgetLog((response.data));

    })
    .catch((error) => {
      this.widgetLog((response.data));

    });

}
types['methods'].push({
    key: 'read',
    label: '获取',
    params: [
      {
          key: 'table_id',
          label: '数据表ID',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 'table_key',
          label: '数据表秘钥',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 'name',
          label: '键名',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 'wrong_return',
          label: '失败时返回',
          valueType: 'string',
          defaultValue: "",
      },],
    valueType: ['string','number','boolean','array','color','object',],
    blockOptions: {
    color: '#33ccff',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.read = function (table_id,table_key,name,wrong_return,) {
      axios.get((['https://qdata.space/api.php?','table_id=' + String(table_id),'&mode=' + 'read','&name=' + String(name),'&key=' + String(CryptoJS.SHA256(([new Date().getMinutes(),table_id,table_key].join(''))).toString())].join('')))
    .then((response) => {
      this.widgetLog((response));
    this.widgetLog((response.data));
    return (response);
    })
    .catch((error) => {
      return wrong_return;
    });

}
exports.types = types;
exports.widget = Widget;
