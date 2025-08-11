const types = {
    isInvisibleWidget: true,
    type: "MY_WIDGET",
    icon: "",
    title: "云数据删除",
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
    label: '删除数据',
    params: [
      {
          key: 'paramName',
          label: '数据序列号',
          valueType: 'number',
          defaultValue: 1,
      },],

})
Widget.prototype.methodName = function (paramName,) {

}
exports.types = types;
exports.widget = Widget;
