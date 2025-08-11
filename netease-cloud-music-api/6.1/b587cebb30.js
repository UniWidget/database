var _E9_9F_B3_E4_B9_90_E5_90_8D_E7_A7_B0, _E9_9F_B3_E4_B9_90;


const axios = require('axios');

const types = {
    isInvisibleWidget: true,
    type: "netease-cloud-music-api",
    icon: "https://cdn.alcex.top/img/wu.png",
    title: "neteaseAPI",
    version: "6.1",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};
types.docs={url:"https://fiee.wtdown.top"};
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
    key: 'wuurl',
    label: '音乐无损音质url获取成功（可用于下载音乐）',
    params: [
      {
          key: 'wuurl',
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
      },],

})

types['events'].push({
    key: 'urlset',
    label: '音乐歌词获取成功',
    params: [
      {
          key: 'urlset',
          label: '音乐歌词',
          valueType: 'string',
      },],

})

types['events'].push({
    key: 'ikun',
    label: '音乐id对应的评论获取成功',
    params: [
      {
          key: 'all',
          label: '全部参数',
          valueType: 'string',
      },
      {
          key: 'user',
          label: '用户名',
          valueType: 'string',
      },
      {
          key: 'photo',
          label: '头像',
          valueType: 'string',
      },
      {
          key: 'content',
          label: '内容',
          valueType: 'string',
      },
      {
          key: 'time',
          label: '时间',
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
      axios.get(('https://netease.api.alcex.top/search?keywords=' + String(musicName)))
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
    label: '解析音乐(可解析 VIP 音乐)',
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
      axios.get(('https://api.alcexn.repl.co/unm-server?id=' + String(musicid)))
    .then((response) => {
      this.emit("url"  , (response.data['url']));
    })
    .catch((error) => {
      this.widgetWarn((error));

    });

}
types['methods'].push({
    key: 'url1',
    label: '获取音乐id对应的歌词',
    params: [
      {
          key: 'musicid1',
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
Widget.prototype.url1 = function (musicid1,) {
      axios.get(('https://apimusic.tk/lyric?id=' + String(musicid1)))
    .then((response) => {
      this.emit("urlset"  , (response.data['lrc']['lyric']));
    })
    .catch((error) => {
      this.widgetWarn((error));

    });

}
types['methods'].push({
    key: 'url2',
    label: '获取音乐id对应的无损url（可用于下载音乐）',
    params: [
      {
          key: 'musicid2',
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
Widget.prototype.url2 = function (musicid2,) {
      axios.get(('https://apimusic.tk/song/download/url?id=' + String(musicid2)))
    .then((response) => {
      this.emit("wuurl"  , (response.data['data']['url']));
    })
    .catch((error) => {
      this.widgetWarn((error));

    });

}
types['methods'].push({
    key: 'urll',
    label: '获取音乐评论',
    params: [
      {
          key: 'musicidz',
          label: '音乐id',
          valueType: 'string',
          defaultValue: '',
      },
      {
          key: 'max',
          label: '排序（1:按推荐排.2:按热度排.3:按时间）',
          valueType: 'number',
          defaultValue: '2',
      },
      {
          key: 'maxx',
          label: '评论数量默认20',
          valueType: 'number',
          defaultValue: '20',
      },],

    blockOptions: {
    color: '#ffbb55',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.urll = function (musicidz,max,maxx,) {
      this.widgetLog((String('https://apimusic.tk/comment/new?type=0&id=' + String(musicidz)) + String(String('&sortType=' + String(max)) + String('&pageSize=' + String(maxx)))));
  axios.get((String('https://apimusic.tk/comment/new?type=0&id=' + String(musicidz)) + String(String('&sortType=' + String(max)) + String('&pageSize=' + String(maxx)))))
    .then((response) => {
      var _E9_9F_B3_E4_B9_90_list = (response.data['data']['comments']);
    for (var _E9_9F_B3_E4_B9_90_index in _E9_9F_B3_E4_B9_90_list) {
      _E9_9F_B3_E4_B9_90 = _E9_9F_B3_E4_B9_90_list[_E9_9F_B3_E4_B9_90_index];
      this.emit("ikun"  , _E9_9F_B3_E4_B9_90, (_E9_9F_B3_E4_B9_90['user']['nickname']), (_E9_9F_B3_E4_B9_90['user']['avatarUrl']), (_E9_9F_B3_E4_B9_90['content']), (_E9_9F_B3_E4_B9_90['timeStr']));}

    })
    .catch((error) => {
      this.widgetWarn((error));

    });

}
types['methods'].push({
    key: 'urll',
    label: '待添加…(共 200 多个接口)',
    params: [
      {
          key: 'musicidz',
          label: '音乐id',
          valueType: 'string',
          defaultValue: '',
      },
      {
          key: 'max',
          label: '排序（1:按推荐排.2:按热度排.3:按时间）',
          valueType: 'number',
          defaultValue: '2',
      },
      {
          key: 'maxx',
          label: '评论数量默认20',
          valueType: 'number',
          defaultValue: '20',
      },],

    blockOptions: {
    color: '#ffbb55',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.urll = function (musicidz,max,maxx,) {
      this.widgetLog((String('https://apimusic.tk/comment/new?type=0&id=' + String(musicidz)) + String(String('&sortType=' + String(max)) + String('&pageSize=' + String(maxx)))));
  axios.get((String('https://apimusic.tk/comment/new?type=0&id=' + String(musicidz)) + String(String('&sortType=' + String(max)) + String('&pageSize=' + String(maxx)))))
    .then((response) => {
      var _E9_9F_B3_E4_B9_90_list2 = (response.data['data']['comments']);
    for (var _E9_9F_B3_E4_B9_90_index2 in _E9_9F_B3_E4_B9_90_list2) {
      _E9_9F_B3_E4_B9_90 = _E9_9F_B3_E4_B9_90_list2[_E9_9F_B3_E4_B9_90_index2];
      this.emit("ikun"  , _E9_9F_B3_E4_B9_90, (_E9_9F_B3_E4_B9_90['user']['nickname']), (_E9_9F_B3_E4_B9_90['user']['avatarUrl']), (_E9_9F_B3_E4_B9_90['content']), (_E9_9F_B3_E4_B9_90['timeStr']));}

    })
    .catch((error) => {
      this.widgetWarn((error));

    });

}
exports.types = types;
exports.widget = Widget;
