//制作：树林林林
//此版本为低配版

const antd = require('antd-mobile')
var document = this.document

const types = {
    isInvisibleWidget: false,
    type: "antd_NoticeBar",
    icon: "https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg",
    title: "Antd_NoticeBar 通告栏",
    version: "1.0.0",
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
        defaultValue: 150,
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
      //this.closeable=props.closeable;
    this.color=props.color;
    this.content=props.content;
    this.delay=props.delay;
    //this.extra=props.extra;
    this.icon=props.icon;
    /*this.speed=props.speed;
    this.wrap=props.wrap;
    this.backgroundcolor=props.backgroundcolor;
    this.bordercolor=props.bordercolor;
    this.fontsize=props.fontsize;
    this.height=props.height;
    this.iconfontsize=props.iconfontsize;
    this.textcolor=props.textcolor;*/
  
    }
    render() {
                return(
                  <>
                      <antd.NoticeBar
                          content={this.content}
                          color={this.color}
                          closeable={false}
                          delay={this.delay}
                          icon={this.icon}
                          onClose={() => this.emit('onClose')}
                          />
                  </>
                );
    }
  }
  /*
  types['properties'].push({
    key: 'backgroundcolor',
    label: '背景颜色',
    valueType: 'string',
    defaultValue: "#ababab",

})
types['properties'].push({
  key: 'bordercolor',
  label: '边框颜色',
  valueType: 'string',
  defaultValue: "#999999",

})
types['properties'].push({
  key: 'fontsize',
  label: '文字字号',
  valueType: 'string',
  defaultValue: "15px",

})
types['properties'].push({
  key: 'height',
  label: '整体高度',
  valueType: 'string',
  defaultValue: "40px",

})
types['properties'].push({
  key: 'iconfontsize',
  label: '左侧图标的字号',
  valueType: 'string',
  defaultValue: "18px",

})
types['properties'].push({
  key: 'textcolor',
  label: '文字颜色',
  valueType: 'string',
  defaultValue: "#ffffff",

})*/
  types['methods'].push({
    key: 'showNoticeBar',
    label: '弹出通告栏',
    params: [/*
      {
          key: 'closeable',
          label: '是否可关闭',
          valueType: 'boolean',
          defaultValue: false,
      },*/
      {
          key: 'color',
          label: '通告栏类型',
          valueType: 'string',
          dropdown: [
    { label: 'default', value: 'default', },

    { label: 'alert', value: 'alert', },

    { label: 'error', value: 'error', },

    { label: 'info', value: 'info', },
  ],
      },


      {
          key: 'content',
          label: '公告内容',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 'delay',
          label: '开始滚动的延迟，单位 ms',
          valueType: 'number',
          defaultValue: 2000,
      },
      {
          key: 'icon',
          label: '左侧广播图标',
          valueType: 'string',
          defaultValue: "",
      },/*
      {
          key: 'MYstyle',
          label: '自定义样式',
          valueType: 'boolean',
          defaultValue: false,
      },*/
    ],

    blockOptions: {
    color: '#ffbb55',
    icon: '无',
    generateBlock: true,
    inputsInline: false,
    space: 16,
},
})
Widget.prototype.showNoticeBar = function (closeable,color,content,delay,extra,icon,speed,wrap,MYstyle,) {
      //this.setProps({ 'closeable': closeable });
  this.setProps({ 'color': color });
  this.setProps({ 'content': content });
  this.setProps({ 'delay': delay });
  this.setProps({ 'MYstyle': MYstyle });
  if (icon != ''){this.setProps({ 'icon': icon });}
  

}
types['events'].push({
  key: 'onClose',
  label: '被关闭',
  params: [],

})
  exports.types = types;
  exports.widget = Widget;
  