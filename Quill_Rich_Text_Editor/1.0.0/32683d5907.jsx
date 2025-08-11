var window = this.window;
var document = this.document;

const types = {
  isInvisibleWidget: false,
  type: "Quill_Rich_Text_Editor",
  icon: "https://quilljs.com/assets/images/logo.svg",
  title: "Quill Rich Text Editor",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: "__width",
      label: "宽度",
      valueType: "number",
      defaultValue: 360,
      blockOptions: {
        generateBlock: false
      }
    },
    {
      key: "__height",
      label: "高度",
      valueType: "number",
      defaultValue: 640,
      blockOptions: {
        generateBlock: false
      }
    },
    {
      key: "__size",
      label: "",
      valueType: "number",
      defaultValue: 0,
      readonly: true,
      blockOptions: {
        setter: {
          keys: ["__height", "__width"]
        },
        getter: {
          keys: ["__height", "__width"]
        }
      }
    }
  ],
  methods: [],
  events: []
};

class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    Object.assign(this, props);
    this.isLoadStyle = false;
    this.isLoadScript = false;
    console.log(this);
    if (typeof this.toolbar == "string") {
      try {
        this.toolbar = JSON.parse(this.toolbar);
      } catch (e) {
        this.toolbar = [
          ["bold", "italic", "underline", "strike"],
          ["blockquote", "code-block"],
          ["link", "image", "video", "formula"],
          [{ header: 1 }, { header: 2 }],
          [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
          [{ script: "sub" }, { script: "super" }],
          [{ indent: "-1" }, { indent: "+1" }],
          [{ direction: "rtl" }],
          [{ size: ["small", false, "large", "huge"] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ color: [] }, { background: [] }],
          [{ font: [] }],
          [{ align: [] }],
          ["clean"]
        ];
        this.widgetError("工具栏配置解析失败，已重置为默认配置");
      }
    }
    loadStyle(
      "https://cdn.jsdelivr.net/npm/quill@2/dist/quill.snow.css",
      () => {
        this.isLoadStyle = true;
        this.init();
      },
      e => {
        this.emit("error", "loadStyleError", e);
      }
    );
    loadScript(
      "https://cdn.jsdelivr.net/npm/quill@2/dist/quill.js",
      () => {
        this.isLoadScript = true;
        this.init();
      },
      e => {
        this.emit("error", "loadScriptError", e);
      }
    );
    setInterval(() => {
      if (this.isLoadStyle && this.isLoadScript) {
        const Widget = document.getElementById(this.__widgetId);
        if (!Widget) {
          return;
        }
        const toolbarElement = Widget.querySelector(`[role="toolbar"]`);
        if (!toolbarElement) {
          return;
        }
        const editorElement = document.getElementById(this.widgetid);
        if (!editorElement) {
          return;
        }
        const toolbarHeight = toolbarElement.offsetHeight;
        const WidgetHieght = Widget.offsetHeight;
        editorElement.style.height = WidgetHieght - toolbarHeight + "px";
      }
    });
  }
  init() {
    if (this.isLoadStyle && this.isLoadScript) {
      const Widget = document.getElementById(this.__widgetId);
      if (!Widget) {
        return;
      }
      console.log(Widget);
      const toolbarElement = Widget.querySelector(`[role="toolbar"]`);
      console.log(toolbarElement);
      if (toolbarElement) {
        return;
      }
      this.quill = new Quill("#" + this.widgetid, {
        theme: this.theme,
        modules: {
          toolbar: this.toolbar
        }
      });
      console.log(this.quill);
      this.quill.on("text-change", () => {
        this.emit("onTextChange");
      });
      this.quill.on("editor-change", () => {
        this.emit("onEditorChange");
      });
      this.emit("load");
    }
  }
  render() {
    return (
      <div
        className="main"
        style={{
          width: this.__width + "px",
          height: this.__height + "px"
        }}
      >
        <div
          id={this.widgetid || "editor"}
          dangerouslySetInnerHTML={{ __html: this.html }}
        />
      </div>
    );
  }
}

types["events"].push({
  key: "load",
  label: "加载完成",
  params: [],
  tooltip: "加载完成"
});

types["events"].push({
  key: "error",
  label: "出现错误",
  params: [
    {
      key: "type",
      label: "类型",
      valueType: "string"
    },
    {
      key: "event",
      label: "错误",
      valueType: "object"
    }
  ],
  tooltip: "错误反馈"
});

types["events"].push({
  key: "onTextChange",
  label: "文本内容改变",
  params: [],
  tooltip: "文本内容改变"
});

types["events"].push({
  key: "onEditorChange",
  label: "编辑器内容改变",
  params: [],
  tooltip: "编辑器内容改变"
});

types["properties"].push({
  key: "widgetid",
  label: "控件ID",
  valueType: "string",
  defaultValue: "editor",
  tooltip: "控件ID"
});

types["properties"].push({
  key: "theme",
  label: "主题",
  valueType: "string",
  defaultValue: "snow",
  dropdown: [
    { label: "snow", value: "snow" },
    { label: "bubble", value: "bubble" }
  ],
  tooltip: "控件ID"
});

types["properties"].push({
  key: "html",
  label: "内容",
  valueType: "string",
  defaultValue: `<p>Hello World!</p>
<p>Some initial <strong>bold</strong> text</p>
<p><br/></p>`,
  tooltip: "HTML\n(此属性仅限于加载完成前设置，加载完成后设置后果自负)"
});

types["properties"].push({
  key: "toolbar",
  label: "工具栏",
  valueType: ["array", "string"],
  defaultValue: `[
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  ['link', 'image', 'video', 'formula'],
  [{ 'header': 1 }, { 'header': 2 }],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],
  [{ 'indent': '-1'}, { 'indent': '+1' }],
  [{ 'direction': 'rtl' }], 
  [{ 'size': ['small', false, 'large', 'huge'] }],
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  [{ 'color': [] }, { 'background': [] }],
  [{ 'font': [] }],
  [{ 'align': [] }],
  ['clean']
]`.replaceAll("'", '"'),
  tooltip:
    "工具栏配置，相关文档：https://quilljs.com/docs/modules/toolbar\n(此属性仅限于加载完成前设置)"
});

types["methods"].push({
  key: "getContents",
  label: "获取内容",
  params: [
    {
      key: "isAll",
      label: "获取全部",
      valueType: "boolean",
      defaultValue: true
    },
    {
      key: "index",
      label: "开始位置",
      valueType: "number",
      defaultValue: 0
    },
    {
      key: "length",
      label: "长度",
      valueType: "number",
      defaultValue: 0
    }
  ],
  valueType: "array",
  tooltip: "获取内容"
});
Widget.prototype.getContents = function(isAll, index) {
  console.log(this.quill.getContents().ops);
  if (isAll) {
    return this.quill.getContents().ops;
  }
  return this.quill.getContents(index < 0 ? 0 : index, length < 0 ? 0 : length)
    .ops;
};

types["methods"].push({
  key: "deleteText",
  label: "删除文本",
  params: [
    {
      key: "index",
      label: "开始位置",
      valueType: "number",
      defaultValue: 0
    },
    {
      key: "length",
      label: "长度",
      valueType: "number",
      defaultValue: 0
    }
  ]
});
Widget.prototype.deleteText = function(index, length) {
  return this.quill.deleteText(index < 0 ? 0 : index, length < 0 ? 0 : length);
};

types["methods"].push({
  key: "getLength",
  label: "获取长度",
  params: [],
  valueType: "number",
  tooltip: "获取长度"
});
Widget.prototype.getLength = function() {
  return this.quill.getLength();
};

types["methods"].push({
  key: "getText",
  label: "获取文本",
  params: [
    {
      key: "index",
      label: "开始位置",
      valueType: "number",
      defaultValue: 0
    },
    {
      key: "length",
      label: "长度",
      valueType: "number",
      defaultValue: 0
    }
  ],
  valueType: "string",
  tooltip: "获取文本"
});
Widget.prototype.getText = function(index, length) {
  return this.quill.getText(index < 0 ? 0 : index, length < 0 ? 0 : length);
};

types["methods"].push({
  key: "getSemanticHTML",
  label: "获取语义HTML",
  params: [
    {
      key: "index",
      label: "开始位置",
      valueType: "number",
      defaultValue: 0
    },
    {
      key: "length",
      label: "长度",
      valueType: "number",
      defaultValue: 0
    }
  ],
  valueType: "string",
  tooltip: "获取语义HTML"
});
Widget.prototype.getSemanticHTML = function(index, length) {
  return this.quill.getSemanticHTML(
    index < 0 ? 0 : index,
    length < 0 ? 0 : length
  );
};

types["methods"].push({
  key: "setContents",
  label: "设置内容",
  params: [
    {
      key: "delta",
      label: "",
      valueType: ["array", "string"],
      defaultValue: `[
  { "insert": 'Hello ' },
  { "insert": 'World!', "attributes": { "bold": true } },
  { "insert": '\n' }
]`.replaceAll("'", '"')
    }
  ],
  tooltip: "设置内容"
});
Widget.prototype.setContents = function(_delta) {
  if (typeof _delta === "string") {
    try {
      const delta = JSON.parse(_delta);
      this.quill.setContents(delta);
      return;
    } catch (error) {
      this.emit("error", "JSONParseError", { from: "setContents", error });
      this.widgetError("解析JSON失败");
      return;
    }
  }
  this.quill.setContents(_delta);
};

types["methods"].push({
  key: "setText",
  label: "设置文本",
  params: [
    {
      key: "text",
      label: "",
      valueType: "string",
      defaultValue: "Hello\n"
    }
  ],
  tooltip: "设置文本"
});
Widget.prototype.setText = function(text) {
  this.quill.setText(text);
};

exports.types = types;
exports.widget = Widget;

function loadStyle(url, resolve, reject) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = url;
  link.onload = resolve;
  link.onerror = reject;
  document.head.appendChild(link);
}
function loadScript(url, resolve, reject) {
  const script = document.createElement("script");
  script.src = url;
  script.onload = resolve;
  script.onerror = reject;
  document.head.appendChild(script);
}
