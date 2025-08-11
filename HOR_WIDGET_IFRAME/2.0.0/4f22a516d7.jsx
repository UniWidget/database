/**
 * @author: 何我寻月
 * 来自 Hor 控件库
 */

const methodBlockColor = ' #2FD16C'
const createBlockColor = ' #68E396'
const returnBlockColor = ' #F4AE3B'

var document = this.document
var window = this.window

const types = {
    title: "网页框",
    type: "HOR_WIDGET_IFRAME",
    icon: "https://static.codemao.cn/flowchunkflex/BkE14JdMlx.svg?hash=Fr-auvY5ov42KlBdMNqjOfDcpEib",
    docs: { url: 'https://www.yuque.com/seekyhor/horkj/hwvwim38cc90d0zd' },
    version: "2.0.0",
    isInvisibleWidget: false,
    isGlobalWidget: false,
    hasAnyWidget: true,
    properties: [
        {
            key: 'label', label: '类型', valueType: 'string', defaultValue: 'src',
            editorType: 'OptionSwitch',
            dropdown: [
                { label: 'url', value: 'src' },
                { label: 'html', value: 'srcdoc' },
            ],
        },
        { 
            key: 'url', label: 'url', valueType: 'string', defaultValue: 'https://static.codemao.cn/flowchunkflex/ByDH4Idfle.html?hash=FloLaz-RMvEADtGINKcl8A0ZRP-K',
        },
        { 
            key: 'html', label: 'html', valueType: 'string', editorType: 'TextArea', defaultValue: '<h2 style="color:#2FD16C">这是一个标题</h2>\n<p style="color:#2FD16C90">这是一段文字,快来试试吧。</p>',
        },
        { 
            key: 'name', label: '名称', valueType: 'string', defaultValue: 'myName',
        },
        { 
            key: 'allow', label: '权限', valueType: 'string', defaultValue: 'autoplay camera payment',
        },
        { 
            key: 'sandbox', label: '沙盒', valueType: 'string', defaultValue: 'allow-forms allow-modals allow-popups allow-scripts',
        },
        { 
            key: 'referrerpolicy', label: 'referrerpolicy', valueType: 'string', defaultValue: 'no-referrer',
        },
        { 
            key: 'loading', label: '懒加载', valueType: 'boolean', defaultValue: false, 
        },
        { 
            key: 'fullscreen', label: '允许全屏', valueType: 'boolean', defaultValue: true, 
        },
        { 
            key: 'allowdownloads', label: '允许下载', valueType: 'boolean', defaultValue: true, 
        },
        { 
            key: 'radius', label: '圆角大小', valueType: 'number', defaultValue: 10, unit: '像素',
        },
        { 
            key: 'radiusStyle', label: '圆角样式', valueType: 'string', defaultValue: '5px 5px 0px 0px',
        },

        { 
            key: 'screenAlign', 
            label: '屏幕适配', 
            defaultValue: 'top',
            valueType: 'string', 
            dropdown: [
                { label: '顶部对齐', value: 'top' },
                { label: '底部对齐', value: 'bottom' },
            ],
            blockOptions: { generateBlock: false },
        },

        { 
            key: '__width', label: '宽度', valueType: 'number', defaultValue: 340,
            blockOptions: { generateBlock: false },
        },
        { 
            key: '__height', label: '高度', valueType: 'number', defaultValue: 500,
            blockOptions: { generateBlock: false },
        },
        { 
            key: '__size', label: '', valueType: 'number', defaultValue: 100, readonly: true,
            blockOptions: {
                setter: { keys: ['__height', '__width'], line: "通用" },
                getter: { keys: ['__height', '__width'] },
            },
        },
    ],
    events: [],
    methods: [
        {
            key: "getWidgetId",
            label: '的 ID',
            valueType: 'string',
            params: [],
            blockOptions: { color: returnBlockColor, callMethodLabel: false },
        },
    ],
}


class Widget extends VisibleWidget {
    constructor(props) {
        super(props)
        Object.assign(this, props)
    }

    // 渲染控件
    render() { return (
        <div className={`Hor_${this.__widgetId}`} data-screen-align={this.screenAlign}>
            
            <iframe width="100%" height="100%" { ...(this.label === 'src' ? { src: this.url } : { srcDoc: this.html }) } name={this.name} allow={`${this.allow} ${ this.fullscreen?`fullscreen` : ``}`} sandbox={`${this.sandbox} ${ this.allowdownloads?`allow-downloads` : ``}`} referrerpolicy={ this.referrerpolicy} loading={ this.loading?`lazy` : `eager`} style={{border: 0 +'px',borderRadius:`${ this.radiusStyle?`${this.radiusStyle}` : `${this.radius}px`}`}}></iframe>

            <style>
                {`
                    .Hor_${this.__widgetId} {
                        width: 100%;
                        height: 100%;
                    }
                `}
            </style>
        </div>
    )}

    // 返回控件的 ID
    getWidgetId() { return this.__widgetId }

}

exports.types = types
exports.widget = Widget