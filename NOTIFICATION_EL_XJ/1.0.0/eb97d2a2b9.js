var document = this.document;

const types = {
    type: 'NOTIFICATION_EL_XJ',
    icon: 'https://cn.vuejs.org/logo.svg',
    title: '高级通知-EL',
    version: '1.0.0',
    author: 'XJ王大哥(2357942846)',
    docs: {
        url: 'https://element-plus.org/zh-CN/component/notification.html',
    },
    isInvisibleWidget: true,
    isGlobalWidget: false,
    properties: [],
    methods: [
        {
            key: '弹出通知',
            label: '弹出通知',
            params: [
                {
                    key: '配置',
                    label: '配置',
                    valueType: ['object', 'string'],
                    defaultValue: '',
                },
            ],
        },
    ],
    events: [
        { key: 'onClick', label: '被点击', params: [] },
        { key: 'onClose', label: '被关闭', params: [] },
    ],
};

class Widget extends VisibleWidget {
    constructor(props) {
        super(props);

        // 引入3个脚本
        let src = document.createElement('link');
        src.rel = 'stylesheet';
        src.href = '//unpkg.com/element-plus/dist/index.css';
        src.onload = this.init;
        document.head.appendChild(src);

        src = document.createElement('script');
        src.src = '//unpkg.com/vue@3';
        src.onload = this.init;
        document.body.appendChild(src);

        src = document.createElement('script');
        src.src = '//unpkg.com/element-plus';
        src.onload = this.init;
        document.body.appendChild(src);
    }

    弹出通知 = 配置 => {
        const widget = this;
        ElementPlus.ElNotification(
            Object.assign(配置, {
                onClick: () => widget.emit('onClick'),
                onClose: () => widget.emit('onClose'),
            })
        );
    };
}

exports.types = types;
exports.widget = Widget;
