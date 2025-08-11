var _E6_95_B0_E6_8D_AE, _E6_8E_92_E5_BA_8F_E8_A1_8C, _E5_AD_981, _E8_BF_94_E5_9B_9E, i;


var CryptoJS = require("crypto-js");

const types = {
    isInvisibleWidget: true,
    type: "mint_YKCX",
    icon: "https://static.codemao.cn/coco/player/unstable/Byl-Pkuti.image/svg+xml?hash=FpF7fwJHdO2CPkkvNvAwIG2LnzMb",
    title: "云库键查询",
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
    label: '查询云库',
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
          key: 'j',
          label: '列键',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: 'key',
      },
      {
          key: 'ff',
          label: '的值',
          valueType: 'string',
          dropdown: [
    { label: '=', value: '=', },

    { label: '≠', value: '≠', },

    { label: '包含', value: '包含', },

    { label: '不包含', value: '不包含', },
  ],
      },


      {
          key: 'sj',
          label: '',
          valueType: 'multilineString',
      checkType: 'string',
          defaultValue: '0',
      },],
    valueType: 'array',
    blockOptions: {
    color: '#ffbb55',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.methodName = function (tb,ap,j,ff,sj,) {
      _E6_95_B0_E6_8D_AE = '';
  _E6_8E_92_E5_BA_8F_E8_A1_8C = [];
  _E5_AD_981 = [];
  _E8_BF_94_E5_9B_9E = [];
  _E6_8E_92_E5_BA_8F_E8_A1_8C = tb;
  i = 1;
  var repeat_end = _E6_8E_92_E5_BA_8F_E8_A1_8C.length;
  for (var count = 0;count < repeat_end;count++) {
    _E5_AD_981 = _E6_8E_92_E5_BA_8F_E8_A1_8C[(i - 1)];
    if (ff == '=') {
      if ((JSON.parse(_E5_AD_981[(ap - 1)])[j]) == sj) {
        _E8_BF_94_E5_9B_9E.push(_E6_8E_92_E5_BA_8F_E8_A1_8C[(i - 1)]);
      }
    } else if (ff == '不包含') {
      if ((((JSON.parse(_E5_AD_981[(ap - 1)])[j])).toString()).indexOf((sj).toString()) + 1 == '') {
        _E8_BF_94_E5_9B_9E.push(_E6_8E_92_E5_BA_8F_E8_A1_8C[(i - 1)]);
      }
    } else if (ff == '≠') {
      if ((JSON.parse(_E5_AD_981[(ap - 1)])[j]) != sj) {
        _E8_BF_94_E5_9B_9E.push(_E6_8E_92_E5_BA_8F_E8_A1_8C[(i - 1)]);
      }
    } else if (ff == '包含') {
      if ((((JSON.parse(_E5_AD_981[(ap - 1)])[j])).toString()).indexOf((sj).toString()) + 1 != '') {
        _E8_BF_94_E5_9B_9E.push(_E6_8E_92_E5_BA_8F_E8_A1_8C[(i - 1)]);
      }
    }
    i = (typeof i === 'number' ? i : 0) + 1;
  }
  return _E8_BF_94_E5_9B_9E;
}
types['methods'].push({
    key: 'wbzjson',
    label: '文本转json',
    params: [
      {
          key: 'txt',
          label: '文本',
          valueType: 'multilineString',
      checkType: 'string',
          defaultValue: '{"key1":0}',
      },],
    valueType: 'object',
    blockOptions: {
    color: '#ffbb55',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.wbzjson = function (txt,) {
      return (JSON.parse(txt));
}
exports.types = types;
exports.widget = Widget;
