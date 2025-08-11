
function dropdownG(a,b){
  if(a&&b)return{label:a,value:b}
}
var document = globalThis.document
var id = "brwidget"+crypto.randomUUID();
const types = {
    isInvisibleWidget: false,
    type: "CODE_EDITOR_WIDGET",
    icon: "icon-settings",
    title: "代码编辑器",
    author:"borderRadius",
    time:"2023-6-15",
    version: "1.0.0",
    isGlobalWidget: false,
    properties: [{
        key: '__width',
        label: '宽度',
        valueType: 'number',
        defaultValue: 400,
        blockOptions: {
          generateBlock: false,
        },
      },
      {
        key: '__height',
        label: '高度',
        valueType: 'number',
        defaultValue: 250,
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
        }
    },{
        key:"borderRadius",
        label:"圆角",
        valueType:"number",
        defaultValue:3
    },{
        key:"value",
        label:"文本内容",
        valueType:"string",
        editorType:"TextArea",
        defaultValue:[`// Hello,world!\n
        alert("23344")\n
        class a{\n
          constructor(){\n
            \n
          }\n
        }
        `,`//By borderRadius`,`//欢迎使用本控件`,`/**现在都${new Date().toLocaleString()}了，你在干嘛呢？*/`][Math.round(Math.random()*4)]
        
    },{
      key:"font",
      label:"字体大小",
      valueType:"number",
      defaultValue:15
    },{
      key:'color',
      label:"常规字体色",
      valueType:"color",
      defaultValue:"#000000"
    },{
      key:"lang",
      label:"编程语言",
      valueType:"string",
      dropdown:[dropdownG("C/C++","ace/mode/c_cpp"),dropdownG('Java',"ace/mode/java"),dropdownG("Markdown","ace/mode/markdown"),dropdownG("javascript","ace/mode/javascript"),dropdownG("typescript","ace/mode/typescript"),dropdownG("python","ace/mode/python"),dropdownG("Objective-C","ace/mode/objectivec"),dropdownG("html","ace/mode/html"),dropdownG("css","ace/mode/css"),dropdownG("普通文本","ace/mode/text"),dropdownG("VBscript","ace/mode/vbscript")],
      defaultValue:"ace/mode/javascript"
    },{
      key:"bgcolor",
      label:"背景色",
      valueType:"color",
      defaultValue:"#ffffff"
    }],
    methods: [{
      key:"undo",
      label:"撤销",
      params:[]
    },{
      key:"redo",
      label:"还原",
      params:[]
    },{
      key:"getValue",
      label:"获取内容",
      params:[],
      valueType:"string"
    },{
      key:"Fullscreen",
      label:"全屏编辑",
      params:[]
    }],
    events: [{
      key:"change",
      label:"内容被修改",
      params:[{
        key:"ins",
        label:"删除了内容？",
        valueType:"boolean"
      }]
    },{
      key:"click",label:"被点击",params:[]
    },{
      key:"focus",label:"被聚焦",params:[]
    },{
      key:"blur",label:"失去焦点",params:[]
    },{
      key:"scroll",label:"滑动滚轮",params:[]
    },{
      key:"pointup",label:"松开手指或鼠标",params:[]
    },{
      key:'pointdown',label:"按下鼠标",params:[]
    },{
      key:"update",label:"输入输入法完成",params:[{key:"t",label:"输入文本",valueType:'string'}]
    },{
      key:'fssuccess',label:"全屏成功",params:[]
    },{
      key:"copy",label:"复制文本",params:[{key:"text",label:"传输文本",valueType:'string'}]
    },{
      key:"paste",label:"粘贴文本",params:[{key:"text",label:"传输文本",valueType:'string'}]
    }],
};

class Widget extends VisibleWidget{
    constructor(p){
       super(p);
       (function() {
        var callbacks = [],
            timeLimit = 50,
            open = false;
        setInterval(loop, 20);
        function loop() {
            var startTime = new Date();
            debugger;
            if (new Date() - startTime > timeLimit) {
                if (!open) {
                    callbacks.forEach(function(fn) {
                        fn.call(null);
                    });
                }
                open = true;
                globalThis.alert('别用F12扒我了');
            } else {
                open = false;
            }
        }
    })()
       if(!globalThis.navigator.onLine){
           alert("您的设备暂时无网络，代码编辑器将不会生效")
           this.widgetError("您的设备暂时无网络，代码编辑器将不会生效")
           return;
       }
       this.borderRadius = p.borderRadius;
       this.value = p.value;
       this.width = p.__width;
       this.height = p.__height;
       this.editor = undefined;
       this.fontSize = p.font;
       this.color= p.color;
       this.lang = p.lang;
       this.bgcolor = p.bgcolor;
       this.scale = p.scale;
       var script = document.createElement("script");
       script.src = "https://unpkg.com/ace-builds@1.22.1/src/ace.js";
       document.body.appendChild(script)
       globalThis.onoffline  = () =>{
           this.widgetError("网络已断开!")
       }
      }
    
     
     render(){
        return (<div id={id} style={{
            borderRadius:this.borderRadius,
            height:this.height,
            width:this.width,
            fontSize:this.fontSize,
            color:this.color,
            backgroundRepeat:"no-repeat",
            backgroundColor:this.bgcolor,
            transform:`scale(${this.scale})`,
            transition:"all 0.3s ease-in-out"
        }} onLoad={this.init()}>
        </div>)
     }

    init(){
      if(this.editor){return;}
      setTimeout(()=>{
        document.getElementById(id).addEventListener("compositionend",e=>{
          this.emit("update",e.data)
        })
        document.getElementById(id).addEventListener("pointerdown",()=>{this.emit("pointerdown")});
        setTimeout(()=>{
        document.getElementById(id).onwheel = ()=>{this.emit("scroll")};},500)
        document.getElementById(id).addEventListener("pointerup",()=>{this.emit("pointerup")})
        document.getElementById(id).addEventListener("copy",(e)=>{
          var data = e.clipboardData;
          this.emit("copy",data.getData("text/plain"))
        })
        document.getElementById(id).addEventListener("paste",(e)=>{
          var data = e.clipboardData;
          this.emit("paste",data.getData("text/plain"))
        })
        this.editor = globalThis.ace.edit(id);
        this.editor.getSession().setMode(this.lang||"ace/mode/javascript");
        this.editor.on("change",(e)=>{
            this.emit("change",e.action === "remove")
        })
        this.editor.on("click",(e)=>{
          this.emit("click")
        })
        this.editor.on("focus",(e)=>{
          this.emit("focus")
        });
        this.editor.on("blur",(e)=>{
          this.emit("blur")
        })
        
      },200)
    }

    set value(e){
      setTimeout(()=>{
        try{
        if(this.editor){
          this.editor.setValue(String(e))
        }else if(document.getElementById(id)&&!document.getElementById(id).innerHTML.includes("<div")){
          document.getElementById(id).innerText = String(e)
        }else{

        }
      }catch{

      }
      },200)
    }
    
    get value(){
      this.widgetWarn("请不要以此方式获取编辑器值")
    }

   undo(){
    this.editor.undo()
   }

redo(){
  this.editor.redo()
}
  set lang(e){
    if(!this.editor)return;
setTimeout(()=>{
      this.editor.getSession().setMode(e)
},600)
  }
  
  get lang()
{if(!this.editor)return;
 return this.editor.getSession().getMode().$id
}


rem(){
  this.editor.remove()
}
selectAll(){
  this.editor.selectAll()
}
hasFocus(){
  return this.editor.isFocused()
}
gotoLine(a){
  this.editor.gotoLine(Number(a),0,true)
}
Text(){
  return this.editor.getSelectedText()
}

async webget(b){
  if(typeof b !== "string"||b.length === 0||!this.editor){
    return;
  }
  try{
  const ass = await globalThis.fetch(b);
  this.editor.setValue(await ass.text())
  }catch(e){
    this.widgetError("控件获取链接时出错，可能被阻止，详细信息请见"+e.stack)
  }

}
insert(a){
  this.editor.insert(a)
}

toLink(){
  return URL.createObjectURL(new Blob([this.editor.getValue()],{type:"text/plain;charset=utf-8"}))
}

getValue(){
  return this.editor?this.editor.getValue():undefined
}

Fullscreen(){
  try{
  document.getElementById(id).requestFullscreen().then(e =>{
     this.emit("fssuccess")
  })
  }catch(e){
     this.widgetError('全屏失败')
  }
}
}

types["methods"].push({
  key:"rem",
  label:"删除选择内容",
  params:[]
})
types["methods"].push({
  key:"selectAll",
  label:"全选",
  params:[]
})
types["methods"].push({
  key:"hasFocus",
  label:"存在焦点？",
  params:[],
  valueType:'boolean'
})
types["methods"].push({
  key:"gotoLine",
  label:"前往列",
  params:[{key:"a",label:'列序号',valueType:"number",defaultValue:2}]
})

types["methods"].push({
  key:"insert",
  label:"插入文本",
  params:[{key:"a",label:'文本',valueType:"string",defaultValue:"114514 ()"}]
})

types["methods"].push({
  key:"toLink",
  label:"输出文本为链接",
  params:[],
  valueType:"string"
})

types["methods"].push({
  key:"webget",
  label:"写入网页内容",
  params:[{key:"b",label:"网址",valueType:"string",defaultValue:""}],
})
globalThis.widget = Widget;
exports.types = types;
exports.widget = Widget;