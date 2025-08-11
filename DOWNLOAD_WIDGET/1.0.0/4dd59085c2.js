const types = {
  isInvisibleWidget: false,
  type: "DOWNLOAD_WIDGET",
  icon: "ICON_URL",
  title: "下载",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: "text",
      label: "按钮文本",
      valueType: "string",
      defaultValue: "下载",
      blockOptions: {
        generateBlock: true,
      },
    },
    {
      key: "backgroundColor",
      label: "按钮背景颜色",
      valueType: "string",
      defaultValue: "#1495ef",
      blockOptions: {
        generateBlock: true,
      },
    },
    {
      key: "downloadUrl",
      label: "下载地址",
      valueType: "string",
      defaultValue: "",
      blockOptions: {
        generateBlock: true,
      },
    },
  ],
  methods: [
    {
      key: "startDownload",
      label: "开始下载",
      params: [],
    },
  ],
  events: [
    {
      key: "onButtonClick",
      label: "按钮点击",
      params: [],
    },
  ],
};

class DownloadWidget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.text = props.text;
    this.backgroundColor = props.backgroundColor;
    this.downloadUrl = props.downloadUrl;
  }

  handleButtonClick = () => {
    if (this.downloadUrl) {
      this.startDownload(); // Call the startDownload method
    }
  };

  startDownload = () => {
    if (this.downloadUrl) {
      // Simulate downloading
      console.log(`Downloading from: ${this.downloadUrl}`);
      // Trigger the button click event
      this.emit("onButtonClick");
    }
  };

  render() {
    return (
      <button
        onClick={this.handleButtonClick}
        style={{
          background: this.backgroundColor,
          color: "#ffffff",
          border: "none",
          borderRadius: "5px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        {this.text}
      </button>
    );
  }
}

exports.types = types;
exports.widget = DownloadWidget;
