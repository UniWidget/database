/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

const types = {
  isInvisibleWidget: false,
  type: "ADVANCED_VISIBLE_LIST_WIDGET",
  icon: "https://example.cn",
  title: "高级可见列表控件",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: "title",
      label: "标题",
      valueType: "string",
      defaultValue: "列表标题",
    },
    {
      key: "itemCount",
      label: "项数",
      valueType: "number",
      defaultValue: 3,
    },
    {
      key: "itemContents",
      label: "项内容",
      valueType: "string",
      defaultValue: "Item 1,Item 2,Item 3",
    },
    {
      key: "itemStyles",
      label: "项样式",
      valueType: "string",
      defaultValue: "",
    },
  ],
  methods: [],
  events: [
    {
      key: "onItemClick",
      label: "项点击",
      params: [
        {
          key: "itemIndex",
          label: "项索引",
          valueType: "number",
        },
      ],
    },
  ],
};

class AdvancedVisibleListWidget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.itemCount = props.itemCount;
    this.itemContents = props.itemContents.split(",");
    this.itemStyles = this.parseItemStyles(props.itemStyles);
  }

  parseItemStyles(itemStylesStr) {
    if (!itemStylesStr) return {};
    const itemStyles = {};
    const itemStylesList = itemStylesStr.split(",");
    itemStylesList.forEach((itemStyle) => {
      const [itemIndex, style] = itemStyle.split(":");
      itemStyles[parseInt(itemIndex)] = style;
    });
    return itemStyles;
  }

  handleItemClick = (itemIndex) => {
    this.emit("onItemClick", itemIndex);
  };

  render() {
    return (
      <div>
        <h2>{this.title}</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {Array.from({ length: this.itemCount }, (_, itemIndex) => {
            const itemStyle = this.itemStyles[itemIndex] || {};
            return (
              <li
                key={itemIndex}
                style={{
                  background: itemStyle.backgroundColor || "transparent",
                  color: itemStyle.color || "black",
                  padding: "10px",
                  cursor: "pointer",
                  border: "1px solid #ccc",
                }}
                onClick={() => this.handleItemClick(itemIndex)}
              >
                {this.itemContents[itemIndex]}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

exports.types = types;
exports.widget = AdvancedVisibleListWidget;
