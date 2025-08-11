const types = {
  isInvisibleWidget: true,
  type: "CORDOVA_MEDIA_WIDGET",
  icon: "icon-toolbox-feature",
  title: "cordova选择媒体",
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

types.platforms = ["android"];
const gWindow = new Function("return window")();
function fileUrlToUrl(fileUrl, sCallback, eCallback) {
  gWindow.resolveLocalFileSystemURL(
    fileUrl,
    function (fileEntry) {
      fileEntry.file((e) => {
        try {
          if (e.type.startsWith("image")) {
            let reader = new FileReader();
            reader.onload = (e) => {
              sCallback(URL.createObjectURL(dataURLtoBlob(reader.result)));
            };
            reader.readAsDataURL(e);
          } else {
            sCallback(e.localURL);
          }
        } catch (e) {
          console.log(e);
          sCallback(e.localURL);
        }
      }, eCallback);
    },
    eCallback
  );
}
function dataURLtoBlob(dataurl) {
  const arr = dataurl.split(",");
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

function getVideoToUrl(mediaType) {
  return new Promise((sCallback, eCallback) => {
    gWindow.navigator.camera.getPicture(
      (fileUrl) => {
        console.log(fileUrl);
        let fullFileUrl = fileUrl;
        if (fullFileUrl.startsWith("/")) fullFileUrl = "file://" + fullFileUrl;
        fileUrlToUrl(
          fullFileUrl,
          (blobUrl) => {
            sCallback(blobUrl);
          },
          (e) => {
            eCallback(e);
            console.error(e);
          }
        );
      },
      (e) => console.error(e),
      {
        mediaType: gWindow.Camera.MediaType[mediaType],
        sourceType: gWindow.Camera.PictureSourceType.SAVEDPHOTOALBUM,
        destinationType: gWindow.Camera.DestinationType.FILE_URI,
      }
    );
  });
}
types["methods"].push({
  key: "getMediaToUrl",
  label: "获取本地媒体并转为Url",
  params: [
    {
      key: "mediaType",
      label: "媒体类型",
      valueType: "string",
      dropdown: [
        { label: "ALLMEDIA", value: "ALLMEDIA" },
        { label: "PICTURE", value: "PICTURE" },
        { label: "VIDEO", value: "VIDEO" },
      ],
    },
  ],
  valueType: "string",
});
Widget.prototype.getMediaToUrl = async function (mediaType) {
  return await getVideoToUrl(mediaType);
};
exports.types = types;
exports.widget = Widget;
