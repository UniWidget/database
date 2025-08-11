const axios = require('axios');

const types = {
    isInvisibleWidget: true,
    type: "MATH_ONN_WIDGET",
    icon: "https://creation.codemao.cn/716/appcraft/IMAGE_xoGTzKGMjo_1657259772965",
    title: "数据",
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
    key: 'str',
    label: '多行输入',
    params: [
      {
          key: 'text',
          label: '文本',
          valueType: 'multilineString',
      checkType: 'string',
          defaultValue: '文本',
      },],
    valueType: 'string',
    blockOptions: {
    color: '#ff6600',
    icon: 'https://creation.codemao.cn/716/appcraft/IMAGE_sQOzX3ATMm_1657259770259',
    generateBlock: true,
    inputsInline: false,
    space: 16,
},
})
Widget.prototype.str = function (text,) {
      return text;
}
types['methods'].push({
    key: 'j2',
    label: '转2进制',
    params: [
      {
          key: 'num',
          label: '数字',
          valueType: 'number',
          defaultValue: 2,
      },],
    valueType: 'number',
    blockOptions: {
    color: '#ff6600',
    icon: 'https://creation.codemao.cn/716/appcraft/IMAGE_sQOzX3ATMm_1657259770259',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.j2 = function (num,) {
      return ((num).toString(2));
}
types['methods'].push({
    key: 'j3',
    label: '转3进制',
    params: [
      {
          key: 'num',
          label: '数字',
          valueType: 'number',
          defaultValue: 3,
      },],
    valueType: 'number',
    blockOptions: {
    color: '#ff6600',
    icon: 'https://creation.codemao.cn/716/appcraft/IMAGE_sQOzX3ATMm_1657259770259',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.j3 = function (num,) {
      return ((num).toString(3));
}
types['methods'].push({
    key: 'j5',
    label: '转5进制',
    params: [
      {
          key: 'num',
          label: '数字',
          valueType: 'number',
          defaultValue: 5,
      },],
    valueType: 'number',
    blockOptions: {
    color: '#ff6600',
    icon: 'https://creation.codemao.cn/716/appcraft/IMAGE_sQOzX3ATMm_1657259770259',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.j5 = function (num,) {
      return ((num).toString(5));
}
types['methods'].push({
    key: 'j20',
    label: '转回20进制',
    params: [
      {
          key: 'num',
          label: '数字',
          valueType: 'number',
          defaultValue: 20,
      },],
    valueType: 'number',
    blockOptions: {
    color: '#ff6600',
    icon: 'https://creation.codemao.cn/716/appcraft/IMAGE_sQOzX3ATMm_1657259770259',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.j20 = function (num,) {
      return ((num).toString(20));
}
types['methods'].push({
    key: 'j32',
    label: '转回32进制',
    params: [
      {
          key: 'num',
          label: '数字',
          valueType: 'number',
          defaultValue: 32,
      },],
    valueType: 'number',
    blockOptions: {
    color: '#ff6600',
    icon: 'https://creation.codemao.cn/716/appcraft/IMAGE_sQOzX3ATMm_1657259770259',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.j32 = function (num,) {
      return ((num).toString(32));
}
types['methods'].push({
    key: 'j0',
    label: '转回10进制',
    params: [
      {
          key: 'num',
          label: '数字',
          valueType: 'number',
          defaultValue: 0,
      },],
    valueType: 'number',
    blockOptions: {
    color: '#ff6600',
    icon: 'https://creation.codemao.cn/716/appcraft/IMAGE_sQOzX3ATMm_1657259770259',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.j0 = function (num,) {
      return ((num).toString(10));
}
exports.types = types;
exports.widget = Widget;
