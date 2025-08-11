const types = {
  isInvisibleWidget: false,
  type: "MENU_ACTION_HAOZI",
  icon: "https://cdn-community.codemao.cn/47/community/d2ViXzEwMDFfODU5NzIyXzg1OTcyMl8xNjU0MTU1ODQwNTIzXzA2NDYzZTI0.png",
  title: "动效菜单按钮",
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
      defaultValue: 50,
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
    dangerouslySetInnerHTML: {__html: ('<label class="burger" for="burger">   <input type="checkbox" id="burger">   <span></span>   <span></span>   <span></span> </label>' + '<style>.burger {   position: relative;   width: 40px;   height: 30px;   background: transparent;   cursor: pointer;   display: block; }  .burger input {   display: none; }  .burger span {   display: block;   position: absolute;   height: 4px;   width: 100%;   background: black;   border-radius: 9px;   opacity: 1;   left: 0;   transform: rotate(0deg);   transition: .25s ease-in-out; }  .burger span:nth-of-type(1) {   top: 0px;   transform-origin: left center; }  .burger span:nth-of-type(2) {   top: 50%;   transform: translateY(-50%);   transform-origin: left center; }  .burger span:nth-of-type(3) {   top: 100%;   transform-origin: left center;   transform: translateY(-100%); }  .burger input:checked ~ span:nth-of-type(1) {   transform: rotate(45deg);   top: 0px;   left: 5px; }  .burger input:checked ~ span:nth-of-type(2) {   width: 0%;   opacity: 0; }  .burger input:checked ~ span:nth-of-type(3) {   transform: rotate(-45deg);   top: 28px;   left: 5px; }</style>')}}, null)
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

exports.types = types;
exports.widget = Widget;