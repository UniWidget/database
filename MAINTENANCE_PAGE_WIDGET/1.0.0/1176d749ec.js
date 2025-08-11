/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

const types = {
    isInvisibleWidget: false,
    type: "MAINTENANCE_PAGE_WIDGET",
    icon: "https://static.codemao.cn/coco/player/unstable/S1Dtc4Q33.image/jpeg?hash=Fske55mPi_ZyPl7DuU3VydyxBjr2",
    title: "维修中页面",
    version: "1.0.0",
    isGlobalWidget: false,
    properties: [],
    methods: [],
    events: [],
  };
  
  class MaintenancePageWidget extends VisibleWidget {
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
            background: "#FF9800", // 橙色背景
            color: "#ffffff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "48px", // 增大字体大小
            fontWeight: "bold",
          }}
        >
          维修中...
        </div>
      );
    }
  }
  
  exports.types = types;
  exports.widget = MaintenancePageWidget;
  