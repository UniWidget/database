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
    title: "菜单",
    type: "CCFLUENT_MENU_WIDGET",
    icon: "https://static.bcmcdn.com/coco/player/unstable/BJQC406YJe.image/png",
    docs: { url: 'https://ccwidget.top/' },
    version: "1.0.0",
    isInvisibleWidget: false,
    isGlobalWidget: false,
    hasAnyWidget: true,
    properties: [
        { key: '__width', label: '宽度', valueType: 'number', defaultValue: 150 },
        { key: '__height', label: '高度', valueType: 'number', defaultValue: 230 },
        {
            key: 'menuItems',
            label: '菜单项',
            valueType: 'string',
            editorType: 'TextArea',
            defaultValue: '<fluent-menu-item id="undo">撤销</fluent-menu-item><fluent-menu-item id="redo">恢复</fluent-menu-item><fluent-divider></fluent-divider><fluent-menu-item role="menuitemcheckbox" id="ccfluent">CCFluent</fluent-menu-item><fluent-menu-item role="menuitemcheckbox" id="menu">菜单</fluent-menu-item><fluent-divider></fluent-divider><fluent-menu-item role="menuitemradio" id="start">开始</fluent-menu-item><fluent-menu-item role="menuitemradio" id="end">结束</fluent-menu-item>'
        }
    ],
    events: [
        {
            key: 'onMethodClick',
            label: '的操作项被点击',
            params: [
                { key: 'itemName', label: 'ID', valueType: 'string' }
            ]
        },
        {
            key: 'onSwitchClick',
            label: '的开关项被点击',
            params: [
                { key: 'itemName', label: 'ID', valueType: 'string' },
                { key: 'itemValue', label: '状态', valueType: 'boolean' }
            ]
        },
        {
            key: 'onRadioClick',
            label: '的单选项被点击',
            params: [
                { key: 'itemName', label: 'ID', valueType: 'string' }
            ]
        }
    ],
    methods: [
        {
            key: "cleanAllItem",
            label: '所有项',
            params: [],
            blockOptions: { callMethodLabel: '清空', color: methodBlockColor }
        },
        {
            key: "appendItem",
            label: '添加',
            params: [
                { key: 'itemHtml', label: '项', valueType: 'string', defaultValue: '<fluent-menu-item>撤销</fluent-menu-item>' },
            ],
            blockOptions: { callMethodLabel: '为', color: methodBlockColor }
        },
        {
            key: "createItem",
            label: '',
            valueType: 'string',
            params: [
                {
                    key: 'itemType',
                    label: '',
                    dropdown: [
                        { label: '操作项', value: 'menuitem' },
                        { label: '开关项', value: 'menuitemcheckbox' },
                        { label: '单选项', value: 'menuitemradio' }
                    ]
                },
                { key: 'itemName', label: '', valueType: 'string', defaultValue: '打开(O)' },
                { key: 'itemID', label: 'ID', valueType: 'string', defaultValue: 'open' },
            ],
            blockOptions: { callMethodLabel: "创建", color: createBlockColor }
        },
        {
            key: "createDivider",
            label: '分隔符',
            valueType: 'string',
            params: [],
            blockOptions: { callMethodLabel: "创建", color: createBlockColor }
        },
        {
            key: "getWidgetId",
            label: '的 ID',
            valueType: 'string',
            params: [],
            blockOptions: { callMethodLabel: false, color: returnBlockColor }
        }
    ]
}


class Widget extends VisibleWidget {
    constructor(props) {
        super(props)
        Object.assign(this, props)
    }
    cleanAllItem() {
        this.setProps({ "menuItems": "" })
    }
    appendItem(itemHtml) {
        let menuItems = this.menuItems;
        menuItems += itemHtml;
        this.setProps({ "menuItems": menuItems });
    }
    createItem(itemType, itemName, itemID) {
        let itemHtml = `<fluent-menu-item role="${itemType}" id="${itemID}">${itemName}</fluent-menu-item>`;
        this.appendItem(itemHtml);
    }
    createDivider() {
        this.appendItem('<fluent-divider></fluent-divider>');
    }
    // 渲染控件
    render() {
        return (
            <div className={`CCFluent_${this.__widgetId}`}>
                {
                    React.createElement("fluent-menu", {
                        className: `CCFluent_${this.__widgetId}`,
                        onClick: (e) => {
                            if (e.target.localName === 'fluent-menu-item') {
                                let role = e.target.getAttribute('role');
                                // let itemText = e.target.innerText;
                                let itemText = e.target.getAttribute('id');
                                switch (role) {
                                    case 'menuitem':
                                        this.emit('onMethodClick', itemText);
                                        break;
                                    case 'menuitemcheckbox':
                                        let value = e.target.attributes.hasOwnProperty('checked');
                                        this.emit('onSwitchClick', itemText, value);
                                        break;
                                    case 'menuitemradio':
                                        this.emit('onRadioClick', itemText);
                                        break;
                                }
                            }
                        },
                        dangerouslySetInnerHTML: {
                            __html: this.menuItems
                        }
                    })
                }
                <style>
                    {`
                        .CCFluent_${this.__widgetId} {
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