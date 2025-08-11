var window = this.window
var navigator = this.navigator
const types = {
    isInvisibleWidget: true,
    type: "zhendong_zx",
    icon: "https://static.codemao.cn/pickduck/H17mhnwPye.png?hash=FlCFX6KF2yqCsP19hc1qWUbR-jiP",
    title: "震动_zx",
    version: "1.1.1",
    docs: 'https://www.yuque.com/u37737036/zx/nm9p2896ozo2yg2f?singleDoc#',
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);

    }
    jianche() {
        if ("vibrate" in navigator) {
            return true
        }
        else {
            return false
        }
    }


    kaishi(time) {
        if ("vibrate" in navigator) {
            navigator.vibrate(time);
        }
        else {
            this.emit('isnot', '浏览器不支持')
        }
    }
    kaishiforlian(time) {
        if ("vibrate" in navigator) {
            const times = time.split(',');
            console.log(times);
            const pattern = [];
            for (let i = 0; i < times.length; i++) {
                pattern.push(parseInt(times[i]));
            }
            navigator.vibrate(pattern);

        }
        else {
            this.emit('isnot', '浏览器不支持')
        }
    }
}


types['events'].push({
    key: 'isnot',
    label: '震动失败',
    params: [
        {
            key: 'error',
            label: '错误原因',
            valueType: 'string',
        },
    ],

})


types['methods'].push({
    key: 'jianche',
    label: '检测是否能使用',
    valueType: 'boolean',
    params: [],
})

types['methods'].push({
    key: 'kaishi',
    label: '开始震动',
    params: [
        {
            key: 'time',
            label: '时长(ms)',
            valueType: 'number',
            defaultValue: 100,
        },
    ],
})

types['methods'].push({
    key: 'kaishiforlian',
    label: '连续震动',
    params: [
        {
            key: 'time',
            label: '时长(ms)',
            valueType: 'string',
            defaultValue: '100,50,100',
        },
    ],
})
exports.types = types;
exports.widget = Widget;
