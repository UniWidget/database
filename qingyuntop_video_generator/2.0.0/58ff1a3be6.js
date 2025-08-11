const axios = require("axios");

// ===================== 视频控件元数据 ===================== 
const videoWidgetTypes = {
  isInvisibleWidget: true,
  type: "qingyuntop_video_generator",
  icon: "https://creation.bcmcdn.com/716/appcraft/IMAGE_9VwTy8Brv_1724648676741.png", 
  title: "AI视频生成器",
  version: "2.0.0",
  isGlobalWidget: true,
  properties: [],
  methods: [],
  events: []
};
 
// API文档关联 
videoWidgetTypes.docs = {
  url: "https://api.qingyuntop.top/v1/video/create" 
};
 
// ===================== 方法定义 ===================== 
videoWidgetTypes.methods.push({ 
  key: "generateVideo",
  label: "生成视频",
  description: "调用青云顶视频生成API",
  params: [
    {
      key: "baseApi",
      label: "API基础地址",
      valueType: "string",
      defaultValue: "https://api.qingyuntop.top/v1",
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
      label: "视频描述",
      valueType: "string",
      defaultValue: "",
      required: true 
    },
    {
      key: "model",
      label: "模型",
      valueType: "string",
      defaultValue: "veo3",
      options: [
        "veo3", 
        "veo3-pro",
        "veo2"
      ],
      optional: true 
    },
    {
      key: "enhancePrompt",
      label: "增强提示词",
      valueType: "boolean",
      defaultValue: true,
      optional: true 
    },
    {
      key: "timeout",
      label: "超时秒数",
      valueType: "number",
      defaultValue: 300,
      min: 60,
      max: 600,
      optional: true 
    },
    {
      key: "pollInterval",
      label: "查询间隔(秒)",
      valueType: "number",
      defaultValue: 5,
      min: 2,
      max: 30,
      optional: true 
    }
  ]
});
 
// ===================== 事件定义 ===================== 
videoWidgetTypes.events.push({ 
  key: "onVideoReady",
  label: "视频生成完成",
  params: [
    {
      key: "videoUrl",
      label: "视频URL",
      valueType: "string"
    },
    {
      key: "metadata",
      label: "生成元数据",
      valueType: "object",
      properties: [
        { key: "id", label: "任务ID", valueType: "string" },
        { key: "model", label: "模型", valueType: "string" },
        { key: "prompt", label: "原始提示词", valueType: "string" },
        { key: "enhancedPrompt", label: "增强提示词", valueType: "string" },
        { key: "generationTime", label: "生成耗时", valueType: "number" }
      ]
    }
  ]
});
 
videoWidgetTypes.events.push({ 
  key: "onGenerationFailed",
  label: "生成失败",
  params: [
    { key: "errorCode", label: "错误代码", valueType: "number" },
    { key: "errorMessage", label: "错误详情", valueType: "string" },
    { key: "requestId", label: "请求ID", valueType: "string", optional: true }
  ]
});
 
videoWidgetTypes.events.push({ 
  key: "onProgress",
  label: "生成进度",
  params: [
    { key: "step", label: "当前步骤", valueType: "number" },
    { key: "totalSteps", label: "总步骤数", valueType: "number" },
    { key: "status", label: "状态信息", valueType: "string" }
  ]
});
 
// ===================== 控件实现 ===================== 
class VideoGenerator extends InvisibleWidget {
  constructor(props) {
    super(props);
    this.requestTimers = {};
    this.pollTimers = {};
  }
 
  /**
   * 生成视频核心方法 
   */
  async generateVideo(
    baseApi,
    apiKey,
    prompt,
    model = "veo3",
    enhancePrompt = true,
    timeout = 300,
    pollInterval = 5
  ) {
    // 请求唯一标识 
    const requestId = `video-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    
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
        validator: () => apiKey && apiKey.trim().length > 10,
        error: "API密钥不能为空且需要有效长度"
      },
      {
        validator: () => prompt && prompt.trim().length > 3,
        error: "视频描述至少需要4个字符"
      },
      {
        validator: () => timeout >= 60 && timeout <= 600,
        error: "超时时间需在60-600秒之间"
      },
      {
        validator: () => pollInterval >= 2 && pollInterval <= 30,
        error: "查询间隔需在2-30秒之间"
      }
    ];
 
    for (const validation of validations) {
      if (!validateParam(validation.validator, validation.error)) return;
    }
 
    // === 构建创建视频请求 === 
    const createUrl = `${baseApi.replace(/\/$/, '')}/video/create`;
    const startTime = Date.now(); 
    
    const requestData = {
      prompt: prompt.trim(),
      model: model,
      enhance_prompt: enhancePrompt
    };
    
    // 构建请求头 - 确保包含认证信息
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey.trim()}`
    };
    
    this.emit("onProgress", 0, 100, "提交视频生成请求");
 
    try {
      // === 发送创建视频请求 === 
      const createResponse = await axios({
        method: "post",
        url: createUrl,
        headers: headers,
        timeout: 30000, // 创建请求30秒超时
        data: requestData 
      });
      
      const createData = createResponse.data;
      const taskId = createData.id;
      
      if (!taskId) {
        throw new Error("API未返回任务ID");
      }
      
      this.emit("onProgress", 10, 100, `任务已创建，ID: ${taskId}`);
      
      // === 开始轮询查询状态 === 
      const videoUrl = await this.pollVideoStatus(
        baseApi, 
        apiKey,
        taskId, 
        timeout, 
        pollInterval, 
        startTime,
        requestId
      );
      
      // 构造元数据 
      const metadata = {
        id: taskId,
        model: model,
        prompt: prompt,
        enhancedPrompt: createData.enhanced_prompt || prompt,
        generationTime: Math.floor((Date.now() - startTime) / 1000)
      };
      
      this.emit("onVideoReady", videoUrl, metadata);
      
      return { success: true, videoUrl, metadata };
      
    } catch (error) {
      this.cleanupTimers(requestId);
      
      // === 错误处理 === 
      let errorCode = 500;
      let errorMessage = "未知错误";
      
      if (error.response) {
        errorCode = error.response.status || 500;
        const responseData = error.response.data || {};
        errorMessage = responseData.message || 
                      responseData.error ||
                      error.response.statusText; 
      } else if (error.code === 'ECONNABORTED') {
        errorCode = 504;
        errorMessage = `请求超时`;
      } else {
        errorMessage = error.message || error.toString(); 
      }
      
      this.emit("onGenerationFailed", errorCode, errorMessage, requestId);
      return { success: false, error: { code: errorCode, message: errorMessage } };
    }
  }

  /**
   * 轮询查询视频生成状态
   */
  async pollVideoStatus(baseApi, apiKey, taskId, timeout, pollInterval, startTime, requestId) {
    const queryUrl = `${baseApi.replace(/\/$/, '')}/video/query`;
    const maxPolls = Math.floor(timeout / pollInterval);
    let pollCount = 0;
    
    return new Promise((resolve, reject) => {
      const poll = async () => {
        try {
          pollCount++;
          const elapsed = Math.floor((Date.now() - startTime) / 1000);
          
          // 检查是否超时
          if (elapsed >= timeout) {
            reject(new Error(`生成超时 (${timeout}秒)`));
            return;
          }
          
          // 发送查询请求 - 也需要包含认证信息
          const queryResponse = await axios({
            method: "get",
            url: `${queryUrl}?id=${taskId}`,
            headers: {
              'Accept': 'application/json',
              'Authorization': `Bearer ${apiKey.trim()}`
            },
            timeout: 10000
          });
          
          const queryData = queryResponse.data;
          const status = queryData.status;
          const videoUrl = queryData.video_url;
          
          // 更新进度
          const progress = Math.min(10 + Math.floor((pollCount / maxPolls) * 80), 90);
          this.emit("onProgress", progress, 100, `状态: ${status} (${elapsed}秒)`);
          
          // 检查是否完成
          if (status === 'completed' || status === 'success') {
            if (videoUrl) {
              this.emit("onProgress", 100, 100, "视频生成完成");
              resolve(videoUrl);
              return;
            } else {
              reject(new Error("视频生成完成但未返回视频URL"));
              return;
            }
          }
          
          // 检查是否失败
          if (status === 'failed' || status === 'error') {
            reject(new Error(`视频生成失败: ${status}`));
            return;
          }
          
          // 继续轮询
          this.pollTimers[requestId] = setTimeout(poll, pollInterval * 1000);
          
        } catch (error) {
          reject(error);
        }
      };
      
      // 开始首次轮询
      poll();
    });
  }

  /**
   * 清理定时器
   */
  cleanupTimers(requestId) {
    if (this.requestTimers[requestId]) {
      clearInterval(this.requestTimers[requestId]);
      delete this.requestTimers[requestId];
    }
    if (this.pollTimers[requestId]) {
      clearTimeout(this.pollTimers[requestId]);
      delete this.pollTimers[requestId];
    }
  }
}
 
// ===================== 模块导出 ===================== 
exports.types = videoWidgetTypes;
exports.widget = VideoGenerator;
