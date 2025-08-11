window = this.window
window.dynamicLoadJs = (url) => {
    return new Promise((resolve, reject) => {
        try {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;
            head.appendChild(script);
            resolve(true)
        }catch{
            reject(false)
        }
    })

}
navigator = this.navigator
document = this.document
const types = {
    isInvisibleWidget: false,
    type: "PEERJS_RECEIVER_WIDGET",
    icon: "https://public.coco-central.cn/waddle/2/waddle2.svg",
    title: "PeerJS 接收方控件",
    version: "1.0.0",
    isGlobalWidget: false,
    properties: [
        {
            key: '__width',
            label: '宽度',
            valueType: 'number',
            defaultValue: 200,
            blockOptions: {
                generateBlock: false,
            },
        },
        {
            key: '__height',
            label: '高度',
            valueType: 'number',
            defaultValue: 200,
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
    methods: [
        {
            key: 'getPeerID',
            label: '获取 Peer ID',
            params: [],
            valueType: 'string',
        },
    ],
    events: [{
        key: 'done',
        label: '连接成功',
        params: [],
    
    }],
};

class WebRTCReceiverWidget extends InvisibleWidget {
    constructor(props) {
        super(props);
        this.__width = props.__width;
        this.__height = props.__height;
        this.wsLink = props.wsLink;
        this.peer = null;
        window.dynamicLoadJs("https://unpkg.com/peerjs@1.5.2/dist/peerjs.min.js")
    }

    render() {
        return (
            <video
                id="reci"
                muted={true}
                style={{
                    width: this.__width,
                    height: this.__height
                }}
            ></video>
        );
    }

    startLive() {
        const localVideo = document.getElementById("reci");
        localVideo.onloadeddata = () => {
            console.log('R:播放视频');
            localVideo.play();
        }


        console.log('R:信令通道创建中......');
        const peer = new Peer();

        peer.on('open', (id) => {
            console.log(`R: Peer 连接成功，ID: ${id}`);
            this.peer = peer;
            this.emit('done')
        });

        peer.on('error', (err) => {
            console.error('R: Peer 连接出错', err);
        });

        peer.on('connection', (conn) => {
            console.log('R: 收到连接请求');
            conn.on('data', (data) => {
                console.log('R: 收到数据', data);
            });
        });

        peer.on('call', (call) => {
            navigator.mediaDevices.getUserMedia({ video: true, audio: true })
                .then((stream) => {
                    localVideo.srcObject = stream;
                    call.answer(stream); // Answer the call with an A/V stream.
                    call.on('stream', (remoteStream) => {
                        // Show stream in some video/canvas element.
                        console.log('R: 收到远程流');
                        console.log(remoteStream)
                        localVideo.srcObject = remoteStream;
                    });
                })
                .catch((err) => {
                    console.error('R: 获取媒体设备失败', err);
                });
        });
    }

    getPeerID() {
        return this.peer ? this.peer.id : null;
    }
}

types['methods'].push({
    key: 'startLive',
    label: '开始接收',
    params: [],
});

exports.types = types;
exports.widget = WebRTCReceiverWidget;
