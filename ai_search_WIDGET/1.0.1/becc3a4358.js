const axios = require("axios");
 
// ===================== 小部件元数据定义 ===================== 
const types = {
  isInvisibleWidget: true,
  type: "ai_search_WIDGET",
  icon: "https://creation.bcmcdn.com/716/appcraft/IMAGE_9VwTy8Brv_1724648676741.png", 
  title: "AI搜索助手",
  version: "1.0.1",
  isGlobalWidget: true,
  properties: [],
  methods: [],
  events: []
};
 
// 关联文档 
types.docs = { url: "https://qingyuntop.apifox.cn/doc-7011538" };
 
// ===================== 方法定义 ===================== 

// 1. 向量嵌入方法
types.methods.push({ 
  key: "embedding",
  label: "文本向量嵌入",
  description: "将文本转换为向量表示",
  params: [
    { key: "text", label: "输入文本", valueType: "string", defaultValue: "", required: true },
    { key: "apiKey", label: "API密钥", valueType: "string", defaultValue: "", required: true },
    { key: "baseUrl", label: "API基础地址", valueType: "string", defaultValue: "https://qingyuntop.com/api/v1", optional: true },
    { key: "model", label: "嵌入模型", valueType: "string", defaultValue: "text-embedding-3-small", optional: true },
    { key: "dimensions", label: "向量维度", valueType: "number", defaultValue: 1536, minValue: 128, maxValue: 3072, optional: true }
  ]
});

// 2. 重排序方法
types.methods.push({ 
  key: "rerank",
  label: "文档重排序",
  description: "根据查询对文档进行相关性重排序",
  params: [
    { key: "query", label: "查询文本", valueType: "string", defaultValue: "", required: true },
    { key: "documents", label: "文档列表(逗号分割)", valueType: "string", defaultValue: "", required: true, description: "多个文档用逗号分割，如：文档1,文档2,文档3" },
    { key: "apiKey", label: "API密钥", valueType: "string", defaultValue: "", required: true },
    { key: "baseUrl", label: "API基础地址", valueType: "string", defaultValue: "https://qingyuntop.com/api/v1", optional: true },
    { key: "model", label: "重排序模型", valueType: "string", defaultValue: "bge-reranker-v2-m3", optional: true },
    { key: "topK", label: "返回前K个", valueType: "number", defaultValue: 10, minValue: 1, maxValue: 100, optional: true }
  ]
});

// ===================== 事件定义 ===================== 

// 向量嵌入相关事件
types.events.push({ 
  key: "onEmbeddingSuccess",
  label: "嵌入成功",
  params: [
    { key: "embedding", label: "向量数据", valueType: "array", defaultValue: [] },
    { key: "dimensions", label: "向量维度", valueType: "number", defaultValue: 0 },
    { key: "tokenUsage", label: "token使用量", valueType: "number", defaultValue: 0 }
  ]
});

// 重排序相关事件
types.events.push({ 
  key: "onRerankSuccess",
  label: "重排序成功",
  params: [
    { key: "results", label: "排序结果", valueType: "array", defaultValue: [] },
    { key: "scores", label: "相关性分数", valueType: "array", defaultValue: [] },
    { key: "totalResults", label: "结果总数", valueType: "number", defaultValue: 0 }
  ]
});

// 通用错误事件
types.events.push({ 
  key: "onError",
  label: "操作错误",
  params: [
    { key: "errorType", label: "错误类型", valueType: "string", defaultValue: "" },
    { key: "errorMessage", label: "错误信息", valueType: "string", defaultValue: "" },
    { key: "errorCode", label: "错误代码", valueType: "number", defaultValue: 0 }
  ]
});

// 请求状态事件
types.events.push({ 
  key: "onRequestStatus",
  label: "请求状态变更",
  params: [
    { key: "operation", label: "操作类型", valueType: "string", defaultValue: "" },
    { key: "status", label: "状态", valueType: "string", defaultValue: "" }
  ]
});

// 调试信息事件
types.events.push({ 
  key: "onDebugInfo",
  label: "调试信息",
  params: [
    { key: "operation", label: "操作类型", valueType: "string", defaultValue: "" },
    { key: "info", label: "调试内容", valueType: "string", defaultValue: "" }
  ]
});
 
// ===================== 小部件实现 ===================== 
class Widget extends InvisibleWidget {
  constructor(props) {
    super(props);
  }

  /**
   * 向量嵌入功能
   */
  embedding(text, apiKey, baseUrl = "https://qingyuntop.com/api/v1", 
           model = "text-embedding-3-small", dimensions = 1536) {
    
    // 参数验证
    if (!text?.trim()) {
      this.emit("onError", "embedding", "输入文本不能为空", 400);
      return;
    }
    if (!apiKey?.trim()) {
      this.emit("onError", "embedding", "API密钥不能为空", 401);
      return;
    }

    this.emit("onRequestStatus", "embedding", "开始向量化");

    // 发送请求
    axios({
      method: "post",
      url: `${baseUrl}/embeddings`,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      data: {
        model: model,
        input: text.trim(),
        dimensions: dimensions
      }
    })
    .then((response) => {
      const data = response.data;
      const embedding = data.data?.[0]?.embedding || [];
      const usage = data.usage || {};
      
      this.emit("onEmbeddingSuccess", 
        embedding, 
        embedding.length,
        usage.total_tokens || 0
      );
      this.emit("onRequestStatus", "embedding", "向量化成功");
    })
    .catch((error) => {
      this.handleError("embedding", error);
    });
  }

  /**
   * 文档重排序功能
   */
  rerank(query, documents, apiKey, baseUrl = "https://qingyuntop.com/api/v1", 
         model = "bge-reranker-v2-m3", topK = 10) {
    
    // 参数验证
    if (!query?.trim()) {
      this.emit("onError", "rerank", "查询文本不能为空", 400);
      return;
    }
    if (!documents || documents.trim() === "") {
      this.emit("onError", "rerank", "文档列表不能为空", 400);
      return;
    }
    if (!apiKey?.trim()) {
      this.emit("onError", "rerank", "API密钥不能为空", 401);
      return;
    }

    // 输出调试信息
    this.emit("onDebugInfo", "rerank", `原始文档字符串: "${documents}"`);

    // 将逗号分割的字符串转换为数组，增强处理逻辑
    let documentArray;
    try {
      documentArray = documents.split(',')
        .map(doc => doc.trim())  // 去除每个文档前后的空格
        .filter(doc => doc.length > 0);  // 过滤掉空字符串
    } catch (e) {
      this.emit("onError", "rerank", "文档字符串处理失败: " + e.message, 400);
      return;
    }

    // 输出处理后的数组信息
    this.emit("onDebugInfo", "rerank", `处理后文档数组长度: ${documentArray.length}`);
    this.emit("onDebugInfo", "rerank", `文档内容: ${JSON.stringify(documentArray)}`);

    if (documentArray.length === 0) {
      this.emit("onError", "rerank", "没有有效的文档内容，请检查文档格式", 400);
      return;
    }

    this.emit("onRequestStatus", "rerank", "开始重排序");

    // 构建请求数据
    const requestData = {
      model: model,
      query: query.trim(),
      documents: documentArray,  // 根据API文档，可能字段名是documents而不是passages
      top_k: Math.min(topK, documentArray.length)
    };

    // 输出请求数据调试信息
    this.emit("onDebugInfo", "rerank", `请求数据: ${JSON.stringify(requestData, null, 2)}`);

    // 发送请求
    axios({
      method: "post",
      url: `${baseUrl}/rerank`,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      data: requestData
    })
    .then((response) => {
      const data = response.data;
      const results = data.results || [];
      
      // 提取排序后的文档和分数
      const sortedDocs = results.map(item => ({
        index: item.index,
        document: documentArray[item.index],
        relevanceScore: item.relevance_score
      }));
      
      const scores = results.map(item => item.relevance_score);
      
      this.emit("onRerankSuccess", 
        sortedDocs,
        scores, 
        results.length
      );
      this.emit("onRequestStatus", "rerank", "重排序成功");
    })
    .catch((error) => {
      this.handleError("rerank", error);
    });
  }

  /**
   * 统一错误处理
   */
  handleError(operation, error) {
    let errorMessage = "";
    let errorCode = 0;
    
    if (error.code === 'ECONNABORTED') {
      errorMessage = "请求超时";
      errorCode = 408;
    } else if (error.response) {
      // 详细的错误信息
      const responseData = error.response.data;
      errorMessage = responseData?.error?.message || responseData?.message || `HTTP错误: ${error.response.status}`;
      errorCode = error.response.status;
      
      // 输出完整的响应数据用于调试
      this.emit("onDebugInfo", operation, `API响应错误: ${JSON.stringify(responseData)}`);
    } else if (error.request) {
      errorMessage = "网络连接失败";
      errorCode = 503;
    } else {
      errorMessage = error.message || "未知错误";
      errorCode = 500;
    }
    
    this.emit("onError", operation, errorMessage, errorCode);
    this.emit("onRequestStatus", operation, "请求失败");
  }
}
 
// ===================== 模块导出 ===================== 
exports.types = types;
exports.widget = Widget;
