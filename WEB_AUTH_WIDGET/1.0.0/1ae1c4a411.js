document = this.document;
window = this.window;
navigator = this.navigator;
history = this.history;
function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
  }
  
  function str2ab(str) {
    var buf = new ArrayBuffer(str.length*2); // 2 bytes for each char
    var bufView = new Uint16Array(buf);
    for (var i=0, strLen=str.length; i<strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
  }
  
var createCredentialDefaultArgs = {
    publicKey: {
        rp: {
            name: "Acme",
        },

        user: {
            id: new Uint8Array(16),
            name: "john.p.smith@example.com",
            displayName: "John P. Smith",
        },

        pubKeyCredParams: [
            {
                type: "public-key",
                alg: -7,
            },
        ],

        attestation: "direct",

        timeout: 60000,

        challenge: new Uint8Array([
            0x8c, 0x0a, 0x26, 0xff, 0x22, 0x91, 0xc1, 0xe9, 0xb9, 0x4e, 0x2e, 0x17, 0x1a,
            0x98, 0x6a, 0x73, 0x71, 0x9d, 0x43, 0x48, 0xd5, 0xa7, 0x6a, 0x15, 0x7e, 0x38,
            0x94, 0x52, 0x77, 0x97, 0x0f, 0xef,
        ]).buffer,
    },
};

var getCredentialDefaultArgs = {
    publicKey: {
        timeout: 60000,
        challenge: new Uint8Array([
            0x79, 0x50, 0x68, 0x71, 0xda, 0xee, 0xee, 0xb9, 0x94, 0xc3, 0xc2, 0x15, 0x67,
            0x65, 0x26, 0x22, 0xe3, 0xf3, 0xab, 0x3b, 0x78, 0x2e, 0xd5, 0x6f, 0x81, 0x26,
            0xe2, 0xa6, 0x01, 0x7d, 0x74, 0x50,
        ]).buffer,
    },
};

const types = {
    isInvisibleWidget: true,
    type: "WEB_AUTH_WIDGET",
    icon: "https://public.coco-central.cn/waddle/2/waddle2.svg",
    title: "Web Authentication API",
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
    key: 'createCredential',
    label: '创建凭据',
    params: [
        {
            key: 'rpname',
            label: '平台名称',
            valueType: 'string',
            defaultValue: "",
        },
        {
            key: 'username',
            label: '用户名称',
            valueType: 'string',
            defaultValue: "",
        },
        {
            key: 'dispname',
            label: '显示名称',
            valueType: 'string',
            defaultValue: "",
        },],


})
Widget.prototype.createCredential = function (rpname, username, dispname,) {
    createCredentialDefaultArgs.publicKey.rp.name = rpname
    createCredentialDefaultArgs.publicKey.user.name = username
    createCredentialDefaultArgs.publicKey.user.displayName = dispname
    navigator.credentials
        .create(createCredentialDefaultArgs)
        .then((cred) => {
            console.log("NEW CREDENTIAL", cred);
            this.emit('createSuccess', ab2str(cred.rawId))
        })
        .catch((err) => {
            console.log("ERROR", err);
            this.emit('error', err)
        });
}
types['events'].push({
    key: 'createSuccess',
    label: '创建成功',
    params: [
        {
            key: 'rawId',
            label: 'rawId',
            valueType: 'string',
        },],

})

types['methods'].push({
    key: 'getCredential',
    label: '获取凭据',
    params: [
        {
            key: 'rawId',
            label: 'rawId',
            valueType: 'string',
            defaultValue: "",
        },],


})
Widget.prototype.getCredential = function (rawId,) {
    var idList = [
        {
            id: str2ab(rawId),
            transports: ["internal"],
            type: "public-key",
        },
    ];
    getCredentialDefaultArgs.publicKey.allowCredentials = idList;
    navigator.credentials.get(getCredentialDefaultArgs)
        .then((assertion) => {
            console.log("ASSERTION", assertion);
            this.emit('getSuccess')
        })
        .catch((err) => {
            console.log("ERROR", err);
            this.emit('error', err)
        });
}
types['events'].push({
    key: 'getSuccess',
    label: '获取成功',
    params: [],

})

types['events'].push({
    key: 'error',
    label: '出现错误',
    params: [
        {
            key: 'err',
            label: '错误信息',
            valueType: 'string',
        },],

})

exports.types = types;
exports.widget = Widget;