const types = {
    title: "对话框",
    type: "DIALOG_WIDGET_29",
    icon: "icon-dialog",
    version: "0.0.1",
    isGlobalWidget: false,
    isInvisibleWidget: false,
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
            key: 'Title',
            label: '标题',
            valueType: 'string',
            defaultValue: '弹窗标题',
            blockOptions: {
                generateBlock: false,
            },
        },
        {
            key: 'Text',
            label: '文本',
            valueType: 'string',
            defaultValue: '弹窗说明文本',
            blockOptions: {
                generateBlock: false,
            },
        },
        {
            key: 'image',
            label: '图片',
            valueType: 'string',
            defaultValue: '',
            blockOptions: {
                generateBlock: false,
            },
        },
        {
            key: 'items',
            label: '选项列表',
            valueType: 'string',
            defaultValue: '取消,确定',
            blockOptions: {
                generateBlock: false,
            },
        },
        {
            key: 'OnItem',
            label: '高亮选项',
            valueType: 'string',
            defaultValue: '确定',
            blockOptions: {
                generateBlock: false,
            },
        },
        {
            key: 'dialogStyle',
            label: '弹窗风格',
            valueType: 'string',
            dropdown: [
                { label: '线条样式', value: '线条' },
                { label: '矩形样式', value: '矩形' },
            ],
            defaultValue: '线条',
            blockOptions: {
                generateBlock: false,
            },
        },
        {
            key: 'itemStyle',
            label: '选项方向',
            valueType: 'string',
            dropdown: [
                { label: '横向排列', value: '横向' },
                { label: '纵向排列', value: '纵向' },
            ],
            defaultValue: '横向',
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
            key: 'openDialog',
            label: '弹出消息',
            params: [
                {
                    key: "title",
                    label: '标题为',
                    valueType: 'string',
                    defaultValue: "弹窗标题",
                },
                {
                    key: "text",
                    label: '文本为',
                    valueType: 'string',
                    defaultValue: "弹窗说明文本",
                },
                {
                    key: "image",
                    label: '图片为',
                    valueType: 'string',
                    defaultValue: "",
                },
                {
                    key: "items",
                    label: '选项列表',
                    valueType: 'string',
                    defaultValue: "取消,确定",
                },
                {
                    key: "OnItem",
                    label: '高亮选项',
                    valueType: 'string',
                    defaultValue: "确定",
                },
                {
                    key: 'dialogStyle',
                    label: '弹窗风格',
                    valueType: 'string',
                    dropdown: [
                        { label: '线条样式', value: '线条', },
                        { label: '矩形样式', value: '矩形', },
                    ],
                    defaultValue: '线条',
                },
                {
                    key: 'itemStyle',
                    label: '选项方向',
                    valueType: 'string',
                    dropdown: [
                        { label: '横向排列', value: '横向', },
                        { label: '纵向排列', value: '纵向', },
                    ],
                    defaultValue: '横向',
                },
                {
                    key: 'shade',
                    label: '遮罩关闭',
                    valueType: 'string',
                    dropdown: [
                        { label: '禁用', value: 'none', },
                        { label: '启用', value: 'block', },
                    ],
                    defaultValue: 'none',
                },
                {
                    key: "DialogID",
                    label: '对话框ID',
                    valueType: 'string',
                    defaultValue: "1",
                },
            ],
            blockOptions: {
                color: '#2077FF',
                inputsInline: false,
            },
        },
        {
            key: 'openDialogInput',
            label: '进行输入',
            params: [
                {
                    key: "title",
                    label: '标题为',
                    valueType: 'string',
                    defaultValue: "弹窗标题",
                },
                {
                    key: "text",
                    label: '文本为',
                    valueType: 'string',
                    defaultValue: "弹窗说明文本",
                },
                {
                    key: "placeholder",
                    label: '提示文案为',
                    valueType: 'string',
                    defaultValue: "请输入",
                },
                {
                    key: "inputValue",
                    label: '输入文案为',
                    valueType: 'string',
                    defaultValue: "",
                },
                {
                    key: "image",
                    label: '图片为',
                    valueType: 'string',
                    defaultValue: "",
                },
                {
                    key: 'dialogStyle',
                    label: '弹窗风格',
                    valueType: 'string',
                    dropdown: [
                        { label: '线条样式', value: '线条', },
                        { label: '矩形样式', value: '矩形', },
                    ],
                    defaultValue: '线条',
                },
                {
                    key: 'shade',
                    label: '遮罩关闭',
                    valueType: 'string',
                    dropdown: [
                        { label: '禁用', value: 'none', },
                        { label: '启用', value: 'block', },
                    ],
                    defaultValue: 'none',
                },
                {
                    key: 'cancel',
                    label: '取消按钮',
                    valueType: 'string',
                    dropdown: [
                        { label: '启用', value: 'yes', },
                        { label: '禁用', value: 'no', },
                    ],
                    defaultValue: 'yes',
                },
                {
                    key: "DialogID",
                    label: '对话框ID',
                    valueType: 'string',
                    defaultValue: "1",
                },
            ],
            blockOptions: {
                color: '#2077FF',
                inputsInline: false,
            },
        },
    ],
    events: [
        {
            key: 'itemClick',
            label: '选项被点击',
            params: [
                {
                    key: 'text',
                    label: '文本',
                    valueType: 'string',
                },
                {
                    key: 'index',
                    label: '序号',
                    valueType: 'string',
                },
                {
                    key: 'DialogID',
                    label: '对话框ID',
                    valueType: 'string',
                },
            ],
        },
        {
            key: 'inputYes',
            label: '完成输入',
            params: [
                {
                    key: 'Text',
                    label: '输入文案',
                    valueType: 'string',
                },
                {
                    key: 'DialogID',
                    label: '对话框ID',
                    valueType: 'string',
                },
            ],
        },
        {
            key: 'shadeClick',
            label: '遮罩被点击',
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
        this.dialogStyle = props.dialogStyle;
        this.itemStyle = props.itemStyle;

        this.Title = props.Title;
        this.Text = props.Text;
        this.image = props.image;

        this.items = props.items;
        this.OnItem = props.OnItem;

        this.placeholder = "";
        this.inputDisplay = "none";
        this.inputValue = "";
        this.inputValueText = "";
        this.shadeDisplay = "none";

        this.DialogID = "1";
    }

    // 调用对话框弹出消息
    openDialog = (title, text, image, items, OnItem, dialogStyle, itemStyle, shade, DialogID) => {
        this.setProps({
            display: true,
            Title: title,
            Text: text,
            image: image,
            items: items,
            OnItem: OnItem,
            dialogStyle: dialogStyle,
            itemStyle: itemStyle,
            DialogID: DialogID,
            inputDisplay: "none",
            shadeDisplay: shade,
        });
    }
    // 调用对话框进行输入
    openDialogInput = (title, text, placeholder, inputValue, image, dialogStyle, shade, cancel, DialogID) => {
        this.setProps({
            display: true,
            Title: title,
            Text: text,
            placeholder: placeholder,
            inputValue: inputValue,
            inputValueText: inputValue,
            image: image,
            items: cancel === "yes" ? "取消,确定" : "确定",
            OnItem: "确定",
            dialogStyle: dialogStyle,
            itemStyle: "横向",
            DialogID: DialogID,
            inputDisplay: "block",
            shadeDisplay: shade,
        });
    }

    // 对话框选项被点击时执行
    itemClick = (item, index) => {
        if (this.inputDisplay === "block" && item === "确定") {
            this.emit('inputYes', this.inputValue, this.DialogID);
            this.setProps({
                inputValue: "",
                inputValueText: "",
                display: false,
            });
        } else {
            this.setProps({
                display: false,
            });
            this.emit('itemClick', item, index + 1, this.DialogID);
        }
    };

    // 对话框遮罩被点击时执行
    shadeClick = () => {
        this.setProps({
            display: false,
        });
        this.emit('shadeClick');
    };

    // 当输入框内容改变时，更新文本
    inputOnChange = (e) => {
        let newValue = e.target.value;
        this.setProps({
            inputValue: newValue,
            inputValueText: newValue,
        });
    }

    render() {
        return (
            <div class="DIALOG_WIDGET_29">
                <div class="dialog_box">
                    <img src={this.image} />
                    <div class="Title">{this.Title}</div>
                    <div class="Text">{this.Text}</div>
                    <input type="text" value={this.inputValueText} onChange={this.inputOnChange} placeholder={this.placeholder} style={{ display: this.inputDisplay }} />
                    <div class="line"></div>
                    <div class="item_box">
                        {
                            this.items.split(',').map((item, index) => (
                                <div class="item" onClick={() => this.itemClick(item, index)} style={{ background: this.dialogStyle === "线条" ? "#FFFFFF" : this.OnItem === item ? this.ThemeColor : "#F6F6F6" }}>
                                    <p style={{ color: this.dialogStyle === "线条" ? this.OnItem === item ? this.ThemeColor : "#000000" : this.OnItem === item ? "#ffffff" : "#000000", fontWeight: this.dialogStyle === "线条" ? "bold" : "normal" }}>{item}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div class="shade1" onClick={this.shadeClick}></div>
                    <div class="shade2" onClick={this.shadeClick}></div>
                </div>

                <style>
                    {`
                        .DIALOG_WIDGET_29{
                            width: 360px;
                            height: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            animation: ${this.display === true ? "DIALOG_WIDGET_BG_On 0.4s cubic-bezier(.34,.48,.14,1) forwards" : "DIALOG_WIDGET_BG_Off 0.4s cubic-bezier(.34,.48,.14,1) forwards"};
                        }
                        .DIALOG_WIDGET_29 .dialog_box{
                            width: 290px;
                            padding: 18px 0px 0px 0px;
                            background: #FFFFFF;
                            border-radius: 10px;
                            animation: ${this.display === true ? "DIALOG_WIDGET_BOX_On 0.4s cubic-bezier(.34,.48,.14,1) forwards" : "DIALOG_WIDGET_BOX_Off 0.4s cubic-bezier(.34,.48,.14,1) forwards"};
                            position: relative;
                        }
                        
                        .DIALOG_WIDGET_29 .dialog_box > img{
                            width: 254px;
                            height: auto;
                            margin: 0px 18px 10px 18px;
                            border-radius: 8px;
                            object-fit: cover;
                            display: ${this.image === "" ? "none" : "block"};
                        }
                        .DIALOG_WIDGET_29 .dialog_box .Title{
                            height: 36px;
                            padding: 4px 24px 0px 24px;   
                            font-size: 17px;
                            font-weight: bold;
                            letter-spacing: 0.5px;
                            color: #000000;
                            text-align: center;
                        }
                        .DIALOG_WIDGET_29 .dialog_box .Text{
                            padding: 0px 24px;
                            font-size: 14px;
                            letter-spacing: 0.5px;
                            color: #000000;
                            text-align: center;
                            margin-bottom: 20px;
                        }
                        .DIALOG_WIDGET_29 .dialog_box > input{
                            width: 254px;
                            height: 43px;
                            margin: 0px 18px 20px 18px;
                            padding: 0px 14px;
                            color: #000000;
                            font-size: 14px;
                            letter-spacing: 0.5px;
                            border: none; outline: none;
                            border-radius: 8px;
                            background: #F6F6F6;
                        }
                        .DIALOG_WIDGET_29 .dialog_box > input::placeholder{
                            color: #00000040;
                            letter-spacing: 0.5px;
                        }
                        .DIALOG_WIDGET_29 .dialog_box .line{
                            width: 290px;
                            height: 1px;
                            background: #0000000A;
                            display: ${this.dialogStyle === "矩形" ? "none" : "block"};
                        }

                        .DIALOG_WIDGET_29 .dialog_box .item_box{
                            display: flex;
                            flex-direction: ${this.itemStyle === "横向" ? "row" : "column"};
                            gap: ${this.dialogStyle === "线条" ? "0px" : "10px"};
                            padding: 0px ${this.dialogStyle === "线条" ? "0px" : "18px"};
                            margin-bottom: ${this.dialogStyle === "线条" ? "0px" : "18px"};
                            border-radius: 0px 0px 10px 10px;
                            overflow: hidden;
                        }

                        .DIALOG_WIDGET_29 .dialog_box .item_box .item{
                            width: 100%;
                            height: ${this.dialogStyle === "线条" ? "50px" : "43px"};
                            line-height: ${this.dialogStyle === "线条" ? "48px" : "42.5px"};
                            font-size: ${this.dialogStyle === "线条" ? "15px" : "14px"};
                            text-align: center;
                            letter-spacing: 0.5px;
                            border-radius: ${this.dialogStyle === "线条" ? "0px" : "8px"};
                        }
                        .DIALOG_WIDGET_29 .dialog_box .item_box .item:active{
                            filter: brightness(0.92);
                        }
                        
                        .DIALOG_WIDGET_29 .dialog_box .shade1{
                            width: 360px;
                            height: 400px;
                            position: absolute;
                            top: -400px;
                            left: 50%;
                            transform: translateX(-50%);
                            display: ${this.shadeDisplay};
                        }
                        .DIALOG_WIDGET_29 .dialog_box .shade2{
                            width: 360px;
                            height: 400px;
                            position: absolute;
                            bottom: -400px;
                            left: 50%;
                            transform: translateX(-50%);
                            display: ${this.shadeDisplay};
                        }



                        @keyframes DIALOG_WIDGET_BG_On{
                            0%{
                                background-color: rgba(0, 0, 0, 0.0);
                            }
                            100%{
                                background-color: rgba(0, 0, 0, 0.36);
                            }
                        }
                        @keyframes DIALOG_WIDGET_BG_Off{
                            0%{
                                background-color: rgba(0, 0, 0, 0.36);
                            }
                            100%{
                                background-color: rgba(0, 0, 0, 0.0);
                            }
                        }

                        @keyframes DIALOG_WIDGET_BOX_On{
                            0%{
                                transform: scale(0.8);
                                opacity: 0;
                            }
                            100%{
                                transform: scale(1);
                                opacity: 1;
                            }
                        }
                        @keyframes DIALOG_WIDGET_BOX_Off{
                            0%{
                                transform: scale(1);
                                opacity: 1;
                            }
                            100%{
                                transform: scale(0.8);
                                opacity: 0;
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