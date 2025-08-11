import('https://unpkg.com/vconsole@latest/dist/vconsole.min.js')
var that = this
const types = {
    type: 'VCONSOLE_XJ',
    icon: '',
    title: 'vConsole',
    version: '1.0.0',
    author: 'XJ王大哥(QQ2357942846)',
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    methods: [
        {
            key: 'new',
            label: '加载',
            params: [],
        },
    ],
    events: []
}

class XJWidget extends InvisibleWidget {
    constructor(p) {
        super(p)
        Object.assign(this,p)
    }
    new = () => {let vConsole = new that.VConsole()}
}

for (let i of types.methods) i.blockOptions = {...i.blockOptions, callMethodLabel: false}

exports.types = types
exports.widget = XJWidget