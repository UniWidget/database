const types = {
    isInvisibleWidget: true,
    type: "Text-removal_WIDGET",
    icon: "https://public.coco-central.cn/waddle/2/waddle2.svg",
    title: "文本除杂",
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
    key: 'removal1',
    label: '去除非数字字符',
    params: [
      {
          key: 'text',
          label: '文本',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: "",
      },],
    valueType: ['string','number','boolean','array','color','object',],

})
Widget.prototype.removal1 = function (text,) {
      return text.replace(/\D/g,'');
}
types['methods'].push({
    key: 'removal2',
    label: '去除数字',
    params: [
      {
          key: 'text',
          label: '文本',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: "",
      },],
    valueType: ['string','number','boolean','array','color','object',],

})
Widget.prototype.removal2 = function (text,) {
      return text.replace(/\d+/g,'');
}
exports.types = types;
exports.widget = Widget;