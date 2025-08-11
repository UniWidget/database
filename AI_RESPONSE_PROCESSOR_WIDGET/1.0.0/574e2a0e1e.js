// 控件类型定义
const types = {
  type: 'AI_RESPONSE_PROCESSOR_WIDGET', // 控件类型，全局唯一
  icon: 'https://static.codemao.cn/pickduck/Ske7sfwh1e.jpg?hash=FnCUftqh6CYvWkr4OifRR_uE2e9Z', 
  title: '处理AI回答', // 控件显示名称
  isInvisibleWidget: true, // 不可见控件
  isGlobalWidget: true, // 是否全局
  properties: [ // 控件属性
    {
      key: 'inputData',
      label: '输入数据',
      valueType: 'string',
      defaultValue: '',
    },
  ],
  methods: [ // 控件方法
    {
      key: 'extractContent',
      label: '提取content内容',
      params: [
        {
          key: 'data',
          label: '数据',
          valueType: 'string',
          defaultValue: '',
        },
      ],
      valueType: 'string',
      tooltip: '从输入数据中提取content内容（通常指Ai的答复）',
    },
    {
      key: 'extractReasoningContent',
      label: '提取reasoning_content内容',
      params: [
        {
          key: 'data',
          label: '数据',
          valueType: 'string',
          defaultValue: '',
        },
      ],
      valueType: 'string',
      tooltip: '从输入数据中提取reasoning_content内容（通常指Ai的思考过程）',
    },
    {
      key: 'extractOutput',
      label: '提取output内容',
      params: [
        {
          key: 'data',
          label: '数据',
          valueType: 'string',
          defaultValue: '',
        },
      ],
      valueType: 'string',
      tooltip: '从输入数据中提取output内容（部分 AI的答复）',
    },
  ],
  events: [ // 控件事件
    {
      key: 'onContentExtracted',
      label: 'content提取完成',
      params: [
        {
          key: 'content',
          label: '提取内容',
          valueType: 'string',
        },
      ],
    },
    {
      key: 'onReasoningContentExtracted',
      label: 'reasoning_content提取完成',
      params: [
        {
          key: 'content',
          label: '提取内容',
          valueType: 'string',
        },
      ],
    },
    {
      key: 'onOutputExtracted',
      label: 'output提取完成',
      params: [
        {
          key: 'content',
          label: '提取内容',
          valueType: 'string',
        },
      ],
    },
  ],
};

// 控件实体定义
class AIResponseProcessorWidget {
  constructor(props) {
    this.props = props;
    this.inputData = props.inputData; // 输入数据
  }

  // 提取content内容方法
  extractContent = (data) => {
    try {
      const parsedData = JSON.parse(data);
      if (parsedData.choices && Array.isArray(parsedData.choices) && parsedData.choices.length > 0) {
        const firstChoice = parsedData.choices[0];
        if (firstChoice.message && typeof firstChoice.message.content === 'string') {
          const content = firstChoice.message.content;
          this.emit('onContentExtracted', content);
          return content;
        }
      }
      this.emit('onContentExtracted', '');
      return '';
    } catch (error) {
      console.error('解析数据失败:', error);
      this.emit('onContentExtracted', '');
      return '';
    }
  };

  // 提取reasoning_content内容方法
  extractReasoningContent = (data) => {
    try {
      const parsedData = JSON.parse(data);
      if (parsedData.choices && Array.isArray(parsedData.choices) && parsedData.choices.length > 0) {
        const firstChoice = parsedData.choices[0];
        if (firstChoice.message && typeof firstChoice.message.reasoning_content === 'string') {
          const content = firstChoice.message.reasoning_content;
          this.emit('onReasoningContentExtracted', content);
          return content;
        }
      }
      this.emit('onReasoningContentExtracted', '');
      return '';
    } catch (error) {
      console.error('解析数据失败:', error);
      this.emit('onReasoningContentExtracted', '');
      return '';
    }
  };

  // 提取output内容方法
  extractOutput = (data) => {
    try {
      const parsedData = JSON.parse(data);
      if (parsedData.output && typeof parsedData.output === 'string') {
        const content = parsedData.output;
        this.emit('onOutputExtracted', content);
        return content;
      }
      this.emit('onOutputExtracted', '');
      return '';
    } catch (error) {
      console.error('解析数据失败:', error);
      this.emit('onOutputExtracted', '');
      return '';
    }
  };

  // 事件触发方法
  emit = (eventName, content) => {
    if (this.props.onEvent) {
      this.props.onEvent(eventName, content);
    }
  };
}

// 导出控件
exports.types = types;
exports.widget = AIResponseProcessorWidget;

// 作者：垃圾桶
// 版本：2.0
