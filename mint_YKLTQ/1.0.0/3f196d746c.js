var _E6_8E_92_E5_BA_8F_E8_A1_8C, _E5_AD_981, _E5_AD_982, i;



const types = {
    isInvisibleWidget: true,
    type: "mint_YKLTQ",
    icon: "https://static.codemao.cn/coco/player/unstable/Byl-Pkuti.image/svg+xml?hash=FpF7fwJHdO2CPkkvNvAwIG2LnzMb",
    title: "云库列提取",
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
    key: 'methodName',
    label: '提取云库',
    params: [
      {
          key: 'tb',
          label: '数据',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: '放入云库的数据',
      },
      {
          key: 'ap',
          label: '的第',
          valueType: 'number',
          defaultValue: 1,
      },
      {
          key: 'ff',
          label: '',
          valueType: 'string',
          dropdown: [
    { label: '列', value: '列', },

    { label: '行', value: '行', },
  ],
      },

],
    valueType: 'array',
    blockOptions: {
    color: '#ffbb55',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.methodName = function (tb,ap,ff,) {
      _E6_8E_92_E5_BA_8F_E8_A1_8C = [];
  _E5_AD_981 = [];
  _E5_AD_982 = [];
  _E6_8E_92_E5_BA_8F_E8_A1_8C = tb;
  if (ff == '列') {
    i = 1;
    var repeat_end = _E6_8E_92_E5_BA_8F_E8_A1_8C.length;
    for (var count = 0;count < repeat_end;count++) {
      _E5_AD_981 = _E6_8E_92_E5_BA_8F_E8_A1_8C[(i - 1)];
      _E5_AD_982.push(_E5_AD_981[(ap - 1)]);
      i = (typeof i === 'number' ? i : 0) + 1;
    }
    return _E5_AD_982;} else {
    return (_E6_8E_92_E5_BA_8F_E8_A1_8C[(ap - 1)]);}

}
exports.types = types;
exports.widget = Widget;
