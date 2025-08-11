const chineseRegExp = /[\u4e00-\u9fff]/;

const types = {
  type: 'CHINESE_DETECTOR_WIDGET',
  title: '汉字检测器',
  icon: 'https://example.com/chinese_detector.svg',
  isInvisibleWidget: true,
  isGlobalWidget: true,
  properties: [],
  methods: [
    {
      key: 'containsChinese',
      valueType: 'boolean',
      params: [
        {
          key: 'text',
          label: '检查',
          labelAfter: '是否包含汉字',
          valueType: 'string',
          defaultValue: 'Hello 你好',
        },
      ],
      tooltip: '检测输入的文本中是否包含汉字',
    },
  ],
  events: [],
};

class Widget extends InvisibleWidget {
  constructor(props) {
    super(props);
  }

  containsChinese = (text) => {
    if (typeof text !== 'string') {
      throw new Error('输入必须是一个字符串');
    }
    return chineseRegExp.test(text);
  }
}

exports.types = types;
exports.widget = Widget;
