const types = {
    isInvisibleWidget: true,
    type: "MY_WIDGET",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "不一定可以的滑动控件",
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
    key: 'methodName',
    label: '手机向上滑动时',
    params: [],

    blockOptions: {
    color: '#ffbb55',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.methodName = function () {
      when_slide(up);
}
types['methods'].push({
    key: 'methodName',
    label: '手机向下滑动时',
    params: [],

    blockOptions: {
    color: '#ffbb55',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.methodName = function () {
      when_slide(down);
}
types['methods'].push({
    key: 'methodName',
    label: '手机向左滑动时',
    params: [],

    blockOptions: {
    color: '#ffbb55',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.methodName = function () {
      when_slide(left);
}
types['methods'].push({
    key: 'methodName',
    label: '当手机向右滑动时',
    params: [],

    blockOptions: {
    color: '#ffbb55',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.methodName = function () {
      when_slide(right);
}
exports.types = types;
exports.widget = Widget;
