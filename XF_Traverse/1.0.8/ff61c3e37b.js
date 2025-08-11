const types = {
    type: 'XF_Traverse',
    icon: 'https://static.codemao.cn/pickduck/HyYZB4kbxg.svg?hash=FmJy9UAauWRHWI0mg0nAQCY_MadW',
    title: '遍历',
    version: '1.0.8',
    author: '小风(QQ2085270395)',
    docs: {
        url: 'https://www.yuque.com/xiaofeng-0fczj/rie0lc/ul1g6q32d9lrxutw'
    },
    isInvisibleWidget: true,
    isGlobalWidget: false,
    properties: [],
    methods: [
        {
            key: 'Traversal_List',
            label: '列表',
            params: [{
                key: 'list_open',
                label: '',
                valueType: ['string', 'number', 'array', 'object'],
                defaultValue: '',
            }],
            blockOptions: {
                callMethodLabel: false
            },
        },
        {
            key: 'list_type',
            label: '',
            params: [{
                key: 'type_text',
                labelAfter: '遍历',
                valueType: 'string',
                dropdown: [
                    { label: '继续', value: '继续' },
                    { label: '结束', value: '结束' },
                ],
            }],
            blockOptions: {
                callMethodLabel: false
            },
        }
    ],
    events: [
        {
            key: 'start_list',
            label: '开始',
            params: [],
        },
        {
            key: 'Traversal_List_ing',
            label: '',
            params: [
                {
                    key: 'text',
                    label: '数据',
                    valueType: ['string', 'number', 'boolean', 'color', 'array', 'object'],
                },
                {
                    key: 'Line',
                    label: '行',
                    valueType: ['string', 'number', 'boolean', 'color', 'array', 'object'],
                }
            ],
        }, 
        {
            key: 'end_list',
            label: '结束',
            params: []
        }
    ],
};  

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
        this.array = undefined;
    }

    Traversal_List(array) {
        this.emit('start_list');
        this.array = array[Symbol.iterator]();
        this.count = 0;
        this.next();
    }

    next() {
        if (!this.array) return;

        const {
            value,
            done
        } = this.array.next();
        if (done) {
            this.End_Traversal();
        } else {
            this.count++;
            this.emit('Traversal_List_ing', value, this.count);
        }
    }

    End_Traversal() {
        this.array = undefined;
        this.emit('end_list');
    }

    list_type(type_text) {
        if (type_text === '继续') {
            this.next();
        } else if (type_text === '结束') {
            this.End_Traversal();
        }
    }
}

exports.types = types;
exports.widget = Widget;