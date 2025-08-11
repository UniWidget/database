var window = this.winodw;
var document = this.document;

function mathRandomInt(a, b) {
    if (a > b) {
        // Swap a and b to ensure a is smaller.
        var c = a;
        a = b;
        b = c;
    }
    return Math.floor(Math.random() * (b - a + 1) + a);
}

function scrollToID(id) {
    var se = document.getElementById(id);
    if (se) {
        se.scrollIntoView({
            behavior: 'smooth',
        });
    }
}

function smoothScrollTo(elementId, duration) {
    const target = document.getElementById(elementId);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().left + window.pageXOffset; // 包括滚动偏移  
    const startPosition = window.scrollX || window.pageXOffset; // 窗口当前的水平滚动位置  
    const distance = targetPosition - startPosition; // 需要滚动的水平距离  
    let startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percent = Math.min(progress / duration, 1);
        window.scrollTo(startPosition + distance * percent, window.scrollY); // 注意这里是 x 坐标  

        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
}

function scrollToTop(d, id) {
    var we = document.getElementById(id);
    we.scrollLeft += d;
}

function scrollToButtom(d, id) {
    var we = document.getElementById(id);
    we.scrollLeft += 0 - d;
}

function scrollTop(id) {
    var we = document.getElementById(id);
    we.scrollLeft = 0;
}

function scrollButtom(id) {
    var we = document.getElementById(id);
    we.scrollLeft = we.scrollWidth;
}

function getScroll(id) {
    var we = document.getElementById(id);
    return we.scrollLeft;
}


const types = {
    isInvisibleWidget: false,
    type: "HORIZONTZL_SCROLL_LAYOUT-1",
    icon: "https://cdn.cocotais.cn/project/waddle-2/logo/waddle2-logo.svg",
    title: "水平滚布局",
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
            defaultValue: 120,
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
        this.widgetid = props.widgetid;
        this.data = JSON.parse(props.data);

    }

    haddleClick = (e) => {
        this.widgetLog('控件被点击');
        this.emit('widgetclick');
    }

    haddleMouseDown = (e) => {
        this.widgetLog('控件被按下');
        this.emit('widgetmousedown');
    }

    haddleMouseUp = (e) => {
        this.widgetLog('控件被松开');
        this.emit('widgetmouseup');
    }

    haddleItemClick = (ID) => {
        this.widgetLog(`项ID为${ID}被点击`);
        this.emit('itemclick', ID);
    }

    haddleItemMouseDown = (e) => {
        this.widgetLog(`项ID为${ID}被按下`);
        this.emit('itemmousedown', ID);
    }

    handleItemMouseUp = (e) => {
        this.widgetLog(`项ID为${ID}被松开`);
        this.emit('itemmouseup', ID);
    }

    haddleScroll = () => {
        this.emit('onscroll');
    }

    haddleDBClick = () => {
        this.emit('ondbclick');
    }

    haddleItemDBClick = (id) => {
        this.emit('onitemdbclick', id);
    }
    render() {
        return (
            <div
                id={this.widgetid}
                style={{
                    width: this.__width,
                    height: this.__height,
                    overflowX: 'auto',
                    overflowY: 'hidden',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '0px',
                    margin: '0px',
                    border: '0px',
                }}
                onClick={() => this.haddleClick()}
                onMouseDown={() => this.haddleMouseDown()}
                onMouseUp={() => this.haddleMouseUp()}
                onScroll={() => this.haddleScroll()}
                onDoubleClick={() => this.haddleDBClick()}
            >
                {this.data.map((item, index) => (
                    <div
                        id={item.ID}
                        key={index}
                        style={{
                            flex: `0 0 ${item.width}px`,
                            width: item.width,
                            height: item.height,
                            overflow: item.overflow ? 'auto' : 'hidden',
                            margin: `${item.marginTop}px ${item.marginRight}px ${item.marginBottom}px ${item.marginLeft}px`,
                            padding: `${item.paddingTop}px ${item.paddingRight}px ${item.paddingBottom}px ${item.paddingLeft}px`,
                            borderRadius: item.borderRadius,
                            borderWidth: item.borderWidth,
                            borderColor: item.borderColor,
                            borderStyle: item.borderStyle,
                            backgroundColor: item.backgroundColor,
                            backgroundImage: item.backgroundImage,
                            backgroundSize: item.backgroundSize,
                        }}
                        dangerouslySetInnerHTML={{ __html: item.html }}
                        onClick={() => this.haddleItemClick(item.ID)}
                        onMouseDown={() => this.haddleItemMouseDown(item.ID)}
                        onMouseUp={() => this.haddleItemMouseUp(item.ID)}
                        onDoubleClick={() => this.haddleDBClick(item.ID)}
                    >
                    </div>
                )
                )}
            </div>
        );

    }
}

types['events'].push({
    key: 'widgetclick',
    label: '控件被点击',
    params: [],

})

types['events'].push({
    key: 'widgetmousedown',
    label: '控件被按下',
    params: [],

})

types['events'].push({
    key: 'widgetmouseup',
    label: '控件被松开',
    params: [],

})

types['events'].push({
    key: 'ondbclick',
    label: '控件被双击',
    params: [],

})

types['events'].push({
    key: 'itemclick',
    label: '项被点击',
    params: [
        {
            key: 'ID',
            label: 'ID',
            valueType: 'string',
        },
    ],

})

types['events'].push({
    key: 'itemmousedown',
    label: '项被按下',
    params: [
        {
            key: 'ID',
            label: 'ID',
            valueType: 'string',
        },
    ],

})

types['events'].push({
    key: 'itemmouseup',
    label: '项被松开',
    params: [
        {
            key: 'ID',
            label: 'ID',
            valueType: 'string',
        },
    ],

})

types['events'].push({
    key: 'onitemdbclick',
    label: '项被双击',
    params: [
        {
            key: 'id',
            label: 'ID',
            valueType: ['string', 'number', 'boolean', 'color', 'array', 'object'],
        },],

})

types['events'].push({
    key: 'onscroll',
    label: '被滚动',
    params: [],

})

types['properties'].push({
    key: 'widgetid',
    label: '控件ID',
    valueType: 'string',
    defaultValue: `HORIZONTZL_SCROLL_LAYOUT_${mathRandomInt(100000, 999999)}`,

})

types['properties'].push({
    key: 'data',
    label: '数据',
    valueType: ['string', 'array', 'object'],
    defaultValue: `[]`,

})

types['methods'].push({
    key: 'Quick',
    label: '快速生成',
    params: [
        {
            key: 'ID',
            label: 'ID',
            valueType: 'string',
            defaultValue: `HORIZONTZL_SCROLL_LAYOUT_Item${mathRandomInt(100000, 999999)}`,
        },
        {
            key: 'width',
            label: '宽',
            valueType: 'number',
            defaultValue: 120,
        },
        {
            key: 'height',
            label: '高',
            valueType: 'number',
            defaultValue: 120,
        },
        {
            key: 'html',
            label: 'HTML',
            valueType: 'multilineString',
            checkType: 'string',
            defaultValue: '<h1>HTML</h1>',
        },
        {
            key: 'marginTop',
            label: '上外边距',
            valueType: 'number',
            defaultValue: 0,
        },
        {
            key: 'marginBottom',
            label: '下外边距',
            valueType: 'number',
            defaultValue: 0,
        },
        {
            key: 'marginLeft',
            label: '左外边距',
            valueType: 'number',
            defaultValue: 0,
        },
        {
            key: 'marginRight',
            label: '右外边距',
            valueType: 'number',
            defaultValue: 0,
        },
        {
            key: 'paddingTop',
            label: '上内边距',
            valueType: 'number',
            defaultValue: 0,
        },
        {
            key: 'paddingBottom',
            label: '下内边距',
            valueType: 'number',
            defaultValue: 0,
        },
        {
            key: 'paddingLeft',
            label: '左内边距',
            valueType: 'number',
            defaultValue: 0,
        },
        {
            key: 'paddingRight',
            label: '右内边距',
            valueType: 'number',
            defaultValue: 0,
        },
        {
            key: 'borderRadius',
            label: '圆角',
            valueType: 'number',
            defaultValue: 1,
        },
        {
            key: 'borderWidth',
            label: '边框宽度',
            valueType: 'number',
            defaultValue: 0,
        },
        {
            key: 'borderColor',
            label: '边框颜色',
            valueType: 'color',
            defaultValue: '#333',
        },
        {
            key: 'borderStyle',
            label: '边框样式',
            valueType: 'string',
            defaultValue: 'solid',
        },
        {
            key: 'backgroundColor',
            label: '背景颜色',
            valueType: 'color',
            defaultValue: '#FFFFFF00',
        },
        {
            key: 'backgroundImage',
            label: '背景图片',
            valueType: 'string',
            defaultValue: '',
        },
        {
            key: 'backgroundSize',
            label: '背景尺寸',
            valueType: 'string',
            defaultValue: 'cover',
        },
        {
            key: 'overflow',
            label: '滚动',
            valueType: 'boolean',
            defaultValue: true,
        },
    ],
    valueType: 'object',
    blockOptions: {
        color: '#ffbb55',
        icon: '无',
        generateBlock: true,
        inputsInline: false,
        space: 16,
    },
    toolip: `参数较多，传参完成后建议折叠此积木`,

})
Widget.prototype.Quick = function (ID, width, height, html, marginTop, marginBottom, marginLeft, marginRight, paddingTop, paddingBottom, paddingLeft, paddingRight, borderRadius, borderWidth, borderColor, borderStyle, backgroundColor, backgroundImage, backgroundSize, overflow,) {
    this.widgetLog(Array.isArray(this.data))
    return {
        ID: ID,
        width: width,
        height: height,
        html: html,
        marginTop: marginTop,
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        borderRadius: borderRadius,
        borderWidth: borderWidth,
        borderColor: borderColor,
        borderStyle: borderStyle,
        backgroundColor: backgroundColor,
        backgroundImage: backgroundImage,
        backgroundSize: backgroundSize,
        overflow: overflow
    }
}

types['methods'].push({
    key: 'scrollToID',
    label: '滚动到ID',
    params: [
        {
            key: 'ID',
            label: '为',
            valueType: 'string',
            defaultValue: `HORIZONTZL_SCROLL_LAYOUT_Item${mathRandomInt(100000, 999999)}`,
        },
    ],


})
Widget.prototype.scrollToID = function (ID,) {
    scrollToID(ID);
}

types['methods'].push({
    key: 'scrollToIDinTime',
    label: '用',
    params: [
        {
            key: 'time',
            label: '',
            valueType: 'number',
            defaultValue: 1,
            labelAfter: '秒的时间'
        },
        {
            key: 'id',
            label: '滚动到ID为',
            valueType: 'string',
            defaultValue: "",
            labelAfter: "的地方"
        },],


})
Widget.prototype.scrollToIDinTime = function (id, time,) {
    this.widgetWarn('该功能还有些问题');
    //smoothScrollTo(id, time * 1000);
}

types['methods'].push({
    key: 'scrollToTop',
    label: '向右',
    params: [
        {
            key: 'd',
            label: '滚动',
            valueType: 'number',
            defaultValue: "",
            labelAfter: "px的距离"
        },],


})
Widget.prototype.scrollToTop = function (d,) {
    scrollToTop(d, this.widgetid);
}

types['methods'].push({
    key: 'scrollToButtom',
    label: '向左',
    params: [
        {
            key: 'd',
            label: '滚动',
            valueType: 'number',
            defaultValue: "",
            labelAfter: "px的距离"
        },],


})
Widget.prototype.scrollToButtom = function (d,) {
    scrollToButtom(d, this.widgetid);
}

types['methods'].push({
    key: 'scrollTop',
    label: '滚动到最右',
    params: [],


})
Widget.prototype.scrollTop = function () {
    scrollTop(this.widgetid);
}

types['methods'].push({
    key: 'scrollButtom',
    label: '滚动到最左',
    params: [],


})
Widget.prototype.scrollButtom = function () {
    scrollButtom(this.widgetid);
}

types['methods'].push({
    key: 'scrollD',
    label: '滚动距离',
    params: [],
    valueType: 'number'


})
Widget.prototype.scrollD = function () {
    return getScroll(this.widgetid);
}

types['methods'].push({
    key: 'getElementAttribute',
    label: '获取元素属性',
    params: [
        {
            key: 'element',
            label: '元素选择器',
            valueType: 'string',
            defaultValue: '',
        }, {
            key: 'attribute',
            label: '属性',
            valueType: 'string',
            defaultValue: "",
        },],
    valueType: ['string', 'object'],


})
Widget.prototype.getElementAttribute = function (element, attribute,) {
    return document.querySelector(element)[attribute];
}

types['methods'].push({
    key: 'setElementAttribute',
    label: '设置元素属性',
    params: [
        {
            key: 'element',
            label: '元素选择器',
            valueType: 'string',
            defaultValue: '',
        }, {
            key: 'attribute',
            label: '属性',
            valueType: 'string',
            defaultValue: "",
        }, {
            key: 'value',
            label: '值',
            valueType: ['string', 'number', 'boolean', 'array', 'color', 'object',],
            defaultValue: "",
        },],


})
Widget.prototype.setElementAttribute = function (element, attribute, value,) {
    document.querySelector(element)[attribute] = value;
}

types['methods'].push({
    key: 'getElementStyle',
    label: '获取元素样式',
    params: [
        {
            key: 'element',
            label: '元素选择器',
            valueType: 'string',
            defaultValue: '',
        }, {
            key: 'style',
            label: '样式',
            valueType: 'string',
            defaultValue: "",
        },],
    valueType: ['string', 'object'],


})
Widget.prototype.getElementStyle = function (element, style,) {
    return document.querySelector(element).style[style];
}

types['methods'].push({
    key: 'setElementStyle',
    label: '设置元素样式',
    params: [
        {
            key: 'element',
            label: '元素选择器',
            valueType: 'string',
            defaultValue: '',
        }, {
            key: 'style',
            label: '样式',
            valueType: 'string',
            defaultValue: "",
        }, {
            key: 'value',
            label: '值',
            valueType: ['string', 'number', 'boolean', 'array', 'color', 'object',],
            defaultValue: "",
        },],


})
Widget.prototype.setElementStyle = function (element, style, value,) {
    document.querySelector(element).style[style] = value;
}

exports.types = types;
exports.widget = Widget;