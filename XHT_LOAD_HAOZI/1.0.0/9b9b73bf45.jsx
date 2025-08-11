const types = {
isInvisibleWidget: false,
type: 
"XHT_LOAD_HAOZI",
icon: "https://cdn-community.codemao.cn/47/community/d2ViXzEwMDFfODU5NzIyXzg1OTcyMl8xNjU0MTU1ODQwNTIzXzA2NDYzZTI0.png",
title: "循环条形加载特效",
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

}
render() {
return(
React.createElement("div", {dangerouslySetInnerHTML: {__html: (' <div class="loader"></div>' + '<style>.loader {   display: block;   --height-of-loader: 4px;   --loader-color: #0071e2;   width: 130px;   height: var(--height-of-loader);   border-radius: 30px;   background-color: rgba(0,0,0,0.2);   position: relative; }  .loader::before {   content: "";   position: absolute;   background: var(--loader-color);   top: 0;   left: 0;   width: 0%;   height: 100%;   border-radius: 30px;   animation: moving 1s ease-in-out infinite;   ; }  @keyframes moving {   50% {     width: 100%;   }    100% {     width: 0;     right: 0;     left: unset;   } }</style>')}}, null)
);

}
}

exports.types = types;
exports.widget = Widget;