const types = {
    isInvisibleWidget: true,
    type: "XF_Rich_text",
    icon: "https://static.codemao.cn/pickduck/rJjXrsBZxl.svg?hash=Fun--wcrpUF09Etm02ao_dMfr0wv",
    title: "富文本",
    version: "1.0.0",
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
    key: 'png',
    label: '插图',
    params: [{
            key: 'png_url',
            label: '',
            valueType: 'string',
            defaultValue: "",
        },
        {
            key: 'png_k',
            label: '宽',
            valueType: 'number',
            defaultValue: 16,
        },
        {
            key: 'png_g',
            label: '高',
            valueType: 'number',
            defaultValue: 16,
        },
        {
            key: 'png_ms',
            label: '描述',
            valueType: 'string',
            defaultValue: '',
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
        line: "图片"
    },
})
Widget.prototype.png = function(png_url, png_k, png_g, png_ms, ) {
    return (['<img src="', png_url, '" alt="', png_ms, '" width="', png_k, '" height="', png_g, '" title="', png_ms, '" />'].join(''));
}
types['methods'].push({
    key: 'text',
    label: '文字',
    params: [{
            key: 'text_text',
            label: '',
            valueType: 'string',
            defaultValue: "",
        },
        {
            key: 'text_h',
            label: '',
            valueType: 'string',
            dropdown: [{
                    label: 'p',
                    value: 'p',
                },

                {
                    label: 'h1',
                    value: 'h1',
                },

                {
                    label: 'h2',
                    value: 'h2',
                },

                {
                    label: 'h3',
                    value: 'h3',
                },

                {
                    label: 'h4',
                    value: 'h4',
                },
            ],
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
        line: "文字"
    },
})
Widget.prototype.text = function(text_text, text_h, ) {
    return (['<', text_h, '>', text_text, '</', text_h, '>'].join(''));
}

types['methods'].push({
    key: 'text2',
    label: '',
    params: [{
            key: 'text2_text',
            label: '',
            valueType: 'string',
            defaultValue: "",
        },
        {
            key: 'text2_list',
            label: '',
            valueType: 'string',
            dropdown: [{
                    label: '加粗',
                    value: '加粗',
                },

                {
                    label: '斜体',
                    value: '斜体',
                },

                {
                    label: '下划线',
                    value: '下划线',
                },

                {
                    label: '横线',
                    value: '横线',
                },
            ],
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
    },
})
Widget.prototype.text2 = function(text2_text, text2_list, ) {
    return ([text2_list.replace('加粗', '<strong>').replace('斜体', '<em>').replace('下划线', '<u>').replace('横线', '<s>'), text2_text, text2_list.replace('加粗', '</strong>').replace('斜体', '</em>').replace('下划线', '</u>').replace('横线', '</s>')].join(''));
}
types['methods'].push({
    key: 'blank',
    label: '',
    params: [{
            key: 'blank_list',
            label: '',
            valueType: 'string',
            dropdown: [{
                    label: '空格',
                    value: '空格',
                },

                {
                    label: '换行',
                    value: '换行',
                },
            ],
        },


        {
            key: 'blank_num',
            label: '数',
            valueType: 'number',
            defaultValue: 1,
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
        line: "其他功能"
    },
})
Widget.prototype.blank = function(blank_list, blank_num, ) {
    return (blank_list == '空格' ? ('&nbsp;'.padEnd((blank_num * 6), '&nbsp;')) : ('<br />'.padEnd((blank_num * 6), '<br />')));
}
types['methods'].push({
    key: 'hengxian',
    label: '横线',
    params: [],
    valueType: 'string',
    blockOptions: {
        color: '#ffbb55',
        icon: '无',
        generateBlock: true,
        inputsInline: true,
        space: 16,
        callMethodLabel: false,
    },
})
Widget.prototype.hengxian = function() {
    return '<hr />';
}
types['methods'].push({
    key: 'subp',
    label: '角标',
    params: [{
            key: 'subp_text',
            label: '',
            valueType: 'string',
            defaultValue: "",
        },
        {
            key: 'subp_list',
            label: '',
            valueType: 'string',
            dropdown: [{
                    label: '上',
                    value: '上',
                },

                {
                    label: '下',
                    value: '下',
                },
            ],
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
    },
})
Widget.prototype.subp = function(subp_text, subp_list, ) {
    return (subp_list == '上' ? ['<sup>', subp_text, '</sup>'].join('') : ['<sub>', subp_text, '</sub>'].join(''));
}
exports.types = types;
exports.widget = Widget;