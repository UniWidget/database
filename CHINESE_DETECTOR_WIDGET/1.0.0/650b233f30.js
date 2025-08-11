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
  title: '汉字检测器V1.5',
  icon: 'path/to/icon.svg',
  isInvisibleWidget: true,
  isGlobalWidget: true,
  properties: [],
  methods: [
    {
      key: 'containsChinese',
      valueType: 'boolean',
      params: [
        { key: 'text', label: '检测输入内容是否包含汉字，要检测的文本（内容）为：', valueType: 'string', defaultValue: '' },
      ],
      tooltip: '检测输入文本中是否包含汉字',
    },
    {
      key: 'getAllChinesePositions',
      valueType: 'array',
      params: [
        { key: 'text', label: '返回输入文本（内容）中所有汉字字符的索引位置，输入文本（内容）为：', valueType: 'string', defaultValue: '' },
      ],
      tooltip: '返回输入文本中所有汉字字符的索引位置',
    },
    {
      key: 'getChineseCharacterCount',
      valueType: 'number',
      params: [
        { key: 'text', label: '在文本中检测输入文本中汉字的数量，要检测的文本（内容）为：', valueType: 'string', defaultValue: '' },
      ],
      tooltip: '返回输入文本中汉字的数量',
    },
    {
      key: 'isPureChinese',
      valueType: 'boolean',
      params: [
        { key: 'text', label: '检查输入文本是否完全由汉字组成，要检查的文本（内容）为：', valueType: 'string', defaultValue: '' },
      ],
      tooltip: '检查输入文本是否完全由汉字组成',
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
}

exports.types = types;
exports.widget = ChineseDetectorWidget;
