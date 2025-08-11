var times, i, div;



const types = {
  isInvisibleWidget: false,
  type: "List",
  icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
  title: "列表数据框",
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
      defaultValue: 500,
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
    this.number=props.number;
  this.text=props.text;

  }
  render() {
    times = (this.number)
    for (var count = 0;count < times;count++) {
        div = [div,'<div style="position:relative;float: left;width: 80%;height:3%;left: 5%;"></div>','<div onclick="this.emit(\'click\',',i,');" style="border-radius: 25px;padding-top: 50px;padding-right: 30px;padding-bottom: 50px;padding-left: 80px;position:relative;float: left;width: 80%;left: 5%;background-color: darkgrey;">',(this.text).split(',')[(i - 1)],'</div>'].join('');
        i = (typeof i === 'number' ? i : 0) + 1;
      }
      React.createElement("div", {dangerouslySetInnerHTML: {__html: (['<div style="background-color: black;overflow-y:auto;height: 100%;width: 100%;">',div,'</div>'].join(''))}}, null)
      i = 0;
  }
}

types['events'].push({
    key: 'click',
    label: '点击卡片',
    params: [
      {
          key: 'line',
          label: '点击的行数',
          valueType: 'string',
      },],

})

types['properties'].push({
    key: 'number',
    label: '项数',
    valueType: 'number',
    defaultValue: 0,

})

types['properties'].push({
    key: 'text',
    label: '内容',
    valueType: 'string',
    defaultValue: "",

})

exports.types = types;
exports.widget = Widget;


types['events'].push({
    key: 'click',
    label: '点击卡片',
    params: [
      {
          key: 'line',
          label: '点击的行数',
          valueType: 'string',
      },],

})
Widget.prototype.click = function (event) {
      this.emit("click"  , line);
}
