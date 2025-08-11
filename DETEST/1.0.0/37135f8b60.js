const types = {
  isInvisibleWidget: true,
  type: "DETEST",
  icon: "",
  title: "识别文本长度",
  version: "1.0.0",
  isGlobalWidget: true,
  properties: [],
  methods: [],
  events: [],
};

class Widget extends InvisibleWidget {
  constructor(props) {
    super(props);

  }

}

types['methods'].push({
  key: 'detest',
  label: '识别长度',
  valueType: 'number',
  params: [

  {
    key: 'txt',
    label: '文本',
    valueType: 'string',
    defaultValue: '哭笑不得😂',
  },


  ],
})
Widget.prototype.detest = function (txt,) {
    return ((txt).split('').length);;
}

exports.types = types;
exports.widget = Widget;
