var BSingName;



const types = {
    isInvisibleWidget: true,
    type: "KUGOUMUSIC_HUOQU",
    icon: "https://d.kstore.space/download/4883/读书分数检查器/EXMUSIC/酷狗.svg",
    title: "酷狗整合搜索",
    version: "1.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};
const axios = require('axios');

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);

    }

}

types['events'].push({
    key: 'SucceesZY',
    label: '获取到歌曲资源',
    params: [
      {
          key: 'SingName',
          label: '歌曲名',
          valueType: 'string',
      },
      {
          key: 'Singer',
          label: '歌手',
          valueType: 'string',
      },
      {
          key: 'SingLink',
          label: '歌曲热链接',
          valueType: 'string',
      },
      {
          key: 'Lyrics',
          label: '歌词标准字符串',
          valueType: 'string',
      },
      {
          key: 'ImgLink',
          label: '歌曲图片链接',
          valueType: 'string',
      },
      {
          key: 'Link',
          label: '酷狗音乐官网链接',
          valueType: 'string',
      },],

})

types['events'].push({
    key: 'SucceesName',
    label: '获取到搜索信息',
    params: [
      {
          key: 'ListSingName',
          label: '歌曲列表字符串',
          valueType: 'string',
      },
      {
          key: 'SHU',
          label: '返回数',
          valueType: 'number',
      },],

})

types['events'].push({
    key: 'ErrorName',
    label: '出现错误',
    params: [
      {
          key: 'Error',
          label: '错误原因',
          valueType: 'string',
      },],

})

types['methods'].push({
    key: 'SFSI',
    label: '搜索歌曲',
    params: [
      {
          key: 'SingName',
          label: '歌曲名',
          valueType: 'string',
          defaultValue: '不眠之夜',
      },
      {
          key: 'Nor',
          label: '返回数',
          valueType: 'number',
          defaultValue: 20,
      },],

    blockOptions: {
    color: '#33ccff',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.SFSI = function (SingName,Nor,) {
      BSingName = SingName;
  axios.get((['https://coco.codemao.cn/http-widget-proxy/https@SEP@www.hhlqilongzhu.cn/api/dg_kgmusic.php?gm=',SingName,'&num=',Nor].join('')))
    .then((response) => {
      this.emit("SucceesName"  , (response.data), Nor);
    })
    .catch((error) => {
      this.emit("ErrorName"  , (error));
    });

}
types['methods'].push({
    key: 'SFSI2',
    label: '搜索歌曲信息',
    params: [
      {
          key: 'SingSign',
          label: '歌曲序号',
          valueType: 'number',
          defaultValue: 1,
      },],

    blockOptions: {
    color: '#33ccff',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.SFSI2 = function (SingSign,) {
      axios.get((['https://coco.codemao.cn/http-widget-proxy/https@SEP@www.hhlqilongzhu.cn/api/dg_kgmusic.php?gm=',BSingName,'&n=',SingSign,'&type=json'].join('')))
    .then((response) => {
      this.emit("SucceesZY"  , (response.data['title']), (response.data['singer']), (response.data['music_url']), (response.data['lyrics']), (response.data['cover']), (response.data['link']));
    })
    .catch((error) => {
      this.emit("ErrorName"  , (error));
    });

}
exports.types = types;
exports.widget = Widget;
