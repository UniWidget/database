/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

const types = {
    isInvisibleWidget: false,
    type: "RUN_AWAY_WIDGET",
    icon: "https://static.codemao.cn/coco/player/unstable/S1Dtc4Q33.image/jpeg?hash=Fske55mPi_ZyPl7DuU3VydyxBjr2",
    title: "跑路控件",
    version: "1.0.0",
    isGlobalWidget: false,
    properties: [],
    methods: [],
    events: [],
  };
  
  class RunAwayWidget extends VisibleWidget {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "#f44336",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "48px",
            fontWeight: "bold",
            zIndex: 9999,
            animation: "runAwayAnimation 3s ease-in-out infinite",
          }}
        >
          作者跑路啦！
        </div>
      );
    }
  }
  
  exports.types = types;
  exports.widget = RunAwayWidget;
  