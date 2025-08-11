const b64code_Base58 = "Ly8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjguMAooZnVuY3Rpb24oKSB7CiAgdmFyIEFMUEhBQkVULCBBTFBIQUJFVF9NQVAsIEJhc2U1OCwgaTsKCiAgQmFzZTU4ID0gKHR5cGVvZiBtb2R1bGUgIT09ICJ1bmRlZmluZWQiICYmIG1vZHVsZSAhPT0gbnVsbCA/IG1vZHVsZS5leHBvcnRzIDogdm9pZCAwKSB8fCAod2luZG93LkJhc2U1OCA9IHt9KTsKCiAgQUxQSEFCRVQgPSAiMTIzNDU2Nzg5QUJDREVGR0hKS0xNTlBRUlNUVVZXWFlaYWJjZGVmZ2hpamttbm9wcXJzdHV2d3h5eiI7CgogIEFMUEhBQkVUX01BUCA9IHt9OwoKICBpID0gMDsKCiAgd2hpbGUgKGkgPCBBTFBIQUJFVC5sZW5ndGgpIHsKICAgIEFMUEhBQkVUX01BUFtBTFBIQUJFVC5jaGFyQXQoaSldID0gaTsKICAgIGkrKzsKICB9CgogIEJhc2U1OC5lbmNvZGUgPSBmdW5jdGlvbihidWZmZXIpIHsKICAgIHZhciBjYXJyeSwgZGlnaXRzLCBqOwogICAgaWYgKGJ1ZmZlci5sZW5ndGggPT09IDApIHsKICAgICAgcmV0dXJuICIiOwogICAgfQogICAgaSA9IHZvaWQgMDsKICAgIGogPSB2b2lkIDA7CiAgICBkaWdpdHMgPSBbMF07CiAgICBpID0gMDsKICAgIHdoaWxlIChpIDwgYnVmZmVyLmxlbmd0aCkgewogICAgICBqID0gMDsKICAgICAgd2hpbGUgKGogPCBkaWdpdHMubGVuZ3RoKSB7CiAgICAgICAgZGlnaXRzW2pdIDw8PSA4OwogICAgICAgIGorKzsKICAgICAgfQogICAgICBkaWdpdHNbMF0gKz0gYnVmZmVyW2ldOwogICAgICBjYXJyeSA9IDA7CiAgICAgIGogPSAwOwogICAgICB3aGlsZSAoaiA8IGRpZ2l0cy5sZW5ndGgpIHsKICAgICAgICBkaWdpdHNbal0gKz0gY2Fycnk7CiAgICAgICAgY2FycnkgPSAoZGlnaXRzW2pdIC8gNTgpIHwgMDsKICAgICAgICBkaWdpdHNbal0gJT0gNTg7CiAgICAgICAgKytqOwogICAgICB9CiAgICAgIHdoaWxlIChjYXJyeSkgewogICAgICAgIGRpZ2l0cy5wdXNoKGNhcnJ5ICUgNTgpOwogICAgICAgIGNhcnJ5ID0gKGNhcnJ5IC8gNTgpIHwgMDsKICAgICAgfQogICAgICBpKys7CiAgICB9CiAgICBpID0gMDsKICAgIHdoaWxlIChidWZmZXJbaV0gPT09IDAgJiYgaSA8IGJ1ZmZlci5sZW5ndGggLSAxKSB7CiAgICAgIGRpZ2l0cy5wdXNoKDApOwogICAgICBpKys7CiAgICB9CiAgICByZXR1cm4gZGlnaXRzLnJldmVyc2UoKS5tYXAoZnVuY3Rpb24oZGlnaXQpIHsKICAgICAgcmV0dXJuIEFMUEhBQkVUW2RpZ2l0XTsKICAgIH0pLmpvaW4oIiIpOwogIH07CgogIEJhc2U1OC5kZWNvZGUgPSBmdW5jdGlvbihzdHJpbmcpIHsKICAgIHZhciBieXRlcywgYywgY2FycnksIGo7CiAgICBpZiAoc3RyaW5nLmxlbmd0aCA9PT0gMCkgewogICAgICByZXR1cm4gbmV3ICh0eXBlb2YgVWludDhBcnJheSAhPT0gInVuZGVmaW5lZCIgJiYgVWludDhBcnJheSAhPT0gbnVsbCA/IFVpbnQ4QXJyYXkgOiBCdWZmZXIpKDApOwogICAgfQogICAgaSA9IHZvaWQgMDsKICAgIGogPSB2b2lkIDA7CiAgICBieXRlcyA9IFswXTsKICAgIGkgPSAwOwogICAgd2hpbGUgKGkgPCBzdHJpbmcubGVuZ3RoKSB7CiAgICAgIGMgPSBzdHJpbmdbaV07CiAgICAgIGlmICghKGMgaW4gQUxQSEFCRVRfTUFQKSkgewogICAgICAgIHRocm93ICJCYXNlNTguZGVjb2RlIHJlY2VpdmVkIHVuYWNjZXB0YWJsZSBpbnB1dC4gQ2hhcmFjdGVyICciICsgYyArICInIGlzIG5vdCBpbiB0aGUgQmFzZTU4IGFscGhhYmV0LiI7CiAgICAgIH0KICAgICAgaiA9IDA7CiAgICAgIHdoaWxlIChqIDwgYnl0ZXMubGVuZ3RoKSB7CiAgICAgICAgYnl0ZXNbal0gKj0gNTg7CiAgICAgICAgaisrOwogICAgICB9CiAgICAgIGJ5dGVzWzBdICs9IEFMUEhBQkVUX01BUFtjXTsKICAgICAgY2FycnkgPSAwOwogICAgICBqID0gMDsKICAgICAgd2hpbGUgKGogPCBieXRlcy5sZW5ndGgpIHsKICAgICAgICBieXRlc1tqXSArPSBjYXJyeTsKICAgICAgICBjYXJyeSA9IGJ5dGVzW2pdID4+IDg7CiAgICAgICAgYnl0ZXNbal0gJj0gMHhmZjsKICAgICAgICArK2o7CiAgICAgIH0KICAgICAgd2hpbGUgKGNhcnJ5KSB7CiAgICAgICAgYnl0ZXMucHVzaChjYXJyeSAmIDB4ZmYpOwogICAgICAgIGNhcnJ5ID4+PSA4OwogICAgICB9CiAgICAgIGkrKzsKICAgIH0KICAgIGkgPSAwOwogICAgd2hpbGUgKHN0cmluZ1tpXSA9PT0gIjEiICYmIGkgPCBzdHJpbmcubGVuZ3RoIC0gMSkgewogICAgICBieXRlcy5wdXNoKDApOwogICAgICBpKys7CiAgICB9CiAgICByZXR1cm4gbmV3ICh0eXBlb2YgVWludDhBcnJheSAhPT0gInVuZGVmaW5lZCIgJiYgVWludDhBcnJheSAhPT0gbnVsbCA/IFVpbnQ4QXJyYXkgOiBCdWZmZXIpKGJ5dGVzLnJldmVyc2UoKSk7CiAgfTsKCn0pLmNhbGwodGhpcyk7";
var window = this.window;
window.eval(atob(b64code_Base58));
const types = {
    isInvisibleWidget: true,
    type: "BASE_58_WIDGET",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "BASE58",
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

types['methods'].push({
    key: 'encoding',
    label: '编码',
    params: [{
        key: 'data',
        label: '',
        valueType: 'string',
        defaultValue: "",
    },],
    valueType: 'string',

})
Widget.prototype.encoding = function (data) {
    return Base58.encode(new TextEncoder().encode(data));
}
types['methods'].push({
    key: 'decoding',
    label: '解码',
    params: [{
        key: 'data',
        label: '',
        valueType: 'string',
        defaultValue: "",
    },],
    valueType: 'string',

})
Widget.prototype.decoding = function (data) {
    return new TextDecoder().decode(Base58.decode(data))
}
exports.types = types;
exports.widget = Widget;