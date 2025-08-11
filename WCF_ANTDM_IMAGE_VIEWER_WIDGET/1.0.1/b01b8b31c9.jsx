const antd = require('antd-mobile');

const types = {
  type: "WCF_ANTDM_IMAGE_VIEWER_WIDGET",
  icon: "https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg",
  title: "Antd-mobile图片查看器",
  version: "1.0.1",
  docs: {url:"https://mobile.ant.design/zh/components/image-viewer"},
  isInvisibleWidget: false,
  isGlobalWidget: false,
  properties: [
    {
      key: 'images',
      label: '图片列表',
      valueType: 'string',
      defaultValue: "https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80,https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3113&q=80",
    },
    {
        key: 'isVisible',
        label: '是否显示',
        valueType: 'boolean',
        defaultValue: false,
    },
    {
        key: 'index',
        label: '默认显示张数（只能在不显示状态下动态定义）',
        valueType: 'number',
        defaultValue: 1,
    },
  ],
  methods: [],
  events: [
    {
        key: 'onClose',
        label: '被企图关闭（即被点击，图片不会自动关闭）',
        params: [],
    },
  ],
};

class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.images = props.images.split(",");
    this.isVisible = props.isVisible;
    this.index = props.index;
  }

  render() {
    if (this.isVisible.length==1){
        return(
            <>
                <antd.ImageViewer
                    image={this.images}
                    visible={this.isVisible}
                    onClose={() => 
                        this.emit("onClose")
                    }
                />
            </>
        )
    }else{
        return(
            <>
                <antd.ImageViewer.Multi
                    images={this.images}
                    visible={this.isVisible}
                    defaultIndex={this.index-1}
                    onClose={() => 
                        this.emit("onClose")
                    }
                />
            </>
        )
    }
  }
}

exports.types = types;
exports.widget = Widget;
