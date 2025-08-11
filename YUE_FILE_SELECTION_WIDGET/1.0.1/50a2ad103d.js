/**
 * @author: 何我寻月
 * 来自 Yue 控件库
 */

const methodBlockColor = ' #2FD16C'

var document = this.document
var window = this.window

let types = {
    title: "文件选择和下载",
    type: "YUE_FILE_SELECTION_WIDGET",
    icon: "https://static.codemao.cn/pickduck/rkNCmbT3Jx.svg?hash=Fh07TF-1xwSmoth8yu9VAFecXz9L",
    docs: { url: 'https://www.yuque.com/yuqueyonghuhelltp/yuekj/blqtgb34bf7gwimr' },
    version: "1.0.1",
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    events: [
        {
            key: 'okFile',
            label: '选择完成',
            params: [
                { key: 'msg', label: '对象列表', valueType: ['object','string','array'], }
            ],
            blockOptions: { icon: 'https://static.codemao.cn/pickduck/B1mGVGT3yx.svg?hash=Fju2V0oMGG9AQJURi6Mv0Pq1s1sf' },
        },
    ],
    methods: [
        {
            key: "doFile",
            label: '选择文件',
            tooltip: '前往文档查看说明，类型填列表',
            params: [
                { key: "allowedExtensions", label: '类型', valueType: ['array','string'], defaultValue: "mp3,png" },
                { key: "maxFileCount", label: '限制个数', valueType: 'number', defaultValue: Infinity },
            ],
            blockOptions: { color: methodBlockColor },
        },
        {
            key: "doFileDownload",
            label: '下载文件',
            params: [
                { key: "fileName", label: '文件名', valueType: 'string', defaultValue: "Yue.mp3" },
                { key: "dataUrl", label: 'dataUrl', valueType: 'string', defaultValue: 'data' },
            ],
            blockOptions: { color: methodBlockColor },
        },
        {
            key: "jump",
            label: '新窗口打开',
            params: [
                { key: "targetUrl", label: '网址', valueType: 'string', defaultValue: "https://cos.chahehe.space" },
                { key: "windowAttrs", label: '属性', valueType: 'string', defaultValue: 'width=600,height=400,left=100,top=100' },
            ],
            blockOptions: { color: methodBlockColor },
        },
    ],
}


class Widget extends InvisibleWidget {
    constructor(props) {
        super(props)
        Object.assign(this, props)
    }

    // 调用选择文件
    doFile(allowedExtensions, maxFileCount) {
        return new Promise((resolve, reject) => {
            const input = document.createElement('input');
            input.type = 'file';
            input.multiple = true;
    
            if (allowedExtensions && allowedExtensions.length > 0) {
                input.accept = allowedExtensions.map(ext => `.${ext}`).join(',');
            }
    
            // 使用箭头函数确保 this 指向 Widget 实例
            input.onchange = (e) => {
                const files = e.target.files;
                const selectedFiles = Array.from(files).slice(0, maxFileCount);
                const fileInfoArray = [];
    
                if (files.length > maxFileCount) {
                    this.widgetWarn(`只允许选择 ${maxFileCount} 个文件，超出部分已被忽略`);
                }
    
                for (let i = 0; i < selectedFiles.length; i++) {
                    const file = selectedFiles[i];
                    const fileReader = new FileReader();
    
                    // 使用箭头函数确保 this 指向 Widget 实例
                    fileReader.onload = () => {
                        const dataURL = fileReader.result;
                        const fileName = file.name;
                        const fileSize = file.size;
                        const fileType = file.type;
    
                        const fileInfo = {
                            name: fileName,
                            size: fileSize,
                            type: fileType,
                            dataURL: dataURL
                        };
    
                        fileInfoArray.push(fileInfo);
    
                        if (fileInfoArray.length === selectedFiles.length) {
                            if (typeof this.widgetLog === 'function') {
                                this.widgetLog('选择完成');
                                this.emit("okFile",fileInfoArray );
                            }
                            resolve(fileInfoArray);
                        }
                    };
    
                    fileReader.readAsDataURL(file);
                }
            };
    
            input.click();
        });
    }

    // 下载文件
    doFileDownload(fileName, dataUrl) {
        const arr = dataUrl.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        const blob = new Blob([u8arr], { type: mime });
        const shortUrl = URL.createObjectURL(blob);
    
        const a = document.createElement('a');
        a.href = shortUrl;
        a.download = fileName;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(shortUrl);

        this.widgetLog('已执行下载');
    }

    // 新窗口
    jump(targetUrl, windowAttrs){
        window.open(
            targetUrl,
            '_blank',
            windowAttrs
        );
    }

}

exports.types = types
exports.widget = Widget