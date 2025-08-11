var _E6_8E_92_E5_BA_8F_E8_A1_8C, _E5_AD_981, _E5_AD_982, i, _E6_95_B0_E6_8D_AE;



const types = {
    isInvisibleWidget: true,
    type: "mint_YKPX",
    icon: "https://static.codemao.cn/coco/player/unstable/Byl-Pkuti.image/svg+xml?hash=FpF7fwJHdO2CPkkvNvAwIG2LnzMb",
    title: "云库排序",
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
    label: '排序云库',
    params: [
      {
          key: 'tb',
          label: '数据',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: '放入云库的数据',
      },
      {
          key: 'ap',
          label: '按第',
          valueType: 'number',
          defaultValue: 1,
      },
      {
          key: 'ff',
          label: '列',
          valueType: 'string',
          dropdown: [
    { label: '从小到大排序', value: '从小到大排序', },

    { label: '从大到小排序', value: '从大到小排序', },
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
  var repeat_end2 = _E6_8E_92_E5_BA_8F_E8_A1_8C.length - 1;
  for (var count2 = 0;count2 < repeat_end2;count2++) {
    i = 1;
    var repeat_end = _E6_8E_92_E5_BA_8F_E8_A1_8C.length - 1;
    for (var count = 0;count < repeat_end;count++) {
      _E5_AD_981 = _E6_8E_92_E5_BA_8F_E8_A1_8C[(i - 1)];
      _E5_AD_982 = _E6_8E_92_E5_BA_8F_E8_A1_8C[((i + 1) - 1)];
      if (ff == '从小到大排序') {
        if (_E5_AD_981[(ap - 1)] > _E5_AD_982[(ap - 1)]) {
          _E6_95_B0_E6_8D_AE = _E6_8E_92_E5_BA_8F_E8_A1_8C[(i - 1)];
          _E6_8E_92_E5_BA_8F_E8_A1_8C[(i - 1)] = _E6_8E_92_E5_BA_8F_E8_A1_8C[((i + 1) - 1)];
          _E6_8E_92_E5_BA_8F_E8_A1_8C[((i + 1) - 1)] = _E6_95_B0_E6_8D_AE;
        }
      } else if (ff == '从大到小排序') {
        if (_E5_AD_981[(ap - 1)] < _E5_AD_982[(ap - 1)]) {
          _E6_95_B0_E6_8D_AE = _E6_8E_92_E5_BA_8F_E8_A1_8C[(i - 1)];
          _E6_8E_92_E5_BA_8F_E8_A1_8C[(i - 1)] = _E6_8E_92_E5_BA_8F_E8_A1_8C[((i + 1) - 1)];
          _E6_8E_92_E5_BA_8F_E8_A1_8C[((i + 1) - 1)] = _E6_95_B0_E6_8D_AE;
        }
      }
      i = (typeof i === 'number' ? i : 0) + 1;
    }
  }
  return _E6_8E_92_E5_BA_8F_E8_A1_8C;
}
exports.types = types;
exports.widget = Widget;
