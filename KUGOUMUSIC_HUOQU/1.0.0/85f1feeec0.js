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
    key: 'SucceesName',
    label: '获取到搜索信息',
    params: [
      {
          key: 'Name',
          label: '歌曲名',
          valueType: 'string',
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
    label: '搜索歌曲信息',
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
          defaultValue: 5,
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
      axios.get((['https://www.hhlqilongzhu.cn/api/dg_kgmusic.php?gm=',SingName,'&n=',Nor].join('')))
    .then((response) => {
      this.emit("SucceesName"  , (response.data));
    })
    .catch((error) => {
      this.emit("ErrorName"  , (error));
    });

}
exports.types = types;
exports.widget = Widget;
