const types = {
  isInvisibleWidget: false,
  type: "CSS_UIVERSE_HAOZI",
  icon: "https://tse4-mm.cn.bing.net/th/id/OIP-C.BM8SK-Cv51Qgg9GjlnOQrgHaHa?w=170&h=180&c=7&r=0&o=5&dpr=3&pid=1.7",
  title: "适用于UIVERSE的CSS控件",
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
  this.sss=props.sss;

  }
  render() {
    return(
      React.createElement("div", {  onClick: this.onclick.bind(this),
    dangerouslySetInnerHTML: {__html: ([this.nr,'<style>',this.sss,'</style>'].join(''))}}, null)
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
    label: '在这里粘贴HTML',
    valueType: 'string',
    defaultValue: '<div class="card">     <div class="align">         <span class="red"></span>         <span class="yellow"></span>         <span class="green"></span>     </div>      <h1>适用于UIVERSE的CSS控件</h1>     <p>https://uiverse.io/</p></br>©耗子 2022 </div>',
    blockOptions: {
    color: '#666666',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 20,
},
})

types['properties'].push({
    key: 'sss',
    label: '在这里粘贴CSS',
    valueType: 'string',
    defaultValue: '.card {   width: 12rem;   cursor: pointer; }  .content {   text-align: center;   position: relative;   transition: all 2.25s;   background-color: rgb(127, 204, 240);   padding: 5em;   transform-style: preserve-3d; }  .card:hover .content {   transform: rotateY(0.5turn); }  .front, .back {   position: absolute;   top: 0;   left: 0;   bottom: 0;   right: 0;   padding: 2em;   transform-style: preserve-3d;   backface-visibility: hidden; }  .title {   transform: translateZ(5rem);   font-size: 2rem; }  .subtitle {   transform: translateZ(2rem); }  .back {   transform: rotateY(0.5turn);   background-color: #009bff; }  .description {   transform: translateZ(3rem); }',
    blockOptions: {
    color: '#666666',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 20,
},
})
types.docs={url:"https://uiverse.io/"};
types.platforms=["android","ios","web"]
exports.types = types;
exports.widget = Widget;
