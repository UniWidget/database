const antd = require('antd-mobile')
const types = {
    type: "ANTD_XJ_SKELETON",
    icon: "icon-widget-list-viewer",
    title: "骨架屏-ANTD",
    version: '1.0.0',
    author: 'XJ王大哥(2357942846)',
    isInvisibleWidget: false,
    isGlobalWidget: false,
    properties: [
        {
            key: 'data',
            label: '数据',
            valueType: ['string', 'number', 'boolean', 'array', 'color', 'object',],
            defaultValue: [],
        }
    ],
    methods: [
        {
            key: 'add',
            label: '添加一行',
            params: [
                {key:'animated',label: '动画',valueType: 'boolean',defaultValue: true},
                {key:'--border-radius',label: '圆角',valueType: 'string',defaultValue: '8px'},
                {key:'--width',label: '宽',valueType: 'string',defaultValue: '70%'},
                {key:'--height',label: '高',valueType: 'string',defaultValue: '100px'},
            ],
            blockOptions: {callMethodLabel: false}
        },
    ],
    events: [],
};

class XJWidget extends VisibleWidget {
    constructor(props) {
        super(props)
        this.data = props.data
    }
    add = (a,b,w,h) => {
        this.data.push({animated:a,'--border-radius':b,'--width':w,'--height':h})
        this.setProps({'data':this.data})
    }

    render() {
        if (typeof this.data !== 'object') this.data = []
        return(
            <antd.Space
                block
                direction='vertical'
            >
                {this.data.map((item, index) => (
                    <antd.Skeleton
                        animated={item.animated}
                        style={{
                            '--border-radius': item['--border-radius'],
                            '--height': item['--height'],
                            '--width': item['--width']
                        }}
                    />
                ))}
            </antd.Space>
        )
    }
}

exports.types = types
exports.widget = XJWidget