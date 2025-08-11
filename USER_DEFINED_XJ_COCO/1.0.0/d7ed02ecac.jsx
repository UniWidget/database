const types = {
  type: "USER_DEFINED_XJ_COCO",
  icon: "https://ocean.codemao.cn/appcraft/resource/icon/媒体/磁带.svg",
  title: "自定义COCO",
  isInvisibleWidget: false,
  isGlobalWidget: false,
  properties: [
    {
    key: 'tip',
    label: '提示及原理',
    valueType: 'string',
    defaultValue: '本控件通过CSS通配选择器修改所有元素的样式，如网页白屏，可能是CSS样式造成的，可尝试在F12中删除带有通配(*)选择器的样式。',
    editorType: 'TextArea',
    generateBlock: false,
    },
    {
      key: 'disablingModifications',
      label: '禁用所有修改',
      valueType: 'boolean',
      defaultValue: 1,
    },
    {
      key: 'color',
      label: '文本颜色(color)',
      valueType: 'color',
      defaultValue: '',
    },
    {
      key: 'background',
      label: '背景颜色(background)',
      valueType: 'color',
      defaultValue: '',
    },
    {
      key: 'myopacity',
      label: '不透明度(opacity)',
      valueType: 'number',
      defaultValue: '',
    },
    {
      key: 'userDefined',
      label: '自定义CSS',
      valueType: 'string',
      defaultValue: '',
      editorType: 'TextArea',
    }
  ],
  methods: [],
  events: [],
};

class Widget extends VisibleWidget {
  constructor(props) {
    super(props)
    this.disablingModifications = props.disablingModifications
    this.color = props.color
    this.background = props.background
    this.myopacity = props.myopacity
    this.userDefined = props.userDefined
  }

  render() {
      if(!this.disablingModifications){
      return(
        React.createElement("div", {dangerouslySetInnerHTML: {__html: (`<style>*{color:${this.color};background:${this.background};opacity:${this.myopacity};${this.userDefined}}</style>`)}}, null)
      )}
  }
}

exports.types = types
exports.widget = Widget