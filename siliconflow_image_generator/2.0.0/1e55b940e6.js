const axios = require("axios");

// ===================== 绘图控件元数据 ===================== 
const imgWidgetTypes = {
  isInvisibleWidget: true,
  type: "siliconflow_image_generator",
  icon: "https://creation.bcmcdn.com/716/appcraft/IMAGE_9VwTy8Brv_1724648676741.png", 
  title: "AI图像生成器",
  version: "2.0.0",
  isGlobalWidget: true,
  properties: [],
  methods: [],
  events: []
};
 
// API文档关联 
imgWidgetTypes.docs = {
  url: "https://docs.siliconflow.cn/cn/api-reference/images/images-generations" 
};
 
// ===================== 方法定义 ===================== 
imgWidgetTypes.methods.push({ 
  key: "generateImage",
  label: "生成图像",
  description: "调用SiliconFlow图像生成API",
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
      key: "prompt",
      label: "提示词",
      valueType: "string",
      defaultValue: "",
      required: true 
    },
    {
      key: "model",
      label: "模型",
      valueType: "string",
      defaultValue: "stable-diffusion-xl-1024-v1-0",
      options: [
        "stable-diffusion-xl-1024-v1-0", 
        "stable-diffusion-v1-5",
        "anything-v5"
      ],
      optional: true 
    },
    {
      key: "width",
      label: "图像宽度",
      valueType: "number",
      min: 512,
      max: 2048,
      step: 64,
      defaultValue: 1024,
      optional: true 
    },
    {
      key: "height",
      label: "图像高度",
      valueType: "number",
      min: 512,
      max: 2048,
      step: 64,
      defaultValue: 1024,
      optional: true 
    },
    {
      key: "numImages",
      label: "生成数量",
      valueType: "number",
      min: 1,
      max: 4,
      defaultValue: 1,
      optional: true 
    },
    {
      key: "steps",
      label: "迭代步数",
      valueType: "number",
      min: 10,
      max: 50,
      defaultValue: 30,
      optional: true 
    },
    {
      key: "cfgScale",
      label: "相关性",
      valueType: "number",
      min: 1,
      max: 20,
      step: 0.5,
      defaultValue: 7,
      optional: true 
    },
    {
      key: "sampler",
      label: "采样器", 
      valueType: "string", 
      defaultValue: "Euler a",
      options: [
        "Euler a", "Euler", "LMS", "Heun", "DPM2", "DPM2 a", 
        "DPM++ 2S a", "DPM++ 2M", "DPM++ SDE", "DPM fast"
      ],
      optional: true 
    },
    {
      key: "seed",
      label: "随机种子",
      valueType: "number",
      defaultValue: -1,
      optional: true 
    },
    {
      key: "negativePrompt",
      label: "负面提示",
      valueType: "string",
      defaultValue: "",
      optional: true 
    },
    {
      key: "timeout",
      label: "超时秒数",
      valueType: "number",
      defaultValue: 90,
      min: 30,
      max: 300,
      optional: true 
    }
  ]
});
 
// ===================== 事件定义 ===================== 
imgWidgetTypes.events.push({ 
  key: "onImageReady",
  label: "图像生成完成",
  params: [
    {
      key: "images",
      label: "图像URL列表",
      valueType: "array",
      itemType: "string"
    },
    {
      key: "metadata",
      label: "生成元数据",
      valueType: "object",
      properties: [
        { key: "model", label: "模型", valueType: "string" },
        { key: "prompt", label: "提示词", valueType: "string" },
        { key: "seed", label: "种子值", valueType: "number" },
        { key: "size", label: "图像尺寸", valueType: "string" },
        { key: "generationTime", label: "生成耗时", valueType: "number" }
      ]
    }
  ]
});
 
imgWidgetTypes.events.push({ 
  key: "onGenerationFailed",
  label: "生成失败",
  params: [
    { key: "errorCode", label: "错误代码", valueType: "number" },
    { key: "errorMessage", label: "错误详情", valueType: "string" },
    { key: "requestId", label: "请求ID", valueType: "string", optional: true }
  ]
});
 
imgWidgetTypes.events.push({ 
  key: "onProgress",
  label: "生成进度",
  params: [
    { key: "step", label: "当前步骤", valueType: "number" },
    { key: "totalSteps", label: "总步骤数", valueType: "number" },
    { key: "status", label: "状态信息", valueType: "string" }
  ]
});
 
// ===================== 控件实现 ===================== 
class ImageGenerator extends InvisibleWidget {
  constructor(props) {
    super(props);
    this.requestTimers = {};
  }
 
  /**
   * 生成图像核心方法 
   */
  async generateImage(
    baseApi,
    apiKey,
    prompt,
    model = "stable-diffusion-xl-1024-v1-0",
    width = 1024,
    height = 1024,
    numImages = 1,
    steps = 30,
    cfgScale = 7,
    sampler = "Euler a",
    seed = -1,
    negativePrompt = "",
    timeout = 90
  ) {
    // 请求唯一标识 
    const requestId = `img-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    
    // 参数预处理
    const finalSize = {
      width: width,
      height: height
    };
    const finalQuality = {
      numImages: numImages,
      steps: steps,
      cfgScale: cfgScale
    };
    const finalAdvanced = {
      sampler: sampler,
      seed: seed,
      negativePrompt: negativePrompt
    };
    
    // === 参数验证 === 
    const validateParam = (validator, errorMsg) => {
      if (!validator()) {
        this.emit("onGenerationFailed", 400, errorMsg, requestId);
        return false;
      }
      return true;
    };
 
    const validations = [
      {
        validator: () => baseApi && baseApi.trim().length > 0,
        error: "API基础地址不能为空"
      },
      {
        validator: () => apiKey && apiKey.trim().length > 30,
        error: "无效的API密钥"
      },
      {
        validator: () => prompt && prompt.trim().length > 3,
        error: "提示词至少需要4个字符"
      },
      {
        validator: () => finalSize.width >= 512 && finalSize.width <= 2048 && 
                        finalSize.height >= 512 && finalSize.height <= 2048,
        error: "图像尺寸需在512-2048像素之间"
      },
      {
        validator: () => timeout >= 30 && timeout <= 300,
        error: "超时时间需在30-300秒之间"
      }
    ];
 
    for (const validation of validations) {
      if (!validateParam(validation.validator, validation.error)) return;
    }
 
    // === 构建API请求 === 
    const apiUrl = `${baseApi.replace(/\/$/, '')}/images/generations`;
    const startTime = Date.now(); 
    
    const requestData = {
      model,
      prompt: prompt.trim(), 
      width: finalSize.width, 
      height: finalSize.height, 
      num_images: finalQuality.numImages, 
      steps: finalQuality.steps, 
      cfg_scale: finalQuality.cfgScale, 
      sampler: finalAdvanced.sampler  
    };
    
    if (finalAdvanced.seed !== -1) {
      requestData.seed = finalAdvanced.seed; 
    }
    
    if (finalAdvanced.negativePrompt) {
      requestData.negative_prompt = finalAdvanced.negativePrompt.trim(); 
    }
    
    // 进度模拟器 
    const progressSteps = Math.min(finalQuality.steps, 50);
    this.requestTimers[requestId] = setInterval(() => {
      if (!this.requestTimers[requestId]) return;
      
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const progress = Math.min(Math.floor(elapsed / (timeout / progressSteps * 0.8)), progressSteps);
      
      this.emit("onProgress",  
        progress, 
        progressSteps,
        `生成中 (${progress}/${progressSteps}) - 已用${elapsed}秒`
      );
    }, 2000);
    
    this.emit("onProgress", 0, progressSteps, "开始处理请求");
 
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
        data: requestData 
      });
      
      clearInterval(this.requestTimers[requestId]); 
      delete this.requestTimers[requestId]; 
      
      // === 处理成功响应 === 
      const responseData = response.data; 
      const images = (responseData.data || []).map(img => img.url).filter(url => url);
      
      if (images.length === 0) {
        throw new Error("API返回了空图像列表");
      }
      
      this.emit("onProgress", progressSteps, progressSteps, "生成完成");
      
      // 构造元数据 
      const metadata = {
        model,
        prompt,
        seed: responseData.seed || finalAdvanced.seed, 
        size: `${finalSize.width}x${finalSize.height}`, 
        generationTime: Math.floor((Date.now() - startTime) / 1000)
      };
      
      this.emit("onImageReady", images, metadata);
      
      return { success: true, images, metadata };
      
    } catch (error) {
      clearInterval(this.requestTimers[requestId]); 
      delete this.requestTimers[requestId]; 
      
      // === 错误处理 === 
      let errorCode = 500;
      let errorMessage = "未知错误";
      let serverRequestId = null;
      
      if (error.response) {
        errorCode = error.response.status || 500;
        errorMessage = error.response.data?.error?.message || 
                      error.response.data?.error?.code ||
                      error.response.statusText; 
        serverRequestId = error.response.headers['x-request-id']; 
      } else if (error.code === 'ECONNABORTED') {
        errorCode = 504;
        errorMessage = `请求超时 (${timeout}秒)`;
      } else {
        errorMessage = error.message || error.toString(); 
      }
      
      this.emit("onGenerationFailed", errorCode, errorMessage, serverRequestId || requestId);
      return { success: false, error: { code: errorCode, message: errorMessage } };
    }
  }
}
 
// ===================== 模块导出 ===================== 
exports.types = imgWidgetTypes;
exports.widget = ImageGenerator;