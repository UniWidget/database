const types = {
    isInvisibleWidget: true,
    type: "MY_WIDGET",
    icon: "",
    title: "云数据存储",
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
    label: '储存数据',
    params: [
      {
          key: 'paramName',
          label: '',
          valueType: 'string',
          defaultValue: '1,2,3',
      },],

})
Widget.prototype.methodName = function (paramName,) {

}
exports.types = types;
exports.widget = Widget;
