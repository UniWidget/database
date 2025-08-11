const axios = require('axios');

const types = {
    isInvisibleWidget: true,
    type: "EN_TIAN_WIDGET",
    icon: "https://files.catbox.moe/cyipeb.svg",
    title: "翻译工具",
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

types['events'].push({
    key: 'win',
    label: '翻译完成',
    params: [
      {
          key: 'text',
          label: '翻译内容',
          valueType: 'string',
      },],
    blockOptions: {
    color: '#ffbb55',
    icon: 'https://files.catbox.moe/9ijzpa.svg',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})

types['methods'].push({
    key: 'fywetext',
    label: '翻译文本',
    params: [
      {
          key: 'text',
          label: '文本',
          valueType: 'string',
          defaultValue: '哈哈',
      },],

    blockOptions: {
    color: '#33cc00',
    icon: 'https://files.catbox.moe/9ijzpa.svg',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.fywetext = function (text,) {
      axios.get(('https://api.vvhan.com/api/fy?text=' + String(text)))
    .then((response) => {
      this.emit("win"  , (response.data['data']['fanyi']));
    })
    .catch((error) => {
      this.emit("win"  , (error));
    });

}
exports.types = types;
exports.widget = Widget;
