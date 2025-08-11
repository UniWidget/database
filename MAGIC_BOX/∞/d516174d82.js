const author = 'XJ王大哥(QQ2357942846)';

const icon = [
    'https://patchwiki.biligame.com/images/mc/e/ec/q2bqsbihpf79jcv7t9hsex3wzessud2.png',
    'https://patchwiki.biligame.com/images/mc/7/7f/eyd7y5byiyncxknra9nas4hhx07x03s.png',
    'https://patchwiki.biligame.com/images/mc/1/1c/5jhe2antkom0fcqs1p38h7h7p4syppl.png',
    'https://patchwiki.biligame.com/images/mc/8/8a/rcyyv91au9bphaih4nksu5xgcjzy8fe.png',
    'https://patchwiki.biligame.com/images/mc/5/54/edrinnsoylvh91n2228koy4jlq70tr8.png',
    'https://patchwiki.biligame.com/images/mc/c/c3/hkqdl4byepuu2y164uq6xg4ixjst5d8.png',
    'https://patchwiki.biligame.com/images/mc/3/39/6lajkvoyobu1qr7mivxwpqcllnxwka4.png',
    'https://patchwiki.biligame.com/images/mc/0/0d/kocrlc2m8afxjl316cl7ej2xpa3vr3p.png',
    'https://patchwiki.biligame.com/images/mc/9/9e/8pl26ootjsdvbfrn0jdor8oz9eunmst.png',
    'https://patchwiki.biligame.com/images/mc/a/af/148iy2turrj3ams0e2g5dghykz7azae.png',
    'https://patchwiki.biligame.com/images/mc/8/82/hmqli23vxfn8y6nfkjc8ami1vcur90b.png',
    'https://patchwiki.biligame.com/images/mc/0/08/sigfwp7m8elbcp2glttwklkrnp0psmf.png',
    'https://patchwiki.biligame.com/images/mc/c/ca/5a7ffdzndy2s1hblu19ts74tdsb7im6.png',
    'https://patchwiki.biligame.com/images/mc/a/a2/62oplcsmd0193a3kdpx05ha58abde1c.png',
    'https://patchwiki.biligame.com/images/mc/0/05/6qaheae5f8ulskr490qwbp2eghcu3zz.png',
    'https://patchwiki.biligame.com/images/mc/8/82/sbwwj1bfv433yowqf8z4zi0po2drvyn.png',
];
const any = ['string', 'number', 'boolean', 'array', 'object', 'color', 'undefined'];
const defaultValueObj = {
    string: '',
    multilineString: '',
    number: 0,
    boolean: false,
};
const operators = [
    '++',
    '--',
    '+',
    '~',
    '!',
    '+',
    '-',
    '/',
    '*',
    '%',
    '**',
    '<',
    '>',
    '<=',
    '>=',
    '==',
    '!=',
    '===',
    '!==',
    '<<',
    '>>',
    '>>>',
    '&',
    '|',
    '^',
    '&&',
    '||',
    '??',
    '=',
    '*=',
    '**=',
    '/=',
    '%=',
    '+=',
    '-=',
    '<<=',
    '>>=',
    '>>>=',
    '&=',
    '^=',
    '|=',
    '&&=',
    '||=',
    '??=',
];
const importArray = [
    // math.js 数学运算 https://unpkg.com/mathjs@11.11.1/lib/browser/math.js
    'https://static.codemao.cn/coco/player/unstable/HyLvdsol6.text/javascript?hash=FtXAGIwERuaF2LPxEL-cXNwlO29y',
    // nerdamer 解方程 https://unpkg.com/nerdamer@1.1.13/all.min.js
    'https://static.codemao.cn/coco/player/unstable/HJ0aeEhla.text/javascript?hash=FluMFrAVN90VpofaiftsK3ZXWg5p',
    'https://unpkg.com/coco-light-blue',
];

var document = this.document;
var window = this.window;

for (const i of importArray) {
    // 检测是否重复加载
    if (document.querySelector(`script[src="${i}"]`)) continue;

    let script = document.createElement('script');
    script.setAttribute('name', `MAGIC_BOX`);
    script.setAttribute('src', i);
    document.body.appendChild(script);
}

const types = {
    type: 'MAGIC_BOX',
    icon: icon[Math.floor(Math.random() * icon.length)],
    title: '魔盒',
    version: '∞',
    author: 'XJ王大哥(QQ2357942846)',
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    methods: [
        { line: '数字', color: 'rgb(254, 174, 138)' },
        {
            label: '数学运算',
            valueType: any,
            params: [{ valueType: 'string', defaultValue: 'cos(1)+2pi' }],
            def: a => globalThis.math.evaluate(a),
        },
        {
            label: '解方程',
            valueType: 'number',
            params: [
                { valueType: 'string', defaultValue: 'x+5-3+x=6+x-2' },
                { label: '中的', valueType: 'string', defaultValue: 'x' },
            ],
            def: (a, b) => globalThis.nerdamer.solve(a, b).toString().slice(1, -1),
        },
        { line: '布尔', color: 'rgb(254, 174, 138)' },
        {
            label: '一元运算符',
            valueType: any,
            params: [{ valueType: 'string', defaultValue: '~' }, {}],
            def: (a, b, c) => {
                if (operators.includes(a)) return new Function('b', `return ${a} b`)(b);
            },
        },
        {
            label: '二元运算符',
            valueType: any,
            params: [{}, { valueType: 'string', defaultValue: '>' }, {}],
            def: (a, b, c) => {
                if (operators.includes(b)) return new Function('a', 'c', `return a${b}c`)(a, c);
            },
        },
        {
            key: '三元运算符',
            valueType: any,
            params: [{}, { label: '?' }, { label: ':' }],
            def: (a, b, c) => (a ? b : c),
        },
        { line: '字符', color: 'rgb(254, 174, 138)' },
        {
            key: '转大小写',
            valueType: 'string',
            params: [{ valueType: 'string' }, { label: '转', labelAfter: '写', dropdown: ['大', '小'] }],
            def: (a, b) => {
                switch (b) {
                    case '大':
                        return a.toUpperCase();
                    case '小':
                        return a.toLowerCase();
                }
            },
        },
        {
            label: '多行',
            valueType: 'string',
            params: [{}],
            def: t => t,
        },
        {
            label: '正则',
            valueType: any,
            params: [
                { label: '表达式', valueType: 'string' },
                { label: '标志', valueType: 'string', defaultValue: 'i' },
            ],
            def: (a, b) => new RegExp(a, b),
        },
        {
            key: '正则方法',
            valueType: any,
            params: [{ dropdown: ['检索', '匹配', '索引'] }, { label: '正则' }, { label: '字符' }],
            def: (a, b, c) => {
                if (typeof b != 'object') b = new RegExp(b);
                switch (a) {
                    case '检索':
                        return b.test(c);
                    case '匹配':
                        return c.match(b);
                    case '索引':
                        return c.search(b);
                }
            },
        },
        {
            label: '替换',
            valueType: any,
            params: [
                { label: '', valueType: 'string' },
                { label: '的', dropdown: ['第一个', '全部'] },
                {},
                { label: '为' },
            ],
            def: (a, b, c, d) => {
                b = { 第一个: 'replace', 全部: 'replaceAll' }[b];
                return a[b](c, d);
            },
        },
        {
            label: '敏感词检测',
            valueType: any,
            params: [{ label: '字符' }, { label: '敏感词列表' }],
            def: (a, b) => {
                // 特殊符号过滤逻辑
                const ignoreChars =
                    ' \t\r\n~!@#$%^&*()_+-=【】、{}|;\':"，。、《》？αβγδεζηθικλμνξοπρστυφχψωΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ。，、；：？！…—·ˉ¨‘’“”々～‖∶＂＇｀｜〃〔〕〈〉《》「」『』．〖〗【】（）［］｛｝ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫ⒈⒉⒊⒋⒌⒍⒎⒏⒐⒑⒒⒓⒔⒕⒖⒗⒘⒙⒚⒛㈠㈡㈢㈣㈤㈥㈦㈧㈨㈩①②③④⑤⑥⑦⑧⑨⑩⑴⑵⑶⑷⑸⑹⑺⑻⑼⑽⑾⑿⒀⒁⒂⒃⒄⒅⒆⒇≈≡≠＝≤≥＜＞≮≯∷±＋－×÷／∫∮∝∞∧∨∑∏∪∩∈∵∴⊥∥∠⌒⊙≌∽√§№☆★○●◎◇◆□℃‰€■△▲※→←↑↓〓¤°＃＆＠＼︿＿￣―♂♀┌┍┎┐┑┒┓─┄┈├┝┞┟┠┡┢┣│┆┊┬┭┮┯┰┱┲┳┼┽┾┿╀╁╂╃└┕┖┗┘┙┚┛━┅┉┤┥┦┧┨┩┪┫┃┇┋┴┵┶┷┸┹┺┻╋╊╉╈╇╆╅╄';
                const ignoreObj = {};
                for (let i = 0, j = ignoreChars.length; i < j; i++) {
                    ignoreObj[ignoreChars.charCodeAt(i)] = true;
                }

                function buildMap(wordList) {
                    const result = {};
                    for (let i = 0, len = wordList.length; i < len; ++i) {
                        let map = result;
                        const word = wordList[i];
                        for (let j = 0; j < word.length; ++j) {
                            const ch = word.charAt(j).toLowerCase();
                            if (map[ch]) {
                                map = map[ch];
                                if (map.empty) {
                                    break;
                                }
                            } else {
                                if (map.empty) {
                                    delete map.empty;
                                }
                                map[ch] = {
                                    empty: true,
                                };
                                map = map[ch];
                            }
                        }
                    }
                    return result;
                }

                // 具体检测代码。
                function check(map, content) {
                    const result = [];
                    let stack = [];
                    let point = map;
                    for (let i = 0, len = content.length; i < len; ++i) {
                        const code = content.charCodeAt(i);
                        if (ignoreObj[code]) {
                            continue;
                        }
                        const ch = content.charAt(i);
                        const item = point[ch.toLowerCase()];
                        if (!item) {
                            i = i - stack.length;
                            stack = [];
                            point = map;
                        } else if (item.empty) {
                            stack.push(ch);
                            result.push(stack.join(''));
                            stack = [];
                            point = map;
                        } else {
                            stack.push(ch);
                            point = item;
                        }
                    }
                    return result;
                }
                return check(buildMap(b), a);
            },
        },
        {
            label: '生成UUID',
            valueType: 'string',
            params: [],
            def: () => Number(Math.random().toString().substr(2, 5) + Date.now()).toString(36),
        },
        { line: '列表', color: 'rgb(249, 204, 55)' },
        {
            label: '合并',
            params: [{}, {}],
            def: (a, b) => (a = a.concat(b)),
        },
        {
            label: '翻转',
            params: [{}],
            def: a => a.reverse(),
        },
        {
            key: '设置键',
            params: [
                { label: '设置' },
                { label: '第', labelAfter: '项', valueType: 'number' },
                { label: '键', valueType: 'string' },
                { label: '的值为' },
            ],
            def: (a, b, c, d) => (a[b - 1][c] = d),
        },
        {
            label: '截取',
            valueType: any,
            params: [{}, { label: '第', valueType: 'number' }, { label: '到项', valueType: 'number' }],
            def: (a, b, c) => a.slice(b - 1, c),
        },
        {
            label: '转字符串',
            valueType: any,
            params: [{}, { label: '分割符', valueType: 'string' }],
            def: (a, b) => a.join(b),
        },
        {
            key: '二维列表提取列',
            label: '提取二维列表',
            valueType: any,
            author: '明天的太阳',
            params: [{}, { label: '的第', labelAfter: '列', valueType: 'number' }],
            def: (a, b) => {
                b--;
                return a.map(v => v[b]);
            },
        },
        {
            key: '列表遍历方法',
            valueType: any,
            params: [
                { label: '调用列表' },
                {
                    label: '的遍历方法',
                    valueType: 'string',
                    defaultValue: 'map',
                },
                {
                    label: '执行代码',
                    valueType: 'multilineString',
                    checkType: 'string',
                    defaultValue: 'return element',
                },
            ],
            def: (a, b, c) => a[b](new Function('element', 'index', 'array', c)),
            tooltip: '执行代码中可使用element,index,array传入参数',
        },
        { line: '字典', color: 'rgb(160, 115, 255)' },
        {
            key: '字典合并',
            label: '合并',
            params: [{}, {}],
            def: (a, b) => Object.assign(a, b),
        },
        {
            key: '相关列表',
            valueType: any,
            params: [{ labelAfter: '的' }, { labelAfter: '列表', dropdown: ['属性', '值', '键值对'] }],
            def: (a, b) => {
                switch (b) {
                    case '属性':
                        return Object.keys(a);
                    case '值':
                        return Object.values(a);
                    case '键值对':
                        return Object.entries(a);
                }
            },
        },
        {
            label: '键值对列表转字典',
            valueType: any,
            params: [{}],
            def: a => Object.fromEntries(a),
        },
        {
            label: '字典转JSON',
            valueType: 'string',
            params: [{}],
            def: a => JSON.stringify(a),
        },
        {
            label: 'JSON转字典',
            valueType: any,
            params: [{ valueType: 'string' }],
            def: a => JSON.parse(a),
        },
        {
            key: '立即修改键',
            params: [{ label: '修改字典' }, { label: '键' }, { label: '的值为' }],
            valueType: any,
            def: (a, b, c) => {
                a[b] = c;
                return a;
            },
        },
        {
            key: '立即删除键',
            params: [{ label: '删除字典' }, { label: '键' }],
            valueType: any,
            def: (a, b) => {
                delete a[b];
                return a;
            },
        },
        { line: '时间', color: 'rgb(0, 175, 195)' },
        {
            label: '当前时间戳',
            valueType: 'number',
            params: [],
            def: () => Date.now(),
        },
        {
            label: '日期字符串转时间戳',
            valueType: 'number',
            params: [{ valueType: 'string' }],
            def: a => Date.parse(a),
        },
        {
            label: '时间戳转日期字符串',
            valueType: 'string',
            params: [{ valueType: 'number' }, { labelAfter: '格式', dropdown: ['地区', '美式', 'ISO'] }],
            def: (a, b) => {
                a = new Date(a);
                switch (b) {
                    case '地区':
                        return a.toLocaleString();
                    case '美式':
                        return a.toString();
                    case 'ISO':
                        return a.toISOString();
                }
            },
        },
        {
            label: '多久前',
            valueType: 'string',
            author: '明天的太阳',
            params: [{ label: '以前的时间' }],
            def: a => {
                let timePublish = new Date(a);
                let timeNow = new Date();
                let minute = 1000 * 60;
                let hour = minute * 60;
                let day = hour * 24;
                let month = day * 30;
                let year = month * 12;
                let diffValue = timeNow - timePublish;
                let diffMonth = diffValue / month;
                let diffWeek = diffValue / (7 * day);
                let diffDay = diffValue / day;
                let diffHour = diffValue / hour;
                let diffMinute = diffValue / minute;
                let diffYear = diffValue / year;
                if (diffValue < 0) return '刚刚';
                else if (diffYear > 1) return parseInt(diffYear) + '年前';
                else if (diffMonth > 1) return parseInt(diffMonth) + '月前';
                else if (diffWeek > 1) return parseInt(diffWeek) + '周前';
                else if (diffDay > 1) return parseInt(diffDay) + '天前';
                else if (diffHour > 1) return parseInt(diffHour) + '小时前';
                else if (diffMinute > 1) return parseInt(diffMinute) + '分钟前';
                else if (diffMinute <= 1) return '刚刚';
                else return undefined;
            },
        },
        { line: '数据类型', color: 'rgb(248, 135, 103)' },
        {
            label: '特殊类型',
            valueType: any,
            params: [
                {
                    dropdown: ['Undefined', 'Null', 'NaN', 'Infinity', '-Infinity', '空列表', '空字典'],
                },
            ],
            def: a =>
                ({
                    Undefined: undefined,
                    Null: null,
                    NaN: NaN,
                    Infinity: Infinity,
                    '-Infinity': -Infinity,
                    空列表: [],
                    空字典: {},
                }[a]),
        },
        {
            label: '类型检测',
            valueType: 'string',
            params: [{}],
            def: a => typeof a,
        },
        {
            label: '高级类型检测',
            valueType: 'string',
            params: [{}],
            def: a => Object.prototype.toString.call(a).slice(8, -1).toLowerCase(),
        },
        { line: 'URL', color: 'rgb(104, 205, 255)' },
        {
            label: '跨域',
            valueType: 'string',
            author: 'shulin',
            params: [{ valueType: 'string', defaultValue: 'https://www.baidu.com/' }],
            def: a => {
                type = a.startsWith('http://') ? 'http' : 'https';
                return a.replace(`${type}://`, `https://coco.codemao.cn/http-widget-proxy/${type}@SEP@`);
            },
        },
        { line: 'DOM', color: 'rgb(0, 175, 195)' },
        {
            key: '设置元素属性',
            params: [
                { label: '设置选择器', valueType: 'string' },
                { dropdown: ['属性', '样式'] },
                { label: '键', valueType: 'string' },
                { label: '的值为', valueType: 'string' },
            ],
            def: (a, b, c, d) => {
                switch (b) {
                    case '属性':
                        return document.querySelector(a).setAttribute(c, d);
                    case '样式':
                        return document.querySelector(a).style.setProperty(c, d);
                }
            },
        },
        {
            key: '获取元素属性',
            valueType: any,
            params: [
                { label: '获取选择器', valueType: 'string' },
                { dropdown: ['属性', '样式'] },
                { label: '键', labelAfter: '的值', valueType: 'string' },
            ],
            def: (a, b, c) => {
                switch (b) {
                    case '属性':
                        return document.querySelector(a).getAttribute(c);
                    case '样式':
                        return document.querySelector(a).style.getPropertyValue(c);
                }
            },
        },
        {
            key: '删除元素属性',
            params: [
                { label: '删除选择器', valueType: 'string' },
                { dropdown: ['属性', '样式'] },
                { label: '的键', valueType: 'string' },
            ],
            def: (a, b, c) => {
                switch (b) {
                    case '属性':
                        return document.querySelector(a).removeAttribute(c);
                    case '样式':
                        return document.querySelector(a).style.removeAttribute(c);
                }
            },
        },
        { line: 'HTML', color: 'rgb(0, 175, 195)' },
        {
            label: '快速HTML',
            valueType: any,
            params: [{ dropdown: ['图片', '音频', '视频'] }, { label: '链接', valueType: 'string' }],
            def: (a, b) => {
                switch (a) {
                    case '图片':
                        return `<img src="${b}">`;
                    case '音频':
                        return `<audio controls src="${b}"></audio>`;
                    case '视频':
                        return `<video controls style="width:100%;" src="${b}"></video>`;
                }
            },
        },
        {
            label: '构建HTML',
            valueType: 'string',
            params: [
                { label: '标签', valueType: 'string' },
                { label: '内容' },
                { label: '解析HTML', valueType: 'boolean' },
                { label: '属性字典' },
                { label: '样式字典' },
            ],
            def: (a, b, c, d, e) => {
                a = document.createElement(a);
                if (c) a.innerHTML = b;
                else a.innerText = b;
                for (let i in d) a.setAttribute(i, d[i]);
                let eCssText = '';
                for (let i in e) eCssText += `${i}:${e[i]};`;
                a.setAttribute('style', eCssText);
                return a.outerHTML;
            },
        },
        { line: 'JS', color: 'rgb(85, 116, 248)' },
        {
            key: '执行代码_无返回',
            label: '执行代码',
            params: [{ valueType: 'string' }],
            def: a => new Function(`${a}`)(),
        },
        {
            label: '执行代码',
            valueType: any,
            params: [{ valueType: 'string' }],
            def: a => new Function(`return ${a}`)(),
        },
        { line: '调试', color: 'rgba(199, 105, 255, 1)' },
        {
            label: '代码计时',
            params: [{ dropdown: ['开始', '打印', '结束'] }],
            def: function (a) {
                log = a =>
                    this.widgetWarn('代码计时 - ' + (this.time ? `${a}用时: ${Date.now() - this.time} ms` : '未开始'));
                switch (a) {
                    case '开始':
                        this.time = Date.now();
                        break;
                    case '打印':
                        log('打印');
                        break;
                    case '结束':
                        log('结束');
                        this.time = undefined;
                        break;
                }
            },
        },
    ],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(p) {
        super(p);
        Object.assign(this, p);
    }
}

console.time('MagicBox');
let color, line, currentLine;
types.methods = types.methods
    .map(v => {
        if ('line' in v) {
            // 处理分组
            if (v.color) color = v.color;
            currentLine = v.line;
        } else {
            // 处理方法
            if (!('key' in v)) v.key = v.label;
            v.key = currentLine + '_' + v.key;
            if ('def' in v) Widget.prototype[v.key] = v.def;
            v.blockOptions = {
                ...v.blockOptions,
                callMethodLabel: false,
                line: line,
                color: color,
            };
            // 处理介绍
            v.tooltip = `${v.key}${v.tooltip ? `\n小技巧：${v.tooltip}` : ''}${
                v.author ? `\n贡献者：${v.author}` : ''
            }`;
            // 处理参数
            v.params = v.params.map((v, i) => {
                // 处理缺省key
                v.key = i;
                if ('valueType' in v) {
                    // 根据valueType处理缺省defaultValue
                    if (!('defaultValue' in v)) v.defaultValue = defaultValueObj[v.valueType];
                } else {
                    // 处理缺省valueType
                    v.valueType = any;
                    v.defaultValue = '';
                }
                // 处理选项
                if ('dropdown' in v) {
                    v.valueType = 'string';
                    v.defaultValue = v.dropdown[0];
                    v.dropdown = v.dropdown.map(v => ({ label: v, value: v }));
                }
                return v;
            });
        }
        line = v.line;
        return v;
    })
    .filter(v => !('line' in v));
console.timeEnd('MagicBox');
console.log(types);
exports.types = types;
exports.widget = Widget;
