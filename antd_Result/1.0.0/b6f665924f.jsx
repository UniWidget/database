//制作：树林林林

const antd = require('antd-mobile')
var document = this.document

const types = {
    isInvisibleWidget: false,
    type: "antd_Result",
    icon: "https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg",
    title: "Antd_Result 结果",
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
      this.image=props.image;
    this.Title=props.Title;
    this.Description=props.Description;
    this.Status=props.Status;
  
    }
    render() {
        return(
            <>
                <antd.Result
                    icon={this.image}
                    status={this.Status}
                    title={this.Title}
                    description={this.Description}
                />
            </>
    );
  
    }
  }
  
  types['methods'].push({
      key: 'showResult',
      label: '反馈结果',
      params: [
        {
            key: 'image',
            label: '图标',
            valueType: 'string',
            defaultValue: '',
        },
        {
            key: 'Title',
            label: '标题',
            valueType: 'string',
            defaultValue: "",
        },
        {
            key: 'Description',
            label: '描述',
            valueType: 'string',
            defaultValue: "",
        },
        {
            key: 'Status',
            label: '反馈状态',
            valueType: 'string',
            dropdown: [
      { label: 'success', value: 'success', },
  
      { label: 'error', value: 'error', },
  
      { label: 'info', value: 'info', },
  
      { label: 'waiting', value: 'waiting', },
  
      { label: 'warning', value: 'warning', },
    ],
        },
  
  ],
  
      blockOptions: {
      color: '#ffbb55',
      icon: '无',
      generateBlock: true,
      inputsInline: false,
      space: 16,
  },
  })
  Widget.prototype.showResult = function (image,Title,Description,Status,) {
        if (image == '') {
          this.setProps({ 'image': '' });
      this.setProps({ 'Title': Title });
      this.setProps({ 'Description': Description });
      this.setProps({ 'Status': Status });
    } else {
      this.setProps({ 'image': React.createElement("img", { src: image, alt: '', }, null) });
      this.setProps({ 'Title': Title });
      this.setProps({ 'Description': Description });
      this.setProps({ 'Status': Status });
    }
  
  }
  exports.types = types;
  exports.widget = Widget;
  