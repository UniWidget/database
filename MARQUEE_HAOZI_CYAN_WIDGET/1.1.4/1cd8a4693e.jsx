const types = {
    type: "MARQUEE_HAOZI_CYAN_WIDGET",
    icon: "https://ocean.codemao.cn/appcraft/resource/icon/社交/派对.svg",
    title: "滚动元素",
    version: "1.1.4",
    auther: ['耗子', '青舒计'],
    isGlobalWidget: false,
    isInvisibleWidget: false,
    properties: [
        {
            key: 'inner',
            label: '内容',
            valueType: 'multilineString',
            checkType: 'string',
            defaultValue: '内容（可用HTML元素）',
        },
        {
            key: 'direction',
            label: '滚动方向',
            valueType: 'string',
            dropdown: [
                { label: '向左', value: 'left', },
                { label: '向右', value: 'right', },
                { label: '向上', value: 'up', },
                { label: '向下', value: 'down', },
            ],
            defaultValue: 'left',
        },
        {
            key: 'behavior',
            label: '滚动方式',
            valueType: 'string',
            dropdown: [
                { label: '反复单向滚动', value: 'scroll', },
                { label: '来回反复反弹滚动', value: 'alternate', },
                { label: '滚动至底停止', value: 'slide', },
            ],
            defaultValue: 'alternate',
        },
        {
            key: 'loop',
            label: '滚动次数（连续滚动则为-1）',
            valueType: 'number',
            defaultValue: -1,
    	},
    	{
    	    key: 'scrollamount',
    	    label: '每次滚动时移动的长度',
    	    valueType: 'number',
    	    defaultValue: 6,
    	},
    	{
    	    key: 'scrolldelay',
    	    label: '每次滚动时的时间间隔（毫秒）',
    	    valueType: 'number',
    	    defaultValue: 85,
    	},
    	{
    	    key: 'border',
    	    label: '边框',
    	    valueType: 'boolean',
			defaultValue: true,
        },
        {
            key: '__width',
            label: '宽度',
            valueType: 'number',
            defaultValue: 250,
            blockOptions: {
                generateBlock: false,
            },
        },
        {
            key: '__height',
            label: '高度',
            valueType: 'number',
            defaultValue: 100,
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
        /*{
            key: 'returnInner',
            label: '内嵌滚动元素',
            params: [],
            valueType: 'string',
            blockOptions: {
                color: '#6633ff',
                inputsInline: false,
                line: '返回HTML（须搭配富文本控件）（宽高为自适应）（请提前设置属性）',
            },
        },*/
    ],
    events: [],
};

class Widget extends VisibleWidget {
    constructor(props) {
        super(props);
        this.__width = props.__width;
        this.__height = props.__height;
        this.direction = props.direction;
        this.behavior = props.behavior;
        this.loop = props.loop;
    	this.scrollamount = props.scrollamount;
    	this.scrolldelay = props.scrolldelay;
    	this.border = props.border;
    	this.inner = props.inner;
    }
    render() {
        return (
            <marquee
                direction={this.direction}
                behavior={this.behavior}
                loop={this.loop}
                scrollamount={this.scrollamount}
                scrolldelay={this.scrolldelay}
                width="100%"
                height="100%"
                style={{
                    border: this.border ? 'solid' : 'none',
                }}
                dangerouslySetInnerHTML={{
                    __html: this.inner,
                }}>
            </marquee>
        );
    }
}

exports.types = types;
exports.widget = Widget;
