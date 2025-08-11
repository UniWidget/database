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
    title: "开关",
    type: "HOR_WIDGET_SWITCH",
    icon: "https://static.codemao.cn/flowchunkflex/HJP-Po0Zxe.svg?hash=Fn_m270JDOcYSo6JqJ_wSf86Zt0Y",
    docs: { url: 'https://www.yuque.com/seekyhor/horkj/fkb73569szu6u0xe' },
    version: "2.0.0",
    isInvisibleWidget: false,
    isGlobalWidget: false,
    hasAnyWidget: true,
    properties: [
        {
            key: 'status', label: '状态', valueType: 'string', defaultValue: 'close',
            editorType: 'OptionSwitch',
            dropdown: [
                { label: '关闭', value: 'close' },
                { label: '开启', value: 'open' },
            ],
        },
        { 
            key: 'closeBgColor', label: '关闭底色', valueType: 'color', defaultValue: '#F5F5F7FF',
        },
        { 
            key: 'openBgColor', label: '开启底色', valueType: 'color', defaultValue: '#2FD16CFF',
        },

        { 
            key: 'closeBgImg', label: '关闭底图', valueType: 'string', defaultValue: '',
        },
        { 
            key: 'openBgImg', label: '开启底图', valueType: 'string', defaultValue: '',
        },

        { 
            key: 'closeBgColorBlock', label: '滑块关色', valueType: 'color', defaultValue: '#FFFFFFFF',
        },
        { 
            key: 'openBgColorBlock', label: '滑块开色', valueType: 'color', defaultValue: '#FFFFFFFF',
        },

        { 
            key: 'closeBgImgBlock', label: '滑块关图', valueType: 'string', defaultValue: '',
        },
        { 
            key: 'openBgImgBlock', label: '滑块开图', valueType: 'string', defaultValue: '',
        },

        { 
            key: 'bdSize', label: '边框大小', valueType: 'number', defaultValue: 0, unit: '像素',
        },
        { 
            key: 'closeBdColor', label: '边框关色', valueType: 'color', defaultValue: '#2FD16CFF',
        },
        { 
            key: 'openBdColor', label: '边框开色', valueType: 'color', defaultValue: '#2FD16CFF',
        },
        { 
            key: 'bdRadius', label: '圆角大小', valueType: 'number', defaultValue: 50, unit: '像素',
        },
        { 
            key: 'bdRadiusStyle', label: '圆角样式', valueType: 'string', defaultValue: '',
        },

        { 
            key: 'bdSizeBlock', label: '块边大小', valueType: 'number', defaultValue: 0, unit: '像素',
        },
        { 
            key: 'closeBdColorBlock', label: '块边关色', valueType: 'color', defaultValue: '#2FD16CFF',
        },
        { 
            key: 'openBdColorBlock', label: '块边开色', valueType: 'color', defaultValue: '#2FD16CFF',
        },
        { 
            key: 'bdRadiusBlock', label: '滑块圆角', valueType: 'number', defaultValue: 50, unit: '像素',
        },
        { 
            key: 'bdRadiusBlockStyle', label: '滑块圆角样式', valueType: 'string', defaultValue: '',
        },

        { 
            key: 'blockWidth', label: '滑块宽度', valueType: 'number', defaultValue: 30, unit: '像素',
        },
        { 
            key: 'blockScale', label: '滑块缩放', valueType: 'number', defaultValue: 80, unit: '%',
        },

        { 
            key: 'fitterBlur', label: '背景模糊', valueType: 'number', defaultValue: 5, unit: '像素',
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
            key: '__width', label: '宽度', valueType: 'number', defaultValue: 70,
            blockOptions: { generateBlock: false },
        },
        { 
            key: '__height', label: '高度', valueType: 'number', defaultValue: 30,
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
    events: [
        {
            key: 'onChange',
            label: '状态改变',
            params: [
                { key: 'value', label: '状态', valueType: 'boolean', }
            ],
        },
        { 
            key: 'on', 
            label: '被', 
            subTypes: [
                {
                    key: 'event',
                    dropdown: [
                        { label: '点击', value: 'Click' },
                        { label: '按下', value: 'Down' },
                        { label: '松开', value: 'Up' },
                        { label: '右键', value: 'ContextMenu' },
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
            blockOptions: { color: returnBlockColor, callMethodLabel: false },
        },
    ],
}


class Widget extends VisibleWidget {
    constructor(props) {
        super(props)
        Object.assign(this, props)
    }

    // 点击事件
    onEvent(name) {
        this.emit('on' + name)
    }

    onChange = (e) => {
        let newValue = e.target.checked ? 'open' : 'close'
        this.setProps({ status: newValue })
        let newValueBoolean = e.target.checked
        this.emit('onChange', newValueBoolean)
    }

    // 渲染控件
    render() { return (
        <div className={`Hor_${this.__widgetId}`}>
            
            <input
                type="checkbox"
                className={`Hor_${this.__widgetId}_switch`}
                data-screen-align={this.screenAlign}
                checked={this.status !== 'close'}
                onChange={ this.onChange }
                onClick={ () => this.onEvent('Click') }
                onMouseDown={ () => this.onEvent('Down') }
                onMouseUp={ () => this.onEvent('Up') }
                onContextMenu={ () => this.onEvent('ContextMenu') }
            />

            <style>
                {`
                    .Hor_${this.__widgetId} {
                        width: 100%;
                        height: 100%;
                        cursor: pointer;
                    }

                    .Hor_${this.__widgetId}_switch {
                        width: 100%;
                        height: 100%;
                        box-sizing: border-box;
                        -webkit-appearance: none;
                        appearance: none;
                        background-color: ${this.closeBgColor};
                        border-radius: ${this.bdRadius}px;
                        ${this.bdRadiusStyle?.length > 0 ? `border-radius: ${this.bdRadiusStyle};` : ''}
                        border: ${this.bdSize}px solid ${this.closeBdColor};
                        position: relative;
                        ${this.closeBgImg?.length > 0 ? `background-image: url("${this.closeBgImg}");` : ''}
                        ${this.closeBgImg?.length > 0 ? `background-size: cover;` : ''}
                        cursor: pointer;
                        pointer-events: auto;
                        backdrop-filter: blur(${this.fitterBlur}px);
                    }

                    .Hor_${this.__widgetId}_switch::before {
                        content: '';
                        position: absolute; 
                        top:0;
                        left:0;
                        width: ${this.blockWidth}px;
                        height: 100%;
                        background-color: ${this.closeBgColorBlock};
                        border-radius: ${this.bdRadiusBlock}px;
                        ${this.bdRadiusBlockStyle?.length > 0 ? `border-radius: ${this.bdRadiusBlockStyle};` : ''}
                        border: ${this.bdSizeBlock}px solid ${this.closeBdColorBlock};
                        transition: all 0.15s ease-in-out;
                        transform: scale(${this.blockScale / 100});
                        ${this.closeBgImgBlock?.length > 0 ? `background-image: url("${this.closeBgImgBlock}");` : ''}
                        ${this.closeBgImgBlock?.length > 0 ? `background-size: contain;background-repeat: no-repeat;` : ''}
                        cursor: pointer;
                    }

                    .Hor_${this.__widgetId}_switch:checked {
                        background-color: ${this.openBgColor};
                        border: ${this.bdSize}px solid ${this.openBdColor};
                        ${this.openBgImg?.length > 0 ? `background-image: url("${this.openBgImg}");` : ''}
                        ${this.openBgImg?.length > 0 ?`background-size: cover;` : ''}
                        cursor: pointer;
                    }

                    .Hor_${this.__widgetId}_switch:checked::before {
                        transform: scale(${this.blockScale / 100});
                        background-color: ${this.openBgColorBlock};
                        border: ${this.bdSizeBlock}px solid ${this.openBdColorBlock};
                        ${this.openBgImgBlock?.length > 0 ? `background-image: url("${this.openBgImgBlock}");` : ''}
                        ${this.openBgImgBlock?.length > 0 ? `background-size: contain;background-repeat: no-repeat;` : ''}
                        left: calc(100% - ${this.blockWidth}px);
                        cursor: pointer;
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