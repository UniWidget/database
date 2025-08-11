/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

const types = {
    isInvisibleWidget: false,
    type: "ICON_NAV_WIDGET_0229",
    icon: "https://static.codemao.cn/coco/player/unstable/HJfKgbLh3.image/png?hash=FpvWH8dXubc2ai4QSuTCXWsAhkxA",
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
            key: 'textColorOn',
            label: '选中项颜色',
            valueType: 'color',
            defaultValue: '#007AFF',
        },
        {
            key: 'textColorOff',
            label: '未选中项颜色',
            valueType: 'color',
            defaultValue: '#7C7C7C',
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
            defaultValue: 23,
        },
        {
            key: 'navPadding',
            label: '两侧边距',
            valueType: 'number',
            defaultValue: 10,
        },
        {
            key: 'items',
            label: '导航项',
            valueType: 'string',
            defaultValue: '主页,动态,好友,我的',
        },
        {
            key: 'activeItemText',
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
            m21.6 9.2c0.8 0.6 0.3 1.8-0.6 1.8h-1v8c0 1.1-0.9 2-2 2h-12c-1.1 0-2-0.9-2-2v-8h-1c-1 0-1.4-1.2-0.6-1.8l8.4-6.5c0.7-0.6 1.7-0.6 2.4 0zm-3.6 9.8v-9c0-0.3 0.2-0.6 0.4-0.8l-6.4-5-6.4 5c0.3 0.2 0.4 0.5 0.4 0.8v9h5v-6c0-0.6 0.5-1 1-1 0.6 0 1 0.4 1 1v6z,
            m12 2c5.5 0 10 4.5 10 10 0 5.5-4.5 10-10 10-1.9 0-3.7-0.5-5.2-1.4l-3 0.9c-0.8 0.2-1.5-0.5-1.3-1.3l0.9-3c-0.9-1.5-1.4-3.3-1.4-5.2 0-5.5 4.5-10 10-10zm0 2c-4.4 0-8 3.6-8 8 0 1.6 0.5 3 1.2 4.3 0.3 0.3 0.3 0.8 0.2 1.2l-0.4 1.5 1.5-0.4c0.4-0.1 0.9-0.1 1.2 0.2 1.3 0.7 2.7 1.2 4.3 1.2 4.4 0 8-3.6 8-8 0-4.4-3.6-8-8-8zm-3.5 6.5c0.8 0 1.5 0.7 1.5 1.5 0 0.8-0.7 1.5-1.5 1.5-0.8 0-1.5-0.7-1.5-1.5 0-0.8 0.7-1.5 1.5-1.5zm7 0c0.8 0 1.5 0.7 1.5 1.5 0 0.8-0.7 1.5-1.5 1.5-0.8 0-1.5-0.7-1.5-1.5 0-0.8 0.7-1.5 1.5-1.5z,
            m13 13c2.2 0 4 1.8 4 4v2c0 0.6-0.4 1-1 1-0.6 0-1-0.4-1-1v-2c0-1.1-0.9-2-2-2h-7c-1.1 0-2 0.9-2 2v2c0 0.6-0.4 1-1 1-0.6 0-1-0.4-1-1v-2c0-2.2 1.8-4 4-4zm6 0c1.7 0 3 1.3 3 3v2c0 0.6-0.4 1-1 1-0.6 0-1-0.4-1-1v-2c0-0.6-0.4-1-1-1h-1.4c-0.4-0.8-0.9-1.5-1.6-2zm-9.5-10c2.5 0 4.5 2 4.5 4.5 0 2.5-2 4.5-4.5 4.5-2.5 0-4.5-2-4.5-4.5 0-2.5 2-4.5 4.5-4.5zm8.5 3c1.7 0 3 1.3 3 3 0 1.7-1.3 3-3 3-1.7 0-3-1.3-3-3 0-1.7 1.3-3 3-3zm-8.5-1c-1.4 0-2.5 1.1-2.5 2.5 0 1.4 1.1 2.5 2.5 2.5 1.4 0 2.5-1.1 2.5-2.5 0-1.4-1.1-2.5-2.5-2.5zm8.5 3c-0.6 0-1 0.4-1 1 0 0.6 0.4 1 1 1 0.6 0 1-0.4 1-1 0-0.6-0.4-1-1-1z,
            m12 2c5.5 0 10 4.5 10 10 0 5.5-4.5 10-10 10-5.5 0-10-4.5-10-10 0-5.5 4.5-10 10-10zm0 2c-4.4 0-8 3.6-8 8 0 4.4 3.6 8 8 8 4.4 0 8-3.6 8-8 0-4.4-3.6-8-8-8zm2.8 9.9c0.4-0.4 1-0.4 1.4 0 0.4 0.4 0.4 1 0 1.4-1.1 1-2.6 1.7-4.2 1.7-1.6 0-3.1-0.7-4.2-1.7-0.4-0.4-0.4-1 0-1.4 0.4-0.4 1-0.4 1.4 0 0.7 0.7 1.7 1.1 2.8 1.1 1.1 0 2.1-0.4 2.8-1.1zm-6.3-5.9c0.8 0 1.5 0.7 1.5 1.5 0 0.8-0.7 1.5-1.5 1.5-0.8 0-1.5-0.7-1.5-1.5 0-0.8 0.7-1.5 1.5-1.5zm7 0c0.8 0 1.5 0.7 1.5 1.5 0 0.8-0.7 1.5-1.5 1.5-0.8 0-1.5-0.7-1.5-1.5 0-0.8 0.7-1.5 1.5-1.5z,
            \
            `,
        },
        {
            key: 'itemsImgOn',
            label: '导航项图标-选中',
            valueType: 'string',
            editorType: 'TextArea',
            defaultValue: `\
            m13.2 2.7c-0.7-0.6-1.7-0.6-2.4 0l-8.4 6.5c-0.8 0.6-0.4 1.8 0.6 1.8h1v8c0 1.1 0.9 2 2 2h5v-7c0-0.6 0.4-1 1-1 0.6 0 1 0.4 1 1v7h5c1.1 0 2-0.9 2-2v-8h1c0.9 0 1.4-1.2 0.6-1.8z,
            m12 2c5.5 0 10 4.5 10 10 0 5.5-4.5 10-10 10-1.9 0-3.7-0.5-5.2-1.4l-3 0.9c-0.8 0.2-1.5-0.5-1.3-1.3l0.9-3c-0.9-1.5-1.4-3.3-1.4-5.2 0-5.5 4.5-10 10-10zm-3.5 8.5c-0.8 0-1.5 0.7-1.5 1.5 0 0.8 0.7 1.5 1.5 1.5 0.8 0 1.5-0.7 1.5-1.5 0-0.8-0.7-1.5-1.5-1.5zm7 0c-0.8 0-1.5 0.7-1.5 1.5 0 0.8 0.7 1.5 1.5 1.5 0.8 0 1.5-0.7 1.5-1.5 0-0.8-0.7-1.5-1.5-1.5z,
            m13 13c2.2 0 4 1.8 4 4v1.5c0 0.8-0.7 1.5-1.5 1.5h-12c-0.8 0-1.5-0.7-1.5-1.5v-1.5c0-2.2 1.8-4 4-4zm6 0c1.7 0 3 1.3 3 3v1.5c0 0.8-0.7 1.5-1.5 1.5h-1.5v-2c0-1.6-0.8-3.1-2-4zm-9.5-10c2.5 0 4.5 2 4.5 4.5 0 2.5-2 4.5-4.5 4.5-2.5 0-4.5-2-4.5-4.5 0-2.5 2-4.5 4.5-4.5zm8.5 3c1.7 0 3 1.3 3 3 0 1.7-1.3 3-3 3-1.7 0-3-1.3-3-3 0-1.7 1.3-3 3-3z,
            m12 2c5.5 0 10 4.5 10 10 0 5.5-4.5 10-10 10-5.5 0-10-4.5-10-10 0-5.5 4.5-10 10-10zm2.8 11.9c-0.7 0.7-1.7 1.1-2.8 1.1-1.1 0-2.1-0.4-2.8-1.1-0.4-0.4-1-0.4-1.4 0-0.4 0.4-0.4 1 0 1.4 1.1 1 2.6 1.7 4.2 1.7 1.6 0 3.1-0.7 4.2-1.7 0.4-0.4 0.4-1 0-1.4-0.4-0.4-1-0.4-1.4 0zm-6.3-5.9c-0.8 0-1.5 0.7-1.5 1.5 0 0.8 0.7 1.5 1.5 1.5 0.8 0 1.5-0.7 1.5-1.5 0-0.8-0.7-1.5-1.5-1.5zm7 0c-0.8 0-1.5 0.7-1.5 1.5 0 0.8 0.7 1.5 1.5 1.5 0.8 0 1.5-0.7 1.5-1.5 0-0.8-0.7-1.5-1.5-1.5z,
            \
            `,
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
    methods: [],
    events: [
        {
            key: 'onItemClick',
            label: '导航项点击',
            params: [
                {
                    key: 'itemNum',
                    label: '选项',
                    valueType: 'string',
                },
                {
                    key: 'itemText',
                    label: '选项文本',
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
        this.textColorOn = props.textColorOn;
        this.textColorOff = props.textColorOff;
        this.textSize = props.textSize;
        this.iconSize = props.iconSize;
        this.navPadding = props.navPadding;
        this.items = props.items;
        this.activeItemText = props.activeItemText;


        this.itemsImgOn = props.itemsImgOn;
        this.itemsImgOff = props.itemsImgOff;
        this.itemsImgOn2 = this.itemsImgOn.split(',');
        this.itemsImgOff2 = this.itemsImgOff.split(',');
    }

    handleItemClick = (item, index) => {
        this.setProps({
            activeItemText: item,
        });

        this.emit('onItemClick', index+1, item);
    };

    render() {
        return (
            <div style={{ width: "100%", height: "100%", background: this.navColor, display: 'flex', padding: '0px '+this.navPadding+'px', alignItems: 'center' }}>
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
                            boxSizing: 'box-sizing',
                            paddingTop: '4px', 
                            color: this.activeItemText === item ? this.textColorOn : this.textColorOff,
                            background: this.activeItemText === item ? this.backgroundColor : 'transparent',
                        }}
                        onClick={() => this.handleItemClick(item, index)}
                    >
                        <svg width={ this.iconSize } height={ this.iconSize } viewBox="0 0 24 24" version="1.2" xmlns='http://www.w3.org/2000/svg'>
                            <path fill={ this.activeItemText === item ? this.textColorOn : this.textColorOff } d={ this.activeItemText === item ? this.itemsImgOn2[index] : this.itemsImgOff2[index] } ></path>
                        </svg>
                        <p style={{ padding: "0", margin: "0", fontSize: this.textSize + "px" }}>{item}</p>
                    </div>
                ))}
            </div>
        );
    }
}

exports.types = types;
exports.widget = NavigationBarWidget;
