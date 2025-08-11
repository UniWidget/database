/**
 * @author: Inventocode
 * 来自 CCFluent 组件库
 */

const methodBlockColor = ' #2C9AFF'
const createBlockColor = ' #62B7FF'
const returnBlockColor = ' #F4AE3B'

document = this.document;

let script;
script = document.createElement('script');
script.setAttribute('src', 'https://unpkg.com/@fluentui/web-components');
script.setAttribute('type', 'module');
document.getElementsByTagName('head')[0].appendChild(script);

let types = {
    title: "数字字段",
    type: "CCFLUENT_NUMBER_FIELD_WIDGET",
    icon: "https://static.bcmcdn.com/coco/player/unstable/BJQC406YJe.image/png?hash=Fj4YC5L1p7YLS58J_A2-Y5CCtBq6",
    docs: { url: 'https://ccwidget.top/' },
    version: "1.0.0",
    isInvisibleWidget: false,
    isGlobalWidget: false,
    hasAnyWidget: true,
    properties: [
        {
            key: 'tipText',
            label: '提示文本',
            valueType: 'string',
            defaultValue: '数字：'
        },
        {
            key: 'value',
            label: '值',
            valueType: 'number',
            defaultValue: 0
        },
    ],
    events: [
        {
            key: 'on',
            label: '',
            subTypes: [
                {
                    key: 'event',
                    dropdown: [
                        { label: '获得焦点', value: 'Focus' },
                        { label: '失去焦点', value: 'Blur' }
                    ]
                }
            ],
            params: [],
        },
    ],
    methods: [
        {
            key: "getWidgetId",
            label: '的 ID',
            valueType: 'string',
            params: [],
            blockOptions: { callMethodLabel: false, color: returnBlockColor },
        },
    ],
}


class Widget extends VisibleWidget {
    constructor(props) {
        super(props)
        Object.assign(this, props)
    }
    // 事件
    onEvent(name, e) {
        this.setProps({ value: Number.parseFloat(e.target.value) });
        this.emit('on' + name);
    }
    // 渲染控件
    render() {
        return (
            <div className={`CCFluent_${this.__widgetId}`}>
                <fluent-number-field
                    value={this.value}
                    onFocus={(e) => this.onEvent('Focus', e)}
                    onBlur={(e) => this.onEvent('Blur', e)}
                >
                    {this.tipText}
                </fluent-number-field>
                <style>
                    {`
                        .CCFluent_${this.__widgetId} {
                            width: 100%;
                            height: 100%;
                        }
                        .CCFluent_${this.__widgetId} > fluent-number-field {
                            width: 100%;
                            height: 100%;
                        }
                    `}
                </style>
            </div>
        )
    }

    // 返回控件的 ID
    getWidgetId() { return this.__widgetId }
}

exports.types = types
exports.widget = Widget