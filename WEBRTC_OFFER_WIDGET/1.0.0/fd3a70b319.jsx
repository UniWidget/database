window = this.window
navigator = this.navigator
document = this.document
const types = {
    isInvisibleWidget: false,
    type: "WEBRTC_OFFER_WIDGET",
    icon: "https://public.coco-central.cn/waddle/2/waddle2.svg",
    title: "WebRTC 发起方",
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
    methods: [],
    events: [],
};

class Widget extends VisibleWidget {
    constructor(props) {
        super(props);
        this.__width = props.__width;
        this.__height = props.__height;
        this.wsLink = props.wsLink;
        
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
}
types['properties'].push({
    key: 'wsLink',
    label: 'websocket链接',
    valueType: 'string',
    defaultValue: 'ws://localhost:8080',

})
types['methods'].push({
    key: 'startLive',
    label: '开始推流',
    params: [],
})
Widget.prototype.startLive = function () {
    let localVideo = document.getElementById("offer")
    localVideo.onloadeddata = () => {
        console.log('O:播放本地视频');
        localVideo.play();
    }
    console.log('O:信令通道创建中......');
	const socket = new window["Web"+"Socket"](this.wsLink);
    socket.onopen = () => {
        console.log('O:信令通道创建成功！');
    }
    socket.onerror = () => console.error('O:信令通道创建失败！');
    socket.onmessage = e => {
        const { type, sdp, iceCandidate } = JSON.parse(e.data)
        if (type === 'answer') {
            peer.setRemoteDescription(new RTCSessionDescription({ type, sdp }))
            .catch((e)=>{console.error(`O:${e}`)})
        } else if (type === 'answer_ice') {
            peer.addIceCandidate(iceCandidate)
            .catch((e)=>{console.error(`O:${e}`)})
        } else if (type === 'offer') {
            startLive(new RTCSessionDescription({ type, sdp }))
        } else if (type === 'offer_ice') {
            peer.addIceCandidate(iceCandidate)
            .catch((e)=>{console.error(`O:${e}`)})
        }
    };

    const PeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    !PeerConnection && console.error('O:浏览器不支持WebRTC！');
    const peer = new PeerConnection();
    peer.onicecandidate = e => {
        if (e.candidate) {
            console.log('O:搜集并发送候选人');
            socket.send(JSON.stringify({
                type: `offer_ice`,
                iceCandidate: e.candidate
            }));
        } else {
            console.log('O:候选人收集完成！');
        }
    };

    async function startLive (offerSdp) {
        let stream;
        try {
            console.log('O:尝试调取本地摄像头/麦克风');
            stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            console.log('O:摄像头/麦克风获取成功！');
            localVideo.srcObject = stream;
        } catch {
            console.error('O:摄像头/麦克风获取失败！');
            return;
        }

        console.log(`O:------ WebRTC 发起方流程开始 ------`);
        console.log('O:将媒体轨道添加到轨道集');
        stream.getTracks().forEach(track => {
            peer.addTrack(track, stream);
        });

        if (!offerSdp) {
            console.log('O:创建本地SDP');
            const offer = await peer.createOffer();
            await peer.setLocalDescription(offer);
            
            console.log(`O:传输发起方本地SDP`);
            socket.send(JSON.stringify(offer));
        } else {
            console.log('O:接收到发送方SDP');
            await peer.setRemoteDescription(offerSdp);

            console.log('O:创建接收方（应答）SDP');
            const answer = await peer.createAnswer();
            console.log(`O:传输接收方（应答）SDP`);
            socket.send(JSON.stringify(answer));
            await peer.setLocalDescription(answer);
        }
    }
    startLive()
}
exports.types = types;
exports.widget = Widget;