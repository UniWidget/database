const cjkRanges = [
  [0x4E00, 0x9FFF],
  [0x3400, 0x4DBF],
  [0x20000, 0x2A6DF],
  [0xF900, 0xFAFF],
  [0xFF65, 0xFFDC],
  [0x3040, 0x309F],
  [0x30A0, 0x30FF],
  [0xAC00, 0xD7AF]
];

function isDoubleWidthChar(char) {
  const codePoint = char.codePointAt(0);
  return cjkRanges.some(([start, end]) => codePoint >= start && codePoint <= end);
}

function isChineseOrDigit(char) {
  const codePoint = char.codePointAt(0);
  return (codePoint >= 0x30 && codePoint <= 0x39) || cjkRanges.some(([start, end]) => codePoint >= start && codePoint <= end);
}

const types = {
  type: 'CHINESE_DETECTOR_WIDGET',
  title: '汉字检测器V2.2',
  icon: 'path/to/icon.svg',
  isInvisibleWidget: true,
  isGlobalWidget: true,
  properties: [],
  methods: [
    {
      key: 'performAction',
      valueType: 'any', // 根据具体操作返回不同的类型
      params: [
        {
          key: 'actionType',
          label: '执行操作',
          valueType: 'string',
          defaultValue: 'detectIfContainsChinese',
          dropdown: [
            { label: '检测是否包含汉字', value: 'detectIfContainsChinese' },
            { label: '检测是否全部为汉字', value: 'detectIfAllChinese' },
            { label: '获取所有汉字的索引', value: 'getAllChineseIndexes' },
            { label: '获取汉字的数量', value: 'getChineseCount' },
            { label: '提取所有汉字', value: 'extractAllChinese' },
            { label: '统计所有汉字的数量', value: 'countAllChinese' },
            { label: '查找第一个汉字的索引', value: 'findFirstChineseIndex' },
            { label: '查找最后一个汉字的索引', value: 'findLastChineseIndex' },
            { label: '查找第一个非汉字的索引', value: 'findFirstNonChineseIndex' },
            { label: '查找最后一个非汉字的索引', value: 'findLastNonChineseIndex' },
            { label: '删除所有非汉字/数字的字符', value: 'removeNonChineseDigits' },
            { label: '获取控件信息', value: 'getWidgetInfo' }
          ]
        },
        {
          key: 'inputText',
          label: '输入文本',
          valueType: 'string',
          defaultValue: ''
        }
      ],
      tooltip: '执行汉字检测器操作',
      blockOptions: { callMethodLabel: false },
    },
  ],
  events: [],
};

class ChineseDetectorWidget extends InvisibleWidget {
  constructor(props) {
    super(props);
  }

  performAction(actionType, inputText) {
    switch (actionType) {
      case 'detectIfContainsChinese':
        return this.detectIfContainsChinese(inputText);
      case 'detectIfAllChinese':
        return this.detectIfAllChinese(inputText);
      case 'getAllChineseIndexes':
        return this.getAllChineseIndexes(inputText);
      case 'getChineseCount':
        return this.getChineseCount(inputText);
      case 'extractAllChinese':
        return this.extractAllChinese(inputText);
      case 'countAllChinese':
        return this.countAllChinese(inputText);
      case 'findFirstChineseIndex':
        return this.findFirstChineseIndex(inputText);
      case 'findLastChineseIndex':
        return this.findLastChineseIndex(inputText);
      case 'findFirstNonChineseIndex':
        return this.findFirstNonChineseIndex(inputText);
      case 'findLastNonChineseIndex':
        return this.findLastNonChineseIndex(inputText);
      case 'removeNonChineseDigits':
        return this.removeNonChineseDigits(inputText);
      case 'getWidgetInfo':
        return this.getWidgetInfo();
      default:
        return null;
    }
  }

  detectIfContainsChinese = (inputText) => {
    return inputText.some(char => isDoubleWidthChar(char));
  };

  detectIfAllChinese = (inputText) => {
    return inputText.every(char => isDoubleWidthChar(char));
  };

  getAllChineseIndexes = (inputText) => {
    return Array.from(inputText).reduce((indexes, char, index) => {
      if (isDoubleWidthChar(char)) {
        indexes.push(index);
      }
      return indexes;
    }, []);
  };

  getChineseCount = (inputText) => {
    return inputText.split('').reduce((count, char) => {
      return isDoubleWidthChar(char) ? count + 1 : count;
    }, 0);
  };

  extractAllChinese = (inputText) => {
    return Array.from(inputText).filter(char => isDoubleWidthChar(char)).join('');
  };

  countAllChinese = (inputText) => {
    return inputText.split('').reduce((count, char) => {
      return isDoubleWidthChar(char) ? count + 1 : count;
    }, 0);
  };

  findFirstChineseIndex = (inputText) => {
    for (let i = 0; i < inputText.length; i++) {
      if (isDoubleWidthChar(inputText.charAt(i))) {
        return i;
      }
    }
    return -1;
  };

  findLastChineseIndex = (inputText) => {
    let lastIndex = -1;
    for (let i = 0; i < inputText.length; i++) {
      if (isDoubleWidthChar(inputText.charAt(i))) {
        lastIndex = i;
      }
    }
    return lastIndex;
  };

  findFirstNonChineseIndex = (inputText) => {
    for (let i = 0; i < inputText.length; i++) {
      if (!isDoubleWidthChar(inputText.charAt(i))) {
        return i;
      }
    }
    return -1;
  };

  findLastNonChineseIndex = (inputText) => {
    let lastIndex = -1;
    for (let i = 0; i < inputText.length; i++) {
      if (!isDoubleWidthChar(inputText.charAt(i))) {
        lastIndex = i;
      }
    }
    return lastIndex;
  };

  removeNonChineseDigits = (inputText) => {
    return Array.from(inputText).filter(char => isChineseOrDigit(char)).join('');
  };

  getWidgetInfo = () => {
    return '控件版本号：2.2；共计13个功能；开发人员为kimi ai（主创），垃圾桶°（项目发起人，辅助创作，测试，监工）；版本更新日期：2025.2.15';
  }
}

exports.types = types;
exports.widget = ChineseDetectorWidget;
