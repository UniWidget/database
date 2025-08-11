const types = {
    isInvisibleWidget: true,
    type: "MY_WIDGET",
    icon: "https://img2.baidu.com/it/u=2862896791,588253553&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    title: "检测传值",
    version: "1.0.0",
    isGlobalWidget: false,
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
    key: 'methodName',
    label: '检测传值',
    params: [
      {
          key: 'paramName',
          label: '页面',
          valueType: 'number',
          defaultValue: 1,
      },],
    valueType: 'string',
    blockOptions: {
    color: '#cc33cc',
    icon: 'https://img2.baidu.com/it/u=2862896791,588253553&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    generateBlock: true,
    inputsInline: true,
    space: 10,
},
})
Widget.prototype.methodName = function (paramName,) {
      var document = this.document;
  var window = this.window;
  var navigator = this.navigator;
  var history = this.history;return (btoa(encodeURI(encodeURI(btoa(encodeURI(encodeURI(btoa(encodeURI(encodeURI(btoa(encodeURI(encodeURI(btoa(encodeURI(encodeURI(btoa(encodeURI(encodeURI(btoa(encodeURI(encodeURI(btoa(encodeURI(encodeURI([screen.width,screen.colorDepth,screen.pixelDepth,navigator.language,navigator.platform,window.location.port,window.location.hostname,window.location.pathname].join(''))))))))))))))))))))))))));
}
exports.types = types;
exports.widget = Widget;
