const axios = require("axios");
 
// ===================== 小部件元数据定义 ===================== 
const types = {
  isInvisibleWidget: true,
  type: "aioncoco_WIDGET",
  icon: "https://creation.bcmcdn.com/716/appcraft/IMAGE_9VwTy8Brv_1724648676741.png", 
  title: "aioncoco",
  version: "1.0.7", // 版本号升级 
  isGlobalWidget: true,
  properties: [],
  methods: [],
  events: []
};
 
// 关联文档 
types.docs  = { url: "https://www.yuque.com/liushiancoludai/oei1as"  };
 
// ===================== 方法定义 ===================== 
types.methods.push({ 
  key: "chat",
  label: "发起AI对话",
  description: "向AI模型发送请求并获取结构化响应",
  params: [
    { key: "prompt", label: "用户消息", valueType: "string", defaultValue: "", required: true },
    { key: "apiKey", label: "API密钥", valueType: "string", defaultValue: "", required: true },
    { key: "baseUrl", label: "API基础地址", valueType: "string", defaultValue: "https://api.siliconflow.cn/v1",  optional: true },
    { key: "model", label: "模型名称", valueType: "string", defaultValue: "deepseek-ai/DeepSeek-R1", optional: true },
    { key: "systemPrompt", label: "系统提示", valueType: "string", defaultValue: "你是一个乐于助人的AI助手", optional: true },
    { key: "context", label: "上下文内容", valueType: "string", defaultValue: "", optional: true },
    { key: "timeout", label: "超时秒数", valueType: "number", defaultValue: 30, minValue: 1, maxValue: 180, optional: true },
    { key: "maxTokens", label: "最大生成长度", valueType: "number", defaultValue: 2048, minValue: 64, maxValue: 4096, optional: true },
    { key: "temperature", label: "温度控制", valueType: "number", defaultValue: 0.7, minValue: 0, maxValue: 2, step: 0.1, optional: true },
    { key: "includeReasoning", label: "包含推理过程", valueType: "boolean", defaultValue: false, optional: true, description: "是否在回复中包含推理链" }
  ]
});
 
// ===================== 事件定义 ===================== 
types.events.push({ 
  key: "onChat",
  label: "收到AI回复",
  params: [
    { key: "content", label: "回复内容", valueType: "string", defaultValue: "" },
    { key: "reasoning", label: "推理过程", valueType: "string", defaultValue: "" },
    { key: "prompt_tokens", label: "提示token数", valueType: "number", defaultValue: 0 },
    { key: "completion_tokens", label: "生成token数", valueType: "number", defaultValue: 0 },
    { key: "total_tokens", label: "总token数", valueType: "number", defaultValue: 0 },
    { key: "reasoning_tokens", label: "推理token数", valueType: "number", defaultValue: 0 }
  ]
});
 
types.events.push({ 
  key: "onChatErr",
  label: "对话错误",
  params: [{ key: "err", label: "错误信息", valueType: ["string", "number", "boolean", "color", "array", "object"], defaultValue: "" }]
});
 
types.events.push({ 
  key: "onSendStatus",
  label: "请求发送状态",
  params: [{ key: "status", label: "发送状态码", valueType: "number", defaultValue: 1, description: "1=发送成功, 0=发送失败" }]
});
 
types.events.push({ 
  key: "onResponseStatus",
  label: "响应处理状态",
  params: [{ key: "status", label: "响应状态码", valueType: "number", defaultValue: 1, description: "1=响应成功, 0=响应失败" }]
});
 
// ===================== 小部件实现 ===================== 
class Widget extends InvisibleWidget {
  constructor(props) {
    super(props);
  }
 
  /**
   * 发起AI对话（增强版）
   */
  chat(
    prompt,
    apiKey,
    baseUrl = "https://api.siliconflow.cn/v1", 
    model = "deepseek-ai/DeepSeek-R1",
    systemPrompt = "你是一个乐于助人的AI助手",
    context = "",
    timeout = 30,
    maxTokens = 2048,
    temperature = 0.7,
    includeReasoning = false 
  ) {
    // === 参数验证 === 
    if (!prompt || prompt.trim()  === "") {
      this.emit("onChatErr",  "用户消息不能为空");
      return;
    }
    if (!apiKey || apiKey.trim()  === "") {
      this.emit("onChatErr",  "API密钥不能为空");
      return;
    }
 
    // 数值型参数验证 
    const validateNumber = (value, name, min, max) => {
      if (isNaN(value) || value < min || value > max) {
        this.emit("onChatErr",  `${name}必须在${min}-${max}范围内`);
        return false;
      }
      return true;
    };
    if (!validateNumber(timeout, "超时时间", 1, 180)) return;
    if (!validateNumber(maxTokens, "最大token数", 64, 8192)) return;
    if (!validateNumber(temperature, "温度值", 0, 2)) return;
 
    // === 构建强化请求消息 === 
    const messages = [];
    
    // 1. 系统提示增强逻辑 
    let fullSystemPrompt = systemPrompt.trim(); 
    if (includeReasoning) {
      fullSystemPrompt += "\n请按照以下格式提供回答："
        + "\n[思考过程]：(详细展示推理链条)"
        + "\n[最终结论]：(简明扼要的回答)"
        + "\n请确保思考过程清晰完整";
    }
    
    if (fullSystemPrompt !== "") {
      messages.push({  role: "system", content: fullSystemPrompt });
    }
    
    // 2. 添加上下文 
    if (context && context.trim()  !== "") {
      messages.push({  role: "system", content: context.trim()  });
    }
    
    // 3. 添加用户消息（增强指令）
    let userPrompt = prompt.trim(); 
    if (includeReasoning) {
      userPrompt += "\n请展示你的思考过程和最终结论";
    }
    messages.push({  role: "user", content: userPrompt });
 
    // === 发送API请求 === 
    const apiUrl = `${baseUrl}/chat/completions`;
    let requestSent = false;
    
    axios({
      method: "post",
      url: apiUrl,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      timeout: timeout * 1000,
      data: {
        model: model,
        messages: messages,
        max_tokens: maxTokens,
        temperature: temperature,
        stream: false 
      }
    })
    .then((response) => {
      // 标记请求已发送 
      if (!requestSent) {
        this.emit("onSendStatus",  1);
        requestSent = true;
      }
 
      const responseData = response.data; 
      
      // 1. 提取标准token统计 
      const tokenData = responseData.usage  || {};
      const promptTokens = tokenData.prompt_tokens  || 0;
      const completionTokens = tokenData.completion_tokens  || 0;
      const totalTokens = tokenData.total_tokens  || 0;
      
      // 2. 解析内容和推理过程 
      let content = "";
      let reasoning = "";
      let reasoningTokens = 0;
      
      const aiResponse = responseData.choices?.[0]?.message?.content  || "";
      
      if (includeReasoning && aiResponse) {
        // 尝试解析增强格式的响应 
        const reasoningMatch = aiResponse.match(/\[ 思考过程\]\s*:\s*(.+?)\s*\[最终结论\]/is);
        const conclusionMatch = aiResponse.match(/\[ 最终结论\]\s*:\s*(.+)/is);
        
        if (reasoningMatch && conclusionMatch) {
          reasoning = reasoningMatch[1].trim();
          content = conclusionMatch[1].trim();
          
          // 计算推理token数（近似值）
          reasoningTokens = Math.round(reasoning.length  / 3);
        } else {
          // 降级处理：无法解析时全部作为内容 
          content = aiResponse;
          reasoning = "未能成功解析推理过程";
        }
      } else {
        content = aiResponse;
      }
      
      // 3. 构造结构化响应 
      const structuredResponse = {
        content: content,
        reasoning: reasoning,
        prompt_tokens: promptTokens,
        completion_tokens: completionTokens,
        total_tokens: totalTokens,
        reasoning_tokens: reasoningTokens 
      };
 
      // 4. 触发增强事件 
      this.emit("onChat",  
        structuredResponse.content, 
        structuredResponse.reasoning, 
        structuredResponse.prompt_tokens, 
        structuredResponse.completion_tokens, 
        structuredResponse.total_tokens, 
        structuredResponse.reasoning_tokens  
      );
      this.emit("onResponseStatus",  1);
    })
    .catch((error) => {
      // 请求状态处理 
      if (!requestSent) {
        this.emit("onSendStatus",  0);
      } else {
        this.emit("onResponseStatus",  0);
      }
 
      // 错误处理 
      let errorMessage = "";
      if (error.code  === 'ECONNABORTED') {
        errorMessage = `请求超时（${timeout}秒）`;
      } else if (error.response)  {
        errorMessage = `API错误 [${error.response.status}]:  ${error.response.data?.error?.message  || "无详细错误信息"}`;
      } else if (error.request)  {
        errorMessage = "网络错误: 无响应";
      } else {
        errorMessage = error.message  || "未知错误";
      }
      
      // 返回带默认值的错误响应 
      this.emit("onChat",  
        "请求失败，无有效内容",
        errorMessage,
        0,
        0,
        0,
        0 
      );
      this.emit("onChatErr",  errorMessage);
    });
  }
}
 
// ===================== 模块导出 ===================== 
exports.types  = types;
exports.widget  = Widget;