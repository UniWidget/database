// 控件类型定义
const types = {
  type: 'EXTRACT_DIGITS_WIDGET', // 控件类型，全局唯一
  icon: 'https://static.codemao.cn/pickduck/Ske7sfwh1e.jpg?hash=FnCUftqh6CYvWkr4OifRR_uE2e9Z', // 控件图标，可替换为实际图标链接
  title: '提取数字', // 控件的显示名称
  isInvisibleWidget: true, // 不可见控件
  isGlobalWidget: true, // 全局控件
  properties: [], // 不可见控件不需要定义属性
  methods: [
    {
      key: 'extractDigits',
      label: '提取数字',
      params: [
        { key: 'inputText', label: '输入的字符串', valueType: 'string', defaultValue: '' }
      ],
      valueType: 'string',
      tooltip: '从输入的字符串中提取所有数字',
      blockOptions: { callMethodLabel: false }
    }
  ],
  events: [] // 不可见控件不需要定义事件
};

// 控件实体定义
class ExtractDigitsWidget extends InvisibleWidget {
  constructor(props) {
    super(props);
  }

  // 提取数字
  extractDigits(inputText) {
    // 使用正则表达式匹配所有数字并连接成字符串返回
    return inputText.match(/\d+/g)?.join('') || '';
  }
}

// 导出控件
exports.types = types;
exports.widget = ExtractDigitsWidget;

// 标明作者
console.log('作者：垃圾桶');
