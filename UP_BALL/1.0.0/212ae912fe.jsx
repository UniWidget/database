const types = {
isInvisibleWidget: false,
type: 
"UP_BALL",
icon: "https://cdn-community.codemao.cn/47/community/d2ViXzEwMDFfODU5NzIyXzg1OTcyMl8xNjU0MTU1ODQwNTIzXzA2NDYzZTI0.png",
title: "爬楼的小球",
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
React.createElement("div", {dangerouslySetInnerHTML: {__html: ('<div class="loader"></div>' + '<style>.loader {   position: relative;   width: 120px;   height: 90px;   margin: 0 auto; }  .loader:before {   content: "";   position: absolute;   bottom: 30px;   left: 50px;   height: 30px;   width: 30px;   border-radius: 50%;   background: #2a9d8f;   animation: loading-bounce 0.5s ease-in-out infinite alternate; }  .loader:after {   content: "";   position: absolute;   right: 0;   top: 0;   height: 7px;   width: 45px;   border-radius: 4px;   box-shadow: 0 5px 0 #f2f2f2, -35px 50px 0 #f2f2f2, -70px 95px 0 #f2f2f2;   animation: loading-step 1s ease-in-out infinite; }  @keyframes loading-bounce {   0% {     transform: scale(1, 0.7);   }    40% {     transform: scale(0.8, 1.2);   }    60% {     transform: scale(1, 1);   }    100% {     bottom: 140px;   } }  @keyframes loading-step {   0% {     box-shadow: 0 10px 0 rgba(0, 0, 0, 0),             0 10px 0 #f2f2f2,             -35px 50px 0 #f2f2f2,             -70px 90px 0 #f2f2f2;   }    100% {     box-shadow: 0 10px 0 #f2f2f2,             -35px 50px 0 #f2f2f2,             -70px 90px 0 #f2f2f2,             -70px 90px 0 rgba(0, 0, 0, 0);   } }</style>')}}, null)
);

}
}

exports.types = types;
exports.widget = Widget;