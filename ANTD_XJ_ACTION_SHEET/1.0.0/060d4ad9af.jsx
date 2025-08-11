const antd = require('antd-mobile')
var document = this.document

const types = {
    type: "ANTD_XJ_ACTION_SHEET",
    icon: "icon-dialog",
    title: "弹出菜单-ANTD",
    version: '1.0.0',
    author: 'XJ王大哥(2357942846)',
    isInvisibleWidget: false,
    isGlobalWidget: false,
    properties: [
        {
            key: 'tip',
            label: '使用教程',
            valueType: 'string',
            defaultValue: '数据的格式为字典列表，字典参数见https://mobile.ant.design/zh/components/action-sheet#action',
            editorType: 'TextArea',
            generateBlock: false,
        },
        {
            key: 'actions',
            label: '数据',
            valueType: ['string', 'number', 'boolean', 'array', 'color', 'object',],
            defaultValue: [],
        },
        {
            key: 'closeOnMaskClick',
            label: '点击背景后关闭',
            valueType: 'boolean',
            defaultValue: true,
        },
        {
            key: 'closeOnAction',
            label: '点击选项后关闭',
            valueType: 'boolean',
            defaultValue: true,
        },
        {
            key: 'cancelText',
            label: '取消按钮文案',
            valueType: 'string',
            defaultValue: '取消',
        },
        {
            key: 'extra',
            label: '顶部文案',
            valueType: 'string',
            defaultValue: '',
        },
        {
            key: 'visible',
            label: '是否开启',
            valueType: 'boolean',
            defaultValue: false,
        },
    ],
    methods: [],
    events: [
        {
            key: 'onAction',
            label: '被选择',
            params: [
                {key: 'text',label: '文案',valueType: 'string'},
                {key: 'index',label: '序号',valueType: 'number'},
                {key: 'actions',label: '数据',valueType: ['string', 'number', 'boolean', 'array', 'color', 'object',]},
            ],
        },
        {
            key: 'onClose',
            label: '被关闭',
            params: [],
        },
    ],
};

class Widget extends VisibleWidget {
    constructor(props) {
        super(props)
        this.actions = props.actions
        this.closeOnMaskClick = props.closeOnMaskClick
        this.closeOnAction = props.closeOnAction
        this.cancelText = props.cancelText
        this.extra = props.extra
        this.visible = props.visible
    }
    render() {
        if (typeof this.actions !== 'object') this.actions = []
        return(
            <>
                <antd.ActionSheet
                    actions={this.actions}
                    closeOnMaskClick={this.closeOnMaskClick}
                    closeOnAction={this.closeOnAction}
                    cancelText={this.cancelText}
                    extra={this.extra}
                    visible={this.visible}
                    onAction={(a,n) => this.emit('onAction',a.text,n,a)}
                    onClose={() => this.emit('onClose')}
                />
            </>
        )
    }
}

exports.types = types
exports.widget = Widget