const types = {
  isInvisibleWidget: false,
  type: "MARQUEE_HAOZI",
  icon: "https://ocean.codemao.cn/appcraft/resource/icon/社交/派对.svg",
  title: "滚动元素-特效必备",
  version: "1.0.1",
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: 200,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: '__height',
      label: '高度',
      valueType: 'number',
      defaultValue: 300,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: '__size',
      label: '',
      valueType: 'number',
      defaultValue: 0,
      readonly: true,
      blockOptions: {
        setter: {
          keys: ['__height', '__width'],
        },
        getter: {
          keys: ['__height', '__width'],
        },
      },
    },
  ],
  methods: [],
  events: [],
};

class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.__width = props.__width;
    this.__height = props.__height;
    this.directionend = 'down';
  this.behaviorend = 'alternate';
  this.loopend = '-1';
  this.scrollamountend = '6';
  this.scrolldelayend = '85';
  this.widthend = '250';
  this.heightend = '100';
  this.borderend = '" style="border:solid';
  this.nrend = 'CoCo-让世界没有难做的App';

  }
  render() {
    return(
      React.createElement("div", {dangerouslySetInnerHTML: {__html: (['<marquee direction="',this.directionend,'" behavior="',this.behaviorend,'" loop="',this.loopend,'" scrollamount="',this.scrollamountend,'" scrolldelay="',this.scrolldelayend,'" width"',this.widthend,'" height="',this.heightend,this.borderend,'">',this.nrend,'</marquee>'].join(''))}}, null)
  );

  }
}

types['methods'].push({
    key: 'shezhi',
    label: '滚动',
    params: [
      {
          key: 'nr',
          label: '内容为',
          valueType: 'string',
          defaultValue: '内容（可用HTML元素）',
      },
      {
          key: 'direction',
          label: '滚动方向为',
          valueType: 'string',
          dropdown: [
    { label: '向左', value: '向左', },

    { label: '向右', value: '向右', },

    { label: '向上', value: '向上', },

    { label: '向下', value: '向下', },
  ],
      },


      {
          key: 'behavior',
          label: '滚动方式为',
          valueType: 'string',
          dropdown: [
    { label: '反复单向滚动', value: '反复单向滚动', },

    { label: '来回反复反弹滚动', value: '来回反复反弹滚动', },

    { label: '滚动至底停止', value: '滚动至底停止', },
  ],
      },


      {
          key: 'loop',
          label: '滚动次数（连续滚动则为-1）',
          valueType: 'number',
          defaultValue: '-1',
      },
      {
          key: 'scrollamount',
          label: '每次滚动时移动的长度',
          valueType: 'number',
          defaultValue: '6',
      },
      {
          key: 'scrolldelay',
          label: '每次滚动时的时间间隔（毫秒）',
          valueType: 'number',
          defaultValue: '85',
      },
      {
          key: 'height',
          label: '高度',
          valueType: 'number',
          defaultValue: '200',
      },
      {
          key: 'width',
          label: '宽度',
          valueType: 'number',
          defaultValue: '200',
      },
      {
          key: 'border',
          label: '边框',
          valueType: 'string',
          dropdown: [
    { label: '假', value: '假', },

    { label: '真', value: '真', },
  ],
      },

],

    blockOptions: {
    color: '#663366',
    icon: '无',
    generateBlock: true,
    inputsInline: false,
    space: 16,
},
})
Widget.prototype.shezhi = function (nr,direction,behavior,loop,scrollamount,scrolldelay,height,width,border,) {
      this.setProps({ 'nrend': nr });
  this.setProps({ 'loopend': loop });
  this.setProps({ 'scrollamountend': scrollamount });
  this.setProps({ 'scrolldelayend': scrolldelay });
  this.setProps({ 'heightend': height });
  this.setProps({ 'widthend': width });
  if (border == '真') {
    this.setProps({ 'borderend': '" style="border:solid' });
  }
  if (border == '假') {
    this.setProps({ 'borderend': '' });
  }
  if (direction == '向左') {
    this.setProps({ 'directionend': 'left' });
  }
  if (direction == '向右') {
    this.setProps({ 'directionend': 'right' });
  }
  if (direction == '向上') {
    this.setProps({ 'directionend': 'up' });
  }
  if (direction == '向下') {
    this.setProps({ 'directionend': 'down' });
  }
  if (behavior == '反复单向滚动') {
    this.setProps({ 'behaviorend': 'scroll' });
  }
  if (behavior == '来回反复反弹滚动') {
    this.setProps({ 'behaviorend': 'alternate' });
  }
  if (behavior == '滚动至底停止') {
    this.setProps({ 'behaviorend': 'slide' });
  }

}
types['methods'].push({
    key: 'shezhi2',
    label: '内嵌滚动元素',
    params: [
      {
          key: 'nr2',
          label: '内容为',
          valueType: 'string',
          defaultValue: '内容（可用HTML元素）',
      },
      {
          key: 'direction2',
          label: '滚动方向为',
          valueType: 'string',
          dropdown: [
    { label: '向左', value: '向左', },

    { label: '向右', value: '向右', },

    { label: '向上', value: '向上', },

    { label: '向下', value: '向下', },
  ],
      },


      {
          key: 'behavior2',
          label: '滚动方式为',
          valueType: 'string',
          dropdown: [
    { label: '反复单向滚动', value: '反复单向滚动', },

    { label: '来回反复反弹滚动', value: '来回反复反弹滚动', },

    { label: '滚动至底停止', value: '滚动至底停止', },
  ],
      },


      {
          key: 'loop2',
          label: '滚动次数（连续滚动则为-1）',
          valueType: 'number',
          defaultValue: '-1',
      },
      {
          key: 'scrollamount2',
          label: '每次滚动时移动的长度',
          valueType: 'number',
          defaultValue: '6',
      },
      {
          key: 'scrolldelay2',
          label: '每次滚动时的时间间隔（毫秒）',
          valueType: 'number',
          defaultValue: '85',
      },],
    valueType: 'string',
    blockOptions: {
    color: '#6633ff',
    icon: '无',
    generateBlock: true,
    inputsInline: false,
    space: 16,
    line:"返回代码（须搭配富文本控件）"
},
})
Widget.prototype.shezhi2 = function (nr2,direction2,behavior2,loop2,scrollamount2,scrolldelay2,) {
      this.nrend2 = nr2;
  this.loopend2 = loop2;
  this.scrollamountend2 = scrollamount2;
  this.scrolldelayend2 = scrolldelay2;
  if (direction2 == '向左') {
    this.setProps({ 'directionend2': 'left' });
  }
  if (direction2 == '向右') {
    this.setProps({ 'directionend2': 'right' });
  }
  if (direction2 == '向上') {
    this.setProps({ 'directionend2': 'up' });
  }
  if (direction2 == '向下') {
    this.setProps({ 'directionend2': 'down' });
  }
  if (behavior2 == '反复单向滚动') {
    this.setProps({ 'behaviorend2': 'scroll' });
  }
  if (behavior2 == '来回反复反弹滚动') {
    this.setProps({ 'behaviorend2': 'alternate' });
  }
  if (behavior2 == '滚动至底停止') {
    this.setProps({ 'behaviorend2': 'slide' });
  }
  return (['<marquee direction="',this.directionend2,'" behavior="',this.behaviorend2,'" loop="',this.loopend2,'" scrollamount="',this.scrollamount2,'" scrolldelay="',this.scrolldelayend2,'">',this.nrend2,'</marquee>'].join(''));
}
exports.types = types;
exports.widget = Widget;
