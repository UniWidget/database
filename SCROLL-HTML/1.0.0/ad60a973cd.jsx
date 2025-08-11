var id;
var document = this.document;

function scrollToBottom() {
  let n = document.querySelector("#div")
  n.scrollTop = n.scrollHeight
}

var document = this.document;

const types = {
  isInvisibleWidget: false,
  type: "SCROLL-HTML",
  icon: "https://static.codemao.cn/coco/player/unstable/rkL91AzvT.image/png",
  title: "可自动滚动可滑动HTML",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: 360,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: '__height',
      label: '高度',
      valueType: 'number',
      defaultValue: 320,
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
    this.HTML=props.HTML;
  this.CSS=props.CSS;

  }
  render() {
    return(
      React.createElement("div", {dangerouslySetInnerHTML: {__html: (String(String(String(String(String('<div id="div" style="width: ' + String(this.__width)) + 'px;height: ') + String(this.__height)) + 'px; overflow-x:hidden;overflow-wrap: break-word;">') + String(this.HTML)) + '</div>')}}, null)
      )
  
  }
}

types['properties'].push({
    key: 'HTML',
    label: 'HTML',
    valueType: 'string',
    editorType: 'TextArea',
    defaultValue: '<p id="1" style="color:skyblue;">test</p><br>',

})

types['methods'].push({
  key: 'scrollToBottom',
  label: '滚动至底部',
  params: [],

})
Widget.prototype.scrollToBottom = function () {
    scrollToBottom();

}

exports.types = types;
exports.widget = Widget;
