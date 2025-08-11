var document = this.document;
var window = this.window;
var navigator = this.navigator;
var history = this.history;
const types = {
  isInvisibleWidget: true,
  type: "FAKE_SCREEN_TRANSITION_WIDGET",
  icon: "#toolbox-feature",
  title: "虚假屏幕过渡",
  version: "1.0.0",
  isGlobalWidget: true,
  properties: [],
  methods: [],
  events: [],
};
const html2canvas = require('html2canvas');
class Widget extends InvisibleWidget {
  constructor(props) {
    super(props);
  }
}

types["methods"].push({
  key: "transition",
  label: "切换屏幕过渡",
  params: [
    {
      key: "mode",
      label: "过渡方式",
      valueType: "string",
      dropdown: [{ label: "淡出", value: "淡出" }],
    },
  ],
});
async function getImage() {
  const canvas = await html2canvas(
    document.querySelector("#rootPlayer .screen-view"),
    {
      scale: 1,
      allowTaint: true,
      useCORS: true,
      logging: false,
      // clone dom 不会改变原有dom
      onclone: function (documentClone) {
        const webPlayer = documentClone.querySelector("#webPlayer");
        if (webPlayer) {
          webPlayer.style.transform = "none";
        }
      },
      scale: 4, //按比例增加分辨率 (2=双倍).  
      dpi: window.devicePixelRatio * 4, //设备像素比
    }
  );
  return canvas.toDataURL();
}
Widget.prototype.transition = async function (mode) {
    const node = document.createElement('img');
    node.id = 'ppppppp';
    node.style.height = '100%';
    node.style.width = '100%';
    node.style.transition = 'opacity 0.5s';
    node.src = await getImage();
    document.querySelector('#cocoScreenMask').style.opacity=1;
    document.querySelector('#cocoScreenMask').style.backgroundColor='#0000';
    document.querySelector('#cocoScreenMask').appendChild(node);
    
    setTimeout(()=>{
        document.querySelector('#ppppppp').style.opacity=0;
    },20);
    setTimeout(()=>{
        document.querySelector('#ppppppp').remove();
        document.querySelector('#cocoScreenMask').style.opacity=0;
    },500);
  return;
};
exports.types = types;
exports.widget = Widget;
