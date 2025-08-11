const axios = require("axios");

// ===================== 小部件元数据定义 ===================== 
const types = {
  isInvisibleWidget: true,
  type: "ai识图pro_WIDGET",
  icon: "https://creation.bcmcdn.com/716/appcraft/IMAGE_9VwTy8Brv_1724648676741.png", 
  title: "ai识图",
  version: "1.0.7", // 版本号升级 
  isGlobalWidget: true,
  properties: [],
  methods: [],
  events: []
};

// 关联文档 
types.docs = { url: "https://www.yuque.com/liushiancoludai/oei1as" };

// ===================== 方法定义 ===================== 
types.methods.push({ 
  key: "imageRecognition",
  label: "图像识别",
  description: "向AI模型发送图像识别请求并获取结构化响应",
  params: [
    { key: "imageUrl", label: "图片URL", valueType: "string", defaultValue: "", required: true },
    { key: "apiKey", label: "API密钥", valueType: "string", defaultValue: "", required: true },
    { key: "baseUrl", label: "API基础地址", valueType: "string", defaultValue: "https://api.qingyuntop.com/v1", optional: true },
    { key: "model", label: "模型名称", valueType: "string", defaultValue: "clip-vit-base-patch32", optional: true },
    { key: "prompt", label: "识别提示", valueType: "string", defaultValue: "这张图片包含什么内容？", optional: true },
    { key: "timeout", label: "超时秒数", valueType: "number", defaultValue: 30, minValue: 1, maxValue: 180, optional: true },
    { key: "maxTokens", label: "最大生成长度", valueType: "number", defaultValue: 1024, minValue: 64, maxValue: 4096, optional: true },
    { key: "temperature", label: "温度控制", valueType: "number", defaultValue: 0.7, minValue: 0, maxValue: 2, step: 0.1, optional: true },
    { key: "detailLevel", label: "详细程度", valueType: "number", defaultValue: 1, minValue: 1, maxValue: 3, description: "1=简洁, 2=详细, 3=非常详细", optional: true }
  ]
});

// ===================== 事件定义 ===================== 
types.events.push({ 
  key: "onRecognition",
  label: "收到识别结果",
  params: [
    { key: "content", label: "识别内容", valueType: "string", defaultValue: "" },
    { key: "objects", label: "识别对象", valueType: "array", defaultValue: [] },
    { key: "confidence", label: "置信度", valueType: "number", defaultValue: 0 },
    { key: "prompt_tokens", label: "提示token数", valueType: "number", defaultValue: 0 },
    { key: "completion_tokens", label: "生成token数", valueType: "number", defaultValue: 0 },
    { key: "total_tokens", label: "总token数", valueType: "number", defaultValue: 0 }
  ]
});

types.events.push({ 
  key: "onRecognitionErr",
  label: "识别错误",
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
   * 图像识别方法
   */
  imageRecognition(
    imageUrl,
    apiKey,
    baseUrl = "https://api.qingyuntop.com/v1",
    model = "clip-vit-base-patch32",
    prompt = "这张图片包含什么内容？",
    timeout = 30,
    maxTokens = 1024,
    temperature = 0.7,
    detailLevel = 1
  ) {
    // === 参数验证 === 
    if (!imageUrl || imageUrl.trim() === "") {
      this.emit("onRecognitionErr", "图片URL不能为空");
      return;
    }
    if (!apiKey || apiKey.trim() === "") {
      this.emit("onRecognitionErr", "API密钥不能为空");
      return;
    }

    // 数值型参数验证 
    const validateNumber = (value, name, min, max) => {
      if (isNaN(value) || value < min || value > max) {
        this.emit("onRecognitionErr", `${name}必须在${min}-${max}范围内`);
        return false;
      }
      return true;
    };
    if (!validateNumber(timeout, "超时时间", 1, 180)) return;
    if (!validateNumber(maxTokens, "最大token数", 64, 4096)) return;
    if (!validateNumber(temperature, "温度值", 0, 2)) return;
    if (!validateNumber(detailLevel, "详细程度", 1, 3)) return;

    // === 构建请求数据 ===
    const messages = [
      {
        role: "user",
        content: [
          { type: "text", text: prompt },
          { type: "image_url", image_url: { url: imageUrl } }
        ]
      }
    ];

    // 根据详细程度调整提示
    let systemPrompt = "你是一个专业的图像识别助手。";
    switch(detailLevel) {
      case 1:
        systemPrompt += "请简洁地回答图片内容。";
        break;
      case 2:
        systemPrompt += "请详细描述图片内容，包括主要对象和场景。";
        break;
      case 3:
        systemPrompt += "请非常详细地描述图片内容，包括对象、场景、颜色、位置关系等所有细节。";
        break;
    }

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
        messages: [
          { role: "system", content: systemPrompt },
          ...messages
        ],
        max_tokens: maxTokens,
        temperature: temperature,
        stream: false
      }
    })
    .then((response) => {
      // 标记请求已发送 
      if (!requestSent) {
        this.emit("onSendStatus", 1);
        requestSent = true;
      }

      const responseData = response.data; 
      
      // 1. 提取标准token统计 
      const tokenData = responseData.usage || {};
      const promptTokens = tokenData.prompt_tokens || 0;
      const completionTokens = tokenData.completion_tokens || 0;
      const totalTokens = tokenData.total_tokens || 0;
      
      // 2. 解析识别结果
      const content = responseData.choices?.[0]?.message?.content || "";
      
      // 3. 尝试解析对象和置信度（简单实现）
      let objects = [];
      let confidence = 0;
      
      // 简单提取对象（实际API可能返回结构化数据）
      const objectMatches = content.match(/(人|汽车|动物|建筑|树木|天空)/g);
      if (objectMatches) {
        objects = [...new Set(objectMatches)]; // 去重
        confidence = Math.min(objectMatches.length * 0.3, 0.95); // 模拟置信度
      }
      
      // 4. 构造结构化响应 
      const structuredResponse = {
        content: content,
        objects: objects,
        confidence: confidence,
        prompt_tokens: promptTokens,
        completion_tokens: completionTokens,
        total_tokens: totalTokens
      };

      // 5. 触发事件 
      this.emit("onRecognition",  
        structuredResponse.content, 
        structuredResponse.objects, 
        structuredResponse.confidence,
        structuredResponse.prompt_tokens, 
        structuredResponse.completion_tokens, 
        structuredResponse.total_tokens
      );
      this.emit("onResponseStatus", 1);
    })
    .catch((error) => {
      // 请求状态处理 
      if (!requestSent) {
        this.emit("onSendStatus", 0);
      } else {
        this.emit("onResponseStatus", 0);
      }

      // 错误处理 
      let errorMessage = "";
      if (error.code === 'ECONNABORTED') {
        errorMessage = `请求超时（${timeout}秒）`;
      } else if (error.response) {
        errorMessage = `API错误 [${error.response.status}]: ${error.response.data?.error?.message || "无详细错误信息"}`;
      } else if (error.request) {
        errorMessage = "网络错误: 无响应";
      } else {
        errorMessage = error.message || "未知错误";
      }
      
      // 返回带默认值的错误响应 
      this.emit("onRecognition",  
        "请求失败，无有效内容",
        [],
        0,
        0,
        0,
        0
      );
      this.emit("onRecognitionErr", errorMessage);
    });
  }
}

// ===================== 模块导出 ===================== 
exports.types = types;
exports.widget = Widget;