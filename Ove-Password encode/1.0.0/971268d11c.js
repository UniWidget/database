var key, password, Password_en, en, n, j, k, i;

function OveEn(key, password) {
  Password_en = "";
  en = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","_","#","@","$","&","+","/","!","?"];
  n = 0;
  var j_end = key.length;
  var j_inc = 1;
  if (1 > j_end) {
    j_inc = -j_inc;
  }
  for (j = 1; j_inc >= 0 ? j <= j_end : j >= j_end; j += j_inc) {
    var i_end = en.length;
    var i_inc = 1;
    if (1 > i_end) {
      i_inc = -i_inc;
    }
    for (i = 1; i_inc >= 0 ? i <= i_end : i >= i_end; i += i_inc) {
      if (key.charAt((j - 1)) == en[(i - 1)]) {
        n = n + i;
      }
    }
  }
  var k_end = password.length;
  var k_inc = 1;
  if (1 > k_end) {
    k_inc = -k_inc;
  }
  for (k = 1; k_inc >= 0 ? k <= k_end : k >= k_end; k += k_inc) {
    Password_en = Password_en + n + String(password.charAt((k - 1)).charCodeAt(0));
  }
  return Password_en.slice(4);
}



const types = {
    isInvisibleWidget: true,
    type: "Ove-Password encode",
    icon: "https://public.coco-central.cn/waddle/2/waddle2.svg",
    title: "Ove密码加密",
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
    key: 'encode',
    label: 'Ove加密',
    params: [
      {
          key: 'Key',
          label: '秘钥',
          valueType: 'string',
          defaultValue: '请输入大小写字母、数字、连接符、下划线或井号、@、$、&、+、/、!、?；秘钥不同，返回的结果也会不同',
      },
      {
          key: 'Password',
          label: '密码',
          valueType: 'string',
          defaultValue: '请输入密码',
      },],
    valueType: 'string',
    blockOptions: {
    color: '#33ccff',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.encode = function (Key,Password,) {
      return (OveEn(Key, Password));
}

types["methods"].push({
    key:"en_de",
    label:"二进制加密",
    params:[
        {
            key:"content",
            label:"内容",
            valueType:"string",
            defaultValue:"将上面的积木拖下来即可"
        }
    ],
    valueType: 'string',
    blockOptions: {
    color: '#33ccff',
    icon: '无',
    generateBlock: true,
    inputsInline: true,
    space: 16,
    }
})
Widget.prototype.en_de = function (content,) {
    return Number(content).toString(2);
}

exports.types = types;
exports.widget = Widget;