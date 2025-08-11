/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* 酶游明 20240727 三改 */
const types = {
    isInvisibleWidget: false,
    type: 'MINI_RADIO_LIST_WIDGET_0229',
    icon: 'https://ocean.codemao.cn/appcraft/resource/icon/%E5%9F%BA%E7%A1%80/%E8%B0%83%E8%8A%82.svg',
    title: '迷你列表 Pro',
    version: '1.0.0',
    isGlobalWidget: false,
    properties: [
        {
            key: '__width',
            label: '宽度',
            valueType: 'number',
            defaultValue: 220,
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
            key: 'bgColor',
            label: '背景颜色',
            valueType: 'color',
            defaultValue: '#E7E9EC',
        },
        {
            key: 'activeColor',
            label: '选中背景颜色',
            valueType: 'color',
            defaultValue: '#3B87FF',
        },
        {
            key: 'activeTextColor',
            label: '选中文本颜色',
            valueType: 'color',
            defaultValue: '#ffffff',
        },
        {
            key: 'items',
            label: '选项列表',
            valueType: 'string',
            defaultValue: '选项1,选项2,选项3',
        },
        {
            key: 'titleText',
            label: '选中项列表',
            valueType: ['string', 'array'],
            defaultValue: '选项1,选项2',
        },
        {
            key: 'textSize',
            label: '文字大小',
            valueType: 'number',
            defaultValue: 12,
        },
        {
            key: 'roauisSize',
            label: '圆角大小',
            valueType: 'number',
            defaultValue: 12,
        },
        {
            key: 'marginXx',
            label: '选项间距',
            valueType: 'number',
            defaultValue: 4,
        },
        {
            key: 'damn',
            label: '开启单选模式',
            valueType: 'boolean',
            defaultValue: false,
        },
    ],
    methods: [],
    events: [
        {
            key: 'onItemClick',
            label: '选项点击',
            params: [
                {
                    key: 'itemText',
                    label: '选项',
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

class NavigationBarWidget extends VisibleWidget {
    constructor(props) {
        super(props);
        this.__width = props.__width;
        this.__height = props.__height;
        this.bgColor = props.bgColor;
        this.activeColor = props.activeColor;
        this.activeTextColor = props.activeTextColor;
        this.items = props.items;
        this.titleText = props.titleText;
        this.roauisSize = props.roauisSize;
        this.textSize = props.textSize;
        this.marginXx = props.marginXx;
        this.damn = props.damn;
    }

    handleItemClick = (item, index) => {
        if (this.damn) this.titleText = [item];
        else {
            if (this.titleText.includes(item)) this.titleText = this.titleText.filter(v => v !== item);
            else this.titleText.push(item);
        }
        this.setProps({ titleText: this.titleText });
        this.emit('onItemClick', item, index + 1);
    };

    render() {
        this.titleText = typeof this.titleText === 'object' ? this.titleText : this.titleText.split(',');
        this.setProps({ titleText: this.titleText });
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                {(typeof this.items === 'object' ? this.items : this.items.split(',')).map((item, index) => (
                    <div
                        key={index}
                        style={{
                            // height: "20px",
                            padding: '2px 6px',
                            marginRight: this.marginXx + 'px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: this.titleText.includes(item) ? this.activeTextColor : '#000000',
                            background: this.titleText.includes(item) ? this.activeColor : this.bgColor,
                            borderRadius: this.roauisSize + 'px',
                            fontSize: this.textSize + 'px',
                        }}
                        onClick={() => this.handleItemClick(item, index)}>
                        <p style={{ margin: '1px 0px 0px 0px' }}>{item}</p>
                    </div>
                ))}
            </div>
        );
    }
}

exports.types = types;
exports.widget = NavigationBarWidget;
