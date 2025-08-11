const types = {
  isInvisibleWidget: false,
  type: "PERFECTBUTTON_TYPE4_HAOZI_CANSEE",
  icon: "https://tse2-mm.cn.bing.net/th/id/OIP-C.6PjSxuVBHj7VqIjvO9qZ2AHaHa?w=203&h=203&c=7&r=0&o=5&dpr=2.3&pid=1.7",
  title: "【七彩】（非全局）按钮美化-动态Button-可见",
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
  methods: [],
  events: [],
};

class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.__width = props.__width;
    this.__height = props.__height;
    this.nr=props.nr;

  }
  render() {
    return(
      React.createElement("div", {  onClick: this.onclick.bind(this),
    dangerouslySetInnerHTML: {__html: (['<button class="btn">',this.nr,'</button>','<style>.btn {  padding: 0.9em 1.6em;  border: none;  outline: none;  color: #FFF;  font-family: inherit;  font-weight: 500;  font-size: 17px;  cursor: pointer;  position: relative;  z-index: 0;  border-radius: 12px; }  .btn::after {  content: "";  z-index: -1;  position: absolute;  width: 100%;  height: 100%;  background-color: rgb(46, 46, 46);  left: 0;  top: 0;  border-radius: 10px; } /* glow */ .btn::before {  content: "";  background: linear-gradient(     45deg,     #FF0000, #002BFF, #FF00C8, #002BFF,       #FF0000, #002BFF, #FF00C8, #002BFF );  position: absolute;  top: -2px;  left: -2px;  background-size: 600%;  z-index: -1;  width: calc(100% + 4px);  height: calc(100% + 4px);  filter: blur(8px);  animation: glowing 20s linear infinite;  transition: opacity .3s ease-in-out;  border-radius: 10px;  opacity: 0; }  @keyframes glowing {  0% {   background-position: 0 0;  }   50% {   background-position: 400% 0;  }   100% {   background-position: 0 0;  } }  /* hover */ .btn:hover::before {  opacity: 1; }  .btn:active:after {  background: transparent; }  .btn:active {  color: #000;  font-weight: bold; }</style>'].join(''))}}, null)
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
    defaultValue: '©耗子 2022 ',
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
