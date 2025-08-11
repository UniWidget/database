const types = { 
    type: 'STRING_BGC_WIDGET', 
    title: '数字工具', 
    icon: 'https://creation.codemao.cn/716/appcraft/IMAGE_bZbAOhRcTa_1643095470593.svg', 
    isInvisibleWidget: true, 
    isGlobalWidget: true, 
    properties: [], 
    methods: [ 
        { 
            key:'toMyString', 
            valueType: 'string', 
            params: [
                {
                    key: 'nember', 
                    label: '把',
                    labelAfter: '转换成', 
                    valueType: nember, 
                    defaultValue: '0', 
                },
                {
                    key: 'text', 
                    labelAfter: '进制', 
                    valueType: nember,
                    defaultValue: '2',
                },
            ],
            tooltip: '把数字转化为其他进制，如 “把（13）转换（16）进制“ 返回 ”D“ ，“把（19）转换（2）进制“ 返回 “10011“ 。', 
        }
    ],
    events: [], 
}


class Widget extends InvisibleWidget { 
    constructor(props) {
        super(props); 
    }

    toMyString = (text ,number) => { 
        return (text).toString(number); 
    }

}


exports.types = types;
exports.widget = Widget;
