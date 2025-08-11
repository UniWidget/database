var navigator = this.window.parent.parent.navigator;
var document = this.document;
var window = this.window;
const types = {
    version:"1.0.0",
    icon: "https://static.codemao.cn/?hash=",
    title: "文件读取",
    type:"FILE_GETTER_WIDGET",
    isInvisibleWidget: true,
    isGlobalWidget: false,
    author:"borderRadius",
    modifiedTime:"2023/4/2 10:02:50",
    properties:[],
    methods: [{
        key:"opener",
        label:"请求打开文件(需在点击屏幕后才能使用)并读取为数据URL",
        params:[{
            key:"multiple",
            label:"多选",
            valueType:"boolean",
            defaultValue:false
        },{
            key:"type",
            label:"类型",
            valueType:"string",
            defaultValue:".png"
        },{
            key:"folder",
            label:"读取文件夹",
            valueType:"boolean",
            defaultValue:false
        }],
        blockOptions:{
            space:45,
            icon:null,
            generateBlock: true,
            inputsInline:true,
            color:"#66cccc"
        }
    },{
        key:"allimage",
        label:"所有图片类型",
        params:[],
        valueType:"string",
        blockOptions:{
            line:"类型",
            inputsInline:true
        }
    },{
        key:"allvideo",
        label:"所有视频类型",
        valueType:"string",
        params:[]
    },{
        key:"allaudio",
        label:"所有音频类型",
        valueType:"string",
        params:[]
    },{
        key:"alltext",
        label:"所有文本类型",
        valueType:"string",
        params:[]
    },{
        key:"isTextPlain",
        valueType:"boolean",
        label:"是否为纯文本文档",
        params:[{
            key:"e",
            label:"类型",
            valueType:"string",
            defaultValue:""
        }]
    },{
        key:"URL2Text",
        label:"文件内容转换为UTF-8文本",
        valueType:"string",
        params:[{
            key:"link",
            label:"",
            valueType:"string",
            defaultValue:""
        }]
    },{
        key:"ToBuffer",
        label:"文件内容转换为进制数值",
        valueType:"string",
        params:[{
            key:"a",
            label:"内容",
            valueType:"string",
            defaultValue:""
        },{
            key:"b",
            label:'进制数值(2-36)',
            valueType:"number",
            defaultValue:2
        }]
    }],
    events: [{
        key:"success",
        label:"每一个文件读取成功",
        params:[{
            key:"result",
            label:"读取内容",
            valueType:"string"
        },{
            key:"path",
            label:"读取文件夹的位置",
            valueType:"string"
        },{
            key:"name",
            label:"文件名",
            valueType:"string"
        },{
            key:"loc",
            label:"读取文件序号",
            valueType:"number"
        },{
            key:"size",
            label:"读取文件大小(KB)",
            valueType:"number"
        },{
            key:"type",
            label:"MIME类型",
            valueType:"string"
        },{
            key:"modified",
            label:"上次修改时间",
            valueType:"string"
        }]
    },{
        key:'fail',
        label:"读取失败",
        params:[{
            key:"name",
            label:"错误名称",
            valueType:"string"
        },{
            key:"message",
            label:"错误消息",
            valueType:"string"
        }]
    }],
}

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);  
    }
  opener(multiple,type,folder){
    var _this = this
    var a = document.createElement("input");
    a.type = 'file',
    a.accept  = type;
    a.multiple = Boolean(multiple);
    a.webkitdirectory = Boolean(folder)
    a.onchange = (e) =>{
       var files = e.target.files;
       console.log(files)
        for(var i = 0;i<files.length;i++){
            var file = files[i];
            var reader = new FileReader();
            reader.onload = () =>{
              _this.emit("success",reader.result,file.webkitRelativePath.length?file.webkitRelativePath:">_<无法读取文件夹,您是否没有指定文件夹？？",file.name,i+1,file.size/1024,file.type.length?file.type:">_<无法读取类型",new Date(file.lastModified).toLocaleString("zh-CN")
)
            }
            reader.onerror = () =>{
                _this.emit("fail",reader.error.name,reader.error.message)
            }
            reader.readAsDataURL(file)
        }
    }
    a.click()
  }


  allvideo(){
    return "video/*"
  }

  allaudio(){
    return "audio/*"
  }

  allimage(){
    return "image/*";
  }

  alltext(){
    return "text/*"
  }

  isTextPlain(e){
    return (e === "text/plain")?true:false
  }
 async URL2Text(link){
    try{
        const a = await window.fetch(link);
        return await a.text()
    }catch(e){
          this.widgetError("出错了:"+e)
    }
  }

  async ToBuffer(a,b){
    var eme = [];
    try{
         const z = await window.fetch(a);
         const buffer = await z.arrayBuffer();
         const Dataview = new DataView(buffer);
         for(var i = 1;i>=-1;i++){
            try{
           eme.push(Dataview.getUint8(i).toString(b))
            }catch{
               break
            }
         }
        return eme.join("")
    }catch(e){
       this.widgetError("出错了："+e)
    }
  }
}



exports.types = types;
exports.widget = Widget;