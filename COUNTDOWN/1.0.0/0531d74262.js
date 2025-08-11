var end, Start;

// 开始计时器
function start_timer(end) {
  Start = (new Date().getTime());
  end = (typeof end === 'number' ? end : 0) + (new Date().getTime());
}

// 获取计时器
function timer_timer() {
  return end - Start;
}



const types = {
  isInvisibleWidget: true,
  type: "COUNTDOWN",
  icon: "icon-widget-timer",
  title: "倒计时1.0",
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
  key: 'start',
  label: '开始',

  params: [

  {
    key: 'start',
    label: '开始',
    valueType: 'string',
    dropdown: [
  	    { label: '开始', value: '开始', },
  ],
  },


  {
    key: 'time',
    label: '时间',
    valueType: 'number',
    defaultValue: 114514,
  },


  {
    key: 'unit',
    label: '单位',
    valueType: 'string',
    dropdown: [
  	    { label: '毫秒', value: '毫秒', },
    { label: '秒', value: '秒', },
    { label: '分', value: '分', },
    { label: '时', value: '时', },
  ],
  },


  ],
})
Widget.prototype.start = function (start,time,unit,) {
    if ((start) == '开始') {
    if ((unit) == '毫秒') {
      start_timer((time) * 1);
    } else if ((unit) == '秒') {
      start_timer((time) * 1000);
    } else if ((unit) == '分') {
      start_timer((time) * 60000);
    } else if ((unit) == '时') {
      start_timer((time) / 3600000);
    }
  }
;
}

types['methods'].push({
  key: 'return',
  label: '返回',
  valueType: 'number',
  params: [

  {
    key: 'return_',
    label: '单位',
    valueType: 'string',
    dropdown: [
  	    { label: '毫秒', value: '毫秒', },
    { label: '秒', value: '秒', },
    { label: '分', value: '分', },
    { label: '时', value: '时', },
  ],
  },


  ],
})
Widget.prototype.return = function (return_,) {
    if ((return_) == '毫秒') {
    return (timer_timer() / 1);} else if ((return_) == '秒') {
    return (timer_timer() / 1000);} else if ((return_) == '分') {
    return (timer_timer() / 60000);} else if ((return_) == '时') {
    return (timer_timer() / 3600000);}
;
}

exports.types = types;
exports.widget = Widget;
