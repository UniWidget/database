var i;
var Singer, _E6_AD_8C_E5_90_8D;
var pageye, findname;
var playurl;
const axios = require('axios');
var CryptoJS = require("crypto-js");

const types = {
  isInvisibleWidget: true,
  type: "kgzhenhefingsong",
  icon: "https://cdn.cocotais.cn/project/waddle-2/logo/waddle2-logo.svg",
  title: "酷狗整合搜索",
  version: "1.0.0",
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
  key: 'konggufindgetsth',
  label: '搜索到数据',
  params: [
    {
      key: 'konggufindgetsthsongname',
      label: '歌名',
      valueType: 'string',
    },
    {
      key: 'konggufindgetsthphoto',
      label: '图片',
      valueType: 'string',
    },
    {
      key: 'konggufindgetsthsinger',
      label: '歌手',
      valueType: 'string',
    },
    {
      key: 'konggufindgetsthshash',
      label: 'hash',
      valueType: 'string',
    },
  ],

})

types['events'].push({
  key: 'getxinxisongshi',
  label: '得到歌曲信息',
  params: [
    {
      key: 'getxinxisongshiname',
      label: '歌曲名',
      valueType: 'string',
    },
    {
      key: 'getxinxisongshisingername',
      label: '歌手',
      valueType: 'string',
    },
    {
      key: 'getxinxisongshisongurl',
      label: '播放链接',
      valueType: 'string',
    },
    {
      key: 'getxinxisongshigechi',
      label: '歌词',
      valueType: 'string',
    },],

})


types['methods'].push({
  key: 'kugoufind',
  label: '酷狗搜索',
  params: [
    {
      key: 'kugoufindsousuostring',
      label: '搜索',
      valueType: 'string',
      defaultValue: "",
    },
    {
      key: 'kugoufindpage',
      label: '第几页',
      valueType: 'number',
      defaultValue: 1,
    },],


})
Widget.prototype.kugoufind = function (kugoufindsousuostring, kugoufindpage,) {
  pageye = kugoufindpage;
  findname = kugoufindsousuostring;
  axios.get((['https://coco.codemao.cn/http-widget-proxy/http@SEP@www.dreamling.top/API/kugou/android_lite/music/api.php?keyword=', kugoufindsousuostring, '&page=', kugoufindpage, '&pagesize=10&n='].join('')))
    .then((response) => {
      console.log(response.data);
      var i_end = (response.data['data']['lists']).length;
      var i_inc = 1;
      if (1 > i_end) {
        i_inc = -i_inc;
      }
      for (i = 1; i_inc >= 0 ? i <= i_end : i >= i_end; i += i_inc) {
        this.emit("konggufindgetsth", ((response.data['data']['lists'])[(i - 1)]['SongName']), ((response.data['data']['lists'])[(i - 1)]['Image']), ((response.data['data']['lists'])[(i - 1)]['SingerName']), ((response.data['data']['lists'])[(i - 1)]['FileHash']));
      }

    })
    .catch((error) => {
      console.error(error);

    });

}
types['methods'].push({
  key: 'getsongxingxiofhash',
  label: '通过第几个值获取歌曲信息',
  params: [
    {
      key: 'getsongxingxiofhashsn',
      label: '第几个',
      valueType: 'number',
      defaultValue: "",
    },
    {
      key: 'getsongxingxiofhashshash',
      label: 'hash',
      valueType: 'string',
      defaultValue: "",
    },
  ],


})
Widget.prototype.getsongxingxiofhash = function (getsongxingxiofhashsn, getsongxingxiofhashshash) {
  axios.get(('https://coco.codemao.cn/http-widget-proxy/http@SEP@www.dreamling.top/API/kugou/android_lite/music/api.php?keyword=' + findname + '&page=' + pageye + '&pagenum=10&format=json&n=' + getsongxingxiofhashsn))
    .then((response) => {
      _E6_AD_8C_E5_90_8D = (response.data['data']['SongName']);
      playurl = (((response.data['data']['url']))[0]);
      Singer = (response.data['data']['SingerName']);
      axios.get(('https://coco.codemao.cn/http-widget-proxy/http@SEP@krcs.kugou.com/search?man=yes&hash=' + String(getsongxingxiofhashshash)))
        .then((response) => {
          axios.get((['https://coco.codemao.cn/http-widget-proxy/http@SEP@lyrics.kugou.com/download?ver=1&client=phone&id=', response.data['proposal'], '&accesskey=', (response.data['candidates'])[0]['accesskey'], '&fmt=lrc'].join('')))
            .then((response) => {
              this.emit("getxinxisongshi", _E6_AD_8C_E5_90_8D, Singer, playurl, ((CryptoJS.enc.Utf8.stringify((CryptoJS.enc.Base64.parse((response.data['content']))))).split('[offset:0]')[1]));
            })
            .catch((error) => {
              console.error(error);

            });

        })
        .catch((error) => {
          console.error(error);

        });

    })
    .catch((error) => {
      console.error(error);

    });

};
types['methods'].push({
  key: 'getlrcxingxiofhash',
  label: '通过hash值获取歌词信息',
  params: [
    {
      key: 'getlrcxingxiofhashshash',
      label: 'hash',
      valueType: 'string',
      defaultValue: "",
    },],


})
Widget.prototype.getlrcxingxiofhash = function (getlrcxingxiofhashshash,) {
  axios.get(('https://coco.codemao.cn/http-widget-proxy/http@SEP@krcs.kugou.com/search?man=yes&hash=' + String(getlrcxingxiofhashshash)))
    .then((response) => {
      axios.get((['https://coco.codemao.cn/http-widget-proxy/http@SEP@lyrics.kugou.com/download?ver=1&client=phone&id=', response.data['proposal'], '&accesskey=', (response.data['candidates'])[0]['accesskey'], '&fmt=lrc'].join('')))
        .then((response) => {
          this.emit("getlrcxingxiofhashshi", ((CryptoJS.enc.Utf8.stringify((CryptoJS.enc.Base64.parse((response.data['content']))))).split('[offset:0]')[1]));
        })
        .catch((error) => {
          console.error(error);

        });

    })
    .catch((error) => {
      console.error(error);

    });

}
exports.types = types;
exports.widget = Widget;
