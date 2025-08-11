const types = {
  isInvisibleWidget: false,
  type: "TIP_HAOZI_WIDGET",
  icon: "https://tse2-mm.cn.bing.net/th/id/OIP-C.7jeXlGNfDZ0sGGJT-kkVsQHaHa?w=176&h=180&c=7&r=0&o=5&dpr=3.8&pid=1.7",
  title: "悬停TIP",
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
  this.wc=props.wc;

  }
  render() {
    return(
      React.createElement("div", {  onClick: this.onclick.bind(this),
    dangerouslySetInnerHTML: {__html: (['<div class="tooltip">   <div class="icon">',this.wc,'</div>   <div class="tooltiptext">',this.nr,'</div> </div>','<style>.tooltip {   position: relative;   display: inline-block;   cursor: pointer;   font-family: "Arial", sans-serif; }  .tooltip:hover .tooltiptext {   visibility: visible;   opacity: 1; }  .tooltiptext {   visibility: hidden;   width: 200px;   background-color: #333;   color: #fff;   text-align: center;   border-radius: 5px;   padding: 10px;   position: absolute;   z-index: 1;   top: 125%;   left: 50%;   margin-left: -100px;   opacity: 0;   transition: opacity 0.3s; }  .tooltiptext::after {   content: "";   position: absolute;   top: -10px;   left: 50%;   margin-left: -10px;   border-width: 10px;   border-style: solid;   border-color: transparent transparent #333 transparent; }  .tooltip .icon {   display: inline-block;   width: 20px;   height: 20px;   background-color: #4caf50;   color: #fff;   border-radius: 50%;   text-align: center;   line-height: 20px; }</style>'].join(''))}}, null)
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
    key: 'wc',
    label: 'TIP外层',
    valueType: 'string',
    defaultValue: 'i',
    blockOptions: {
    color: '#666666',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 20,
},
})

types['properties'].push({
    key: 'nr',
    label: 'TIP内容',
    valueType: 'string',
    defaultValue: '©耗子 2024 ',
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