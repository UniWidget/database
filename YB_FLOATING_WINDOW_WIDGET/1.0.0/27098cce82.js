const types = {
    type: 'YB_FLOATING_WINDOW_WIDGET',
    icon: 'https://static.codemao.cn/appcraft/extension-widgets/production/floating-window.svg',
    title: '内置悬浮窗',
    version: '1.0.0',
    platforms: ['web', 'android'],
    isInvisibleWidget: false,
    isGlobalWidget: true,
    properties: [
        {
            key: 'content',
            label: '显示内容',
            valueType: 'string',
            defaultValue: '点击',
            editorType: 'TextInput'
        },
        {
            key: 'position',
            label: '位置模式',
            valueType: 'string',
            defaultValue: 'bottom-right',
            dropdown: [
                { label: '左上', value: 'top-left' },
                { label: '右上', value: 'top-right' },
                { label: '左下', value: 'bottom-left' },
                { label: '右下', value: 'bottom-right' }
            ]
        },
        {
            key: 'bgColor',
            label: '背景颜色',
            valueType: 'color',
            defaultValue: '#1495ef'
        },
        {
            key: 'textColor',
            label: '文字颜色',
            valueType: 'color',
            defaultValue: '#ffffff'
        },
        { 
            key: '_size', 
            label: '尺寸',
            valueType: 'number',
            defaultValue: 60,
            blockOptions: { generateBlock: false }
        },
        {
            key: '_opacity',
            label: '透明度',
            valueType: 'number',
            defaultValue: 100,
            validators: { 
                greaterThan: 0, 
                lessThan: 100 
            }
        }
    ],
    methods: [
        {
            key: 'show',
            label: '显示悬浮窗',
            params: [],
            blockOptions: { 
                color: '#FFBB55',
                icon: 'https://static.codemao.cn/appcraft/extension-widgets/production/eye.svg'
            }
        },
        {
            key: 'hide',
            label: '隐藏悬浮窗',
            params: [],
            blockOptions: { 
                color: '#FF5555',
                icon: 'https://static.codemao.cn/appcraft/extension-widgets/production/eye-off.svg'
            }
        }
    ],
    events: [
        {
            key: 'onClick',
            label: '被点击',
            params: [
                { key: 'timestamp', label: '点击时间', valueType: 'number' }
            ]
        }
    ]
};

class YBFloatingWindow extends VisibleWidget {
    constructor(props) {
        super(props);
        // 确保内容为字符串，避免对象类型
        this.content = typeof props.content === 'string' ? props.content : '点击';
        this.position = props.position;
        this.bgColor = props.bgColor;
        this.textColor = props.textColor;
        this.size = props._size;
        this.opacity = props._opacity;
        this.isVisible = true;
        
        // 绑定事件处理
        this.handleClick = this.handleClick.bind(this);
    }
    
    // 显示悬浮窗
    show = () => {
        this.setProps({ _visible: true });
        this.isVisible = true;
    }
    
    // 隐藏悬浮窗
    hide = () => {
        this.setProps({ _visible: false });
        this.isVisible = false;
    }
    
    // 点击事件处理
    handleClick = () => {
        if (this.isVisible) {
            this.emit('onClick', Date.now());
        }
    }
    
    // 渲染悬浮窗
    render() {
        const positionStyles = {
            'top-left': { top: 20, left: 20 },
            'top-right': { top: 20, right: 20 },
            'bottom-left': { bottom: 20, left: 20 },
            'bottom-right': { bottom: 20, right: 20 }
        };
        
        const style = {
            position: 'fixed',
            ...positionStyles[this.position],
            width: `${this.size}px`,
            height: `${this.size}px`,
            borderRadius: '50%',
            backgroundColor: this.bgColor,
            color: this.textColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            opacity: this.opacity / 100,
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            zIndex: 9999,
            transition: 'all 0.3s ease'
        };
        
        return (
            <div 
                style={style}
                onClick={this.handleClick}
            >
                {/* 修复：防止渲染对象类型的内容 */}
                {typeof this.content === 'string' 
                    ? this.content 
                    : JSON.stringify(this.content)}
            </div>
        );
    }
}

exports.types = types;
exports.widget = YBFloatingWindow;
