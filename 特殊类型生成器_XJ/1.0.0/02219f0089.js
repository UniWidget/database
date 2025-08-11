const types = {
    type: '特殊类型生成器_XJ',
    icon: 'https://ocean.codemao.cn/appcraft/resource/icon/社交/扑克牌.svg',
    title: '特殊类型生成器',
    version: '1.0.0',
    author: 'XJ王大哥(2357942846)',
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    methods: [{ label: 'Undefined' }, { label: 'Null' }, { label: 'NaN' }, { label: 'Infinity' }, { label: '负Infinity' }, { label: '空列表' }, { label: '空字典' }],
    events: [],
};
class Widget extends InvisibleWidget {
    constructor(props) { super(props); }
    Undefined = () => void 0;
    Null = () => null;
    NaN = () => NaN;
    Infinity = () => Infinity;
    负Infinity = () => -Infinity;
    空列表 = () => [];
    空字典 = () => ({});
}
for (let i of types.methods) {
    i.key = i.label;
    i.params = [];
    i.valueType = ['string', 'number', 'boolean', 'array', 'color', 'object', 'undefined'];
    i.blockOptions = { ...i.blockOptions, callMethodLabel: false };
}
exports.types = types;
exports.widget = Widget;