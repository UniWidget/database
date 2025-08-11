//对接：明天的太阳
//封装：树林林林

const antd = require('antd-mobile')
var document = this.document

const types = {
    isInvisibleWidget: true,
    type: "MkMsg",
    icon: "https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg",
    title: "Toast消息提示",
    version: "1.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
          this.text=props.text;
  this.time=props.time;
  this.image=props.image;
  this.clickBackground=props.clickBackground;

    }

}


types['properties'].push({
    key: 'time',
    label: '显示时间',
    valueType: 'number',
    defaultValue: 2000,
    tooltip:'当显示时间为0时则不会自动消失，需要调用关闭Toast方法才能消失',

})

types['properties'].push({
    key: 'image',
    label: '图片',
    valueType: 'string',
    defaultValue: "",

})

types['properties'].push({
    key: 'clickBackground',
    label: '是否允许点击背景',
    valueType: 'boolean',
    defaultValue: true,
    tooltip:'选择“是”则会在Toast显示时无法操作屏幕'

})

types['methods'].push({
    key: 'showToast',
    label: '显示toast',
    params: [
        {
            key:'text',
            label:'消息',
            valueType:'string',
            defaultValue:'',
        },
      {
          key: 'imagedata',
          label: '图片类型',
          valueType: 'string',
          dropdown: [
    { label: '无', value: '无', },

    { label: 'success', value: 'success', },

    { label: 'fail', value: 'fail', },

    { label: 'loading', value: 'loading', },

    { label: '自定义', value: '自定义', },
  ],
      },


      {
          key: 'showPosition',
          label: '垂直方向显示位置',
          valueType: 'string',
          dropdown: [
    { label: 'top', value: 'top', },

    { label: 'bottom', value: 'bottom', },

    { label: 'center', value: 'center', },
  ],
      },

],


})
Widget.prototype.showToast = function (text,imagedata,showPosition,) {
    if (imagedata == '自定义') {
        antd.Toast.show({
            icon: React.createElement("img", { src: imagedata, alt: '', }, null),
            content: text,
            position: showPosition,
            maskClickable: this.clickBackground,
            duration: this.time,
        });
    } else if (imagedata == '无') {
        antd.Toast.show({
            content: text,
            position: showPosition,
            maskClickable: this.clickBackground,
            duration: this.time,
        });
    } else {
        antd.Toast.show({
            icon: imagedata,
            content: text,
            position: showPosition,
            maskClickable: this.clickBackground,
            duration: this.time,
        });
    }
}
types['methods'].push({
    key: 'clearToast',
    label: '关闭Toast',
    params: [],


})
Widget.prototype.clearToast = function () {
      antd.Toast.clear()
}
exports.types = types;
exports.widget = Widget;
