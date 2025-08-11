const types = {
  isInvisibleWidget: false,
  type: "MY_WIDGET",
  icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
  title: "我的控件",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: 50,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: '__height',
      label: '高度',
      valueType: 'number',
      defaultValue: 30,
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
  events: [{
      key: 'onClick',
      label: '当文件上传',
      params: [
        {
            key: 'base64String',
            label: 'b64',
            valueType: 'string',
        },],
      blockOptions: {
      color: '#ff9966',
      icon: 'https://waddle.coco-central.cn/static/img/logo/logo-white.svg/',
      generateBlock: true,
      inputsInline: true,
      space: 16,
  }}],
};
var document = this.document;
var window = this.window;
var emit=this;

class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.__width = props.__width;
    this.__height = props.__height;
  }
  onClick = () => {
    var emit=this.emit
    const fileInput=document.createElement('input');fileInput.type='file';fileInput.style.display='none';fileInput.addEventListener('change',async function(){const file=this.files[0];const base64String=await readFileAsBase64(file);emit('onClick',base64String)});document.body.appendChild(fileInput);fileInput.click();document.body.removeChild(fileInput)
  };
  
  render() {
    return(
      React.createElement("button", {  id: 'selectFilesButton',
      onClick: this.onClick,
    }, [React.createElement("div", {dangerouslySetInnerHTML: {__html: '上传文件'}}, null),])
  );
  }
}
function readFileAsBase64(file){return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=()=>reject(reader.error);reader.readAsDataURL(file)})}
exports.types = types;
exports.widget = Widget;
