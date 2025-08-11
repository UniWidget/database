const axios = require('axios');
var JsonValue;

const types = {
    isInvisibleWidget: true,
    type: "LeanCloud_Account",
    icon: "https://coco.codemao.cn/http-widget-proxy/http@SEP@coco.shulin.xyz/LeanCloudSmall.svg",
    title: "LeanCloud内建账户接口",
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

types['properties'].push({
    key: 'apiURL',
    label: 'API域名',
    valueType: 'string',
    defaultValue: 'emdak1sz.us-w1-cname.lncldglobal.com',
    tooltip:"设置为自定义域名前请先前往LeanCloud控制台配置该域名，并且无需加上http://或https://",

})

types['properties'].push({
    key: 'appid',
    label: 'appid',
    valueType: 'string',
    defaultValue: '',

})

types['properties'].push({
    key: 'Access',
    label: '鉴权（appkey）',
    valueType: 'string',
    defaultValue: '',

})

types['methods'].push({
    key: 'NewAccount',
    label: '注册',
    tooltip:"通过邮箱注册新用户，用户名和邮箱已存在时会报错！用户输入的密码不会显示在LeanCloud控制台",
    params: [
      {
          key: 'AccountName',
          label: '用户名',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 'AccountPassword',
          label: '密码',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 'AccountEmail',
          label: '邮箱',
          valueType: 'string',
          defaultValue: "",
      },],
    blockOptions:{
        line:"注册新用户"
    },

})
Widget.prototype.NewAccount = function (AccountName,AccountPassword,AccountEmail,) {
    this.data = {'username': AccountName,'password': AccountPassword,'email': AccountEmail},
        this.headers={
            'X-LC-Id': this.appid, 
            'X-LC-Key': this.Access, 
            'Content-Type': 'application/json',
        };
    
    
    axios.post('https://coco.codemao.cn/http-widget-proxy/https@SEP@' + this.apiURL + '/1.1/users',
            this.data,{
                headers:this.headers,
            }
        )
        .then(response =>{
            this.emit("REdata"  , (response.data));
        }, error => {
            this.emit("GETerror"  , (error));
        })
    }
types['methods'].push({
    key: 'PostEmailCheck',
    label: '请求验证 Email',
    tooltip:"如果在LeanCloud开启了“必须邮箱验证”的选项则用户必须验证当前邮箱才能登录，无法向已完成验证的用户发送验证邮件",
    params: [
      {
          key: 'AccountEmail',
          label: '邮箱',
          valueType: 'string',
          defaultValue: "",
      },],


})
Widget.prototype.PostEmailCheck = function (AccountEmail,) {
    var data = JSON.stringify({
        "email": AccountEmail
    });

    var config = {
        method: 'post',
        url: ['https://coco.codemao.cn/http-widget-proxy/https@SEP@' + this.apiURL + '/1.1/requestEmailVerify'].join(''),
        headers: { 
           'X-LC-Id': this.appid, 
           'X-LC-Key': this.Access, 
           'Content-Type': 'application/json'
        },
        data : data
     };

     axios(config)
     .then((response) =>{
        this.emit("REdata",JSON.stringify(response.data));
    })
    .catch((error) => {
        this.emit("REerror",error);
     });
    }
types['methods'].push({
    key: 'loginAccount',
    label: '用户名登录',
    tooltip:"要求用户提供完整的用户名和密码进行登录，注意：同一个账户的密码错误次数超过6次则会被云端自动锁定15分钟",
    params: [
      {
          key: 'AccountName',
          label: '用户名',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 'AccountPassword',
          label: '密码',
          valueType: 'string',
          defaultValue: "",
      },],
    blockOptions:{
        line:"用户登录"
    },

})
Widget.prototype.loginAccount = function (AccountName,AccountPassword,) {
    this.data = {},
        this.headers={
            'X-LC-Id': this.appid, 
            'X-LC-Key': this.Access, 
            'Content-Type': 'application/json',
        };
    
    
    axios.post('https://coco.codemao.cn/http-widget-proxy/https@SEP@' + this.apiURL + '/1.1/login?username=' + AccountName + '&password=' + AccountPassword,
            this.data,{
                headers:this.headers,
            }
        )
        .then(response =>{
            this.emit("REdata"  , (response.data));
        }, error => {
            this.emit("GETerror"  , (error));
        })
}
types['methods'].push({
    key: 'EmailloginAccount',
    label: '邮箱登录',
    tooltip:"要求用户提供完整的邮箱和密码进行登录，未验证的邮箱无法登录（可到LeanCloud控制台更改此设置），注意：同一个账户的密码错误次数超过6次则会被云端自动锁定15分钟",
    params: [
      {
          key: 'AccountEmail',
          label: '邮箱',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 'AccountPassword',
          label: '密码',
          valueType: 'string',
          defaultValue: "",
      },],


})
Widget.prototype.EmailloginAccount = function (AccountEmail,AccountPassword,) {
    this.data = {'email': AccountEmail,'password': AccountPassword},
        this.headers={
            'X-LC-Id': this.appid, 
            'X-LC-Key': this.Access, 
            'Content-Type': 'application/json',
        };
    
    
    axios.post('https://coco.codemao.cn/http-widget-proxy/https@SEP@' + this.apiURL + '/1.1/login?email=' + AccountEmail + '&password=' + AccountPassword,
            this.data,{
                headers:this.headers,
            }
        )
        .then(response =>{
            this.emit("REdata"  , (response.data));
        }, error => {
            this.emit("GETerror"  , (error));
        })
}
types['methods'].push({
    key: 'GETUsers',
    label: '获取用户信息',
    tooltip:"通过用户凭证获取用户的详细信息",
    params: [
        {
            key: 'AccountSessionToken',
            label: 'sessionToken',
            valueType: 'string',
            defaultValue: "",
        },
    ],


})
Widget.prototype.GETUsers = function (AccountSessionToken,) {
    var config = {
        method: 'get',
        url: ['https://coco.codemao.cn/http-widget-proxy/https@SEP@' + this.apiURL + '/1.1/users/me'].join(''),
        headers: { 
           'X-LC-Id': this.appid, 
           'X-LC-Key': this.Access, 
           'X-LC-Session': AccountSessionToken, 
        }
    };
    
    
    axios(config)
     .then((response) =>{
        this.emit("REdata",JSON.stringify(response.data));
    })
    .catch((error) => {
        this.emit("REerror",error);
     });
}
types['methods'].push({
    key: 'PostREPassword',
    label: '请求密码重设',
    tooltip:"在用户将 email 与他们的账户关联起来之后，可以通过邮件来重设密码",
    params: [
      {
          key: 'AccountEmail',
          label: '邮箱',
          valueType: 'string',
          defaultValue: "",
      },],
    blockOptions:{
        line:"用户操作"
    },

})
Widget.prototype.PostREPassword = function (AccountEmail,) {
    this.data = {'email': AccountEmail},
        this.headers={
            'X-LC-Id': this.appid, 
            'X-LC-Key': this.Access, 
            'Content-Type': 'application/json',
        };
    
    
    axios.post('https://coco.codemao.cn/http-widget-proxy/https@SEP@' + this.apiURL + '/1.1/requestPasswordReset?email='+AccountEmail,
            this.data,{
                headers:this.headers,
            }
        )
        .then(response =>{
            this.emit("REdata"  , (response.data));
        }, error => {
            this.emit("GETerror"  , (error));
        })
}
types['methods'].push({
    key: 'ChangeUsersName',
    label: '更新用户名字',
    tooltip:"通过登录用户的凭证修改该用户的名字（如果名字已存在会报错）",
    params: [
      {
          key: 'ChangeAccountName',
          label: '新用户名',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 'AccountSessionToken',
          label: 'sessionToken',
          valueType: 'string',
          defaultValue: "",
      },
      {
        key: 'AccountObjectId',
        label: 'objectId',
        valueType: 'string',
        defaultValue: "",
    },
    ],


})
Widget.prototype.ChangeUsersName = function (ChangeAccountName,AccountSessionToken,AccountObjectId) {
    var data = JSON.stringify({
        "username": ChangeAccountName
     });
    
     var config = {
        method: 'put',
        url: ['https://coco.codemao.cn/http-widget-proxy/https@SEP@' + this.apiURL + '/1.1/users/' + AccountObjectId].join(''),
        headers: { 
           'X-LC-Id': this.appid, 
           'X-LC-Key': this.Access, 
           'X-LC-Session': AccountSessionToken, 
           'Content-Type': 'application/json'
        },
        data : data
     };
    
     axios(config)
     .then((response) =>{
        this.emit("REdata",JSON.stringify(response.data));
    })
    .catch((error) => {
        this.emit("REerror",error);
     });
}
types['methods'].push({
    key: 'ChangeUsersEmail',
    label: '更新用户邮箱',
    tooltip:"通过登录用户的凭证修改该用户的邮箱（更换成功后需调用发送邮箱验证方法验证该邮箱，否则无法用作登录；可在LeanCloud控制台更改此设置）",
    params: [
      {
          key: 'ChangeAccountEmail',
          label: '新邮箱',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 'AccountSessionToken',
          label: 'sessionToken',
          valueType: 'string',
          defaultValue: "",
      },
      {
        key: 'AccountObjectId',
        label: 'objectId',
        valueType: 'string',
        defaultValue: "",
    },
    ],


})
Widget.prototype.ChangeUsersEmail = function (ChangeAccountEmail,AccountSessionToken,AccountObjectId) {
    var data = JSON.stringify({
        "email": ChangeAccountEmail
     });
    
     var config = {
        method: 'put',
        url: ['https://coco.codemao.cn/http-widget-proxy/https@SEP@' + this.apiURL + '/1.1/users/' + AccountObjectId].join(''),
        headers: { 
           'X-LC-Id': this.appid, 
           'X-LC-Key': this.Access, 
           'X-LC-Session': AccountSessionToken, 
           'Content-Type': 'application/json'
        },
        data : data
     };
    
     axios(config)
     .then((response) =>{
        this.emit("REdata",JSON.stringify(response.data));
    })
    .catch((error) => {
        this.emit("REerror",error);
     });
}
types['methods'].push({
    key: 'ChangeUsersPassword',
    label: '更新用户密码',
    tooltip:"一种安全的更新密码方式，会要求用户输入旧密码进行校验",
    params: [
        {
            key: 'OldAccountPassword',
            label: '旧密码',
            valueType: 'string',
            defaultValue: "",
        },
        {
            key: 'NewAccountPassword',
            label: '新密码',
            valueType: 'string',
            defaultValue: "",
        },
        {
            key: 'AccountSessionToken',
            label: 'sessionToken',
            valueType: 'string',
            defaultValue: "",
        },
        {
            key: 'AccountObjectId',
            label: 'ObjectId',
            valueType: 'string',
            defaultValue: "",
        },],


})
Widget.prototype.ChangeUsersPassword = function (OldAccountPassword,NewAccountPassword,AccountSessionToken,AccountObjectId,) {
    var data = JSON.stringify({
        "old_password": OldAccountPassword,
        "new_password": NewAccountPassword
     });
    
     var config = {
        method: 'put',
        url: ['https://coco.codemao.cn/http-widget-proxy/https@SEP@' + this.apiURL + '/1.1/users/' + AccountObjectId + '/updatePassword'].join(''),
        headers: { 
           'X-LC-Id': this.appid, 
           'X-LC-Key': this.Access, 
           'X-LC-Session': AccountSessionToken, 
           'Content-Type': 'application/json'
        },
        data : data
     };
    
     axios(config)
     .then((response) =>{
        this.emit("REdata",JSON.stringify(response.data));
    })
    .catch((error) => {
        this.emit("REerror",error);
     });
}
types['methods'].push({
    key: 'RELoginSessionToken',
    label: '重置登录 sessionToken',
    tooltip:"当登录用户的sessionToken出现了泄露等情况，可以调用此方法进行重置",
    params: [
      {
          key: 'AccountEmail',
          label: '邮箱',
          valueType: 'string',
          defaultValue: "",
      },
      {
          key: 'AccountSessionToken',
          label: 'sessionToken',
          valueType: 'string',
          defaultValue: "",
      },
      {
        key: 'AccountObjectId',
        label: 'objectId',
        valueType: 'string',
        defaultValue: "",
    },
    ],


})
Widget.prototype.RELoginSessionToken = function (AccountEmail,AccountSessionToken,AccountObjectId,) {
    this.data = {},
        this.headers={
            'X-LC-Id': this.appid, 
            'X-LC-Key': this.Access, 
            'X-LC-Session': AccountSessionToken,
        };
    
    
    axios.put('https://coco.codemao.cn/http-widget-proxy/https@SEP@' + this.apiURL + '/1.1/users/' + AccountObjectId + '/refreshSessionToken',
            this.data,{
                headers:this.headers,
            }
        )
        .then(response =>{
            this.emit("REdata"  , (response.data));
        }, error => {
            this.emit("GETerror"  , (error));
        })
}

types['methods'].push({
    key: 'DeleteUser',
    label: '删除用户',
    tooltip:"清除该用户所有的账户数据，此操作不可逆",
    params: [
      {
          key: 'AccountSessionToken',
          label: 'sessionToken',
          valueType: 'string',
          defaultValue: "",
      },
      {
        key: 'AccountObjectId',
        label: 'objectId',
        valueType: 'string',
        defaultValue: "",
    },
    ],
    blockOptions:{
        line:"注销用户"
    },

})
Widget.prototype.DeleteUser = function (AccountSessionToken,AccountObjectId,) {
    var config = {
        method: 'delete',
        url: ['https://coco.codemao.cn/http-widget-proxy/https@SEP@' + this.apiURL + '/1.1/users/' + AccountObjectId].join(''),
        headers: { 
           'X-LC-Id': this.appid, 
           'X-LC-Key': this.Access, 
           'X-LC-Session': AccountSessionToken, 
        }
     };
     
     axios(config)
     .then((response) =>{
        this.emit("REdata",JSON.stringify(response.data));
    })
    .catch((error) => {
        this.emit("REerror",error);
     });
}
types['events'].push({
    key: 'REdata',
    label: '数据回调',
    params: [
      {
          key: 'getREdata',
          label: '回调数据',
          valueType: 'string',
      },],

})

types['events'].push({
    key: 'GETerror',
    label: '请求失败',
    params: [
      {
          key: 'Geterror',
          label: '错误消息',
          valueType: 'string',
      },],

})

exports.types = types;
exports.widget = Widget;
