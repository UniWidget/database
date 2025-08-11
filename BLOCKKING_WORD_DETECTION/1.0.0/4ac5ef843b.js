var list, xx, j, i;



const types = {
    isInvisibleWidget: true,
    type: "BLOCKKING_WORD_DETECTION",
    icon: "",
    title: "屏蔽词检测",
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

types['properties'].push({
    key: 'list',
    label: '屏蔽词列表',
    valueType: 'string',
    defaultValue: 'tm,TM,Tm,tM',

})

types['properties'].push({
    key: 'text',
    label: '转换的字符',
    valueType: 'string',
    defaultValue: '**',

})

types['methods'].push({
    key: 'tihuan',
    label: '替换',
    params: [
      {
          key: 'xx',
          label: 'xx中的屏蔽词',
          valueType: 'string',
          defaultValue: "",
      },],
    valueType: 'string',

})
Widget.prototype.tihuan = function (xx,) {
      list = (this.list).split(',');
  xx = xx;
  var j_end = xx.length;
  var j_inc = 1;
  if (1 > j_end) {
    j_inc = -j_inc;
  }
  for (j = 1;j_inc >= 0 ? j <= j_end : j >= j_end;j += j_inc) {
    var i_end = list.length;
    var i_inc = 1;
    if (0 > i_end) {
      i_inc = -i_inc;
    }
    for (i = 0;i_inc >= 0 ? i <= i_end : i >= i_end;i += i_inc) {
      if ((xx.slice((j - 1), xx.length)).startsWith((list[(i - 1)]))) {
        xx = [xx.slice(0, j - 1),this.text,xx.slice(((j + list[(i - 1)].length) - 1), xx.length)].join('');
      }
    }
  }
  return xx;
}
exports.types = types;
exports.widget = Widget;
