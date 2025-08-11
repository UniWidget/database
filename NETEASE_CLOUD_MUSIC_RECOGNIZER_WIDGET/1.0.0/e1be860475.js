// 网易云听歌识曲控件
// 作者：Him

const blockColor = '#1E90FF'
var document = this.document
var window = this.window

// 定义控件类型
let types = {
    type: 'NETEASE_CLOUD_MUSIC_RECOGNIZER_WIDGET', // 控件类型，全局唯一
    title: '网易云听歌识曲', // 控件显示名称
    icon: 'https://static.bcmcdn.com/coco/player/unstable/r1RHp5bF1e.image/svg+xml?hash=Flcy5XrFMT24Ul-muHn_rtzZ40Sg', // 控件图标
    isInvisibleWidget: true, // 不可见控件
    isGlobalWidget: true, // 全局控件
    properties: [], // 控件属性
    hasAnyWidget: false,
    properties: [
      // 控件属性
      {
          key: 'apiKey',
          label: 'API密钥',
          unit: '密钥',
          valueType: 'string',
          defaultValue: '',
          blockOptions: { generateBlock: false },
    },
  ],
    methods: [
      // 定义方法
      {
        key: 'recognizeAudio',
        label: '识别音频',
        params: [
          {
            key: 'audioFilePath',
            label: '音频文件路径',
            valueType: 'string',
            defaultValue: '',
          },
        ],
        tooltip: '识别音频文件对应的歌曲',
      },
      {
        key: "getWidgetId",
        label: '的 ID',
        valueType: 'string',
        params: [],
        blockOptions: { callMethodLabel: false, color: '#1EBCFF' },
    },
    ],
    events: [
      // 定义事件
      {
        key: 'onRecognitionSuccess',
        label: '当识别成功',
        params: [
          {
            key: 'songInfo',
            label: '歌曲信息',
            valueType: 'string',
          },
        ],
      },
      {
        key: 'onRecognitionFailed',
        label: '当识别失败',
        params: [
          {
            key: 'errorInfo',
            label: '错误信息',
            valueType: 'string',
          },
        ],
      },
    ],
  };
  
  // 控件实体定义，继承 InvisibleWidget
  class Widget extends InvisibleWidget {
    // 初始化方法
    constructor(props) {
      super(props)
      Object.assign(this, props)
      this.apiKey = props.apiKey
      this.apiBaseUrl = 'https://music.163.com/api'
      this.avatarPrefix = 'https://p1.music.126.net'
    }
    // 获取控件的 ID
    getWidgetId() {
      return this.__widgetId
    }
    // 识别音频方法
    recognizeAudio(audioFilePath) {
      // 检查API密钥是否设置
      if (this.apiKey) {
          this.emit('onRecognitionFailed', 'API密钥未设置');
          return;
        }
      // 检查音频文件路径是否有效
      if (audioFilePath) {
        this.emit('onRecognitionFailed', '音频文件路径无效');
        return;
      }
        // 使用网易云音乐API进行音频识别
        const apiUrl = 'https://music.163.com/api/song/recognize';

        // 准备请求参数
        const formData = new FormData();
        formData.append('api-key', this.apiKey);
        formData.append('audio-file', utils.getWidgetImageUrl(audioFilePath)); // 假设音频文件已上传到素材库

        // 发送POST请求
        axios.post(apiUrl, formData)
            .then(response => {
                // 处理响应
                if (response.data.success) {
                    this.emit('onRecognitionComplete', response.data.result);
                } else {
                    this.emit('onRecognitionFailed', response.data.error.message);
                }
            })
            .catch(error => {
                // 处理错误
                this.emit('onRecognitionFailed', error.message);
            });
    

    }
  }
  
  // 导出控件类型和实体
  exports.types = types
  exports.widget = Widget