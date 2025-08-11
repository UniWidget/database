/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

const types = {
    isInvisibleWidget: false,
    type: "NUMBER_INPUT_WIDGET",
    icon: "https://example.cn",
    title: "纯数字输入框",
    version: "1.0.0",
    isGlobalWidget: false,
    properties: [
        {
            key: "value",
            label: "数值",
            valueType: "number",
            defaultValue: 0,
        },
    ],
    methods: [],
    events: [
        {
            key: "onChange",
            label: "数值改变",
            params: [
                {
                    key: "value",
                    label: "数值",
                    valueType: "number",
                },
            ],
        },
    ],
};

class NumberInputWidget extends VisibleWidget {
    constructor(props) {
        super(props);
        this.value = props.value
    }

    handleChange = (event) => {
        var newValue = (event.target.value.match(/\d/g) || [""]).join(""); // Remove non-numeric characters
        newValue = newValue || "0";
        this.emit("onChange", parseInt(newValue, 10));
        this.setProps({ value: parseInt(newValue, 10) });
    };

    render() {
        return (
            <input
                type="text"
                value={String(this.value).match(/\d/g).join("")}
                onChange={this.handleChange}
                style={{ padding: "10px", marginBottom: "10px" }}
            />
        );
    }
}

exports.types = types;
exports.widget = NumberInputWidget;
