const types = {
  isInvisibleWidget: false,
  type: "PERFECTBUTTON_TYPE1_HAOZI_CANSEE",
  icon: "https://tse2-mm.cn.bing.net/th/id/OIP-C.6PjSxuVBHj7VqIjvO9qZ2AHaHa?w=203&h=203&c=7&r=0&o=5&dpr=2.3&pid=1.7",
  title: "全局按钮美化扩展-动态Button-可见-2.0.0",
  version: "2.0.0",
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
  methods: [],
  events: [],
};

class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.__width = props.__width;
    this.__height = props.__height;
    this.nr=props.nr;
  this.wordcolor=props.wordcolor;
  this.wordnew=props.wordnew;
  this.background=props.background;
  this.backgroundnew=props.backgroundnew;

  }
  render() {
    return(
      React.createElement("div", {  onClick: this.onclick.bind(this),
    dangerouslySetInnerHTML: {__html: (['<button>',this.nr,'</button>','<style>button {  padding: 15px 25px;  border: unset;  border-radius: 15px;  color:',this.wordcolor,';  z-index: 1;  background:',this.background,';  position: relative;  font-weight: 1000;  font-size: 17px;  -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);  box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);  transition: all 250ms;  overflow: hidden; }  button::before {  content: "";  position: absolute;  top: 0;  left: 0;  height: 100%;  width: 0;  border-radius: 15px;  background-color: ',this.backgroundnew,';  z-index: -1;  -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);  box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);  transition: all 250ms }  button:hover {  color:',this.wordnew,'; }  button:hover::before {  width: 100%; }</style>'].join(''))}}, null)
  );

  }
}

types['events'].push({
    key: 'onclick',
    label: '被点击',
    params: [],

})
Widget.prototype.onclick = function (event) {
      this.emit("onclick");
}

types['properties'].push({
    key: 'nr',
    label: '内容',
    valueType: 'string',
    defaultValue: 'Pefect Button For All  Page Type 1 </br>©耗子 2022 ',
    blockOptions: {
    color: '#666666',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 20,
},
})

types['properties'].push({
    key: 'wordcolor',
    label: '文字颜色',
    valueType: 'color',
    defaultValue: '#333333',
    blockOptions: {
    color: '#666666',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 20,
},
})

types['properties'].push({
    key: 'wordnew',
    label: '文字淡出色',
    valueType: 'color',
    defaultValue: '#ffffff',
    blockOptions: {
    color: '#666666',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 20,
},
})

types['properties'].push({
    key: 'background',
    label: '背景色',
    valueType: 'color',
    defaultValue: '#cccccc',
    blockOptions: {
    color: '#666666',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 20,
},
})

types['properties'].push({
    key: 'backgroundnew',
    label: '背景淡出色',
    valueType: 'color',
    defaultValue: '#333333',
    blockOptions: {
    color: '#666666',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 20,
},
})

exports.types = types;
exports.widget = Widget;
