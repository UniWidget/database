const types = {
isInvisibleWidget: false,
type: 
"CT_LOAD_HAOZI",
icon: "https://cdn-community.codemao.cn/47/community/d2ViXzEwMDFfODU5NzIyXzg1OTcyMl8xNjU0MTU1ODQwNTIzXzA2NDYzZTI0.png",
title: "彩条加载特效",
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
React.createElement("div", {dangerouslySetInnerHTML: {__html: ('   <section class="loader">      <div class="slider" style="--i:0">     </div>     <div class="slider" style="--i:1">     </div>     <div class="slider" style="--i:2">     </div>     <div class="slider" style="--i:3">     </div>     <div class="slider" style="--i:4">     </div>   </section>' + '<style>.loader {   display: flex;   align-items: center;   justify-content: center;   flex-direction: row; }  .slider {   overflow: hidden;   background-color: white;   margin: 0 15px;   height: 80px;   width: 20px;   border-radius: 30px;   box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.1), -15px -15px 30px #fff,     inset -5px -5px 10px rgba(0, 0, 255, 0.1),     inset 5px 5px 10px rgba(0, 0, 0, 0.1);   position: relative; }  .slider::before {   content: "";   position: absolute;   top: 0;   left: 0;   height: 20px;   width: 20px;   border-radius: 100%;   box-shadow: inset 0px 0px 0px rgba(0, 0, 0, 0.3), 0px 420px 0 400px #2697f3,     inset 0px 0px 0px rgba(0, 0, 0, 0.1);   animation: animate_2 2.5s ease-in-out infinite;   animation-delay: calc(-0.5s * var(--i)); }  @keyframes animate_2 {   0% {     transform: translateY(250px);     filter: hue-rotate(0deg);   }    50% {     transform: translateY(0);   }    100% {     transform: translateY(250px);     filter: hue-rotate(180deg);   } }</style>')}}, null)
);

}
}

exports.types = types;
exports.widget = Widget;