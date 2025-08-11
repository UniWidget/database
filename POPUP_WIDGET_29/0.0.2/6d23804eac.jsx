const types = {
    isInvisibleWidget: false,
    isGlobalWidget: false,
    title: "底部弹窗",
    icon: "icon-dialog",
    type: "POPUP_WIDGET_29",
    version: "0.0.2",
    properties: [
        {
            key: '__width',
            label: '宽度',
            valueType: 'number',
            defaultValue: 360,
            blockOptions: {
                generateBlock: false,
            },
        },
        {
            key: '__height',
            label: '高度',
            valueType: 'number',
            defaultValue: 640,
            blockOptions: {
                generateBlock: false,
            },
        },
        {
            key: 'ThemeColor',
            label: '主题颜色',
            valueType: 'color',
            defaultValue: '#2699FF',
            blockOptions: {
                generateBlock: false,
            },
        },
        {
            key: 'display',
            label: '预览弹窗',
            valueType: 'boolean',
            defaultValue: true,
            blockOptions: {
                generateBlock: false,
            },
        },
        {
            key: 'topTitle',
            label: '弹窗标题',
            valueType: 'string',
            defaultValue: '请选择项目',
        },
        {
            key: 'data',
            label: '选项列表',
            valueType: ["string", "array"],
            defaultValue: [],
        },
        {
            key: 'rightIcon',
            label: '右侧图标',
            valueType: 'string',
            dropdown: [
                { label: '箭头', value: '箭头' },
                { label: '对号', value: '对号' },
            ],
            defaultValue: "箭头",
            blockOptions: {
                generateBlock: false,
            },
        },
        {
            key: 'itemHieght',
            label: '选项高度',
            valueType: 'number',
            defaultValue: 75,
            blockOptions: {
                generateBlock: false,
            },
        },
        {
            key: 'imgSize',
            label: '图片大小',
            valueType: 'number',
            defaultValue: 38,
            blockOptions: {
                generateBlock: false,
            },
        },
        {
            key: 'itemText',
            label: '选项文本',
            valueType: 'boolean',
            defaultValue: true,
            blockOptions: {
                generateBlock: false,
            },
        },
        {
            key: 'imgDisplay',
            label: '左侧图片',
            valueType: 'boolean',
            defaultValue: true,
            blockOptions: {
                generateBlock: false,
            },
        },
        {
            key: 'textCenter',
            label: '文本居中',
            valueType: 'boolean',
            defaultValue: false,
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
    ],
    methods: [
        {
            key: 'NewData',
            label: '新选项',
            valueType: 'string',
            params: [
                {
                    key: 'img',
                    label: '图片',
                    valueType: 'string',
                    defaultValue: '',
                },
                {
                    key: 'title',
                    label: '标题',
                    valueType: 'string',
                    defaultValue: '',
                },
                {
                    key: 'text',
                    label: '文本',
                    valueType: 'string',
                    defaultValue: '',
                }
            ],
            blockOptions: {
                color: '#72BFFF',
                callMethodLabel: false,
                space: 16,
                line: "添加选项",
            },
        },
        {
            key: 'AddData',
            label: '添加',
            params: [
                {
                    key: "data",
                    label: '选项',
                    valueType: ["string", "array"],
                    defaultValue: [],
                },
            ],
            blockOptions: {
                color: '#2699FF',
                line: "弹窗功能",
            },
        },
        {
            key: 'optItem',
            label: '显示对号',
            params: [
                {
                    key: "opt",
                    label: '选项',
                    valueType: 'number',
                    defaultValue: 1,
                },
            ],
            blockOptions: {
                color: '#2699FF',
            },
        },
        {
            key: 'removeItem',
            label: '清空选项',
            params: [],
            blockOptions: {
                color: '#2699FF',
            },
        },
        {
            key: 'showPOPUP',
            label: '显示弹窗',
            params: [
                {
                    key: 'title',
                    label: '标题',
                    valueType: 'string',
                    defaultValue: '',
                },
                {
                    key: 'text',
                    label: '选项文本',
                    valueType: 'boolean',
                    defaultValue: true,
                },
                {
                    key: 'icon',
                    label: '右侧图标',
                    valueType: 'string',
                    dropdown: [
                        { label: '箭头', value: '箭头' },
                        { label: '对号', value: '对号' },
                    ],
                    defaultValue: '箭头',
                },
            ],
            blockOptions: {
                color: '#2699FF',
                line: "显示弹窗",
            },
        },
    ],
    events: [
        {
            key: 'itemClick',
            label: '完成选择',
            params: [
                {
                    key: 'img',
                    label: '图片',
                    valueType: 'string',
                },
                {
                    key: 'title',
                    label: '标题',
                    valueType: 'string',
                },
                {
                    key: 'text',
                    label: '文本',
                    valueType: 'string',
                },
                {
                    key: 'num',
                    label: '序号',
                    valueType: 'number',
                },
            ],
        },
        {
            key: 'shadeClick',
            label: '遮罩点击',
            params: [],
        },
    ],
};


class Widget extends VisibleWidget {
    constructor(props) {
        super(props);
        this.__width = props.__width;
        this.__height = props.__height;

        this.ThemeColor = props.ThemeColor;
        this.display = props.display;

        this.topTitle = props.topTitle;
        this.itemText = props.itemText;

        this.rightIcon = props.rightIcon;
        this.itemHieght = props.itemHieght;
        this.imgSize = props.imgSize;

        this.imgDisplay = props.imgDisplay;
        this.textCenter = props.textCenter;
        this.iconIndex = 0;

        this.icon_1 = "M762.026667 462.506667a64 64 0 0 1 5.717333 83.882666l-5.717333 6.570667-422.4 422.4a64 64 0 0 1-96.256-83.968l5.717333-6.570667 377.173333-377.173333L249.088 130.56A64 64 0 0 1 243.370667 46.592L249.173333 40.106667a64 64 0 0 1 83.968-5.717334L339.626667 40.106667l422.4 422.4z";
        this.icon_2 = "M380.343 801.646a53.394 53.394 0 0 1-36.572-16.092L125.44 568.32a55.589 55.589 0 0 1 0-77.166 54.126 54.126 0 0 1 76.8 0l178.103 179.2L835.29 272.091a53.394 53.394 0 0 1 76.435 0 54.126 54.126 0 0 1 0 76.8L418.743 785.554a54.491 54.491 0 0 1-38.4 16.092z";

        this.data = this.parse_JSON(props.data);
    }

    // 解析列表
    parse_JSON = (data) => {
        try {
            return JSON.parse(data);
        } catch (SyntaxError) {
            return [];
        }
    }

    // 添加新选项调用
    AddData = (d) => {
        this.data.push(d);
        this.setProps({
            data: this.data,
        });
    }

    // 返回选项JSON
    NewData = (img, title, text) => {
        return ({
            "图片": img,
            "标题": title,
            "文本": text
        });
    }

    // 显示对号调用函数
    optItem = (index) => {
        this.setProps({
            iconIndex: index - 1,
        });
    }
    // 清空选项列表
    removeItem = () => {
        this.setProps({
            data: [],
        });
    }

    // 调用弹窗进行显示
    showPOPUP = (title, text, icon) => {
        this.setProps({
            display: true,
            topTitle: title,
            itemText: text,
            rightIcon: icon,
        });
    }

    // 选项被点击时执行
    itemClick = (img, title, text, index) => {
        this.setProps({
            iconIndex: index,
            display: false,
        });
        this.emit('itemClick', img, title, text, index + 1);
    }

    // 遮罩被点击时执行
    shadeClick = () => {
        this.setProps({
            display: false,
        });
        this.emit('shadeClick');
    }

    render() {
        return (
            <div class="popup_widget_29">
                <div class="popup_box">
                    <div class="shade" onClick={this.shadeClick}></div>
                    <div class="topLine" onClick={this.shadeClick}></div>
                    <p class="topTitle">{this.topTitle}</p>
                    <div class="itemBox">
                        {
                            this.data.map((item, index) => {
                                return (
                                    <div class="OneItem" onClick={() => this.itemClick(item['图片'], item['标题'], item['文本'], index)}>
                                        <img class="itemImg" src={item['图片']} />
                                        <div class="rightText">
                                            <p class="itemTitle">{item['标题']}</p>
                                            <p class="itemText">{item['文本']}</p>
                                        </div>
                                        <svg
                                            class="itemRightIcon"
                                            width={this.rightIcon === "箭头" ? "13" : "22"}
                                            height={this.rightIcon === "箭头" ? "13" : "22"}
                                            viewBox="0 0 1024 1024">
                                            <path
                                                fill={this.rightIcon === "箭头" ? "#00000030" : this.iconIndex === index ? this.ThemeColor : "#00000000"}
                                                d={this.rightIcon === "箭头" ? this.icon_1 : this.icon_2}>
                                            </path></svg>
                                        <div class="line"></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <style>
                    {`
                        .popup_widget_29{
                            width: 360px;
                            height: 100%;
                            display: flex;
                            align-items: flex-end;
                            animation: ${this.display === true ? "WIDGET_BG_On 0.4s cubic-bezier(.34,.48,.14,1) forwards" : "WIDGET_BG_Off 0.4s cubic-bezier(.34,.48,.14,1) forwards"};
                            overflow: hidden;
                        }
                        .popup_widget_29 .popup_box{
                            width: 360px;
                            padding: 16px;
                            background: #F4F4F4;
                            border-radius: 16px 16px 0px 0px;
                            animation: ${this.display === true ? "WIDGET_BOX_On 0.4s cubic-bezier(.34,.48,.14,1) forwards" : "WIDGET_BOX_Off 0.4s cubic-bezier(.34,.48,.14,1) forwards"};
                            position: relative;
                        }

                        .popup_widget_29 .popup_box .shade{
                            width: 360px;
                            height: 640px;
                            position: absolute;
                            top: -640px; left: 0px
                        }

                        .popup_widget_29 .topLine{
                            position: absolute;
                            top: 15px;
                            left: 50%;
                            transform: translateX(-50%);
                            width: 38px;
                            height: 5px;
                            border-radius: 50px;
                            background: #00000020;
                        }
                        .popup_widget_29 .topTitle{
                            margin-top: ${this.topTitle === "" ? "0" : "30"}px;
                            color: #000000;
                            font-size: 16px;
                            font-weight: bold;
                            letter-spacing: 0.8px;
                            text-indent: ${this.textCenter === true ? "0" : "2"}px;
                            white-space: nowrap;
                            text-align: ${this.textCenter === true ? "center" : "left"};
                            overflow: hidden;
                        }
                        
                        .popup_widget_29 .itemBox{
                            background: #FFFFFF;
                            border-radius: 10px;
                            max-height: 480px;
                            overflow: auto;
                        }
                        .popup_widget_29 .itemBox::-webkit-scrollbar{
                            display: none;
                        }
                        
                        .popup_widget_29 .OneItem{
                            height: ${this.itemHieght}px;
                            display: flex;
                            align-items: center;
                            justify-content: ${this.textCenter === true ? "center" : "flex-start"};
                            position: relative;
                        }
                        .popup_widget_29 .OneItem:active{
                            background: #00000015;
                        }
                        .popup_widget_29 .OneItem .line{
                            width: 90%;
                            height: 1px;
                            background: #00000008;
                            position: absolute;
                            bottom: 0px;
                            left: 50%;
                            transform: translateX(-50%);
                        }
                        .popup_widget_29 .itemBox .OneItem:last-child .line{
                            display: none;
                        }

                        .popup_widget_29 .itemRightIcon{
                            position: absolute;
                            right: ${this.rightIcon === "箭头" ? "16px" : "22px"};
                            top: 50%;
                            transform: translateY(-50%);
                        }

                        
                        .popup_widget_29 .itemImg{
                            width: ${this.imgSize}px;
                            height: $${this.imgSize}px;
                            margin-left: ${this.textCenter === true ? "0px" : "18px"};
                            border-radius: 50px;
                            object-fit: cover;
                            display: ${this.imgDisplay === true ? "block" : "none"}; 
                        }

                        .popup_widget_29 .rightText{
                            margin-left: ${this.textCenter === true && this.imgDisplay === false ? "0" : "18"}px;
                            overflow: hidden;
                        }
                        .popup_widget_29 .itemTitle{
                            margin: 0px;
                            color: #000000;
                            letter-spacing: 0.3px;
                            font-size: ${this.itemText ? "14px" : "15px"};
                            transform: ${this.itemText ? "translateY(2px)" : "translateY(1px)"};
                            white-space: nowrap;
                        }
                        .popup_widget_29 .itemText{
                            margin: 0px;
                            color: #00000040;
                            font-size: 12px;
                            letter-spacing: 0.3px;
                            transform: translateY(1px);
                            display: ${this.itemText ? "block" : "none"};
                            white-space: nowrap;
                        }

                        @keyframes WIDGET_BG_On{
                            0%{
                                background-color: rgba(0, 0, 0, 0.0);
                            }
                            100%{
                                background-color: rgba(0, 0, 0, 0.36);
                            }
                        }
                        @keyframes WIDGET_BG_Off{
                            0%{
                                background-color: rgba(0, 0, 0, 0.36);
                            }
                            100%{
                                background-color: rgba(0, 0, 0, 0.0);
                            }
                        }

                        @keyframes WIDGET_BOX_On{
                            0%{
                                transform: translateY(${(this.topTitle === "" ? 50 : 103) + this.itemHieght * this.data.length}px);
                            }
                            100%{
                                transform: translateY(0px);
                            }
                        }
                        @keyframes WIDGET_BOX_Off{
                            0%{
                                transform: translateY(0px);
                            }
                            100%{
                                transform: translateY(${(this.topTitle === "" ? 50 : 103) + this.itemHieght * this.data.length}px);
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