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
  title: '汉字检测器V1.2',
  icon: 'path/to/icon.svg',
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
          label: '在文本中',
          valueType: 'string',
          defaultValue: '',
        },
      ],
      tooltip: '检测输入文本中是否包含汉字',
    },
    {
      key: 'getAllChinesePositions',
      valueType: 'array',
      params: [
        {
          key: 'text',
          label: '在文本中',
          valueType: 'string',
          defaultValue: '',
        },
      ],
      tooltip: '返回输入文本中所有汉字字符的索引位置',
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
    const positions = [];
    for (let i = 0; i < text.length; i++) {
      if (isDoubleWidthChar(text.charAt(i))) {
        positions.push(i);
      }
    }
    return positions;
  };
}

exports.types = types;
exports.widget = ChineseDetectorWidget;
