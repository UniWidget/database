const types = {
    type: 'CLOUD_DATE_LIST_TOOLS',
    title: '云数据表工具',
    icon: 'https://creation.codemao.cn/716/appcraft/IMAGE_bZbAOhRcTa_1643095470593.svg',
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    methods: [
        {
            key: 'getGetsVal',
            valueType: 'string',
            params: [
                {
                    key: 'Gets',
                    label: '取',
                    labelAfter: '得到的值中的第',
                    valueType: ['string', 'number', 'boolean', 'color', 'array', 'object'],
                    defaultValue: '查询结果',
                },
                {
                    key: "Remeber",
                    labelAfter: "项",
                    valueType: 'number',
                    defaultValue: 1
                },
            ],
            tooltip: '取查询结果得到的值',
        },

        {
            key: 'repalceDouHao',
            valueType: 'string',
            params: [
                {
                    key: "OldString",
                    label: "替换",
                    labelAfter: "中的英文逗号为%dh%",
                    valueType: "string",
                    defaultValue: "你好,世界"
                },
            ],
            tooltip: "如何你不得不要用到这个函数了说明你真的很傻逼😂"
        },
    ],
    events: [],
}

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
    }

    getGetsVal = (Gets, Remeber) => {
        return Gets[0][Remeber - 1];
    }
    repalceDouHao = (OldString) => {
        return "你以为我真会给你用啊？";

    }
}

exports.types = types;
exports.widget = Widget;

