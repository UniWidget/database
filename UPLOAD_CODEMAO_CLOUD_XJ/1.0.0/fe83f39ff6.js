var document = this.document;
var window = this.window;

const axios = require('axios');

const types = {
    type: 'UPLOAD_CODEMAO_CLOUD_XJ',
    icon: 'https://ocean.codemao.cn/appcraft/resource/icon/基础/文件夹_开.svg',
    title: '编程猫云盘',
    author: 'XJ王大哥(2357942846)',
    isInvisibleWidget: true,
    isGlobalWidget: false,
    properties: [
        {
            key: 'course',
            label: '使用教程',
            valueType: 'string',
            editorType: 'TextArea',
            defaultValue:
                '需要在打开屏幕时执行绑定元素操作，当元素被点击(会打开文件选择器)或拖拽文件到上面时，将自动上传到编程猫云盘并获取链接。选择器以"#{控件ID}"的形式填入绑定至作品内的控件，控件ID获取方法见https://codemao.yuque.com/kzbwh0/coco_guide/zyy6o1gms3git0yl',
        },
    ],
    methods: [
        {
            key: 'bindingElements',
            label: '绑定元素',
            params: [
                {
                    key: 'selector',
                    label: '选择器',
                    valueType: 'string',
                    defaultValue: '#{控件ID}',
                },
            ],
        },
    ],
    events: [
        {
            key: 'onChange',
            label: '被上传',
            params: [{ key: 'url', label: '链接', valueType: 'string' }],
        },
    ],
};

class Widget extends InvisibleWidget {
    constructor(p) {
        super(p);
        Object.assign(this, p);
    }

    bindingElements = s => {
        let input = document.createElement('input');
        input.type = 'file';
        input.style.display = 'none';
        input.onchange = () => this.upload(input.files[0]);
        document.body.appendChild(input);

        let element = document.querySelector(s);

        element.onclick = () => input.click();

        element.ondragenter = e => e.preventDefault();
        element.ondragover = e => e.preventDefault();
        element.ondrop = e => {
            e.preventDefault();
            this.upload(e.dataTransfer.files[0]);
        };
    };

    upload = file => {
        axios({
            url: 'https://oversea-api.code.game/tiger/kitten/cdn/token/1',
            method: 'get',
            params: {
                type: file.type,
                prefix: 'xj',
                bucket: 'static',
            },
        }).then(r => {
            let data = r.data.data[0];
            let params = new FormData();
            params.append('file', file);
            params.append('token', data.token);
            params.append('key', data.filename);
            axios
                .post('https://upload.qiniup.com/', params)
                .then(r => this.emit('onChange', `https://static.codemao.cn/${r.data.key}`));
        });
    };
}

for (let i of types.methods) i.blockOptions = { ...i.blockOptions, callMethodLabel: false };

exports.types = types;
exports.widget = Widget;
