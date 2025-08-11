var text_list, text_variables, number, Item;



const types = {
  isInvisibleWidget: true,
  type: "EMOJI",
  icon: "",
  title: "表情系统2",
  version: "2.0.0",
  isGlobalWidget: true,
  properties: [],
  methods: [],
  events: [],
};

class Widget extends InvisibleWidget {
  constructor(props) {
    super(props);
    text_list = [];
  text_variables = null;

  }

}

types['properties'].push({
  key: 'emoji_list',
  label: '表情列表',
  valueType: ['string','number','boolean','array','object',],
  defaultValue: [['标签', '图片', '宽度', '长度'], ['alt', 'src', 'width', 'height']],

})

types['methods'].push({
  key: 'recognizer_text',
  label: '识别文本',
  valueType: 'string',
  params: [

  {
    key: 'text',
    label: '文本',
    valueType: 'string',
    defaultValue: '控件由青B2la制作，唯一正版！[666][GREAT]',
  },


  ],
})
Widget.prototype.recognizer_text = function (text,) {
    text_list = [];
  var number_end = (text).length;
  var number_inc = 1;
  if (1 > number_end) {
    number_inc = -number_inc;
  }
  for (number = 1; number_inc >= 0 ? number <= number_end : number >= number_end; number += number_inc) {
    text_list.push((text).charAt((number - 1)));
  }
  var number_end2 = (text).length;
  var number_inc2 = 1;
  if (1 > number_end2) {
    number_inc2 = -number_inc2;
  }
  for (number = 1; number_inc2 >= 0 ? number <= number_end2 : number >= number_end2; number += number_inc2) {
    var Item_list = (this.emoji_list);
    for (var Item_index in Item_list) {
      Item = Item_list[Item_index];
      if ((text).slice((number - 1), number + (Item[0].length - 1)) == Item[0]) {
        var repeat_end = Item[0].length - 1;
        for (var count = 0; count < repeat_end; count++) {
          text_list.splice((number - 1), 1);
        }
        text_list[((number + 1) - 1)] = [(this.emoji_list)[0],'--><img src="',(this.emoji_list)[1],'" width="',(this.emoji_list)[2],'" height="',(this.emoji_list)[3],'"/>'].join('');
      }
    }
  }
  text_variables = null;
  for (var Item_index2 in text_list) {
    Item = text_list[Item_index2];
    text_variables = String(text_variables) + String(Item);
  }
  return text_variables;;
}

exports.types = types;
exports.widget = Widget;
