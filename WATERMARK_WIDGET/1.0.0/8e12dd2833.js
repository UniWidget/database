/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

const types = {
  isInvisibleWidget: false,
  type: "WATERMARK_WIDGET",
  icon: "https://static.codemao.cn/coco/player/unstable/S1Dtc4Q33.image/jpeg?hash=Fske55mPi_ZyPl7DuU3VydyxBjr2",
  title: "全屏倾斜水印",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: "text",
      label: "水印文本",
      valueType: "string",
      defaultValue: "Watermark",
    },
    {
      key: "fontSize",
      label: "字体大小",
      valueType: "number",
      defaultValue: 24,
    },
    {
      key: "opacity",
      label: "透明度",
      valueType: "number",
      defaultValue: 0.5,
    },
  ],
  methods: [],
  events: [],
};

class WatermarkWidget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.text = props.text;
    this.fontSize = props.fontSize;
    this.opacity = props.opacity;
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
          zIndex: 9999,
          pointerEvents: "none",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: `${index * 10}%`,
              left: 0,
              width: "100%",
              textAlign: "center",
              transform: `rotate(-45deg)`,
              transformOrigin: "center center",
              opacity: this.opacity,
              fontSize: `${this.fontSize}px`,
              color: "rgba(0, 0, 0, 0.1)",
            }}
          >
            {this.text}
          </div>
        ))}
      </div>
    );
  }
}

exports.types = types;
exports.widget = WatermarkWidget;
