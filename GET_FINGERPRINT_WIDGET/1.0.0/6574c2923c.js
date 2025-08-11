var document = this.document;
var script = document.createElement('script');
script.src = `https://cdn.staticfile.org/fingerprintjs2/2.1.0/fingerprint2.min.js`;
document.body.appendChild(script);
const types = {
    isInvisibleWidget: true,
    type: "GET_FINGERPRINT_WIDGET",
    icon: "https://cdn.cocotais.cn/project/waddle-2/logo/waddle2-logo.svg",
    title: "获取指纹",
    version: "1.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
    }
}

types.methods.push({
    key: 'Get',
    label: '获取指纹',
    params: [],
    valueType: 'string',
});

Widget.prototype.Get = function () {
    return new Promise((resolve, reject) => {
        let excludes = {
            userAgent: true,
            audio: true,
            enumerateDevices: true,
            fonts: true,
            fontsFlash: true,
            webgl: true,
            canvas: true
        };
        let options = { excludes: excludes };
        Fingerprint2.get(options, function (components) {
            const values = components.map(function (component) {
                return component.value
            });
            const murmur = Fingerprint2.x64hash128(values.join(''), 31);
            resolve(murmur);
        });
    });
};

exports.types = types;
exports.widget = Widget;