const types = {
    isInvisibleWidget: true,
    type: "super_comment",
    icon: "https://static.codemao.cn/coco/player/unstable/rkfWmo7os.image/svg+xml?hash=FsTiDXJOCxDEhmD1mHI3SoUebsZ_",
    title: "超级注释-V1.0.0",
    version: "1.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
          this.widgetLog('欢迎使用超级注释，作者：溪谷VALLEY，QQ：1426965319，个人主页：https://shequ.codemao.cn/user/6187018');

    }

}

types['methods'].push({
    key: 'comment1',
    label: '',
    params: [
      {
          key: 'paramName',
          label: '',
          valueType: 'string',
          defaultValue: '普通注释一',
      },],

    blockOptions: {
    color: '#ffbb55',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.comment1 = function (paramName,) {

}
types['methods'].push({
    key: 'comment2',
    label: '',
    params: [
      {
          key: 'paramName',
          label: '',
          valueType: 'string',
          defaultValue: '普通注释二',
      },],

    blockOptions: {
    color: "#82CBFA",
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 32,
},
})
Widget.prototype.comment2 = function (paramName,) {

}
types['methods'].push({
    key: 'a',
    label: '',
    params: [
      {
          key: 'paramName',
          label: '',
          valueType: 'string',
          defaultValue: '主要注释',
      },],

    blockOptions: {
    color: "#316CF4",
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.a = function (paramName,) {

}
types['methods'].push({
    key: 'b',
    label: '',
    params: [
      {
          key: 'paramName',
          label: '',
          valueType: 'string',
          defaultValue: '次要注释',
      },],

    blockOptions: {
    color: "#6E757C",
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.b = function (paramName,) {

}
types['methods'].push({
    key: 'c',
    label: '',
    params: [
      {
          key: 'paramName',
          label: '',
          valueType: 'string',
          defaultValue: '提示注释',
      },],

    blockOptions: {
    color: "#3F8357",
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.c = function (paramName,) {

}
types['methods'].push({
    key: 'd',
    label: '',
    params: [
      {
          key: 'paramName',
          label: '',
          valueType: 'string',
          defaultValue: '标记注释',
      },],

    blockOptions: {
    color: "#5DC7EC",
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.d = function (paramName,) {

}
types['methods'].push({
    key: 'e',
    label: '',
    params: [
      {
          key: 'paramName',
          label: '',
          valueType: 'string',
          defaultValue: '注意注释',
      },],

    blockOptions: {
    color: "#F6C344",
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.e = function (paramName,) {

}
types['methods'].push({
    key: 'f',
    label: '',
    params: [
      {
          key: 'paramName',
          label: '',
          valueType: 'string',
          defaultValue: '警告注释',
      },],

    blockOptions: {
    color: "#CB444A",
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.f = function (paramName,) {

}
types['methods'].push({
    key: 'g',
    label: '',
    params: [
      {
          key: 'paramName',
          label: '',
          valueType: 'string',
          defaultValue: '深色注释',
      },],

    blockOptions: {
    color: "#222529",
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.g = function (paramName,) {

}

/*make by cyan-b2la*/
; (function () {
    for (var i = 0; i < types['methods'].length; i++) {
        types['methods'][i]['blockOptions']['callMethodLabel'] = false;
    };
})();
/*
 功能：
 控件去掉调用标签
 使用方法：
 在控件方面加上这个代码即可
 切记：
 这段代码一定要在最后三行前面加上！
*/

exports.types = types;
exports.widget = Widget;
