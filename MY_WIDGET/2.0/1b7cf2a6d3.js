var QQ_E5_8F_B7;


const axios = require('axios');
const http = require('http');

const types = {
    isInvisibleWidget: true,
    type: "MY_WIDGET",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "QQ信息查询2.0",
    version: "2.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
          this.string=props.string;

    }

}
this.widgetLog('欢迎使用血薇制作的QQ信息查询2.0版，作者QQ2074339569');

types['properties'].push({
    key: 'string',
    label: '要查询的QQ号：',
    valueType: 'number',
    defaultValue: '1234567890',

})

types['methods'].push({
    key: 'qq',
    label: 'api进行获取',
    params: [],


})
Widget.prototype.qq = function () {
      QQ_E5_8F_B7 = (this.string);
  if (QQ_E5_8F_B7 != '') {

    axios.get(('https://api.vvhan.com/api/qq?qq=' + String(QQ_E5_8F_B7)),{

      })
      .then((response) => {
        this.widgetLog('请求成功，返回数据为JSON');

      })
      .catch((error) => {
        this.widgetWarn('输入错误');
      this.widgetError('请求失败');

      });
  } else {
    this.widgetWarn('输入错误');
    this.widgetError('请求失败');
  }

}
types['events'].push({
    key: 'https',
    label: '请求成功时',
    params: [],

})

exports.types = types;
exports.widget = Widget;
