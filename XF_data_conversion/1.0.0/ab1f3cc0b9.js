const types = {
    isInvisibleWidget: true,
    type: "XF_data_conversion",
    icon: "https://static.codemao.cn/pickduck/HJ1mcL7Wee.svg?hash=Fn82_n4IOmVkfWa5OCC_heSZEhGp",
    title: "数据转换",
    version: "1.0.0",
    docs: {
        url: 'https://www.yuque.com/xiaofeng-0fczj/rie0lc/yg0dnws2a5nrlbt0'
    },
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);

    }

}

types['methods'].push({
    key: 'renyi',
    label: '为',
    params: [{
            key: 'renyi_list',
            label: '',
            valueType: 'string',
            dropdown: [{
                    label: '任意类型',
                    value: '任意类型',
                },

                {
                    label: '数字',
                    value: '数字',
                },

                {
                    label: '字典',
                    value: '字典',
                },

                {
                    label: '颜色',
                    value: '颜色',
                },

                {
                    label: '列表',
                    value: '列表',
                },

                {
                    label: '字符串',
                    value: '字符串',
                },

                {
                    label: '布尔值',
                    value: '布尔值',
                },
            ],
        },


        {
            key: 'renyi_text',
            label: '数据',
            valueType: ['string', 'number', 'boolean', 'color', 'array', 'object'],
            defaultValue: '',
        },
    ],
    valueType: ['string', 'number', 'boolean', 'array', 'color', 'object', ],
    blockOptions: {
        color: '#ffbb55',
        icon: '无',
        generateBlock: true,
        inputsInline: true,
        space: 16,
        callMethodLabel: false,
        line: "转换类型"
    },
})
Widget.prototype.w = function(w_text, w_list, w_hz, ) {
    return (w_text >= 10000 ? [Math.floor(w_text / 10000), w_list, w_hz].join('') : String(w_text) + String(w_hz));
}
types['methods'].push({
    key: 'w',
    label: '把',
    params: [
        {
            key: 'w_text',
            label: '',
            valueType: 'number',
            defaultValue: 13764665,
        },
        {
            key: 'w_list',
            label: '转为',
            valueType: 'string',
            dropdown: [
                { label: '万', value: '万' },
                { label: 'w', value: 'w' }
            ],
        },
        {
            key: 'w_hz',
            label: '',
            valueType: 'string',
            defaultValue: '播放量',
        }
    ],
    valueType: 'string',
    blockOptions: {
        color: '#ffbb55',
        icon: '无',
        generateBlock: true,
        inputsInline: true,
        space: 16,
        callMethodLabel: false,
        line: "转为万单位"
    },
})

Widget.prototype.w = function (w_text, w_list, w_hz) {
    const num = Number(w_text);
    return num >= 10000 
        ? `${Math.floor(num / 10000)}${w_list}${w_hz}` 
        : `${num}${w_hz}`;
};
types['methods'].push({
    key: 't',
    label: '距离',
    params: [{
            key: 't_text',
            label: '',
            valueType: 'string',
            defaultValue: '现在-发表时间 秒数',
        },
        {
            key: 't_hz',
            label: '有多久',
            valueType: 'string',
            defaultValue: '前',
        },
    ],
    valueType: 'string',
    blockOptions: {
        color: '#ffbb55',
        icon: '无',
        generateBlock: true,
        inputsInline: true,
        space: 16,
        callMethodLabel: false,
        line: "多久前"
    },
})
Widget.prototype.t = function(t_text, t_hz, ) {
    if (t_text >= 31536000) {
        return ([Math.floor(t_text / 31536000), '年', t_hz].join(''));
    } else if (t_text >= 2628000) {
        return ([Math.floor(t_text / 2628000), '月', t_hz].join(''));
    } else if (t_text >= 604800) {
        return ([Math.floor(t_text / 604800), '周', t_hz].join(''));
    } else if (t_text >= 86400) {
        return ([Math.floor(t_text / 86400), '天', t_hz].join(''));
    } else if (t_text >= 3600) {
        return ([Math.floor(t_text / 3600), '小时', t_hz].join(''));
    } else if (t_text >= 60) {
        return ([Math.floor(t_text / 60), '分钟', t_hz].join(''));
    } else if (t_text >= 0) {
        return ([Math.floor(t_text / 0),'秒',t_hz].join(''));} else if (t_text < 0) {
    this.widgetError('现在-发表时间 的 秒数 不能 小于0！');
  }

}
exports.types = types;
exports.widget = Widget;