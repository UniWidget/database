var count = 0, d_tag = [], l_tag = [];
const types = {
    'type': 'CYAN_LAD_CSS_WIDGET',
    'icon': '链接',
    'title': '明暗滤镜',
    'version': '1.0.0',
    'platforms': ['android', 'ios', 'web'],
    'isInvisibleWidget': true,
    'isGlobalWidget': true,
    'docs': {
        'url': 'https://shequ.codemao.cn/user/8525855'
    },
    'properties': [
        {
            "key": "d_css",
            "label": "暗滤镜元素",
            "valueType": "string",
            "defaultValue": "#id,.class,tag"
        },
        {
            "key": "l_css",
            "label": "明滤镜元素",
            "valueType": "string",
            "defaultValue": "#id,.class,tag"
        }
    ],
    'methods': [],
    'events': []
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
        this.d_css = props.d_css;
        this.l_css = props.l_css;
        d_tag = document.querySelectorAll(this.d_css);
        l_tag = document.querySelectorAll(this.l_css);
        for (count = 0;count < d_tag.length;count++) {
            d_tag[count].style.filter = "invert(100%)";
        };
        for (count = 0;count < l_tag.length;count++) {
            l_tag[count].style.filter = "invert(0%)";
        };
        this.d_css.addEventListener('change', (event) => {
            d_tag = document.querySelectorAll(event.d_css);
            for (count = 0;count < d_tag.length;count++) {
                d_tag[count].style.filter = "invert(100%)";
            };
        });
        this.l_css.addEventListener('change', (event) => {
            d_tag = document.querySelectorAll(event.l_css);
            for (count = 0;count < l_tag.length;count++) {
                l_tag[count].style.filter = "invert(100%)";
            };
        });
    }
}
exports.types = types;
exports.widget = Widget;
