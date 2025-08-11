var window = this.window;
var document = this.document;
let a = 'fetch';
var fetch = window[a];
var axios = require('axios');

const dangerous = [
    'eval',
    'document.write',
    'document.getElementById',
    'document.getElementsByTagName',
    'document.getElementsByClassName',
    'document.getElementsByTagNameName',
    'document.querySelector',
    'document.querySelectorAll',
    'Function',
    'alert',
    'confirm',
    'prompt',
    'setTimeout',
    'setInterval',
    'setImmediate',
    'clearTimeout',
    'clearInterval',
    'clearImmediate'
];

window.loadscriptsource = async function(data) {
    if (data) {
        var script = document.createElement('script');
        script.innerHTML = data;
        await document.body.appendChild(script);
        setTimeout(() => {
            document.body.removeChild(script);
        }, 100);
    }
};

window.loadscriptsourceofurl = async function(url) {
    const data = await fetch(url);
    if (!data.ok) {
        return false;
    }
    return await data.text();
};

const types = {
    type: 'ZX_YUAN',
    title: '音源管理',
    icon: 'https://static.codemao.cn/pickduck/BJh1naPRyg.svg?hash=FgN3gfYb4R40lhUI-uArAeAv4K6-',
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    methods: [
        {
            key: 'initializationsource',
            label: '初始化歌源数据',
            params: [{
                key: 'data',
                label: '',
                valueType: 'string',
                defaultValue: ''
            }],
            blockOptions: {
                callMethodLabel: false,
                line: "初始化",
            },
        },
        {
            key: 'initialization',
            label: '初始化歌源id',
            valueType: 'boolean',
            params: [{
                key: 'id',
                label: '',
                valueType: 'string',
                defaultValue: ''
            }],
            blockOptions: {
                callMethodLabel: false
            },
        },
        {
            key: 'saveyuan',
            label: '导入歌源数据',
            params: [{
                key: 'data',
                label: '',
                valueType: 'string',
                defaultValue: ''
            }],
            blockOptions: {
                callMethodLabel: false,
                line: "导入歌源",
            },
        },
        {
            key: 'saveyuanofurl',
            label: '导入网络url歌源',
            params: [{
                key: 'url',
                label: '',
                valueType: 'string',
                defaultValue: ''
            }],
            blockOptions: {
                callMethodLabel: false
            },
        },
        {
            key: 'getsong',
            label: '搜索歌曲',
            params: [
                {
                    key: 'sourceid',
                    label: '歌源id',
                    valueType: 'string',
                    defaultValue: ''
                },
                {
                    key: 'type',
                    label: '平台',
                    valueType: 'string',
                    defaultValue: 'wyy',
                },
                {
                    key: 'keyword',
                    label: '内容',
                    valueType: 'string',
                    defaultValue: '',
                },
                {
                    key: 'page',
                    label: '页码',
                    valueType: 'number',
                    defaultValue: 1
                },
                {
                    key: 'pageSize',
                    label: '每页数量',
                    valueType: 'number',
                    defaultValue: 10
                }
            ],
            blockOptions: {
                callMethodLabel: false,
                line: "获取信息",
            },
        },
        {
            key: 'geturl',
            label: '获取歌曲信息',
            params: [
                {
                    key: 'sourceid',
                    label: '歌源id',
                    valueType: 'string',
                    defaultValue: ''
                },
                {
                    key: 'type',
                    label: '平台',
                    valueType: 'string',
                    defaultValue: '',
                    dropdown: [
                        {
                            label: 'QQ',
                            value: 'qq'
                        },
                        {
                            label: '网易云',
                            value: 'wyy'
                        },
                        {
                            label: '酷狗',
                            value: 'kg'
                        },
                    ],
                },
                {
                    key: 'id',
                    label: 'id',
                    valueType: 'string',
                    defaultValue: '',
                }
            ],
            blockOptions: {
                callMethodLabel: false
            },
        },
        {
            key: 'deletesource',
            label: '删除歌源',
            valueType: 'boolean',
            params: [{
                key: 'sourceid',
                label: 'id',
                valueType: 'string',
                defaultValue: ''
            }],
            blockOptions: {
                callMethodLabel: false,
                line: "歌源操作",
            },
        },
        {
            key: 'getsourcemessage',
            label: '获取歌源信息',
            valueType: 'string',
            params: [
                {
                    key: 'sourceid',
                    label: 'id',
                    valueType: 'string',
                    defaultValue: ''
                },
                {
                    key: 'key',
                    label: 'key',
                    valueType: 'string',
                    defaultValue: '',
                    dropdown: [
                        {
                            label: '名称',
                            value: 'name'
                        },
                        {
                            label: '版本',
                            value: 'version'
                        },
                        {
                            label: '支持平台',
                            value: 'source'
                        },
                        {
                            label: '作者',
                            value: 'author'
                        },
                    ],
                }
            ],
            blockOptions: {
                callMethodLabel: false
            },
        },
        {
            key: 'getsourceidthoughname',
            label: '歌源名称查id',
            valueType: 'string',
            params: [{
                key: 'sourcename',
                label: '',
                valueType: 'string',
                defaultValue: ''
            }],
            blockOptions: {
                callMethodLabel: false
            },
        },
        {
            key: 'getanysourcemessage',
            label: '获取其他信息',
            valueType: 'string',
            params: [
                {
                    key: 'sourceid',
                    label: 'id',
                    valueType: 'string',
                    defaultValue: ''
                },
                {
                    key: 'key',
                    label: 'key',
                    valueType: 'string',
                    defaultValue: '',
                }
            ],
            blockOptions: {
                callMethodLabel: false
            },
        },
        {
            key: 'getallyuan',
            label: '导出歌源数据',
            valueType: 'string',
            params: [],
            blockOptions: {
                callMethodLabel: false,
                line: "导出",
            },
        },
        {
            key: 'getallyuanid',
            label: '导出所有歌源id',
            valueType: 'string',
            params: [],
            blockOptions: {
                callMethodLabel: false,
            },
        },
    ],
    events: [
        {
            key: 'oninitializationsource',
            label: '初始化成功',
            params: []
        },
        {
            key: 'notinitializationsource',
            label: '初始化失败',
            params: [{
                key: 'error',
                label: '错误',
                valueType: 'string'
            }]
        },
        {
            key: 'onSave',
            label: '导入成功',
            params: [
                {
                    key: 'name',
                    label: '名称',
                    valueType: 'string'
                },
                {
                    key: 'id',
                    label: 'id',
                    valueType: 'string'
                },
                {
                    key: 'version',
                    label: '版本',
                    valueType: 'string'
                },
                {
                    key: 'author',
                    label: '作者',
                    valueType: 'string'
                },
            ]
        },
        {
            key: 'notSave',
            label: '导入失败',
            params: [{
                key: 'error',
                label: '错误',
                valueType: 'string'
            }]
        },
        {
            key: 'onSearch',
            label: '搜索到歌曲',
            params: [
                {
                    key: 'id',
                    label: 'id',
                    valueType: 'string'
                },
                {
                    key: 'name',
                    label: '名称',
                    valueType: 'string'
                },
                {
                    key: 'author',
                    label: '歌手',
                    valueType: 'string'
                },
                {
                    key: 'album',
                    label: '专辑',
                    valueType: 'string'
                },
                {
                    key: 'pic',
                    label: '封面',
                    valueType: 'string'
                }
            ]
        },
        {
            key: 'notSearch',
            label: '搜索失败',
            params: [{
                key: 'error',
                label: '错误',
                valueType: 'string'
            }]
        },
        {
            key: 'onGetUrl',
            label: '获取到歌曲',
            params: [
                {
                    key: 'id',
                    label: 'ID',
                    valueType: 'string'
                },
                {
                    key: 'name',
                    label: '名称',
                    valueType: 'string'
                },
                {
                    key: 'author',
                    label: '歌手',
                    valueType: 'string'
                },
                {
                    key: 'album',
                    label: '专辑',
                    valueType: 'string'
                },
                {
                    key: 'pic',
                    label: '封面',
                    valueType: 'string'
                },
                {
                    key: 'lrc',
                    label: '歌词',
                    valueType: 'string'
                },
                {
                    key: 'Translationlrc',
                    label: '翻译',
                    valueType: 'string'
                },
                {
                    key: 'url',
                    label: 'URL',
                    valueType: 'string'
                },
            ]
        },
        {
            key: 'notGetUrl',
            label: '获取歌曲链接失败',
            params: [{
                key: 'error',
                label: '错误',
                valueType: 'string'
            }]
        },
    ]
};

class FileChunker extends InvisibleWidget {
    constructor(props) {
        super(props);
        Object.assign(this, props);
        this.songsource = [];
    }

    async saveyuan(data) {
        await window.loadscriptsource(data);
        const source = window.source;
        try {
            let msg = this.checkForDangerousCode(data);
            if (msg.code) {
                this.emit('notSave', msg.msg + msg.data);
            } else {
                if (source.initialization() && !this.songsource.find(item => item.id === source.id)) {
                    this.songsource.push(source);
                    this.emit('onSave', source.name, source.id, source.version, source.author ? source.author : '未定义');
                } else {
                    this.emit('notSave', '初始化失败或已有此歌源');
                }
            }
        } catch (e) {
            this.emit('notSave', e);
        }
    }

    async saveyuanofurl(url) {
        const data = await window.loadscriptsourceofurl(url);
        if (data) {
            this.saveyuan(data);
        }
    }

    async initializationsource(data) {
        try {
            this.songsource = [];
            await window.loadscriptsource(data);
            this.songsource = window.source;
            this.emit('oninitializationsource');
        } catch (e) {
            this.emit('notinitializationsource', e);
        }
    }

    async getsong(sourceid, type, keyword, page, pageSize) {
        const source = this.songsource.find(item => item.id == sourceid);
        if (!source) {
            if (this.songsource.length == 0) {
                this.emit('notSearch', '歌源不存在');
                return;
            }
            source = this.songsource[0];
        }
        if (!source.source.includes(type)) {
            this.emit('notSearch', '歌源不支持此平台');
            return;
        }
        const datas = await source.search(type, keyword, page, pageSize);
        if (datas.code) {
            datas.data.forEach(data => {
                this.emit('onSearch', data.music_id, data.music_name, data.music_author, data.music_album, data.music_pic);
            });
        } else {
            this.emit('notSearch', datas.error);
        }
    }

    async geturl(sourceid, type, id) {
        const source = this.songsource.find(item => item.id == sourceid);
        if (!source) {
            if (this.songsource.length == 0) {
                this.emit('notGetUrl', '歌源不存在');
                return;
            }
            return;
        }
        if (!source.source.includes(type)) {
            this.emit('notGetUrl', '歌源不支持此平台');
            return;
        }
        const data = await source.getMusicUrl(type, id);
        if (data.code) {
            this.emit('onGetUrl', data.music_id, data.music_name, data.music_author, data.music_album, data.music_pic, data.music_lrc, data.music_url, data.music_translationlrc ? data.music_translationlrc : '无');
        } else {
            this.emit('notGetUrl', data.error);
        }
    }

    objectToString(obj, indent = 0) {
        const space = "    ";
        const indentation = space.repeat(indent);

        if (typeof obj === "object" && obj !== null && !Array.isArray(obj)) {
            let result = "{\n";
            const keys = Object.keys(obj);
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                const value = obj[key];
                result += `${indentation}${space}${key}: ${this.objectToString(value, indent + 1)}`;
                if (i < keys.length - 1) {
                    result += ",";
                }
                result += "\n";
            }
            result += `${indentation}}`;
            return result;
        }

        if (Array.isArray(obj)) {
            let result = "[\n";
            for (let i = 0; i < obj.length; i++) {
                const value = obj[i];
                result += `${indentation}${space}${this.objectToString(value, indent + 1)}`;
                if (i < obj.length - 1) {
                    result += ",";
                }
                result += "\n";
            }
            result += `${indentation}]`;
            return result;
        }

        if (typeof obj === "function") {
            return obj.toString();
        }

        if (typeof obj === "string") {
            return `"${obj}"`;
        }

        return String(obj);
    }

    getallyuan() {
        const result = `window.source = ${this.objectToString(this.songsource)}`;
        return result;
    }

    getallyuanid() {
        const a = [];
        this.songsource.forEach(item => {
            a.push(item.id);
        });
        return a.join(',');
    }

    getsourcemessage(id, key) {
        let source = this.songsource.find(item => item.id == id);
        if (source) {
            if (key != 'source') {
                if (source[key]) {
                    return source[key];
                }
            } else {
                if (source.source) {
                    return source.source.join(',');
                }
            }
        }
        return '未定义';
    }

    getanysourcemessage(id, key) {
        if (this.songsource.find(item => item.id == id)) {
            if (this.songsource.find(item => item.id == id)[key]) {
                return this.songsource.find(item => item.id == id)[key];
            }
        }
        return '未定义';
    }

    getsourceidthoughname(name) {
        const data = [];
        this.songsource.forEach(item => {
            if (item.name == name) {
                data.push(item.id);
            }
        });
        return data.join(',');
    }

    initialization(id) {
        if (this.savesource.find(item => item.id == id).initialization()) {
            return true;
        }
        return false;
    }

    deletesource(id) {
        this.songsource = this.songsource.filter(item => item.id != id);
        return true;
    }

    checkForDangerousCode(code) {
        const regex = new RegExp(dangerous.map((func) => `\\b${func}\\b`).join('|'), 'g');
        const matches = code.match(regex);
        if (matches) {
            return {
                code: true,
                msg: '检测到危险代码',
                data: matches.join(',')
            };
        } else {
            return {
                code: false
            };
        }
    }
}

exports.types = types;
exports.widget = FileChunker;