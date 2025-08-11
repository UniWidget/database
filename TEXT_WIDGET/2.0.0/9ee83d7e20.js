const types = {
    isInvisibleWidget: true,
    type: "TEXT_WIDGET",
    icon: "",
    title: "多行文本",
    version: "2.0.0",
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
    key: 'text_method',
    label: '多行文本',
    params: [
      {
          key: 'text_param',
          label: '文本',
          valueType: 'multilineString',
      checkType: 'string',
          defaultValue: '',
      },],
    valueType: 'string',
    blockOptions: {
    color: "#ff4400",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.text_method = function (text_param,) {
      return text_param;
}
exports.types = types;
exports.widget = Widget;
