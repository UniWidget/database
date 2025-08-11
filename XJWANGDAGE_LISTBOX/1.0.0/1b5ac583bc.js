let t = 0;
const types = {
    type: 'XJWANGDAGE_LISTBOX',
    icon: 'https://ocean.codemao.cn/appcraft/resource/icon/%E7%A4%BE%E4%BA%A4/%E5%90%88%E4%BD%9C.svg',
    title: '列表框加载优化',
    version: '1.0.0',
    author: 'XJ王大哥(2357942846)',
    isInvisibleWidget: true,
    isGlobalWidget: false,
    properties: [],
    methods: [
        {
            key: 'methodName',
            label: '开始遍历',
            params: [
                {
                    key: 'paramName',
                    label: '',
                    valueType: ['string', 'number', 'boolean', 'color', 'array', 'object'],
                    defaultValue: '列表',
                },
            ],
            blockOptions: { callMethodLabel: false },
        },
        { key: 'methodName2', label: '结束遍历', params: [], blockOptions: { callMethodLabel: false } },
        {
            key: 'next',
            label: '继续遍历',
            params: [],
            blockOptions: { callMethodLabel: false },
        },
    ],
    events: [
        { key: 'eventName', label: '开始', params: [] },
        {
            key: 'eventName2',
            label: '遍历',
            params: [
                {
                    key: 'paramName2',
                    label: '当前项',
                    valueType: ['string', 'number', 'boolean', 'color', 'array', 'object'],
                },
            ],
        },
        { key: 'eventName3', label: '结束', params: [] },
    ],
};
class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
        this.array = undefined;
    }
    methodName(array) {
        // 开始
        this.emit('eventName');
        this.array = array.values();
        this.next();
    }
    methodName2() {
        // 结束
        this.array = undefined;
        this.emit('eventName3');
    }
    next() {
        if (!this.array) return;

        const { value, done } = this.array.next();

        if (done) this.methodName2();
        else this.emit('eventName2', value);
    }
}
exports.types = types;
exports.widget = Widget;
