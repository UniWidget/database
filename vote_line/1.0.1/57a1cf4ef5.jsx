const types = {
  isInvisibleWidget: false,
  type: "vote_line",
  icon: "https://i.328888.xyz/2023/03/24/i4iapE.png",
  title: "进度条",
  version: "1.0.1",
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: 300,
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
    this.widgetLog('本作品由柠檬酸钠制作，感谢waddle，详情请看   https://waddle.coco-central.cn/docs/#/');
  this.widgetLog('本作品由柠檬酸钠制作，感谢waddle，详情请看   https://waddle.coco-central.cn/docs/#/');
  this.widgetLog('本作品由柠檬酸钠制作，感谢waddle，详情请看   https://waddle.coco-central.cn/docs/#/');
  this.zheng=props.zheng;

  }
  render() {
    return(
      React.createElement("div", {  id: 'votebar',
      style: {  display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: "100%",
      },
    }, [React.createElement("div", {  style: {  width: "100%",
          height: "15px",
          borderRadius: "15px",
          background: '#ffffcc',
          margin: '5px 0 5px 0',
        },
      }, [React.createElement("div", {  id: 'bar',
          style: {  width: (String(this.zheng) + '%'),
            height: 'inherit',
            borderRadius: "15px",
            background: '#ffcc00',
            transition: 'width 0.2s linear',
          },
        }, []),]),
      React.createElement("div", {}, [React.createElement("span", {  style: {  display: 'flex',
            justifyContent: 'space-between',
          },
        }, [React.createElement("div", {dangerouslySetInnerHTML: {__html: ('' + '')}}, null),
          React.createElement("div", {dangerouslySetInnerHTML: {__html: ('' + '')}}, null),]),]),])
  );

  }
}

types['properties'].push({
    key: 'zheng',
    label: '正方',
    valueType: 'number',
    defaultValue: 10,
    blockOptions: {
    color: '#ffcc00',
    icon: 'https://i.328888.xyz/2023/03/24/i4iapE.png',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})

exports.types = types;
exports.widget = Widget;
