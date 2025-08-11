const types = {
    isInvisibleWidget: true,
    type: "ZS_WIDGET",
    icon: "https://ocean.codemao.cn/appcraft/resource/icon/%E5%9F%BA%E7%A1%80/%E6%90%9C%E7%B4%A21.svg",
    title: "注释",
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

types['properties'].push({
    key: 'ALLZS',
    label: '全局说明',
    valueType: 'string',
    editorType: 'TextArea',
    defaultValue: '全局说明',
    blockOptions: {
    color: '#cccccc',
    icon: '无',
    generateBlock: false,
    inputsInline: false,
    space: 16,
},
})

types['methods'].push({
    key: 'methodName',
    label: '',
    params: [
      {
          key: 'paramNam',
          label: '积木位置',
          valueType: 'string',
          dropdown: [
    { label: '上方', value: '上方', },

    { label: '下方', value: '下方', },

    { label: '上方（布尔值）', value: '上方（布尔值）', },

    { label: '下方（布尔值）', value: '下方（布尔值）', },

    { label: '上方（数值）', value: '上方（数值）', },

    { label: '下方（数值）', value: '下方（数值）', },
  ],
      },


      {
          key: 'paramName',
          label: '注释内容',
          valueType: 'string',
          defaultValue: '注释',
      },],

    blockOptions: {
    color: '#cccccc',
    icon: '无',
    generateBlock: true,
    inputsInline: false,
    space: 16,
},
})
Widget.prototype.methodName = function (paramNam,paramName,) {

}
exports.types = types;
exports.widget = Widget;
