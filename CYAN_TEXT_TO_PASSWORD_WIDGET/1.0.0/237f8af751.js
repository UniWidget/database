var document = this.document;

const types = {
    isInvisibleWidget: true,
    type: "CYAN_TEXT_TO_PASSWORD_WIDGET",
    icon: "https://ocean.codemao.cn/appcraft/resource/icon/基础/编辑_2.svg",
    title: "输入框转密码框",
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
    key: 'text_to_password',
    label: '输入框转密码框',
    params: [
      {
          key: 'widget',
          label: '控件',
          valueType: 'string',
          defaultValue: 'INPUT_WIDGET',
      },],


})
Widget.prototype.text_to_password = function (widget,) {
      document.getElementById(widget).firstChild.firstChild.type="password";
}
types['methods'].push({
    key: 'password_to_text',
    label: '密码框转输入框',
    params: [
      {
          key: 'widget',
          label: '控件',
          valueType: 'string',
          defaultValue: 'INPUT_WIDGET',
      },],


})
Widget.prototype.password_to_text = function (widget,) {
      document.getElementById(widget).firstChild.firstChild.removeAttribute("type");
}
types['methods'].push({
    key: 'is_password',
    label: '是否为密码框',
    params: [
      {
          key: 'widget',
          label: '控件',
          valueType: 'string',
          defaultValue: 'INPUT_WIDGET',
      },],
    valueType: 'boolean',

})
Widget.prototype.is_password = function (widget,) {
      return (document.getElementById(widget).firstChild.firstChild.type == 'password');
}
types['methods'].push({
    key: 'is_password',
    label: '是否为输入框',
    params: [
      {
          key: 'widget',
          label: '控件',
          valueType: 'string',
          defaultValue: 'INPUT_WIDGET',
      },],
    valueType: 'boolean',

})
Widget.prototype.is_password = function (widget,) {
      return (document.getElementById(widget).firstChild.firstChild.type == 'text');
}
exports.types = types;
exports.widget = Widget;
