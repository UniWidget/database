var navigator = this.window.parent.parent.navigator;
var document  = this.document;
var window = this.window;
// auther = "borderRadius";
const color = "#9730879c";
const icon  = "https://creation.codemao.cn/716/appcraft/IMAGE_ugRwomDBM_1680403147203.png"
const types = {
    isInvisibleWidget: true,
    type: "RECORDER_WIDGET",
    icon,
    title: "录音控件",
    version: "1.0.0",
    isGlobalWidget: true,
    properties: [{
        key:"o",
        label:"录制完后自动播放",
        valueType:"boolean",
        defaultValue:true
    },{
        key:"name",
        label:"下载文件的文件名",
        valueType:"string",
        defaultValue:"音频.webm"
    },{
        key:"vol",
        label:"播放音量大小",
        valueType:"number",
        defaultValue:90
    }],
    methods: [{
        key:"Open",
        label:"打开麦克风",
        params:[{
            key:"a",
            label:"音频比特率",
            valueType:"number",
            defaultValue:128000
        }],
        blockOptions:{
            callMethodLabel:false,
            line:"初始化",
            color,
            icon
        }
    },{
        key:"Close",
        label:"关闭麦克风",
        params:[],
        blockOptions:{
            callMethodLabel:false,
            icon,color
        }
    },{
        key:"start",
        label:"开始",
        params:[],
        blockOptions:{
            line:"状态管理&读取",
            callMethodLabel:false,
            color
        }
    },{
        key:"end",
        label:"停止",
        params:[],
        blockOptions:{
            callMethodLabel:false,
            color
        }
    },{
        key:"pause",
        label:"暂停",
        params:[],
        blockOptions:{
            callMethodLabel:false,
            color
        }
    },{
        key:"continue",
        label:"继续",
        params:[],
        blockOptions:{
            callMethodLabel:false,
            color
        }
    },{
        key:"getState",
        label:"是否在录制",
        valueType:"boolean",
        params:[],
        blockOptions:{
            callMethodLabel:false,
            color
        }
    },{
        key:"getData",
        tooltip:"您没有必要直接使用该积木来获取音频文件，停止录音后将自动截取文件",
        label:"截取并生成文件",
        params:[],
        blockOptions:{
            line:"辅助功能",
            callMethodLabel:false,
            color
        }
    },{
        key:"usable",
        label:"能否使用该控件",
        valueType:"boolean",
        params:[],
        blockOptions:{
            callMethodLabel:false,
            color,
            icon
        }
    },{
        key:"DownloadMedia",
        tooltip:"注意：社区端无法使用该功能，会报错！！！",
        label:"下载已经录制好的音频(谨慎使用)",
        params:[],
        blockOptions:{
         callMethodLabel:false,
         color
        }
    }],
    events: [{
        key:"err",
        label:"出错",
        params:[{
            key:"e",
            label:"错误信息",
            valueType:"string"
        }],
        blockOptions:{
            color,
            icon
        }
    },{
        key:"data",
        label:"文件生成完毕",
        params:[{
            key:"a",
            label:"音频文件",
            valueType:"string"
        },{
            key:"b",
            label:"音频大小",
            valueType:"number"
        }],
        blockOptions:{
           icon
        }
    },{
        key:"stop",
        label:"停止录制",
        params:[],
        blockOptions:{
            icon
         }
    },{
        key:"resume",
        label:"继续录制",
        params:[]
        ,
        blockOptions:{
            icon
         }
    },{
        key:"start",
        label:"开始录制",
        params:[],
        blockOptions:{
            icon
         }
    },{
        key:"pause",
        label:"暂停录制",
        params:[],
        blockOptions:{
            icon
         }
    }],
};



class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
        this.at = null;
        this.o = props.o;
        this.source = null;
        this.name = props.name;
        this.stream = null;
    }
     usable(){
        if(!Navigator.prototype.mediaDevices.getUserMedia||!MediaRecorder.prototype||!FileReader.prototype){
            return false;
        }else{
            return true
        }
     }

    async Open(a){
        try{
    var b = await navigator.mediaDevices.getUserMedia({audio:true,video:false});
    this.stream = b
        }catch(e){
            this.emit("err",e)
            return;
        }
       this.at = new MediaRecorder(b,a?{
        audioBitsPerSecond:Number(a)
       }:null);
       this.at.onerror = () =>{
        this.emit("err","媒体录制失败")
       }
       this.at.onstop = () =>{
        this.emit("stop")
       }
       this.at.onpause = () =>{
         this.emit("pause")
       }
       this.at.onresume = () =>{
        this.emit("resume")
       }
       this.at.onstart = () =>{
        this.emit("start")
       }
       this.at.ondataavailable = (e) =>{
         var reader = new FileReader();
         reader.onload = () =>{
            this.source = reader.result
            var a = document.createElement("audio");
            a.src = reader.result;
            if(this.o){
            a.autoplay = true;
            a.muted = false;
            a.play()
           }
           a.onloadedmetadata = () =>{
           this.emit("data",reader.result,e.data.size)
           }
         }
         reader.readAsDataURL(e.data)
       }
    }

    start(){
        try{this.at.start()}catch(e){this.emit("err",e)}
    }

    end(){
        try{this.at.stop()}catch(e){this.emit("err",e)}
    }

    pause(){
        try{this.at.pause()}catch(e){this.emit("err",e)}
    }

    continue(){
        try{this.at.resume()}catch(e){this.emit("err",e)}
    }

    getState(){
        return this.at.state === "recording"?true:false;
    }

    getData(){
        try{this.at.requestData()}catch(e){this.emit("err",e)}
    }

    DownloadMedia(){
        try{
      var a = window.parent.parent.document;
        }catch(e){
          this.emit("err",e)
          return;
        }
      var anchor = a.createElement("a");
      anchor["href"] = this.source?this.source:null;
      anchor["download"] = this.name;
      anchor.click()
    }

    Close(){
        this.stream.getAudioTracks()[0].stop()
    }
}



exports.types = types;
exports.widget = Widget;