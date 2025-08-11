const types = {
  isInvisibleWidget: false,
  type: "COLORFUL_CARD_HAOZI_SLOWLYSEE_HAOZI",
  icon: "https://tse4-mm.cn.bing.net/th/id/OIP-C.BM8SK-Cv51Qgg9GjlnOQrgHaHa?w=170&h=180&c=7&r=0&o=5&dpr=3&pid=1.7",
  title: "彩边深色悬停显字文本框",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: 250,
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
    this.atitle=props.atitle;
  this.color=props.color;

  }
  render() {
    return(
      React.createElement("div", {  onClick: this.onclick.bind(this),
    dangerouslySetInnerHTML: {__html: (['<div class="card">   <div class="card-info">     <p class="title">',this.atitle,'</p>   </div> </div><style>.card {  --background: linear-gradient(to left, #f7ba2b 0%, #ea5358 100%);  width: 190px;  height: 254px;  padding: 5px;  border-radius: 1rem;  overflow: visible;  background: #f7ba2b;  background: var(--background);  position: relative;  z-index: 1; }  .card::after {  position: absolute;  content: "";  top: 30px;  left: 0;  right: 0;  z-index: -1;  height: 100%;  width: 100%;  transform: scale(0.8);  filter: blur(25px);  background: #f7ba2b;  background: var(--background);  transition: opacity .5s; }  .card-info {  --color: #181818;  background: var(--color);  color: var(--color);  display: flex;  justify-content: center;  align-items: center;  width: 100%;  height: 100%;  overflow: visible;  border-radius: .7rem; }  .card .title {  font-weight: bold;  letter-spacing: .1em; }  /*Hover*/ .card:hover::after {  opacity: 0; }  .card:hover .card-info {  color: ',this.color,';  transition: color 1s; }</style>','','',''].join(''))}}, null)
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
    key: 'atitle',
    label: '内容',
    valueType: 'string',
    editorType: 'TextArea',
    defaultValue: '©耗子 2022 精心制作',

})

types['properties'].push({
    key: 'color',
    label: '字体颜色',
    valueType: 'color',
    defaultValue: '#f7ba2b',

})

exports.types = types;
exports.widget = Widget;
