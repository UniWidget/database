const types = {
  isInvisibleWidget: true,
  type: "COCO_LANDSCAPE_WIDGET",
  icon: "icon-toolbox-feature",
  title: "Coco全局横屏",
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
let window_ = new Function("return window;")();
let document_ = window_.document;
function checkEnv() {
  if (window_.cordova) {
    return "app";
  }
  const url = window_.location.pathname;
  if (window_.location.pathname.startsWith("/editor/player/")) {
    return "h5";
  }
  if (window_.location.pathname.startsWith("/editor")) {
    return "editor";
  }
  return "unknown";
}
function loadCssCode(code) {
  var style = document_.createElement("style");
  style.type = "text/css";
  style.rel = "stylesheet";
  style.appendChild(document_.createTextNode(code));
  var head = document_.getElementsByTagName("head")[0];
  head.appendChild(style);
}
function hookRotateByQuerySelector(querySelector, deg) {
  const elements = document_.querySelectorAll(querySelector);
  elements.forEach((element) => {
    element.style.transform += ` rotate(${deg}deg)`;
    const config = { attributes: true, childList: false, subtree: false };
    const callback = function (mutationsList, observer) {
      for (let mutation of mutationsList) {
        if (mutation.type === "attributes") {
          if (mutation.attributeName === "style") {
            if (element) {
              if (!element.style.transform.includes(`rotate(${deg}deg)`))
                element.style.transform += ` rotate(${deg}deg)`;
            } else {
              console.error("COCO_LANDSCAPE Error: no element", element);
            }
          }
        }
      }
    };
    const observer = new MutationObserver(callback);
    observer.observe(element, config);
    console.log("COCO_LANDSCAPE Log: hook element", element);
  });
}
if (!window_.COCO_LANDSCAPE_HOOKED) {
  switch (checkEnv()) {
    case "editor":
      // 修改预览
      //   const app_zone = document_.getElementById("COCO_APP_ZONE");
      //   if (app_zone) {
      //     app_zone.style.transform += " rotate(-90deg)";
      //   } else {
      //     console.error("COCO_LANDSCAPE Error: no app_zone");
      //   }
      //修改css
      loadCssCode(`
        [data-role=WIDGET] {
            transform: rotate(90deg);
        }
        [class^=PreviewArea_appZone] {
            transform: rotate(-90deg)!important;
        }`);
      break;
    case "h5":
      //修改控件
      loadCssCode(`
        [data-role=WIDGET] {
            transform: rotate(90deg);
        }`);
      // 修改预览
      //   const web_player = document_.getElementById("webPlayer");
      //   if (web_player) {
      //     web_player.style.transform += " rotate(-90deg)";
      //   } else {
      //     console.error("COCO_LANDSCAPE Error: no webPlayer");
      //   }
      //   const targetNode = document_.getElementById("webPlayer");
      //   const config = { attributes: true, childList: false, subtree: false };
      //   const callback = function (mutationsList, observer) {
      //     for (let mutation of mutationsList) {
      //       if (mutation.type === "attributes") {
      //         if (mutation.attributeName === "style") {
      //           const web_player = document_.getElementById("webPlayer");
      //           if (web_player) {
      //             if (!web_player.style.transform.includes("rotate(-90deg)"))
      //               web_player.style.transform += " rotate(-90deg)";
      //           } else {
      //             console.error("COCO_LANDSCAPE Error: no webPlayer");
      //           }
      //         }
      //       }
      //     }
      //   };
      //   const observer = new MutationObserver(callback);
      //   observer.observe(targetNode, config);
      hookRotateByQuerySelector("[id=webPlayer]", "-90");
      // hookRotateByQuerySelector(".screen-view-inner", "90");
      break;
    case "app":
      loadCssCode(`
        [data-role=WIDGET] {
            transform: rotate(90deg);
        }`);
        break;
    default:
      console.error("COCO_LANDSCAPE Error: Unknown Env:", checkEnv());
      break;
  }
  window_.COCO_LANDSCAPE_HOOKED = true;
}
exports.types = types;
exports.widget = Widget;
