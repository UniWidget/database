/*!
 * Copyright (c) 2023 by xiaohong2022
 * https://www.mdui.org/docs/progress
 */
//一些变量
var icon = 'https://coco.codemao.cn/favicon.ico';//图标
var color = '#E76CEA';//积木颜色

var types = {//自定义控件设置
    type: 'XH_MDUI_PROGRESS_WEIGET',//控件类型
    icon: icon,//控件图标
    title: 'MDUI 线性进度指示器',//控件名称
    isInvisibleWidget: false,
    isGlobalWidget: false,
    properties: [
        {
            key: '__width',
            label: '宽度',
            valueType: 'number',
            defaultValue: 100,
            blockOptions: {
                generateBlock: false,
            },
        },
        {
            key: '__height',
            label: '高度',
            valueType: 'number',
            defaultValue: 4,
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
            key: 'mode',
            label: '模式',
            valueType: 'string',
            defaultValue: '1',
            dropdown: [
                { value: "1", label: "无进度" },
                { value: "2", label: "有进度" }
            ]
        },
        {
            key: 'width2',
            label: '进度',
            valueType: 'number',
            defaultValue: "0",
        },
        {
            key: 'color',
            label: '已完成颜色',
            valueType: 'color',
            defaultValue: "#3f51b5",
        },
        {
            key: 'color2',
            label: '未完成颜色',
            valueType: 'color',
            defaultValue: "rgba(63,81,181,.2)",
        },
        {
            key: 'r',
            label: '圆角',
            valueType: 'boolean',
            defaultValue: true,
        },
    ],
    methods: [],//方法
    events: [],//事件
};

class Widget extends VisibleWidget {//控件属性代码
    constructor(props) {//构造器
        super(props);
        this.__width = props.__width;
        this.__height = props.__height;
        this.mode = props.mode;
        this.color = props.color;
        this.color2 = props.color2;
        this.width2 = props.width2;
        this.r = props.r;
    };
    render() {//渲染函数
        return (React.createElement("div", {
            dangerouslySetInnerHTML: {
                __html: `
        <div>
            <style>
/*!
 * mdui 1.0.2 (https://mdui.org)
 * Copyright 2016-2021 zdhxiong
 * Licensed under MIT
 */

.mdui-progress {
    position: relative;
    display: block;
    width: 100%;
    height: 4px;
    overflow: hidden;
    background-color: rgba(63, 81, 181, .2);
    border-radius: 2px;
    border-radius: ${this.r ? this.__height : 0}px;
}

.mdui-progress-determinate {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: #3f51b5;
    -webkit-transition: width .3s linear;
    transition: width .3s linear;
    border-radius: ${this.r ? this.__height : 0}px;
}

.mdui-progress-indeterminate {
    background-color: #3f51b5
}

.mdui-progress-indeterminate::before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: inherit;
    -webkit-animation: mdui-progress-indeterminate 2s linear infinite;
    animation: mdui-progress-indeterminate 2s linear infinite;
    content: ' ';
    will-change: left, width;
    border-radius: ${this.r ? this.__height : 0}px;
}

.mdui-progress-indeterminate::after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: inherit;
    -webkit-animation: mdui-progress-indeterminate-short 2s linear infinite;
    animation: mdui-progress-indeterminate-short 2s linear infinite;
    content: ' ';
    will-change: left, width;
    border-radius: ${this.r ? this.__height : 0}px;
}

@-webkit-keyframes mdui-progress-indeterminate {
    0% {
        left: 0;
        width: 0
    }

    50% {
        left: 30%;
        width: 70%
    }

    75% {
        left: 100%;
        width: 0
    }
}

@keyframes mdui-progress-indeterminate {
    0% {
        left: 0;
        width: 0
    }

    50% {
        left: 30%;
        width: 70%
    }

    75% {
        left: 100%;
        width: 0
    }
}

@-webkit-keyframes mdui-progress-indeterminate-short {
    0% {
        left: 0;
        width: 0
    }

    50% {
        left: 0;
        width: 0
    }

    75% {
        left: 0;
        width: 25%
    }

    100% {
        left: 100%;
        width: 0
    }
}

@keyframes mdui-progress-indeterminate-short {
    0% {
        left: 0;
        width: 0
    }

    50% {
        left: 0;
        width: 0
    }

    75% {
        left: 0;
        width: 25%
    }

    100% {
        left: 100%;
        width: 0
    }
}

            </style>
            <div class="mdui-progress"
            style="
            background-color:${this.color2};
            width:${this.__width}px;
            height:${this.__height}px;
            "><div class="mdui-progress-${this.mode === '1' ? `indeterminate` : "determinate"}" style="
            ${this.mode === '2' ? `width:${this.width2}%` : ""};
            background-color:${this.color}
            "></div></div>
        </div>`}
        }, null));
    };
};

//导出控件
exports.types = types;
exports.widget = Widget;