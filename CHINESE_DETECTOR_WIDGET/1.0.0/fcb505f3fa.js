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

const types = {
  type: 'CHINESE_DETECTOR_WIDGET',
  title: '汉字检测器V2.0',
  icon: 'path/to/icon.svg',
  isInvisibleWidget: true,
  isGlobalWidget: true,
  properties: [],
  methods: [
    {
      key: 'containsChinese',
      valueType: 'boolean',
      params: [
        { key: 'text', label: '要检测的文本内容为：', valueType: 'string', defaultValue: '' },
      ],
      tooltip: '检测输入文本中是否包含汉字'
    },
    {
      key: 'getAllChinesePositions',
      valueType: 'array',
      params: [
        { key: 'text', label: '输入文本内容为：', valueType: 'string', defaultValue: '' },
      ],
      tooltip: '返回输入文本中所有汉字字符的索引位置'
    },
    {
      key: 'getChineseCharacterCount',
      valueType: 'number',
      params: [
        { key: 'text', label: '输入文本内容为：', valueType: 'string', defaultValue: '' },
      ],
      tooltip: '返回输入文本中汉字的数量'
    },
    {
      key: 'isPureChinese',
      valueType: 'boolean',
      params: [
        { key: 'text', label: '要检查的文本内容为：', valueType: 'string', defaultValue: '' },
      ],
      tooltip: '检查输入文本是否完全由汉字组成'
    },
    {
      key: 'extractChineseCharacters',
      valueType: 'string',
      params: [
        { key: 'text', label: '要提取所有汉字字符的文本（内容）为：', valueType: 'string', defaultValue: '' }
      ],
      tooltip: '从输入文本中提取所有汉字字符的文本（内容）'
    },
    {
      key: 'removeChineseCharacters',
      valueType: 'string',
      params: [
        { key: 'text', label: '从输入文本（内容）中移除所有汉字字符，输入的文本（内容）为：', valueType: 'string', defaultValue: '' }
      ],
      tooltip: '从输入文本（内容）中移除所有汉字字符'
    },
    {
      key: 'countChineseCharactersFrequency',
      valueType: 'object',
      params: [
        { key: 'text', label: '统计输入文本（内容）中每个汉字字符的出现次数，要统计的文本（内容）为：', valueType: 'string', defaultValue: '' }
      ],
      tooltip: '统计输入文本中每个汉字字符的出现次数'
    },
    {
      key: 'findFirstChinesePosition',
      valueType: 'number',
      params: [
        { key: 'text', label: '在输入文本（内容）中找到第一个汉字字符的索引位置，输入的文本（内容）为：', valueType: 'string', defaultValue: '' }
      ],
      tooltip: '在输入文本（内容）中找到第一个汉字字符的索引位置'
    },
    {
      key: 'findLastChinesePosition',
      valueType: 'number',
      params: [
        { key: 'text', label: '在输入文本（内容）中找到最后一个汉字字符的索引位置，输入的文本（内容）为：', valueType: 'string', defaultValue: '' }
      ],
      tooltip: '在输入文本中找到最后一个汉字字符的索引位置'
    },
    {
      key: 'findFirstNonChinesePosition',
      valueType: 'number',
      params: [
        { key: 'text', label: '在输入文本（内容）中找到第一个非汉字字符的索引位置，输入的文本（内容）为：', valueType: 'string', defaultValue: '' }
      ],
      tooltip: '在输入文本（内容）中找到第一个非汉字字符的索引位置'
    },
    {
      key: 'findLastNonChinesePosition',
      valueType: 'number',
      params: [
        { key: 'text', label: '在输入文本（内容）中找到最后一个非汉字字符的索引位置，输入的文本（内容）为：', valueType: 'string', defaultValue: '' }
      ],
      tooltip: '在输入文本（内容）中找到最后一个非汉字字符的索引位置'
    },
    {
      key: 'getWidgetAuthor',
      valueType: 'string',
      params: [
        { key: 'text', label: '获取关于此控件的信息→此空无需填写，填写了也没用', valueType: 'string', defaultValue: '' },
      ],
      tooltip: '获取该控件的信息'
    },
  ],
  events: [],
};

class ChineseDetectorWidget extends InvisibleWidget {
  constructor(props) {
    super(props);
  }

  containsChinese = (text) => {
    for (let i = 0; i < text.length; i++) {
      if (isDoubleWidthChar(text.charAt(i))) {
        return true;
      }
    }
    return false;
  };

  getAllChinesePositions = (text) => {
    return Array.from(text).reduce((positions, char, index) => {
      if (isDoubleWidthChar(char)) {
        positions.push(index);
      }
      return positions;
    }, []);
  };

  getChineseCharacterCount = (text) => {
    return text.split('').reduce((count, char) => {
      return isDoubleWidthChar(char) ? count + 1 : count;
    }, 0);
  };

  isPureChinese = (text) => {
    return text.split('').every(char => isDoubleWidthChar(char));
  };

  extractChineseCharacters = (text) => {
    return Array.from(text).filter(char => isDoubleWidthChar(char)).join('');
  };

  removeChineseCharacters = (text) => {
    return Array.from(text).filter(char => !isDoubleWidthChar(char)).join('');
  };

  countChineseCharactersFrequency = (text) => {
    const frequency = {};
    Array.from(text).forEach(char => {
      if (isDoubleWidthChar(char)) {
        frequency[char] = (frequency[char] || 0) + 1;
      }
    });
    return frequency;
  };

  findFirstChinesePosition = (text) => {
    for (let i = 0; i < text.length; i++) {
      if (isDoubleWidthChar(text.charAt(i))) {
        return i;
      }
    }
    return -1;
  };

  findLastChinesePosition = (text) => {
    let lastPosition = -1;
    for (let i = 0; i < text.length; i++) {
      if (isDoubleWidthChar(text.charAt(i))) {
        lastPosition = i;
      }
    }
    return lastPosition;
  };

  findFirstNonChinesePosition = (text) => {
    for (let i = 0; i < text.length; i++) {
      if (!isDoubleWidthChar(text.charAt(i))) {
        return i;
      }
    }
    return -1;
  };

  findLastNonChinesePosition = (text) => {
    let lastPosition = -1;
    for (let i = 0; i < text.length; i++) {
      if (!isDoubleWidthChar(text.charAt(i))) {
        lastPosition = i;
      }
    }
    return lastPosition;
  };

  getWidgetAuthor = () => {
    return '控件版本号：2.0；共计12个功能；开发人员为kimi ai（主创），垃圾桶°（项目发起人，辅助创作，测试，监工）；版本更新日期：2025.2.3';
  }
}

exports.types = types;
exports.widget = ChineseDetectorWidget;
