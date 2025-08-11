/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

const types = {
    isInvisibleWidget: false,
    type: "NAVIGATION_BAR_WIDGET",
    icon: "https://example.cn",
    title: "导航栏",
    version: "1.0.0",
    isGlobalWidget: false,
    properties: [
        {
            key: '__width',
            label: '宽度',
            valueType: 'number',
            defaultValue: 800,
            blockOptions: {
                generateBlock: false,
            },
        },
        {
            key: 'backgroundColor',
            label: '背景颜色',
            valueType: 'string',
            defaultValue: '#ffffff',
        },
        {
            key: 'items',
            label: '导航项',
            valueType: 'string',
            defaultValue: 'Home,About,Contact',
        },
        {
            key: 'activeItem',
            label: '当前项',
            valueType: 'string',
            defaultValue: 'Home',
            blockOptions: {
                generateBlock: true,
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
                    key: 'item',
                    label: '导航项',
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
        this.backgroundColor = props.backgroundColor;
        this.items = props.items;
        this.activeItem = props.activeItem;
    }

    handleItemClick = (item) => {
        this.setProps({
            activeItem: item,
        });

        this.emit('onItemClick', item);
    };

    render() {
        return (
            <div style={{ width: this.__width, background: this.backgroundColor }}>
                {this.items.split(',').map((item, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'inline-block',
                            padding: '10px 20px',
                            cursor: 'pointer',
                            fontWeight: this.activeItem === item ? 'bold' : 'normal',
                            color: this.activeItem === item ? '#ffffff' : '#000000',
                            background: this.activeItem === item ? '#1495ef' : 'transparent',
                        }}
                        onClick={() => this.handleItemClick(item)}
                    >
                        {item}
                    </div>
                ))}
            </div>
        );
    }
}

exports.types = types;
exports.widget = NavigationBarWidget;
