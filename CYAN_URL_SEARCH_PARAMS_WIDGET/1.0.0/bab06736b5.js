const blockOptions_ = {
    color: 'rgb(0, 175, 195)',
    callMethodLabel: '解析'
}

const cyanb2laTypes = {
    type: 'CYAN_URL_SEARCH_PARAMS_WIDGET',
    icon: 'https://ocean.codemao.cn/appcraft/resource/icon/基础/查询.svg',
    title: '解析URL参数',
    version: '1.0.0',
    auther: '青舒计',
    platform: ['web', 'android', 'ios'],
    docs: {
        url:''
    },
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    methods: [
        {
            key: 'URLParamsToDict',
            label: '',
            params: [
                {
                    key: 'URLParams',
                    label: 'URL参数',
                    valueType: 'string',
                    defaultValue: '',
                },
                {
                    key: 'type',
                    label: '为',
                    valueType: 'string',
                    dropdown: [
                        {
                            label: '字典',
                            value: 'dict'
                        },
                        {
                            label: '列表',
                            value: 'list'
                        }
                    ],
                    defaultValue: 'dict'
                }
            ],
            valueType: ['object', 'array'],
            tooltip: `字符串格式：
            ·"?key=value"
            ·"key=value"
            返回值：
            ·{"key": "value"}
            ·[["key", "value"]]`,
            blockOptions: blockOptions_
        },
        {
            key: 'DictToURLParams',
            label: '',
            params: [
                {
                    key: 'dict',
                    label: '数据',
                    labelAfter: '为URL参数',
                    valueType: ['string', 'object', 'array'],
                    defaultValue: '{"key": "value"}或者[["key", "value"]]',
                }
            ],
            valueType: 'string',
            tooltip: `数据格式：
            ·{"key": "value"}
            ·[["key", "value"]]
            返回值：
            ·"key=value"
            小技巧：传入字符串会去掉前面的问号
            （其他的也是）
            如：
            >"?key=value"
            <"key=value"`,
            blockOptions: blockOptions_
        }
    ],
    events: []
};

class cyanb2laWidget extends InvisibleWidget {
    constructor(props) {
        super(props);
        this.widgetLog(`编程猫：8525855
        QQ：2635725313
        ©青舒计 精心制作
        有任何疑问请私信QQ`);
    }
    
    URLParamsToDict = (URLParams, type) => ((data) => (
        type == 'dict' ? Object.fromEntries(data) : (
            type == 'list' ? Array.from(data) : null
        )
    ))(new URLSearchParams(URLParams).entries())
    
    DictToURLParams = (dict) => new URLSearchParams(dict).toString()
}

exports.types = cyanb2laTypes;
exports.widget = cyanb2laWidget;
