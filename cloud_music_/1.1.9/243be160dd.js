var _E9_9F_B3_E4_B9_90_E5_90_8D_E7_A7_B0;


const axios = require('axios');

const types = {
    isInvisibleWidget: true,
    type: "cloud_music_",
    icon: "https://voidtech.cn/i/2022/12/16/10wzis8.png",
    title: "飓枫网易云 api",
    version: "1.1.9",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};
types.docs={url:"https://fiee.tk/"};
types.platforms=["android","ios","web"]
class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);

    }

}

types['events'].push({
    key: 'url',
    label: '音乐播放url获取成功',
    params: [
      {
          key: 'url',
          label: '音乐url',
          valueType: 'string',
      },],

})

types['events'].push({
    key: 'win',
    label: '音乐相关信息获取成功',
    params: [
      {
          key: 'text',
          label: '信息',
          valueType: 'string',
      },
      {
          key: 'id',
          label: '音乐id',
          valueType: 'string',
      },
      {
          key: 'photo',
          label: '图片',
          valueType: 'string',
      },
      {
          key: 'ac',
          label: '歌手',
          valueType: 'string',
      },
      {
          key: 'web',
          label: '音乐播放链接',
          valueType: 'string',
      },],

})

types['events'].push({
    key: 'err',
    label: '音乐信息获取失败',
    params: [
      {
          key: 'errtext',
          label: '错误',
          valueType: 'string',
      },],

})

types['methods'].push({
    key: 'id',
    label: '获取音乐相关信息',
    params: [
      {
          key: 'musicName',
          label: '歌名',
          valueType: 'string',
          defaultValue: '',
      },],

    blockOptions: {
    color: '#ffbb55',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.id = function (musicName,) {
      axios.get(('https://apimusic.tk/search?keywords=' + String(musicName)))
    .then((response) => {
      var _E9_9F_B3_E4_B9_90_E5_90_8D_E7_A7_B0_list = (response.data['result']['songs']);
    for (var _E9_9F_B3_E4_B9_90_E5_90_8D_E7_A7_B0_index in _E9_9F_B3_E4_B9_90_E5_90_8D_E7_A7_B0_list) {
      _E9_9F_B3_E4_B9_90_E5_90_8D_E7_A7_B0 = _E9_9F_B3_E4_B9_90_E5_90_8D_E7_A7_B0_list[_E9_9F_B3_E4_B9_90_E5_90_8D_E7_A7_B0_index];
      this.emit("win"  , (_E9_9F_B3_E4_B9_90_E5_90_8D_E7_A7_B0['name']), (_E9_9F_B3_E4_B9_90_E5_90_8D_E7_A7_B0['id']), (_E9_9F_B3_E4_B9_90_E5_90_8D_E7_A7_B0['al']['picUrl']), ((_E9_9F_B3_E4_B9_90_E5_90_8D_E7_A7_B0['ar'])[0]['name']));}

    })
    .catch((error) => {
      this.emit("err"  , (error));
    });

}
types['methods'].push({
    key: 'url',
    label: '获取音乐id对应的音乐直链',
    params: [
      {
          key: 'musicid',
          label: '音乐id',
          valueType: 'string',
          defaultValue: '',
      },],

    blockOptions: {
    color: '#ffbb55',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.url = function (musicid,) {
      axios.get(('https://apimusic.tk/song/url?id=' + String(musicid)))
    .then((response) => {
      this.emit("url"  , ((response.data['data'])[0]['url']));
    })
    .catch((error) => {
      this.widgetWarn((error));

    });

}
types['methods'].push({
    key: 'methodName1',
    label: 'api官网:musicapi.tk',
    params: [],


})
Widget.prototype.methodName1 = function () {

}
types['methods'].push({
    key: 'methodName2',
    label: '博客:fiee.wtdown.top，如果api不能使用请找我反馈',
    params: [],


})
Widget.prototype.methodName2 = function () {

}
types['methods'].push({
    key: 'methodName3',
    label: 'QQ:3591299887 by:飓枫笨控件使用的api是自主搭建的暂不开源',
    params: [],


})
Widget.prototype.methodName3 = function () {

}
types['methods'].push({
    key: 'methodName4',
    label: '敬请期待更新更多积木！',
    params: [],


})
Widget.prototype.methodName4 = function () {

}
exports.types = types;
exports.widget = Widget;
