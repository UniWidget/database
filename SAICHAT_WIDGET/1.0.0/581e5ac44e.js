const axios = require("axios");
var CryptoJS = require("crypto-js");

const types = {
  isInvisibleWidget: true,
  type: "SAICHAT_WIDGET",
  icon: "https://creation.bcmcdn.com/716/appcraft/IMAGE_9VwTy8Brv_1724648676741.png",
  title: "SAI_CHAT",
  version: "1.0.0",
  isGlobalWidget: true,
  properties: [],
  methods: [],
  events: [],
};

class Widget extends InvisibleWidget {
  constructor(props) {
    super(props);
  }
}
types.docs = { url: "https://www.yuque.com/liushiancoludai/oei1as" };

types["methods"].push({
  key: "chat",
  label: "chat",
  params: [
    {
      key: "prompt",
      label: "prompt",
      valueType: "string",
      defaultValue: "",
    },
    {
      key: "ca",
      label: "ca",
      valueType: "string",
      defaultValue: "",
    },
  ],
});
function genToken(reqText) {
  // 获取日期
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${(
    currentDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${currentDate.getDate().toString().padStart(2, "0")}`;
  const dateMd5 = CryptoJS.MD5(formattedDate).toString().substring(0, 6);
  const token = CryptoJS.MD5(reqText + dateMd5).toString();
  return token;
}
types["events"].push({
  key: "onChat",
  label: "得到回复",
  params: [
    {
      key: "output",
      label: "output",
      valueType: "string",
      defaultValue: "",
    },
  ],
});

types["events"].push({
  key: "onChatErr",
  label: "当chat错误",
  params: [
    {
      key: "err",
      label: "err",
      valueType: ["string", "number", "boolean", "color", "array", "object"],
      defaultValue: "",
    },
  ],
});
Widget.prototype.chat = function (prompt, ca) {
  axios("https://ai.coludai.cn/api/coco/chat", {
    method: "post",
    headers: {
      ca: ca,
    },
    data: {
      prompt: prompt,
      token: genToken(prompt),
      stream: false,
    },
  })
    .then((res) => {
      this.emit("onChat", res.data.output);
    })
    .catch((err) => {
      console.error(err);
      this.emit("onChatErr", err);
    });
};
exports.types = types;
exports.widget = Widget;
