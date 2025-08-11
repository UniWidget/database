const types = {
  isInvisibleWidget: true,
  type: "COHOOKER_CORDOVA_FILE_WIDGET",
  icon: "icon-toolbox-feature",
  title: "文件操作#CH",
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

// files
//
//applicationDirectory
//"file///android_asset/"
//
//applicationStorageDirectory
//"file///data/user/0/com.codemao.coco.apk_222459679/"
//
//cacheDirectory
//"file///data/user/0/com.codemao.coco.apk_222459679/cache/"
//
//dataDirectory
//"file///data/user/0/com.codemao.coco.apk_222459679/files/"
//
//externalApplicationStorageDirectory
//"file///storage/emulated/0/Android/data/com.codemao.coco.apk_222459679/"
//
//externalCacheDirectory
//"file///storage/emulated/0/Android/data/com.codemao.coco.apk_222459679/cache/"
//
//externalDataDirectory
//"file///storage/emulated/0/Android/data/com.codemao.coco.apk_222459679/files/"
//
//externalRootDirectory
//"file///storage/emulated/0/"

function rfid() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-";
  const length = 16;
  var result = "";
  for (var i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

//打开文件Url
let fidMap = {};
function openFileUrl(furl, callback) {
  resolveLocalFileSystemURL(
    furl,
    //on success
    (fe) => {
      const fid = rfid();
      fidMap[fid] = fe;
      console.log("openFileUrl", true, fid, fe);
      callback({ s: true, fid: fid });
    },
    //on error
    (err) => {
      console.error("openFileUrl", err);
      callback({ s: false, err: { c: err.code, s: err.toString() } });
    }
  );
}
// 判断fe是否为目录
function checkIsDir(fid, callback) {
  if (!fidMap[fid]) {
    callback({ s: false, err: "INVALID_FID" });
    return;
  }
  callback({ s: true, isDir: fidMap[fid].isDirectory });
}
// 判断fe是否为文件
function checkIsFile(fid, callback) {
  if (!fidMap[fid]) {
    callback({ s: false, err: "INVALID_FID" });
    return;
  }
  callback({ s: true, isDir: fidMap[fid].isFile });
}
// new file fid:父文件夹id
// exclusive True如果文件存在则报错，False则等同于getFile
function newFile(fid, exclusive, fileName, callback) {
  if (!fidMap[fid]) {
    callback({ s: false, err: "INVALID_FID" });
    return;
  }
  if (!fidMap[fid].isDirectory) {
    callback({ s: false, err: "NOT_DIR" });
    return;
  }
  fidMap[fid].getFile(
    fileName,
    { create: true, exclusive: exclusive },
    function (fe) {
      const fid = rfid();
      fidMap[fid] = fe;
      console.log("newFile", true, fid, fe);
      callback({ s: true, fid: fid });
    },
    (err) => {
      console.error("newFile", err);
      //FileError.PATH_EXISTS_ERR
      if (err.code === 12) {
        callback({ s: false, err: "PATH_EXISTS" });
        return;
      }
      callback({ s: false, err: { c: err.code, s: err.toString() } });
    }
  );
}
// new file fid:父文件夹id
// exclusive True如果文件存在则报错，False则等同于getFile
function newDir(fid, exclusive, fileName, callback) {
  if (!fidMap[fid]) {
    callback({ s: false, err: "INVALID_FID" });
    return;
  }
  if (!fidMap[fid].isDirectory) {
    callback({ s: false, err: "NOT_DIR" });
    return;
  }
  fidMap[fid].getDirectory(
    fileName,
    { create: true, exclusive: exclusive },
    function (fe) {
      const fid = rfid();
      fidMap[fid] = fe;
      console.log("newDir", true, fid, fe);
      callback({ s: true, fid: fid });
    },
    (err) => {
      console.error("newDir", err);
      //FileError.PATH_EXISTS_ERR
      if (err.code === 12) {
        callback({ s: false, err: "PATH_EXISTS" });
        return;
      }
      callback({ s: false, err: { c: err.code, s: err.toString() } });
    }
  );
}
// open file fid:父文件夹id
// exclusive True如果文件存在则报错，False则等同于getFile
function openChildrenFile(fid, fileName, callback) {
  if (!fidMap[fid]) {
    callback({ s: false, err: "INVALID_FID" });
    return;
  }
  if (!fidMap[fid].isDirectory) {
    callback({ s: false, err: "NOT_DIR" });
    return;
  }
  fidMap[fid].getFile(
    fileName,
    { create: false },
    function (fe) {
      const fid = rfid();
      fidMap[fid] = fe;
      console.log("getChildrenFile", true, fid, fe);
      callback({ s: true, fid: fid });
    },
    (err) => {
      console.error("getChildrenFile", err);
      callback({ s: false, err: { c: err.code, s: err.toString() } });
    }
  );
}
// get dir fid:父文件夹id
function openChildrenDir(fid, fileName, callback) {
  if (!fidMap[fid]) {
    callback({ s: false, err: "INVALID_FID" });
    return;
  }
  fidMap[fid].getDirectory(
    fileName,
    { create: true, exclusive: exclusive },
    function (fe) {
      const fid = rfid();
      fidMap[fid] = fe;
      console.log("getChildrenDir", true, fid, fe);
      callback({ s: true, fid: fid });
    },
    (err) => {
      console.error("getChildrenDir", err);
      callback({ s: false, err: { c: err.code, s: err.toString() } });
    }
  );
}
// 获取其下文件、目录
// callback
// s
// fileNameList 文件名列表
function getChildrens(fid, includeFile, includeDir, callback) {
  if (!fidMap[fid]) {
    callback({ s: false, err: "INVALID_FID" });
    return;
  }
  if (!fidMap[fid].isDirectory) {
    callback({ s: false, err: "NOT_DIR" });
    return;
  }
  const reader = fidMap[fid].createReader();
  reader.readEntries(
    (e) => {
      console.log("getChildrenDir", true, fid, e);
      let fileNameList = [];
      e.forEach((f) => {
        if (includeFile && f.isFile) fileNameList.push(f.name);
        else if (includeDir && f.isDirectory) fileNameList.push(f.name);
      });
      callback({ s: true, fileNameList: fileNameList });
    },
    (err) => {
      console.error("getChildrens", err);
      callback({ s: false, err: { c: err.code, s: err.toString() } });
    }
  );
}

function gcFid(fid) {
  delete fidMap[fid];
}

function removeFile(fid, callback) {
  if (!fidMap[fid]) {
    callback({ s: false, err: "INVALID_FID" });
    return;
  }
  if (fidMap[fid].isDirectory) {
    // 注意！很危险！会删除所有文件！！！！！！！！！！！
    fidMap[fid].removeRecursively(
      () => {
        callback({ s: true });
      },
      (err) => {
        callback({ s: false, err: { c: err.code, s: err.toString() } });
      }
    );
  } else {
    fidMap[fid].remove(
      () => {
        callback({ s: true });
      },
      (err) => {
        callback({ s: false, err: { c: err.code, s: err.toString() } });
      }
    );
  }
}
// Text DataURL BinaryString
function readFile(fid, type, callback) {
  if (!fidMap[fid]) {
    callback({ s: false, err: "INVALID_FID" });
    return;
  }
  if (!fidMap[fid].isFile) {
    callback({ s: false, err: "NOT_FILE" });
    return;
  }
  fidMap[fid].file(
    function (file) {
      var reader = new FileReader();
      reader.onloadend = function () {
        callback({ s: true, data: this.result });
      };
      reader["readAs" + type](file);
      reader.onerror = function (err) {
        callback({ s: false, err: { c: err.code, s: err.toString() } });
      };
    },
    (err) => {
      callback({ s: false, err: { c: err.code, s: err.toString() } });
    }
  );
}
// 只有软件在前台才可以写入！！！！！！
// data 为blob！！！
function writeFile(fid, data, isAppend, callback) {
  if (!fidMap[fid]) {
    callback({ s: false, err: "INVALID_FID" });
    return;
  }
  if (!fidMap[fid].isFile) {
    callback({ s: false, err: "NOT_FILE" });
    return;
  }
  fidMap[fid].createWriter(
    function (fileWriter) {
      console.log("create writer", fileWriter);
      //文件写入成功
      fileWriter.onwriteend = function () {
        console.log("wirted");
        callback({ s: true });
      };
      //文件写入失败
      fileWriter.onerror = function (e) {
        console.error("fileWriter Error", e);
        callback({ s: false, err: { c: "ON_FILE_WRITER", s: e.toString() } });
      };
      fileWriter.onprogress = function (e) {
        console.log("fileWriter onprogress", e);
      };
      //如果是最加内容，则定位到文件尾部
      if (isAppend) {
        try {
          fileWriter.seek(fileWriter.length);
        } catch (e) {
          callback({ s: false, err: "FILE_NOT_EXIST" });
        }
      }
      fileWriter.write(data);
    },
    (err) => {
      callback({ s: false, err: { c: err.code, s: err.toString() } });
    }
  );
}

types["methods"].push({
  key: "getSystemPath",
  label: "获取系统目录",
  params: [
    {
      key: "type",
      label: "",
      valueType: "string",
      dropdown: [
        { label: "外部存储根目录", value: "externalRootDirectory" },
        {
          label: "外部存储应用存储目录",
          value: "externalApplicationStorageDirectory",
        },
        { label: "外部存储应用缓存目录", value: "externalCacheDirectory" },
        { label: "外部存储应用数据目录", value: "externalDataDirectory" },
        { label: "应用目录", value: "applicationDirectory" },
        { label: "应用存储目录", value: "applicationStorageDirectory" },
        { label: "应用缓存目录", value: "cacheDirectory" },
        { label: "应用数据目录", value: "dataDirectory" },
      ],
    },
  ],
  valueType: "string",
});
types.platforms = ["android"];
const gWindow = new Function("return window")();
const resolveLocalFileSystemURL = gWindow.resolveLocalFileSystemURL;
Widget.prototype.getSystemPath = function (type) {
  return gWindow.cordova.file[type];
};
types["methods"].push({
  key: "openFileUrl",
  label: "打开文件路径",
  params: [
    {
      key: "furl",
      label: "文件Url",
      valueType: "string",
      defaultValue: "",
    },
  ],
});
Widget.prototype.openFileUrl = function (furl) {
  openFileUrl(furl, (param) => {
    this.emit("onCalled", "openFileUrl", "", param);
  });
};
types["methods"].push({
  key: "checkIsDir",
  label: "判断是否为目录",
  params: [
    {
      key: "fid",
      label: "文件ID",
      valueType: "string",
      defaultValue: "",
    },
  ],
});
Widget.prototype.checkIsDir = function (fid) {
  checkIsDir(fid, (param) => {
    this.emit("onCalled", "checkIsDir", fid, param);
  });
};
types["methods"].push({
  key: "checkIsFile",
  label: "判断是否为文件",
  params: [
    {
      key: "fid",
      label: "文件ID",
      valueType: "string",
      defaultValue: "",
    },
  ],
});
Widget.prototype.checkIsFile = function (fid) {
  checkIsFile(fid, (param) => {
    this.emit("onCalled", "checkIsFile", fid, param);
  });
};
types["methods"].push({
  key: "newFile",
  label: "新建文件",
  params: [
    {
      key: "fid",
      label: "父目录文件ID",
      valueType: "string",
      defaultValue: "",
    },
    {
      key: "exclusive",
      label: "覆盖旧文件",
      valueType: "boolean",
      defaultValue: "",
    },
    {
      key: "fileName",
      label: "文件名",
      valueType: "string",
      defaultValue: "",
    },
  ],
});
Widget.prototype.newFile = function (fid, exclusive, fileName) {
  newFile(fid, exclusive, fileName, (param) => {
    this.emit("onCalled", "newFile", fid, param);
  });
};
types["methods"].push({
  key: "newDir",
  label: "新建目录",
  params: [
    {
      key: "fid",
      label: "父目录文件ID",
      valueType: "string",
      defaultValue: "",
    },
    {
      key: "exclusive",
      label: "覆盖旧文件",
      valueType: "boolean",
      defaultValue: "",
    },
    {
      key: "fileName",
      label: "目录名",
      valueType: "string",
      defaultValue: "",
    },
  ],
});
Widget.prototype.newDir = function (fid, exclusive, fileName) {
  newDir(fid, exclusive, fileName, (param) => {
    this.emit("onCalled", "newDir", fid, param);
  });
};
types["methods"].push({
  key: "openChildrenFile",
  label: "打开子文件",
  params: [
    {
      key: "fid",
      label: "父目录文件ID",
      valueType: "string",
      defaultValue: "",
    },
    {
      key: "fileName",
      label: "子文件名",
      valueType: "string",
      defaultValue: "",
    },
  ],
});
Widget.prototype.openChildrenFile = function (fid, fileName) {
  openChildrenFile(fid, fileName, (param) => {
    this.emit("onCalled", "openChildrenFile", fid, param);
  });
};
types["methods"].push({
  key: "openChildrenDir",
  label: "打开子目录",
  params: [
    {
      key: "fid",
      label: "父目录文件ID",
      valueType: "string",
      defaultValue: "",
    },
    {
      key: "fileName",
      label: "子目录名",
      valueType: "string",
      defaultValue: "",
    },
  ],
});
Widget.prototype.openChildrenDir = function (fid, fileName) {
  openChildrenDir(fid, fileName, (param) => {
    this.emit("onCalled", "openChildrenDir", fid, param);
  });
};
types["methods"].push({
  key: "getChildrens",
  label: "获取子目录和文件",
  params: [
    {
      key: "fid",
      label: "父目录文件ID",
      valueType: "string",
      defaultValue: "",
    },
    {
      key: "includeFile",
      label: "包括目录",
      valueType: "boolean",
      defaultValue: true,
    },
    {
      key: "includeDir",
      label: "包含文件",
      valueType: "boolean",
      defaultValue: true,
    },
  ],
});
Widget.prototype.getChildrens = function (fid, includeFile, includeDir) {
  getChildrens(fid, includeFile, includeDir, (param) => {
    this.emit("onCalled", "getChildrens", fid, param);
  });
};
types["methods"].push({
  key: "removeFile",
  label: "删除文件/ 文件夹",
  params: [
    {
      key: "fid",
      label: "文件ID",
      valueType: "string",
      defaultValue: "",
    },
  ],
});
Widget.prototype.removeFile = function (fid) {
  removeFile(fid, (param) => {
    this.emit("onCalled", "removeFile", fid, param);
  });
};
types["methods"].push({
  key: "readFile",
  label: "读取文件",
  params: [
    {
      key: "fid",
      label: "文件ID",
      valueType: "string",
      defaultValue: "",
    },
    {
      key: "type",
      label: "类型",
      valueType: "string",
      dropdown: [
        { label: "Text", value: "Text" },
        {
          label: "DataURL",
          value: "DataURL",
        },
        { label: "BinaryString", value: "BinaryString" },
      ],
    },
  ],
});
Widget.prototype.readFile = function (fid, type) {
  readFile(fid, type, (param) => {
    this.emit("onCalled", "readFile", fid, param);
  });
};
types["methods"].push({
  key: "writeFile",
  label: "写入文件",
  params: [
    {
      key: "fid",
      label: "文件ID",
      valueType: "string",
      defaultValue: "",
    },
    {
      key: "data",
      label: "数据（Blob）",
      valueType: ["string", "number", "boolean", "color", "array", "object"],
      defaultValue: "",
    },
    {
      key: "isAppend",
      label: "追加模式",
      valueType: "boolean",
      defaultValue: "",
    },
  ],
});
Widget.prototype.writeFile = function (fid, data, isAppend) {
  writeFile(fid, data, isAppend, (param) => {
    this.emit("onCalled", "writeFile", fid, param);
  });
};
types["methods"].push({
  key: "createBlob",
  label: "创建blob",
  params: [
    {
      key: "str",
      label: "字符串",
      valueType: "string",
      defaultValue: "",
    },
  ],
  valueType: "string",
});
Widget.prototype.createBlob = function (str) {
  return new Blob([str], {
    type: "text/plain",
  });
};
types["events"].push({
  key: "onCalled",
  label: "操作执行完成",
  params: [
    {
      key: "opt",
      label: "操作名",
      valueType: ["string", "number", "boolean", "color", "array", "object"],
    },
    {
      key: "fid",
      label: "操作文件ID",
      valueType: ["string", "number", "boolean", "color", "array", "object"],
    },
    {
      key: "param",
      label: "参数",
      valueType: ["string", "number", "boolean", "color", "array", "object"],
    },
  ],
});

exports.types = types;
exports.widget = Widget;
