
/*

控件制作：The琦琦
QQ：1794916518

测试版

*/

const types = {
    isInvisibleWidget: false,
    type: "MENU_WIDGET_0229",
    icon: "https://static.codemao.cn/coco/player/unstable/H1OF8C_23.image/png?hash=FgUIj_Wh7Iu1NpN98aDqfAaLcRrC",
    title: "下拉菜单",
    version: "0.0.1",
    isGlobalWidget: false,
    properties: [
        {
            key: '__width',
            label: '宽度',
            valueType: 'number',
            defaultValue: 200,
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
            key: 'display',
            label: '显示菜单',
            valueType: 'boolean',
            defaultValue: false,
        },
        {
            key: 'radioText',
            label: '选中项',
            valueType: 'string',
            defaultValue: '点击选择',
        },
        {
            key: 'items',
            label: '选项列表',
            valueType: 'string',
            defaultValue: '选项1,选项2,选项3',
        },
        {
            key: 'radioImage',
            label: '选中项图标',
            valueType: 'string',
            defaultValue: 'https://static.codemao.cn/coco/player/unstable/H1OF8C_23.image/png?hash=FgUIj_Wh7Iu1NpN98aDqfAaLcRrC',
        },
        {
            key: 'imageList',
            label: '图标列表',
            valueType: 'string',
            defaultValue: 'https://static.codemao.cn/coco/player/unstable/H1OF8C_23.image/png?hash=FgUIj_Wh7Iu1NpN98aDqfAaLcRrC,https://static.codemao.cn/coco/player/unstable/H1OF8C_23.image/png?hash=FgUIj_Wh7Iu1NpN98aDqfAaLcRrC,https://static.codemao.cn/coco/player/unstable/H1OF8C_23.image/png?hash=FgUIj_Wh7Iu1NpN98aDqfAaLcRrC',
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
            key: 'setStyleJSON',
            label: '高级功能 - 菜单配置表',
            valueType: 'string',
            editorType: 'TextArea',
            blockOptions: { generateBlock: false },
            defaultValue: `\
{
    "控件id": "menu_1",
    "文本大小": "14",
    "图标大小": "20",
    "菜单圆角": "12",
    "菜单高度": "45",
    "菜单距离": "10",
    "选项高度": "40",
    "文本颜色": "#000000",
    "菜单背景色": "#ffffff",
    "动画缩放大小": "0.7",
    "动画速度(秒)": "0.35",
    "动画弹出锚点": "50% -30%"
}\
`,
        },
    ],
    methods: [],
    events: [
        {
            key: 'onItemClick',
            label: '选项被点击',
            params: [
                {
                    key: 'itemText',
                    label: '文本',
                    valueType: 'string',
                },
                {
                    key: 'itemNum',
                    label: '序号',
                    valueType: 'string',
                },
            ],
        },
    ],
};


class openDialogWidget extends VisibleWidget {
    constructor(props) {
        super(props);
        this.__width = props.__width;
        this.__height = props.__height;
        this.radioText = props.radioText;
        this.radioImage = props.radioImage;
        this.items = props.items;
        this.image = props.imageList;
        this.imageList = props.imageList.split(',');
        this.display = props.display;

        this.menudisplay = "none";
        this.rotate = "0";

        this.setStyleJSON = props.setStyleJSON;        
        this.setStyle = this.parse_JSON(this.setStyleJSON);
    }

    // 解析配置表
    parse_JSON = (json) => {
        try {
            return JSON.parse(json);
        } catch (SyntaxError) {
            this.widgetError('配置表格式错误，已恢复默认配置');
            return JSON.parse(`\
{
    "控件id": "menu_1",
    "文本大小": "14",
    "图标大小": "20",
    "菜单圆角": "12",
    "菜单高度": "45",
    "菜单距离": "10",
    "选项高度": "40",
    "文本颜色": "#000000",
    "菜单背景色": "#ffffff",
    "动画缩放大小": "0.7",
    "动画速度(秒)": "0.35",
    "动画弹出锚点": "50% -30%"
}\
`);
        }
    }

    // 控件主体被点击时执行
    divClick = () => {
        if(this.display === true){
            this.setProps({
                display: false,
                rotate: "0",
            })
            setTimeout(() => {
                this.setProps({
                    menudisplay: "none"
                })
            }, this.setStyle['动画速度(秒)'] * 1000);
        }else{
            this.setProps({
                display: true,
                rotate: "180",
                menudisplay: "flex"
            })
        }
    }

    // 菜单选项被点击时执行
    itemClick = (item, index) => {
        this.setProps({
            radioText: item,
            radioImage: this.imageList[index],
        });
        this.emit('onItemClick', item, index + 1);
    };
    
    render() {
        return (
            <div style={{ width: "100%" }}>
                <div class={ this.setStyle['控件id'] } onClick={() => this.divClick()}>
                    <img class="icon" src={ this.radioImage } alt="" />
                    <p>{ this.radioText }</p>
                    <img class="righticon" src="https://static.codemao.cn/coco/player/unstable/BJaYklqh3.image/png?hash=Fn7X73jLAfPFj1D1ePxFU2Tkjpzy" alt="" />
                    <div class="menu" >
                        {(typeof this.items === "object" ? this.items : this.items.split(',')).map((item, index) => (
                            <div onClick={() => this.itemClick(item, index)}>
                                <img class="icon" src={ this.imageList[index] } alt="" />
                                <p>{ item }</p>
                            </div>
                        ))}
                    </div>
                </div>
                <style>{`
                    .${ this.setStyle['控件id'] }{
                        position: relative;
                        wdith: 100%;
                        height: ${ this.setStyle['菜单高度'] }px;
                        background-color: ${ this.setStyle['菜单背景色'] }; 
                        border-radius: ${ this.setStyle['菜单圆角'] }px;
                        display: flex;
                        align-items: center;
                        padding: 0px 0px 0px 14px;
                    }
                    .${ this.setStyle['控件id'] } .menu{
                        position: absolute;
                        left: 0; top: ${ parseInt( this.setStyle['菜单高度'] ) + parseInt( this.setStyle['菜单距离'] )}px;
                        width: 100%;
                        padding: 6px;
                        border-radius: ${ this.setStyle['菜单圆角'] }px;
                        background-color: ${ this.setStyle['菜单背景色'] };
                        box-shadow: 0px 3px 12px #00000012;
                        transform-origin: ${ this.setStyle['动画弹出锚点'] };
                        display: ${ this.display === true ? "flex" : this.menudisplay };
                        flex-direction: column;
                        gap: 5px;
                        animation: ${ this.display === true ? "MENU_WIDGET_On " + this.setStyle['动画速度(秒)'] + "s cubic-bezier(.34,.48,.14,1) forwards" : "MENU_WIDGET_Off " + this.setStyle['动画速度(秒)'] + "s cubic-bezier(.34,.48,.14,1) forwards" };
                        transform: scale(0);
                        opacity: 0;
                    }
                    .${ this.setStyle['控件id'] } .menu > div{
                        width: 100%;
                        height: ${ this.setStyle['选项高度'] }px;
                        display: flex;
                        align-items: center;
                        padding: 0px 0px 0px 13px;
                        border-radius: ${ this.setStyle['菜单圆角'] - 3 }px;
                    }
                    .${ this.setStyle['控件id'] } .menu > div:active{
                        background-color: #00000008;
                    }
                    .${ this.setStyle['控件id'] } .icon{
                        margin-right: 10px;
                        width: ${ this.setStyle['图标大小'] }px;
                        height: ${ this.setStyle['图标大小'] }px;
                        display: ${ this.image === "" ? "none" : "block" };
                    }
                    .${ this.setStyle['控件id'] } p{
                        margin: 0px;
                        font-size: ${ this.setStyle['文本大小'] }px;
                        color: ${ this.setStyle['文本颜色'] };
                    }
                    .${ this.setStyle['控件id'] } .righticon{
                        position: absolute; right: 18px;
                        width: 14px;
                        height: 14px;
                        transform: rotate(${ this.display === true ? "180" : this.rotate }deg);
                        transition: all ${ this.setStyle['动画速度(秒)'] }s;
                    }

                    @keyframes MENU_WIDGET_On{
                        0%{
                            transform: scale(0);
                            opacity: 0;
                        }
                        1%{
                            transform: scale(${ this.setStyle['动画缩放大小'] });
                            opacity: 0;
                        }
                        100%{
                            transform: scale(1);
                            opacity: 1;
                        }
                    }
                    @keyframes MENU_WIDGET_Off{
                        0%{
                            transform: scale(1);
                            opacity: 1;
                        }
                        99%{
                            transform: scale(${ this.setStyle['动画缩放大小'] });
                            opacity: 0;
                        }
                        100%{
                            transform: scale(0);
                            opacity: 0;
                        }
                    }
                `}</style>
            </div>
        );
    }
}

exports.types = types;
exports.widget = openDialogWidget;
