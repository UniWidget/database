// 控件类型定义
const types = {
  type: 'BUBBLE_LIST_BOX',
  icon: 'https://static.codemao.cn/coco/player/unstable/H1AVe_eo0.image/svg+xml?hash=Fsmdw_jCzXpdTXj_XevpOY18UMeH.svg',
  title: 'XC气泡列表框',
  version: '1.0.0',
  isInvisibleWidget: false,
  isGlobalWidget: false,
  properties: [
    {
      key: 'avatar',
      label: '头像',
      valueType: 'string',
      defaultValue: ''
    },
    {
      key: 'bubbleContent',
      label: '气泡内容',
      valueType: 'string',
      defaultValue: ''
    },
    {
      key: 'bubbleColor',
      label: '气泡颜色',
      valueType: 'color',
      defaultValue: '#ffffff'
    },
    {
      key: 'avatarSize',
      label: '头像大小',
      valueType: 'number',
      defaultValue: 50 // 头像大小默认为50px
    },
    {
      key: 'avatarRadius',
      label: '头像圆角',
      valueType: 'number',
      defaultValue: 50 // 头像圆角默认为50px
    },
    {
      key: 'bubbleContentSize',
      label: '气泡内容图片大小',
      valueType: 'number',
      defaultValue: 30 // 气泡内容图片大小默认为30px
    },
    {
      key: 'bubbleContentOpacity',
      label: '气泡内容不透明度',
      valueType: 'number',
      defaultValue: 0.5 // 气泡内容不透明度默认为50%
    }
  ],
  methods: [
    {
      key: 'quickCreateList',
      label: '快速生成一行头像列表气泡框',
      valueType: 'void',
      params: [
        {
          key: 'avatar',
          label: '头像',
          valueType: 'string',
          defaultValue: ''
        },
        {
          key: 'bubbleContent',
          label: '气泡内容',
          valueType: 'string',
          defaultValue: ''
        },
        {
          key: 'bubbleColor',
          label: '气泡颜色',
          valueType: 'color',
          defaultValue: '#ffffff'
        },
        {
          key: 'avatarSize',
          label: '头像大小',
          valueType: 'number',
          defaultValue: 50 // 头像大小默认为50px
        },
        {
          key: 'avatarRadius',
          label: '头像圆角',
          valueType: 'number',
          defaultValue: 50 // 头像圆角默认为50px
        },
        {
          key: 'bubbleContentSize',
          label: '气泡内容图片大小',
          valueType: 'number',
          defaultValue: 30 // 气泡内容图片大小默认为30px
        },
        {
          key: 'bubbleContentOpacity',
          label: '气泡内容不透明度',
          valueType: 'number',
          defaultValue: 0.5 // 气泡内容不透明度默认为50%
        }
      ],
      blockOptions: {
        color: '#ffcc33',
        icon: '无',
        generateBlock: true,
        inputsInline: false,
        space: 16
      }
    }
  ],
  events: [
    {
      key: 'onAvatarClick',
      label: '头像被点击',
      valueType: 'void',
      params: []
    }
  ]
};

  // 控件实体定义
  class Widget extends VisibleWidget {
    constructor(props) {
      super(props);
      this.avatar = props.avatar;
      this.bubbleContent = props.bubbleContent;
      this.bubbleColor = props.bubbleColor;
      this.avatarSize = props.avatarSize || 50; // 设置头像大小为50px
      this.avatarRadius = props.avatarRadius || 50; // 设置头像圆角为50px
      this.bubbleContentSize = props.bubbleContentSize || 30; // 设置气泡内容图片大小为30px
      this.bubbleContentOpacity = props.bubbleContentOpacity || 0.5; // 设置气泡内容默认不透明度为50%
    }

    quickCreateList(avatar, bubbleContent, bubbleColor, avatarSize, avatarRadius, bubbleContentSize, bubbleContentOpacity) {
      this.setProps({ avatar });
      this.setProps({ bubbleContent: bubbleContent });
      this.setProps({ bubbleColor });
      this.avatarSize = avatarSize;
      this.avatarRadius = avatarRadius;
      this.bubbleContentSize = bubbleContentSize;
      this.bubbleContentOpacity = bubbleContentOpacity;
    }

    render() {
      // 渲染单个头像及其气泡
      return (
        <div>
          < img src={this.avatar} alt="头像" style={{ width: this.avatarSize, height: this.avatarSize, borderRadius: `${this.avatarRadius}px` }} />
          <div style={{ backgroundColor: this.bubbleColor, position: 'absolute', top: `${this.avatarSize / 3}px`, left: '10px', borderRadius: `${this.avatarRadius}px` }}>
            {/* 气泡内容为半圆图片 */}
            < img src={this.bubbleContent} alt="气泡内容" style={{ width: `${this.bubbleContentSize}px`, height: `${this.bubbleContentSize}px`, borderRadius: '50%', opacity: this.bubbleContentOpacity }} />
          </div>
        </div>
      );
    }
  }

  // 修改 quickCreateList 方法以使用 let 调用
  Widget.prototype.quickCreateList = function (avatar, bubbleContent, bubbleColor, avatarSize, avatarRadius, bubbleContentSize, bubbleContentOpacity) {
    let widget = this; // 使用 let 关键字来保持作用域
    widget.setProps({ avatar });
    widget.setProps({ bubbleContent: bubbleContent });
    widget.setProps({ bubbleColor });
    widget.avatarSize = avatarSize;
    widget.avatarRadius = avatarRadius;
    widget.bubbleContentSize = bubbleContentSize;
    widget.bubbleContentOpacity = bubbleContentOpacity;
  };

  exports.types = types;
  exports.widget = Widget;