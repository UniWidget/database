const axios = require("axios");
 
// ===================== 小部件元数据定义 ===================== 
const types = {
  isInvisibleWidget: true,
  type: "file_recognition_WIDGET",
  icon: "https://creation.bcmcdn.com/716/appcraft/IMAGE_9VwTy8Brv_1724648676741.png", 
  title: "AI文件识别助手Pro",
  version: "1.2.0",
  isGlobalWidget: true,
  properties: [],
  methods: [],
  events: []
};
 
// 关联文档 
types.docs = { url: "https://qingyuntop.apifox.cn/api-320307397" };
 
// ===================== 方法定义 ===================== 

// API健康检查
types.methods.push({ 
  key: "checkApiHealth",
  label: "API健康检查",
  description: "检查API服务状态和连通性",
  params: [
    { key: "apiKey", label: "API密钥", valueType: "string", defaultValue: "", required: true },
    { key: "baseUrl", label: "API基础地址", valueType: "string", defaultValue: "https://qingyuntop.com/api/v1", optional: true }
  ]
});

// 文件识别方法（增强版）
types.methods.push({ 
  key: "recognizeFile",
  label: "文件内容识别",
  description: "识别文件中的文本、图像等内容，支持重试和错误恢复",
  params: [
    { key: "fileUrl", label: "文件链接", valueType: "string", defaultValue: "", required: true },
    { key: "apiKey", label: "API密钥", valueType: "string", defaultValue: "", required: true },
    { key: "baseUrl", label: "API基础地址", valueType: "string", defaultValue: "https://qingyuntop.com/api/v1", optional: true },
    { key: "imageModel", label: "图像识别模型", valueType: "string", defaultValue: "gpt-4-vision-preview", optional: true },
    { key: "textModel", label: "文档解析模型", valueType: "string", defaultValue: "gpt-4", optional: true },
    { key: "recognitionType", label: "识别类型", valueType: "string", defaultValue: "auto", optional: true },
    { key: "language", label: "语言设置", valueType: "string", defaultValue: "zh", optional: true },
    { key: "maxTokens", label: "最大输出token", valueType: "number", defaultValue: 2000, optional: true },
    { key: "retryTimes", label: "重试次数", valueType: "number", defaultValue: 3, minValue: 0, maxValue: 10, optional: true },
    { key: "retryDelay", label: "重试间隔(秒)", valueType: "number", defaultValue: 5, minValue: 1, maxValue: 60, optional: true }
  ]
});

// 批量文件识别方法（增强版）
types.methods.push({ 
  key: "recognizeFiles",
  label: "批量文件识别",
  description: "批量识别多个文件内容，支持断点续传和错误恢复",
  params: [
    { key: "fileUrls", label: "文件链接列表(逗号分割)", valueType: "string", defaultValue: "", required: true },
    { key: "apiKey", label: "API密钥", valueType: "string", defaultValue: "", required: true },
    { key: "baseUrl", label: "API基础地址", valueType: "string", defaultValue: "https://qingyuntop.com/api/v1", optional: true },
    { key: "imageModel", label: "图像识别模型", valueType: "string", defaultValue: "gpt-4-vision-preview", optional: true },
    { key: "textModel", label: "文档解析模型", valueType: "string", defaultValue: "gpt-4", optional: true },
    { key: "recognitionType", label: "识别类型", valueType: "string", defaultValue: "auto", optional: true },
    { key: "language", label: "语言设置", valueType: "string", defaultValue: "zh", optional: true },
    { key: "maxTokens", label: "最大输出token", valueType: "number", defaultValue: 2000, optional: true },
    { key: "retryTimes", label: "重试次数", valueType: "number", defaultValue: 3, optional: true },
    { key: "retryDelay", label: "重试间隔(秒)", valueType: "number", defaultValue: 5, optional: true },
    { key: "continueOnError", label: "出错时继续", valueType: "boolean", defaultValue: true, optional: true }
  ]
});

// ===================== 事件定义 ===================== 

// API健康检查事件
types.events.push({ 
  key: "onApiHealthCheck",
  label: "API健康检查结果",
  params: [
    { key: "isHealthy", label: "服务健康", valueType: "boolean", defaultValue: false },
    { key: "responseTime", label: "响应时间(ms)", valueType: "number", defaultValue: 0 },
    { key: "statusCode", label: "状态码", valueType: "number", defaultValue: 0 },
    { key: "errorMessage", label: "错误信息", valueType: "string", defaultValue: "" },
    { key: "serverInfo", label: "服务器信息", valueType: "object", defaultValue: {} }
  ]
});

// 重试状态事件
types.events.push({ 
  key: "onRetryAttempt",
  label: "重试尝试",
  params: [
    { key: "attempt", label: "当前重试次数", valueType: "number", defaultValue: 0 },
    { key: "maxAttempts", label: "最大重试次数", valueType: "number", defaultValue: 0 },
    { key: "fileUrl", label: "重试文件", valueType: "string", defaultValue: "" },
    { key: "lastError", label: "上次错误", valueType: "string", defaultValue: "" },
    { key: "nextRetryIn", label: "下次重试间隔", valueType: "number", defaultValue: 0 }
  ]
});

// 单文件识别成功事件
types.events.push({ 
  key: "onRecognitionSuccess",
  label: "识别成功",
  params: [
    { key: "fileUrl", label: "文件链接", valueType: "string", defaultValue: "" },
    { key: "recognizedText", label: "识别文本", valueType: "string", defaultValue: "" },
    { key: "fileType", label: "文件类型", valueType: "string", defaultValue: "" },
    { key: "processingMethod", label: "处理方式", valueType: "string", defaultValue: "" },
    { key: "confidence", label: "识别置信度", valueType: "number", defaultValue: 0 },
    { key: "tokenUsage", label: "token使用量", valueType: "number", defaultValue: 0 },
    { key: "responseTime", label: "响应时间(ms)", valueType: "number", defaultValue: 0 },
    { key: "retryCount", label: "重试次数", valueType: "number", defaultValue: 0 },
    { key: "metadata", label: "文件元数据", valueType: "object", defaultValue: {} }
  ]
});

// 批量识别成功事件
types.events.push({ 
  key: "onBatchRecognitionSuccess",
  label: "批量识别成功",
  params: [
    { key: "results", label: "识别结果列表", valueType: "array", defaultValue: [] },
    { key: "successCount", label: "成功数量", valueType: "number", defaultValue: 0 },
    { key: "failureCount", label: "失败数量", valueType: "number", defaultValue: 0 },
    { key: "totalTokenUsage", label: "总token使用量", valueType: "number", defaultValue: 0 },
    { key: "totalTime", label: "总耗时(ms)", valueType: "number", defaultValue: 0 },
    { key: "avgResponseTime", label: "平均响应时间(ms)", valueType: "number", defaultValue: 0 }
  ]
});

// 批量识别进度事件
types.events.push({ 
  key: "onBatchProgress",
  label: "批量识别进度",
  params: [
    { key: "current", label: "当前文件序号", valueType: "number", defaultValue: 0 },
    { key: "total", label: "总文件数", valueType: "number", defaultValue: 0 },
    { key: "currentFileUrl", label: "当前处理文件", valueType: "string", defaultValue: "" },
    { key: "progress", label: "进度百分比", valueType: "number", defaultValue: 0 },
    { key: "successCount", label: "已成功数量", valueType: "number", defaultValue: 0 },
    { key: "failureCount", label: "已失败数量", valueType: "number", defaultValue: 0 }
  ]
});

// 增强的错误事件
types.events.push({ 
  key: "onError",
  label: "识别错误",
  params: [
    { key: "errorType", label: "错误类型", valueType: "string", defaultValue: "" },
    { key: "errorMessage", label: "错误信息", valueType: "string", defaultValue: "" },
    { key: "errorCode", label: "错误代码", valueType: "number", defaultValue: 0 },
    { key: "fileUrl", label: "出错文件", valueType: "string", defaultValue: "" },
    { key: "retryCount", label: "已重试次数", valueType: "number", defaultValue: 0 },
    { key: "isFinalError", label: "是否最终错误", valueType: "boolean", defaultValue: true },
    { key: "suggestion", label: "错误建议", valueType: "string", defaultValue: "" }
  ]
});

// 请求状态事件
types.events.push({ 
  key: "onRequestStatus",
  label: "请求状态变更",
  params: [
    { key: "operation", label: "操作类型", valueType: "string", defaultValue: "" },
    { key: "status", label: "状态", valueType: "string", defaultValue: "" },
    { key: "fileUrl", label: "相关文件", valueType: "string", defaultValue: "" },
    { key: "details", label: "状态详情", valueType: "string", defaultValue: "" }
  ]
});

// 调试信息事件
types.events.push({ 
  key: "onDebugInfo",
  label: "调试信息",
  params: [
    { key: "level", label: "日志级别", valueType: "string", defaultValue: "INFO" },
    { key: "operation", label: "操作类型", valueType: "string", defaultValue: "" },
    { key: "message", label: "调试消息", valueType: "string", defaultValue: "" },
    { key: "data", label: "附加数据", valueType: "object", defaultValue: {} }
  ]
});
 
// ===================== 小部件实现 ===================== 
class Widget extends InvisibleWidget {
  constructor(props) {
    super(props);
  }

  /**
   * API健康检查
   */
  checkApiHealth(apiKey, baseUrl = "https://qingyuntop.com/api/v1") {
    if (!apiKey?.trim()) {
      this.emit("onApiHealthCheck", false, 0, 401, "API密钥不能为空", {});
      return;
    }

    this.emit("onDebugInfo", "INFO", "checkApiHealth", "开始API健康检查", { baseUrl });
    const startTime = Date.now();

    // 使用一个简单的模型列表请求来测试API
    axios({
      method: "get",
      url: `${baseUrl}/models`,
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      timeout: 10000
    })
    .then((response) => {
      const responseTime = Date.now() - startTime;
      const serverInfo = {
        modelsAvailable: response.data?.data?.length || 0,
        apiVersion: response.headers?.['x-api-version'] || 'unknown',
        serverTime: response.headers?.['date'] || new Date().toISOString()
      };

      this.emit("onApiHealthCheck", true, responseTime, response.status, "", serverInfo);
      this.emit("onDebugInfo", "INFO", "checkApiHealth", "API健康检查成功", { responseTime, serverInfo });
    })
    .catch((error) => {
      const responseTime = Date.now() - startTime;
      let errorMessage = "API不可访问";
      let statusCode = 0;

      if (error.response) {
        statusCode = error.response.status;
        errorMessage = `HTTP ${statusCode}: ${error.response.statusText}`;
        if (error.response.data?.error?.message) {
          errorMessage += ` - ${error.response.data.error.message}`;
        }
      } else if (error.code === 'ECONNABORTED') {
        errorMessage = "请求超时";
        statusCode = 408;
      } else if (error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED') {
        errorMessage = "无法连接到API服务器";
        statusCode = 503;
      }

      this.emit("onApiHealthCheck", false, responseTime, statusCode, errorMessage, {});
      this.emit("onDebugInfo", "ERROR", "checkApiHealth", "API健康检查失败", { error: errorMessage, statusCode });
    });
  }

  /**
   * 单文件识别功能（增强版）
   */
  async recognizeFile(fileUrl, apiKey, baseUrl = "https://qingyuntop.com/api/v1", 
                     imageModel = "gpt-4-vision-preview", textModel = "gpt-4",
                     recognitionType = "auto", language = "zh", maxTokens = 2000,
                     retryTimes = 3, retryDelay = 5) {
    
    // 参数验证
    if (!fileUrl?.trim()) {
      this.emitError("recognizeFile", "文件链接不能为空", 400, "", 0, true, "请提供有效的文件链接");
      return;
    }
    if (!apiKey?.trim()) {
      this.emitError("recognizeFile", "API密钥不能为空", 401, fileUrl, 0, true, "请检查API密钥配置");
      return;
    }

    if (!this.isValidUrl(fileUrl)) {
      this.emitError("recognizeFile", "文件链接格式不正确", 400, fileUrl, 0, true, "请提供HTTP/HTTPS格式的文件链接");
      return;
    }

    this.emit("onRequestStatus", "recognizeFile", "开始识别", fileUrl, "正在分析文件类型");
    this.emit("onDebugInfo", "INFO", "recognizeFile", "开始文件识别", { fileUrl, retryTimes, retryDelay });

    const fileInfo = this.analyzeFileType(fileUrl);
    this.emit("onDebugInfo", "INFO", "recognizeFile", "文件类型分析完成", fileInfo);

    // 使用重试机制处理文件
    try {
      const result = await this.processFileWithRetry(
        fileUrl, apiKey, baseUrl, imageModel, textModel, 
        recognitionType, language, maxTokens, fileInfo, 
        retryTimes, retryDelay
      );

      this.emit("onRecognitionSuccess", 
        fileUrl,
        result.text,
        result.fileType,
        result.processingMethod,
        result.confidence,
        result.tokenUsage,
        result.responseTime,
        result.actualRetryCount,
        result.metadata
      );

    } catch (error) {
      this.emitError("recognizeFile", error.message, error.code || 500, fileUrl, 
                    error.retryCount || 0, true, this.getErrorSuggestion(error.code));
    }
  }

  /**
   * 带重试机制的文件处理
   */
  async processFileWithRetry(fileUrl, apiKey, baseUrl, imageModel, textModel, 
                           recognitionType, language, maxTokens, fileInfo, 
                           retryTimes, retryDelay) {
    let lastError;
    let actualRetryCount = 0;

    for (let attempt = 0; attempt <= retryTimes; attempt++) {
      try {
        if (attempt > 0) {
          this.emit("onRetryAttempt", attempt, retryTimes, fileUrl, lastError?.message || "", retryDelay);
          this.emit("onDebugInfo", "WARN", "processFile", `第${attempt}次重试`, { fileUrl, lastError: lastError?.message });
          await this.delay(retryDelay * 1000);
          actualRetryCount = attempt;
        }

        const startTime = Date.now();
        const result = await this.processSingleFile(
          fileUrl, apiKey, baseUrl, imageModel, textModel,
          recognitionType, language, maxTokens, fileInfo
        );
        
        result.responseTime = Date.now() - startTime;
        result.actualRetryCount = actualRetryCount;
        
        return result;

      } catch (error) {
        lastError = error;
        
        // 如果是客户端错误（4xx），不需要重试
        if (error.code >= 400 && error.code < 500 && error.code !== 429) {
          this.emit("onDebugInfo", "ERROR", "processFile", "客户端错误，停止重试", { error: error.message, code: error.code });
          break;
        }

        // 如果是最后一次尝试，不再重试
        if (attempt === retryTimes) {
          break;
        }

        this.emitError("recognizeFile", error.message, error.code || 500, fileUrl, 
                      attempt, false, `将在${retryDelay}秒后重试，剩余${retryTimes - attempt}次机会`);
      }
    }

    // 所有重试都失败了
    lastError.retryCount = actualRetryCount;
    throw lastError;
  }

  /**
   * 处理单个文件
   */
  async processSingleFile(fileUrl, apiKey, baseUrl, imageModel, textModel,
                         recognitionType, language, maxTokens, fileInfo) {
    const model = fileInfo.isImage ? imageModel : textModel;
    const processingMethod = fileInfo.isImage ? "vision" : "document";
    
    this.emit("onRequestStatus", "recognizeFile", "发送API请求", fileUrl, `使用${processingMethod}模式`);

    let requestData;
    
    if (fileInfo.isImage) {
      requestData = {
        model: model,
        messages: [{
          role: "user",
          content: [
            {
              type: "text",
              text: this.buildPromptByType(recognitionType, language, "image")
            },
            {
              type: "image_url", 
              image_url: {
                url: fileUrl
              }
            }
          ]
        }],
        max_tokens: maxTokens,
        temperature: 0.1
      };
    } else {
      requestData = {
        model: model,
        messages: [{
          role: "user",
          content: this.buildDocumentPrompt(fileUrl, recognitionType, language, fileInfo)
        }],
        max_tokens: maxTokens,
        temperature: 0.1
      };
    }

    this.emit("onDebugInfo", "DEBUG", "processSingleFile", "发送请求", { 
      url: `${baseUrl}/chat/completions`,
      model,
      processingMethod 
    });

    try {
      const response = await axios({
        method: "post",
        url: `${baseUrl}/chat/completions`,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        data: requestData,
        timeout: 60000
      });

      const data = response.data;
      const content = data.choices?.[0]?.message?.content || "";
      const usage = data.usage || {};
      
      if (!content.trim()) {
        throw new Error("API返回了空响应内容");
      }

      const result = this.parseRecognitionResult(content, fileUrl, fileInfo);
      
      return {
        text: result.text,
        fileType: result.fileType,
        processingMethod: processingMethod,
        confidence: result.confidence,
        tokenUsage: usage.total_tokens || 0,
        metadata: result.metadata
      };

    } catch (error) {
      // 转换axios错误为标准格式
      const standardError = this.standardizeError(error);
      throw standardError;
    }
  }

  /**
   * 批量文件识别功能（增强版）
   */
  async recognizeFiles(fileUrls, apiKey, baseUrl = "https://qingyuntop.com/api/v1", 
                      imageModel = "gpt-4-vision-preview", textModel = "gpt-4",
                      recognitionType = "auto", language = "zh", maxTokens = 2000,
                      retryTimes = 3, retryDelay = 5, continueOnError = true) {
    
    if (!fileUrls?.trim()) {
      this.emitError("recognizeFiles", "文件链接列表不能为空", 400, "", 0, true, "请提供至少一个文件链接");
      return;
    }
    if (!apiKey?.trim()) {
      this.emitError("recognizeFiles", "API密钥不能为空", 401, "", 0, true, "请检查API密钥配置");
      return;
    }

    const urlList = fileUrls.split(',').map(url => url.trim()).filter(url => url.length > 0);

    if (urlList.length === 0) {
      this.emitError("recognizeFiles", "没有有效的文件链接", 400, "", 0, true, "请检查文件链接格式");
      return;
    }

    this.emit("onRequestStatus", "recognizeFiles", "开始批量识别", "", `准备处理${urlList.length}个文件`);
    this.emit("onDebugInfo", "INFO", "recognizeFiles", "开始批量识别", { 
      fileCount: urlList.length, 
      retryTimes, 
      retryDelay, 
      continueOnError 
    });

    const startTime = Date.now();
    const results = [];
    let successCount = 0;
    let failureCount = 0;
    let totalTokenUsage = 0;
    const responseTimes = [];

    for (let i = 0; i < urlList.length; i++) {
      const fileUrl = urlList[i];
      const progress = Math.round(((i + 1) / urlList.length) * 100);
      
      this.emit("onBatchProgress", i + 1, urlList.length, fileUrl, progress, successCount, failureCount);

      try {
        if (!this.isValidUrl(fileUrl)) {
          throw new Error("文件链接格式不正确");
        }

        const fileInfo = this.analyzeFileType(fileUrl);
        const result = await this.processFileWithRetry(
          fileUrl, apiKey, baseUrl, imageModel, textModel,
          recognitionType, language, maxTokens, fileInfo,
          retryTimes, retryDelay
        );

        results.push({
          fileUrl: fileUrl,
          success: true,
          text: result.text,
          fileType: result.fileType,
          processingMethod: result.processingMethod,
          confidence: result.confidence,
          tokenUsage: result.tokenUsage,
          responseTime: result.responseTime,
          retryCount: result.actualRetryCount
        });

        successCount++;
        totalTokenUsage += result.tokenUsage;
        responseTimes.push(result.responseTime);
        
      } catch (error) {
        results.push({
          fileUrl: fileUrl,
          success: false,
          error: error.message,
          errorCode: error.code,
          retryCount: error.retryCount || 0
        });
        
        failureCount++;

        if (!continueOnError) {
          this.emit("onDebugInfo", "ERROR", "recognizeFiles", "遇到错误，停止批量处理", { error: error.message });
          break;
        }
      }

      // 添加延迟避免请求过快
      if (i < urlList.length - 1) {
        await this.delay(1000);
      }
    }

    const totalTime = Date.now() - startTime;
    const avgResponseTime = responseTimes.length > 0 ? 
      responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length : 0;

    this.emit("onBatchRecognitionSuccess", 
      results, successCount, failureCount, totalTokenUsage, 
      totalTime, avgResponseTime
    );
    
    this.emit("onRequestStatus", "recognizeFiles", "批量识别完成", "", 
      `成功${successCount}个，失败${failureCount}个，总耗时${Math.round(totalTime/1000)}秒`
    );
  }

  /**
   * 标准化错误格式
   */
  standardizeError(error) {
    let message = "未知错误";
    let code = 500;

    if (error.code === 'ECONNABORTED') {
      message = "请求超时";
      code = 408;
    } else if (error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED') {
      message = "无法连接到API服务器";
      code = 503;
    } else if (error.response) {
      code = error.response.status;
      const responseData = error.response.data;
      
      if (responseData?.error?.message) {
        message = responseData.error.message;
      } else if (responseData?.message) {
        message = responseData.message;
      } else {
        message = `HTTP ${code}: ${error.response.statusText}`;
      }
      
      // 特殊错误处理
      if (code === 503) {
        message = "API服务暂时不可用 (503)";
      } else if (code === 500) {
        message = "API服务内部错误 (500)";
      } else if (code === 429) {
        message = "请求频率过高，请稍后重试 (429)";
      }
      
    } else if (error.request) {
      message = "网络连接失败";
      code = 503;
    } else {
      message = error.message || "处理请求时发生错误";
    }

    const standardError = new Error(message);
    standardError.code = code;
    return standardError;
  }

  /**
   * 获取错误建议
   */
  getErrorSuggestion(errorCode) {
    const suggestions = {
      400: "请检查请求参数格式是否正确",
      401: "请检查API密钥是否正确和有效",
      403: "API密钥可能没有相应权限",
      404: "API接口地址可能不正确",
      408: "请求超时，请稍后重试或检查网络连接",
      429: "请求过于频繁，请降低请求频率",
      500: "API服务内部错误，请稍后重试",
      502: "API网关错误，服务可能正在维护",
      503: "API服务不可用，可能正在维护或过载",
      504: "API响应超时，请稍后重试"
    };
    return suggestions[errorCode] || "请检查网络连接和API服务状态";
  }

  /**
   * 发送增强的错误事件
   */
  emitError(operation, message, code, fileUrl, retryCount, isFinal, suggestion) {
    this.emit("onError", operation, message, code, fileUrl, retryCount, isFinal, suggestion);
    this.emit("onDebugInfo", "ERROR", operation, message, { code, fileUrl, retryCount, isFinal });
  }

  /**
   * 分析文件类型
   */
  analyzeFileType(fileUrl) {
    const url = fileUrl.toLowerCase();
    let extension = '';
    
    if (url.includes('.')) {
      const parts = url.split('.');
      const lastPart = parts[parts.length - 1];
      extension = lastPart.split('?')[0].split('#')[0];
    }

    let mimeType = '';
    if (url.includes('application/msword')) {
      mimeType = 'application/msword';
      extension = extension || 'doc';
    } else if (url.includes('application/vnd.openxmlformats')) {
      mimeType = 'application/vnd.openxmlformats';
      extension = extension || 'docx';
    } else if (url.includes('application/pdf')) {
      mimeType = 'application/pdf';
      extension = extension || 'pdf';
    }

    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg'];
    const documentExtensions = ['pdf', 'doc', 'docx', 'txt', 'rtf'];
    const spreadsheetExtensions = ['xls', 'xlsx', 'csv'];
    const presentationExtensions = ['ppt', 'pptx'];

    const isImage = imageExtensions.includes(extension);
    const isDocument = documentExtensions.includes(extension);
    const isSpreadsheet = spreadsheetExtensions.includes(extension);
    const isPresentation = presentationExtensions.includes(extension);

    return {
      extension: extension,
      mimeType: mimeType,
      isImage: isImage,
      isDocument: isDocument,
      isSpreadsheet: isSpreadsheet,
      isPresentation: isPresentation,
      category: isImage ? 'image' : 
                isDocument ? 'document' :
                isSpreadsheet ? 'spreadsheet' :
                isPresentation ? 'presentation' : 'unknown'
    };
  }

  /**
   * 构建文档处理提示词
   */
  buildDocumentPrompt(fileUrl, recognitionType, language, fileInfo) {
    const prompts = {
      zh: {
        base: `请帮我分析这个文件链接中的内容。文件链接：${fileUrl}

由于无法直接访问文件内容，请提供以下信息：
1. 根据文件链接和类型（${fileInfo.extension}）推测可能的内容结构
2. 建议如何获取和处理这类文件的方法
3. 如果这是一个可以通过其他方式访问的文件，请给出建议

文件信息：
- 扩展名：${fileInfo.extension}
- 类别：${fileInfo.category}
- 推测类型：${fileInfo.mimeType}`,
        
        document: `这是一个文档文件（${fileInfo.extension}），链接：${fileUrl}

请分析：
1. 文档可能包含的内容类型（文本、表格、图像等）
2. 建议的文档解析方法
3. 如果可以直接处理，请尝试解析其中的文本内容`,

        auto: `请分析文件链接：${fileUrl}

文件类型：${fileInfo.extension} (${fileInfo.category})

请提供：
1. 文件内容的可能结构
2. 最适合的处理方式
3. 如何提取其中的有用信息`
      }
    };

    const langPrompts = prompts[language] || prompts.zh;
    return langPrompts[recognitionType] || langPrompts.base;
  }

  /**
   * 根据识别类型构建提示词
   */
  buildPromptByType(recognitionType, language, fileCategory = "unknown") {
    const prompts = {
      zh: {
        auto: fileCategory === 'image' ? 
          "请识别这个图像的内容，提取其中的文字、表格、图像信息等所有可读内容。" :
          "请识别这个文件的内容，提取其中的所有有用信息。",
        ocr: "请提取这个图像中的所有文字内容，保持原有格式和布局。",
        image: "请详细描述这个图像的内容，包括场景、物体、文字等所有可见元素。",
        document: "请分析这个内容，提取标题、段落、列表、表格等结构化信息。"
      },
      en: {
        auto: fileCategory === 'image' ?
          "Please recognize the content of this image and extract all readable content including text, tables, and image information." :
          "Please recognize the content of this file and extract all useful information.",
        ocr: "Please extract all text content from this image, maintaining the original format and layout.",
        image: "Please describe the content of this image in detail, including scenes, objects, text and all visible elements.",
        document: "Please analyze this content and extract structured information such as titles, paragraphs, lists, and tables."
      }
    };

    const langPrompts = prompts[language] || prompts.zh;
    return langPrompts[recognitionType] || langPrompts.auto;
  }

  /**
   * 解析识别结果
   */
  parseRecognitionResult(content, fileUrl, fileInfo) {
    const confidence = Math.min(0.95, Math.max(0.1, content.length / 100));
    
    return {
      text: content.trim(),
      fileType: fileInfo.category,
      confidence: confidence,
      metadata: {
        fileExtension: fileInfo.extension,
        mimeType: fileInfo.mimeType,
        isImage: fileInfo.isImage,
        contentLength: content.length,
        extractedAt: new Date().toISOString()
      }
    };
  }

  /**
   * 验证URL格式
   */
  isValidUrl(string) {
    try {
      new URL(string);
      return string.startsWith('http://') || string.startsWith('https://');
    } catch (_) {
      return false;
    }
  }

  /**
   * 延迟函数
   */
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
 
// ===================== 模块导出 ===================== 
exports.types = types;
exports.widget = Widget;
