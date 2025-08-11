var document = this.document;
var window = this.window;
const antd = require("antd-mobile");
const types = {
  type: "XJ_MI_FORUM_LIST_WIDGET",
  icon: "https://static.codemao.cn/appcraft/extension-widgets/production/mi-xj-forum.png",
  title: "论坛框-小米",
  version: "1.0.0",
  author: "XJ王大哥(2357942846)",
  docs: {
    url: "https://xjwangdage.feishu.cn/wiki/GH69w1MSLiVCetkBZQNcJypxnmg?from=from_copylink",
  },
  isInvisibleWidget: false,
  isGlobalWidget: false,
  properties: [
    {
      key: "background",
      label: "背景颜色",
      valueType: "color",
      defaultValue: "transparent",
    },
    {
      key: "card",
      label: "卡片样式",
      valueType: "boolean",
      defaultValue: false,
    },
    {
      key: "imgWarp",
      label: "图片换行展示",
      valueType: "boolean",
      defaultValue: false,
    },
    {
      key: "imgHeight",
      label: "图片尺寸",
      valueType: "number",
      defaultValue: 115,
    },
    {
      key: "richText",
      label: "默认富文本",
      valueType: "boolean",
      defaultValue: false,
    },
    {
      key: "skeleton",
      label: "空时显示骨架屏",
      valueType: "boolean",
      defaultValue: false,
    },
    {
      key: "debug",
      label: "调试器",
      valueType: "boolean",
      defaultValue: false,
    },
  ],
  methods: [],
  events: [
    {
      key: "error",
      label: "出错",
      params: [{ key: "error", label: "信息", valueType: "string" }],
    },
  ],
};
class Widget extends VisibleWidget {
  constructor(p) {
    super(p);
    Object.assign(this, p);
    if (this.debug) window["d" + this.__widgetId.replace("-", "_")] = this;
    else delete window["d" + this.__widgetId.replace("-", "_")];
  }
  concat = (d) => {
    this.setProps({ data: this.data.concat(d) });
  };
  push = (d) => {
    this.data.push(d);
    this.setProps({ data: this.data });
  };
  splice = (s, d) => {
    this.data.splice(s, 0, d);
    this.setProps({ data: this.data });
  };
  pop = () => {
    this.data.pop();
    this.setProps({ data: this.data });
  };
  remove = (s) => {
    this.data.splice(s - 1, 1);
    this.setProps({ data: this.data });
  };
  replace = (s, d) => {
    this.data.splice(s - 1, 1, d);
    this.setProps({ data: this.data });
  };
  replaceKey = (s, k, v) => {
    this.data[s - 1][k] = v;
    this.setProps({ data: this.data });
  };
  empty = () => {
    this.setProps({ data: [] });
  };
  inquire = (s) => {
    return this.data[s - 1];
  };
  inquireKey = (s, k) => {
    return this.data[s - 1][k];
  };
  length = () => {
    return this.data.length;
  };
  scrollTo = (s) =>
    this.lightBluePE.scrollTo({ top: this.lightBlueCE[s - 1].offsetTop });
  scrollToStart = () => (this.lightBluePE.scrollTop = 0);
  scrollToEnd = () =>
    (this.lightBluePE.scrollTop = this.lightBluePE.scrollHeight);
  scrollTopNear = () => {
    let st = this.lightBluePE.scrollTop;
    let index = 0;
    for (let i of this.lightBlueCE) {
      index++;
      if (i.offsetTop >= st) break;
    }
    return index;
  };
  scrollBottomNear = () => {
    let st = this.lightBluePE.scrollTop + this.lightBluePE.clientHeight;
    let index = 0;
    for (let i of this.lightBlueCE) {
      index++;
      if (i.offsetTop + i.offsetHeight >= st) break;
    }
    return index;
  };
  trigger = (e, l, n) => {
    this.emit(`${e}被点击`, l + 1, n + 1);
  };
  被点击 = (l) => this.emit("被点击", l + 1);
  render() {
    if (typeof this.data !== "object")
      try {
        this.data = JSON.parse(this.data);
      } catch (e) {
        this.data = [];
      }
    try {
      return (
        <>
          <div class="MI_XJ_FORUM_LIST">
            {this.data.length || !this.skeleton ? (
              this.data?.map((item, index) => (
                <div class="item" onClick={this.被点击.bind(this, index)}>
                  <div>
                    <img
                      src={item.头像}
                      onClick={this.trigger.bind(this, "头像", index)}
                    />
                    <span
                      class="name"
                      onClick={this.trigger.bind(this, "昵称", index)}
                    >
                      {item.昵称}
                    </span>
                    {item.头衔 ? (
                      <antd.Tag color={item.头衔色} fill={item.头衔填充}>
                        {item.头衔}
                      </antd.Tag>
                    ) : (
                      ""
                    )}
                  </div>
                  <div>
                    <span onClick={this.trigger.bind(this, "文本", index)}>
                      {item.类型 === "纯" ? (
                        item.文本
                      ) : this.richText || item.类型 === "富" ? (
                        <div dangerouslySetInnerHTML={{ __html: item.文本 }} />
                      ) : (
                        item.文本
                      )}
                    </span>
                  </div>
                  <div>
                    {item.图片?.map((imgItem, imgIndex) => (
                      <img
                        onClick={this.trigger.bind(
                          this,
                          "图片",
                          index,
                          imgIndex
                        )}
                        οnErrοr="this.style.display='none'"
                        src={imgItem}
                      />
                    ))}
                  </div>
                  <div>
                    <span onClick={this.trigger.bind(this, "时间", index)}>
                      {item.时间}
                    </span>
                    <div>
                      {item.点赞 ? (
                        <svg
                          onClick={this.trigger.bind(this, "点赞", index)}
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <mask id="path-1-inside-1_1361_10748" fill="white">
                            <path d="M25.6086 23.3623L27.5689 14.1942C27.977 12.2858 26.522 10.4868 24.5705 10.4868H18.2301L19.1709 8.67908C19.8484 7.27087 19.375 5.28444 17.7597 4.44505C16.1444 3.60565 14.4989 4.01163 13.6596 5.17693L11.2119 8.57544C10.3475 9.77556 8.95873 10.4868 7.47973 10.4868H6.76656C6.3432 10.4868 6 10.83 6 11.2534V26.2334C6 26.6568 6.3432 27 6.76656 27H21.1109C23.2805 27 25.155 25.4839 25.6086 23.3623Z" />
                          </mask>
                          <path
                            d="M27.5689 14.1942L25.6131 13.776L25.6131 13.776L27.5689 14.1942ZM25.6086 23.3623L23.6529 22.9441L23.6529 22.9441L25.6086 23.3623ZM19.1709 8.67908L20.945 9.60237L20.9595 9.57447L20.9732 9.54613L19.1709 8.67908ZM18.2301 10.4868L16.456 9.5635L14.9346 12.4868H18.2301V10.4868ZM13.6596 5.17693L12.0367 4.00806L12.0367 4.00806L13.6596 5.17693ZM11.2119 8.57544L12.8348 9.7443L12.8348 9.7443L11.2119 8.57544ZM17.7597 4.44505L18.6819 2.67036L18.6819 2.67036L17.7597 4.44505ZM25.6131 13.776L23.6529 22.9441L27.5644 23.7805L29.5247 14.6124L25.6131 13.776ZM21.1109 25H6.76656V29H21.1109V25ZM8 26.2334V11.2534H4V26.2334H8ZM17.3968 7.75578L16.456 9.5635L20.0042 11.4101L20.945 9.60237L17.3968 7.75578ZM18.2301 12.4868H24.5705V8.4868H18.2301V12.4868ZM12.0367 4.00806L9.58898 7.40657L12.8348 9.7443L15.2825 6.34579L12.0367 4.00806ZM7.47973 8.4868H6.76656V12.4868H7.47973V8.4868ZM9.58898 7.40657C9.10047 8.08484 8.3156 8.4868 7.47973 8.4868V12.4868C9.60186 12.4868 11.5945 11.4663 12.8348 9.7443L9.58898 7.40657ZM16.8375 6.21973C17.4049 6.51459 17.6224 7.28451 17.3686 7.81202L20.9732 9.54613C22.0743 7.25723 21.3451 4.05429 18.6819 2.67036L16.8375 6.21973ZM18.6819 2.67036C16.3075 1.4365 13.5332 1.93024 12.0367 4.00806L15.2825 6.34579C15.3967 6.18721 15.5702 6.06806 15.8072 6.02112C16.0433 5.97435 16.3985 5.9916 16.8375 6.21973L18.6819 2.67036ZM6.76656 25C7.44778 25 8 25.5522 8 26.2334H4C4 27.7614 5.23863 29 6.76656 29V25ZM23.6529 22.9441C23.3965 24.1432 22.3371 25 21.1109 25V29C24.2239 29 26.9135 26.8246 27.5644 23.7805L23.6529 22.9441ZM29.5247 14.6124C30.1989 11.4591 27.7949 8.4868 24.5705 8.4868V12.4868C25.2491 12.4868 25.755 13.1124 25.6131 13.776L29.5247 14.6124ZM8 11.2534C8 11.9346 7.44778 12.4868 6.76656 12.4868V8.4868C5.23863 8.4868 4 9.72544 4 11.2534H8Z"
                            fill={"点赞色" in item ? item.点赞色 : "#0E151C"}
                            fill-opacity="0.4"
                            mask="url(#path-1-inside-1_1361_10748)"
                          />
                        </svg>
                      ) : (
                        ""
                      )}
                      <span>{item.点赞}</span>
                      {item.评论 ? (
                        <svg
                          onClick={this.trigger.bind(this, "评论", index)}
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <mask id="path-1-inside-1_1361_10272" fill="white">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 18.1034 4.54117 20.0804 5.49187 21.7993C5.55246 21.9089 5.57969 22.034 5.56724 22.1586L5.2138 25.6929C5.15093 26.3216 5.67964 26.8503 6.30834 26.7875L9.84356 26.434C9.96809 26.4215 10.0932 26.4487 10.2027 26.5093C11.9212 27.4593 13.8974 28 16 28Z"
                            />
                          </mask>
                          <path
                            d="M5.2138 25.6929L3.22373 25.4939L3.22373 25.4939L5.2138 25.6929ZM6.30834 26.7875L6.50735 28.7776L6.50735 28.7775L6.30834 26.7875ZM9.84356 26.434L9.64455 24.4439L9.84356 26.434ZM10.2027 26.5093L11.1703 24.7589L10.2027 26.5093ZM5.49187 21.7993L3.74172 22.7673L5.49187 21.7993ZM5.56724 22.1586L3.57716 21.9596L5.56724 22.1586ZM26 16C26 21.5228 21.5228 26 16 26V30C23.732 30 30 23.732 30 16H26ZM16 6C21.5228 6 26 10.4772 26 16H30C30 8.26801 23.732 2 16 2V6ZM6 16C6 10.4772 10.4772 6 16 6V2C8.26801 2 2 8.26801 2 16H6ZM7.24203 20.8314C6.45102 19.4012 6 17.7563 6 16H2C2 18.4505 2.63132 20.7596 3.74172 22.7673L7.24203 20.8314ZM7.20388 25.8919L7.55731 22.3576L3.57716 21.9596L3.22373 25.4939L7.20388 25.8919ZM6.10934 24.7974C6.73804 24.7345 7.26675 25.2632 7.20388 25.8919L3.22373 25.4939C3.03512 27.38 4.62124 28.9662 6.50735 28.7776L6.10934 24.7974ZM9.64455 24.4439L6.10934 24.7974L6.50735 28.7775L10.0426 28.424L9.64455 24.4439ZM16 26C14.2444 26 12.6001 25.5493 11.1703 24.7589L9.23509 28.2596C11.2422 29.3692 13.5504 30 16 30V26ZM10.0426 28.424C9.74651 28.4536 9.46637 28.3875 9.23509 28.2596L11.1703 24.7589C10.72 24.51 10.1897 24.3894 9.64455 24.4439L10.0426 28.424ZM3.74172 22.7673C3.61377 22.536 3.54755 22.2557 3.57716 21.9596L7.55731 22.3576C7.61184 21.8123 7.49116 21.2818 7.24203 20.8314L3.74172 22.7673Z"
                            fill={"评论色" in item ? item.评论色 : "#0E151C"}
                            fill-opacity="0.4"
                            mask="url(#path-1-inside-1_1361_10272)"
                          />
                        </svg>
                      ) : (
                        ""
                      )}
                      <span>{item.评论}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <>
                <antd.Skeleton.Title
                  animated
                  style={{ "margin-left": "10px", "margin-right": "10px" }}
                />
                <antd.Skeleton.Paragraph
                  lineCount={5}
                  animated
                  style={{ "margin-left": "10px", "margin-right": "10px" }}
                />
              </>
            )}
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: `<style>.MI_XJ_FORUM_LIST{overflow-y:auto;scroll-behavior:smooth;display:flex;flex-direction:column;height:100%;background:${
                this.background
              }}.MI_XJ_FORUM_LIST::-webkit-scrollbar{display:none}.MI_XJ_FORUM_LIST>.item{display:flex;flex-direction:column;align-items:flex-start;align-content:flex-start;padding:15px 10px 0;${
                this.card
                  ? `border-radius:10px;padding:10px;margin:10px 10px 0;background:#ccc;`
                  : ""
              }}.MI_XJ_FORUM_LIST>.item:last-child{padding-bottom:15px;${
                this.card ? `margin-bottom:10px;` : ""
              }}.MI_XJ_FORUM_LIST>.item>div{display:flex;align-items:center}.MI_XJ_FORUM_LIST>.item>div:nth-child(1){margin-bottom:5px}.MI_XJ_FORUM_LIST>.item>div:nth-child(1)>img{align-items:center;height:18px;width:18px;border-radius:100%}.MI_XJ_FORUM_LIST>.item>div:nth-child(1)>.name{align-items:center;margin-left:5px;font-size:14px;color:rgb(14,21,28)}.MI_XJ_FORUM_LIST>.item>div:nth-child(1)>.adm-tag{transform:scale(0.8)}.MI_XJ_FORUM_LIST>.item>div:nth-child(2){margin-bottom:5px}.MI_XJ_FORUM_LIST>.item>div:nth-child(2)>span{line-height:normal;text-size-adjust:100%;color:rgb(14,21,28);word-break:break-all;white-space:pre-wrap}.MI_XJ_FORUM_LIST>.item>div:nth-child(3){${
                this.imgWarp ? "flex-wrap: wrap;" : ""
              }flex-shrink:0;overflow:auto;width:100%}.MI_XJ_FORUM_LIST>.item>div:nth-child(3)>img{height:${
                this.imgHeight
              }px;border-radius:6px;margin-right:.25rem;margin-bottom:.25rem}.MI_XJ_FORUM_LIST>.item>div:nth-child(4){color:rgba(14,21,28,0.4);font-size:.75rem;width:100%;margin-top:16px}.MI_XJ_FORUM_LIST>.item>div:nth-child(4)>div{display:flex;justify-content:flex-end;margin-left:auto;align-items:center}.MI_XJ_FORUM_LIST>.item>div:nth-child(4)>div>svg{width:20px}.MI_XJ_FORUM_LIST>.item>div:nth-child(4)>div>span{margin-left:4px}.MI_XJ_FORUM_LIST>.item>div:nth-child(4)>div>span:nth-child(2){margin-right:20px}</style>`,
            }}
          />
        </>
      );
    } catch (e) {
      this.emit("error", e);
    } finally {
      this.lightBluePE = document.querySelector(
        `#${this.__widgetId}>.MI_XJ_FORUM_LIST`
      );
      this.lightBlueCE = document.querySelectorAll(
        `#${this.__widgetId}>.MI_XJ_FORUM_LIST>div`
      );
    }
  }
}
for (let i of ["", "头像", "昵称", "文本", "图片", "时间", "点赞", "评论"]) {
  types.events.push({
    key: `${i}被点击`,
    label: `${i}被点击`,
    params:
      i === "图片"
        ? [
            { key: "number", label: "行", valueType: "number" },
            { key: "imgNumber", label: "图片序号", valueType: "number" },
          ]
        : [{ key: "number", label: "行", valueType: "number" }],
  });
}
let lightBlue生成 = {
  帖子: [
    { key: "头像", label: "头像", valueType: "string", defaultValue: "" },
    { key: "昵称", label: "昵称", valueType: "string", defaultValue: "" },
    {
      key: "类型",
      label: "类型",
      valueType: "string",
      dropdown: [
        { label: "纯文本", value: "纯" },
        { label: "富文本", value: "富" },
      ],
    },
    { key: "文本", label: "文本", valueType: "string", defaultValue: "" },
    {
      key: "图片",
      label: "图片(列表)",
      valueType: ["string", "number", "boolean", "array", "color", "object"],
      defaultValue: "",
    },
    { key: "时间", label: "时间", valueType: "string", defaultValue: "" },
    {
      key: "点赞",
      label: "点赞",
      valueType: ["number", "string"],
      defaultValue: "",
    },
    {
      key: "评论",
      label: "评论",
      valueType: ["number", "string"],
      defaultValue: "",
    },
    {
      key: "点赞色",
      label: "点赞色",
      valueType: "color",
      defaultValue: "#0E151C",
    },
    {
      key: "评论色",
      label: "评论色",
      valueType: "color",
      defaultValue: "#0E151C",
    },
    { key: "头衔", label: "头衔", valueType: "string", defaultValue: "" },
    { key: "头衔色", label: "头衔色", valueType: "string", defaultValue: "" },
    {
      key: "头衔填充",
      label: "头衔填充",
      valueType: "string",
      dropdown: [
        { label: "填充", value: "solid" },
        { label: "边框", value: "outline" },
      ],
    },
  ],
};
types.properties.unshift({
  key: "data",
  label: "数据",
  valueType: ["string", "array"],
  defaultValue: [],
});
types.methods.push(
  ...[
    {
      key: "concat",
      label: "添加",
      params: [
        {
          key: "data",
          label: "列表",
          valueType: [
            "string",
            "number",
            "boolean",
            "array",
            "color",
            "object",
          ],
          defaultValue: "",
        },
      ],
      blockOptions: { callMethodLabel: false, line: "写入" },
    },
    {
      key: "push",
      label: "添加",
      params: [
        {
          key: "data",
          label: "单行",
          valueType: [
            "string",
            "number",
            "boolean",
            "array",
            "color",
            "object",
          ],
          defaultValue: "",
        },
      ],
      blockOptions: { callMethodLabel: false },
    },
    {
      key: "splice",
      label: "插入",
      params: [
        {
          key: "start",
          label: "第",
          labelAfter: "行后",
          valueType: "number",
          defaultValue: 0,
        },
        {
          key: "data",
          label: "",
          valueType: [
            "string",
            "number",
            "boolean",
            "array",
            "color",
            "object",
          ],
          defaultValue: "",
        },
      ],
      blockOptions: { callMethodLabel: false },
    },
    {
      key: "pop",
      label: "删除末尾行",
      params: [],
      blockOptions: { callMethodLabel: false },
    },
    {
      key: "remove",
      label: "删除",
      params: [
        {
          key: "start",
          label: "第",
          labelAfter: "行",
          valueType: "number",
          defaultValue: 0,
        },
      ],
      blockOptions: { callMethodLabel: false },
    },
    {
      key: "replace",
      label: "替换",
      params: [
        {
          key: "start",
          label: "第",
          labelAfter: "行为",
          valueType: "number",
          defaultValue: 0,
        },
        {
          key: "data",
          label: "",
          valueType: [
            "string",
            "number",
            "boolean",
            "array",
            "color",
            "object",
          ],
          defaultValue: "",
        },
      ],
      blockOptions: { callMethodLabel: false },
    },
    {
      key: "replaceKey",
      label: "替换",
      params: [
        {
          key: "start",
          label: "第",
          labelAfter: "行",
          valueType: "number",
          defaultValue: 0,
        },
        {
          key: "key",
          label: "键",
          labelAfter: "为",
          valueType: [
            "string",
            "number",
            "boolean",
            "array",
            "color",
            "object",
          ],
          defaultValue: "",
        },
        {
          key: "value",
          label: "",
          valueType: [
            "string",
            "number",
            "boolean",
            "array",
            "color",
            "object",
          ],
          defaultValue: "",
        },
      ],
      blockOptions: { callMethodLabel: false },
    },
    {
      key: "empty",
      label: "清空",
      params: [],
      blockOptions: { callMethodLabel: false },
    },
    {
      key: "inquire",
      params: [
        {
          key: "start",
          label: "第",
          labelAfter: "行的值",
          valueType: "number",
          defaultValue: 0,
        },
      ],
      valueType: ["string", "number", "boolean", "array", "color", "object"],
      blockOptions: { callMethodLabel: false, line: "读取" },
    },
    {
      key: "inquireKey",
      params: [
        {
          key: "start",
          label: "第",
          labelAfter: "行",
          valueType: "number",
          defaultValue: 0,
        },
        {
          key: "key",
          label: "键",
          labelAfter: "的值",
          valueType: [
            "string",
            "number",
            "boolean",
            "array",
            "color",
            "object",
          ],
          defaultValue: "",
        },
      ],
      valueType: ["string", "number", "boolean", "array", "color", "object"],
      blockOptions: { callMethodLabel: false },
    },
    {
      key: "length",
      label: "行数",
      params: [],
      valueType: "number",
      blockOptions: { callMethodLabel: false },
    },
    {
      key: "scrollTo",
      label: "滚动至",
      params: [
        {
          key: "start",
          label: "第",
          labelAfter: "行",
          valueType: "number",
          defaultValue: 0,
        },
      ],
      blockOptions: {
        color: "rgba(0, 175, 195, 1)",
        callMethodLabel: false,
        line: "滚动",
      },
    },
    {
      key: "scrollToStart",
      label: "滚动至顶端",
      params: [],
      blockOptions: { color: "rgba(0, 175, 195, 1)", callMethodLabel: false },
    },
    {
      key: "scrollToEnd",
      label: "滚动至底端",
      params: [],
      blockOptions: { color: "rgba(0, 175, 195, 1)", callMethodLabel: false },
    },
    {
      key: "scrollTopNear",
      label: "可见区域顶端行",
      valueType: "number",
      params: [],
      blockOptions: { color: "rgba(0, 175, 195, 1)", callMethodLabel: false },
    },
    {
      key: "scrollBottomNear",
      label: "可见区域底端行",
      valueType: "number",
      params: [],
      blockOptions: { color: "rgba(0, 175, 195, 1)", callMethodLabel: false },
    },
  ]
);
if (lightBlue生成) {
  let ind = 0;
  for (let i in lightBlue生成) {
    ind++;
    types.methods.push({
      key: `快速${i}`,
      label: `快速${i}`,
      valueType: ["string", "number", "boolean", "array", "color", "object"],
      params: lightBlue生成[i],
      blockOptions: { color: "rgb(249, 204, 55)", callMethodLabel: false },
    });
    Widget.prototype[`快速${i}`] = (...a) => {
      let LBdata = {};
      lightBlue生成[i].map((item, index) => (LBdata[item.key] = a[index]));
      return LBdata;
    };
    if (ind === 1)
      types.methods[types.methods.length - 1].blockOptions.line = "快速生成";
  }
}
exports.types = types;
exports.widget = Widget;
