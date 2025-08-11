const axios = require("axios");
 
// ===================== 语音合成控件元数据 ===================== 
const ttsWidgetTypes = {
  isInvisibleWidget: true,
  type: "siliconflow_text_to_speech",
  icon: "https://creation.bcmcdn.com/716/appcraft/TTS_ICON_9VwTy8Brv_1724648676741.png", 
  title: "AI语音合成器",
  version: "1.0.0",
  isGlobalWidget: true,
  properties: [],
  methods: [],
  events: []
};
 
// API文档关联 
ttsWidgetTypes.docs  = {
  url: "https://docs.siliconflow.cn/cn/api-reference/audio/create-speech" 
};
 
// ===================== 方法定义 ===================== 
ttsWidgetTypes.methods.push({ 
  key: "synthesizeSpeech",
  label: "合成语音",
  description: "调用SiliconFlow语音合成API",
  params: [
    {
      key: "baseApi",
      label: "API基础地址",
      valueType: "string",
      defaultValue: "https://api.siliconflow.cn/v1", 
      required: true 
    },
    {
      key: "apiKey",
      label: "API密钥",
      valueType: "string",
      defaultValue: "",
      required: true 
    },
    {
      key: "text",
      label: "合成文本",
      valueType: "string",
      defaultValue: "",
      required: true,
      maxLength: 4096 
    },
    {
      key: "model",
      label: "语音模型",
      valueType: "string",
      defaultValue: "speech-1",
      options: ["speech-1", "speech-2", "speech-3"],
      optional: true 
    },
    {
      key: "voice",
      label: "音色ID",
      valueType: "string",
      defaultValue: "alloy",
      options: ["alloy", "echo", "fable", "onyx", "nova", "shimmer"],
      optional: true 
    },
    {
      key: "responseFormat",
      label: "输出格式",
      valueType: "string",
      defaultValue: "mp3",
      options: ["mp3", "opus", "aac", "flac"],
      optional: true 
    },
    {
      key: "speed",
      label: "语速",
      valueType: "number",
      min: 0.25,
      max: 4.0,
      step: 0.01,
      defaultValue: 1.0,
      optional: true 
    },
    {
      key: "timeout",
      label: "超时秒数",
      valueType: "number",
      defaultValue: 30,
      min: 10,
      max: 120,
      optional: true 
    }
  ]
});
 
// ===================== 事件定义 ===================== 
ttsWidgetTypes.events.push({ 
  key: "onSpeechReady",
  label: "语音合成完成",
  params: [
    {
      key: "audioUrl",
      label: "音频URL",
      valueType: "string"
    },
    {
      key: "metadata",
      label: "合成元数据",
      valueType: "object",
      properties: [
        { key: "model", label: "语音模型", valueType: "string" },
        { key: "voice", label: "音色ID", valueType: "string" },
        { key: "duration", label: "音频时长(秒)", valueType: "number" },
        { key: "generationTime", label: "生成耗时", valueType: "number" }
      ]
    }
  ]
});
 
ttsWidgetTypes.events.push({ 
  key: "onSynthesisFailed",
  label: "合成失败",
  params: [
    { key: "errorCode", label: "错误代码", valueType: "number" },
    { key: "errorMessage", label: "错误详情", valueType: "string" },
    { key: "requestId", label: "请求ID", valueType: "string", optional: true }
  ]
});
 
ttsWidgetTypes.events.push({ 
  key: "onProgress",
  label: "合成进度",
  params: [
    { key: "progress", label: "进度百分比", valueType: "number" },
    { key: "status", label: "状态信息", valueType: "string" }
  ]
});
 
// ===================== 控件实现 ===================== 
class SpeechSynthesizer extends InvisibleWidget {
  constructor(props) {
    super(props);
    this.requestTimers  = {};
  }
 
  /**
   * 语音合成核心方法 
   */
  async synthesizeSpeech(
    baseApi,
    apiKey,
    text,
    model = "speech-1",
    voice = "alloy",
    responseFormat = "mp3",
    speed = 1.0,
    timeout = 30 
  ) {
    // 生成请求唯一标识 
    const requestId = `tts_${Date.now()}_${Math.floor(Math.random()  * 1000)}`;
    
    // === 参数验证 === 
    const validateParam = (validator, errorMsg) => {
      if (!validator()) {
        this.emit("onSynthesisFailed",  {
          errorCode: 400,
          errorMessage: errorMsg,
          requestId 
        });
        return false;
      }
      return true;
    };
 
    const validations = [
      {
        validator: () => baseApi && baseApi.trim().length  > 0,
        error: "API基础地址不能为空"
      },
      {
        validator: () => apiKey && apiKey.trim().length  > 30,
        error: "无效的API密钥"
      },
      {
        validator: () => text && text.trim().length  > 0 && text.length  <= 4096,
        error: "文本长度需在1-4096字符之间"
      },
      {
        validator: () => speed >= 0.25 && speed <= 4.0,
        error: "语速需在0.25-4.0倍之间"
      },
      {
        validator: () => timeout >= 10 && timeout <= 120,
        error: "超时时间需在10-120秒之间"
      }
    ];
 
    for (const validation of validations) {
      if (!validateParam(validation.validator,  validation.error))  return;
    }
 
    // === 构建API请求 === 
    const apiUrl = `${baseApi.replace(/\/$/,  "")}/audio/speech`;
    const startTime = Date.now(); 
    const requestData = {
      model,
      input: text.trim(), 
      voice,
      response_format: responseFormat,
      speed 
    };
 
    // 进度模拟器 
    this.requestTimers[requestId]  = setInterval(() => {
      if (!this.requestTimers[requestId])  return;
      const elapsed = Math.floor((Date.now()  - startTime) / 1000);
      const progress = Math.min(Math.floor(elapsed  / (timeout * 0.8) * 100), 100);
      this.emit("onProgress",  {
        progress,
        status: "正在合成语音"
      });
    }, 1000);
 
    this.emit("onProgress",  {
      progress: 0,
      status: "开始处理请求"
    });
 
    try {
      // === 发送API请求 === 
      const response = await axios({
        method: "post",
        url: apiUrl,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
          "X-Request-ID": requestId 
        },
        timeout: timeout * 1000,
        data: requestData,
        responseType: "arraybuffer"
      });
 
      clearInterval(this.requestTimers[requestId]); 
      delete this.requestTimers[requestId]; 
 
      // === 处理成功响应 === 
      let audioUrl = '';
      const mimeTypes = {
        mp3: 'audio/mpeg',
        opus: 'audio/ogg',
        aac: 'audio/aac',
        flac: 'audio/flac'
      };
 
      const audioBlob = new Blob([response.data], { 
        type: mimeTypes[responseFormat] || 'application/octet-stream' 
      });
      audioUrl = URL.createObjectURL(audioBlob); 
 
      this.emit("onProgress",  {
        progress: 100,
        status: "合成完成"
      });
 
      // 构造元数据 
      const metadata = {
        model,
        voice,
        duration: response.headers['x-audio-duration']  || 0,
        generationTime: Math.floor((Date.now()  - startTime) / 1000)
      };
 
      this.emit("onSpeechReady",  {
        audioUrl,
        metadata 
      });
 
      return { 
        success: true, 
        audioUrl, 
        metadata 
      };
    } catch (error) {
      clearInterval(this.requestTimers[requestId]); 
      delete this.requestTimers[requestId]; 
 
      // === 错误处理 === 
      let errorCode = 500;
      let errorMessage = "未知错误";
      let serverRequestId = null;
 
      if (error.response)  {
        errorCode = error.response.status  || 500;
        errorMessage = error.response.data?.error?.message  || 
                      error.response.data?.error?.code  || 
                      error.response.statusText; 
        serverRequestId = error.response.headers['x-request-id']; 
      } else if (error.code  === 'ECONNABORTED') {
        errorCode = 504;
        errorMessage = `请求超时（${timeout}秒）`;
      } else {
        errorMessage = error.message  || error.toString(); 
      }
 
      this.emit("onSynthesisFailed",  {
        errorCode,
        errorMessage,
        requestId: serverRequestId || requestId 
      });
 
      return { 
        success: false, 
        error: { 
          code: errorCode, 
          message: errorMessage 
        } 
      };
    }
  }
 
  // 组件卸载时清理定时器 
  componentWillUnmount() {
    Object.keys(this.requestTimers).forEach(requestId  => {
      clearInterval(this.requestTimers[requestId]); 
      delete this.requestTimers[requestId]; 
    });
  }
}
 
// ===================== 模块导出 ===================== 
exports.types  = ttsWidgetTypes;
exports.widget  = SpeechSynthesizer;