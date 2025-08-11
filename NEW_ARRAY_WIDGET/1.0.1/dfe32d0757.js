function toArr(arr) {
    return (Array.isArray(arr) ? arr : [arr]);
}

const cyan_types = {
    isInvisibleWidget: true,
    type: "NEW_ARRAY_WIDGET",
    icon: "",
    title: "新建列表",
    version: "1.0.1",
    isGlobalWidget: true,
    platforms: ["android", "ios", "web"],
    properties: [],
    methods: [
        {
            key: 'new_array',
            label: '列表',
            params: [
                {
                    key: 'array_1',
                    label: '',
                    valueType: ['string', 'number', 'boolean', 'color', 'array', 'object'],
                    defaultValue: '创建子列表或父列表（解释说明）',
                },
                {
                    key: 'array_2',
                    label: '',
                    valueType: ['string', 'number', 'boolean', 'color', 'array', 'object'],
                    defaultValue: '填写数据或互相嵌套（参数填写）',
                }
            ],
            valueType: 'array',
            blockOptions: {
                color: '#f9cc37',
                callMethodLabel: false
            }
        },
        {
            key: 'new_children_array',
            label: '子列表',
            params: [
                {
                    key: 'array',
                    label: '',
                    valueType: ['string', 'array'],
                    defaultValue: '列表中创建列表必用，相当于标识他是个子列表',
                }
            ],
            valueType: 'array',
            blockOptions: {
                color: '#f9cc37',
                callMethodLabel: false
            }
        }
    ],
    events: []
};

class cyan_Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
        //作者青舒计
    }
    new_array = (array_1,array_2) => {
        return toArr(array_1).concat(toArr(array_2));
    }
    new_children_array = (array) => {
        return [array];
    }
}

exports.types = cyan_types;
exports.widget = cyan_Widget;
