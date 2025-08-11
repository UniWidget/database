const types = {
  isInvisibleWidget: true,
  type: "COHOOKER_NETWORKINTERFACE_WIDGET",
  icon: "icon-toolbox-feature",
  title: "获取网络信息#CH",
  version: "1.0.0",
  isGlobalWidget: true,
  properties: [],
  methods: [],
  events: [],
};
types.platforms = ["android"];
const gWindow = new Function("return window")();
types["methods"].push({
  key: "getInfo",
  label: "获取",
  params: [
    {
      key: "ipType",
      label: "",
      valueType: "string",
      dropdown: [
        { label: "默认", value: "" },

        { label: "WiFi", value: "WiFi" },

        { label: "Carrier", value: "Carrier" },
      ],
    },

    {
      key: "infoType",
      label: "",
      valueType: "string",
      dropdown: [
        { label: "IP地址", value: "ip" },
        { label: "子网掩码", value: "subnet" },
      ],
    },
  ],
  valueType:'string'
});
function getInfo(ipType, infoType) {
  return new Promise((resolve, reject) => {
    gWindow.networkinterface["get" + ipType + "IPAddress"](
      (e) => resolve(e[infoType]),
      (e) => resolve("")
    );
  });
}

class Widget extends InvisibleWidget {
  constructor(props) {
    super(props);
  }
}
Widget.prototype.getInfo = async function (ipType, infoType) {
    return await getInfo(ipType, infoType);
  };
exports.types = types;
exports.widget = Widget;
