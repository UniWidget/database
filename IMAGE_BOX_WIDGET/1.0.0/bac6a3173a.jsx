const types = {
    isInvisibleWidget: false,
    type: "IMAGE_BOX_WIDGET",
    icon: "https://static.codemao.cn/flowchunkflex/BkQa7_Texe.png?hash=FmKVy6MWtW_0E-p_VplEbdMMfr0D",
    title: "图片框1.0",
    version: "1.0.0",
    isGlobalWidget: false,
    properties: [
        {
            key: '__width',
            label: '宽度',
            valueType: 'number',
            defaultValue: 200,
            blockOptions: { generateBlock: false }
        },
        {
            key: '__height',
            label: '高度',
            valueType: 'number',
            defaultValue: 150,
            blockOptions: { generateBlock: false }
        },
        {
            key: 'imageSrc',
            label: '图片源',
            valueType: 'string',
            defaultValue: '',
            tooltip: '输入图片URL或素材库文件名',
            blockOptions: { 
                setter: { keys: ['imageSrc'] }, 
                getter: { keys: ['imageSrc'] } 
            }
        },
        {
            key: 'objectFit',
            label: '填充模式',
            valueType: 'string',
            defaultValue: 'fill',
            dropdown: [
                { label: '拉伸', value: 'fill' },
                { label: '剪裁', value: 'cover' },
                { label: '全显', value: 'contain' },
                { label: '原始尺寸', value: 'none' }
            ],
            tooltip: '拉伸：强制填充容器 | 剪裁：等比裁剪填充 | 全显：等比完整显示 | 原始：不缩放'
        },
        {
            key: 'borderRadius',
            label: '圆角半径',
            valueType: 'number',
            defaultValue: 0,
            tooltip: '设置图片圆角半径(单位:px)',
            blockOptions: {
                generateBlock: true,
                color: '#FFA500',
                setter: {
                    keys: ['borderRadius'],
                    label: '设置圆角半径为',
                    labelAfter: 'px'
                },
                getter: {
                    keys: ['borderRadius'],
                    label: '当前圆角半径'
                }
            }
        },
        {
            key: 'backgroundColor',
            label: '背景颜色',
            valueType: 'color',
            defaultValue: '#f0f0f0',
            tooltip: '设置图片容器的背景颜色',
            blockOptions: {
                generateBlock: true,
                color: '#00BCD4',
                setter: {
                    keys: ['backgroundColor'],
                    label: '设置背景颜色为'
                },
                getter: {
                    keys: ['backgroundColor'],
                    label: '当前背景颜色'
                }
            }
        },
        {
            key: 'borderWidth',
            label: '边框宽度',
            valueType: 'number',
            defaultValue: 0,
            tooltip: '设置边框宽度（单位：px）',
            blockOptions: {
                generateBlock: true,
                color: '#4CAF50',
                setter: {
                    keys: ['borderWidth'],
                    label: '设置边框宽度为',
                    labelAfter: 'px'
                },
                getter: {
                    keys: ['borderWidth'],
                    label: '当前边框宽度'
                }
            }
        },
        {
            key: 'borderColor',
            label: '边框颜色',
            valueType: 'color',
            defaultValue: '#000000',
            tooltip: '设置边框颜色',
            blockOptions: {
                generateBlock: true,
                color: '#9C27B0',
                setter: {
                    keys: ['borderColor'],
                    label: '设置边框颜色为'
                },
                getter: {
                    keys: ['borderColor'],
                    label: '当前边框颜色'
                }
            }
        },
        {
            key: 'borderStyle',
            label: '边框样式',
            valueType: 'string',
            defaultValue: 'solid',
            dropdown: [
                { label: '实线', value: 'solid' },
                { label: '虚线', value: 'dashed' },
                { label: '点线', value: 'dotted' }
            ],
            tooltip: '选择边框样式',
            blockOptions: {
                generateBlock: true,
                color: '#FF5722',
                setter: {
                    keys: ['borderStyle'],
                    label: '设置边框样式为'
                },
                getter: {
                    keys: ['borderStyle'],
                    label: '当前边框样式'
                }
            }
        },
        {
            key: 'rotation',
            label: '旋转角度',
            valueType: 'number',
            defaultValue: 0,
            tooltip: '设置图片旋转角度（单位：度）',
            blockOptions: {
                generateBlock: true,
                color: '#2196F3',
                setter: {
                    keys: ['rotation'],
                    label: '设置旋转角度为',
                    labelAfter: '度'
                },
                getter: {
                    keys: ['rotation'],
                    label: '当前旋转角度'
                }
            }
        },
        {
            key: 'scale',
            label: '缩放比例',
            valueType: 'number',
            defaultValue: 1,
            tooltip: '设置图片缩放比例（1=原始大小）',
            blockOptions: {
                generateBlock: true,
                color: '#9C27B0',
                setter: {
                    keys: ['scale'],
                    label: '设置缩放比例为'
                },
                getter: {
                    keys: ['scale'],
                    label: '当前缩放比例'
                }
            }
        },
        {
            key: 'blurRadius',
            label: '模糊半径',
            valueType: 'number',
            defaultValue: 0,
            tooltip: '设置图片模糊效果（单位：px）',
            blockOptions: {
                generateBlock: true,
                color: '#607D8B',
                setter: {
                    keys: ['blurRadius'],
                    label: '设置模糊半径为',
                    labelAfter: 'px'
                },
                getter: {
                    keys: ['blurRadius'],
                    label: '当前模糊半径'
                }
            }
        }
    ],
    methods: [],
    events: [
        {
            key: 'onImageError',
            label: '当图片加载失败时',
            params: [
                {
                    key: 'errorMsg',
                    label: '错误信息',
                    valueType: 'string'
                }
            ]
        },
        {
            key: 'onClick',
            label: '当被点击时',
            params: [
                {
                    key: 'position',
                    label: '点击位置',
                    valueType: 'object',
                    defaultValue: { x: 0, y: 0 }
                }
            ]
        }
    ],
};

class Widget extends VisibleWidget {
    constructor(props) {
        super(props);
        this.__width = props.__width;
        this.__height = props.__height;
        this.imageSrc = props.imageSrc;
        this.objectFit = props.objectFit;
        this.borderRadius = props.borderRadius;
        this.backgroundColor = props.backgroundColor;
        this.borderWidth = props.borderWidth;
        this.borderColor = props.borderColor;
        this.borderStyle = props.borderStyle;
        this.rotation = props.rotation;
        this.scale = props.scale;
        this.blurRadius = props.blurRadius;
    }

    getImageUrl = () => {
        if (this.imageSrc && !this.imageSrc.startsWith('http')) {
            const utils = require('utils');
            return utils.getWidgetImageUrl(this.imageSrc);
        }
        return this.imageSrc;
    }

    handleClick = (e) => {
        const rect = e.target.getBoundingClientRect();
        this.emit('onClick', { 
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    }

    handleError = (e) => {
        e.target.src = 'error-image.png';
        this.emit('onImageError', '图片加载失败');
    }

    render() {
        return React.createElement('img', {
            src: this.getImageUrl() || 'placeholder.png',
            style: {
                width: '100%',
                height: '100%',
                objectFit: this.objectFit,
                borderRadius: `${this.borderRadius}px`,
                backgroundColor: this.backgroundColor,
                overflow: 'hidden',
                border: `${this.borderWidth}px ${this.borderStyle} ${this.borderColor}`,
                transform: `rotate(${this.rotation}deg) scale(${this.scale})`,
                transformOrigin: 'center',
                filter: `blur(${this.blurRadius}px)`,
                WebkitFilter: `blur(${this.blurRadius}px)` 
            },
            onClick: this.handleClick,
            onError: this.handleError
        });
    }
}

exports.types = types;
exports.widget = Widget;