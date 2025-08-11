/**
 * Copyright (c) 2023 xiaohong2022
 * 
 * 特别鸣谢：
 * LakexEditor 官方文档 https://www.yuque.com/yuque/developer/gfoax065u2v72isu
 * Waddle 编辑器
 * CoCo 中控台
 */

// 一些常量
const auther = "小宏XeLa" // 作者
const version = "0.4.0" // 版本号
const qq = 3174251894 // 作者QQ
const color = "#66ccff" // 积木颜色
const icon = 'icon-toolbox-feature'; // 图标

// 一些变量
var window = this.window;
var type = [
    { label: "自带格式", value: "text/lake" },
    { label: "HTML", value: "text/html" },
    { label: "MarkDown", value: "text/markdown" },
    { label: "纯文本", value: "text/plain" },
    { label: "字典", value: "json" },
];
var settype = [
    { label: "用户手动", value: "user" },
    { label: "系统设置", value: "init" },
];
var updtype = [
    { label: "图片", value: "image" },
    { label: "视频", value: "video" },
    { label: "文件", value: "file" },
];
var space = 16 * 2.5;

// 一些函数
function UUID() {
    var b = new Date().getTime();
    var c = ("undefined" !== typeof performance && performance.now && 1e3 * performance.now()) || 0;
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (d) {
        var a = 16 * Math.random();
        0 < b
            ? ((a = (b + a) % 16 | 0), (b = Math.floor(b / 16)))
            : ((a = (c + a) % 16 | 0), (c = Math.floor(c / 16)));
        return ("x" === d ? a : (a & 3) | 8).toString(16);
    });
}

var types = { // 自定义控件设置
    type: 'XH_Lakex_Editor_WIDGET', // 控件编号
    icon, // 控件图标
    title: 'LakexEditor', // 控件名称
    platforms: ['android', 'ios', 'web'], // 控件可用范围
    version, // 控件版本
    auther, // 控件作者
    docs: { url: "https://btmu8uap4l.feishu.cn/wiki/LtvowRC6ribO5Bkx9r9ciXN5nKb", }, // 帮助链接
    isInvisibleWidget: false, // 不是功能控件
    isGlobalWidget: false, // 不是全局控件
    properties: [ // 属性
        {
            key: '__width',
            label: '宽度',
            valueType: 'number',
            defaultValue: 200,
            blockOptions: {
                generateBlock: false,
            },
        },
        {
            key: '__height',
            label: '高度',
            valueType: 'number',
            defaultValue: 150,
            blockOptions: {
                generateBlock: false,
            },
        },
        {
            key: '__size',
            label: '',
            valueType: 'number',
            defaultValue: 0,
            readonly: true,
            blockOptions: {
                setter: {
                    keys: ['__height', '__width'],
                },
                getter: {
                    keys: ['__height', '__width'],
                },
            },
        },
        {
            key: 'toolbar_default',
            label: '工具栏默认编辑配置',
            valueType: 'string',
            defaultValue: "cardSelect,|,undo,redo,formatPainter,clearFormat,|,style,fontsize,bold,italic,strikethrough,underline,mixedTextStyle,|,color,bgColor,|,alignment,unorderedList,orderedList,indent,lineHeight,|,taskList,link,quote,hr",
        },
        {
            key: 'toolbar_table',
            label: '工具栏表格编辑配置',
            valueType: 'string',
            defaultValue: "cardSelect,|,undo,redo,formatPainter,clearFormat,|,style,fontsize,bold,italic,strikethrough,underline,mixedTextStyle,|,color,bgColor,tableCellBgColor,tableBorderVisible,|,alignment,tableVerticalAlign,tableMergeCell,|,unorderedList,orderedList,indent,lineHeight,|,taskList,link,quote,hr",
        },
        {
            key: 'theme',
            label: '深色主题',
            valueType: 'boolean',
            defaultValue: false,
        },
    ],
    methods: [ // 方法
        {
            key: 'init',
            label: '初始化',
            params: [],
            blockOptions: { color, icon, line: '初始化' }
        },
        {
            key: 'reinitialize',
            label: '重新初始化',
            params: [],
            blockOptions: { color, icon, space }
        },
        {
            key: 'setDocument',
            label: '设置文档内容',
            params: [
                {
                    key: 'type',
                    label: '格式',
                    valueType: 'string',
                    dropdown: type,
                },
                {
                    key: 'content',
                    label: '内容',
                    valueType: ["string", "object"],
                    defaultValue: ""
                },
            ],
            blockOptions: { color, icon, line: '文档' }
        },
        {
            key: 'getDocument',
            label: '获取文档内容',
            valueType: ["string", "object"],
            params: [
                {
                    key: 'type',
                    label: '格式',
                    valueType: 'string',
                    dropdown: type,
                },
            ],
            blockOptions: { color, icon, space }
        },
        {
            key: 'settype',
            label: '操作类型',
            valueType: ["string"],
            params: [
                {
                    key: 'type',
                    label: '',
                    valueType: 'string',
                    dropdown: settype,
                },
            ],
            blockOptions: { color, icon, line: '枚举' }
        },
        {
            key: 'updtype',
            label: '上传类型',
            valueType: ["string"],
            params: [
                {
                    key: 'type',
                    label: '',
                    valueType: 'string',
                    dropdown: updtype,
                },
            ],
            blockOptions: { color, icon, space }
        },
        {
            key: 'upload_p',
            label: '图片视频文件上传异步返回',
            params: [
                {
                    key: 'id',
                    label: 'UUID',
                    valueType: 'string',
                    defaultValue: ""
                },
                {
                    key: 'url',
                    label: '链接',
                    valueType: 'string',
                    defaultValue: ""
                },
                {
                    key: 'cover',
                    label: '封面（仅对视频有效）',
                    valueType: 'string',
                    defaultValue: ""
                },
            ],
            blockOptions: { color, icon, inputsInline: false, line: '上传' }
        },
    ],
    events: [
        {
            key: 'change',
            label: '内容变化',
            params: [
                {
                    key: 'type',
                    label: '操作类型',
                    valueType: 'string',
                    defaultValue: "",
                },
            ],
        },
        {
            key: 'focus',
            label: '获得焦点',
            params: [],
        },
        {
            key: 'blur',
            label: '失去焦点',
            params: [],
        },
        {
            key: 'select',
            label: '选区变化',
            params: [
                {
                    key: 'text',
                    label: '内容',
                    valueType: 'string',
                    defaultValue: "",
                },
                {
                    key: 'obj',
                    label: 'SelectionOBJ',
                    valueType: 'string',
                    defaultValue: "",
                },
            ],
        },
        {
            key: 'upload',
            label: '图片视频文件上传',
            params: [
                {
                    key: 'id',
                    label: 'UUID',
                    valueType: 'string',
                    defaultValue: "",
                },
                {
                    key: 'file',
                    label: 'FileOBJ',
                    valueType: 'string',
                    defaultValue: "",
                },
                {
                    key: 'obj',
                    label: 'ObjectURL',
                    valueType: 'string',
                    defaultValue: "",
                },
                {
                    key: 'type',
                    label: '上传类型',
                    valueType: 'string',
                    defaultValue: "",
                },
            ],
        },
    ],
};

const mnbloader = `
class LOADER {
    constructor() {}
     loadReact() {
        return new Promise((reu) => {
        fetch("https://static.bcmcdn.com/coco/player/unstable/By1YBkqoR.text/javascript?hash=Fqp3rkxJ9SW8Id4dBPCKXXOWLHzO").then(v => v.text()).then(code => {
            !(() => {
                new Function(
                    'exports',
                    'module',
                    'define',
                    'require',
                    'self',
                    'globalThis',
                    code
                ).apply(this, [undefined, undefined, undefined, undefined, this, this]);
                reu();
            })();
        })
    })
    }
    loadReactDOM() {
        return new Promise((reu) => {
        fetch("https://static.bcmcdn.com/coco/player/unstable/rkHiSJ5sC.text/javascript?hash=Fv643cnQVmpPoJcabhE4ZYYYzaz-").then(v => v.text()).then(code => {
            !(() => {
                new Function(
                    'exports',
                    'module',
                    'define',
                    'require',
                    'self',
                    'globalThis',
                    code
                ).apply(this, [undefined, undefined, undefined, undefined, this, this]);
                reu();
            })();
        })
    })
    }
    loadDOC() {
        return new Promise((reu) => {
            fetch("https://static.bcmcdn.com/coco/player/unstable/rkn3rJqsR.text/javascript?hash=FuDZFLyGHGnADJYMkJfM5mYXSmWY").then(v => v.text()).then(code => {
                !(() => {
                    new Function(
                        'exports',
                        'module',
                        'define',
                        'require',
                        'self',
                        'globalThis',
                        code
                    ).apply(this, [undefined, undefined, undefined, undefined, this, this]);
                    reu();
                })();
            })
        })
    }
}

var init_ = new LOADER();
return init_;
`;

class Widget extends VisibleWidget { // 控件函数代码
    // 构造器
    constructor(props) {
        super(props);
        Object.assign(this, props);
        this.init_ = null;
        this.core = null;
        this.prom_callbacks = {};
    };
    init() {
        try {
            return new Promise((reu) => {
                if (this.init_) {
                    this.init_doc('');
                    return reu();
                };
                this.init_ = ((new Function(mnbloader))());
                this.init_.loadReact().then(() => {
                    this.init_.loadReactDOM().then(() => {
                        this.init_.loadDOC().then(() => {
                            var l = window.document.createElement("link");
                            l.type = "text/css";
                            l.rel = "stylesheet";
                            l.href = "https://static.bcmcdn.com/coco/player/unstable/HyD181ci0.text/css?hash=FrgIPfQifUGsiJzbRfqvfd-TP4sB";
                            var l2 = window.document.createElement("link");
                            l2.type = "text/css";
                            l2.rel = "stylesheet";
                            l2.href = "https://static.bcmcdn.com/coco/player/unstable/S1_eU1csA.text/css?hash=FmluqiM73hOEOsOlK8O59fKULwIo";
                            window.document.head.append(l, l2);
                            var loop = setInterval(() => {
                                if (this.init_.Doc) {
                                    if (this.init_.Doc.createOpenEditor) {
                                        this.init_doc('');
                                        reu();
                                        clearInterval(loop);
                                    }
                                }
                            }, 100);
                        });
                    });
                });
            });
        } catch (e) {
            this.widgetError("初始化出错！");
            this.widgetError(e.message);
        } finally {
            this.widgetLog("初始化完毕");
        }
    };
    isinit() {
        if (!this.core) {
            this.widgetError("请先初始化控件！");
        }
        return !!this.core;
    };
    reinitialize() {
        this.isinit();
        var text = this.core.getDocument("text/lake");
        this.core.destroy();
        this.core = null;
        this.init_doc(text);
    };
    init_doc(text) {
        if (this.core) {
            window.document.querySelector("#" + this.__widgetId).className = "ne-doc-major-editor ne-ui-scrollbar-visible";
            window.document.querySelector("#" + this.__widgetId).append(this.core.uiLayer.parentElement);
        } else {
            this.core = this.init_.Doc.createOpenEditor(window.document.querySelector("#" + this.__widgetId), {
                input: {},
                darkMode: this.theme,
                image: {
                    isCaptureImageURL() {
                        return false;
                    },
                    createUploadPromise: (request) => {
                        const { type, data } = request;
                        if (type === 'url') {
                            return Promise.resolve({
                                url: data,
                                size: 100,
                                filename: 'image.png'
                            });
                        } else if (type === 'file') {
                            return new Promise((re) => {
                                var id = UUID();
                                this.prom_callbacks[id] = (url) => {
                                    re({
                                        url,
                                        size: data.size,
                                        filename: data.name
                                    });
                                };
                                var urlObject = window.URL || window.webkitURL || window;
                                var obj = urlObject.createObjectURL(data);
                                this.emit("upload", id, data, obj, "image");
                            })
                        } else {
                            this.widgetError("未知错误！");
                            return Promise.resolve({
                                url: "",
                                size: 0,
                                filename: ''
                            });
                        }
                    },
                },
                file: {
                    createUploadPromise: (file) => {
                        return new Promise((re) => {
                            var id = UUID();
                            this.prom_callbacks[id] = (url) => {
                                re({
                                    url,
                                    size: file.size,
                                    filename: file.name
                                });
                            };
                            var urlObject = window.URL || window.webkitURL || window;
                            var obj = urlObject.createObjectURL(file);
                            this.emit("upload", id, file, obj, "file");
                        })
                    },
                },
                video: {
                    createUploadPromise: (file) => {
                        return new Promise((re) => {
                            var id = UUID();
                            this.prom_callbacks[id] = (url, cover) => {
                                re({
                                    url,
                                    size: file.size,
                                    filename: file.name,
                                    cover,
                                });
                            };
                            var urlObject = window.URL || window.webkitURL || window;
                            var obj = urlObject.createObjectURL(file);
                            this.emit("upload", id, file, obj, "video");
                        })
                    },
                },
                toolbar: {
                    agentConfig: {
                        default: {
                            items: this.toolbar_default.split(","),
                        },
                        table: {
                            items: this.toolbar_table.split(","),
                        }
                    }
                }
            });
            this.core.setDocument('text/lake', text);
            this.core.on('focusstatuschange', ({ focused }) => {
                if (typeof focused === "boolean") {
                    this.emit(focused ? "focus" : "blur");
                }
            });
            this.core.on('selectionchange', () => {
                var obj = window.document.getSelection();
                this.emit("select", obj.toString(), obj);
            });
            this.core.on('contentchange', (e) => {
                this.emit("change", e);
            });
        };
    };
    setDocument(type, content) {
        if (this.isinit()) {
            try {
                var t = typeof content
                if ((t == "object" && !Array.isArray(content)) || t == "string") {
                    this.core.setDocument(type, content);
                } else {
                    this.widgetWarn("非字典或字符串！");
                }
            } catch (e) {
                this.widgetError("设置内容出错！");
                this.widgetError(e.message);
            }
        }
    };
    getDocument(type) {
        if (this.isinit()) {
            try {
                return this.core.getDocument(type);
            } catch (e) {
                this.widgetError("获取内容出错！");
                this.widgetError(e.message);
                return null;
            }
        }
    };
    settype = t => t;
    updtype = t => t;
    upload_p(id, url, cover) {
        this.prom_callbacks[id](url, cover);
    };
    render() {
        return React.createElement("div", { id: 'LAKEXEDITOR_' + this.__widgetId }, null);
    };
};

const commandList = [
    //
]

// 导出控件
exports.types = types;
exports.widget = Widget;
