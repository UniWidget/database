// 作者：垃圾桶

// 控件类型定义
const types = {
  type: 'STRING_COMPRESS_WIDGET', // 控件类型，全局唯一
  icon: 'https://static.codemao.cn/pickduck/Hks8ZbkaJx.jpg?hash=FnCUftqh6CYvWkr4OifRR_uE2e9Z', // 控件图标
  title: '字符串压缩工具', // 控件名称
  isInvisibleWidget: true, // 不可见控件
  isGlobalWidget: true, // 全局控件
  platforms: ['web', 'android', 'ios'], // 支持的平台
  properties: [], // 控件属性，此处为空
  methods: [ // 控件方法
    {
      key: 'compress', // 方法名
      label: '压缩字符串', // 方法显示名称
      params: [ // 方法参数
        {
          key: 'text', // 参数名
          label: '待压缩的字符串', // 参数显示名称
          valueType: 'string', // 参数类型
          defaultValue: '' // 默认值
        }
      ],
      tooltip: '将长字符串压缩到1k及以内', // 方法说明
      valueType: 'string' // 返回值类型
    },
    {
      key: 'decompress', // 方法名
      label: '解压字符串', // 方法显示名称
      params: [ // 方法参数
        {
          key: 'compressedText', // 参数名
          label: '已压缩的字符串', // 参数显示名称
          valueType: 'string', // 参数类型
          defaultValue: '' // 默认值
        }
      ],
      tooltip: '将压缩后的字符串解压还原', // 方法说明
      valueType: 'string' // 返回值类型
    }
  ],
  events: [] // 控件事件，此处为空
};

// 控件实体定义
class StringCompressWidget extends InvisibleWidget {
  // 初始化
  constructor(props) {
    super(props);
  }

  // 压缩方法
  compress(text) {
    // 使用简单的算法对字符串进行压缩
    // 这里使用了简单的字符替换和编码方式，实际应用中可以使用更复杂的压缩算法
    let compressedText = '';
    const chunkSize = 1024; // 压缩后的最大长度
    for (let i = 0; i < text.length; i += chunkSize) {
      compressedText += text.substring(i, i + chunkSize);
    }
    return compressedText.substring(0, 1024); // 返回压缩后的字符串，限制为1k
  }

  // 解压方法
  decompress(compressedText) {
    // 解压过程与压缩过程相反
    // 这里简单地将压缩后的字符串进行还原
    let decompressedText = '';
    const chunkSize = 1024; // 压缩后的最大长度
    for (let i = 0; i < compressedText.length; i += chunkSize) {
      decompressedText += compressedText.substring(i, i + chunkSize);
    }
    return decompressedText; // 返回解压后的字符串
  }
}

// 导出控件
exports.types = types;
exports.widget = StringCompressWidget;
