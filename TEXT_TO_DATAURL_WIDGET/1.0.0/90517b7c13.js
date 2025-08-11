function ttd(type,text) {
    var Text = text;
    var blob = new Blob([Text], { type: type });
    var reader = new FileReader(); 
    reader.readAsDataURL(blob); 
    return new Promise((resolve, reject) =>{ 
        reader.onload = function() { 
            resolve(reader.result); 
        }; 
        reader.onerror = function(error) {  
            reject(error); 
        }; 
    });
}

const types = {
    isInvisibleWidget: true,
    type: "TEXT_TO_DATAURL_WIDGET",
    icon: "https://cdn.cocotais.cn/project/waddle-2/logo/waddle2-logo.svg",
    title: "文本转dataURL",
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
    key: 'ttd',
    label: '文本转dataURL',
    valueType: 'string',
    params: [
      {
          key: 'type',
          label: '类型',
          valueType: 'string',
          defaultValue: "text/plain;charset=utf-8",
      },
      {
          key: 'text',
          label: '文本',
          valueType: 'multilineString',
          checkType: 'string',
          defaultValue: "Hello World!\n你好，世界！",
      },],


})
Widget.prototype.ttd = function (type,text,) {
    return ttd(type,text);
}

exports.types = types;
exports.widget = Widget;