var document = this.document;
const types = {
    isInvisibleWidget: true,
    type: "guodu_zx",
    icon: "https://cdn.cocotais.cn/project/waddle-2/logo/waddle2-logo.svg",
    title: "屏幕过度_zx",
    version: "1.1.3",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);

    }
    guodu_pinghua(oldid, time) {
        let oldElement = document.getElementById(oldid);
        oldElement.style.transition = `transform ${time}s ease-in-out`;
        oldElement.style.transform = "translateX(100%)";
        oldElement.addEventListener("transitionend", function () {
            oldElement.style.transition = "";
            oldElement.style.transform = "translateX(0%)";
            this.emit('guoduok')
        });

    }
    guodu_jianxiao(oldid, time) {
        let oldElement = document.getElementById(oldid);
        oldElement.style.transition = `transform ${time}s ease-in-out`;
        oldElement.style.opacity = "0";
        oldElement.addEventListener("transitionend", function () {
            this.emit('guoduok')
            oldElement.style.transition = "";
            oldElement.style.opacity = "1";

        });

    }
}

types['events'].push({
    key: 'guoduok',
    label: '过度完成',
    params: [],
})
types['methods'].push({
    key: 'guodu_pinghua',
    label: '平滑过渡',
    params: [
        {
            key: 'oldid',
            label: '本屏幕id',
            valueType: 'string',
            defaultValue: "",
        },
        {
            key: 'time',
            label: 'time',
            valueType: 'number',
            defaultValue: 0.5,
        },
    ],
})
types['methods'].push({
    key: 'guodu_jianxiao',
    label: '减消过渡',
    params: [
        {
            key: 'oldid',
            label: '本屏幕id',
            valueType: 'string',
            defaultValue: "",
        },
        {
            key: 'time',
            label: 'time',
            valueType: 'number',
            defaultValue: 0.5,
        },
    ],
})

//前版本的横向过度(没问题)但是有点不协调

// Widget.prototype.guodu_pinghua = function (oldid, time) {
//     let oldElement = document.getElementById(oldid);
//     oldElement.style.transition = `transform ${time}s ease-in-out`;
//     oldElement.style.transform = "translateX(100%)";
//     oldElement.addEventListener("transitionend", () => {
//         oldElement.style.transition = "";
//         oldElement.style.transform = "translateX(0%)";
//         this.emit('guoduok')
//     });

// }
Widget.prototype.guodu_pinghua = function (oldid, time) {
    let oldElement = document.getElementById(oldid);
    let news = oldElement.cloneNode(true);
    //将news插入到oldElement的前面
    oldElement.parentNode.insertBefore(news, oldElement);
    news.style.transition = `all ${time}s ease-in-out`;


    setTimeout(() => {
        this.emit('guoduok')
    }, 100)
    setTimeout(() => {
        news.style.transform = "translateY(-100%)";
    }, 200)
    news.addEventListener("transitionend", () => {
        news.style.transition = "";
        news.style.transform = "translateX(0%)";
        news.remove();
    });

}
Widget.prototype.guodu_jianxiao = function (oldid, time) {
    let oldElement = document.getElementById(oldid);
    oldElement.style.transition = `all  ${time}s ease-in-out`;
    oldElement.style.opacity = "0";
    oldElement.addEventListener("transitionend", () => {
        this.emit('guoduok')
        oldElement.style.opacity = "1";
    });
}

exports.types = types;
exports.widget = Widget;
