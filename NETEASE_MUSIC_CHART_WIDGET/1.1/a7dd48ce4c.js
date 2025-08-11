// 控件类型定义
const types = {
    type: 'NETEASE_MUSIC_CHART_WIDGET', // 控件类型，全局唯一
    title: '垃圾桶-网易云歌榜音乐数据获取', // 控件的显示名称
    icon: 'https://www.helloimg.com/i/2025/02/14/67af668cb11ed.jpg', // 控件图标
    isInvisibleWidget: true, // 不可见控件
    isGlobalWidget: true, // 全局控件
    properties: [], // 不需要额外属性
    methods: [
        {
            key: 'getMusicChartData', // 方法名
            label: '获取', // 方法显示名称
            params: [
                {
                    key: 'chartName', // 参数名
                    label: '歌榜', // 参数显示名称
                    valueType: 'string', // 参数类型
                    defaultValue: '热歌榜', // 默认值
                    dropdown: [ // 下拉选项
                        { label: '热歌榜', value: '热歌榜' },
                        { label: '新歌榜', value: '新歌榜' },
                        { label: '飙升榜', value: '飙升榜' }
                    ]
                },
                {
                    key: 'returnType', // 参数名
                    label: '的', // 参数显示名称
                    valueType: 'string', // 参数类型
                    defaultValue: 'id', // 默认值
                    dropdown: [ // 下拉选项
                        { label: '歌曲id', value: 'id' },
                        { label: '歌名', value: 'name' },
                        { label: '歌手', value: 'artistsname' },
                        { label: '专辑', value: 'album' },
                        { label: '歌曲图片', value: 'picurl' },
                        { label: '音频地址', value: 'url' },
                        { label: '音乐时长', value: 'duration' },
                        { label: '是否付费', value: 'pay' }
                    ]
                }
            ],
            tooltip: '获取网易云音乐歌榜数据（可选择返回特定字段）', // 方法描述
            valueType: 'object', // 返回值类型为对象或数组
            async: true // 标记为异步方法
        }
    ],
    events: [
        {
            key: 'onMusicDataReceived', // 事件名
            label: '歌榜数据获取成功', // 事件显示名称
            params: [
                {
                    key: 'musicData', // 参数名
                    label: '歌榜数据', // 参数显示名称
                    valueType: 'object' // 参数类型为对象或数组
                }
            ]
        },
        {
            key: 'onMusicError', // 事件名
            label: '歌榜数据获取失败', // 事件显示名称
            params: [
                {
                    key: 'error', // 参数名
                    label: '错误信息', // 参数显示名称
                    valueType: 'string' // 参数类型为字符串
                }
            ]
        }
    ],
    version: '1.1', // 控件版本号
    author: '垃圾桶，kimi ai' // 控件作者
};

// 控件实体定义
class NeteaseMusicChartWidget extends InvisibleWidget {
    constructor(props) {
        super(props);
    }

    // 方法定义：获取
    async getMusicChartData(chartName, returnType) {
        const axios = require('axios'); // 引入 axios
        const apiURL = `https://node.api.xfabe.com/api/wangyi/musicChart?list=${chartName}`; // 小枫公益API接口

        try {
            const response = await axios.get(apiURL);
            if (response.data.code === 200 && response.data.data && response.data.data.songs) {
                const musicData = response.data.data.songs.map(song => song[returnType]); // 提取指定字段
                this.emit('onMusicDataReceived', musicData); // 触发歌榜数据获取成功的事件
            } else {
                this.emit('onMusicError', '获取歌榜数据失败，API返回错误'); // 触发获取失败的事件
            }
        } catch (error) {
            this.emit('onMusicError', `获取歌榜数据失败，错误信息：${error.message}`); // 触发获取失败的事件
        }
    }
}

// 导出控件
exports.types = types;
exports.widget = NeteaseMusicChartWidget;
