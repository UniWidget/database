//2024.2.6鐣ユ敼鍔 
var id = `${Math.floor(Math.random()*1e20)}ReducedRadius`;
var document = globalThis.document;
var navigator = globalThis.navigator;
var window = globalThis;
const types = {
    isInvisibleWidget: false,
    type: "CAMERA_REALTIME_WIDGET",
    icon: "icon-widget-camera",
    title: "瀹炴椂鐢婚潰",
    version: "1.0.1",
    author:"ReducedRadius",
    docs:{url:"https://dashedradius.netlify.app/widget"},
    isGlobalWidget: false,
    properties: [{
        key: '__width',
        label: '鎾斁鍣ㄥ搴 ',
        valueType: 'number',
        defaultValue: 200,
        blockOptions: {
          generateBlock: false,
        },
      },
      {
        key: '__height',
        label: '鎾斁鍣ㄩ珮搴 ',
        valueType: 'number',
        defaultValue: 150,
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
      },{
        key:"scale",
        label:"澶у皬(涓嶅彲鎴彇)",
        valueType:"number",
        defaultValue:100,
        unit:"%"
      },{
        key:"rotate",
        label:"鏃嬭浆(涓嶅彲鎴彇)",
        valueType:"number",
        defaultValue:0,
        unit:"搴 "
      },{
        key:"br",
        label:"鎺т欢鍦嗚",
        valueType:"number",
        defaultValue:3,
      }],
    methods: [{
        key:"shot",
        label:"鎵撳紑鎽勫儚澶 ",
        params:[{
            key:"frame",
            label:"瑙嗛娴佸抚鐜 ",
            labelAfter:"FPS",
            valueType:"number",
            defaultValue:30
        },{
            key:"audio",
            label:'鍚敤闊抽',
            valueType:"boolean",
            defaultValue:true
        },{
           key:"width",
           label:"鎴彇瑙嗛楂 ",
           labelAfter:"px",
           valueType:"number",
           defaultValue:1920
        },{
            key:"height",
            label:"鎴彇瑙嗛瀹 ",
            labelAfter:"px",
            valueType:"number",
            defaultValue:1080
         },{
            key:"sample",
            label:"闊抽閲囨牱鐜 ",
            valueType:"number",
            defaultValue:44100
         },{
            key:"noise",
            label:"鑷姩鍑忓櫔",
            valueType:"boolean",
            defaultValue:false
         },{
            key:"echo",
            label:"鏅鸿兘娑堥櫎鍥為煶",
            valueType:"boolean",
            defaultValue:true
         },{
            key:"dir",
            label:"鎽勫儚澶存湞鍚 ",
            valueType:"string",
            defaultValue:"user",
            dropdown:[
                {label:"浣跨敤鑰 ",value:'user'},
                {label:"椋庢櫙",value:"environment"},
                {label:"浣跨敤鑰呬笖宸︿晶鍋忕Щ",value:"left"},
                {label:"浣跨敤鑰呬笖鍙充晶鍋忕Щ",value:"right"}
            ]
         },{
            key:"auto",
            label:"鑷姩闊抽澧炵泭",
            valueType:"boolean",
            defaultValue:false
         }],
         blockOptions:{
            inputsInline:false,
            line:"鍒濆鍖 "
         }
    },{
        key:"shots",
        label:"鎷嶇収(闇€瑕佹墦寮€鎽勫儚澶 )骞惰繑鍥炲浘鐗 (姘镐箙閾炬帴)",
        valueType:"string",
        params:[{
            key:"flash",
            label:"闂厜鐏 ",
            valueType:"string",
            defaultValue:"auto",
            dropdown:[
                {label:'鑷姩',value:"auto"},
                {label:'鎵撳紑',value:"flash"},
                {label:"鍏抽棴",value:"off"}
            ]
        },{
            key:"red",
            label:"闃测€滅孩鐪尖€ ",
            valueType:"boolean",
            defaultValue:false
        }],
        blockOptions:{
            line:"鎷嶇収"
        }
    },{
        key:"pic",
        label:"鎷嶇収(闇€瑕佹墦寮€鎽勫儚澶 )骞惰繑鍥炲浘鐗 (涓存椂閾炬帴)",
        valueType:"string",
        params:[{
            key:"flash",
            label:"闂厜鐏 ",
            valueType:"string",
            defaultValue:"auto",
            dropdown:[
                {label:'鑷姩',value:"auto"},
                {label:'鎵撳紑',value:"flash"},
                {label:"鍏抽棴",value:"off"}
            ]
        },{
            key:"red",
            label:"闃测€滅孩鐪尖€ ",
            valueType:"boolean",
            defaultValue:false
        }]
    },{
        key:"close",
        label:'鍏抽棴鎽勫儚澶 ',
        params:[]
    },{
        key:"record",
        label:"寮€濮嬪綍鍒惰棰 ",
        params:[{
            key:"codecs",
            label:"瑙嗛鍘嬬缉",
            valueType:"string",
            dropdown:[
                {label:'鏅€歸ebm瑙嗛',value:'video/webm'},
                {label:"H264鍘嬬缉",value:"video/webm;codecs=h264"},
                {label:'VP8鍘嬬缉',value:"video/webm;codecs=vp8"},
                {label:"VP9鍘嬬缉",value:"video/webm;codecs=vp9"},
                {label:"闊抽",value:"audio/webm"},
                {label:'鑷姩閫夋嫨',value:"auto"}
            ]
        }],
        blockOptions:{
            line:'褰曞埗'
        }
    },{
        key:"pause",
        label:'鏆傚仠褰曞埗瑙嗛',
        params:[]
    },{
        key:"resume",
        label:"鎭㈠褰曞埗鐘舵€ ",
        params:[]
    },{
        key:"stop",
        label:'鍋滄褰曞埗瑙嗛',
        params:[]
    },{
        key:"cut",
        label:'鎴彇瑙嗛鏁版嵁浣嗕繚鎸佸綍鍒 ',
        params:[]
    },{
        key:'getRecordTime',
        label:'鑾峰彇褰撳墠褰曞埗鏃堕棿(绉 )',
        params:[],
        valueType:"number"
    },{
        key:"state",
        label:"鏄惁鍦ㄥ綍鍒 ?",
        valueType:"boolean",
        params:[]
    },{
        key:"check",
        label:"妫€鏌ヨ澶囨槸鍚︽敮鎸佸綍鍒 ?",
        valueType:"boolean",
        params:[]
    },{
        key:'mute',
        label:"璁剧疆鎾斁闈欓煶",
        params:[{
            key:"a",
            label:"",
            valueType:"boolean",
            defaultValue:true
        }]
    }],
    events: [{
        key:"click",
        label:"鎾斁鍣ㄨ鐐瑰嚮",
        params:[]
    },{
        key:"dev",
        label:"鐢ㄦ埛鎺ュ叆鎴栨嫈鍑哄獟浣撹澶 ",
        params:[]
    },{
        key:'data',
        label:'鐢熸垚褰曞埗鏂囦欢瀹屾瘯(鍖呮嫭鎴彇)',
        params:[{
            key:"url",label:'姘镐箙閾炬帴',valueType:"string"
        },{
            key:"blob",label:'涓存椂閾炬帴',valueType:"string"
        },{
            key:'size',label:"鏂囦欢澶у皬(MB)",valueType:"number"
        },{
            key:"stamp",label:"褰曞埗鏃堕暱",valueType:"number"
        }]
    },{
        key:"err",
        label:"褰曞埗鍙戠敓閿欒",
        params:[]
    }],
};

class Widget extends VisibleWidget {
    constructor(props) {
        super(props);
        this.stream = null;
        this.scale = props.scale
        this.__width = props.__width;
        this.rotate = props.rotate
    this.__height = props.__height;
    this.br =props.br;
    this.start = undefined
    navigator.mediaDevices.ondevicechange = () =>this.emit("dev");
    this.widgetLog("娆㈣繋浣跨敤ReducedRadius鐨勬帶浠 !")
    }

    render(){
        return (<video id={id} autoplay style={{
            transform:`scale(${this.scale/100}) rotate(${this.rotate}deg)`,
            borderRadius:this.br+"px",
            objectFit:"cover"
        }} width={this.__width} height={this.__height} onClick={()=>{this.emit("click")}}></video>)
    }

 async  shot(frame,audio,width,height,sample = 44100,noise,echo,dir,auto){
    if(!document.getElementById(id)){
        setTimeout(e =>{this.shot(frame,audio,width,height,sample,noise,echo,dir,auto)},100)
        return;
    }
      this.stream = await navigator.mediaDevices.getUserMedia({
            video:{
                frameRate:frame,
                width,
                height,
                facingMode:dir
            },
            audio:audio?{
                echoCancellation:echo,
                noiseSuppression:noise,
                sampleRate:sample,
                autoGainControl:auto
            }:undefined
        })
        document.getElementById(id).srcObject = this.stream
        try{
        document.getElementById(id).play()
        }catch{
            this.widgetError("鐓х浉鏈烘垚鍔熸墦寮€,浣嗘槸璇峰鐐瑰嚮鍑犳鎾斁鍣 ,鍚﹀垯鏃犳硶鐩存帴鏄剧ず瑙嗛鍥惧儚")
        }
    }
   async shots(flash,red){
        if(this.stream){
            var a = new ImageCapture(this.stream.getVideoTracks()[0])
         const blob = await  a.takePhoto({
                fillLightMode:flash,
                redEyeReduction:red
            })
            return await new Promise(resolve =>{
                var afl = new FileReader;
                afl.onload = e =>resolve(afl.result)
                afl.readAsDataURL(blob)
            })
        }
    }
 

    async pic(flash,red){
        if(this.stream){
            var a = new ImageCapture(this.stream.getVideoTracks()[0])
         const blob = await  a.takePhoto({
                fillLightMode:flash,
                redEyeReduction:red
            })
            return globalThis.URL.createObjectURL(blob)
        }
     }

    close(){
        if(this.stream)this.stream.getTracks().forEach(e =>e.stop())
    }

    record(codecs){
      if(this.stream){
        this.recorder = new MediaRecorder(this.stream,{
            mimeType:MediaRecorder.isTypeSupported(codecs)?codecs:undefined
        });
        this.start = Date.now()
        this.recorder.ondataavailable = async(e) =>{
              this.emit("data",URL.createObjectURL(e.data),
             await (function(blob){ 
                return  new Promise(resolve =>{
                var afl = new FileReader;
                afl.onload = e =>resolve(afl.result)
                afl.readAsDataURL(blob)
            })})(e.data),
            e.data.size/(1024*1024)
            ,e.timecode)
        }
        this.recorder.onerror = () =>this.emit("err")
        this.recorder.start()
      }
    }

    pause(){
        if(this.recorder && this.recorder.state === "recording"){
            this.recorder.pause()
        }
    }
    resume(){
        if(this.recorder && this.recorder.state === "paused"){
            this.recorder.resume()
        }
    }

    stop(){
        if(this.recorder && this.recorder.state === "recording"){
            this.recorder.stop()
            this.start = undefined
        }
    }

    cut(){
        if(this.recorder&&this.recorder.state === "recording"){
            this.recorder.requestData()
        }
    }
  
    getRecordTime(){
        return typeof this.start === "number"?(Date.now()-this.start)/1000:void 0
    }

    state(){
        return this.recorder.state === "recording"
    }
    check(){
        this.supports =  navigator.mediaDevices.getSupportedConstraints();
        return !!(window.ImageCapture&&this.supports.autoGainControl&&this.supports.frameRate&&this.supports.width&&window.MediaRecorder&&window.HTMLVideoElement&&window.URL.createObjectURL&&window.Promise&&window.BlobEvent)
    }

    mute(a){
        document.getElementById(id).muted = Boolean(a)
    }



}


types["methods"].forEach(e =>{
    if(!e.blockOptions){
        e.blockOptions = {
            color:"#49bef8",
        }
    }
})

exports.types = types;
exports.widget = Widget;