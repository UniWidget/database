/**
 * @author: 寻椰鸭Seekyeya SYY-S1
 * 来自 寻椰鸭Seekyeya AI生成控件
 */

const methodBlockColor = '#2FD16C'
const createBlockColor = '#62B7FF'
const returnBlockColor = '#F4AE3B'

var document = this.document
var window = this.window

const types = {
    title: '单词查询',
    type: 'SYYS1_SEARCH_WORD_API_WIDGET',
    icon: 'https://static.codemao.cn/flowchunkflex/BJNgBbXxee.svg?hash=FkffFOSlXL0AZt5cNFQ_vl5TmHXL',
    docs: { url: 'https://www.yuque.com/yuqueyonghuhelltp/yuekj/auctnm35moy0p078' },
    version: '1.0.0',
    isInvisibleWidget: true,
    isGlobalWidget: false,
    properties: [],
    events: [
        {
            key: 'aiEvent',
            label: '触发事件',
            params: [
                { key: 'data', label: '数据', valueType: ["number","boolean","string","object","array"], }
            ],
        },
    ],
    methods: [
        {
            key: "aiMethod",
            label: '方法功能',
            tooltip: '填入对象，没有则不填',
            params: [
                { key: "canshu", label: '参数', valueType: ["number","boolean","string","object","array"], defaultValue: '' },
            ],
            blockOptions: { color: methodBlockColor, callMethodLabel: false },
        },
        {
            key: "aiMethodReturn",
            label: '方法功能',
            tooltip: '填入对象，没有则不填',
            valueType: ["number","boolean","string","object","array"],
            params: [
                { key: "canshu", label: '参数', valueType: ["number","boolean","string","object","array"], defaultValue: '' },
            ],
            blockOptions: { color: returnBlockColor, callMethodLabel: false },
        },
    ],
}


class Widget extends InvisibleWidget {
    constructor(props) {
        super(props)
        Object.assign(this, props)
}


aiMethod(data) {
    const fetchFn = (typeof window !== 'undefined' && window['fetch']) || 
                     (typeof globalThis !== 'undefined' && globalThis['fetch']);
    
    if (typeof fetchFn !== 'function') {
        console.error('错误：当前环境不支持fetch');
        this.emit('aiEvent', { code: 500, msg: '当前环境不支持fetch' });
        return { code: 500, msg: '当前环境不支持fetch' };
    }

    try {
        let word = typeof data === 'string' ? JSON.parse(data).word : data.word;
        if (!word) {
            const error = { code: 400, msg: '缺少word参数' };
            this.emit('aiEvent', error);
            return error;
        }

        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const result = fetchFn(`https://v2.xxapi.cn/api/englishwords?word=${encodeURIComponent(word)}`, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                this.emit('aiEvent', data);
                return data;
            })
            .catch(error => {
                const errResult = { code: 500, msg: error.message || '请求失败' };
                this.emit('aiEvent', errResult);
                return errResult;
            });

        if (result && typeof result.then === 'function') {
            return result;
        } else {
            this.emit('aiEvent', result);
            return result;
        }
    } catch (error) {
        const errResult = { code: 500, msg: error.message || '解析参数失败' };
        this.emit('aiEvent', errResult);
        return errResult;
    }
}


aiMethodReturn(data) {
    const fetchFn = (typeof window !== 'undefined' && window['fetch']) || 
                     (typeof globalThis !== 'undefined' && globalThis['fetch']);
    
    if (typeof fetchFn !== 'function') {
        console.error('错误：当前环境不支持fetch');
        this.emit('aiEvent', { code: 500, msg: '当前环境不支持fetch' });
        return { code: 500, msg: '当前环境不支持fetch' };
    }

    try {
        let word = typeof data === 'string' ? JSON.parse(data).word : data.word;
        if (!word) {
            const error = { code: 400, msg: '缺少word参数' };
            this.emit('aiEvent', error);
            return error;
        }

        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const result = fetchFn(`https://v2.xxapi.cn/api/englishwords?word=${encodeURIComponent(word)}`, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                this.emit('aiEvent', data);
                return data;
            })
            .catch(error => {
                const errResult = { code: 500, msg: error.message || '请求失败' };
                this.emit('aiEvent', errResult);
                return errResult;
            });

        if (result && typeof result.then === 'function') {
            return result;
        } else {
            this.emit('aiEvent', result);
            return result;
        }
    } catch (error) {
        const errResult = { code: 500, msg: error.message || '解析参数失败' };
        this.emit('aiEvent', errResult);
        return errResult;
    }
}

}

exports.types = types
exports.widget = Widget