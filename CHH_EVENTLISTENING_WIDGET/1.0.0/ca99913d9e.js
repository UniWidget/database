//@author:CHH

window = this.window
document = this.document

const blockColor = '#20BE38'
const blockColor2 = '#2980B9'

let types = {
    title: "事件监听",
    type: "CHH_EVENTLISTENING_WIDGET",
    icon: "https://static.codemao.cn/pickduck/SkucReld1x.svg?hash=FkfSCOzg9hleLlo6DwItp_tPvI6W",
    docs: { url: 'https://cos.chahehe.space/widget/#/page-6' },
    version: "1.0.0",
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    methods: [
        {
            key: 'CHH_EVENTLISTENING_GETEVENT',
            label: '启动监听',
            params: [
            {
                key: 'CHH_EVENTLISTENING_GETEVENT_ID',
                label: 'id',
                valueType: 'string',
                defaultValue: '建议只调用一次',
            },
            ],
        
            blockOptions: {
            color: blockColor,
            icon: 'https://static.codemao.cn/pickduck/S19R2le_kl.svg?hash=Fj_ggjX1AF7jQYOFJ_2ynqRo3cCG',
            generateBlock: true,
            inputsInline: true,
            space: 16,
            },
        },

        {
            key: 'CHH_EVENTLISTENING_GETEVENTDOC',
            label: '启动监听返回键',
            params: [],
        
            blockOptions: {
            color: blockColor2,
            icon: 'https://static.codemao.cn/pickduck/S19R2le_kl.svg?hash=Fj_ggjX1AF7jQYOFJ_2ynqRo3cCG',
            generateBlock: true,
            inputsInline: true,
            space: 16,
            },
        },

        {
            key: 'CHH_EVENTLISTENING_PRCD',
            label: '阻止默认右键菜单弹出',
            params: [
            {
                key: 'CHH_EVENTLISTENING_PRCD_ID',
                label: 'id',
                valueType: 'string',
                defaultValue: '建议只存在一个',
            },
            ],
        
            blockOptions: {
            color: blockColor,
            icon: 'https://static.codemao.cn/pickduck/S19R2le_kl.svg?hash=Fj_ggjX1AF7jQYOFJ_2ynqRo3cCG',
            generateBlock: true,
            inputsInline: true,
            space: 16,
            },
        },

        {
            key: 'CHH_EVENTLISTENING_RRCD',
            label: '恢复默认右键菜单弹出',
            params: [
            {
                key: 'CHH_EVENTLISTENING_RRCD_ID',
                label: 'id',
                valueType: 'string',
                defaultValue: '建议只存在一个',
            },
            ],
        
            blockOptions: {
            color: blockColor,
            icon: 'https://static.codemao.cn/pickduck/S19R2le_kl.svg?hash=Fj_ggjX1AF7jQYOFJ_2ynqRo3cCG',
            generateBlock: true,
            inputsInline: true,
            space: 16,
            },
        },

        {
            key: 'CHH_EVENTLISTENING_PREVENT_BACK',
            label: '阻止返回键默认行为',
            params: [],
        
            blockOptions: {
            color: blockColor2,
            icon: 'https://static.codemao.cn/pickduck/S19R2le_kl.svg?hash=Fj_ggjX1AF7jQYOFJ_2ynqRo3cCG',
            generateBlock: true,
            inputsInline: true,
            space: 16,
            },
        },

        {
            key: 'CHH_EVENTLISTENING_RESTORE_BACK',
            label: '恢复返回键默认行为',
            params: [],
        
            blockOptions: {
            color: blockColor2,
            icon: 'https://static.codemao.cn/pickduck/S19R2le_kl.svg?hash=Fj_ggjX1AF7jQYOFJ_2ynqRo3cCG',
            generateBlock: true,
            inputsInline: true,
            space: 16,
            },
        },

        {
            key: 'CHH_EVENTLISTENING_EXITAPP',
            label: '退出App',
            params: [],
        
            blockOptions: {
            color: blockColor2,
            icon: 'https://static.codemao.cn/pickduck/S19R2le_kl.svg?hash=Fj_ggjX1AF7jQYOFJ_2ynqRo3cCG',
            generateBlock: true,
            inputsInline: true,
            space: 16,
            },
        },
    ],
    events: [
        {
            key: 'CHH_EVENTLISTENING_CLICK',
            label: '被单击',
            params: [
                {
                    key: "clickid",
                    label: "id",
                    valueType: "string",
                },
            ],
            blockOptions: {
            color: blockColor,
            icon: 'https://creation.codemao.cn/coconut/web/1.16.0/static/media/tab.906ad81b.svg',
            generateBlock: true,
            inputsInline: true,
            space: 16,
            },
        },

        {
            key: 'CHH_EVENTLISTENING_DCLICK',
            label: '被双击',
            params: [
                {
                    key: "dclickid",
                    label: "id",
                    valueType: "string",
                },
            ],
            blockOptions: {
            color: blockColor,
            icon: 'https://creation.codemao.cn/coconut/web/1.16.0/static/media/tab.906ad81b.svg',
            generateBlock: true,
            inputsInline: true,
            space: 16,
            },
        },

        {
            key: 'CHH_EVENTLISTENING_TCLICK',
            label: '被三击',
            params: [
                {
                    key: "tclickid",
                    label: "id",
                    valueType: "string",
                },
            ],
            blockOptions: {
            color: blockColor,
            icon: 'https://creation.codemao.cn/coconut/web/1.16.0/static/media/tab.906ad81b.svg',
            generateBlock: true,
            inputsInline: true,
            space: 16,
            },
        },

        {
            key: 'CHH_EVENTLISTENING_MDLONG',
            label: '(*)被长按',
            params: [
                {
                    key: "mdlongid",
                    label: "id",
                    valueType: "string",
                },
            ],
            blockOptions: {
            color: blockColor,
            icon: 'https://creation.codemao.cn/coconut/web/1.16.0/static/media/tab.906ad81b.svg',
            generateBlock: true,
            inputsInline: true,
            space: 16,
            },
        },

        {
            key: 'CHH_EVENTLISTENING_MD',
            label: '被按下',
            params: [
                {
                    key: "mdid",
                    label: "id",
                    valueType: "string",
                },
            ],
            blockOptions: {
            color: blockColor,
            icon: 'https://creation.codemao.cn/coconut/web/1.16.0/static/media/tab.906ad81b.svg',
            generateBlock: true,
            inputsInline: true,
            space: 16,
            },
        },

        {
            key: 'CHH_EVENTLISTENING_MU',
            label: '被放开',
            params: [
                {
                    key: "muid",
                    label: "id",
                    valueType: "string",
                },
            ],
            blockOptions: {
            color: blockColor,
            icon: 'https://creation.codemao.cn/coconut/web/1.16.0/static/media/tab.906ad81b.svg',
            generateBlock: true,
            inputsInline: true,
            space: 16,
            },
        },

        {
            key: 'CHH_EVENTLISTENING_RCLICK',
            label: '(*)被右键点击',
            params: [
                {
                    key: "rclickid",
                    label: "id",
                    valueType: "string",
                },
            ],
            blockOptions: {
            color: blockColor,
            icon: 'https://creation.codemao.cn/coconut/web/1.16.0/static/media/tab.906ad81b.svg',
            generateBlock: true,
            inputsInline: true,
            space: 16,
            },
        },

        {
            key: 'CHH_EVENTLISTENING_GETEVENTDOC',
            label: '(移动端)按下返回键',
            params: [],
            blockOptions: {
            color: blockColor,
            icon: 'https://creation.codemao.cn/coconut/web/1.16.0/static/media/tab.906ad81b.svg',
            generateBlock: true,
            inputsInline: true,
            space: 16,
            },
        },
    ],
    platforms: ["web", "android", "ios", "harmony"],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
          this.widgetLog('欢迎使用 CHH-事件监听');
    }
}

Widget.prototype.CHH_EVENTLISTENING_GETEVENT = function CHHEVENTLISTENINGGETEVENT(CHH_EVENTLISTENING_GETEVENT_ID) {
    const element = document.getElementById(CHH_EVENTLISTENING_GETEVENT_ID);
    if (!element) {
        console.error(`未找到 id 为 ${CHH_EVENTLISTENING_GETEVENT_ID} 的元素`);
        this.widgetError(`未找到 id 为 ${CHH_EVENTLISTENING_GETEVENT_ID} 的元素`);
        return;
    }

    let clickCount = 0;
    let clickTimer;
    let longPressTimer;
    const longPressDuration = 1000;
    const clickInterval = 300; // 点击间隔时间，用于判断双击和三击
    let isLongPress = false;

    element.addEventListener('click', () => {
        if (isLongPress) {
            isLongPress = false;
            return;
        }
        clickCount++;
        clearTimeout(clickTimer);

        clickTimer = setTimeout(() => {
            switch (clickCount) {
                case 1:
                    this.emit("CHH_EVENTLISTENING_CLICK", `${CHH_EVENTLISTENING_GETEVENT_ID}`);
                    this.widgetLog(`${CHH_EVENTLISTENING_GETEVENT_ID} 已单击`);
                    console.log(`${CHH_EVENTLISTENING_GETEVENT_ID} 已单击`);
                    break;
                case 2:
                    this.emit("CHH_EVENTLISTENING_DCLICK", `${CHH_EVENTLISTENING_GETEVENT_ID}`);
                    this.widgetLog(`${CHH_EVENTLISTENING_GETEVENT_ID} 已双击`);
                    console.log(`${CHH_EVENTLISTENING_GETEVENT_ID} 已双击`);
                    break;
                case 3:
                    this.emit("CHH_EVENTLISTENING_TCLICK", `${CHH_EVENTLISTENING_GETEVENT_ID}`);
                    this.widgetLog(`${CHH_EVENTLISTENING_GETEVENT_ID} 已三击`);
                    console.log(`${CHH_EVENTLISTENING_GETEVENT_ID} 已三击`);
                    break;
            }
            clickCount = 0;
        }, clickInterval);
    });

    element.addEventListener('mousedown', () => {
        longPressTimer = setTimeout(() => {
            isLongPress = true;
            this.emit("CHH_EVENTLISTENING_MDLONG", `${CHH_EVENTLISTENING_GETEVENT_ID}`);
            this.widgetLog(`${CHH_EVENTLISTENING_GETEVENT_ID} 已长按`);
            console.log(`${CHH_EVENTLISTENING_GETEVENT_ID} 已长按`);
        }, longPressDuration);
        this.emit("CHH_EVENTLISTENING_MD", `${CHH_EVENTLISTENING_GETEVENT_ID}`);
        this.widgetLog(`${CHH_EVENTLISTENING_GETEVENT_ID} 已按下`);
        console.log(`${CHH_EVENTLISTENING_GETEVENT_ID} 已按下`);
    });

    element.addEventListener('mouseup', () => {
        clearTimeout(longPressTimer);
        this.emit("CHH_EVENTLISTENING_MU", `${CHH_EVENTLISTENING_GETEVENT_ID}`);
        this.widgetLog(`${CHH_EVENTLISTENING_GETEVENT_ID} 已放开`);
        console.log(`${CHH_EVENTLISTENING_GETEVENT_ID} 已放开`);
    });

    
    element.addEventListener('contextmenu', (event) => {
        this.emit("CHH_EVENTLISTENING_RCLICK", `${CHH_EVENTLISTENING_GETEVENT_ID}`);
        this.widgetLog(`${CHH_EVENTLISTENING_GETEVENT_ID} 已右键点击`);
        console.log(`${CHH_EVENTLISTENING_GETEVENT_ID} 已右键点击`);
    });
    
};


Widget.prototype.CHH_EVENTLISTENING_GETEVENTDOC = function CHHEVENTLISTENINGGETEVENTDOC() {
    // 添加 backbutton 事件监听器
    document.addEventListener("backbutton", () => {
        this.emit("CHH_EVENTLISTENING_GETEVENTDOC");
        this.widgetLog("移动设备返回键被按下");
        console.log("移动设备返回键被按下");
    });
}


Widget.prototype.CHH_EVENTLISTENING_PRCD = function CHHEVENTLISTENINGPRCD(CHH_EVENTLISTENING_PRCD_ID) {
    const element = document.getElementById(CHH_EVENTLISTENING_PRCD_ID);
    if (element) {
        if (!('ontouchstart' in window)) {
            const preventHandler = function (event) {
                event.preventDefault();
            };
            element.__rightClickPreventHandler = preventHandler;
            element.addEventListener('contextmenu', preventHandler);
        }
    } else {
        console.error(`未找到 id 为 ${CHH_EVENTLISTENING_PRCD_ID} 的元素`);
        this.widgetError(`未找到 id 为 ${CHH_EVENTLISTENING_PRCD_ID} 的元素`);
    }
};

Widget.prototype.CHH_EVENTLISTENING_RRCD = function CHHEVENTLISTENINGRRCD(CHH_EVENTLISTENING_RRCD_ID) {
    const element = document.getElementById(CHH_EVENTLISTENING_RRCD_ID);
    if (element) {
        if (!('ontouchstart' in window)) {
            const handler = element.__rightClickPreventHandler;
            if (handler) {
                element.removeEventListener('contextmenu', handler);
                delete element.__rightClickPreventHandler;
            }
        }
    } else {
        console.error(`未找到 id 为 ${CHH_EVENTLISTENING_RRCD_ID} 的元素`);
        this.widgetError(`未找到 id 为 ${CHH_EVENTLISTENING_RRCD_ID} 的元素`);
    }
};


// 阻止移动设备返回键的默认行为
Widget.prototype.CHH_EVENTLISTENING_PREVENT_BACK = function CHHEVENTLISTENINGPREVENT_BACK() {
    const preventHandler = function (event) {
        event.preventDefault();
    };
    document.__backButtonPreventHandler = preventHandler;
    document.addEventListener('backbutton', preventHandler);
};

// 恢复移动设备返回键的默认行为
Widget.prototype.CHH_EVENTLISTENING_RESTORE_BACK = function CHHEVENTLISTENINGRESTORE_BACK() {
    const handler = document.__backButtonPreventHandler;
    if (handler) {
        document.removeEventListener('backbutton', handler);
        delete document.__backButtonPreventHandler;
    }
};


Widget.prototype.CHH_EVENTLISTENING_EXITAPP = function () {
    if (typeof window.navigator.app.exitApp!== "undefined") {
      window.navigator.app.exitApp();
    } else {
      this.widgetError("非移动端环境");
    }
  };

exports.types = types;
exports.widget = Widget;