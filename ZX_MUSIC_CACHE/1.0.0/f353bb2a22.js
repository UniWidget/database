var window = this.window
var fetch = window['fetch']
const types = {
    isInvisibleWidget: true,
    type: "ZX_MUSIC_CACHE",
    icon: "",
    title: "音频缓存",
    version: "1.0.0",
    docs: '',
    isGlobalWidget: true,
    properties: [],
    methods: [{
        key: 'create_dataurl',
        label: '从链接创建dataurl',
        valueType: 'string',
        params: [
            {
                key: 'url',
                label: '链接',
                valueType: 'string',
                defaultValue: '',
            },
        ],
    },
    {
        key: 'create_blob',
        label: '从data创建blob',
        valueType: 'string',
        params: [
            {
                key: 'data',
                label: 'data',
                valueType: 'string',
                defaultValue: '',
            },
        ],
    }],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
        Object.assign(this, props);
    }
    async create_dataurl(url) {
        const data = await fetch(url)
        if (!data.ok) { return '请求失败' }
        const blob = await data.blob()
        const dataURL = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = () => reject(reader.error);
            reader.readAsDataURL(blob);
        });
        return dataURL;
    }
    async create_blob(data) {
        try {
            const datas = await fetch(data)
            if (!datas.ok) { return '请求失败' }
            const blob = await datas.blob()
            const blobUrl = URL.createObjectURL(blob);
            return blobUrl;
        }
        catch (error) {
            return '出错了'
        }
    }
}
exports.types = types;
exports.widget = Widget;
