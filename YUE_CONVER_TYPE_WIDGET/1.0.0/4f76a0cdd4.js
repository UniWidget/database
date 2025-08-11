/**
 * @author: 何我寻月
 * 来自 Yue 控件库
 */

// 积木颜色
// #2FD16C
const blockColor = "#2FD16C"

var document = this.document
var window = this.window

let types = {
    title: "数据类型转换",
    type: "YUE_CONVER_TYPE_WIDGET",
    icon: "https://static.codemao.cn/pickduck/ryN4wI_nkl.svg?hash=FqhGcmKlNhB-6H7dmsJnngKI_Fe2",
    docs: { url: 'https://cos.chahehe.space/widget/#/page-1' },
    version: "1.0.0",
    isInvisibleWidget: true,
    isGlobalWidget: true,
    hasAnyWidget: true, // YUE
    properties: [],
    events: [],
    methods: [
        {
            key: "converType",
            label: '',
            tooltip: '使用说明请看文档',
            valueType: ["number","boolean","string","object","array"],
            params: [
                { key: "data", label: '把', valueType: ["number","boolean","string","object","array"], defaultValue: '123' },
                { key: "targetType", label: '转换为', valueType: 'string', defaultValue: 'number',
                    dropdown: [
                        { label: '数字', value: 'number' },
                        { label: '布尔值', value: 'boolean' },
                        { label: '字符串', value: 'string' },
                        { label: '对象', value: 'object' },
                        { label: '列表', value: 'array' },
                    ],
                    labelAfter:'类型',
                },
            ],
            blockOptions: { callMethodLabel: false, color: blockColor },
        },
        {
            key: "getWidgetId",
            label: '的 ID',
            valueType: 'string',
            params: [],
            blockOptions: { callMethodLabel: false, color: ' #F4AE3B' },
        },
    ],
}

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props)
        Object.assign(this, props)
    }

    // 返回控件的 ID
    getWidgetId() { return this.__widgetId }


    /**
    * 数据类型转换函数（支持无损转换）
    * @param {any} data - 原始数据
    * @param {string} targetType - 目标类型（'string' | 'number' | 'boolean' | 'object' | 'array'）
    * @returns {any} - 转换后的数据
    */

    // 转换
    converType(data, targetType) {
        // 判断原始数据类型
        const originalType = Object.prototype.toString.call(data).slice(8, -1).toLowerCase();

        // 序列化逻辑（转字符串时处理特殊类型）
        const serialize = (value) => {
            return JSON.stringify(value, (_, val) => {
                // 处理特殊类型
                if (val instanceof Date) {
                    return { __type__: 'Date', value: val.toISOString() };
                } else if (val instanceof RegExp) {
                    return { __type__: 'RegExp', source: val.source, flags: val.flags };
                } else if (typeof val === 'function') {
                    return { __type__: 'Function', body: val.toString() };
                } else if (val === undefined) {
                    return { __type__: 'Undefined' };
                }
                return val;
            });
        };
    
        // 反序列化逻辑（从字符串还原特殊类型）
        const deserialize = (str) => {
            return JSON.parse(str, (_, val) => {
                if (typeof val === 'object' && val!== null) {
                    switch (val.__type__) {
                        case 'Date':
                            return new Date(val.value);
                        case 'RegExp':
                            return new RegExp(val.source, val.flags);
                        case 'Function':
                            return new Function(`return ${val.body}`)();
                        case 'Undefined':
                            return undefined;
                    }
                }
                return val;
            });
        };
    
        let result; // 用于存储最终结果
    
        // 转换逻辑
        switch (targetType.toLowerCase()) {
            // 转字符串（支持特殊类型）
            case'string':
                if (originalType === 'object' || originalType === 'array') {
                    result = serialize(data);
                } else {
                    result = String(data);
                }
                break;
            // 转数组（支持还原特殊类型）
            case 'array':
                if (typeof data ==='string') {
                    try {
                        const parsed = deserialize(data);
                        result = Array.isArray(parsed)? parsed : [parsed];
                    } catch {
                        result = data.includes(',')? data.split(',') : [data];
                    }
                } else if (originalType === 'object') {
                    result = Object.entries(data);
                } else {
                    result = Array.from(data);
                }
                break;
            // 转对象（支持还原特殊类型）
            case 'object':
                if (typeof data ==='string') {
                    try {
                        result = deserialize(data);
                    } catch {
                        result = { value: data };
                    }
                } else if (originalType === 'array') {
                    result = { ...data };
                } else {
                    result = Object(data);
                }
                break;
            // 转数字
            case 'number':
                if (originalType === 'boolean') {
                    result = data? 1 : 0;
                } else if (originalType === 'array') {
                    result = data.length;
                } else if (originalType === 'object') {
                    result = NaN;
                } else {
                    result = Number(data);
                }
                break;
            // 转布尔值
            case 'boolean':
                if (originalType ==='string') {
                    result = data.toLowerCase() === 'true'? true :
                        data.toLowerCase() === 'false'? false :!!data;
                } else {
                    result = Boolean(data);
                }
                break;
            default:
                result = data;
        }
    
        return result;
    
    }

}

exports.types = types
exports.widget = Widget