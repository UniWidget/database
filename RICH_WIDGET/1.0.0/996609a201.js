const types = {
    isInvisibleWidget: true,
    type: "RICH_WIDGET",
    icon: "https://creation.codemao.cn/716/appcraft/IMAGE_FraESl3kt_1656573654713.svg",
    title: "富文本辅助",
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
    key: 'richTextString',
    label: '',
    params: [
      {
          key: 'TextString',
          label: '',
          valueType: 'richTextString',
          defaultValue: '<strong style="color: rgb(255, 255, 255); background-color: rgb(255, 153, 0);"><em>富文本</em></strong>',
      },],
    valueType: 'richTextString',

})
Widget.prototype.richTextString = function (TextString,) {
      return TextString;
}
exports.types = types;
exports.widget = Widget;
