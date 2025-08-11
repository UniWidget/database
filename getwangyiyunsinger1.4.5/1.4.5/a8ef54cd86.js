var i, _E4_B8_93_E8_BE_91_E6_AD_8C_E6_89_8B_E5_88_97_E8_A1_A8, k, j, _E6_AD_8C_E6_9B_B2_E6_AD_8C_E6_89_8B_E5_88_97_E8_A1_A8, _E9_A1_B9_E7_9B_AE, m, _E6_AD_8C_E6_89_8Bid_E5_88_97_E8_A1_A8, _E9_A1_B9_E7_9B_AE2, n, _E9_A1_B9_E7_9B_AE3;
const axios = require('axios');
const types = {
    isInvisibleWidget: true,
    type: "getwangyiyunsinger1.4.5",
    icon: "https://cdn.cocotais.cn/project/waddle-2/logo/waddle2-logo.svg",
    title: "网易云歌手信息",
    version: "1.4.5",
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
    key: 'getsongshiji',
    label: '获取到歌手专辑',
    params: [{
        key: 'songsingerlisn',
        label: '歌手列表',
        valueType: ['string', 'number', 'boolean', 'color', 'array', 'object'],
    },
    {
        key: 'zuanjiphoto',
        label: '专辑图片',
        valueType: 'string',
    },
    {
        key: 'zuanjiname',
        label: '专辑名称',
        valueType: 'string',
    },
    {
        key: 'zuanjiid',
        label: '专辑id',
        valueType: 'string',
    },
    ],
})
types['events'].push({
    key: 'getsingerxingxishi',
    label: '获取到歌手信息',
    params: [{
        key: 'getsingerxingxishiname',
        label: '歌曲名',
        valueType: 'string',
    },
    {
        key: 'getsingerxingxishiid',
        label: '歌曲id',
        valueType: 'string',
    },
    {
        key: 'getsingerxingxishisingerlisn',
        label: '歌手列表',
        valueType: ['string', 'number', 'boolean', 'color', 'array', 'object'],
    },
    ],
})
types['events'].push({
    key: 'getuserxinxishi',
    label: '获取到用户信息',
    params: [{
        key: 'getuserxinxishiname',
        label: '用户名',
        valueType: 'string',
    },
    {
        key: 'getuserxinxishiphoto',
        label: '用户头像',
        valueType: 'string',
    },
    {
        key: 'getuserxinxishijianjie',
        label: '用户简介',
        valueType: 'string',
    }, {
        key: 'getuserxinxishifenshisum',
        label: '粉丝数',
        valueType: 'string',
    }, {
        key: 'getuserxinxishiguanzhusum',
        label: '关注数',
        valueType: 'string',
    },
    ],
})
types['events'].push({
    key: 'getsingeridshiji',
    label: '获取到歌手id列表',
    params: [{
        key: 'getsingeridshijiidlisn',
        label: 'id列表',
        valueType: ['string', 'number', 'boolean', 'color', 'array', 'object'],
    },],
})
types['events'].push({
    key: 'getsingerxingxiofsingeridshiji',
    label: '获取到歌手信息列表',
    params: [{
        key: 'getsingerxingxiofsingeridshijiname',
        label: '名称',
        valueType: 'string',
    },
    {
        key: 'getsingerxingxiofsingeridshijiuserid',
        label: '用户id',
        valueType: 'string',
    },
    ],
})
types['methods'].push({
    key: 'getsongji',
    label: '获取歌手专辑',
    params: [{
        key: 'singerid',
        label: '歌手id',
        valueType: 'number',
        defaultValue: "",
    },
    {
        key: 'pageye',
        label: '第几页',
        valueType: 'number',
        defaultValue: "",
    },
    ],
})
Widget.prototype.getsongji = function (singerid, pageye,) {
    axios.get((['https://coco.codemao.cn/http-widget-proxy/http@SEP@music.163.com/api/artist/albums/', singerid, '?id=', singerid, '&offset=', (pageye - 1) * 10, '&total=true&limit=10'].join(''))).
        then((response) => {
            var i_end = (response['data']['hotAlbums']).length;
            var i_inc = 1;
            if (1 > i_end) {
                i_inc = -i_inc;
            }
            for (i = 1; i_inc >= 0 ? i <= i_end : i >= i_end; i += i_inc) {
                _E4_B8_93_E8_BE_91_E6_AD_8C_E6_89_8B_E5_88_97_E8_A1_A8 = [];
                var j_end = ((response['data']['hotAlbums'])[(i - 1)]['artists']).length;
                var j_inc = 1;
                if (1 > j_end) {
                    j_inc = -j_inc;
                }
                for (j = 1; j_inc >= 0 ? j <= j_end : j >= j_end; j += j_inc) {
                    _E9_A1_B9_E7_9B_AE = [];
                    _E9_A1_B9_E7_9B_AE.push((((response['data']['hotAlbums'])[(i - 1)]['artists'])[(j - 1)]['name']));
                    _E9_A1_B9_E7_9B_AE.push((((response['data']['hotAlbums'])[(i - 1)]['artists'])[(j - 1)]['id']));
                    _E9_A1_B9_E7_9B_AE.push((((response['data']['hotAlbums'])[(i - 1)]['artists'])[(j - 1)]['picUrl']));
                    _E4_B8_93_E8_BE_91_E6_AD_8C_E6_89_8B_E5_88_97_E8_A1_A8.push(_E9_A1_B9_E7_9B_AE);
                }
                this.emit("getsongshiji", _E4_B8_93_E8_BE_91_E6_AD_8C_E6_89_8B_E5_88_97_E8_A1_A8, ((response['data']['hotAlbums'])[(i - 1)]['picUrl']), ((response['data']['hotAlbums'])[(i - 1)]['name']), ((response['data']['hotAlbums'])[(i - 1)]['id']));
            }
        }).catch((error) => {
            console.log(error);
            this.widgetError((error));
        });
}
types['methods'].push({
    key: 'getsingerxinxi',
    label: '获取歌手信息',
    params: [{
        key: 'getsingerxinxisingerid',
        label: '歌手id',
        valueType: 'number',
        defaultValue: "",
    },],
})
Widget.prototype.getsingerxinxi = function (getsingerxinxisingerid,) {
    axios.get((['https://coco.codemao.cn/http-widget-proxy/http@SEP@music.163.com/api/artist/', getsingerxinxisingerid, '?'].join(''))).then((response) => {
        var k_end = (response.data['hotSongs']).length;
        var k_inc = 1;
        if (1 > k_end) {
            k_inc = -k_inc;
        }
        for (k = 1; k_inc >= 0 ? k <= k_end : k >= k_end; k += k_inc) {
            _E6_AD_8C_E6_9B_B2_E6_AD_8C_E6_89_8B_E5_88_97_E8_A1_A8 = [];
            var m_end = ((response.data['hotSongs'])[(k - 1)]['artists']).length;
            var m_inc = 1;
            if (1 > m_end) {
                m_inc = -m_inc;
            }
            for (m = 1; m_inc >= 0 ? m <= m_end : m >= m_end; m += m_inc) {
                _E9_A1_B9_E7_9B_AE2 = [];
                _E9_A1_B9_E7_9B_AE2.push((((response.data['hotSongs'])[(k - 1)]['artists'])[(m - 1)]['name']));
                _E9_A1_B9_E7_9B_AE2.push((((response.data['hotSongs'])[(k - 1)]['artists'])[(m - 1)]['id']));
                _E6_AD_8C_E6_9B_B2_E6_AD_8C_E6_89_8B_E5_88_97_E8_A1_A8.push(_E9_A1_B9_E7_9B_AE2);
            }
            this.emit("getsingerxingxishi", ((response.data['hotSongs'])[(k - 1)]['name']), ((response.data['hotSongs'])[(k - 1)]['id']), _E6_AD_8C_E6_9B_B2_E6_AD_8C_E6_89_8B_E5_88_97_E8_A1_A8);
        }
    }).catch((error) => {
        this.widgetError((error));
    });
}
types['methods'].push({
    key: 'getuserxinxi',
    label: '获取用户信息',
    params: [{
        key: 'getuserxinxiid',
        label: '用户id',
        valueType: 'number',
        defaultValue: "",
    },],
})
Widget.prototype.getuserxinxi = function (getuserxinxiid,) {
    axios.get((['https://coco.codemao.cn/http-widget-proxy/http@SEP@music.163.com/api/v1/user/detail/', getuserxinxiid, '?'].join(''))).then((response) => {
        this.emit("getuserxinxishi", (response.data['profile']['nickname']), (response.data['profile']['avatarUrl']), (response.data['profile']['signature']), (response.data['profile']['followeds']), (response.data['profile']['follows']));
    }).catch((error) => {
        this.widgetError((error));
    });
}
types['methods'].push({
    key: 'getsingeridofsongid',
    label: '通过歌曲id获取歌手id列表',
    params: [{
        key: 'getsingeridofsongidssonger',
        label: '歌曲id',
        valueType: 'string',
        defaultValue: "",
    },],
})
Widget.prototype.getsingeridofsongid = function (getsingeridofsongidssonger,) {
    axios.get((['https://coco.codemao.cn/http-widget-proxy/http@SEP@music.163.com/api/song/detail/?id=', getsingeridofsongidssonger, '&ids=%5B', getsingeridofsongidssonger, '%5D'].join(''))).then((response) => {
        _E6_AD_8C_E6_89_8Bid_E5_88_97_E8_A1_A8 = [];
        var n_end = ((response.data['songs'])[0]['artists']).length;
        var n_inc = 1;
        if (1 > n_end) {
            n_inc = -n_inc;
        }
        for (n = 1; n_inc >= 0 ? n <= n_end : n >= n_end; n += n_inc) {
            _E9_A1_B9_E7_9B_AE3 = [];
            _E9_A1_B9_E7_9B_AE3.push((((response.data['songs'])[0]['artists'])[(n - 1)]['name']));
            _E9_A1_B9_E7_9B_AE3.push((((response.data['songs'])[0]['artists'])[(n - 1)]['id']));
            _E6_AD_8C_E6_89_8Bid_E5_88_97_E8_A1_A8.push(_E9_A1_B9_E7_9B_AE3);
        }
        this.emit("getsingeridshiji", _E6_AD_8C_E6_89_8Bid_E5_88_97_E8_A1_A8);
    }).catch((error) => {
        this.widgetError((error));
    });
}
types['methods'].push({
    key: 'getsingerxingxiofsingerid',
    label: '通过歌手id获取歌手信息',
    params: [{
        key: 'getsingerxingxiofsingeridsid',
        label: '歌手id',
        valueType: 'string',
        defaultValue: "",
    },],
})
Widget.prototype.getsingerxingxiofsingerid = function (getsingerxingxiofsingeridsid,) {
    axios.get((['https://coco.codemao.cn/http-widget-proxy/http@SEP@music.163.com/api/artist/', getsingerxingxiofsingeridsid, '?'].join(''))).then((response) => {
        this.emit("getsingerxingxiofsingeridshiji", (response.data['artist']['name']), (response.data['artist']['accountId']));
    }).catch((error) => {
        this.widgetError((error));
    });
}
exports.types = types;
exports.widget = Widget;