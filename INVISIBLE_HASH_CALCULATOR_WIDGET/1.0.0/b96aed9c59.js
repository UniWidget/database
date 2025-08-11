/* eslint-disable no-undef */
// 引入 CryptoJS 库
const CryptoJS = require('crypto-js');

const types = {
  type: 'INVISIBLE_HASH_CALCULATOR_WIDGET',
  icon: 'https://example.com/hash-calculator-icon.png', // 替换为实际的图标 URL
  title: '不可见哈希计算器',
  isInvisibleWidget: true,
  isGlobalWidget: false,
  properties: [
    // 这里不再需要 'inputString' 属性
  ],
  methods: [
    {
      key: 'calculateHash',
      label: '计算哈希',
      params: [
        {
          key: 'inputString',
          label: '输入字符串',
          valueType: 'string',
          defaultValue: '',
        },
      ],
      valueType: 'string', // 返回值类型为字符串
    },
  ],
  events: [], // 保留 events 字段，但不包含具体的事件属性

};

class InvisibleHashCalculatorWidget extends InvisibleWidget {
  constructor(props) {
    super(props);
  }

  calculateHash = (inputString) => {
    // 使用 CryptoJS 库计算 SHA-256 哈希
    const hash = CryptoJS.SHA256(inputString).toString(CryptoJS.enc.Hex);

    // 返回计算得到的哈希值
    return hash;
  };

  // 根据需要添加其他方法或逻辑

}

exports.types = types;
exports.widget = InvisibleHashCalculatorWidget;
