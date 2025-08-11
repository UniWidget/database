// AudioPlayerWidget.js

// 控件类型定义
const AUDIO_PLAYER_WIDGET = {
  type: 'AUDIO_PLAYER_WIDGET',
  icon: 'https://creation.codemao.cn/716/appcraft/IMAGE_KvkhthrhIl_1643078284866',
  title: 'Audio Player Widget',
  version: '1.0',
  platforms: ['android', 'ios', 'web'],
  isInvisibleWidget: true,
  isGlobalWidget: true,
  properties: [
    {
      key: 'audioSource',
      label: 'Audio Source',
      valueType: 'string',
      defaultValue: 'https://example.com/audio.mp3',
      tooltip: 'The URL of the audio file to be played.',
    },
    {
      key: 'bassBoost',
      label: 'Bass Boost',
      valueType: 'number',
      defaultValue: 0,
      tooltip: 'Adjust the bass level of the audio.',
    },
    {
      key: 'trebleBoost',
      label: 'Treble Boost',
      valueType: 'number',
      defaultValue: 0,
      tooltip: 'Adjust the treble level of the audio.',
    },
  ],
  methods: [
    {
      key: 'playAudio',
      label: 'Play Audio',
      valueType: 'void',
      tooltip: 'Play the audio file.',
    },
    {
      key: 'stopAudio',
      label: 'Stop Audio',
      valueType: 'void',
      tooltip: 'Stop the playing audio.',
    },
    {
      key: 'adjustBass',
      label: 'Adjust Bass',
      valueType: 'void',
      tooltip: 'Adjust the bass level of the audio.',
    },
    {
      key: 'adjustTreble',
      label: 'Adjust Treble',
      valueType: 'void',
      tooltip: 'Adjust the treble level of the audio.',
    },
  ],
  events: [],
};

// 控件实体定义
class AudioPlayerWidget extends InvisibleWidget {
  constructor(props) {
    super(props);
    this.audioSource = props.audioSource;
    this.audioElement = null;
    this.audioContext = null;
    this.analyserNode = null;
    this.gainNode = null;
    this.createAudioContext();
  }

  createAudioContext() {
    // 创建音频上下文和其他必要的节点
    this.audioContext = new AudioContext();
    this.analyserNode = this.audioContext.createAnalyser();
    this.analyserNode.fftSize = 2048;
    this.gainNode = this.audioContext.createGain();
    this.gainNode.gain.value = 1;
    this.gainNode.connect(this.analyserNode);
    this.analyserNode.connect(this.audioContext.destination);
  }

  playAudio() {
    // 创建并播放音频元素
    const audioElement = new Audio(this.audioSource);
    audioElement.play();
    audioElement.connect(this.gainNode);
  }

  stopAudio() {
    // 停止音频
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement.src = '';
    }
  }

  adjustBass(value) {
    // 调整低音水平
    this.gainNode.gain.value = value;
  }

  adjustTreble(value) {
    // 调整高音水平
    this.gainNode.gain.value = value;
  }
}

exports.types = AUDIO_PLAYER_WIDGET;
exports.widget = AudioPlayerWidget;
