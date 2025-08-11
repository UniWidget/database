const antd = require('antd-mobile')
var document = this.document

const types = {
    type: "ANTD_XJ_IMAGE_VIEWER",
    icon: "icon-widget-image",
    title: "图片查看器-ANTD",
    version: '1.0.0',
    author: 'XJ王大哥(2357942846)',
    isInvisibleWidget: false,
    isGlobalWidget: false,
    properties: [
        {
            key: 'images',
            label: '图片列表',
            valueType: ['string', 'number', 'boolean', 'array', 'color', 'object',],
            defaultValue: [],
        },
        {
            key: 'defaultIndex',
            label: '默认显示第几张图片',
            valueType: 'number',
            defaultValue: 1,
        },
        // {
        //     key: 'renderFooterText',
        //     label: '底部按钮文案',
        //     valueType: 'string',
        //     defaultValue: '取消',
        // },
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
            key: 'onIndexChange',
            label: '被切换',
            params: [{key: 'index',label: '序号',valueType: 'number'}],
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
        this.images = props.images
        this.defaultIndex = props.defaultIndex
        this.renderFooterText = props.renderFooterText
        this.visible = props.visible

    }
    render() {
        if (typeof this.images !== 'object') this.images = []
        return(
            <antd.ImageViewer.Multi
                images={this.images}
                defaultIndex={this.defaultIndex-1}
                renderFooterText={this.renderFooterText}
                visible={this.visible}
                onIndexChange={(i) => this.emit('onIndexChange',i+1)}
                onClose={() => this.emit('onClose')}
                getContainer={document.querySelector('body')}
            />
        )
    }
}

exports.types = types
exports.widget = Widget