
const types = {
    isInvisibleWidget: true,
    type: "HTTP_ADDONS_WIDGET",
    icon: "https://ocean.codemao.cn/appcraft/resource/icon/%E5%9F%BA%E7%A1%80/Wi-Fi.svg",
    title: "高级HTTP请求",
    version: "1.0.0",
    isGlobalWidget: true,
    properties: [{
        key:"coo",
        label:"发送cookie获取凭据",
        valueType:"string",
        defaultValue:"same-origin",
        dropdown:[
         {label:"不发送",value:'omit'},
         {label:'同源发送',value:'same-origin'},
         {label:'总是发送',value:"include"}
        ]
    },{
        key:'req',
        label:"请求模式",
        valueType:"string",
        defaultValue:"same-origin",
        dropdown:[
         {label:"无返回请求",value:'no-cors'},
         {label:'同源请求',value:'same-origin'},
         {label:'跨域请求',value:"cors"}
        ]
    },{
        key:"met",
        label:"请求方法",
        valueType:"string",
        defaultValue:"GET",
        dropdown:[
            {label:"GET(仅请求资源,安全)",value:"GET"},
            {label:"POST(发送资源)",value:"POST"},
            {label:"PUT(无副作用发送资源)",value:"PUT"},
            {label:"OPTIONS(获取通讯选项)",value:"OPTIONS"},
            {label:"HEAD(请求标头)",value:"HEAD"}
        ]
    },{
        key:"content",
        label:"请求类型",
        valueType:"string",
        defaultValue:"",
        dropdown:[
            {label:'HTML',value:"text/html;charset=utf-8"},
            {label:"json",value:"application/json"},
            {label:"纯文本",value:"text/plain"},
            {label:"CSS",value:"text/css"},
            {label:"JS",value:"text/javascript"},
            {label:"图片",value:"image/*"},
            {label:"视频",value:"video/*"},
            {label:"音频",value:"audio/*"},
            {label:"文本",value:"text/*"},
            {label:"其它二进制数据",value:"application/*"},
            {label:"不指示",value:""}
        ]
    },{
        key:"re",
        label:"返回类型",
        valueType:"string",
        defaultValue:"text",
        dropdown:[
            {label:"纯文本(UTF-8)",value:"text"},
            {label:"JSON(可能会报错)",value:"json"},
            {label:"base64链接",value:"base64"},
            {label:"二进制数值列表(0-256)",value:"uint8"},
        ]
    },{
        key:"cache",
        label:"缓存请求",
        valueType:"string",
        defaultValue:"default",
        dropdown:[
            {label:"自动选择",value:"default"},
            {label:"直接访问,不写入缓存",value:"no-store"},
            {label:"直接访问,写入缓存",value:"reload"},
            {label:"最好使用缓存",value:"no-cache"},
            {label:"强迫使用缓存(没有会报错)",value:"only-if-cached"}
        ]
    },{
        key:"red",
        label:"重定向时操作",
        valueType:"string",
        defaultValue:"follow",
        dropdown:[
            {label:"继续访问",value:"follow"},
            {label:"报错",value:"error"},
            {label:"手动操作",value:"manual"}
        ]
    },{
        key:"out",
        label:"超时时间(手机端可能不支持)",
        valueType:"number",
        defaultValue:8000,
        unit:"毫秒"
    }],
    methods: [{
        key:'fetch',
        label:"请求资源",
        params:[{
            key:"url",
            label:'请求链接',
            valueType:"string",
            defaultValue:""
        },{
            key:"send",
            label:"发送内容(文本,base64,JSON,二进制数值列表均可)",
            valueType:["string","object"],
            defaultValue:""
        }],
        blockOptions:{
            inputsInline:false
        }
    }],
    events: [{
        key:"success",
        label:"成功访问",
        params:[{
            key:"data",
            label:"响应内容",
            valueType:["string","array","object"]
        },{
            key:"status",
            label:"状态代码",
            valueType:"number"
        },{
            key:"type",
            label:"响应类型",
            valueType:"string"
        }]
    },{
        key:"error",
        label:"失败访问",
       params:[{
         key:"err",
         label:"错误消息",
         valueType:"string"
       },{
        key:"s",
        label:"响应代码",
        valueType:"number"
       }]
    },{
        key:"out",
        label:"响应超时",
        params:[]
    }],
};

class Widget extends InvisibleWidget {

    constructor(props) {
        super(props);
        if(!'globalThis' in window){return}
        this.coo = props.coo;
        this.req = props.req;
        this.met = props.met;
        this.content = props.content === ""?undefined:props.content
        this.re = props.re;
        this.cache = props.cache;
        this.red = props.red;
        this.out = Number(props.out) === NaN?undefined:Number(props.out);
    }

  async fetch(url,send = ""){
    
    var data = undefined
     if(send instanceof Array&&typeof send[0] === "number"){
        data = (new Blob([new Uint8Array(send)])).stream()
     }else if(typeof send === "string"){
         if(send === ""){}
         else if(send.includes("data")&&send.includes("base64")){
            data = this.Str2Uint8Array(send)
         }else{
            data = (new Blob([send])).stream()
         }
     }
      const req = new Request(url,{
        mode:this.req,
        method:this.met,
        credentials:this.coo,
        headers:this.content?(new Headers()).append("Accept",this.content):undefined,
        body:data?data:undefined,
        cache:this.cache,
        redirect:this.red,
        signal:AbortSignal.timeout?AbortSignal.timeout(this.out?this.out:999999999):undefined
      })
    try{
      switch(this.re){
        case "json":
            this.emit("success",await res.json(),res.status)
            break
        case "text":
            this.emit("success",await res.text(),res.status)
            break;
        case "base64":
            const blob = await res.blob();
            this.emit("success",await this.Blob2Base64(blob),res.status)
            break;
        default:
            const ab = await res.arrayBuffer();
            this.emit("success",Array.from(new Uint8Array(ab)),res.status)
            break;
        
      }
    }catch(e){
       this.emit("error",e.message,res?res.status:0)
    }
    }

    Blob2Base64(blob = new Blob){
        const reader = new FileReader();
        return new Promise(e =>{
            reader.onload = () =>{
                e(reader.result)
            }
            reader.readAsDataURL(blob)
        })
    }

    Str2Uint8Array(str = ""){
        const array = []
        for(var i =0;i<= str.length;i++){
            array.push(str[i].charCodeAt())
        }
        return (new Blob([new Uint32Array(array)])).stream()
    }


}

exports.types = types;
exports.widget = Widget;
