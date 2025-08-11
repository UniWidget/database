const types = {
  isInvisibleWidget: false,
  type: "HAOZI_LAODING_1",
  icon: "",
  title: "加载特效",
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
      React.createElement("div", {dangerouslySetInnerHTML: {__html: ('<div class="spinner">   <span></span>   <span></span>   <span></span> </div>' + '<style>.spinner {  --clr: rgb(0, 113, 128);  --gap: 6px;    /* gap between each circle */  width: 100px;  height: 100px;  display: flex;  justify-content: center;  align-items: center;  gap: var(--gap); }  .spinner span {  width: 20px;  height: 20px;  border-radius: 100%;  background-color: var(--clr);  opacity: 0; }  .spinner span:nth-child(1) {  animation: fade 1s ease-in-out infinite; }  .spinner span:nth-child(2) {  animation: fade 1s ease-in-out 0.33s infinite; }  .spinner span:nth-child(3) {  animation: fade 1s ease-in-out 0.66s infinite; }  @keyframes fade {  0%, 100% {   opacity: 1;  }   60% {   opacity: 0;  } }</style>')}}, null)
  );

  }
}

exports.types = types;
exports.widget = Widget;
