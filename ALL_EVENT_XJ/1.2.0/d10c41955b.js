var document = this.document
var window = this.window

const types = {
  type: 'ALL_EVENT_XJ',
  icon: 'https://ocean.codemao.cn/appcraft/resource/icon/基础/点击.svg',
  title: '任意控件事件',
  version: '1.2.0',
  author: 'XJ王大哥(2357942846)',
  isInvisibleWidget: true,
  isGlobalWidget: false,
  properties: [
    {
      key: 'tip',
      label: '使用教程',
      valueType: 'string',
      defaultValue: '请先使用F12获取获取控件ID，然后填入属性中。注意，要使用，请在屏幕中添加积木“当打开屏幕时：调用 任意控件事件 绑定事件”。',
      editorType: 'TextArea',
      generateBlock: false,
    },
    {
      key: 'ID',
      label: '控件ID',
      valueType: 'string',
      defaultValue: '',
    }
  ],
  methods: [
      {
        key: 'bindingEvents',
        label: '绑定事件',
        params: [],
      },
  ],
  events: [
    {
      key: 'onclick',
      label: '被点击',
      params: [
        {key:'X',label:'X',valueType:'number'},
        {key:'Y',label:'Y',valueType:'number'}
      ]
    },
    {
      key: 'onpointerdown',
      label: '被按下',
      params: [
        {key:'X',label:'X',valueType:'number'},
        {key:'Y',label:'Y',valueType:'number'}
      ]
    },
    {
      key: 'onpointerup',
      label: '被松开',
      params: [
        {key:'X',label:'X',valueType:'number'},
        {key:'Y',label:'Y',valueType:'number'}
      ]
    },
    {
      key: 'ondblclick',
      label: '被双击',
      params: [
        {key:'X',label:'X',valueType:'number'},
        {key:'Y',label:'Y',valueType:'number'}
      ]
    },
    {
      key: 'onpointermove',
      label: '被滑动',
      params: [
        {key:'X',label:'X',valueType:'number'},
        {key:'Y',label:'Y',valueType:'number'},
        {key:'movementX',label:'X滑动量',valueType:'number'},
        {key:'movementY',label:'Y滑动量',valueType:'number'}
      ]
    },
    {
      key: 'onpointerenter',
      label: '鼠标移入',
      params: []
    },
    {
      key: 'onpointerleave',
      label: '鼠标移出',
      params: []
    },
  ],
};

class Widget extends InvisibleWidget {
  constructor(props) {
    super(props)
    this.ID = props.ID
    this.down = false
  }

  bindingEvents = () => {
    const myWidget = document.getElementById(this.ID)
    myWidget.onclick = e => this.emit('onclick',e.x,e.y)
    myWidget.onpointerdown = e => {
      this.emit('onpointerdown',e.x,e.y)
      this.down = true
    }
    myWidget.onpointerup = e => {
      this.emit('onpointerup',e.x,e.y)
      this.down = false
    }
    myWidget.ondblclick = e => this.emit('ondblclick',e.x,e.y)
    myWidget.onpointermove = e => {if (this.down) this.emit('onpointermove',e.x,e.y,e.movementX,e.movementY)}
    myWidget.onpointerenter = e => this.emit('onpointerenter')
    myWidget.onpointerleave = e => this.emit('onpointerleave')
  }

}

exports.types = types
exports.widget = Widget