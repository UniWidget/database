const types = {
  type: 'STRING_REPLACE_WIDGET',
  title: '垃圾桶-字符串替换',
  icon: 'path/to/replace-icon.svg',
  isInvisibleWidget: true,
  properties: [
    {
      key: 'originalText',
      label: '原始文本',
      valueType: 'string',
      defaultValue: '（要执行替换的文本）'
    },
    {
      key: 'searchChar',
      label: '要替换的字符',
      valueType: 'string',
      defaultValue: '（要替换的字符）'
    },
    {
      key: 'replacementChar',
      label: '把「要替换的字符」替换为',
      valueType: 'string',
      defaultValue: '（清输入文本）'
    },
    {
      key: 'times',
      label: '重复次数',
      valueType: 'number',
      defaultValue: 1
    }
  ],
  methods: [
    {
      key: 'replaceCharacters',
      label: '替换字符',
      params: [
        { key: 'originalText', label: '原始文本', valueType: 'string', defaultValue: '（要执行替换的文本）' },
        { key: 'searchChar', label: '要替换的字符', valueType: 'string', defaultValue: '（要替换的字符）' },
        { key: 'replacementChar', label: '把「要替换的字符」替换为', valueType: 'string', defaultValue: '（清输入文本）' },
        { key: 'times', label: '次数', valueType: 'number', defaultValue: 1 }
      ],
      valueType: 'string'
    }
  ],
  events: [
    {
      key: 'onReplaceComplete',
      label: '替换完成',
      params: [
        { key: 'result', label: '替换后的结果', valueType: 'string' }
      ]
    }
  ]
};

class StringReplaceWidget extends InvisibleWidget {
  constructor(props) {
    super(props);
  }

  replaceCharacters = (originalText, searchChar, replacementChar, times) => {
    let regex = new RegExp(searchChar, 'g');
    let newText = originalText.replace(regex, (match) => {
      if (times > 0) {
        times--;
        return replacementChar;
      } else {
        return match;
      }
    });
    this.emit('onReplaceComplete', newText);
    return newText;
  };
}

exports.types = types;
exports.widget = StringReplaceWidget;
