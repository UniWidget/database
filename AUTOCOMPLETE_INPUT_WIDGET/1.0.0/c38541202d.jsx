/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

const types = {
    isInvisibleWidget: false,
    type: "AUTOCOMPLETE_INPUT_WIDGET",
    icon: "https://static.codemao.cn/coco/player/unstable/S1Dtc4Q33.image/jpeg?hash=Fske55mPi_ZyPl7DuU3VydyxBjr2",
    title: "联想输入框",
    version: "1.0.0",
    isGlobalWidget: false,
    properties: [
        {
            key: '__width',
            label: '宽度',
            valueType: 'number',
            defaultValue: 300,
        },
        {
            key: 'placeholder',
            label: '占位符',
            valueType: 'string',
            defaultValue: '请输入内容',
        },
        {
            key: 'value',
            label: '输入值',
            valueType: 'string',
            defaultValue: '',
        },
        {
            key: 'options',
            label: '选项',
            valueType: ['string', 'array'],
            defaultValue: 'China,CoCo,Close,Const,Count',
        },
    ],
    methods: [],
    events: [
        {
            key: 'onChange',
            label: '输入内容改变',
            params: [
                {
                    key: 'value',
                    label: '输入值',
                    valueType: 'string',
                },
            ],
        },
    ],
};

class AutocompleteInputWidget extends VisibleWidget {
    constructor(props) {
        super(props);
        this.__width = props.__width;
        this.placeholder = props.placeholder;
        this.options = props.options;
        this.value = props.value || ''
    }

    handleChange = (event) => {
        const newValue = event.target.value;
        this.setProps({ value: newValue });
        this.emit('onChange', newValue);
    };

    handleOptionClick = (option) => {
        this.setProps({ value: option });
        this.emit('onOptionClick', option);
    };

    render() {
        const  value = this.value;
        const optionList = typeof this.options === 'object' ? this.options : this.options.split(',');

        return (
            <div style={{ width: this.__width }}>
                <input
                    type="text"
                    style={{
                        fontSize: 16,
                        padding: '5px 10px',
                        width: '100%',
                        borderRadius: 5,
                        border: '1px solid #ccc',
                    }}
                    placeholder={this.placeholder}
                    value={value}
                    list="autocomplete_options"
                    onChange={this.handleChange}
                />
                <datalist id="autocomplete_options">
                    {optionList.map((option, index) => (
                        <option key={index} value={option} onClick={() => this.handleOptionClick(option)} />
                    ))}
                </datalist>
            </div>
        );
    }
}

exports.types = types;
exports.widget = AutocompleteInputWidget;
