/**
 * Copyright (c) 2023-2024 xiaohong2022
 */

// 一些常量
const auther = "小宏XeLa" // 作者
const version = "1.0.0" // 版本号
const qq = 3174251894 // 作者QQ
const icon = 'icon-toolbox-feature'; // 图标

var types = { // 自定义控件设置
    type: 'XH_CIRCULAR_PROGRESS_INDICATOR_WIDGET', // 控件编号
    icon: icon, // 控件图标
    title: '圆形进度指示器', // 控件名称
    platforms: ['android', 'ios', 'web'], // 控件可用范围
    version, // 控件版本
    auther, // 控件作者
    isInvisibleWidget: false, // 不是功能控件
    isGlobalWidget: false, // 不是全局控件
    properties: [ // 属性
        {
            key: '__width',
            label: '宽度',
            valueType: 'number',
            defaultValue: 120,
            blockOptions: {
                generateBlock: false,
            },
        },
        {
            key: '__height',
            label: '高度',
            valueType: 'number',
            defaultValue: 120,
            blockOptions: {
                generateBlock: false,
            },
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
        },
        {
            key: 'showlabel', // 属性变量名（该变量名设置后可以到控件函数代码里调用）
            label: '显示标签',  // 属性名
            valueType: 'boolean', // 属性类型
            defaultValue: true, // 默认值
        },
        {
            key: 'labelColor', // 属性变量名（该变量名设置后可以到控件函数代码里调用）
            label: '标签文本颜色',  // 属性名
            valueType: 'color', // 属性类型
            defaultValue: "#000", // 默认值
        },
        {
            key: 'labelsize', // 属性变量名（该变量名设置后可以到控件函数代码里调用）
            label: '标签文本大小',  // 属性名
            valueType: 'number', // 属性类型
            defaultValue: 12, // 默认值
            unit: '像素',
        },
        {
            key: 'name', // 属性变量名（该变量名设置后可以到控件函数代码里调用）
            label: '标签',  // 属性名
            valueType: 'string', // 属性类型
            defaultValue: `进度`, // 默认值
        },
        {
            key: 'showNV', // 属性变量名（该变量名设置后可以到控件函数代码里调用）
            label: '显示数值',  // 属性名
            valueType: 'boolean', // 属性类型
            defaultValue: true, // 默认值
        },
        {
            key: 'mark', // 属性变量名（该变量名设置后可以到控件函数代码里调用）
            label: '分数形式',  // 属性名
            valueType: 'boolean', // 属性类型
            defaultValue: true, // 默认值
        },
        {
            key: 'NVColor', // 属性变量名（该变量名设置后可以到控件函数代码里调用）
            label: '数值文本颜色',  // 属性名
            valueType: 'color', // 属性类型
            defaultValue: "#000", // 默认值
        },
        {
            key: 'NVsize', // 属性变量名（该变量名设置后可以到控件函数代码里调用）
            label: '数值文本大小',  // 属性名
            valueType: 'number', // 属性类型
            defaultValue: 25, // 默认值
            unit: '像素',
        },
        {
            key: 'spacing', // 属性变量名（该变量名设置后可以到控件函数代码里调用）
            label: '两文本之间间距',  // 属性名
            valueType: 'number', // 属性类型
            defaultValue: 3.2, // 默认值
            unit: '像素',
        },
        {
            key: 'now', // 属性变量名（该变量名设置后可以到控件函数代码里调用）
            label: '当前值',  // 属性名
            valueType: 'number', // 属性类型
            defaultValue: 0, // 默认值
        },
        {
            key: 'max', // 属性变量名（该变量名设置后可以到控件函数代码里调用）
            label: '最大值',  // 属性名
            valueType: 'number', // 属性类型
            defaultValue: 100, // 默认值
        },
        {
            key: 'thickness', // 属性变量名（该变量名设置后可以到控件函数代码里调用）
            label: '粗细',  // 属性名
            valueType: 'number', // 属性类型
            defaultValue: 6.5, // 默认值
            unit: '像素',
        },
        {
            key: 'NFOP_color', // 属性变量名（该变量名设置后可以到控件函数代码里调用）
            label: '未满进度颜色',  // 属性名
            valueType: 'color', // 属性类型
            defaultValue: "#aaa5", // 默认值
        },
        {
            key: 'FS_color', // 属性变量名（该变量名设置后可以到控件函数代码里调用）
            label: '已满进度颜色',  // 属性名
            valueType: 'color', // 属性类型
            defaultValue: "#1890ff", // 默认值
        },
        {
            key: 'animation', // 属性变量名（该变量名设置后可以到控件函数代码里调用）
            label: '动画时长',  // 属性名
            valueType: 'number', // 属性类型
            defaultValue: 0.6, // 默认值
            unit: '秒',
        },
    ],
    methods: [], // 方法
    events: [], // 事件
};

class Widget extends VisibleWidget { // 控件外观/函数代码
    // 构造器
    constructor(props) {
        super(props);
        this.showlabel = props.showlabel;
        this.labelColor = props.labelColor;
        this.labelsize = props.labelsize;
        this.name = props.name;
        this.showNV = props.showNV;
        this.NVColor = props.NVColor;
        this.NVsize = props.NVsize;
        this.now = props.now;
        this.max = props.max;
        this.mark = props.mark;
        this.NFOP_color = props.NFOP_color;
        this.FS_color = props.FS_color;
        this.thickness = props.thickness;
        this.spacing = props.spacing;
        this.animation = props.animation;
        this.widgetLog(`制作者：小宏XeLa`);
    };
    // 渲染函数
    render() {
        return (<>
            <svg
                viewBox="0 0 100 100"
                style={{
                    width: '100%',
                    height: '100%'
                }}
            >
                <path
                    d="M 50 50 m 0 -46 a 46 46 0 1 1 0 92 a 46 46 0 1 1 0 -92"
                    stroke={this.NFOP_color}
                    stroke-width={this.thickness}
                    fill="none"
                    style={{
                        strokeDasharray: "289.027, 289.027",
                        strokeDashoffset: "0px"
                    }}
                />
                <path
                    d="M 50 50 m 0 -46 a 46 46 0 1 1 0 92 a 46 46 0 1 1 0 -92"
                    stroke={this.FS_color}
                    fill="none"
                    stroke-linecap="round"
                    stroke-width={this.thickness}
                    style={{
                        opacity: this.now == 0 ? 0 : 1,
                        strokeDasharray: `${289.027 / this.max * this.now}, 289.027`,
                        strokeDashoffset: "0px",
                        transition: `stroke-dasharray ${this.animation}s ease 0s, stroke ${this.animation}s ease 0s, opacity ${this.animation}s ease 0s`
                    }}
                />
            </svg>
            <span style={{
                position: "absolute",
                top: "50%",
                left: 0,
                width: "100%",
                textAlign: "center",
                margin: 0,
                transform: "translateY(-50%)",
            }}>
                <div>
                    <span>
                        <div style={{
                            fontWeight: "bold",
                            color: this.NVColor,
                            fontSize: this.NVsize + 'px',
                            ...(this.showNV ? {} : { display: "none" })
                        }}>{this.mark ? `${this.now}/${this.max}` : this.now}</div>

                        <div style={{
                            ...(this.showNV ? {
                                marginTop: this.spacing + 'px'
                            } : {}),
                            color: this.labelColor,
                            fontSize: this.labelsize + 'px',
                            ...(this.showlabel ? {} : { display: "none" })
                        }}>{this.name}</div>
                    </span>
                </div>
            </span>
        </>)
    };
};

// 导出控件
exports.types = types;
exports.widget = Widget;