const antd = require('antd-mobile')
const types = {
    isInvisibleWidget: true,
    type: "MESSAGE_by_SUN",
    icon: "https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg",
    title: "消息提示",
    version: "2.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
        this.icon = props.icon;
        this.text = props.text;
        this.background = props.background;
        this.positiondata = props.positiondata;
        this.durationdata = props.durationdata;
        this.icondata = props.icondata;

    }

}

types['methods'].push({
    key: 'message',
    label: '弹出消息',
    params: [
        {
            key: 'text',
            label: '文本',
            valueType: 'string',
            defaultValue: "",
        },
        {
            key: 'icon',
            label: '图标',
            valueType: 'string',
            dropdown: [
                { label: '图片', value: '图片', },

                { label: 'success', value: 'success', },

                { label: 'fail', value: 'fail', },

                { label: 'loading', value: 'loading', },

                { label: '无', value: '无', },
            ],
        },
        {
            key: 'icondata',
            label: '图标',
            valueType: 'string',
            defaultValue: "",
        },
        {
            key: 'background',
            label: '能否点击背景',
            valueType: 'boolean',
            defaultValue: true,
        },
        {
            key: 'positiondata',
            label: '位置',
            valueType: 'string',
            dropdown: [
                { label: 'top', value: 'top', },

                { label: 'bottom', value: 'bottom', },

                { label: 'center', value: 'center', },
            ],
        },
        {
            key: 'durationdata',
            label: '显示时间ms（若为0则不会自动关闭）',
            valueType: 'number',
            defaultValue: 2000,
        },],

    blockOptions: {
        color: '#ffbb55',
        icon: '无',
        generateBlock: true,
        inputsInline: false,
        space: 16,
    },
})
Widget.prototype.message = function (text, icon, icondata, background, positiondata, durationdata,) {
    if (icon == '图片') {
        antd.Toast.show({
            icon: React.createElement("img", { src: icondata, width:"100px",height:"100px",alt: '', }, null),
            content: text,
            position: positiondata,
            maskClickable: background,
            duration: durationdata,
        });
    } else if (icon == '无') {
        antd.Toast.show({
            content: text,
            position: positiondata,
            maskClickable: background,
            duration: durationdata,
        });
    } else {
        antd.Toast.show({
            icon: icon,
            content: text,
            position: positiondata,
            maskClickable: background,
            duration: durationdata,
        });
    }

}
types['methods'].push({
    key: 'clear',
    label: '关闭当前弹出的消息',
    params: [],

    blockOptions: {
        color: '#ffbb55',
        icon: '无',
        generateBlock: true,
        inputsInline: true,
        space: 16,
    },
})
Widget.prototype.clear = function () {
    antd.Toast.clear();

}
exports.types = types;
exports.widget = Widget;
