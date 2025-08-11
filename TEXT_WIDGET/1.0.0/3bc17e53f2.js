const types = {
    isInvisibleWidget: true,
    type: "TEXT_WIDGET",
    icon: "",
    title: "回车符",
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
    key: 'text_method',
    label: '回车符',
    params: [
      {
          key: 'text_param',
          label: '文本',
          valueType: 'multilineString',
      checkType: 'string',
          defaultValue: (decodeURI(atob('Cg=='))),
      },],
    valueType: 'string',
    blockOptions: {
    color: '#000000',
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
