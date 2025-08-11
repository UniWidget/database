// Version 1.2.2 by 刘lyxAndy
/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
const types = {
  type: 'ONLINE_PLAYER',
  icon: 'https://creation.codemao.cn/716/appcraft/IMAGE_X36CDtIms_1642823792018.png',
  title: '媒体播放器',
  platforms: ['web', 'android', 'ios'],
  isInvisibleWidget: false,
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: 320,
    },
    {
      key: '__height',
      label: '高度',
      valueType: 'number',
      defaultValue: 176,
    },
    {
      key: 'url',
      label: '媒体URL',
      valueType: 'string',
      defaultValue: 'https://www.runoob.com/try/demo_source/mov_bbb.mp4',
    },
    {
      key: 'contrl',
      label: '有控制按钮',
      valueType: 'boolean',
      defaultValue: true,
    },
    {
      key: 'name',
      label: '控件ID',
      valueType: 'number',
      defaultValue: 0,
    },
    {
      key: 'info',
      label: '类型',
      valueType: 'string',
      defaultValue: 'video/mp4',
      dropdown : [
        {label : 'MP3',value : 'audio/mpeg'},
        {label : 'OGG(audio)',value : 'audio/ogg'},
        {label : 'WAV',value : 'audio/wav'},
        {label : 'MP4',value : 'video/mp4'},
        {label : 'WebM',value : 'video/webm'},
        {label : 'OGG(video)',value : 'video/ogg'},
      ]
    },
  ],
  methods: [
    {
      key : 'play',
      label : '播放',
      params : [],
    },
    {
      key : 'pause',
      label : '暂停',
      params : [],
    }
  ],
  events: [
    {
      key: 'onClick',
      label: '点击',
      params: [],
    },
  ],
};

class OnlinePlayer extends VisibleWidget {
  constructor(props) {
    super(props);
    this.url = props.url;
    this.info = props.info;
    this.contrl = props.contrl;
    this.name=props.name;
    this.width=props.__width;
    this.height=props.__height;
  }
  onClick = () => {
    this.emit('onClick');
  };
  play = () => {
    var element = document.getElementById(this.name);
    element.play();
  };
  pause = () => {
    var element = document.getElementById(this.name);
    element.pause();
  };
  render() {
    return (
      <div>
        <video  
          controls={this.contrl}
          id={this.name}
          width={this.width}
          height={this.height}>
            <source
              src={this.url}
              type={this.info}>
            </source>
            Your browser does not support 'video'.
        </video>
      </div>
    );
  }
}

exports.types = types;
exports.widget = OnlinePlayer;
