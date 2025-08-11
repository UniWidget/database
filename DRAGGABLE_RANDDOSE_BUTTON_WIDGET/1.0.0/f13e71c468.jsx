/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

const types = {
  isInvisibleWidget: false,
  type: "DRAGGABLE_RANDDOSE_BUTTON_WIDGET",
  icon: "https://static.codemao.cn/coco/player/unstable/rJZhYkL32.image/jpeg?hash=FucXTDVfBJdoSStUZvqy24ILwabo",
  title: "Randdose按钮",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: 'label',
      label: '按钮标签',
      valueType: 'string',
      defaultValue: 'Button',
    },
  ],
  methods: [],
  events: [
    {
      key: 'onButtonClick',
      label: '按钮点击',
      params: [],
    },
  ],
};

class DraggableRanddoseButtonWidget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.label = props.label || 'Button';
  }

  handleButtonClick = () => {
    // 触发按钮点击事件
    this.emit('onButtonClick');
  };

  render() {
    return (
      <div
        onClick={this.handleButtonClick}
        style={{
          all: "unset",
          display: "flex",
          alignItems: "center",
          position: "relative",
          padding: "0.6em 2em",
          border: "mediumspringgreen solid 0.15em",
          borderRadius: "0.25em",
          color: "mediumspringgreen",
          fontSize: "1.5em",
          fontWeight: 600,
          overflow: "hidden",
          transition: "border 300ms, color 300ms",
          userSelect: "none",
          cursor: "pointer",
        }}
      >
        <p>{this.label}</p>
        <style>{`
          .button p {
            z-index: 1;
          }

          .button:hover {
            color: #212121;
          }

          .button:active {
            border-color: teal;
          }

          .button::after,
          .button::before {
            content: "";
            position: absolute;
            width: 9em;
            aspect-ratio: 1;
            background: mediumspringgreen;
            opacity: 50%;
            border-radius: 50%;
            transition: transform 500ms, background 300ms;
          }

          .button::before {
            left: 0;
            transform: translateX(-8em);
          }

          .button::after {
            right: 0;
            transform: translateX(8em);
          }

          .button:hover:before {
            transform: translateX(-1em);
          }

          .button:hover:after {
            transform: translateX(1em);
          }

          .button:active:before,
          .button:active:after {
            background: teal;
          }
        `}</style>
      </div>
    );
  }
}

exports.types = types;
exports.widget = DraggableRanddoseButtonWidget;
