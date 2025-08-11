/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

const types = {
    isInvisibleWidget: false,
    type: "FORWARD_INPUT_WIDGET",
    icon: "https://static.codemao.cn/coco/player/unstable/rJZhYkL32.image/jpeg?hash=FucXTDVfBJdoSStUZvqy24ILwabo",
    title: "前进输入框",
    version: "1.0.0",
    isGlobalWidget: false,
    properties: [
        {
            key: 'placeholder',
            label: '占位符',
            valueType: 'string',
            defaultValue: 'Type your text',
        },
        {
            key: 'inputText',
            label: '输入文本',
            valueType: 'string',
            defaultValue: '',
        },
    ],
    methods: [],
    events: [
        {
            key: 'onInput',
            label: '输入变化',
            params: [
                {
                    key: 'text',
                    label: '文本',
                    valueType: 'string',
                },
            ],
        },
    ],
};

class ForwardInputWidget extends VisibleWidget {
    constructor(props) {
        super(props);
        this.placeholder = props.placeholder;
        this.inputText = props.inputText;
    }

    handleInputChange = (event) => {
        const newText = event.target.value;
        this.emit('onInput', newText);
        this.setProps({ inputText: newText });
    };

    render() {
        return (
            <div className="form" style={{ position: "relative", width: "200px" }}>
                <input
                    className="input"
                    placeholder={this.placeholder}
                    required
                    type="text"
                    value={this.inputText}
                    onChange={this.handleInputChange}
                />
                <span className="input-border"></span>
                <style>
                    {`
                        .form {
                            --width-of-input: 200px;
                            --border-height: 1px;
                            --border-before-color: rgba(221, 221, 221, 0.39);
                            --border-after-color: #5891ff;
                            --input-hovered-color: #4985e01f;
                            position: relative;
                            width: var(--width-of-input);
                        }

                        .input {
                            color: #000;
                            font-size: 0.9rem;
                            background-color: transparent;
                            width: 100%;
                            box-sizing: border-box;
                            padding-inline: 0.5em;
                            padding-block: 0.7em;
                            border: none;
                            border-bottom: var(--border-height) solid var(--border-before-color);
                        }

                        .input-border {
                            position: absolute;
                            background: var(--border-after-color);
                            width: 0%;
                            height: 2px;
                            bottom: 0;
                            left: 0;
                            transition: 0.3s;
                        }

                        input:hover {
                            background: var(--input-hovered-color);
                        }

                        input:focus {
                            outline: none;
                        }

                        input:focus ~ .input-border {
                            width: 100%;
                        }
                    `}
                </style>
            </div>
        );
    }
}

exports.types = types;
exports.widget = ForwardInputWidget;
