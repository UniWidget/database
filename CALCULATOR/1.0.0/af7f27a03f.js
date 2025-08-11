// 控件类型定义
const types = {
isInvisibleWidget: true,
type: "CALCULATOR",
icon: "https://static.codemao.cn/appcraft/extension-widgets/production/blink-button.svg",
title: "简易计算器",
version: "1.0.0",
isGlobalWidget: true,
docs: {
url: "https://codemao.yuque.com/kzbwh0/coco_guide/w-guide"
},
platforms: ["web", "android", "ios"],
properties: [],
methods: [],
events: [],
};

// 增加一个名为"calculator"的方法
types['methods'].push({
key: 'calculator',
label: '四则运算',
tooltip: '实现两个数的加减乘除运算',
blockOptions: {
color: '#cb0012',
},
params: [
{
key: 'num1',
label: '第一个数',
valueType: 'number',
defaultValue: 0,
},
{
key: 'operator',
label: '运算符',
valueType: 'string',
defaultValue: '+',
options: [
{value: '+', label: '+'},
{value: '-', label: '-'},
{value: '', label: ''},
{value: '/', label: '/'},
],
},
{
key: 'num2',
label: '第二个数',
valueType: 'number',
defaultValue: 0,
},
],
}, )

// 实现继承InvisibleWidget的控件类
class Widget extends InvisibleWidget {
constructor(props) {
super(props);
}

// 加减乘除运算的方法
calculator = (num1, operator, num2) => {
    let result;
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                this.widgetLog('除数不能为零！');
                return;
            }
            result = num1 / num2;
            break;
        default:
            this.widgetLog('不支持的运算符！');
            return;
    }
    this.widgetLog(`运算结果为 ${result}`);
}
}

// 暴露控件代码给Coco
exports.types = types;
exports.widget = Widget;