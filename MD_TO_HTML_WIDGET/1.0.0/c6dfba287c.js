var document = this.document;
var script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
document.body.appendChild(script);

const types = {
    isInvisibleWidget: true,
    type: "MD_TO_HTML_WIDGET",
    icon: "https://cdn.cocotais.cn/project/waddle-2/logo/waddle2-logo.svg",
    title: "MD转HTML",
    version: "1.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);

    }

}

types['methods'].push({
    key: 'ToMarked',
    label: 'MD转HTML',
    params: [
        {
            key: 'MD',
            label: 'MD',
            valueType: 'string',
            defaultValue: "# MD",
        },
    ],
    valueType: 'string',


})
Widget.prototype.ToMarked = function (MD,) {
    return marked.parse(MD);
}

/*types['methods'].push({
    key: 'Prop',
    label: '初始化',
    params: [],


})
Widget.prototype.Prop = function (MD,) {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
    document.body.appendChild(script);
}*/

exports.types = types;
exports.widget = Widget;