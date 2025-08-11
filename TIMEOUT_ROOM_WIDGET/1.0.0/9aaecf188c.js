/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

const types = {
  isInvisibleWidget: false,
  type: "TIMEOUT_ROOM_WIDGET",
  icon: "https://static.codemao.cn/coco/player/unstable/S1Dtc4Q33.image/jpeg?hash=Fske55mPi_ZyPl7DuU3VydyxBjr2",
  title: "全屏小黑屋",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: "remainingTime",
      label: "倒计时时间（秒）",
      valueType: "number",
      defaultValue: 300, // 默认倒计时5分钟
      blockOptions: {
        generateBlock: true,
      },
    },
  ],
  methods: [],
  events: [],
};

class TimeoutRoomWidget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.remainingTime = props.remainingTime;
    this.timer = null;
  }

  componentDidMount() {
    this.startCountdown();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  startCountdown = () => {
    this.timer = setInterval(() => {
      const remainingTime = this.remainingTime;
      if (remainingTime > 0) {
        this.setProps({ remainingTime: remainingTime - 1 });
      } else {
        clearInterval(this.timer);
      }
    }, 1000);
  };

  render() {
    const remainingTime = this.remainingTime;

    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "#000",
          color: "#ffffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "48px",
          fontWeight: "bold",
        }}
      >
        <div>
          <p>你已进入小黑屋</p>
          <p>倒计时: {Math.floor(remainingTime / 60)}:{remainingTime % 60 < 10 ? "0" : ""}{remainingTime % 60}</p>
        </div>
      </div>
    );
  }
}

exports.types = types;
exports.widget = TimeoutRoomWidget;
