var document = this.document;

/*
控件制作：青舒计
特别感谢：小鱼yuzifu（提供代码）
*/

const types = {
    type: "IS_WIDGET_LOG_OPEN_YUZIFU_CYAN_WIDGET",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "CoCo控制台",
    version: "1.0.0",
    auther: "青舒计，小鱼yuzifu",
    docs: {
        url: ""
    },
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    methods: [
        {
            key: "isWidgetLogOpen",
            label: "CoCo控制台是否开启",
            params: [],
            valueType: 'boolean',
            blockOptions: {
                color: '#FF68CE'
            }
        },
    ],
    events: []
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
    }

    isWidgetLogOpen = () => {
    	    return (document.querySelector(".ConsolePanel_hide__ema1i")) ? true : false;
    	}
}

exports.types = types;
exports.widget = Widget;
