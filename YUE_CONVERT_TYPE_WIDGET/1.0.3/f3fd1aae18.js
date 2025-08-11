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
    type: "YUE_CONVERT_TYPE_WIDGET",
    icon: "https://static.codemao.cn/pickduck/ryN4wI_nkl.svg?hash=FqhGcmKlNhB-6H7dmsJnngKI_Fe2",
    docs: { url: 'https://www.yuque.com/yuqueyonghuhelltp/yuekj/gkpi874uyq2guf2h' },
    version: "1.0.3",
    isInvisibleWidget: true,
    isGlobalWidget: true,
    hasAnyWidget: true, // YUE
    properties: [],
    events: [],
    methods: [
        {
            key: "convertType",
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
            key: "changeObjectValue",
            label: '将',
            tooltip: '使用说明请看文档',
            valueType: ["string","object"],
            params: [
                { key: "object", label: '对象', valueType: ["string","object"], defaultValue: '{"键名":"键值"}' },
                { key: "key", label: '的键', valueType: 'string', defaultValue: '键名' },
                { key: "changeValue", label: '的值替换为', valueType: ["number","boolean","string","object","array"], defaultValue: '新键值' },
            ],
            blockOptions: { callMethodLabel: false, color: blockColor, line: '其他功能' },
        },
        {
            key: "changeArrayValue",
            label: '将',
            tooltip: '使用说明请看文档',
            valueType: ["string","array"],
            params: [
                { key: "object", label: '列表', valueType: ["string","array"], defaultValue: '[1,2,3]' },
                { key: "key", label: '的第', valueType: 'number', defaultValue: 1 },
                { key: "changeValue", label: '项的值替换为', valueType: ["number","boolean","string","object","array"], defaultValue: '新的值' },
            ],
            blockOptions: { callMethodLabel: false, color: blockColor },
        },
    ],
}

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props)
        Object.assign(this, props)
    }

    // 返回控件的 ID
    // getWidgetId() { return this.__widgetId }


    /**
    * 数据类型转换函数（支持无损转换）
    * @param {any} data - 原始数据
    * @param {string} targetType - 目标类型（'string' | 'number' | 'boolean' | 'object' | 'array'）
    * @returns {any} - 转换后的数据
    */

    // 转换
    convertType(data, targetType) {
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


    changeObjectValue(input, key, changeValue) {
        // 1. 确保最终返回的是一个对象
        let resultObject = {};
    
        // 2. 处理不同的输入类型
        if (input === null || input === undefined) {
            // 如果是 null 或 undefined，直接创建一个新对象
            resultObject = {};
        } else if (typeof input === 'string') {
            try {
                // 尝试解析 JSON 字符串
                resultObject = JSON.parse(input);
                // 确保解析后是对象（JSON.parse可能返回数组或原始值）
                if (typeof resultObject !== 'object' || resultObject === null || Array.isArray(resultObject)) {
                    resultObject = { parsedValue: resultObject };
                }
            } catch (e) {
                // 如果不是有效的 JSON，将整个字符串作为值
                resultObject = { stringValue: input };
            }
        } else if (typeof input === 'object') {
            if (Array.isArray(input)) {
                // 如果是数组，将其作为对象的属性
                resultObject = { arrayValue: input };
            } else {
                // 普通对象，直接浅拷贝
                resultObject = { ...input };
            }
        } else {
            // 其他原始类型（数字、布尔值等），作为对象的属性
            resultObject = { primitiveValue: input };
        }
    
        // 3. 更新或添加指定的键值
        resultObject[key] = changeValue;
    
        // 4. 确保返回的是一个对象
        return resultObject;
    }
    

    changeArrayValue(array, xiang, changValue) {
        // 1. 初始化结果数组
        let resultArray = [];
        
        // 2. 处理不同的array输入类型
        if (array == null) { // 处理null和undefined情况
            resultArray = [];
        } else if (Array.isArray(array)) {
            // 数组类型：创建浅拷贝（注意对象元素仍是引用）
            resultArray = array.slice();
        } else if (typeof array === 'string') {
            // 字符串类型：尝试解析JSON，失败则作为普通字符串
            try {
                const parsed = JSON.parse(array);
                resultArray = Array.isArray(parsed) ? parsed : [parsed];
            } catch (e) {
                resultArray = [array]; // 包含逗号的字符串作为单个元素
            }
        } else {
            // 其他类型（数字、布尔值、对象等）包装成数组
            resultArray = [array];
        }
        
        // 3. 处理xiang参数（用户传入的从1开始的索引）
        const humanIndex = Number(xiang);  // 转换为数字
        const jsIndex = humanIndex - 1;    // 转换为JS从0开始的索引
        
        // 检查是否是有效的数字索引
        if (!isNaN(humanIndex) && humanIndex >= 1) {
            if (jsIndex < resultArray.length) {
                // 索引有效时直接修改（保留原元素类型，即使是包含逗号的字符串）
                resultArray[jsIndex] = changValue;
            } else {
                // 索引超出时追加到末尾
                resultArray.push(changValue);
            }
        } else {
            // xiang参数无效时追加到末尾
            resultArray.push(changValue);
        }
        
        // 4. 返回修改后的数组
        return resultArray;
    }
}

exports.types = types
exports.widget = Widget