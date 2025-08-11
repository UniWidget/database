/**
 * @author: 垃圾桶
 * 来自 CoCo 自定义控件开发
 */

const types = {
    type: 'QII_INPUT_WIDGETKFDZ', // 控件类型，全局唯一
    title: '输入框-客服定制', // 控件的显示名称
    icon: 'https://static.bcmcdn.com/coco/player/unstable/rk6YJwFUyl.image/png?hash=FjaT4LZ50ogtCNI3qd0zPp5l8OQb', // 控件图标
    isInvisibleWidget: false, // 是否不可见控件，可见控件为 false
    isGlobalWidget: false, // 是否全局控件
    hasAnyWidget: true, // 是否包含其他控件
    properties: [
        {
            key: '__height',
            label: '高度',
            valueType: 'number',
            defaultValue: 40, // 默认高度
        },
        {
            key: 'disabled',
            label: '禁用',
            valueType: 'boolean',
            defaultValue: false,
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
            defaultValue: '请输入..',
        },
        {
            key: 'inputType',
            label: '类型',
            valueType: 'string',
            defaultValue: 'text',
            dropdown: [
                { label: '文本', value: 'text' },
                { label: '数字', value: 'number' },
                { label: '邮箱', value: 'email' },
                { label: '密码', value: 'password' },
            ],
        },
        {
            key: 'maxLength',
            label: '最大输入长度',
            unit: '字符',
            valueType: 'number',
            defaultValue: 200,
        },
        {
            key: 'inputRadius',
            label: '圆角大小',
            unit: '像素',
            valueType: 'number',
            defaultValue: 8,
        },
        {
            key: 'fontSize',
            label: '文字大小',
            unit: '像素',
            valueType: 'number',
            defaultValue: 14,
        },
        {
            key: 'padding',
            label: '左右边距',
            unit: '像素',
            valueType: 'number',
            defaultValue: 16,
        },
        {
            key: 'inputColor',
            label: '背景颜色',
            valueType: 'color',
            defaultValue: '#F0F1F3',
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
            key: 'disabledColor',
            label: '禁用状态文本颜色',
            valueType: 'color',
            defaultValue: '#A6A6A6',
        },
        {
            key: 'disabledInputColor',
            label: '禁用状态背景颜色',
            valueType: 'color',
            defaultValue: '#DFE0E2',
        },
        {
            key: 'borderWidth',
            label: '边框粗细',
            valueType: 'number',
            defaultValue: 0,
            unit: '像素',
        },
        {
            key: 'borderColor',
            label: '边框颜色',
            valueType: 'color',
            defaultValue: '#1E90FF',
        },
        {
            key: 'iconCode',
            label: '图标代码（SVG代码）',
            valueType: 'string',
            editorType: 'TextArea',
            defaultValue: 'M10.5 2a8.5 8.5 0 1 0 5.262 15.176l3.652 3.652a1 1 0 0 0 1.414-1.414l-3.652-3.652A8.5 8.5 0 0 0 10.5 2M4 10.5a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0',
        },
        {
            key: 'iconSize',
            label: '图标大小',
            valueType: 'number',
            defaultValue: 20,
            unit: '像素',
        },
        {
            key: 'iconViewBox',
            label: '图标区域（viewBox）',
            valueType: 'string',
            defaultValue: '0 0 24 24',
        },
    ],
    events: [
        {
            key: 'onChange',
            label: '文本改变',
            params: [
                { key: 'value', label: '文本内容', valueType: 'string' }
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
    methods: [
        {
            key: 'getWidgetId',
            label: '获取控件 ID',
            valueType: 'string',
            params: [],
            blockOptions: { color: '#F4AE3B', callMethodLabel: false },
        },
    ],
};

class InputWidget extends VisibleWidget {
    constructor(props) {
        super(props);
        Object.assign(this, props);
    }

    onChange = (e) => {
        let newValue = e.target.value.slice(0, this.maxLength);
        this.setProps({ inputValue: newValue });
        this.emit('onChange', newValue);
    };

    iconElement(iconCode, size, color, iconViewBox = "0 0 24 24") {
        return (
            <svg className="qii-icon" width={size} height={size} viewBox={iconViewBox}>
                <path d={iconCode} fill={color}></path>
            </svg>
        );
    }

    render() {
        return (
            <div
                className={`Qii_Input_Widget_${this.__widgetId}`}
                style={{
                    position: 'fixed', // 固定定位
                    bottom: '17px', // 距离底部 17 像素
                    left: '17px', // 距离左侧 17 像素
                    right: '70px', // 距离右侧 70 像素
                    height: `${this.__height}px`,
                    display: 'flex',
                    alignItems: 'center',
                    padding: `0 ${this.padding}px`,
                    background: `${this.disabled ? this.disabledInputColor : this.inputColor}`,
                    borderRadius: `${this.inputRadius}px`,
                    border: `${this.borderWidth}px solid ${this.borderColor}`,
                    transition: '0.1s',
                }}
            >
                {this.iconCode && this.iconElement(this.iconCode, this.iconSize, this.disabled ? this.disabledColor : this.placeColor, this.iconViewBox)}

                <input
                    type={this.inputType}
                    value={this.inputValue}
                    placeholder={this.placeholder}
                    maxLength={this.maxLength}
                    disabled={this.disabled}
                    onChange={this.onChange}
                    onClick={() => this.emit('onClick')}
                    onFocus={() => this.emit('onFocus')}
                    onBlur={() => this.emit('onBlur')}
                    style={{
                        width: '100%', // 输入框宽度占满容器
                        height: '100%',
                        border: 'none',
                        outline: 'none',
                        background: 'transparent',
                        color: `${this.disabled ? this.disabledColor : this.valueColor}`,
                        fontSize: `${this.fontSize}px`,
                    }}
                />
            </div>
        );
    }

    getWidgetId() {
        return this.__widgetId;
    }
}

exports.types = types;
exports.widget = InputWidget;
