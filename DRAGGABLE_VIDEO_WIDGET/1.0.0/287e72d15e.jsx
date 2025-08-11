/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

var document = this.document;

const types = {
    isInvisibleWidget: false,
    type: "DRAGGABLE_VIDEO_WIDGET",
    icon: "https://static.codemao.cn/coco/player/unstable/rJZhYkL32.image/jpeg?hash=FucXTDVfBJdoSStUZvqy24ILwabo",
    title: "可拖动视频框",
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
            key: "videoUrl",
            label: "视频链接",
            valueType: "string",
            defaultValue: "https://www.example.com/video.mp4",
        },
        {
            key: "width",
            label: "宽度",
            valueType: "number",
            defaultValue: 300,
        },
        {
            key: "height",
            label: "高度",
            valueType: "number",
            defaultValue: 200,
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

class DraggableVideoWidget extends VisibleWidget {
    constructor(props) {
        super(props);
        this.videoUrl = props.videoUrl;
        this.width = props.width;
        this.height = props.height;
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
                    width: this.width + "px",
                    height: this.height + "px",
                    cursor: "grab",
                }}
            >
                <video src={this.videoUrl} controls style={{ width: "100%", height: "100%" }} />
            </div>
        );
    }
}

exports.types = types;
exports.widget = DraggableVideoWidget;
