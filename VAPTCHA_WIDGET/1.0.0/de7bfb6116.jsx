var document=this.document
var ele = document.createElement("script")
ele.setAttribute("src","https://liulyxandy-codemao.github.io/vaptcha-onestep/main.autoload.js")
document.getElementsByTagName("body")[0].appendChild(ele)
var window = this.window;
const types = {
  isInvisibleWidget: false,
  type: "VAPTCHA_WIDGET",
  icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
  title: "VAPTCHA验证控件",
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
    },
  ],
  methods: [/*{
    key: 'listen',
    label: '监听',
    params: [],


}*/],
  events: [{
    key: 'success',
    label: '完成验证',
    params: [],

}],
};

class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.__width = props.__width;
    this.__height = props.__height;
    window.addEventListener("message",this.success())
    window.onmessage=this.success()
    var q = setInterval(()=>{
      if(window.isDoneVaptcha){
        this.success();
        clearInterval(q);
      }
    },500)
  }

  success=()=>{
    this.emit("success")
    
  }
  
  render() {
    return(
      React.createElement("div", {  id: 'vaptcha',
    }, [React.createElement("p", {}, ['请稍等，正在加载中...']),])
  );

  }

}

exports.types = types;
exports.widget = Widget;
