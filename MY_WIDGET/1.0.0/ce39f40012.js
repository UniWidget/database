const types = {
    isInvisibleWidget: true,
    type: "MY_WIDGET",
    icon: "https://pic.stackoverflow.wiki/uploadImages/112/234/185/189/2022/07/10/21/06/9dc64c51-3b85-464b-a7bd-2a5a045167a5.svg",
    title: "文本空白检测器",
    version: "1.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
          this.widgetLog('文本空白检测器，由Vrctn制作，有问题请联系QQ:1770038917');
  this.widgetLog('请勿更改粉色代码块的值（1=是空白文本 0=不是空白文本）');
  this.Inspectionresults=props.Inspectionresults;

    }

}

types['methods'].push({
    key: 'textisempty',
    label: '检测文本是否为空',
    params: [
      {
          key: 'text',
          label: '文本',
          valueType: 'string',
          defaultValue: '这是一个文本',
      },],

    blockOptions: {
    color: '#ff9900',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.textisempty = function (text,) {
      if (!text.length) {
    this.Inspectionresults = 1;
  } else {
    this.Inspectionresults = 0;
  }

}
types['properties'].push({
    key: 'Inspectionresults',
    label: '检查结果',
    valueType: 'number',
    defaultValue: 0,

})

exports.types = types;
exports.widget = Widget;
