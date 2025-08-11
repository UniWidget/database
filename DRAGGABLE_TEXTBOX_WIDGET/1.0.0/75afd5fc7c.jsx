/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

var document = this.document;

const types = {
    isInvisibleWidget: false,
    type: "DRAGGABLE_TEXTBOX_WIDGET",
    icon: "https://static.codemao.cn/coco/player/unstable/rJZhYkL32.image/jpeg?hash=FucXTDVfBJdoSStUZvqy24ILwabo",
    title: "可拖动文本框",
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
            label: "文本内容",
            valueType: "string",
            defaultValue: "拖动我",
        },
        {
            key: "fontSize",
            label: "字体大小",
            valueType: "number",
            defaultValue: 16,
        },
        {
            key: "fontColor",
            label: "字体颜色",
            valueType: "color",
            defaultValue: "#000000",
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
    ],
};

class DraggableTextboxWidget extends VisibleWidget {
    constructor(props) {
        super(props);
        this.text = props.text;
        this.fontSize = props.fontSize;
        this.fontColor = props.fontColor;
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

    render() {
        return (
            <div
                onMouseDown={this.handleMouseDown}
                style={{
                    position: "fixed",
                    left: this.left + "px",
                    top: this.top + "px",
                    cursor: "grab",
                    fontSize: this.fontSize + "px",
                    color: this.fontColor,
                }}
            >
                {this.text}
            </div>
        );
    }
}

exports.types = types;
exports.widget = DraggableTextboxWidget;
