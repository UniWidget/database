const AUTHER = '青柠';
const QQ = 3463448740;
const types = {
  type: 'THIRDPARTY_MEDIAPLAY_WIDGET_COPY',
  icon: 'https://www.lihouse.xyz/coco_widget/thirdparty_media/logo.svg',
  title: '第三方音乐播放器',
  version: '1.0.0',
  auther: AUTHER,
  docs: {
    url: 'http://doc.lihouse.xyz/thirdparty_media.html',
  },
  platforms: ['web', 'android', 'ios'],
  isInvisibleWidget: true,
  isGlobalWidget: true,
  hasAnyWidget: false,
  properties: [
    {
      key: 'seconds',
      label: '当前秒数',
      valueType: 'number',
      defaultValue: '0',
      readonly: true,
      tooltip: '可以写一个判断循环，条件为“是否播放完为否”，即正在播放，每隔一秒或0.5秒来更改屏幕上的秒数'
    },
    {
      key: 'duration',
      label: '总秒数',
      valueType: 'number',
      defaultValue: '0',
      readonly: true,
      tooltip: '一般来说音频总秒数并非整数，若要搭配进度条是用请用四舍五入向下取整！'
    },
    {
      key: 'ended',
      label: '是否播放完',
      valueType: 'boolean',
      defaultValue: false,
      readonly: true,
      tooltip: '若播放完则返回布尔值true，反之则false'
    },
    {
      key: 'playbackRate',
      label: '播放倍速',
      valueType: 'number',
      defaultValue: '1',
      tooltip: '设置音频的播放速度倍数'
    },
  ],
  methods: [
    {
      key: 'play',
      label: '播放音乐',
      params: [],
      blockOptions: {
        color: '#68cdff',
      },
      tooltip: '请先设置音频链接再使用该积木，如果有已播放请先暂停！'
    },
    {
      key: 'pause',
      label: '暂停音乐',
      params: [],
      blockOptions: {
        color: '#68cdff',
      },
    },
    {
      key: 'seconds_change',
      label: '跳转音乐到',
      params: [
        {
          key: 'seconds',
          label: '多少秒',
          valueType: 'number',
          defaultValue: '0',
        },
      ],
      blockOptions: {
        color: '#68cdff',
      },
    },
    {
      key: 'volume_change',
      label: '设置音量',
      params: [
        {
          key: 'percent',
          label: '百分之多少（用0.x表示）',
          valueType: 'number',
          defaultValue: '0.5',
        },
      ],
      blockOptions: {
        color: '#68cdff',
      },
    },
    {
      key: 'set',
      label: '设置链接',
      params: [
        {
          key: 'url',
          label: '为网址',
          valueType: 'string',
          defaultValue: '',
        },
      ],
      blockOptions: {
        color: '#68cdff',
      },
    },
    {
      key: 'setPlaybackRate',
      label: '设置倍速',
      params: [
        {
          key: 'rate',
          label: '倍速',
          valueType: 'number',
          defaultValue: '1',
        },
      ],
      blockOptions: {
        color: '#68cdff',
      },
      tooltip: '设置音频的播放速度倍数',
    },
  ],
  events: [
    {
      key: 'onCanplay',
      label: '音乐资源就绪',
      params: [],
    },
    {
      key: 'onPlay',
      label: '音乐开始播放',
      params: [],
    },
    {
      key: 'onPause',
      label: '音乐暂停',
      params: [],
    },
    {
      key: 'onEnded',
      label: '音乐播放完',
      params: [],
    },
    {
      key: 'onError',
      label: '播放出错',
      params: [
        {
          key: 'reason',
          label: '错误原因',
          valueType: 'string',
        },
      ],
    },
  ],
};

class Widget extends InvisibleWidget {
  constructor(props) {
    super(props);
    console.log('[THIRDPARTY_MEDIAPLAY_WIDGET] 作者:' + AUTHER + ' 联系方式:' + QQ);
    this.widgetLog('为不可见控件，能够让UI得以充分发挥！务必请看使用文档！');
    this.widgetLog('的文档链接:https://doc.lihouse.xyz/thirdparty_media.html');
    this.seconds = props.seconds;
    this.audio = new Audio();
    this.duration = props.duration;
    this.info = {
      duration: 0,
      playable: false,
      play_status: false,
      loop: null,
      seconds: 0,
      ended: false
    };
    this.ended = props.ended;
    this.setted = false;
    this.loop = null;
    this.playbackRate = 1; // 默认倍速为1

    this.audio.addEventListener("canplay", () => {
      console.log(this.info.ended);
      if (this.audio.currentTime == 0 && this.info.ended == true) return;
      this.info.duration = this.audio.duration;
      this.duration = this.info.duration;
      this.info.playable = true;
      this.emit('onCanplay');
    });

    this.audio.addEventListener('ended', () => {
      clearInterval(this.info.loop);
      clearInterval(this.loop);
      this.ended = true;
      this.info.ended = true;
      this.info.play_status = false;
      this.info.seconds = 0;
      this.audio.currentTime = 0;
      this.emit('onEnded');
    });
  }

  check() {
    if (!this.setted) {
      this.emit('onError', '外部媒体资源链接还未设置!');
      this.widgetWarn('外部媒体资源链接还未设置!');
      return false;
    }
    if (!this.info.playable) {
      this.emit('onError', '媒体资源仍在下载中!');
      this.widgetWarn('媒体资源仍在下载中!');
      return false;
    }
    return true;
  }

  set(url) {
    clearInterval(this.info.loop);
    clearInterval(this.loop);
    this.ended = false;
    this.info.ended = false;
    this.info.play_status = false;
    this.info.seconds = 0;
    this.audio.currentTime = 0;
    this.info.playable = false;
    this.audio.src = url;
    this.setted = true;
  }

  seconds_change(seconds) {
    if (this.check()) {
      if (seconds > this.info.duration) {
        this.emit('onError', '无效的跳转秒数!');
        this.widgetWarn('无效的跳转秒数!');
        return;
      }
      clearInterval(this.info.loop);
      this.info.seconds = seconds;
      this.audio.currentTime = seconds;
      this.submit();
    }
  }

  isBetweenZeroAndOne(num) {
    return num >= 0 && num <= 1;
  }

  volume_change(percent) {
    if (!this.isBetweenZeroAndOne(percent)) {
      this.emit('onError', '音量范围不合法!');
      this.widgetWarn('音量范围不合法!');
    }
    this.audio.volume = percent;
  }

  play() {
    if (this.check()) {
      if (this.info.play_status) {
        this.emit('onError', '正在播放中!');
        this.widgetWarn('正在播放中!');
        return;
      }
      this.info.seconds = this.audio.currentTime;
      if (this.audio.currentTime < this.info.duration) this.info.ended = false;
      this.audio.playbackRate = this.playbackRate; // 设置倍速
      if (this.audio.play()) {
        this.loop = setInterval(() => {
          this.submit();
        }, 500);
        this.ended = false;
        this.info.play_status = true;
        this.emit('onPlay');
      }
    }
  }

  submit() {
    this.seconds = Math.floor(this.audio.currentTime);
  }

  pause() {
    if (!this.info.play_status) {
      this.emit('onError', '当前无媒体播放!');
      this.widgetWarn('当前无媒体播放!');
      return;
    }
    if (this.check()) {
      this.audio.pause();
      this.info.play_status = false;
      clearInterval(this.info.loop);
      this.emit('onPause');
    }
  }

  setPlaybackRate(rate) {
    if (typeof rate !== 'number') {
      this.emit('onError', '倍速参数必须为数字!');
      this.widgetWarn('倍速参数必须为数字!');
      return;
    }
    this.playbackRate = rate;
    this.audio.playbackRate = this.playbackRate;
  }
}

exports.types = types;
exports.widget = Widget;
