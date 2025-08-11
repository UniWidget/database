/**
 * @author: 何我寻月
 * 来自 Yue 控件库
 */

const methodBlockColor = ' #2FD16C'
const createBlockColor = ' #62B7FF'
const returnBlockColor = ' #F4AE3B'

var document = this.document
var window = this.window

let types = {
    title: "URL资源获取",
    type: "YUE_URL_RESOURCE_FETCHING_WIDGET",
    icon: "https://static.codemao.cn/pickduck/SJ1i77-Jll.svg?hash=FtlH2X32k4T-IeKRRKLhcRl78IZN",
    docs: { url: 'https://www.yuque.com/yuqueyonghuhelltp/yuekj/khn1q4zaqsnr9w3w' },
    version: "1.0.0",
    isInvisibleWidget: true,
    isGlobalWidget: false,
    properties: [],
    events: [
        {
            key: 'getDataUrlOk',
            label: '获取为DataURL成功',
            params: [
                { key: 'dataurl', label: 'DataURL', valueType: 'string', }
            ],
            blockOptions: { icon: 'https://static.codemao.cn/pickduck/B1mGVGT3yx.svg?hash=Fju2V0oMGG9AQJURi6Mv0Pq1s1sf' },
        },
        {
            key: 'getDataUrlNo',
            label: '获取为DataURL失败',
            params: [
                { key: 'msg', label: '信息', valueType: 'string', }
            ],
            blockOptions: { icon: 'https://static.codemao.cn/pickduck/B1mGVGT3yx.svg?hash=Fju2V0oMGG9AQJURi6Mv0Pq1s1sf' },
        },
    ],
    methods: [
        {
            key: "urlToDataURL",
            label: '获取为DataURL',
            tooltip: '使用请看文档,跨域https://coco.codemao.cn/http-widget-proxy/https@SEP@',
            params: [
                { key: "url", label: 'URL', valueType: 'string', defaultValue: 'https://coco.codemao.cn/http-widget-proxy/https@SEP@lx-sycdn.kuwo.cn/70d1996edbba176a7a37d5cede65033c/68039faf/resource/n3/99/2/3760995524.mp3?from=longzhu_api?from=longzhu_api' },
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

    /**
     * 将网络文件URL转换为DataURL
     * @param {string} url - 必须是HTTPS链接
     * @returns {Promise<string>} 返回DataURL字符串
     */
    urlToDataURL(url) {
        return new Promise((resolve, reject) => {
        // 1. 验证URL
        if (!url.startsWith('https://')) {
            console.error('错误：URL必须以https://开头');
            this.emit('getDataUrlNo', '错误：URL必须以https://开头');
            reject(new Error('只支持HTTPS链接'));
            return;
        }
    
        // 2. 安全获取fetch方法
        const fetchFn = (typeof window !== 'undefined' && window['fetch']) || 
                        (typeof globalThis !== 'undefined' && globalThis['fetch']);
    
        if (typeof fetchFn !== 'function') {
            console.error('错误：当前环境不支持文件获取');
            this.emit('getDataUrlNo', '错误：当前环境不支持文件获取');
            reject(new Error('当前环境不支持文件获取'));
            return;
        }
    
        console.log('开始转换URL:', url);
    
        // 3. 获取文件数据
        fetchFn(url)
            .then(response => {
            if (!response.ok) {
                console.error('HTTP错误:', response.status);
                throw new Error(`HTTP错误: ${response.status}`);
            }
            console.log('文件获取成功，正在转换...');
            return response.blob();
            })
            .then(blob => {
            // 4. 转换为DataURL
            const reader = new FileReader();
            reader.onload = () => {
                console.log('转换成功:', reader.result.substring(0, 50) + '...'); // 输出前50个字符
                this.emit('getDataUrlOk', reader.result);
                resolve(reader.result);
            };
            reader.onerror = () => {
                console.error('文件读取失败');
                this.emit('getDataUrlNo', '文件读取失败');
                reject(new Error('文件读取失败'));
            };
            reader.readAsDataURL(blob);
            })
            .catch(error => {
            console.error('转换失败:', error.message);
            this.emit('getDataUrlNo', ('转换失败:', error.message));
            reject(error);
            });
        });
    }
    
}

exports.types = types
exports.widget = Widget