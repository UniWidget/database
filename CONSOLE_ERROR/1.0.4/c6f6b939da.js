const types = {
    isInvisibleWidget: true,
    type: "CONSOLE_ERROR",
    icon: "https://ts1.cn.mm.bing.net/th/id/R-C.cb1e3996d133f517b8166206cd79cf61?rik=7eAOvG%2b29h5ABQ&riu=http%3a%2f%2fbpic.588ku.com%2felement_pic%2f00%2f34%2f96%2f7956d409458833b.jpg&ehk=i%2bcwEVeh3K0fC6T8jic1ExEcwkfRmQ1C%2bg6iL6mAOEU%3d&risl=&pid=ImgRaw&r=0",
    title: "控制台报错/警告",
    version: "1.0.4",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
          this.widgetLog('本控件由嘎嘎叫的青蛙制作（QQ：359148497）');

    }

}

types['methods'].push({
    key: 'console_errord',
    label: '控制台警告',
    params: [
      {
          key: 'nr',
          label: '内容',
          valueType: 'string',
          defaultValue: '这是一条警告',
      },],

    blockOptions: {
    color: '#ff6600',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.console_errord = function (nr,) {
      this.widgetWarn(nr);

}
types['methods'].push({
    key: 'console_error',
    label: '控制台报错',
    params: [
      {
          key: 'nr',
          label: '内容',
          valueType: 'string',
          defaultValue: '这是一条报错',
      },],

    blockOptions: {
    color: '#ff0000',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.console_error = function (nr,) {
      this.widgetError(nr);

}
exports.types = types;
exports.widget = Widget;
