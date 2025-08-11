const types = {
    type: 'LIST_FILTERING_XJ',
    icon: 'https://ocean.codemao.cn/appcraft/resource/icon/基础/查询.svg',
    title: '列表筛选',
    version: '1.0.0',
    author: 'XJ王大哥(QQ2357942846)',
    isInvisibleWidget: true,
    isGlobalWidget: true,
    docs: { url: 'https://xjwangdage.feishu.cn/wiki/V5HYwJfgsif3zrkgCYmcvEj0nUh?from=from_copylink' },
    properties: [],
    methods: [
        {
            key: 'filter',
            label: '筛选',
            valueType: 'array',
            params: [
                {
                    key: 'list',
                    label: '列表',
                    valueType: ['array', 'string'],
                    defaultValue: '',
                },
                {
                    key: 'expression',
                    label: '条件',
                    valueType: 'string',
                    defaultValue: 'item["用户名"] === "CoCo鸭"',
                },
            ],
        },
    ],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(p) {
        super(p);
        Object.assign(this, p);
    }
    filter(l, e) {
        return l.filter((item, index) => new Function('item', 'index', `return ${e}`)(item, index));
    }
}

for (let i of types.methods) i.blockOptions = { ...i.blockOptions, callMethodLabel: false };

exports.types = types;
exports.widget = Widget;
