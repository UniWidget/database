// 控件类型定义
const types = {
    type: 'GENTLEMAN_WIDGET', // 控件类型，全局唯一
    title: '获取小姐姐', // 控件的显示名称
    icon: 'https://static.codemao.cn/pickduck/Ske7sfwh1e.jpg?hash=FnCUftqh6CYvWkr4OifRR_uE2e9Z', // 控件图标
    isInvisibleWidget: true, // 不可见控件
    isGlobalWidget: true, // 全局控件
    properties: [
        {
            key: 'selectedApi',
            label: '要获取的信息',
            valueType: 'string',
            defaultValue: 'pcmeinvpic',
            dropdown: [
                { label: '电脑端小姐姐图片', value: 'pcmeinvpic' },
                { label: '随机JK图片', value: 'jk' },
                { label: '随机小姐姐图片', value: 'meinvpic' },
                { label: '随机白丝图片', value: 'baisi' },
                { label: '随机黑丝图片', value: 'heisi' },
                { label: '随机小姐姐视频', value: 'xiaojiejieshiping' }
            ]
        }
    ],
    methods: [
        {
            key: 'fetchData',
            label: '获取图片/视频',
            params: [],
            tooltip: '从选择的API获取图片/视频',
            valueType: 'string',
            async: true // 标记为异步方法
        }
    ],
    events: [
        {
            key: 'onDataReceived',
            label: '数据获取成功',
            params: [
                {
                    key: 'data',
                    label: '返回的数据',
                    valueType: 'string'
                }
            ]
        },
        {
            key: 'onError',
            label: '数据获取失败',
            params: [
                {
                    key: 'error',
                    label: '错误信息',
                    valueType: 'string'
                }
            ]
        }
    ],
    version: '1.0', // 控件版本号
    author: '垃圾桶' // 控件作者
};

// 控件实体定义
class GentlemanWidget extends InvisibleWidget {
    constructor(props) {
        super(props);
        this.selectedApi = props.selectedApi; // 初始化选择的API
    }

    // 方法定义：获取图片
    async fetchData() {
        let apiUrl = '';
        switch (this.selectedApi) {
            case 'pcmeinvpic':
                apiUrl = 'https://v2.xxapi.cn/api/pcmeinvpic';
                break;
            case 'jk':
                apiUrl = 'https://v2.xxapi.cn/api/jk';
                break;
            case 'meinvpic':
                apiUrl = 'https://v2.xxapi.cn/api/meinvpic';
                break;
            case 'baisi':
                apiUrl = 'https://v2.xxapi.cn/api/baisi';
                break;
            case 'heisi':
                apiUrl = 'https://v2.xxapi.cn/api/heisi';
                break;
            case 'xiaojiejieshiping':
                apiUrl = 'https://v2.xxapi.cn/api/meinv';
                break;
            default:
                apiUrl = 'https://v2.xxapi.cn/api/pcmeinvpic';
        }

        const axios = require('axios');
        let data = null;

        try {
            const response = await axios.get(apiUrl);
            if (response.data && response.data.code === 200) {
                data = response.data.data; // 获取data字段的值
                this.emit('onDataReceived', data); // 触发数据获取成功的事件
            } else {
                this.emit('onError', 'API返回错误'); // 触发获取失败的事件
            }
        } catch (error) {
            this.emit('onError', `请求失败，错误信息：${error.message}`); // 触发获取失败的事件
        }

        return data;
    }
}

// 导出控件
exports.types = types;
exports.widget = GentlemanWidget;
