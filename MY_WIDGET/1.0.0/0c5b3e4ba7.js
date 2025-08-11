const types = {
    isInvisibleWidget: true,
    type: "MY_WIDGET",
    icon: "",
    title: "云数据更改",
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
    label: '更改数据',
    params: [
      {
          key: 'paramName',
          label: '数据序列号及更改内容',
          valueType: 'string',
          defaultValue: '1,你好',
      },],

})
Widget.prototype.methodName = function (paramName,) {

}
exports.types = types;
exports.widget = Widget;
