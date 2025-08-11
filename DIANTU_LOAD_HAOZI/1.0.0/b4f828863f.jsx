const types = {
isInvisibleWidget: false,
type: 
"DIANTU_LOAD_HAOZI",
icon: "https://cdn-community.codemao.cn/47/community/d2ViXzEwMDFfODU5NzIyXzg1OTcyMl8xNjU0MTU1ODQwNTIzXzA2NDYzZTI0.png",
title: "心电图加载特效",
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
React.createElement("div", {dangerouslySetInnerHTML: {__html: ('<div class="loading">   <svg width="64px" height="48px">       <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>     <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>   </svg> </div>' + '<style>.loading svg polyline {   fill: none;   stroke-width: 3;   stroke-linecap: round;   stroke-linejoin: round; }  .loading svg polyline#back {   fill: none;   stroke: #ff4d5033; }  .loading svg polyline#front {   fill: none;   stroke: #ff4d4f;   stroke-dasharray: 48, 144;   stroke-dashoffset: 192;   animation: dash_682 1.4s linear infinite; }  @keyframes dash_682 {   72.5% {     opacity: 0;   }    to {     stroke-dashoffset: 0;   } }</style>')}}, null)
);

}
}

exports.types = types;
exports.widget = Widget;