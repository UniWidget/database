const types = {
    title: "全能输入框",
    type: "INPUT_WIDGET_29",
    icon: "icon-widget-input",
    version: "0.0.1",
    isInvisibleWidget: false,
    isGlobalWidget: false,
    properties: [
        {
            key: '__width',
            label: '宽度',
            valueType: 'number',
            defaultValue: 220,
            blockOptions: {
                generateBlock: false,
            },
        },
        {
            key: '__height',
            label: '高度',
            valueType: 'number',
            defaultValue: 45,
            blockOptions: {
                generateBlock: false,
            },
        },
        {
            key: 'disabled',
            label: '禁用',
            valueType: 'boolean',
            defaultValue: false,
        },
        {
            key: 'inputStyle',
            label: '类型',
            valueType: 'string',
            dropdown: [
                { label: '文本', value: 'text' },
                { label: '数字', value: 'number' },
                { label: '密码', value: 'password' },
                { label: '按钮', value: 'button' },
            ],
            defaultValue: 'text',
        },
        {
            key: 'inputRadius',
            label: '圆角',
            valueType: 'number',
            defaultValue: 6,
        },
        {
            key: 'fontSize',
            label: '文字大小',
            valueType: 'number',
            defaultValue: 16,
        },
        {
            key: 'inputValue',
            label: '输入文案',
            valueType: 'string',
            defaultValue: '',
        },
        {
            key: 'placeholder',
            label: '提示文案',
            valueType: 'string',
            defaultValue: '请输入内容...',
        },
        {
            key: 'inputColor',
            label: '背景颜色',
            valueType: 'color',
            defaultValue: '#EBECEF',
        },
        {
            key: 'valueColor',
            label: '输入文案颜色',
            valueType: 'color',
            defaultValue: '#000000',
        },
        {
            key: 'placeColor',
            label: '提示文案颜色',
            valueType: 'color',
            defaultValue: '#00000060',
        },
        {
            key: 'maxlength',
            label: '最大输入长度',
            valueType: 'number',
            defaultValue: 200,
            blockOptions: { generateBlock: false },
        },
        {
            key: 'padding',
            label: '输入框边距',
            valueType: 'number',
            defaultValue: 16,
            blockOptions: { generateBlock: false },
        },
        {
            key: 'icon',
            label: '左侧图标',
            valueType: 'string',
            defaultValue: 'https://static.codemao.cn/coco/player/unstable/HyvQ-eaXT.image/png?hash=Fu1W18R2V75FUOQeT-aRQETz94s5',
        },
        {
            key: 'iconSize',
            label: '图标大小',
            valueType: 'number',
            defaultValue: 18,
            blockOptions: { generateBlock: false },
        },
        {
            key: 'disabledColor',
            label: '禁用状态文本颜色',
            valueType: 'color',
            defaultValue: '#7C7C7C',
            blockOptions: { generateBlock: false },
        },
        {
            key: 'disabledBgColor',
            label: '禁用状态背景颜色',
            valueType: 'color',
            defaultValue: '#DFE0E2',
            blockOptions: { generateBlock: false },
        },
        {
            key: 'clickStyle',
            label: '点击动画',
            valueType: 'boolean',
            defaultValue: false,
            blockOptions: { generateBlock: false },
        },
        {
            key: 'widgetID',
            label: '控件ID',
            valueType: 'string',
            defaultValue: 'input_1',
            blockOptions: { generateBlock: false },
        },
        {
            key: '__size',
            label: '',
            valueType: 'number',
            defaultValue: 0,
            readonly: true,
            blockOptions: {
                setter: {
                    keys: ['__height', '__width'],
                },
                getter: {
                    keys: ['__height', '__width'],
                },
            },
        }
    ],
    methods: [
        {
            key: 'errorText',
            label: '报错提示',
            params: [
                {
                    key: "text",
                    valueType: 'string',
                    defaultValue: '输入错误！',
                },
            ],
        },
    ],
    events: [
        {
            key: 'onChange',
            label: '文本改变',
            params: [
                {
                    key: 'valve',
                    label: '文本内容',
                    valueType: 'string',
                },
            ],
        },
        {
            key: 'onFocus',
            label: '获得焦点',
            params: [],
        },
        {
            key: 'onBlur',
            label: '失去焦点',
            params: [],
        },
        {
            key: 'onClick',
            label: '被点击',
            params: [],
        },
    ],
};

class Widget extends VisibleWidget {
    constructor(props) {
        super(props);
        this.disabled = props.disabled;
        this.inputStyle = props.inputStyle;
        this.inputRadius = props.inputRadius;
        this.fontSize = props.fontSize;
        this.inputValue = props.inputValue;
        this.placeholder = props.placeholder;
        this.inputColor = props.inputColor;
        this.valueColor = props.valueColor;
        this.placeColor = props.placeColor;
        this.maxlength = props.maxlength;
        this.padding = props.padding;
        this.icon = props.icon;
        this.iconSize = props.iconSize;

        this.disabledColor = props.disabledColor;
        this.disabledBgColor = props.disabledBgColor;
        
        this.widgetID = props.widgetID;
        this.clickStyle = props.clickStyle;

        this.error = "";

    }

    // 内容改变时执行
    onChange = (e) => {
        let newValue = e.target.value;
        this.setProps({
            inputValue: newValue,
        });
        this.emit('onChange', newValue);
    };
    // 获取焦点 & 失去焦点 & 被点击
    onClick = () => { this.emit('onClick'); };
    onFocus = () => { this.emit('onFocus'); };
    onBlur = () => { this.emit('onBlur'); };
    
    // 报错提示
    errorText = (text) => {
        this.setProps({
            error: text,
        });
    }

    render() {
        return (
            <div style={{ width: "100%", height: "100%" }}>
                <div class={ this.widgetID + "_box" } style={{ width: "100%", height: "100%", position: "relative", }}>
                    <img src={ this.icon } class={ this.widgetID + "_icon" } />
                    <input
                        class={ this.widgetID }
                        type={ this.inputStyle }
                        value={ this.inputValue }
                        placeholder={ this.placeholder }
                        maxLength={ this.maxlength }
                        disabled={ this.disabled }

                        onChange={ this.onChange }
                        onFocus={ this.onFocus }
                        onBlur={ this.onBlur }
                        onClick={ this.onClick }
                    />
                    <p class="error">{ this.error }</p>
                </div>

                <style>
                    {`
                        .${ this.widgetID }_box{
                            transition: 0.15s;
                        }
                        .${ this.widgetID }_box:active{
                            transform: scale(${ this.clickStyle === true && this.disabled === false ? "0.96" : "1" } );
                            filter: brightness(${ this.clickStyle === true && this.disabled === false ? "0.94" : "1" });
                        }
                        
                        .${ this.widgetID }{
                            padding: 0px ${ this.padding }px 0px ${ this.icon === "" ? this.padding : this.padding + 25 }px;
                            width: 100%;  height: 100%;
                            border: none; outline: none;
                            font-size: ${ this.fontSize }px;
                            text-align: ${ this.inputStyle === "button" ? "center" : "left"};
                            color: ${ this.disabled === true ? this.disabledColor : this.valueColor };
                            background: ${ this.disabled === true ? this.disabledBgColor : this.inputColor };
                            border-radius: ${ this.inputRadius }px;
                            transition: 0.1s;
                        }
                        .${ this.widgetID }::placeholder{
                            color: ${ this.placeColor };
                        }

                        .${ this.widgetID }_icon{
                            position: absolute; top: 50%; left: 0px;
                            transform: translate(16px, -50%);
                            height: ${ this.iconSize }px;
                            border-radius: 4px;
                            z-index: 99;
                        }

                        .${ this.widgetID }_box .error{
                            color: #ff0000;
                            font-size: 13px;
                            position: absolute; bottom: -37px; left: 16px;
                        }


                    `}
                </style>
            </div>
        );
    }
}

exports.types = types;
exports.widget = Widget;