const types = {
    type: 'YB_LISTSEARCH_WIDGET',
    icon: 'https://static.codemao.cn/coco/image/share-dialog/qrlogo.png',
    title: '数据列表检索',
    version: '1.1.0',
    author: '云碧学者',
    isInvisibleWidget: true,
    isGlobalWidget: true,
    docs: { url: 'https://www.yuque.com/yunbixuezhe' },
    properties: [],
    methods: [
        {
            key: 'searchList',
            label: '搜索列表',
            valueType: false,
            params: [
                {
                    key: 'targetList',
                    label: '目标列表',
                    valueType: ['array', 'string'],
                    defaultValue: [],
                    tooltip: '输入要搜索的列表'
                },
                {
                    key: 'keyword',
                    label: '关键词',
                    valueType: 'string',
                    defaultValue: '',
                    tooltip: '输入搜索关键词'
                }
            ],
            blockOptions: {
                color: '#4CAF50',
                callMethodLabel: false
            }
        }
    ],
    events: [
        {
            key: 'onSearchSuccess',
            label: '搜索成功',
            params: [
                {
                    key: 'item',
                    label: '匹配项',
                    valueType: ['string', 'number', 'boolean', 'object', 'array']
                },
                {
                    key: 'index',
                    label: '索引位置',
                    valueType: 'number'
                }
            ],
            tooltip: '当找到匹配项时触发'
        },
        {
            key: 'onSearchError',
            label: '搜索失败',
            params: [
                {
                    key: 'reason',
                    label: '失败原因',
                    valueType: 'string'
                }
            ],
            tooltip: '当搜索失败时触发'
        }
    ]
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
    }
    
    searchList(targetList, keyword) {
        try {
            // 验证输入参数
            if (!targetList || !Array.isArray(targetList)) {
                this.emit('onSearchError', '提供的列表无效');
                return;
            }
            
            if (typeof keyword !== 'string') {
                this.emit('onSearchError', '关键词必须是字符串');
                return;
            }
            
            const keywordLower = keyword.toLowerCase();
            let hasMatch = false;
            
            // 遍历列表搜索匹配项
            targetList.forEach((item, index) => {
                try {
                    // 转换为字符串进行搜索
                    const itemStr = String(item).toLowerCase();
                    
                    if (itemStr.includes(keywordLower)) {
                        hasMatch = true;
                        this.emit('onSearchSuccess', item, index);
                    }
                } catch (error) {
                    this.emit('onSearchError', `处理索引${index}时出错: ${error.message}`);
                }
            });
            
            // 没有匹配项时触发错误事件
            if (!hasMatch) {
                this.emit('onSearchError', '未找到匹配项');
            }
        } catch (error) {
            this.emit('onSearchError', `搜索过程中出错: ${error.message}`);
        }
    }
}

exports.types = types;
exports.widget = Widget;
