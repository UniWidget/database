const antd = require('antd-mobile');
var document = this.document;

const types = {
    type: 'ANTD_XJ_IMAGE_VIEWER_PLUS',
    icon: 'icon-widget-image',
    title: '图片查看器Plus-ANTD',
    version: '1.0.0',
    author: 'XJ王大哥(2357942846)',
    isInvisibleWidget: true,
    isGlobalWidget: false,
    properties: [],
    methods: [
        {
            key: 'show',
            label: '展示',
            params: [
                {
                    key: 'images',
                    label: '图片列表',
                    valueType: ['string', 'array'],
                    defaultValue: [],
                },
                {
                    key: 'defaultIndex',
                    label: '默认显示第几张',
                    valueType: 'number',
                    defaultValue: 1,
                },
            ],
        },
        {
            key: 'close',
            label: '关闭',
            params: [],
        },
    ],
    events: [
        {
            key: 'onIndexChange',
            label: '被切换',
            params: [{ key: 'index', label: '序号', valueType: 'number' }],
        },
        {
            key: 'onClose',
            label: '被关闭',
            params: [],
        },
    ],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
    }

    show(images, defaultIndex) {
        const widget = this;
        antd.ImageViewer.Multi.show({
            images,
            defaultIndex: defaultIndex - 1,
            getContainer: document.body,
            onClose() {
                widget.close();
            },
            onIndexChange(i) {
                widget.emit('onIndexChange', i + 1);
            },
        });
    }

    close() {
        antd.ImageViewer.clear();
        this.emit('onClose');
    }
}

for (let i of types.methods) i.blockOptions = { ...i.blockOptions, callMethodLabel: false };

exports.types = types;
exports.widget = Widget;
