var document = this.document;
var window = this.window;
var navigator = this.navigator;
var history = this.history;
const types = {
    isInvisibleWidget: false,
    type: "MEDIA_WIDGET",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "摄像机",
    version: "1.0.0",
    isGlobalWidget: false,
    properties: [
        {
            key: '__width',
            label: '宽度',
            valueType: 'number',
            defaultValue: 480,
            blockOptions: {
                generateBlock: false,
            },
        },
        {
            key: '__height',
            label: '高度',
            valueType: 'number',
            defaultValue: 320,
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
types['methods'].push({
    key: 'run',
    label: '开始捕获',
    params: [],


})
types['methods'].push({
    key: 'photo',
    label: '截图',
    params: [],
    valueType:"string"

})
function tool_getUserMedia(constraints, success, error) {
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia(constraints).then(success).catch(error);
    } else if (navigator.webkitGetUserMedia) {
        navigator.webkitGetUserMedia(constraints, success, error);
    } else if (navigator.mozGetUserMedia) {
        navigator.mozGetUserMedia(constraints, success, error);
    } else if (navigator.getUserMedia) {
        navigator.getUserMedia(constraints, success, error);
    }
}

/*
作者：先生也会来迟
链接：https://juejin.cn/post/7042218406128549902
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。*/
class Widget extends VisibleWidget {
    constructor(props) {
        super(props);
        this.__width = props.__width;
        this.__height = props.__height;

    }
    render() {
        return (
            <video id={"MEDIA_" + this.__widgetId} autoplay style={{
                height: "100%",
                width: "100%",
            }}></video>
        );
    }
    run() {
        var video = document.getElementById("MEDIA_" + this.__widgetId);
        tool_getUserMedia({ video: { width: 480, height: 320 } }, (stream) => {
            var CompatibleURL = window.URL || window.webkitURL;
            try {
                video.src = CompatibleURL.createObjectURL(stream);
            } catch (e) {
                video.srcObject = stream;
            }
            video.play();
            this.widgetLog("获取成功");
        }, (error) => {
            this.widgetError("无法获取视频流");
            console.log(error);
        })
    }
    photo(){
        var video = document.getElementById("MEDIA_" + this.__widgetId);
        var canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
		canvas.height = video.videoHeight; 
		canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);  // 图片大小和视频分辨率一致
        var image = canvas.getContext('2d').canvas.toDataURL('image/png');
        return image;
    }
}

exports.types = types;
exports.widget = Widget;
