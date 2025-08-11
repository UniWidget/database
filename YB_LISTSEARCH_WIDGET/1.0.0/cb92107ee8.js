const types = {
    type: 'YB_LISTSEARCH_WIDGET',
    icon: 'https://static.codemao.cn/coco/image/share-dialog/qrlogo.png',
    title: '数据列表检索',
    version: '1.0.0',
    author: '云碧学者',
    isInvisibleWidget: true,
    isGlobalWidget: true,
    docs: { url: 'https://www.yuque.com/yunbixuezhe/' },
    properties: [],
    methods: [
        {
            key: 'search',
            label: '列表搜索',
            valueType: ['string', 'object'],  // 可能返回字符串(错误)或对象(结果)
            params: [
                {
                    key: 'list',
                    label: '列表',
                    valueType: ['array', 'string'],
                    defaultValue: [],
                    tooltip: '输入数组或逗号分隔的字符串'
                },
                {
                    key: 'keyword',
                    label: '关键词',
                    valueType: 'string',
                    defaultValue: ''
                }
            ],
            blockOptions: {
                callMethodLabel: false,
                color: '#4A90E2'
            }
        }
    ],
    events: []
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
    }

    /**
     * 核心搜索逻辑
     * @param {Array|string} list - 用户输入的列表
     * @param {string} keyword - 搜索关键词
     * @returns {string|object} - 返回匹配项或错误信息
     */
    search(list, keyword) {
        // 输入验证
        if (!keyword || typeof keyword !== 'string') {
            return "错误：关键词必须是字符串";
        }
        
        // 列表格式处理
        let parsedList;
        if (typeof list === 'string') {
            parsedList = list.split(',').map(item => item.trim());
        } else if (Array.isArray(list)) {
            parsedList = [...list];
        } else {
            return "错误：列表必须是数组或逗号分隔的字符串";
        }

        // 执行搜索
        for (const item of parsedList) {
            const itemStr = String(item).toLowerCase();
            if (itemStr.includes(keyword.toLowerCase())) {
                return item; // 返回第一个匹配项
            }
        }
        
        // 无匹配结果
        return "无匹配项";
    }
}

exports.types = types;
exports.widget = Widget;
