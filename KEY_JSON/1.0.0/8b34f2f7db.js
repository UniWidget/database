var key;



const types = {
    isInvisibleWidget: true,
    type: "KEY_JSON",
    icon: "https://static.codemao.cn/coco/player/unstable/HktQBITh5.image/png?hash=Fns821LOb_7ciVt-nsYFKoFfAAfJ",
    title: "密钥",
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
var document = this.document;
var window = this.window;
var navigator = this.navigator;
var history = this.history;
types['properties'].push({
    key: 'propertyName',
    label: '说明',
    valueType: 'string',
    editorType: 'TextArea',
    defaultValue: '每次密钥都会清除，推荐搭配微数据库/云微数据库使用，密钥不能是0，不然会识别成未设置',

})

types['methods'].push({
    key: 'KeyGet',
    label: '验证密钥（请设置密钥后再用）',
    params: [],
    valueType: 'boolean',
    blockOptions: {
    color: '#ff0000',
    icon: 'https://static.codemao.cn/coco/player/unstable/HktQBITh5.image/png?hash=Fns821LOb_7ciVt-nsYFKoFfAAfJ',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.KeyGet = function () {
      return (window.prompt('请输入您的密钥') == key && 0 != key);
}
types['methods'].push({
    key: 'KeySet',
    label: '设置密钥',
    params: [
      {
          key: 'Set',
          label: '设置密钥',
          valueType: 'string',
          defaultValue: "",
      },],

    blockOptions: {
    color: '#ff0000',
    icon: 'https://static.codemao.cn/coco/player/unstable/HktQBITh5.image/png?hash=Fns821LOb_7ciVt-nsYFKoFfAAfJ',
    generateBlock: true,
    inputsInline: true,
    space: 32,
},
})
Widget.prototype.KeySet = function (Set,) {
      key = Set;

}
exports.types = types;
exports.widget = Widget;
