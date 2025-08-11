const types = {
    title: "加载条",
    type: "LOADER_WIDGET_29",
    icon: "icon-widget-time-picker",
    version: "1.0.0",
    isGlobalWidget: false,
    isInvisibleWidget: false,
    properties: [
        {
            key: '__width',
            label: '宽度',
            valueType: 'number',
            defaultValue: 60,
            blockOptions: {
                generateBlock: false,
            },
        },
        {
            key: '__height',
            label: '高度',
            valueType: 'number',
            defaultValue: 60,
            blockOptions: {
                generateBlock: false,
            },
        },
        {
            key: 'style',
            label: '加载条样式',
            valueType: 'string',
            dropdown: [
                { label: '圆环', value: 'loaderIcon_1' },
                { label: '线条', value: 'loaderIcon_2' },
            ],
            defaultValue: "loaderIcon_1",
        },
        {
            key: 'loaderColor',
            label: '前景颜色',
            valueType: 'color',
            defaultValue: "#3281FE",
        },
        {
            key: 'loaderbgColor',
            label: '背景颜色',
            valueType: 'color',
            defaultValue: "#E6E6EA",
        },
        {
            key: 'iconHeight',
            label: '高度',
            valueType: 'number',
            defaultValue: "4",
        },
        {
            key: 'speedTime',
            label: '动画速度(秒)',
            valueType: 'string',
            defaultValue: "1",
        },
    ],
    methods: [],
    events: [],
};

class Widget extends VisibleWidget {
    constructor(props) {
        super(props);
        this.__width = props.__width;
        this.__height = props.__height;
        this.style = props.style;
        this.loaderColor = props.loaderColor;
        this.loaderbgColor = props.loaderbgColor;
        this.iconHeight = props.iconHeight;
        this.speedTime = props.speedTime;
    }

    render() {
        return (
            <div style={{ width: "100%", height: "100%" }}>
                <div class="loaderIcon_1" style={{ display: this.style === "loaderIcon_1" ? "block" : "none", width: "100%", height: "100%" }}></div>
                <div class="loaderIcon_2" style={{ display: this.style === "loaderIcon_2" ? "block" : "none", width: "100%", height: "100%" }}></div>

                <style>
                    {`
                        .loaderIcon_1{
                            border: ${this.iconHeight + "px"} solid ${this.loaderbgColor};
                            border-radius: 50%;
                        }
                        .loaderIcon_1::before {
                            content: "";
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            border-radius: 50%;
                            border: ${this.iconHeight + "px"} solid ${this.loaderColor};
                            border-left-color: transparent;
                            animation: loaderIcon_1 ${this.speedTime}s linear infinite;
                        }
                        
                        @keyframes loaderIcon_1 {
                            0% {
                                transform: rotate(0deg);
                            }
                            100% {
                                transform: rotate(360deg);
                            }
                        }
                        

                        .loaderIcon_2 {
                            height: ${this.iconHeight + "px"} !important;
                            border-radius: 30px;
                            background-color: ${this.loaderbgColor};
                            position: relative;
                        }
                        
                        .loaderIcon_2::before {
                            content: "";
                            position: absolute;
                            background: ${this.loaderColor};
                            top: 0;
                            left: 0;
                            width: 0%;
                            height: 100%;
                            border-radius: 30px;
                            animation: loaderIcon_2 ${this.speedTime}s ease-in-out infinite;
                        }
                        
                        @keyframes loaderIcon_2 {
                            50% {
                                width: 100%;
                            }                            
                            100% {
                                width: 0;
                                right: 0;
                                left: unset;
                            }
                        }
                    `}
                </style>
            </div>
        );
    }
}

exports.types = types;
exports.widget = Widget;