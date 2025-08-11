var ztype;



const types = {
  isInvisibleWidget: false,
  type: "ZDWORD_HAOZI_WIDGET",
  icon: "https://ocean.codemao.cn/appcraft/resource/icon/基础/菜单.svg",
  title: "折叠文本框",
  version: "1.0.0",
  isGlobalWidget: false,
  hasAnyWidget:true,
  properties: [
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: 280,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: '__height',
      label: '高度',
      valueType: 'number',
      defaultValue: 80,
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
    this.wc = '点击有惊喜';
  this.nc = 'CoCo-让世界没有难做的App</br>控件由耗子制作';
  ztype = '折叠';

  }
  render() {
    return(
      React.createElement("div", {dangerouslySetInnerHTML: {__html: (['<details>','<summary>',this.wc,'</summary>',this.nc,'</details>'].join(''))}}, null)
  );

  }
}

types['properties'].push({
    key: 'wc',
    label: '外层文本',
    valueType: 'string',
    defaultValue: '点击有惊喜',

})

types['properties'].push({
    key: 'nc',
    label: '内层文本',
    valueType: 'string',
    defaultValue: 'CoCo-让世界没有难做的App',

})

types['methods'].push({
    key: 'qt',
    label: '生成嵌入式折叠文本',
    params: [
      {
          key: 'wcr',
          label: '外层文本',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 'ncr',
          label: '内层文本',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 'ztr',
          label: '状态',
          valueType: 'string',
          dropdown: [
    { label: '折叠', value: '折叠', },

    { label: '展开', value: '展开', },
  ],
      },

],
    valueType: 'string',

})
Widget.prototype.qt = function (wcr,ncr,ztr,) {
      if (ztr == '折叠') {
    return (['<details>','<summary>',wcr,'</summary>',ncr,'</details>'].join(''));} else if (ztr == '展开') {
    return (['<details open>','<summary>',wcr,'</summary>',ncr,'</details>'].join(''));}

}
exports.types = types;
exports.widget = Widget;
