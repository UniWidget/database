/*
type：num（数字）
direction：up（升序），down
i：二维列表的第几列
*/
function getSortFunc(type, direction, i) {
    var compareFunc = {
        num: {
            up: function (a, b) {
                return a[i] - b[i];
            },
            down: function (a, b) {
                return b[i] - a[i];
            }
        }
    };
    return compareFunc[type][direction];
}

const types = {
    type: 'SORT_LIST_CYAN_WIDGET',
    icon: 'https://static.codemao.cn/coco/player/unstable/By1BcMlqi.image/svg+xml?hash=Fi4vO5F0eV8vdUnd7pN-s8l8Ly4A',
    title: '二维列表排序',
    version: '1.0.1',
    auther: '青舒计',
    docs: {
        url: 'https://coco.codemao.cn/editor/player/156697458/dt/269?channel=h5'
    },
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    methods: [
        {
            key: 'sort',
            label: '按',
            params: [
                {
                    key: 'type',
                    label: '',
                    labelAfter: '',
                    valueType: 'string',
                    dropdown: [
                        {
                            label: '数字',
                            value: 'num'
                        }
                    ],
                    defaultValue: 'num'
                },
                {
                    key: 'direction',
                    label: '',
                    labelAfter: '',
                    valueType: 'string',
                    dropdown: [
                        {
                            label: '升序',
                            value: 'up'
                        },
                        {
                            label: '降序',
                            value: 'down'
                        }
                    ],
                    defaultValue: 'up'
                },
                {
                    key: 'list',
                    label: '',
                    labelAfter: '',
                    valueType: ['string', 'array'],
                    defaultValue: '二维列表'
                },
                {
                    key: 'i',
                    label: '第',
                    labelAfter: '列',
                    valueType: ['number', 'string'],
                    defaultValue: 1
                }
            ],
            valueType: 'array',
            blockOptions: {
                callMethodLabel: false,
                color: 'rgb(249, 204, 55)'
            },
            tooltip: '基础代码：\nhttps://coco.codemao.cn/editor/player/156697458/dt/269?channel=h5'
        }
    ],
    events: []
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
    }

    sort = (type, direction, list, i) => {
        return (
            list.sort(
                getSortFunc(
                    type,
                    direction,
                    (i - 1)
                )
            )
        );
        //直接返回排序后的列表
    }
}

exports.types = types;
exports.widget = Widget;
