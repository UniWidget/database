/**
 * @author: 何我寻月
 * 来自 Yue 控件库
 */

const methodBlockColor = ' #2FD16C'
const returnBlockColor = ' #F4AE3B'

var document = this.document
var window = this.window

let types = {
    title: "文件MP3处理",
    type: "YUE_MP3_PROCESSING_WIDGET",
    icon: "https://static.codemao.cn/pickduck/rkNCmbT3Jx.svg?hash=Fh07TF-1xwSmoth8yu9VAFecXz9L",
    docs: { url: 'https://www.yuque.com/yuqueyonghuhelltp/yuekj/gr2w2pnprk8shscb' },
    version: "1.0.0",
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    events: [
        {
            key: 'okLoad',
            label: '初始化',
            params: [
                { key: 'msg1', label: '结果', valueType: 'string', }
            ],
            blockOptions: { icon: 'https://static.codemao.cn/pickduck/B1mGVGT3yx.svg?hash=Fju2V0oMGG9AQJURi6Mv0Pq1s1sf' },
        },
        {
            key: 'noLoad',
            label: '结束化',
            params: [
                { key: 'msg2', label: '结果', valueType: 'string', }
            ],
            blockOptions: { icon: 'https://static.codemao.cn/pickduck/B1mGVGT3yx.svg?hash=Fju2V0oMGG9AQJURi6Mv0Pq1s1sf' },
        },
        {
            key: 'finish',
            label: '处理成功',
            params: [
                { key: 'msg3', label: '数据(对象)', valueType: ['object','string'], },
            ],
            blockOptions: { icon: 'https://static.codemao.cn/pickduck/B1mGVGT3yx.svg?hash=Fju2V0oMGG9AQJURi6Mv0Pq1s1sf' },
        },
        {
            key: 'finishno',
            label: '处理失败',
            params: [],
            blockOptions: { icon: 'https://static.codemao.cn/pickduck/B1mGVGT3yx.svg?hash=Fju2V0oMGG9AQJURi6Mv0Pq1s1sf' },
        },
    ],
    methods: [
        {
            key: "loadJsmediatagsLibrary",
            label: '初始化',
            tooltip: '必需初始化才能用',
            params: [],
            blockOptions: { color: methodBlockColor },
        },
        {
            key: "removeJsmediatagsLibrary",
            label: '结束化',
            tooltip: '先初始化再用',
            params: [],
            blockOptions: { color: methodBlockColor },
        },
        {
            key: "extractMP3Info",
            label: '处理MP3',
            params: [
                { key: "dataUrl", label: 'dataUrl', valueType: 'string', defaultValue: 'data' },
            ],
            blockOptions: { color: methodBlockColor },
        },
        {
            key: "lrcToDataUrl",
            label: '歌词转dataURL',
            valueType: 'string',
            params: [
                { key: "lrcContent", label: 'lrc', valueType: 'string', defaultValue: '歌词' },
            ],
            blockOptions: { color: returnBlockColor },
        },
    ],
}


class Widget extends InvisibleWidget {
    constructor(props) {
        super(props)
        Object.assign(this, props)
    }

    // 加载库
    loadJsmediatagsLibrary() {
        return new Promise((resolve, reject) => {
            const scriptId = 'jsmediatags-script';
            let existingScript = document.getElementById(scriptId);
    
            if (!existingScript) {
                existingScript = document.createElement('script');
                existingScript.id = scriptId;
                document.head.appendChild(existingScript);
            }
    
            existingScript.src = 'https://cdn.bootcdn.net/ajax/libs/jsmediatags/3.9.3/jsmediatags.min.js';
    
            existingScript.onload = () => {
                console.log('成功引入 jsmediatags 库');
                this.emit("okLoad","成功" );
                resolve();
            };
    
            existingScript.onerror = () => {
                console.log('加载 jsmediatags 库失败');
                this.emit("okLoad","失败" );
                reject(new Error('加载 jsmediatags 库失败'));
            };
        });
    }
    
    // 删除引入
    removeJsmediatagsLibrary() {
        const scriptId = 'jsmediatags-script';
        const script = document.getElementById(scriptId);
        if (script) {
            script.parentNode.removeChild(script);
            console.log('成功移除 jsmediatags 库');
            this.widgetLog('结束化成功')
            this.emit("noLoad","成功" );
            return true;
        }
        console.log('未找到 jsmediatags 库脚本');
        this.widgetLog('结束化失败，未找到 jsmediatags 库脚本，请确定已初始化')
        this.emit("noLoad","失败" );
        return false;
    }

    // 处理文件
    extractMP3Info(dataUrl) {
        return new Promise((resolve, reject) => {
            if (!window.jsmediatags) {
                reject(new Error('jsmediatags 库未加载'));
                this.widgetLog('jsmediatags 库未加载')
                this.emit("finishno");
                return;
            }
            // 将 dataUrl 转换为 Blob 的逻辑
            const parts = dataUrl.split(';base64,');
            const contentType = parts[0].split(':')[1];
            const raw = window.atob(parts[1]);
            const rawLength = raw.length;
            const uInt8Array = new Uint8Array(rawLength);
    
            for (let i = 0; i < rawLength; ++i) {
                uInt8Array[i] = raw.charCodeAt(i);
            }
            const blob = new Blob([uInt8Array], { type: contentType });
    
            const reader = new window.jsmediatags.Reader(blob);
            reader.read({
                onSuccess: (tag) => {
                    let coverDataUrl = '未知';
                    if (tag.tags.picture) {
                        const picBlob = new Blob([tag.tags.picture.data]);
                        const mimeType = picBlob.type || 'image/jpeg';
                        coverDataUrl = URL.createObjectURL(picBlob);
                    }
                    const info = {
                        title: tag.tags.title || '未知',
                        artist: tag.tags.artist || '未知',
                        lyrics: tag.tags.lyrics || '未知',
                        year: tag.tags.year || '未知',
                        date: tag.tags.date || '未知',
                        album: tag.tags.album || '未知',
                        genre: tag.tags.genre || '未知',
                        comment: tag.tags.comment || '未知',
                        coverImage: coverDataUrl
                    };
                    this.emit("finish",info );
                    resolve(info);
                },
                onError: (error) => {
                    reject(error);
                }
            });
        });
    }

    // 歌词转dataUrl
    lrcToDataUrl(lrcContent) {
        // 对歌词文本进行Base64编码
        const base64Text = btoa(unescape(encodeURIComponent(lrcContent)));
        return `data:text/plain;charset=utf-8;base64,${base64Text}`;
    }

}

exports.types = types
exports.widget = Widget