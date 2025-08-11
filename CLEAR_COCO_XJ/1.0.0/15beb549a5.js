var document = this.document;

const types = {
    type: 'CLEAR_COCO_XJ',
    icon: 'icon-phone-move',
    title: '净化COCO',
    version: '1.0.0',
    author: 'XJ王大哥(2357942846)',
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    methods: [
        {
            key: '一键净化',
            label: '一键净化',
            params: [],
            blockOptions: { callMethodLabel: false },
        },
        {
            key: '删除手机壳',
            label: '删除手机壳',
            params: [],
            blockOptions: { callMethodLabel: false, line: '一键净化' },
        },
        {
            key: '删除物理栏',
            label: '删除物理栏',
            params: [],
            blockOptions: { callMethodLabel: false },
        },
        {
            key: '删除去COCO制作',
            label: '删除去COCO制作',
            params: [],
            blockOptions: { callMethodLabel: false },
        },
        {
            key: '设置背景色为当前屏幕背景色',
            label: '设置背景色为当前屏幕背景色',
            params: [],
            blockOptions: { callMethodLabel: false },
        },
        {
            key: '设置Background',
            label: '设置Background',
            params: [{ key: 'text', valueType: 'string', defaultValue: '' }],
            blockOptions: { callMethodLabel: false, line: '非一键净化' },
        },
        {
            key: '横屏模式',
            label: '横屏模式',
            params: [],
            blockOptions: { callMethodLabel: false },
        },
        {
            key: '全屏显示',
            label: '全屏显示(有BUG)',
            params: [],
            blockOptions: { callMethodLabel: false },
        },
    ],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
    }
    一键净化 = () => {
        this.删除手机壳();
        this.删除物理栏();
        this.删除去COCO制作();
        // this.全屏显示();
        this.设置背景色为当前屏幕背景色();
    };
    删除手机壳 = () => document.querySelector('#webPlayer > div.styles_deviceFrame__266Il').remove();
    删除物理栏 = () => document.querySelector('#webPlayer > div.styles_emulatorWrapper__1U-3v').remove();
    删除去COCO制作 = () => document.querySelector('#root > div > div.styles_appUrlBtn__1rsjt').remove();
    全屏显示 = () =>
        (document.querySelector('#root > div > div.styles_main__VRzeV').style.transform =
            'translate(-50%, -50%) scale(1.64)');
    设置背景色为当前屏幕背景色 = () =>
        (document.querySelector('#root > div').style.background =
            document.querySelector('#SCREEN_27hxQK2x7').style['background-color']);
    设置Background = t => (document.querySelector('#root > div').style.background = t);
    横屏模式 = () => (document.querySelector('#webPlayer').style.width = '66vw');
}

exports.types = types;
exports.widget = Widget;
