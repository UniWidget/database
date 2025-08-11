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
            tooltip: "帮助你在云数据表里存一个列表(防止出现列表成员里包含‘,’而导致的错误)！"
        },
        {
            key: 'XOR_repalce',
            valueType: 'string',
            params: [
                {
                    key: "OldString",
                    label: "替换",
                    labelAfter: "中的%dh%为英文逗号",
                    valueType: "string",
                    defaultValue: "你好%dh%世界"
                },
            ],
            tooltip: "帮助你在云数据表里存一个列表(防止出现列表成员里包含‘,’而导致的错误)！"
        },
        {
            key: 'ListStoreTool',
            valueType: "string",
            params: [
                {
                    key: "List",
                    label: "把二维列表",
                    labelAfter: "替换为云数据库易读形式?",
                    valueType: ['string', 'number', 'boolean', 'color', 'array', 'object'],
                    defaultValue: "[[1,2,3],[1,2,3]]"
                },
            ],
            tooltip: "通过','帮助你在云数据库里存储二维数组"

        },
        {
            key: "setStringToList",
            valueType: 'string',
            params: [
                {
                    key: "List",
                    label: "解析",
                    labelAfter: "为二维列表",
                    valueType: "string",
                    defaultValue: "1,2,3%fgf%1,2,3%fgf%1,2,3"

                },


            ],
            tooltip: "解析一个用';'存储在云数据库里的二维数组)"

        }
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
        return OldString.replace(",", "%dh%");

    }
    XOR_repalce = (OldString) => {
        return OldString.replace("%dh%", ",")
    }
    ListStoreTool = (List) => {
        return List.flatMap(row => row.join(",")).join(";");
    }
    setStringToList = (List) => {
        return List.split(";").map(row => row.split(","));
    }
}

exports.types = types;
exports.widget = Widget;

