/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

const marked = require('marked');

const types = {
  type: "MARKDOWN_RUN_WIDGET",
  title: "Markdown运行框",
  icon: "https://example.cn/markdown_icon.png",
  version: "1.0.0",
  isInvisibleWidget: false,
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
    {
      key: "markdown",
      label: "Markdown内容",
      valueType: "string",
      defaultValue: "",
      blockOptions: {
        generateBlock: true,
      },
    },
  ],
};

class MarkdownRunWidget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.state = {
      markdown: props.markdown,
    };
  }

  handleChangeMarkdown = (event) => {
    const newMarkdown = event.target.value;
    this.setState({
      markdown: newMarkdown,
    });
  };

  render() {
    return (
      <div>
        <textarea
          style={{ width: "100%", height: "300px" }}
          value={this.state.markdown}
          onChange={this.handleChangeMarkdown}
        />
        <div
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginTop: "10px",
            minHeight: "100px",
          }}
          dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
        />
      </div>
    );
  }
}

exports.types = types;
exports.widget = MarkdownRunWidget;