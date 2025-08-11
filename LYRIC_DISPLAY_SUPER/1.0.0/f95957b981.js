/**
 * 歌词滚动推送组件
 * 原创：柠（QQ：3463448740）
 */


const AUTHER = "青柠";
const QQ = 3463448740;

const types = {
  type: "LYRIC_DISPLAY_SUPER",
  icon: "https://www.lihouse.xyz/coco_widget/lyric_display/super.svg",
  title: "滚动歌词",
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
      readonly: true,
    },
    {
      key: "onBlurColor",
      label: "聚焦歌词颜色",
      valueType: "color",
      defaultValue: "#ff6d32",
      readonly: false,
    },
    {
      key: "unBlurColor",
      label: "未聚焦歌词颜色",
      valueType: "color",
      defaultValue: "#888",
      readonly: false,
    },
    {
      key: "onBlurSize",
      label: "聚焦歌词字号",
      valueType: "string",
      defaultValue: "1.4em",
      readonly: false,
    },
    {
      key: "unBlurSize",
      label: "未聚焦歌词字号",
      valueType: "string",
      defaultValue: "1.2em",
      readonly: false,
    },
    {
      key: "lineHeight",
      label: "行间距",
      valueType: "string",
      defaultValue: "8px",
      readonly: false,
    },
    {
      key: "animationKeep",
      label: "过渡动画时间",
      valueType: "number",
      defaultValue: "250",
      unit: "毫秒",
      readonly: false,
    },
    {
      key: "moreOnBlur",
      label: "聚焦歌词自定义CSS",
      valueType: "string",
      editorType: "TextArea",
      defaultValue: "font-weight: bold;word-break: break-all;",
      readonly: false,
    },
    {
      key: "moreUnBlur",
      label: "未聚焦歌词自定义CSS",
      valueType: "string",
      editorType: "TextArea",
      defaultValue: "word-break: break-all;",
      readonly: false,
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
    {
      key: "refresh",
      label: "刷新样式（推送中适用）",
      params: [],
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
          key: "line",
          label: "当前行数",
          valueType: "number",
        },
        {
          key: "lyric",
          label: "当前歌词",
          valueType: "string",
        },
        {
          key: "second",
          label: "当前秒",
          valueType: "number",
        },
      ],
    },
    {
      key: "onClick",
      label: "歌词被点击",
      params: [
        {
          key: "line",
          label: "当前行数",
          valueType: "number",
        },
        {
          key: "lyric",
          label: "当前歌词",
          valueType: "string",
        },
        {
          key: "second",
          label: "当前秒",
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

class Widget extends VisibleWidget {
  constructor(props) {
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
    this.timeMap = [];
    this.onBlurColor = props.onBlurColor;
    this.lineHeight = props.lineHeight;
    this.unBlurColor = props.unBlurColor;
    this.onBlurSize = props.onBlurSize;
    this.unBlurSize = props.unBlurSize;
    this.widgetID = props.__widgetId;
    this.animationKeep = props.animationKeep;
    this.moreOnBlur = props.moreOnBlur;
    this.moreUnBlur = props.moreUnBlur;
    this.rawCSS = '';
  }

  refresh() {
    const text = `
    <style>
    ::-webkit-scrollbar {
    width: 0;
    }
    .lyric_line:hover {
        color: ${this.onBlurColor} !important;
        font-size: ${this.onBlurSize} !important;
        ${this.moreOnBlur}
    }
    .lyric_line {
        padding: ${this.lineHeight} 0;
        transition: all ${this.animationKeep / 1000}s ease;
        transform-origin: left center;
        scroll-margin: 20px 0;
        ${this.moreUnBlur}
    }   
    .lyric_more{
      ${this.moreOnBlur}
    }
    </style> 
    `;
    this.setProps({
      rawCSS: text
    });
  }

  set(lyric) {
    this.refresh()
    if (this.status) {
      this.emit("onError", "请先暂停推送再设置！");
      this.widgetWarn("请先暂停推送再设置！");
      return;
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
      if (match) {
        const [, time, content] = match;
        const [minutes, seconds] = time.split(":").map(parseFloat);
        this.timeMap.push(minutes * 60 + seconds);
        return content.trim();
      }
      this.timeMap.push(0);
      return line.trim();
    });
    this.setProps({ linesArray: this.linesArray });
    this.emit("onAccomplish");
  }

  change(seconds) {
    if (!this.setted) {
      this.emit("onError", "请先设置歌词！");
      this.widgetWarn("请先设置歌词！");
      return;
    }
    if (!this.status) {
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
    if (!this.setted) {
      this.emit("onError", "请先设置歌词！");
      this.widgetWarn("请先设置歌词！");
      return;
    }
    if (!this.status) {
      this.emit("onError", "请先开始推送！");
      this.widgetWarn("请先开始推送");
      return;
    }
    this.status = false;
    this.paused = true;
    this.clearObject();
  }

  start(addingSecond) {
    this.refresh();
    if (!this.setted) {
      this.emit("onError", "请先设置歌词！");
      this.widgetWarn("请先设置歌词再！");
      return;
    }
    if (this.status) {
      this.emit("onError", "已经在推送了！");
      this.widgetWarn("已经在推送了！！");
      return;
    }
    this.paused = false;
    this.status = true;
    const lines = this.polyfillForCoco();
    this.addingSecond = addingSecond;
    let lastValidLine = -1;
    lines.forEach((line, i) => {
      const match = line.match(/\[(\d+:\d+\.\d+)\](.*)/);
      if (match) {
        const [, time, content] = match;
        const [minutes, seconds] = time.split(":").map(parseFloat);
        const lineSeconds = minutes * 60 + seconds;
        if (lineSeconds < addingSecond) {
          lastValidLine = i;
          return;
        }
        const totalSeconds = lineSeconds - addingSecond;
        if (minutes * 60 + seconds < addingSecond) return;
        const timeoutId = setTimeout(() => {
          if (!this.paused) {
            this.currentLine = i;
            this.setProps({ currentLine: i });
            this.emit("onPush", i + 1, content.trim(), lineSeconds);
            this.checkAutoScroll();
          }
        }, totalSeconds * 1000);
        this.addToGlobalObject(i, timeoutId);
      }
    });
    if (lastValidLine > -1) {
      const prevLine = Math.min(lastValidLine, lines.length - 1);
      const [minutes, seconds] = lines[prevLine].match(/\[(\d+:\d+\.\d+)\]/)[1]
        .split(":").map(parseFloat);
      const lineSeconds = minutes * 60 + seconds;
      if (lineSeconds < addingSecond) {
        this.currentLine = prevLine;
        this.setProps({ currentLine: prevLine });
        this.emit("onPush", prevLine + 1, this.linesArray[prevLine], lineSeconds);
        this.checkAutoScroll();
      }
    }
  }

  checkAutoScroll() {
    const container = document.getElementById(this.widgetID).querySelector('#lyric_container');
    const currentLineEl = document.getElementById(this.widgetID).querySelector(
      `#lyric_line_${this.currentLine}`,
    );
    if (!container || !currentLineEl) return;
    const containerHeight = container.clientHeight;
    const lineTop = currentLineEl.offsetTop;
    const lineHeight = currentLineEl.offsetHeight;
    const targetScrollTop = lineTop - containerHeight / 2 + lineHeight / 2;
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
    this.globalObject = {};
  }

  handleLineClick(index) {
    if (index >= 0 && index < this.timeMap.length) {
      const totalSeconds = this.timeMap[index];
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = (totalSeconds % 60).toFixed(2);
      this.emit("onClick", index + 1, this.linesArray[index], totalSeconds);
    }
  }

  polyfillForCoco() {
    let singleSplit = this.lyric.split("\n");
    let doubleSplit = this.lyric.split("\\n");
    return singleSplit.length >= doubleSplit.length ? singleSplit : doubleSplit;
  }

  render() {
    const containerStyle = {
      height: "100%",
      overflow: "scroll",
      position: "relative",
      padding: "20px 20px",
      scrollbarWidth: "none",
    };

    const lineStyle = (isCurrent) => ({
      color: isCurrent ? this.onBlurColor : this.unBlurColor,
      fontSize: isCurrent ? this.onBlurSize : this.unBlurSize,
    });

    return (
      <div style={containerStyle} id={`lyric_container`}>
        <div dangerouslySetInnerHTML={{ __html: this.rawCSS }}></div>
        {this.linesArray.map((lyric, index) => (
          <div
            key={index}
            id={`lyric_line_${index}`}
            className={`lyric_line ${index === this.currentLine ? 'lyric_more' : ''}`}
            style={lineStyle(index === this.currentLine)}
            onClick={() => this.handleLineClick(index)}
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