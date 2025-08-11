/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

const types = {
    isInvisibleWidget: false,
    type: "ICON_NAV_WIDGET_0229",
    icon: "https://ocean.codemao.cn/appcraft/resource/icon/%E5%9F%BA%E7%A1%80/%E8%B0%83%E8%8A%82.svg",
    title: "导航栏",
    version: "1.0.0",
    isGlobalWidget: false,
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
            defaultValue: 60,
            blockOptions: {
                generateBlock: false,
            },
        },
        {
            key: 'navColor',
            label: '导航栏背景颜色',
            valueType: 'color',
            defaultValue: '#F5F5F7',
        },
        {
            key: 'backgroundColor',
            label: '选中项背景颜色',
            valueType: 'color',
            defaultValue: '#F5F5F7',
        },
        {
            key: 'textColor',
            label: '选中项文本颜色',
            valueType: 'color',
            defaultValue: '#007AFF',
        },
        {
            key: 'textSize',
            label: '文本大小',
            valueType: 'number',
            defaultValue: 12,
        },
        {
            key: 'iconSize',
            label: '图标大小',
            valueType: 'number',
            defaultValue: 24,
        },
        {
            key: 'items',
            label: '导航项',
            valueType: 'string',
            defaultValue: '主页,动态,好友,我的',
        },
        {
            key: 'activeItem',
            label: '当前项',
            valueType: 'string',
            defaultValue: '主页',
            blockOptions: {
                generateBlock: true,
            },
        },
        {
            key: 'itemsImgOff',
            label: '导航项图标-未选中',
            valueType: 'string',
            editorType: 'TextArea',
            defaultValue: `\
            https://static.codemao.cn/coco/player/unstable/H1AtkpQ3h.image/png?hash=Fjt3xjstErUsCyXjjNYJLKNbhKFP,
            https://static.codemao.cn/coco/player/unstable/SkhnyaX2h.image/png?hash=FrzBuvZwzO1HwIHWxf4FtKCe421P,
            https://static.codemao.cn/coco/player/unstable/ByRigT72h.image/png?hash=FhUZtLZlSKTi1CMwnVKw1e9ZtPM8,
            https://static.codemao.cn/coco/player/unstable/BJcAya7h2.image/png?hash=FqNUAB-GjyWvJQBN2WaIbsPPrWGm,
            \
            `,
        },
        {
            key: 'itemsImgOn',
            label: '导航项图标-选中',
            valueType: 'string',
            editorType: 'TextArea',
            defaultValue: `\
            https://static.codemao.cn/coco/player/unstable/ByURxpQ2n.image/png?hash=Fja7DRb--WWdtJdxLBgC5I0WGERj,
            https://static.codemao.cn/coco/player/unstable/S1bkZ6Xhh.image/png?hash=FhukUpabdv3hQNN9z68ZB5HyvI5R,
            https://static.codemao.cn/coco/player/unstable/Skkl-6m32.image/png?hash=Fh0-my4YP14b7GuhRH_4lmrGjhCT,
            https://static.codemao.cn/coco/player/unstable/HkYlWpQhn.image/png?hash=Fg_80jJNyQWtqqbJdg7Z55iFM55J,
            \
            `,
        },
    ],
    methods: [],
    events: [
        {
            key: 'onItemClick',
            label: '导航项点击',
            params: [
                {
                    key: 'item',
                    label: '选项',
                    valueType: 'string',
                },
            ],
        },
    ],
};

class NavigationBarWidget extends VisibleWidget {
    constructor(props) {
        super(props);
        this.__width = props.__width;
        this.__height = props.__height;
        this.navColor = props.navColor;
        this.backgroundColor = props.backgroundColor;
        this.textColor = props.textColor;
        this.textSize = props.textSize;
        this.iconSize = props.iconSize;
        this.items = props.items;
        this.activeItem = props.activeItem;

        this.itemsImgOn = props.itemsImgOn;
        this.itemsImgOff = props.itemsImgOff;
        this.itemsImgOn2 = this.itemsImgOn.split(',');
        this.itemsImgOff2 = this.itemsImgOff.split(',');
    }

    handleItemClick = (item) => {
        this.setProps({
            activeItem: item,
        });

        this.emit('onItemClick', item);
    };

    render() {
        return (
            <div style={{ width: this.__width, height: this.__height, background: this.navColor, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {(typeof this.items === "object" ? this.items : this.items.split(',')).map((item, index) => (
                    <div
                        key={index}
                        style={{
                            flex: '1',
                            cursor: 'pointer',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: this.activeItem === item ? this.textColor : '#000000',
                            background: this.activeItem === item ? this.backgroundColor : 'transparent',
                        }}
                        onClick={() => this.handleItemClick(item)}
                    >
                        <img src={ this.activeItem === item ? this.itemsImgOn2[index] : this.itemsImgOff2[index] } style={{ width: this.iconSize + "px"}}/>
                        <p style={{ padding: "0", margin: "0", fontSize: this.textSize + "px" }}>{item}</p>
                    </div>
                ))}
            </div>
        );
    }
}

exports.types = types;
exports.widget = NavigationBarWidget;
