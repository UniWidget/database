import('https://cdn.staticfile.org/KaTeX/0.16.4/contrib/auto-render.min.js')
    .then(m => {
        const m1 = m;
    });
import("https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.js")
    .then(m => {
        const m2 = m;
    });
var document = this.document;
var window = this.window;
import('https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.js')
    .then(m => {
        const m3 = m;
    });
const types = {
    isInvisibleWidget: false,
    type: "RENDER_COKATEX_WIDGET",
    icon: "",
    title: "CoKatex",
    version: "1.0.0",
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

types['properties'].push({
    key: 'KaTexString',
    label: '公式字符串',
    valueType: 'string',
    defaultValue: 'x+2-3*4/6=4/y + x\\cdot y',

})

types['events'].push({
    key: 'RenderError',
    label: '渲染失败',
    params: [
        {
            key: 'Message',
            label: '错误信息',
            valueType: 'string',
        },],

});
class Widget extends VisibleWidget {
    constructor(props) {
        super(props);
        this.__width = props.__width;
        this.__height = props.__height;
        this.KaTexString = props.KaTexString;

        document.querySelector("head").insertAdjacentHTML("beforeend", '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.css" integrity="sha384-ko6T2DjISesD0S+wOIeHKMyKsHvWpdQ1s/aiaQMbL+TIXx3jg6uyf9hlv3WWfwYv" crossorigin="anonymous">')
        //document.querySelector("head").insertAdjacentHTML("beforeend",'<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.js" integrity="sha384-tsPOhveNsi36uhglzMBNOAA2xd7LlEqQuQHFKi4DwP+6UKrrLGub1MD77Zx18F8e" crossorigin="anonymous"></script>');
    }
    render() {
        var html = katex.renderToString(this.KaTexString, {
            throwOnError: false
        });
        return (React.createElement("div", { dangerouslySetInnerHTML: { __html: html } }, null));

    }
}

exports.types = types;
exports.widget = Widget;