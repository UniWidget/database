var document = this.document;
const axios = require('axios');

// 假设 JSON 数据存储在变量 jsonData 中


const types = {
    isInvisibleWidget: true,
    type: "zx_api_all",
    icon: "https://cdn.cocotais.cn/project/waddle-2/logo/waddle2-logo.svg",
    title: "api大全_zx",
    version: "1.0.2",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [
        {
            key: 'onget_personalized',
            label: '获取到推荐歌单',
            params: [
                {
                    key: 'id',
                    label: 'id',
                    valueType: 'number',
                },
                {
                    key: 'name',
                    label: '名称',
                    valueType: 'string',
                },
                {
                    key: 'pic',
                    label: '图片',
                    valueType: 'string',
                }
                ,
                {
                    key: 'play',
                    label: '播放数',
                    valueType: 'number',
                },
                {
                    key: 'ishigh',
                    label: '是否为高质量',
                    valueType: 'boolean',
                }
            ],
        },
        {
            key: 'onget_newsong',
            label: '获取到推荐新歌',
            params: [
                {
                    key: 'id',
                    label: 'id',
                    valueType: 'number',
                },
                {
                    key: 'name',
                    label: '名称',
                    valueType: 'string',
                },
                {
                    key: 'pic',
                    label: '图片',
                    valueType: 'string',
                }
                ,
                {
                    key: 'artists',
                    label: '歌手列表',
                    valueType: 'any',
                },
                {
                    key: 'album_name',
                    label: '专辑名称',
                    valueType: 'string',
                },
                {
                    key: 'album_id',
                    label: '专辑id',
                    valueType: 'number',
                }
            ],
        },
        {
            key: 'onsearch_multimatch',
            label: '多重搜索完成',
            params: [
                {
                    key: 'video',
                    label: '资源搜索结果',
                    valueType: 'any',
                },
                {
                    key: 'playlist',
                    label: '歌单搜索结果',
                    valueType: 'any',
                },
                {
                    key: 'artist',
                    label: '歌手搜索结果',
                    valueType: 'any',
                }

            ],
        },
        {
            key: 'onget_playlist_track_all',
            label: '获取到歌单歌曲',
            params: [
                {
                    key: 'name',
                    label: '名称',
                    valueType: 'string',
                },
                {
                    key: 'id',
                    label: 'id',
                    valueType: 'string',
                },
                {
                    key: 'pic',
                    label: '图片',
                    valueType: 'string',
                },
                {
                    key: 'artist',
                    label: '歌手列表',
                    valueType: 'any',
                }

            ],
        },
        {
            key: 'onget_homepage_block_page',
            label: '获取到首页数据',
            params: [
                {
                    key: 'playlist',
                    label: '推荐歌单',
                    valueType: 'any',
                },
                {
                    key: 'songs',
                    label: '推荐热歌',
                    valueType: 'any',
                },
                {
                    key: 'newsong',
                    label: '推荐新歌',
                    valueType: 'any',
                },
            ],
        }
    ],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
        Object.assign(this, props);
    }
    get_personalized(num) {
        axios.get('https://apis.netstart.cn/music/personalized?limit=' + num)
            .then((re) => {
                console.log(re);
                re.data.result.forEach(item => {
                    this.emit("onget_personalized", item.id, item.name, item.picUrl, item.playCount, item.highQuality);
                })
            })
            .catch((err) => {
                console.error(err);
                widgetError(err);

            });
    }
    get_newsong() {
        axios.get('https://apis.netstart.cn/music/personalized/newsong')
            .then((re) => {
                console.log(re);
                let artists = []
                re.data.result.forEach(item => {
                    artists = []
                    item.song.artists.forEach(item => {
                        artists.push({
                            name: item.name,
                            id: item.id
                        })
                    })
                    this.emit("onget_newsong", item.id, item.name, item.picUrl, artists, item.song.album.name, item.song.album.id);
                })
            })
            .catch((err) => {
                console.error(err);
                widgetError(err);

            });
    }
    search_multimatch(keywords) {
        axios.get('https://apis.netstart.cn/music/search/multimatch?keywords=' + keywords)
            .then((re) => {
                console.log(re);
                let video = [];
                let playlist = [];
                let artist = [];
                re.data.result['new_mlog'].forEach(item => {
                    video.push({
                        id: item.resourceId,
                        type: item.resourceName,
                        name: item.baseInfo.resource.mlogBaseData.text,
                        pic: item.baseInfo.resource.mlogBaseData.coverUrl,
                    })
                })
                re.data.result['playlist'].forEach(item => {
                    playlist.push({
                        name: item.name,
                        id: item.id,
                        pic: item.coverImgUrl,
                        desc: item.description,
                        tags: item.tags,
                        playCount: item.playCount,
                        creator: item.creator

                    })
                })
                re.data.result['artist'].forEach(item => {
                    artist.push({
                        name: item.name,
                        id: item.id,
                        pic: item.picUrl,
                        albumSize: item.albumSize,
                        musicSize: item.musicSize,
                        trans: item.trans,
                    })
                })

                this.emit("onsearch_multimatch", video, playlist, artist);

            })
            .catch((err) => {
                console.error(err);
                widgetError(err);

            });
    }
    get_playlist_track_all(id, limit, offset) {
        axios.get('https://apis.netstart.cn/music/playlist/track/all?id=' + id + '&limit=' + limit + '&offset=' + (offset - 1))
            .then((re) => {
                console.log(re);
                let artist = [];
                re.data.songs.forEach(item => {
                    artist = []
                    item.ar.forEach(item => {
                        artist.push({
                            name: item.name,
                            id: item.id
                        })
                    });
                    this.emit("onget_playlist_track_all", item.name, item.id, item.al.picUrl, artist);
                })
            })
            .catch((err) => {
                console.error(err);
                this.widgetError(err);

            });

    }
    get_homepage_block_page() {
        // axios.get('https://apis.netstart.cn/music/homepage/block/page')
        //     .then((re) => {
        //         re.data.blocks.forEach((item, index) => {
        //             let data = []
        //             if (item.blockCode == 'HOMEPAGE_BLOCK_PLAYLIST_RCMD') {//推荐歌单
        //                 item.creatives.forEach(item => {
        //                     data.push({
        //                         type: item.creativeType,
        //                         id: item.creativeId,
        //                         name: item.uiElement.mainTitle.title,
        //                         image: item.uiElement.image.imageUrl,
        //                         labelTexts: item.uiElement.labelTexts,
        //                         playCount: item.resources[0].resourceExtInfo.playCount
        //                     })
        //                 })
        //                 this.emit("onget_homepage_block_page", '推荐歌单', item.blockCode, data);
        //             }
        //             else if (item.blockCode == 'HOMEPAGE_SLIDE_SONGLIST_ALIGN') {
        //                 item.creatives.forEach(item => {
        //                     data.push({
        //                         type: item.creativeType,
        //                         id: item.creativeId,
        //                         data: item.resources
        //                     })
        //                 })
        //             }
        //         })
        //     })
        //     .catch((err) => {
        //         console.error(err);
        //         this.widgetError(err);
        //     });
        let jsonData = {}
        axios.get('https://apis.netstart.cn/music/homepage/block/page')
            .then((re) => {
                console.log(re, 333333333);
                jsonData = re.data
                // 提取推荐歌单
                const recommendedPlaylists = jsonData.data.blocks.find(block => block.blockCode === "HOMEPAGE_BLOCK_PLAYLIST_RCMD");
                let playlists = [];
                if (recommendedPlaylists) {
                    playlists = recommendedPlaylists.creatives.map(creative => {
                        const playlist = creative.resources[0];
                        return {
                            id: creative.creativeId,
                            name: playlist.uiElement.mainTitle.title,
                            coverUrl: playlist.uiElement.image.imageUrl,
                            playCount: playlist.resourceExtInfo.playCount,
                            highQuality: playlist.resourceExtInfo.highQuality
                        };
                    });
                }

                // 提取热门歌曲
                const hotSongs = jsonData.data.blocks.find(block => block.blockCode === "HOMEPAGE_BLOCK_STYLE_RCMD");
                let songs = [];
                if (hotSongs) {
                    songs = hotSongs.creatives.flatMap(creative => creative.resources.map(resource => ({
                        name: resource.uiElement.mainTitle.title,
                        artist: resource.resourceExtInfo.artists.map(artist => artist.name).join(", "),
                        coverUrl: resource.uiElement.image.imageUrl,
                        album: resource.resourceExtInfo.songData.album.name,
                        alias: resource.resourceExtInfo.songData.alias.join(","),
                        id: resource.resourceExtInfo.songData.id,
                    })));

                }

                // 提取直播信息
                const newsongData = jsonData.data.blocks.find(block => block.blockCode === "HOMEPAGE_BLOCK_NEW_ALBUM_NEW_SONG");
                let newsong = [];
                if (newsongData) {
                    newsong = newsongData.creatives.flatMap(creatives => creatives.resources.map(resource => {
                        if (resource.resourceExtInfo) {
                            return {
                                name: resource.uiElement.mainTitle.title,
                                artist: resource.resourceExtInfo.artists.map(artist => artist.name).join(","),
                                coverUrl: resource.uiElement.image.imageUrl,
                                id: resource.resourceId
                            }
                        }
                    }));
                }
                this.emit("onget_homepage_block_page", playlists, songs, newsong);
            })


    }
}

types['methods'].push({
    key: 'get_personalized',
    label: '获取推荐歌单',
    params: [
        {
            key: 'num',
            label: '个数',
            valueType: 'number',
            defaultValue: 20,
        },
    ],
})
types['methods'].push({
    key: 'get_newsong',
    label: '获取推荐新歌',
    params: [],
})

types['methods'].push({
    key: 'search_multimatch',
    label: '多重搜索',
    params: [
        {
            key: 'keywords',
            label: '搜索文本',
            valueType: 'string',
            defaultValue: '海阔天空',
        },
    ],
})
types['methods'].push({
    key: 'get_playlist_track_all',
    label: '获取歌单音乐',
    params: [
        {
            key: 'id',
            label: 'id',
            valueType: 'number',
            defaultValue: 24381616,
        },
        {
            key: 'limit',
            label: '每页个数',
            valueType: 'number',
            defaultValue: 10,
        },
        {
            key: 'offset',
            label: '第几页',
            valueType: 'number',
            defaultValue: 1,
        },
    ],
})
types['methods'].push({
    key: 'get_homepage_block_page',
    label: '获取首页数据',
    params: [],
})


exports.types = types;
exports.widget = Widget;
