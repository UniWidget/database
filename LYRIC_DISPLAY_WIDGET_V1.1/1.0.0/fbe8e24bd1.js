/**
 * 歌词滚动推送
 * 制作：柠（QQ：3463448740）
 */
const AUTHER = "青柠";
const QQ = 3463448740;
const types = {
  type: "LYRIC_DISPLAY_WIDGET_V1.1",
  icon: "https://www.lihouse.xyz/coco_widget/lyric_display/logo.svg",
  title: "歌词滚动展示",
  version: "1.0.0",
  auther: AUTHER,
  docs: {
    url: "https://doc.lihouse.xyz/lyric_display.html",
  },
  platforms: ["web", "android", "ios"],
  isInvisibleWidget: false,
  isGlobalWidget: false,
  hasAnyWidget: false,
  properties: [
    {
      key: "lines",
      label: "歌词总行数",
      valueType: "number",
      defaultValue: "0",
      readonly: !0,
    },
    {
      key: "onBlurColor",
      label: "聚焦歌词颜色",
      valueType: "string",
      defaultValue: "#ff6d32",
      readonly: 0,
    },

    {
      key: "unBlurColor",
      label: "未聚焦歌词颜色",
      valueType: "string",
      defaultValue: "#888",
      readonly: 0,
    },

    {
      key: "onBlurSize",
      label: "聚焦歌词字号",
      valueType: "string",
      defaultValue: "1.2em",
      readonly: 0,
    },
    {
      key: "unBlurSize",
      label: "未聚焦歌词字号",
      valueType: "string",
      defaultValue: "1em",
      readonly: 0,
    },
  ],
  methods: [
    {
      key: "set",
      label: "解析歌词",
      params: [
        {
          key: "lyric",
          label: "字符串",
          valueType: "string",
          defaultValue: "",
        },
      ],
      blockOptions: {
        color: "#ff6d32",
      },
    },

    {
      key: "start",
      label: "开始推送",
      params: [
        {
          key: "addingSecond",
          label: "在",
          valueType: "number",
          defaultValue: "0",
          labelAfter: "秒",
        },
      ],
      blockOptions: {
        color: "#ff6d32",
      },
    },

    {
      key: "pause",
      label: "暂停推送",
      params: [],
      blockOptions: {
        color: "#ff6d32",
      },
    },

    {
      key: "change",
      label: "跳转推送",
      params: [
        {
          key: "seconds",
          label: "到",
          valueType: "number",
          defaultValue: "0",
          labelAfter: "秒",
        },
      ],
      blockOptions: {
        color: "#ff6d32",
      },
    },
  ],
  events: [
    {
      key: "onParse",
      label: "歌词被解析",
      params: [
        {
          key: "lyric",
          label: "本句歌词",
          valueType: "string",
        },
        {
          key: "line",
          label: "本句行数",
          valueType: "number",
        },
      ],
    },
    {
      key: "onAccomplish",
      label: "歌词解析完成",
      params: [],
    },
    {
      key: "onPush",
      label: "歌词被推送",
      params: [
        {
          key: "lyric",
          label: "当前歌词",
          valueType: "string",
        },
        {
          key: "line",
          label: "当前行数",
          valueType: "number",
        },
      ],
    },
    {
      key: "onError",
      label: "出错",
      params: [
        {
          key: "reason",
          label: "错误原因",
          valueType: "string",
        },
      ],
    },
  ],
};

const generateSeed = () => {
  const timestamp = Date.now().toString();
  const randomPosition = Math.floor(Math.random() * timestamp.length);
  const randomChar = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  const seed =
    timestamp.slice(0, randomPosition) +
    randomChar +
    timestamp.slice(randomPosition + 1);

  return seed;
};

const seed = generateSeed();


class Widget extends VisibleWidget {
  constructor(props) {
    console.log(props)
    console.log("[LYRIC_DISPLAY_WIDGET] 原创作者:" + AUTHER + " 联系方式:" + QQ);
    super(props);
    this.widgetLog("的使用文档网址:https://doc.lihouse.xyz/lyric_display.html");
    this.lyric = "";
    this.lines = props.lines;
    this.paused = false;
    this.globalObject = {};
    this.setted = false;
    this.status = false;
    this.currentLine = -1;
    this.linesArray = [];
    this.onBlurColor = props.onBlurColor;
    this.unBlurColor = props.unBlurColor;
    this.onBlurSize = props.onBlurSize;
    this.unBlurSize = props.unBlurSize;
  }

  set(lyric) {
    if (this.status == true) {
      this.emit("onError", "请先暂停推送再设置！");
      this.widgetWarn("请先暂停推送再设置！");
    }
    this.lyric = lyric;
    this.setted = true;
    const lines = this.polyfillForCoco();
    this.lines = lines.length;
    lines.forEach((line, i) => {
      const match = line.match(/\[(\d+:\d+\.\d+)\](.*)/);
      if (match) {
        const [, , content] = match;
        this.emit("onParse", content.trim(), i);
      }
    });
    this.linesArray = lines.map((line) => {
      const match = line.match(/\[(\d+:\d+\.\d+)\](.*)/);
      return match ? match[2].trim() : line.trim();
    });
    this.setProps({ linesArray: this.linesArray });
    this.emit("onAccomplish");
  }

  start() {
    document
      .getElementById(`lyric_container_${seed}`)
      .style.setProperty("scrollbar-width", "none");

    document
      .getElementById(`lyric_container_${seed}`)
      .style.setProperty("webkitOverflowScrolling", "touch");
    document
      .getElementById(`lyric_container_${seed}`)
      .style.setProperty("::-webkit-scrollbar", "none");

    if (this.setted == false) {
      this.emit("onError", "请先设置歌词！");
      this.widgetWarn("请先设置歌词！");
      return;
    }
    if (this.status == true) {
      this.emit("onError", "请先暂停推送再开始！");
      this.widgetWarn("请先暂停推送再开始！");
    }
    this.clearObject();
    this.status = true;
    this.paused = false;
    this.play();
  }

  change(seconds) {
    if (this.setted == false) {
      this.emit("onError", "请先设置歌词！");
      this.widgetWarn("请先设置歌词！");
      return;
    }
    if (this.status == false) {
      this.emit("onError", "请先开始推送！");
      this.widgetWarn("请先开始推送");
      return;
    }
    this.status = false;
    this.paused = true;
    this.clearObject();
    this.start(seconds);
  }

  pause() {
    if (this.setted == false) {
      this.emit("onError", "请先设置歌词！");
      this.widgetWarn("请先设置歌词！");
      return;
    }
    if (this.status == false) {
      this.emit("onError", "请先开始推送！");
      this.widgetWarn("请先开始推送");
      return;
    }
    this.status = false;
    this.paused = true;
    this.clearObject();
  }

  start(addingSecond) {
    if (this.setted == false) {
      this.emit("onError", "请先设置歌词！");
      this.widgetWarn("请先设置歌词再！");
      return;
    }
    if (this.status == true) {
      this.emit("onError", "已经在推送了！");
      this.widgetWarn("已经在推送了！！");
      return;
    }
    this.paused = false;
    this.status = true;
    const lines = this.polyfillForCoco();
    this.addingSecond = addingSecond;
    lines.forEach((line, i) => {
      const match = line.match(/\[(\d+:\d+\.\d+)\](.*)/);
      if (match) {
        const [, time, content] = match;
        const [minutes, seconds] = time.split(":").map(parseFloat);
        const totalSeconds = minutes * 60 + seconds - this.addingSecond;
        if (minutes * 60 + seconds < addingSecond) return;
        const timeoutId = setTimeout(() => {
          if (!this.paused) {
            this.currentLine = i;
            this.setProps({ currentLine: i });
            this.emit("onPush", content.trim(), i + 1);
            this.checkAutoScroll();
          }
        }, totalSeconds * 1000);

        this.addToGlobalObject(i, timeoutId);
      }
    });
  }

  checkAutoScroll() {
    const container = document.getElementById(`lyric_container_${seed}`);
    const currentLineEl = document.getElementById(
      `lyric_line_${seed}_${this.currentLine}`,
    );

    if (!container || !currentLineEl) return;
    const containerHeight = container.clientHeight;
    const lineTop = currentLineEl.offsetTop;
    const lineHeight = currentLineEl.offsetHeight;
    const targetScrollTop = lineTop - containerHeight / 2 + lineHeight / 2;
    //container.scrollTop = Math.max(0, Math.max(targetScrollTop, container.scrollHeight - containerHeight))
    container.scrollTo({
      top: Math.max(
        0,
        Math.min(targetScrollTop, container.scrollHeight - containerHeight),
      ),
      behavior: "smooth",
    });
  }

  addToGlobalObject(key, timeoutId) {
    this.globalObject[key] = timeoutId;
  }

  clearObject() {
    Object.values(this.globalObject).forEach((timeoutId) => {
      clearTimeout(timeoutId);
    });
    while (this.globalObject.length > 0) {
      this.globalObject.pop();
    }
    this.globalObject = {};
  }

  polyfillForCoco() {
    /* 特别说明： coco在将源字符串重新保存为变量时，会把\n变成 \\n导致分割失败，这个函数是一个hack意味的修复*/
    let singleSplit = this.lyric.split("\n");
    let doubleSplit = this.lyric.split("\\n");
    if (singleSplit.length >= doubleSplit.length) {
      return singleSplit;
    } else {
      return doubleSplit;
    }
  }

  render() {
    const containerStyle = {
      height: "100%",
      overflow: "scroll",
      position: "relative",
      padding: "20px 0",
      scrollbarWidth: "none",
    };

    const lineStyle = (isCurrent) => ({
      color: isCurrent ? this.onBlurColor : this.unBlurColor,
      fontSize: isCurrent ? this.onBlurSize : this.unBlurSize,
      padding: "8px 20px",
      transition: "all 0.3s ease",
      transformOrigin: "left center",
      scrollMargin: "20px 0",
    });

    return (
      <div style={containerStyle} id={`lyric_container_${seed}`}>
        {this.linesArray.map((lyric, index) => (
          <div
            key={index}
            id={`lyric_line_${seed}_${index}`}
            style={lineStyle(index === this.currentLine)}
          >
            {lyric.trim()}
          </div>
        ))}
      </div>
    );
  }
}
exports.types = types;
exports.widget = Widget;
