
/**
 * HTML控件
 * 制作：一门鸽鸽（QQ：2422481178）
 */

function colourRgb(r, g, b) {
    r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);
    g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);
    b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);
    return '#' + r + g + b;
}



const types = {
    isInvisibleWidget: false,
    type: "HTML_FYM_WIDGET",
    icon: "icon-widget-web-view",
    title: "HTML控件",
    version: "1.2.0",
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
            defaultValue: 150,
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
    methods: [],
    events: [],
};

class Widget extends VisibleWidget {
    constructor(props) {
        super(props);
        this.__width = props.__width;
        this.__height = props.__height;
        this.content = props.content;

    }
    render() {
        return (
            React.createElement("div", {
                onClick: this.onClick.bind(this),
                style: {
                    width: "100%",
                    height: "100%",
                },
                dangerouslySetInnerHTML: { __html: (this.content) }
            }, null)
        );

    }
}

types['events'].push({
    key: 'onClick',
    label: '被点击',
    params: [],

})
Widget.prototype.onClick = function (event) {
    this.emit("onClick");
}

types['properties'].push({
    key: 'content',
    label: 'HTML文本',
    valueType: 'string',
    editorType: 'TextArea',
    defaultValue: '<a href="https://coco-central.cn/">Hello, CoCo!</a>',
    blockOptions: {
        color: '#ffbb55',
        icon: '无',
        generateBlock: false,
        inputsInline: true,
        space: 16,
    },
})

types['methods'].push({
    key: 'get_content',
    label: '获取HTML文本',
    params: [],
    valueType: 'string',

})
Widget.prototype.get_content = function () {
    return (this.content);
}
types['methods'].push({
    key: 'set_content',
    label: '设置HTML文本',
    params: [
        {
            key: 'content',
            label: '文本',
            valueType: 'multilineString',
            checkType: 'string',
            defaultValue: '<a href="https://coco-central.cn/">Hello, CoCo!</a>',
        },],


})
Widget.prototype.set_content = function (content,) {
    this.setProps({ 'content': content });

}
types['methods'].push({
    key: 'html_decode_and_encode',
    label: 'HTML防注入',
    params: [
        {
            key: 'text',
            label: '文本',
            valueType: 'multilineString',
            checkType: 'string',
            defaultValue: '<a href="https://coco-central.cn/">Hello, CoCo!</a>',
        },],
    valueType: 'string',
    blockOptions: {
        color: (colourRgb(254, 174, 138)),
        icon: '无',
        generateBlock: true,
        inputsInline: true,
        space: 16,
    },
})
Widget.prototype.html_decode_and_encode = function (text,) {
    return (text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;'));
}
exports.types = types;
exports.widget = Widget;