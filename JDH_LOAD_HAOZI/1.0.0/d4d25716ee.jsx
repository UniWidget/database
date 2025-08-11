const types = {
isInvisibleWidget: false,
type: 
"JDH_LOAD_HAOZI",
icon: "https://cdn-community.codemao.cn/47/community/d2ViXzEwMDFfODU5NzIyXzg1OTcyMl8xNjU0MTU1ODQwNTIzXzA2NDYzZTI0.png",
title: "经典环形加载特效",
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
React.createElement("div", {dangerouslySetInnerHTML: {__html: ('<div class="loader"></div>' + '<style>.loader {   border: 4px solid rgba(0, 0, 0, .1);   border-left-color: transparent;   border-radius: 50%; }  .loader {   border: 4px solid rgba(0, 0, 0, .1);   border-left-color: transparent;   width: 36px;   height: 36px; }  .loader {   border: 4px solid rgba(0, 0, 0, .1);   border-left-color: transparent;   width: 36px;   height: 36px;   animation: spin89345 1s linear infinite; }  @keyframes spin89345 {   0% {     transform: rotate(0deg);   }    100% {     transform: rotate(360deg);   } }</style>')}}, null)
);

}
}

exports.types = types;
exports.widget = Widget;