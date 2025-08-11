var axios = require("axios")

const AUTHOR = "威武的树毛蛹-乐乐"
const HOMEPAGE = ""
const QQ = 3988400519

const types = { 
    type: "MUSIC_PLAYER", 
    title: "音乐播放器", 
    icon: "https://svgmix.com/uploads/nimble-tiny-flat/1f19b5-cd-music.svg", 
    version:"1.0.0",
    auther:AUTHOR,
    docs:{
        url:"https://gcnx2mrmo9rb.feishu.cn/wiki/NCDywY446ifMcUkzV9IchfeOned",
    },
    platforms: ["web", "android", "ios",],
    isInvisibleWidget: true, 
    isGlobalWidget: true, 
    hasAnyWidget:false,
    properties: [], 
    methods: [
        {
            key:"login_password",
            label:"手机密码登录",
            readonly:!0,
            tooltip:"",
            parmas:[
                {
                    key:"phone_number",
                    label:"手机号",
                    valueType:"number",
                    defaultValue: "",
                },
                {
                    key:"password",
                    label:"密码",
                    valueType:"string",
                    defaultValue: "",
                }
            ],
        },
        {
            key:""
        }
    ], 
    events: [], 
}
class Widget extends InvisibleWidget { 
    constructor(props) { 
        super(props); 
        this.url = props.url;
    }

    login_password( key ){
        axios.get( "https://apis.netstart.cn/music/login/cellphone?phone=" + phone_number + "&password=" + password)
    }

    traverseJson(jsonData) {
		console.log(jsonData)
		for (let item of jsonData) {
			this.emit('onResult',item.id , item.name , item.artist.join(",") , item.album , item.pic );
		}
	}
}

exports.types = types
exports.widget = InvisibleWidget