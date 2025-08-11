/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

var document = this.document;

const types = {
    isInvisibleWidget: false,
    type: "DRAGGABLE_ROUNDED_BUTTON_WIDGET",
    icon: "https://static.codemao.cn/coco/player/unstable/rJZhYkL32.image/jpeg?hash=FucXTDVfBJdoSStUZvqy24ILwabo",
    title: "可拖动圆角按钮",
    version: "1.0.0",
    isGlobalWidget: false,
    properties: [
        {
            key: 'left',
            label: 'X',
            valueType: 'number',
            defaultValue: 0,
            blockOptions: {
                generateBlock: false,
            },
        },
        {
            key: 'top',
            label: 'Y',
            valueType: 'number',
            defaultValue: 0,
            blockOptions: {
                generateBlock: false,
            },
        },
        {
            key: "text",
            label: "按钮内容",
            valueType: "string",
            defaultValue: "拖动按钮",
        },
        {
            key: "buttonStyle",
            label: "按钮样式",
            valueType: "string",
            defaultValue: "default",
        },
        {
            key: "buttonColor",
            label: "按钮颜色",
            valueType: "color",
            defaultValue: "#007BFF",
        },
        {
            key: "buttonTextColor",
            label: "按钮文本颜色",
            valueType: "color",
            defaultValue: "#FFFFFF",
        },
    ],
    methods: [],
    events: [
        {
            key: 'onPositionChange',
            label: '坐标变化',
            params: [
                {
                    key: 'left',
                    label: 'X',
                    valueType: 'number',
                },
                {
                    key: 'top',
                    label: 'Y',
                    valueType: 'number',
                },
            ],
        },
        {
            key: 'onClick',
            label: '点击事件',
            params: [],
        },
    ],
};

class DraggableRoundedButtonWidget extends VisibleWidget {
    constructor(props) {
        super(props);
        this.text = props.text;
        this.buttonStyle = props.buttonStyle;
        this.buttonColor = props.buttonColor;
        this.buttonTextColor = props.buttonTextColor;
        Object.assign(this, {
            dragging: false,
            left: props.left,
            top: props.top,
            offsetX: 0,
            offsetY: 0,
        });
    }

    handleMouseDown = (event) => {
        this.setProps({
            dragging: true,
            offsetX: event.nativeEvent.offsetX,
            offsetY: event.nativeEvent.offsetY,
        });

        document.addEventListener("mousemove", this.handleMouseMove);
        document.addEventListener("mouseup", this.handleMouseUp);
    };

    handleMouseMove = (event) => {
        if (this.dragging) {
            const left = event.clientX - this.offsetX;
            const top = event.clientY - this.offsetY;
            this.setProps({
                left,
                top,
            });

            // 触发坐标变化事件
            this.emit('onPositionChange', left, top);
        }
    };

    handleMouseUp = () => {
        this.setProps({
            dragging: false,
        });

        document.removeEventListener("mousemove", this.handleMouseMove);
        document.removeEventListener("mouseup", this.handleMouseUp);
    };

    handleClick = () => {
        // 触发点击事件
        this.emit('onClick');
    };

    render() {
        return (
            <button
                onMouseDown={this.handleMouseDown}
                onClick={this.handleClick}
                style={{
                    position: "fixed",
                    left: this.left + "px",
                    top: this.top + "px",
                    cursor: "grab",
                    fontSize: "16px",
                    padding: "10px 20px",
                    borderRadius: "10px",
                    border: "none",
                    background: this.buttonColor,
                    color: this.buttonTextColor,
                }}
            >
                {this.text}
            </button>
        );
    }
}

exports.types = types;
exports.widget = DraggableRoundedButtonWidget;
