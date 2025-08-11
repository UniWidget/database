/**
 * 聊天框富/纯文本转换
 * 作者：垃圾桶
 */

const types = {
  type: 'CHAT_TEXT_CONVERT_WIDGET',
  title: '聊天框富/纯文本转换',
  icon: 'https://static.codemao.cn/pickduck/Ske7sfwh1e.jpg',
  isInvisibleWidget: true,
  isGlobalWidget: true,
  properties: [
    {
      key: 'mode',
      label: '转换模式',
      valueType: 'string',
      defaultValue: 'plain',
      dropdown: [
        { label: '纯文本', value: 'plain' },
        { label: '富文本', value: 'rich' }
      ]
    }
  ],
  methods: [
    {
      key: 'convert',
      label: '转换聊天框数据',
      valueType: 'string',
      params: [
        {
          key: 'jsonData',
          label: '聊天框JSON数据',
          valueType: 'string',
          defaultValue: '[{"type":"text","msg":"Hello"}]'
        }
      ],
      tooltip: '根据模式统一转换type字段'
    }
  ],
  events: []
};

class ChatTextConvertWidget extends InvisibleWidget {
  constructor(props) {
    super(props);
    this.mode = props.mode || 'plain';
  }

  convert(jsonData) {
    try {
      const arr = JSON.parse(jsonData);
      if (!Array.isArray(arr)) return '[]';
      const res = arr.map(item => {
        const it = { ...item };
        if (['text', 'richText'].includes(it.type)) {
          it.type = this.mode === 'rich' ? 'richText' : 'text';
        }
        return it;
      });
      return JSON.stringify(res);
    } catch {
      return '[]';
    }
  }
}

exports.types = types;
exports.widget = ChatTextConvertWidget;
