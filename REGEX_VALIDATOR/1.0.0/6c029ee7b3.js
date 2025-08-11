// 类型定义（补全必要字段）
const types = {
    type: 'REGEX_VALIDATOR', // 类型名必须全大写+下划线
    icon: 'https://example.com/regex-icon.svg',
    title: '正则验证器',
    isInvisibleWidget: true,
    // 必须包含 properties/events（即使为空）
    properties: [],
    events: [],
    methods: [
        {
            key: 'validate',
            label: '验证',
            params: [
                {
                    key: 'text',
                    label: '文本',
                    valueType: 'string',
                    defaultValue: '' // 必须包含默认值
                },
                {
                    key: 'pattern',
                    label: '格式',
                    valueType: 'string',
                    defaultValue: '^\\d+$'
                }
            ],
            valueType: 'boolean' // 声明返回值类型
        }
    ]
};

// 控件实体定义（严格匹配方法名）
class RegexValidatorWidget extends InvisibleWidget {
    // 方法名必须与 key 完全一致
    validate = (text, pattern) => {
        try {
            const regex = new RegExp(pattern);
            return regex.test(text); // 直接返回结果
        } catch {
            return false; // 错误时返回 false
        }
    };
}

exports.types = types;
exports.widget = RegexValidatorWidget;