const types = {
    type: 'MAKEYOUIMMORTAL_CIRCLE_WIDGET',
    icon: 'https://static.codemao.cn/appcraft/extension-widgets/production/blink-button.svg',
    title: '我修你仙人_球球',
    isInvisibleWidget: false,
    isGlobalWidget: false,
    properties: [
        {
            key: '__width', // 内置属性
            label: '宽度',
            valueType: 'number', // 数字类型
            defaultValue: 100,
        },
        {
            key: '__height', // 内置属性
            label: '高度',
            valueType: 'number', // 数字类型
            defaultValue: 100,
        },
        {
            key: 'content',
            label: '文字',
            valueType: 'string', // 字符串类型
            defaultValue: '',
        },
        {
            key: 'fontSize',
            label: '文字大小',
            valueType: 'number',
            defaultValue: 40,
        },
        {
            key: 'disabled',
            label: '禁用',
            valueType: 'boolean', // 布尔类型
            defaultValue: false,
        },
        {
            key: 'backgroundColor',
            label: '背景颜色',
            valueType: 'color', // 颜色类型
            defaultValue: '#ffffff',
        },
        {
            key: 'borderColor',
            label: '边框颜色',
            valueType: 'color', // 颜色类型
            defaultValue: '#000000',
        },
        {
            key: 'color',
            label: '文字颜色',
            valueType: 'color', // 颜色类型
            defaultValue: '#000000',
        }
    ],
    methods: [],
    events: [
        {
            key: 'onClick',
            label: '被点击',
            params: []
        }
    ]
};


class Widget extends VisibleWidget {
    // 初始化
    constructor(props) {
        super(props)
        this.content = props.content
        this.fontSize = props.fontSize
        this.disabled = props.disabled
        this.backgroundColor = props.backgroundColor
        this.borderColor = props.borderColor
        this.color = props.color

    }


    // 方法定义，用于事件处理
    onClick = () => {
        this.emit('onClick')
    };

    // 渲染函数
    render() {
        return (
            <div
                onClick={this.onClick}
                disabled={this.disabled}
                style={{
                    background: this.disabled ? '#ccc' : this.backgroundColor,
                    width: '100%',
                    height: '100%',
                    fontSize: this.fontSize,
                    color: this.color,
                    borderRadius: '100%',
                    borderStyle: 'solid',
                    borderWidth: 'medium',
                    borderColor: this.borderColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                {this.content}
            </div>
        )
    }
}

exports.types = types
exports.widget = Widget