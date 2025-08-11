const axios = require("axios");

// ===================== 小部件元数据定义 ===================== 
const types = {
  isInvisibleWidget: true,
  type: "TOKEN_MODEL_WIDGET",
  icon: "https://creation.bcmcdn.com/716/appcraft/IMAGE_9VwTy8Brv_1724648676741.png", 
  title: "令牌模型管理器",
  version: "1.0.0",
  isGlobalWidget: true,
  properties: [],
  methods: [],
  events: []
};

// 关联文档 
types.docs = { url: "https://qingyuntop.apifox.cn/api-320307458" };

// ===================== 方法定义 ===================== 
types.methods.push({ 
  key: "getModels",
  label: "获取支持的模型列表",
  description: "获取当前令牌支持的所有AI模型",
  params: [
    { key: "token", label: "访问令牌", valueType: "string", defaultValue: "", required: true },
    { key: "apiUrl", label: "API地址", valueType: "string", defaultValue: "https://qingyuntop.apifox.cn/api-320307458", optional: true },
    { key: "category", label: "模型分类", valueType: "string", defaultValue: "", optional: true, description: "筛选特定分类的模型" },
    { key: "includeDetails", label: "包含详细信息", valueType: "boolean", defaultValue: true, optional: true },
    { key: "timeout", label: "超时秒数", valueType: "number", defaultValue: 15, minValue: 5, maxValue: 60, optional: true }
  ]
});

types.methods.push({
  key: "checkTokenStatus",
  label: "检查令牌状态",
  description: "验证令牌有效性并获取配额信息",
  params: [
    { key: "token", label: "访问令牌", valueType: "string", defaultValue: "", required: true },
    { key: "apiUrl", label: "API地址", valueType: "string", defaultValue: "https://qingyuntop.apifox.cn/api-320307458", optional: true }
  ]
});

types.methods.push({
  key: "getModelInfo",
  label: "获取单个模型信息",
  description: "获取指定模型的详细信息",
  params: [
    { key: "token", label: "访问令牌", valueType: "string", defaultValue: "", required: true },
    { key: "modelId", label: "模型ID", valueType: "string", defaultValue: "", required: true },
    { key: "apiUrl", label: "API地址", valueType: "string", defaultValue: "https://qingyuntop.apifox.cn/api-320307458", optional: true }
  ]
});

types.methods.push({
  key: "refreshModels",
  label: "刷新模型缓存",
  description: "强制刷新模型列表缓存",
  params: [
    { key: "token", label: "访问令牌", valueType: "string", defaultValue: "", required: true },
    { key: "apiUrl", label: "API地址", valueType: "string", defaultValue: "https://qingyuntop.apifox.cn/api-320307458", optional: true }
  ]
});

// ===================== 事件定义 ===================== 
types.events.push({ 
  key: "onModelsLoaded",
  label: "模型列表加载完成",
  params: [
    { key: "models", label: "模型列表", valueType: "array", defaultValue: [] },
    { key: "totalCount", label: "模型总数", valueType: "number", defaultValue: 0 },
    { key: "categories", label: "分类信息", valueType: "array", defaultValue: [] },
    { key: "lastUpdated", label: "最后更新时间", valueType: "string", defaultValue: "" },
    { key: "tokenStatus", label: "令牌状态", valueType: "object", defaultValue: {} }
  ]
});

types.events.push({
  key: "onModelInfo",
  label: "单个模型信息获取完成",
  params: [
    { key: "modelInfo", label: "模型详细信息", valueType: "object", defaultValue: {} },
    { key: "modelId", label: "模型ID", valueType: "string", defaultValue: "" },
    { key: "isAvailable", label: "是否可用", valueType: "boolean", defaultValue: true }
  ]
});

types.events.push({
  key: "onTokenStatus",
  label: "令牌状态检查完成",
  params: [
    { key: "isValid", label: "令牌是否有效", valueType: "boolean", defaultValue: false },
    { key: "quota", label: "配额信息", valueType: "object", defaultValue: {} },
    { key: "permissions", label: "权限列表", valueType: "array", defaultValue: [] },
    { key: "expireTime", label: "过期时间", valueType: "string", defaultValue: "" }
  ]
});

types.events.push({ 
  key: "onError",
  label: "操作错误",
  params: [
    { key: "errorType", label: "错误类型", valueType: "string", defaultValue: "" },
    { key: "errorMessage", label: "错误信息", valueType: "string", defaultValue: "" },
    { key: "errorCode", label: "错误码", valueType: "number", defaultValue: 0 },
    { key: "suggestion", label: "建议操作", valueType: "string", defaultValue: "" }
  ]
});

types.events.push({
  key: "onProgress",
  label: "加载进度",
  params: [
    { key: "progress", label: "进度百分比", valueType: "number", defaultValue: 0 },
    { key: "currentStep", label: "当前步骤", valueType: "string", defaultValue: "" },
    { key: "totalSteps", label: "总步骤数", valueType: "number", defaultValue: 1 }
  ]
});

// ===================== 小部件实现 ===================== 
class Widget extends InvisibleWidget {
  constructor(props) {
    super(props);
    this.modelCache = new Map();
    this.tokenCache = new Map();
  }

  /**
   * 获取支持的模型列表
   */
  async getModels(
    token,
    apiUrl = "https://qingyuntop.apifox.cn/api-320307458",
    category = "",
    includeDetails = true,
    timeout = 15
  ) {
    // === 参数验证 === 
    if (!token || token.trim() === "") {
      this.emit("onError", "TOKEN_REQUIRED", "访问令牌不能为空", 400, "请提供有效的访问令牌");
      return;
    }

    this.emit("onProgress", 10, "验证令牌", 3);

    try {
      // 构建请求配置
      const config = {
        method: "GET",
        url: apiUrl,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        params: {
          action: 'getModels',
          category: category || undefined,
          includeDetails: includeDetails
        },
        timeout: timeout * 1000
      };

      this.emit("onProgress", 30, "请求模型列表", 3);

      const response = await axios(config);
      
      this.emit("onProgress", 70, "解析响应数据", 3);

      // 解析响应数据
      const responseData = response.data;
      const models = responseData.models || responseData.data || [];
      const tokenStatus = responseData.tokenStatus || {};
      
      // 处理模型数据
      const processedModels = models.map(model => ({
        id: model.id || model.model_id,
        name: model.name || model.model_name,
        category: model.category || "通用",
        description: model.description || "",
        maxTokens: model.max_tokens || model.context_length || 4096,
        pricing: model.pricing || {},
        capabilities: model.capabilities || [],
        status: model.status || "active",
        lastUpdated: model.last_updated || new Date().toISOString()
      }));

      // 提取分类信息
      const categories = [...new Set(processedModels.map(m => m.category))];
      
      // 缓存结果
      this.modelCache.set(token, {
        models: processedModels,
        timestamp: Date.now(),
        categories: categories
      });

      this.emit("onProgress", 100, "完成", 3);

      // 触发成功事件
      this.emit("onModelsLoaded", 
        processedModels,
        processedModels.length,
        categories,
        new Date().toISOString(),
        tokenStatus
      );

    } catch (error) {
      this.handleError(error, "获取模型列表");
    }
  }

  /**
   * 检查令牌状态
   */
  async checkTokenStatus(token, apiUrl = "https://qingyuntop.apifox.cn/api-320307458") {
    if (!token || token.trim() === "") {
      this.emit("onError", "TOKEN_REQUIRED", "访问令牌不能为空", 400, "请提供有效的访问令牌");
      return;
    }

    try {
      const config = {
        method: "GET",
        url: apiUrl,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        params: {
          action: 'checkToken'
        },
        timeout: 10000
      };

      const response = await axios(config);
      const data = response.data;

      const tokenInfo = {
        isValid: data.valid !== false,
        quota: {
          used: data.quota?.used || 0,
          limit: data.quota?.limit || 0,
          remaining: data.quota?.remaining || 0
        },
        permissions: data.permissions || [],
        expireTime: data.expire_time || ""
      };

      // 缓存令牌状态
      this.tokenCache.set(token, {
        ...tokenInfo,
        timestamp: Date.now()
      });

      this.emit("onTokenStatus",
        tokenInfo.isValid,
        tokenInfo.quota,
        tokenInfo.permissions,
        tokenInfo.expireTime
      );

    } catch (error) {
      this.handleError(error, "检查令牌状态");
    }
  }

  /**
   * 获取单个模型信息
   */
  async getModelInfo(token, modelId, apiUrl = "https://qingyuntop.apifox.cn/api-320307458") {
    if (!token || !modelId) {
      this.emit("onError", "PARAMS_REQUIRED", "令牌和模型ID都不能为空", 400, "请提供完整的参数");
      return;
    }

    try {
      const config = {
        method: "GET",
        url: apiUrl,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        params: {
          action: 'getModelInfo',
          modelId: modelId
        },
        timeout: 10000
      };

      const response = await axios(config);
      const modelInfo = response.data;

      this.emit("onModelInfo",
        modelInfo,
        modelId,
        modelInfo.status === 'active'
      );

    } catch (error) {
      this.handleError(error, "获取模型信息");
    }
  }

  /**
   * 刷新模型缓存
   */
  async refreshModels(token, apiUrl = "https://qingyuntop.apifox.cn/api-320307458") {
    // 清除缓存
    this.modelCache.delete(token);
    this.tokenCache.delete(token);
    
    // 重新获取
    await this.getModels(token, apiUrl, "", true);
  }

  /**
   * 统一错误处理
   */
  handleError(error, operation) {
    let errorType = "UNKNOWN_ERROR";
    let errorMessage = "未知错误";
    let errorCode = 0;
    let suggestion = "请检查网络连接后重试";

    if (error.code === 'ECONNABORTED') {
      errorType = "TIMEOUT";
      errorMessage = "请求超时";
      suggestion = "请检查网络连接或增加超时时间";
    } else if (error.response) {
      errorCode = error.response.status;
      errorMessage = error.response.data?.message || `HTTP ${errorCode} 错误`;
      
      switch (errorCode) {
        case 401:
          errorType = "AUTH_ERROR";
          suggestion = "请检查访问令牌是否正确";
          break;
        case 403:
          errorType = "PERMISSION_ERROR";
          suggestion = "令牌权限不足，请联系管理员";
          break;
        case 429:
          errorType = "RATE_LIMIT";
          suggestion = "请求过于频繁，请稍后再试";
          break;
        case 500:
          errorType = "SERVER_ERROR";
          suggestion = "服务器内部错误，请稍后重试";
          break;
        default:
          errorType = "HTTP_ERROR";
      }
    } else if (error.request) {
      errorType = "NETWORK_ERROR";
      errorMessage = "网络连接失败";
      suggestion = "请检查网络连接";
    }

    this.emit("onError", errorType, `${operation}失败: ${errorMessage}`, errorCode, suggestion);
  }
}

// ===================== 模块导出 ===================== 
exports.types = types;
exports.widget = Widget;
