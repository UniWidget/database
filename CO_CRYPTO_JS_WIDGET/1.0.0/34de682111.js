/*支持的算法:
哈希算法:
MD5
SHA1
SHA224
SHA256
SHA384
SHA512
SHA3
RIPEMD160
HmacMD5
HmacSHA1
HmacSHA224
HmacSHA256
HmacSHA384
HmacSHA512
HmacSHA3
HmacRIPEMD160
加密算法:
AES
DES
TripleDES
Rabbit
RC4
作者：Aiskikan
QQ：3550484699
*/

const CryptoJS = require('crypto-js');
const CO_CRYPTO_JS_WIDGET = {
    type: 'CO_CRYPTO_JS_WIDGET',
    icon: 'https://static.codemao.cn/appcraft/extension-widgets/production/blink-button.svg',
    title: 'CoCryptoJS',
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    methods: [
        {
            key: 'HASH',
            label: '散列',
            params: [
                {
                    key: 'algo',
                    label: '',
                    valueType: 'string',
                    defaultValue: 'MD5',
                    dropdown: [
                        { label: 'MD5', value: 'MD5' },
                        { label: 'SHA1', value: 'SHA1' },
                        { label: 'SHA224', value: 'SHA224' },
                        { label: 'SHA256', value: 'SHA256' },
                        { label: 'SHA384', value: 'SHA384' },
                        { label: 'SHA512', value: 'SHA512' },
                        { label: 'SHA3', value: 'SHA3' },
                        { label: 'RIPEMD160', value: 'RIPEMD160' },
                    ]
                },
                {

                    key: 'data',
                    label: '数据',
                    valueType: 'string',
                    defaultValue: '数据'
                }
            ],
            valueType: 'string'
        },
        {
            key: 'HMAC',
            label: '散列 HMAC_',
            params: [
                {
                    key: 'algo',
                    label: '',
                    valueType: 'string',
                    defaultValue: 'HmacMD5',
                    dropdown: [
                        { label: 'MD5', value: 'HmacMD5' },
                        { label: 'SHA1', value: 'HmacSHA1' },
                        { label: 'SHA224', value: 'HmacSHA224' },
                        { label: 'SHA256', value: 'HmacSHA256' },
                        { label: 'SHA384', value: 'HmacSHA384' }, 
                        { label: 'SHA512', value: 'HmacSHA512' }, 
                        { label: 'SHA3', value: 'HmacSHA3' }, 
                        { label: 'RIPEMD160', value: 'HmacRIPEMD160' },
                    ]
                },
                {

                    key: 'data',
                    label: '数据',
                    valueType: 'string',
                    defaultValue: '数据'
                },
                {

                    key: 'key',
                    label: '密钥',
                    valueType: 'string',
                    defaultValue: '密钥'
                }
            ],
            valueType: 'string'
        },
        {
            key: 'Encryption',
            label: '加密算法',
            params: [
                {
                    key: 'algo',
                    label: '',
                    valueType: 'string',
                    defaultValue: 'AES',
                    dropdown: [
                        { label: 'AES', value: 'AES' },
                        { label: 'DES', value: 'DES' },
                        { label: 'TripleDES', value: 'TripleDES' },
                        { label: 'Rabbit', value: 'Rabbit' },
                        { label: 'RC4', value: 'RC4' },
                    ]
                },
                {
                    key: 'type',
                    label: '',
                    valueType: 'string',
                    defaultValue: 'encrypt',
                    dropdown: [
                        { label: '加密', value: 'encrypt' },
                        { label: '解密', value: 'decrypt' },
                    ]
                },
                {

                    key: 'data',
                    label: '数据',
                    valueType: 'string',
                    defaultValue: '数据'
                },
                {

                    key: 'key',
                    label: '密钥',
                    valueType: 'string',
                    defaultValue: '密钥'
                }
            ],
            valueType: 'string'
        },
    ],
    events: [],
};

class CoCryptoJS extends InvisibleWidget {
    constructor(props) {
        super(props);
    }
    HASH(algo, data) {
        return CryptoJS[algo](data);
    }
    HMAC(algo,data,key){
        return CryptoJS[algo](data,key);
    }
    Encryption(algo,type,data,key){
        var o= CryptoJS[algo][type](data, key);
        if(type=='decrypt')return o.toString(CryptoJS.enc.Utf8);
        else return o.toString();
    }
};
exports.types = CO_CRYPTO_JS_WIDGET;
exports.widget = CoCryptoJS;
