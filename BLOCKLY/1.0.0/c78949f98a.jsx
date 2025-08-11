/*
发明人：Inventocode
发明项目：Blockly控件
*/
require(['https://unpkg.com/blockly@11.1.1/blockly.min.js'], function (Blockly){
    var Blockly = Blockly;
})
id = String(mathRandomInt(100, 999));

function mathRandomInt(a, b) {
    if (a > b) {
        var c = a;
        a = b;
        b = c;
    }
    return Math.floor(Math.random() * (b - a + 1) + a);
}

const types = {
    isInvisibleWidget: false,
    type: "BLOCKLY",
    icon: "https://img.picui.cn/free/2024/07/04/66866c70e4acf.ico",
    title: "Blockly",
    version: "1.0.0",
    isGlobalWidget: false,
    properties: [
        {
            key: '__width',
            label: '宽度',
            valueType: 'number',
            defaultValue: 200,
            blockOptions: {
                generateBlock: false
            }
        },
        {
            key: '__height',
            label: '高度',
            valueType: 'number',
            defaultValue: 150,
            blockOptions: {
                generateBlock: false
            }
        },
        {
            key: '__size',
            label: '',
            valueType: 'number',
            defaultValue: 0,
            readonly: true,
            blockOptions: {
                setter: {
                    keys: ['__height', '__width']
                },
                getter: {
                    keys: ['__height', '__width']
                }
            }
        },
        {
            key: 'toolbox',
            label: 'toolbox',
            valueType: 'string',
            defaultValue: '{"kind":"flyoutToolbox","contents":[{"kind":"block","type":"controls_if"},{"kind":"block","type":"controls_whileUntil"}]}'
        }
    ],
    methods: [
        {
            key: 'inject',
            label: '注入Blockly',
            params: []
        }
    ],
    events: []
};

class BlocklyWidget extends VisibleWidget {
    constructor(props) {
        super(props);
        this.__width = props.__width;
        this.__height = props.__height;
        this.toolbox = props.toolbox;
    }
    inject = () => {
        Blockly.inject('blocklyDiv' + id, {
            toolbox: JSON.parse(this.toolbox)
        });
    }
    render() {
        return (
            <div>
            <div id={"blocklyDiv" + id} height={this.__height} width={this.__height}></div>
            </div>
        );
    }
}

exports.types = types;
exports.widget = BlocklyWidget;