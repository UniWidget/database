/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

const types = {
  type: 'QUILL_RICH_TEXT_WIDGET',
  icon: 'https://creation.codemao.cn/716/appcraft/IMAGE_FraESl3kt_1656573654713.svg',
  title: '富文本',
  platforms: ['web', 'android', 'ios'],
  isInvisibleWidget: false,
  isGlobalWidget: false,
  properties: [
    {
      key: 'content',
      label: '文本',
      valueType: 'richTextString',
      defaultValue:
        '<strong style="color: rgb(255, 255, 255); background-color: rgb(255, 153, 0);"><em>富文本</em></strong>',
      editorType: 'RichTextEditor',
    },
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: 160,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: '__height',
      label: '高度',
      valueType: 'number',
      defaultValue: 28,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: '__size',
      label: '',
      valueType: 'number',
      defaultValue: 100,
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
  events: [
    {
      key: 'onClick',
      label: '被点击',
      params: [],
    },
  ],
};

class QuillRichTextWidget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.content = props.content;
  }

  onClick = () => {
    this.emit('onClick');
  };

  render() {
    return (
      <div className="ql-snow" onClick={this.onClick}>
        <div
          dangerouslySetInnerHTML={{ __html: this.content }}
          className="ql-editor"
          style={{
            padding: '4px 8px',
          }}
        />
      </div>
    );
  }
}

exports.types = types;
exports.widget = QuillRichTextWidget;
