var document = this.document

const types = {
  type: "IFRAME_XJ",
  icon: "icon-widget-web-view",
  title: "高级网页框_测试",
  version: '1.1.0',
  author: 'XJ王大哥(2357942846)',
  isInvisibleWidget: false,
  isGlobalWidget: false,
  properties: [
    {
      key: 'tip',
      label: '提示',
      valueType: 'string',
      defaultValue: 'UA去这里头找：https://useragent.buyaocha.com/。如使用相关coco以外的网址，清将链接跨域化后再填入。',
      editorType: 'TextArea',
    },
    {
      key: 'url',
      label: '链接',
      valueType: 'string',
      defaultValue: '',
    },
    {
      key: 'UA',
      label: 'UA',
      valueType: 'string',
      defaultValue: '',
    },
  ],
  methods: [
    {
      key: 'initialize',
      label: '初始化',
      params: [],
    },
    {
      key: 'crossDomain',
      label: '跨域化',
      params: [{key:'url',label: '',valueType: 'string',}],
      valueType: 'number',
      tooltip: '填入：链接',
      blockOptions: {callMethodLabel:false},
    },
  ],
  events: []
}

class Widget extends VisibleWidget {
  constructor(props) {
    super(props)
    this.url = props.url
    this.UA = props.UA
  }

  crossDomain = url => 'https://coco.codemao.cn/http-widget-proxy/' + url
  initialize = () => {
    Object.defineProperty(document.getElementById("IFRAME_XJ_inner").contentWindow.navigator, 'userAgent', {
      value: this.UA,
      configurable: false,
      writable: false
    })
  }

  render() {
    return(
      React.createElement("iframe", {
        id: "IFRAME_XJ_inner",
        src: this.url,
        width: "100%",
        height: "100%",
        onLoad: this.onload.bind(this),
      }, null))
  }
}

types['events'].push({
  key: 'onload',
  label: '加载完成',
  params: [{key: 'url',label: '链接',valueType: 'string',}],
})

Widget.prototype.onload = function (event) {
  this.setProps({'url': event.target.contentWindow.location.href})
  this.emit("onload", event.target.contentWindow.location.href)
}

exports.types = types
exports.widget = Widget