const BLOCK_COLOR = '#A073FF';
const WIDGET_ICON = 'https://ocean.codemao.cn/appcraft/resource/icon/%E5%AA%92%E4%BD%93/%E5%BD%95%E9%9F%B3.svg';
const AUDIO_BLOCK_ICON = 'https://ocean.codemao.cn/appcraft/resource/icon/%E5%AA%92%E4%BD%93/%E5%BD%95%E9%9F%B3.svg';
const AUTHER = '神秘的RY';
const VERSION = '0.1';
const DEFAULT_BLOCK_OPTIONS = { /*icon: BLOCK_ICON,*/ color: BLOCK_COLOR, callMethodLabel: false, };

const types = {
    type : "AUDIO_WIDGET",
    icon: WIDGET_ICON,
    title: "录音控件",
    version: VERSION,
    auther: AUTHER,
    isInvisibleWidget: true,
	isGlobalWidget: true,
    properties: [],
    methods: [
        {
            key: "startRecord",
            label: "开始录音",
            tooltip: "开始录音",
            blockOptions: { ...DEFAULT_BLOCK_OPTIONS, icon: AUDIO_BLOCK_ICON},
            params: [],
        },{
            key: "stopRecord",
            label: "停止录音",
            tooltip: "停止录音",
            blockOptions: { ...DEFAULT_BLOCK_OPTIONS, icon: AUDIO_BLOCK_ICON},
            params: [],
        },{
            key: "getAudioRecorderDevice",
            label: "获取Media",
            tooltip: "获取一个新Media",
            blockOptions: { ...DEFAULT_BLOCK_OPTIONS, icon: AUDIO_BLOCK_ICON},
            params: [],
        },{
            key: "getAudio",
            label: "获取音频",
            tooltip: "获取最终的音频",
            valueType: "string",
            params: [],
        }
    ],	events: []
}

class Widget extends InvisibleWidget {
    constructor(props) {
		super(props);
        this.mDevice = null;
        this.mMediaStream = null;
        this.mAudioContext = null;
        this.mAudioFromMicrophone = null;
        this.mMediaRecorder = null;
        this.mStatus = "stop";
        this.mChunks = [];
        this.blob = ""
        this.onStopCallBack = (u) => {
            this.blob = u;
        };
	};
    
    getAudio = function(){
        return this.blob;
    }

    getAudioRecorderDevice = function(){
        //仅用来进行录音
        var constraints = { audio: true};
        // 老的浏览器可能根本没有实现 mediaDevices，所以我们可以先设置一个空的对象
        if(zzx.window.navigator.mediaDevices === undefined) {
            zzx.window.navigator.mediaDevices = {};
        }
        // 一些浏览器部分支持 mediaDevices。我们不能直接给对象设置 getUserMedia 
        // 因为这样可能会覆盖已有的属性。这里我们只会在没有getUserMedia属性的时候添加它。
        if(zzx.window.navigator.mediaDevices.getUserMedia === undefined) {
            zzx.window.navigator.mediaDevices.getUserMedia = function(constraints) {

                // 首先，如果有getUserMedia的话，就获得它
                var getUserMedia = zzx.window.navigator.webkitGetUserMedia || zzx.window.navigator.mozGetUserMedia;

                // 一些浏览器根本没实现它 - 那么就返回一个error到promise的reject来保持一个统一的接口
                if(!getUserMedia) {
                    return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
                }

                // 否则，为老的zzx.window.navigator.getUserMedia方法包裹一个Promise
                this.mDevice = new Promise(function(resolve, reject) {
                    getUserMedia.call(zzx.window.navigator, constraints, resolve, reject);
                });
            }
        }
        else
        {
            this.mDevice = zzx.window.navigator.mediaDevices.getUserMedia(constraints);
        }
        
        if(this.mDevice != null)
        {
            this.mDevice.then((mediaStream) => { this.openDeviceSuccess.call(this,mediaStream) },this.openDeviceFailure);
        }
    }
    
    addOnStopCallback = function (onStop)
    {
        this.onStopCallBack = onStop;
    }
    
    
    openDeviceSuccess = function(mediaStream)
    {
        this.mMediaStream = mediaStream;
    }
    
    openDeviceFailure = (reason) =>
    {
        let errorMessage;
        switch(reason.name) {
            // 用户拒绝
            case 'NotAllowedError':
            case 'PermissionDeniedError':
                errorMessage = '用户已禁止网页调用录音设备';
                break;
                // 没接入录音设备
            case 'NotFoundError':
            case 'DevicesNotFoundError':
                errorMessage = '录音设备未找到';
                break;
                // 其它错误
            case 'NotSupportedError':
                errorMessage = '不支持录音功能';
                break;
            default:
                errorMessage = '录音调用错误';
                zzx.window.console.log(error);
        }
        zzx.alert(errorMessage);
    }
    
    /**
    * 开始录音
    * @method startRecord
    * @for AudioRecorder
    * @return {Boolean}
    */
    startRecord = function(){
        let retValue = false;
        if(this.mStatus == "stop")
        {
            this.mChunks = [];
            if(this.mMediaRecorder == null)
            {
                this.mAudioContext = new zzx.window.AudioContext();
                //创建音频源
                this.mAudioFromMicrophone= this.mAudioContext.createMediaStreamSource(this.mMediaStream);
                //创建目的节点
                var destination = this.mAudioContext.createMediaStreamDestination();
                this.mMediaRecorder = new MediaRecorder(destination.stream);
                this.mAudioFromMicrophone.connect(destination);
                this.mMediaRecorder.ondataavailable = (audioData) => { this.onProcessData.call(this,audioData)};
                this.mMediaRecorder.onstop = (event) => { this.onStop.call(this,event)};
            }
            this.mMediaRecorder.start();
            this.mStatus = "record";
            retValue = true;
        }
        return retValue;
    }
    
    onProcessData = function(audioData)
    {
        this.mChunks.push(audioData.data);
    }
    
    onStop = function (event)
    {
        //var blob = new Blob(this.mChunks, { 'type' : 'audio/ogg; codecs=opus' });
        var blob = new Blob(this.mChunks, { 'type' : 'audio/mpeg' });
        var mp3URL = URL.createObjectURL(blob);
        if(this.onStopCallBack != null)
        {
            this.onStopCallBack(mp3URL);
        }
        
    }
        
    /**
    * 结束录音
    * @method stopRecord
    * @for AudioRecorder
    */
    stopRecord = function(){
        if(this.mStatus == "record")
        {
            this.mMediaRecorder.requestData();
            this.mMediaRecorder.stop();
            this.mStatus = "stop";
        }
    }
}


exports.types = types;
exports.widget = Widget;
