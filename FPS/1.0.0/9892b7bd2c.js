var fpsCounter = {
    startTime: 0,
    frameCount: 0,
    fps: 0,
    update: function (timestamp) {
        if (this.startTime === 0) {
            this.startTime = timestamp;
        } else {
            var elapsedTime = timestamp - this.startTime;
            if (elapsedTime >= 1000) {
                this.fps = this.frameCount;
                this.frameCount = 0;
                this.startTime = timestamp;
            }
        }
        this.frameCount++;
        console.log("FPS: " + this.fps);
        requestAnimationFrame(this.update.bind(this));
    }
};
requestAnimationFrame(fpsCounter.update.bind(fpsCounter));

const types = {
    isInvisibleWidget: true,
    type: "FPS",
    icon: "https://cdn.cocotais.cn/project/waddle-2/logo/waddle2-logo.svg",
    title: "帧率",
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

types['methods'].push({
    key: 'Get',
    label: '获取帧率',
    params: [],
    valueType: 'number'


})
Widget.prototype.Get = function () {
    return Number(fpsCounter.fps);
}

exports.types = types;
exports.widget = Widget;