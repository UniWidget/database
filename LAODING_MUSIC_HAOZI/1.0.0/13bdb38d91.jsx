const types = {
  isInvisibleWidget: false,
  type: "LAODING_MUSIC_HAOZI",
  icon: "https://cdn-community.codemao.cn/47/community/d2ViXzEwMDFfODU5NzIyXzg1OTcyMl8xNjU0MTU1ODQwNTIzXzA2NDYzZTI0.png",
  title: "律动音波加载特效",
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
      React.createElement("div", {dangerouslySetInnerHTML: {__html: ('<div class="loading">   <span></span>   <span></span>   <span></span>   <span></span>   <span></span> </div>' + '<style>.loading {  --speed-of-animation: 0.9s;  --gap: 6px;  --first-color: #4c86f9;  --second-color: #49a84c;  --third-color: #f6bb02;  --fourth-color: #f6bb02;  --fifth-color: #2196f3;  display: flex;  justify-content: center;  align-items: center;  width: 100px;  gap: 6px;  height: 100px; }  .loading span {  width: 4px;  height: 50px;  background: var(--first-color);  animation: scale var(--speed-of-animation) ease-in-out infinite; }  .loading span:nth-child(2) {  background: var(--second-color);  animation-delay: -0.8s; }  .loading span:nth-child(3) {  background: var(--third-color);  animation-delay: -0.7s; }  .loading span:nth-child(4) {  background: var(--fourth-color);  animation-delay: -0.6s; }  .loading span:nth-child(5) {  background: var(--fifth-color);  animation-delay: -0.5s; }  @keyframes scale {  0%, 40%, 100% {   transform: scaleY(0.05);  }   20% {   transform: scaleY(1);  } }</style>')}}, null)
  );

  }
}

exports.types = types;
exports.widget = Widget;