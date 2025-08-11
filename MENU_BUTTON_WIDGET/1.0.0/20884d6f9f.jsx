/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

const types = {
    isInvisibleWidget: false,
    type: "MENU_BUTTON_WIDGET",
    icon: "https://static.codemao.cn/coco/player/unstable/rJZhYkL32.image/jpeg?hash=FucXTDVfBJdoSStUZvqy24ILwabo",
    title: "Menu按钮",
    version: "1.0.0",
    isGlobalWidget: false,
    properties: [],
    methods: [],
    events: [
        {
            key: 'onClick',
            label: '被点击',
            params: [],
        },
    ],
};

class MenuButtonWidget extends VisibleWidget {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.emit('onClick');
    };

    render() {
        return (
            <button className="btn" onClick={this.handleClick} style={{
                width: "150px",
                height: "50px",
                borderRadius: "5px",
                border: "none",
                transition: "all 0.5s ease-in-out",
                fontSize: "20px",
                fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                background: "#040f16",
                color: "#f5f5f5",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
            }}>
                <span className="icon" style={{
                    position: "absolute",
                    height: "40px",
                    width: "70px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "all 0.5s",
                }}>
                    <svg viewBox="0 0 175 80" width="40" height="40">
                        <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                        <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                        <rect y="60" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                    </svg>
                </span>
                <span className="text" style={{
                    transform: "translateX(55px)",
                    transition: "all 0.5s",
                }}>MENU</span>
            </button>
        );
    }
}

exports.types = types;
exports.widget = MenuButtonWidget;
