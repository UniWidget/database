//控件初始化
var chunks=[];
window = this.window;
window.alert('控件使用前需注意：如需打开屏幕就录制，请务必在模块前加上等待1秒！')
document = this.document;
navigator = this.navigator;
navigator.mediaDevices.getUserMedia = navigator.mediaDevices.getUserMedia || navigator.mediaDevices.webkitGetUserMedia || navigator.mediaDevices.mozGetUserMedia || navigator.mediaDevices.msGetUserMedia;
//控件开始
const types = {
    type: "USER_MEDIA_WIDGET",
    icon: "https://ocean.codemao.cn/appcraft/resource/icon/媒体/磁带.svg",
    title: "用户媒体控件",
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [
        {
            key: 'mode',
            label: '模式',
            valueType: 'string',
            defaultValue: 'audio',
            dropdown: [
                { label: '音频', value: 'audio' },
                { label: '视频', value: 'video' }
            ]
        }
    ],
    methods: [
        {
            key: 'start',
            label: '开始录制',
            params: [],
        },
        {
            key: 'stop',
            label: '停止录制',
            params: [],
        },
        {
            key: 'pause',
            label: '暂停录制',
            params: [],
        },
        {
            key: 'go_on',
            label: '继续录制',
            params: [],
        },
        {
            key: 'getBlob',
            label: '获取BlobURL',
            params: [],
            valueType: 'string',
        },
        {
            key: 'removeBlob',
            label: '清除BlobURL',
            params: [],
        }
    ],
    events: [
        {
            key: 'onError',
            label: '出错',
            params: [],
        },
        {
            key: 'onGetAccess',
            label: '成功获取权限',
            params: [],
        }
    ]
}
class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
        this.mode=props.mode;
        if(navigator.mediaDevices) {
            navigator.mediaDevices.getUserMedia(props.mode=="audio"?{audio:true}:{audio:true,video:true})
            .then((stream) => {
                this.MediaRecorder = new MediaRecorder(stream);
                // 开始
                this.emit('onGetAccess')
                // 添加事件监听
                this.MediaRecorder.onstart = () => {
                    console.log('start', this.MediaRecorder.state);
                }
                this.MediaRecorder.onstop = () => {
                    console.log('stop', this.MediaRecorder.state);
                    // 数据块合成blob对象
                    var blob = new Blob(chunks, props.mode=="audio"?{type:'video/webm'}:{type: 'audio/webm;codecs=opus'});
                    console.log(blob)
                    this.url = (window.URL || webkitURL).createObjectURL(blob);
                    console.log(this.url)
                }
                this.MediaRecorder.ondataavailable = (e) => {
                    console.log('data');
                    console.log(e);
                    chunks.push(e.data);
                }
            }).catch((e) => {
                    console.log(e);
                    this.emit('onError')
            })
        }
    }
    start = () => {
        this.MediaRecorder.start();
    }

    stop = () => {
        this.MediaRecorder.stop();
    }

    pause = () => {
        this.MediaRecorder.pause();
    }

    go_on = () => {
        this.MediaRecorder.resume();
    }

    getBlob = () => {
        return this.url;
    }

    removeBlob = () => {
        (window.URL || webkitURL).revokeObjectURL(this.url)
    }
}


exports.widget = Widget;
exports.types = types;
