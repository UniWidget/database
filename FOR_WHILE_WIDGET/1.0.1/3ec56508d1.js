var i, j;



const types = {
    isInvisibleWidget: true,
    type: "FOR_WHILE_WIDGET",
    icon: "https://ocean.codemao.cn/appcraft/resource/icon/媒体/循环.svg",
    title: "循环",
    version: "1.0.1",
    isGlobalWidget: false,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);

    }

}

types['events'].push({
    key: 't0ToCount_event',
    label: '每次重复',
    params: [],

})

types['events'].push({
    key: 'iToi_event',
    label: '每次遍历数字',
    params: [
      {
          key: 'number_param',
          label: '数字',
          valueType: 'number',
      },],

})

types['events'].push({
    key: 'jToj_event',
    label: '每次遍历列表',
    params: [
      {
          key: 'type_param',
          label: '当前',
          valueType: ['string','number','boolean','color','array','object'],
      },],

})

types['events'].push({
    key: 'while1_event',
    label: '每次满足时重复',
    params: [],

})

types['events'].push({
    key: 'while2_event',
    label: '每次满足时退出',
    params: [],

})

types['methods'].push({
    key: 't0ToCount',
    label: '重复执行',
    params: [
      {
          key: 'end_param',
          label: '次数',
          valueType: 'number',
          defaultValue: 0,
      },],


})
Widget.prototype.t0ToCount = function (end_param,) {
      for (var count = 0;count < end_param;count++) {
    this.emit("t0ToCount_event");}

}
types['methods'].push({
    key: 'iToi',
    label: '重复执行',
    params: [
      {
          key: 'start_param',
          label: '开始',
          valueType: 'number',
          defaultValue: 0,
      },
      {
          key: 'end_param',
          label: '结束',
          valueType: 'number',
          defaultValue: 0,
      },
      {
          key: 'interval_param',
          label: '间隔',
          valueType: 'number',
          defaultValue: 0,
      },],


})
Widget.prototype.iToi = function (start_param,end_param,interval_param,) {
      var i_inc = Math.abs(interval_param);
  if (start_param > end_param) {
    i_inc = -i_inc;
  }
  for (i = start_param;i_inc >= 0 ? i <= end_param : i >= end_param;i += i_inc) {
    this.emit("iToi_event"  , i);}

}
types['methods'].push({
    key: 'jToj',
    label: '重复执行',
    params: [
      {
          key: 'list_param',
          label: '列表',
          valueType: ['string','number','boolean','color','array','object'],
          defaultValue: [],
      },],


})
Widget.prototype.jToj = function (list_param,) {
      for (var j_index in list_param) {
    j = list_param[j_index];
    this.emit("jToj_event"  , j);}

}
types['methods'].push({
    key: 'while1',
    label: '重复执行',
    params: [
      {
          key: 'boolean_param',
          label: '满足时重复',
          valueType: 'boolean',
          defaultValue: true,
      },],


})
Widget.prototype.while1 = function (boolean_param,) {
      while (boolean_param) {
    this.emit("while1_event");}

}
types['methods'].push({
    key: 'while2',
    label: '重复执行',
    params: [
      {
          key: 'boolean_param',
          label: '满足时退出',
          valueType: 'boolean',
          defaultValue: true,
      },],


})
Widget.prototype.while2 = function (boolean_param,) {
      while (!boolean_param) {
    this.emit("while2_event");}

}
exports.types = types;
exports.widget = Widget;
