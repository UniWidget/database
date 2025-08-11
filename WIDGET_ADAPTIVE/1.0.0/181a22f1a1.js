//WidgetDev+目前正在制作中！
var document = this.document;

console.log("欢迎使用自适应辅助");
console.log("作者：MathCalculus");
console.log("QQ：2504556268");

const types = {
  type: "WIDGET_ADAPTIVE", // 控件类型
  title: "自适应辅助", // 控件标题
  icon: "https://ocean.codemao.cn/appcraft/resource/icon/基础/分类.svg", // 控件图标
  isInvisibleWidget: true, // 是否为不可见控件
  isGlobalWidget: true, // 是否为全局控件
  version:"1.0.0",
  properties: [],
  methods: [
    // 控件方法列表
    {
      key: "init",
      label: "初始化要自适应的控件(在设置距离时使用)",
      params: [
        {
          key: "_id",
          label: "控件id(可通过f12查看)",
          valueType: "string",
          defaultValue: "",
        },
      ],
      tooltip: "初始化要自适应的控件",
    },
    {
      key: "set_px",
      label: "设置控件",
      params: [
        {
          key: "_id",
          label: "控件id(可通过f12查看)",
          valueType: "string",
          defaultValue: "",
        },
        {
          key: "_type",
          label: "离方向",
          valueType: "string",
          dropdown: [
            { label: "上", value: "top" },
            { label: "下", value: "bottom" },
            { label: "左", value: "left" },
            { label: "右", value: "right" },
          ],
        },
        {
          key: "_px",
          label: "的距离(像素)",
          valueType: "number",
          defaultValue: 100,
        },
      ],
      tooltip: "设置控件离各个边的距离",
    },
    {
      key: "set_percent",
      label: "设置控件",
      params: [
        {
          key: "_id",
          label: "控件id(可通过f12查看)",
          valueType: "string",
          defaultValue: "",
        },
        {
          key: "_type",
          label: "离方向",
          valueType: "string",
          dropdown: [
            { label: "上", value: "top" },
            { label: "下", value: "bottom" },
            { label: "左", value: "left" },
            { label: "右", value: "right" },
          ],
        },
        {
          key: "_percent",
          label: "的距离(父元素百分比)",
          valueType: "number",
          defaultValue: 10,
        },
      ],
      tooltip: "设置控件离各个边的距离",
    },
    {
      key: "set_height_add",
      label: "设置",
      params: [
        {
          key: "_id",
          label: "控件id(可通过f12查看)",
          valueType: "string",
          defaultValue: "",
        },
        {
          key: "_add",
          label: "的高为屏幕的高加",
          valueType: "number",
          defaultValue: 100,
        },
        {
          key: "_type",
          label: "单位",
          valueType: "string",
          dropdown: [
            { label: "像素", value: "px" },
            { label: "父元素百分比", value: "%" },
            { label: "屏幕高", value: "vh" },
            { label: "屏幕宽", value: "vw" },
          ],
        },
      ],
    },
    {
      key: "set_width_add",
      label: "设置",
      params: [
        {
          key: "_id",
          label: "控件id(可通过f12查看)",
          valueType: "string",
          defaultValue: "",
        },
        {
          key: "_add",
          label: "的宽为屏幕的宽加",
          valueType: "number",
          defaultValue: 100,
        },
        {
          key: "_type",
          label: "单位",
          valueType: "string",
          dropdown: [
            { label: "像素", value: "px" },
            { label: "父元素百分比", value: "%" },
            { label: "屏幕高", value: "vh" },
            { label: "屏幕宽", value: "vw" },
          ],
        },
      ],
    },
    {
      key: "set_height_mul",
      label: "设置",
      params: [
        {
          key: "_id",
          label: "控件id(可通过f12查看)",
          valueType: "string",
          defaultValue: "",
        },
        {
          key: "_add",
          label: "的高为屏幕的高乘",
          valueType: "number",
          defaultValue: 0.5,
        },
      ],
    },
    {
      key: "set_width_mul",
      label: "设置",
      params: [
        {
          key: "_id",
          label: "控件id(可通过f12查看)",
          valueType: "string",
          defaultValue: "",
        },
        {
          key: "_add",
          label: "的宽为屏幕的宽乘",
          valueType: "number",
          defaultValue: 0.5,
        },
      ],
    },
    {
      key: "set_height_muladd",
      label: "设置",
      params: [
        {
          key: "_id",
          label: "控件id(可通过f12查看)",
          valueType: "string",
          defaultValue: "",
        },
        {
          key: "_mul",
          label: "的高为屏幕的高乘",
          valueType: "number",
          defaultValue: 0.5,
        },
        {
          key: "_add",
          label: "加",
          valueType: "number",
          defaultValue: 100,
        },
        {
          key: "_type",
          label: "单位",
          valueType: "string",
          dropdown: [
            { label: "像素", value: "px" },
            { label: "父元素百分比", value: "%" },
            { label: "屏幕高", value: "vh" },
            { label: "屏幕宽", value: "vw" },
          ],
        },
      ],
    },
    {
      key: "set_width_muladd",
      label: "设置",
      params: [
        {
          key: "_id",
          label: "控件id(可通过f12查看)",
          valueType: "string",
          defaultValue: "",
        },
        {
          key: "_mul",
          label: "的宽为屏幕的宽乘",
          valueType: "number",
          defaultValue: 0.5,
        },
        {
          key: "_add",
          label: "加",
          valueType: "number",
          defaultValue: 100,
        },
        {
          key: "_type",
          label: "单位",
          valueType: "string",
          dropdown: [
            { label: "像素", value: "px" },
            { label: "父元素百分比", value: "%" },
            { label: "屏幕高", value: "vh" },
            { label: "屏幕宽", value: "vw" },
          ],
        },
      ],
    },
  ],
  events: [],
};
class Widget extends InvisibleWidget {
  constructor(props) {
    super(props);
    this.widgetLog("欢迎使用自适应辅助");
    this.widgetLog("作者：MathCalculus");
    this.widgetLog("QQ：2504556268");
  }

  init = (_id) => {
    if (document.getElementById(_id)) {
      document.getElementById(_id).style.top = "auto";
      document.getElementById(_id).style.right = "auto";
      document.getElementById(_id).style.left = "auto";
      document.getElementById(_id).style.bottom = "auto";
    } else {
      this.widgetError(`ID为${_id}的控件不存在`);
    }
  };

  set_px = (_id, _type, _px) => {
    if (document.getElementById(_id)) {
      document.getElementById(_id).style[_type] = `${_px}px`;
    } else {
      this.widgetError(`ID为${_id}的控件不存在`);
    }
  };

  set_percent = (_id, _type, _percent) => {
    if (document.getElementById(_id)) {
      document.getElementById(_id).style[_type] = `${_percent}%`;
    } else {
      this.widgetError(`ID为${_id}的控件不存在`);
    }
  };

  set_height_add = (_id, _add, _type) => {
    if (document.getElementById(_id)) {
      document.getElementById(
        _id
      ).style.height = `calc(100vh + ${_add}${_type})`;
    } else {
      this.widgetError(`ID为${_id}的控件不存在`);
    }
  };

  set_width_add = (_id, _add, _type) => {
    if (document.getElementById(_id)) {
      document.getElementById(
        _id
      ).style.width = `calc(100vw + ${_add}${_type})`;
    } else {
      this.widgetError(`ID为${_id}的控件不存在`);
    }
  };

  set_height_mul = (_id, _add) => {
    if (document.getElementById(_id)) {
      document.getElementById(_id).style.height = `calc(100vh * ${_add})`;
    } else {
      this.widgetError(`ID为${_id}的控件不存在`);
    }
  };

  set_width_mul = (_id, _add) => {
    if (document.getElementById(_id)) {
      document.getElementById(_id).style.width = `calc(100vw * ${_add})`;
    } else {
      this.widgetError(`ID为${_id}的控件不存在`);
    }
  };

  set_height_muladd = (_id, _mul, _add, _type) => {
    if (document.getElementById(_id)) {
      document.getElementById(
        _id
      ).style.height = `calc(100vw * ${_mul} + ${_add}${_type})`;
    } else {
      this.widgetError(`ID为${_id}的控件不存在`);
    }
  };

  set_width_muladd = (_id, _mul, _add, _type) => {
    if (document.getElementById(_id)) {
      document.getElementById(
        _id
      ).style.width = `calc(100vw * ${_mul} + ${_add}${_type})`;
    } else {
      this.widgetError(`ID为${_id}的控件不存在`);
    }
  };
}
exports.types = types;
exports.widget = Widget;
