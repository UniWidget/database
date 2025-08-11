var confirmWindow, promptWindow, printWindow, openWindow;
var document = this.document;
var window = this.window;
const axios = require('axios');
const types = {
    isInvisibleWidget: true,
    type: "Codemao LoginQW",
    icon: "https://ocean.codemao.cn/appcraft/resource/icon/基础/链接.svg",
    title: "编程猫社会化登录",
    version: "1.2.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};
types.docs = {
    url: ""
};
types.platforms = ['web', 'android', 'ios'],
    types['events'].push({
        key: 'get_code',
        label: '反馈信息获取',
        params: [{
            key: 'getcode',
            label: '数据',
            valueType: 'string',
            defaultValue: '',
        }, ],
    })
types['methods'].push({
        key: 'qq_oacode',
        label: 'QQ登录',
        params: [
        ],
    }, {
        key: 'wx_oacode',
        label: 'WX登录',
        params: [
        ],
    }, {
        key: 'bcm_oacode',
        label: 'BCM登录',
        params: [
        ],
    },
)
class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
    }
	
	
    bcm_oacode = () => {
		var url=window.location.href;
		if(url.includes('coco.codemao.cn'))
		{	
			var lb='coco';
		}else{
			var lb='appcraft';
		}     
        var windowObjectReference;
        var r = parseInt(Math.random() * (999999999999 + 1));
        windowObjectReference = window.open('https://api.bcmcreator.cn/login/bcm_login.php?rd=' + r, 'BCM', 'scrollbars=0,status=0,menubar=0,resizable=no,location=no,toolbar=no,top=150,left=150,height=900,width=600');
        var loop = setInterval(() => {
            if (windowObjectReference.closed) {
                clearInterval(loop);
				
								
					axios.get('https://'+lb+'.codemao.cn/http-widget-proxy/https@SEP@api.bcmcreator.cn/login/code_bcm.php?rd=' + r)
				
					
				 .then((response) => {
                        this.emit('get_code', response['data']);
                        console.log(response);
                    })
                    .catch((error) => {
                        this.emit('get_code', error);
                    });
            }
        }, 1000);
    };
    qq_oacode = () => {
		var url=window.location.href;
		if(url.includes('coco.codemao.cn'))
		{	
			var lb='coco';
		}else{
			var lb='appcraft';
		}  
        var windowObjectReference;
        var r = parseInt(Math.random() * (999999999999 + 1));
        windowObjectReference = window.open('https://api.bcmcreator.cn/login/qq_bcmlogin.php?rd=' + r, 'QQ登录', 'scrollbars=0,status=0,menubar=0,resizable=no,location=no,toolbar=no,top=150,left=150,height=900,width=600');
        var loop = setInterval(() => {
            if (windowObjectReference.closed) {
                clearInterval(loop);
                axios.get('https://'+lb+'.codemao.cn/http-widget-proxy/https@SEP@api.bcmcreator.cn/login/code_bcmlogin.php?rd=' + r)
                    .then((response) => {
                        this.emit('get_code', response['data']);
                    })
                    .catch((error) => {
                        this.emit('get_code', error);
                    })
            }
        }, 1000);
    };
    wx_oacode = () => {
		var url=window.location.href;
		if(url.includes('coco.codemao.cn'))
		{	
			var lb='coco';
		}else{
			var lb='appcraft';
		}  
        var windowObjectReference;
        var r = parseInt(Math.random() * (999999999999 + 1));
        windowObjectReference = window.open('https://api.bcmcreator.cn/login/wx_bcmlogin.php?rd=' + r, 'WX登录', 'scrollbars=0,status=0,menubar=0,resizable=no,location=no,toolbar=no,top=150,left=150,height=900,width=600');

        var loop = setInterval(() => {
            if (windowObjectReference.closed) {
                clearInterval(loop);
                axios.get('https://'+lb+'.codemao.cn/http-widget-proxy/https@SEP@api.bcmcreator.cn/login/code_bcmlogin.php?parameter=wx&rd=' + r)
                    .then((response) => {
                        this.emit('get_code', response['data']);
                    })
                    .catch((error) => {
                        this.emit('get_code', error);
                    });
            }
        }, 1000);
    };
}
exports.types = types;
exports.widget = Widget;