const types = {
    isInvisibleWidget: true,
    type: "XJwangdage_HWXY",
    icon: "https://ocean.codemao.cn/appcraft/resource/icon/%E5%9F%BA%E7%A1%80/%E7%9A%AE%E8%82%A4.svg",
    title: "距中心点坐标",
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
    key: 'methodNameX',
    label: '获取X坐标',
    params: [
      {
          key: 'paramH',
          label: '宽度',
          valueType: 'number',
          defaultValue: "",
      },
      {
          key: 'paramX',
          label: 'X坐标',
          valueType: 'number',
          defaultValue: "",
      },],
    valueType: 'number',
    blockOptions: {
    color: '#ffbb55',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.methodNameX = function (paramH,paramX,) {
      return (paramX - (360 - paramH) / 2);
}
types['methods'].push({
    key: 'methodNameY',
    label: '获取Y坐标',
    params: [
      {
          key: 'paramW',
          label: '高度',
          valueType: 'number',
          defaultValue: "",
      },
      {
          key: 'paramY',
          label: 'Y坐标',
          valueType: 'number',
          defaultValue: "",
      },],
    valueType: 'number',
    blockOptions: {
    color: '#ffbb55',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.methodNameY = function (paramW,paramY,) {
      return (paramY - (640 - paramW) / 2);
}
exports.types = types;
exports.widget = Widget;
