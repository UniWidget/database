window = this.window
navigator = this.navigator
document = this.document
const types = {
    isInvisibleWidget: false,
    type: "WEBRTC_RECIEVER_WIDGET",
    icon: "https://public.coco-central.cn/waddle/2/waddle2.svg",
    title: "WebRTC 接收",
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
                id="receiver"
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
    label: '开始接受',
    params: [],
})
Widget.prototype.startLive = function () {
    let remoteVideo = document.getElementById("receiver")
    remoteVideo.onloadeddata = () => {
        console.log('R:播放对方视频');
        remoteVideo.play();
    }
    console.log('R:信令通道创建中......');
    const socket = new window["Web"+"Socket"](this.wsLink);
    socket.onopen = () => {
        console.log('R:信令通道创建成功！');
    }
    socket.onerror = () => console.error('R:信令通道创建失败！');
    socket.onmessage = async e => {
        const { type, sdp, iceCandidate } = JSON.parse(e.data);
        
        if (type === 'offer') {
            await peer.setRemoteDescription(new RTCSessionDescription({ type, sdp }));
            startLive();
        } else if (type === 'offer_ice') {
            // Check if remote description is set before adding ICE candidates
            if (peer.remoteDescription) {
                try {
                    await peer.addIceCandidate(iceCandidate);
                    console.log('R: ICE candidate added successfully.');
                } catch (error) {
                    console.error(`R: Error adding ICE candidate - ${error}`);
                }
            } else {
                console.warn('R: Remote description not set yet. ICE candidate will be added after setting the remote description.');
                // You may want to store the ICE candidates and add them later
            }
        } else if (type === 'answer') {
            await peer.setRemoteDescription(new RTCSessionDescription({ type, sdp }));
        } else if (type === 'answer_ice') {
            try {
                await peer.addIceCandidate(iceCandidate);
                console.log('R: ICE candidate added successfully.');
            } catch (error) {
                console.error(`R: Error adding ICE candidate - ${error}`);
            }
        }
    };
    

    const PeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    !PeerConnection && console.error('R:浏览器不支持WebRTC！');
    const peer = new PeerConnection();

    peer.ontrack = e => {
        if (e && e.streams) {
            console.log('R:收到对方音频/视频流数据...');
            remoteVideo.srcObject = e.streams[0];
        }
    };

    peer.onicecandidate = e => {
        if (e.candidate) {
            console.log('R:搜集并发送候选人');
            socket.send(JSON.stringify({
                type: `receiver_ice`,
                iceCandidate: e.candidate
            }));
        } else {
            console.log('R:候选人收集完成！');
        }
    };

    async function startLive (offerSdp) {
    
        let stream;
        try {
            console.log('R:尝试调取本地摄像头/麦克风');
            stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            console.log('R:摄像头/麦克风获取成功！');
            remoteVideo.srcObject = stream;
        } catch(e) {
            console.error('R:摄像头/麦克风获取失败！:'+String(e));
            return;
        }

        console.log(`R:------ WebRTC 接收方流程开始 ------`);
        console.log('R:将媒体轨道添加到轨道集');
        stream.getTracks().forEach(track => {
            peer.addTrack(track, stream);
        });

        if (!offerSdp) {
            console.log('R:创建本地SDP');
            const offer = await peer.createOffer();
            await peer.setLocalDescription(offer);
            
            console.log(`R:传输发起方本地SDP`);
            socket.send(JSON.stringify(offer));
        } else {
            console.log('R:接收到发送方SDP');
            await peer.setRemoteDescription(offerSdp);

            console.log('R:创建接收方（应答）SDP');
            const answer = await peer.createAnswer();
            console.log(`R:传输接收方（应答）SDP`);
            socket.send(JSON.stringify(answer));
            await peer.setLocalDescription(answer);
        }
    }
}
exports.types = types;
exports.widget = Widget;