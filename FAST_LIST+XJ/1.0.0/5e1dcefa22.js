// 生成几项 👇🏻👇🏻👇🏻
const number = 20; // 👈🏻修改这里
// 生成几项 👆🏻👆🏻👆🏻

const range = num => [...Array(num).keys()];

const types = {
    type: 'FAST_LIST+XJ',
    icon: 'icon-toolbox-list',
    title: '快速列表',
    author: 'XJ王大哥(2357942846)',
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    methods: [
        ...range(number).map(v => ({
            key: `${v}`,
            label: `${v + 1}项`,
            valueType: ['string', 'array'],
            params: range(v + 1).map(pv => ({
                key: `${pv}`,
                valueType: ['string', 'number', 'boolean', 'array', 'object', 'color', 'undefined'],
                defaultValue: v === 0 && pv === 0 ? '提示：控件文件中可快捷修改生成几项' : '',
            })),
        })),
    ],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
    }
}

range(number).forEach(v => (Widget.prototype[`${v}`] = (...arr) => arr));

for (let i of types.methods) i.blockOptions = { ...i.blockOptions, callMethodLabel: false, inputsInline: false };

exports.types = types;
exports.widget = Widget;
