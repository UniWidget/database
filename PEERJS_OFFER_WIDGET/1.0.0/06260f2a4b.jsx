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
    type: "PEERJS_OFFER_WIDGET",
    icon: "https://public.coco-central.cn/waddle/2/waddle2.svg",
    title: "PeerJS 发起方",
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
            key: 'startLive',
            label: '开始推流',
            params: [],
        },
        {
            key: 'getPeerID',
            label: '获取 Peer ID',
            params: [],
            valueType: 'string',
        },
        {
            key: 'sendCallToPeer',
            label: '向指定 Peer 发送 Call',
            params: [
                {
                    key: 'peerID',
                    label: '目标 Peer ID',
                    valueType: 'string',
                    defaultValue: '',
                },
            ],
        },
    ],
    events: [{
        key: 'done',
        label: '连接成功',
        params: [],
    
    }],
};

class PeerJSOfferWidget extends VisibleWidget {
    constructor(props) {
        super(props);
        this.__width = props.__width;
        this.__height = props.__height;
        this.peer = null;
        window.dynamicLoadJs("https://unpkg.com/peerjs@1.5.2/dist/peerjs.min.js")
    }

    render() {
        return (
            <video
                id="offer"
                muted={true}
                style={{
                    width: this.__width,
                    height: this.__height
                }}
            ></video>
        );
    }

    startLive() {
        let localVideo = document.getElementById("offer");
        localVideo.onloadeddata = () => {
            console.log('O:播放视频');
            localVideo.play();
        }
        console.log('O:创建 PeerJS 连接......');
        const peer = new Peer();
        

        peer.on('open', (id) => {
            console.log(`O: Peer 连接成功，ID: ${id}`);
            this.peer = peer;
            this.emit('done')
        });

        peer.on('error', (err) => {
            console.error('O: Peer 连接出错', err);
        });

        peer.on('connection', (conn) => {
            console.log('O: 收到连接请求');
            conn.on('data', (data) => {
                console.log('O: 收到数据', data);
            });
        });

    }

    getPeerID() {
        return this.peer ? this.peer.id : null;
    }

    sendCallToPeer(peerID) {
        if (this.peer) {
            navigator.mediaDevices.getUserMedia({ video: true, audio: true })
                .then((stream) => {
                    const call = this.peer.call(peerID, stream);
                    console.log(`O: 向 Peer ${peerID} 发送 Call`);
                    call.on('stream', (remoteStream) => {
                        // Show stream in some video/canvas element.
                        console.log('O: 收到远程流');
                        const localVideo = document.getElementById("offer");
                        console.log(remoteStream)
                        localVideo.srcObject = remoteStream;
                        console.log(localVideo.srcObject)
                    });
                })
                .catch((err) => {
                    console.error('O: 获取媒体设备失败', err);
                });
        } else {
            console.error('O: Peer 未连接');
        }
    }
}

exports.types = types;
exports.widget = PeerJSOfferWidget;
