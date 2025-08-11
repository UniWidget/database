/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

const types = {
    isInvisibleWidget: false,
    type: "ADVANCED_VISIBLE_LIST_WIDGET",
    icon: "https://example.cn",
    title: "可见列表控件",
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
            key: "itemContents",
            label: "项内容",
            valueType: "string",
            defaultValue: "Item 1,Item 2,Item 3",
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
                    label: "行数",
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
        this.itemContents = props.itemContents;
    }


    handleItemClick = (itemIndex) => {
        this.emit("onItemClick", itemIndex + 1);
    };

    render() {
        return (
            <div>
                <h2>{this.title}</h2>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {this.itemContents.split(",").map((value, itemIndex) => {
                        return (
                            <li
                                key={itemIndex}
                                style={{
                                    background: "transparent",
                                    color: "black",
                                    padding: "10px",
                                    cursor: "pointer",
                                    border: "1px solid #ccc",
                                }}
                                onClick={() => this.handleItemClick(itemIndex)}
                            >
                                {value}
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
