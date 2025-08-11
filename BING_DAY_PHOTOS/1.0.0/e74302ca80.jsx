var photo_errors, bing_day_photos;


const axios = require('axios');

const types = {
  isInvisibleWidget: false,
  type: "BING_DAY_PHOTOS",
  icon: "https://ocean.codemao.cn/appcraft/resource/icon/%E5%AA%92%E4%BD%93/%E5%9B%BE%E7%89%87.svg",
  title: "Bing每日图",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: 200,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: '__height',
      label: '高度',
      valueType: 'number',
      defaultValue: 150,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: '__size',
      label: '',
      valueType: 'number',
      defaultValue: 0,
      readonly: true,
      blockOptions: {
        setter: {
          keys: ['__height', '__width'],
        },
        getter: {
          keys: ['__height', '__width'],
        },
      },
    },
  ],
  methods: [],
  events: [],
};

class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.__width = props.__width;
    this.__height = props.__height;
    this.widgetLog('【Bing每日图】(*^_^*) 欢迎使用Bing每日图！');
  photo_errors = '';
  axios.post('https://apis.jxcxin.cn/api/Bing')
    .then((response) => {
      bing_day_photos = (response);
    this.emit("photos"  , bing_day_photos);
    })
    .catch((error) => {
      photo_errors = (error);
    this.emit("photo_error"  , photo_errors);
    });

  }
  render() {
    return(
      React.createElement("img", {  src: bing_day_photos,
      style: {  backgroundColor: '#999999',
      },
    }, null)
  );

  }
}

types['events'].push({
    key: 'photo_error',
    label: '每日图获取失败',
    params: [
      {
          key: 'error_txt',
          label: '错误日志',
          valueType: 'string',
      },],
    blockOptions: {
    color: '#ff6600',
    icon: '无',
    generateBlock: false,
    inputsInline: true,
    space: 16,
},
})

types['events'].push({
    key: 'photos',
    label: '每日图获取成功',
    params: [
      {
          key: 'day_photos',
          label: '每日图',
          valueType: 'string',
      },],
    blockOptions: {
    color: '#ff6600',
    icon: '无',
    generateBlock: false,
    inputsInline: true,
    space: 16,
},
})

exports.types = types;
exports.widget = Widget;
