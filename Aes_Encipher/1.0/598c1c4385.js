
const types = {
    isInvisibleWidget: true,
    type: "Aes_Encipher",
    icon: "",
    title: "Aes加解密",
    version: "1.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

var CryptoJS = require("crypto-js");

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);

    }

}

  types['methods'].push({
      key: 'aes',
      label: 'Aes加解密',
      params: [ 

          {
              key: 'text',
              label: '加解密内容',
              valueType: 'string',
              defaultValue: '',
          },
          {
              key: 'key',
              label: '密钥',
              valueType: 'string',
              defaultValue: '',
          },
   

          {
              key: 'mode',
              label: '模式',
              valueType: 'string',
              dropdown: [
        { label: '加密', value: '加密', },

        { label: '解密', value: '解密', },
      ],
          },


  ],
      valueType: 'string',

  })
  Widget.prototype.Base = function (text,key,mode,) {
       
      if (mode == '加密') {
        
            return (CryptoJS.AES.encrypt(text, key));

      }
      if (mode == '解密') {
        
            return (CryptoJS.AES.decrypt(text, key));

      }


  }

exports.types = types;
exports.widget = Widget;
