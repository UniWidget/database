//制作：ZX

const antd = require('antd-mobile')
var document = this.document

const types = {
  isInvisibleWidget: false,
  type: "antd_Modal_ZX",
  icon: "",
  title: "antd_Modal 对话框",
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
    // this.fallback = props.fallback;
    // this.lazy = props.lazy;
    // this.data = props.data;

  }
}
types['methods'].push({
  key: 'showModalbutton',
  label: '按钮弹窗',
  params: [
    {
      key: 'title',
      label: '标题',
      valueType: 'string',
      defaultValue: '',
    },
    {
      key: 'text',
      label: '文本',
      valueType: 'string',
      defaultValue: '',
    },
    {
      key: 'photo',
      label: '图片',
      valueType: 'string',
      defaultValue: '',
    },
    {
      key: 'buttonone',
      label: '按钮一名称',
      valueType: 'string',
      defaultValue: '',
    },
    {
      key: 'buttontwo',
      label: '按钮二名称',
      valueType: 'string',
      defaultValue: '',
    }
  ],


})

types['methods'].push({
  key: 'showModalinput',
  label: '输入框弹窗',
  params: [
    {
      key: 'title',
      label: '标题',
      valueType: 'string',
      defaultValue: '',
    },
    {
      key: 'text',
      label: '文本',
      valueType: 'string',
      defaultValue: '',
    },
    {
      key: 'photo',
      label: '图片',
      valueType: 'string',
      defaultValue: '',
    },
  ],


})

Widget.prototype.showModalinput = async function (title, text, photo) {
  antd.Modal.alert({
    title: title,
    confirmText: '确定',
    content: (
      <>
        <div>{text}</div>
        <antd.Input id="zxshowModalinputsinput" placeholder='请输入内容' clearable />
      </>
    ),
    image: photo,
    closeOnMaskClick: true,
    closeOnAction: true,
    onConfirm: () => {
      this.emit('onInput', document.getElementById('zxshowModalinputsinput').value)
    },
    onClose: () => {
      this.emit('close');
    }

  })

}
Widget.prototype.showModalbutton = function (title, text, photo, buttonone, buttontwo) {
  antd.Modal.show({
    title: title,
    content: text,
    image: photo,
    closeOnMaskClick: true,
    closeOnAction: true,
    actions: [
      {
        key: 'one',
        text: buttonone,
        primary: true,
      },
      {
        key: 'two',
        text: buttontwo,

      },
    ],
    onAction: (a) => {
      this.emit('onClick', a.text);
    },
    onClose: () => {
      this.emit('close');
    }

  })
}

types['events'].push({
  key: 'onClick',
  label: '按钮被点击',
  params: [
    {
      key: 'text',
      label: '文本',
      valueType: 'string',
    },
  ],

})

types['events'].push({
  key: 'onInput',
  label: '输入完成',
  params: [
    {
      key: 'inputtext',
      label: '输入文本',
      valueType: 'string',
    },
  ],

})
types['events'].push({
  key: 'close',
  label: '被关闭',
  params: [
  ],

})
exports.types = types;
exports.widget = Widget;
