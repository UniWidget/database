var document = this.document;
var window = this.window;
const types = {
    isInvisibleWidget: false,
    type: "SCAN_QRCODE",
    icon: "https://static.codemao.cn/whale/HkHfooFjY",
    title: "调用摄像头扫码",
    version: "1.0.0",
    isGlobalWidget: false,
    properties: [{
        key: '__width',
        label: '宽度',
        valueType: 'number',
        defaultValue: 300,
        blockOptions: {
            generateBlock: false,
        },
    },
    {
        key: '__height',
        label: '高度',
        valueType: 'number',
        defaultValue: 300,
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

class Widget extends VisibleWidget {
    constructor(props) {
        super(props);
        this.__width = props.__width;
        this.__height = props.__height;
        this.html5QrCode = null;
    }
    render() {
        return (
            React.createElement("div", {
                style: {
                    width: "100%",
                    height: "100%",
                },
                dangerouslySetInnerHTML: {
                    __html: ('<div id="qr2reader"></div>')
                }
            }, null)
        );

    }

    useCamera = () => {
        this.html5QrCode = new Html5Qrcode("qr2reader");
        let config = { fps: 20 };
        Html5Qrcode.getCameras()
            .then((devices) => {
                if (devices && devices.length) {
                    let cameraId = "";
                    if (devices.length == 1) {
                        cameraId = devices[0].id;
                    } else {
                        cameraId = devices[1].id;
                    }
                    if (cameraId) {
                        this.html5QrCode
                            .start(
                                { deviceId: { exact: cameraId } },
                                config,
                                (decodedText) => { this.emit('getcode', decodedText); }
                            )
                            .catch((err) => {
                                this.emit('error', err);
                            });
                    }
                } else {
                    this.html5QrCode.start(
                        { facingMode: "environment" } || {
                            facingMode: { exact: "environment" },
                        },
                        config,
                        (decodedText) => { this.emit('getcode', decodedText); }
                    );

                }
            })
            .catch((err) => {
                this.emit('error', err);
            });


    }
    stop = () => {
        this.html5QrCode.stop()
            .then((suc) => {

            })
            .catch((err) => {
                this.emit('error', err);
            })
    }


}

types['events'].push({
    key: 'getcode',
    label: '获取二维码数据',
    params: [{
        key: 'getcode',
        label: '数据',
        valueType: 'string',
        defaultValue: '',
    }],

}, {
    key: 'error',
    label: '发生错误',
    params: [{
        key: 'error',
        label: '原因',
        valueType: 'string',
        defaultValue: '',
    }],

})
types['methods'].push({
    key: 'useCamera',
    label: '开始扫码',
    params: [],
}, {
    key: 'stop',
    label: '关闭扫码界面',
    params: [],
},)

function importScript(scriptUrl) {
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", scriptUrl);
    document.body.appendChild(script);
}
importScript("//static.pgaot.com/Assets/js/html5-qrcode.min.js")
exports.types = types;
exports.widget = Widget;