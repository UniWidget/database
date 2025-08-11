//冷鱼闲风制作
var confirmWindow, promptWindow, printWindow, openWindow;
var document = this.document;
var window = this.window;
const axios = require('axios');
const types = {
	isInvisibleWidget: true,
	type: "CodemaoApiBcx",
	icon: "https://static.codemao.cn/whitef/favicon.ico",
	title: "编程猫社会化接口",
	version: "2.5.0",
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
		key: 'time_code',
		label: '社会化登录窗口关闭等待',
		tooltip: '登录窗口关闭那一刻，告知用户已关闭新窗口。但不代表对方是否成功登录。',
		params: [],
	}, {
		key: 'get_code',
		label: '社会化登录回调信息获取',
		tooltip: '登录窗口关闭后会获取用户数据，可能会有延迟。',
		params: [{
			key: 'getcode',
			label: '数据文本',
			valueType: 'string',
			defaultValue: '',
		}, ],
	}, {
		key: 'get_data',
		label: '非登录接口信息回调',
		params: [{
			key: 'getcode',
			label: '数据文本',
			valueType: 'string',
			defaultValue: '',
		}, {
			key: 'code',
			label: '状态码',
			valueType: 'Number',
			defaultValue: '',
		}],
	})
types['methods'].push({
	key: 'qq_oacode',
	label: 'QQ登录[用户信息]',
	tooltip: '使用编程猫QQ登录获取用户信息，不包括账号密码和Cookie',
	params: [],
}, {
	key: 'wx_oacode',
	label: 'WX登录[用户信息]',
	tooltip: '使用编程猫微信登录获取用户信息，不包括账号密码和Cookie',
	params: [],
}, {
	key: 'bcm_oacode',
	label: 'BCM登录[用户信息]',
	tooltip: '使用编程猫原生登录获取用户信息，不包括账号密码和Cookie',
	params: [],
}, {
	key: 'qq_user',
	label: 'QQ用户资料',
	tooltip: '使用QQ登录获取QQ用户信息【加密QQ号】【昵称】【头像】【md5】，不包括账号密码和Cookie',
	params: [],

}, {
	key: 'baidu_user',
	label: '百度用户资料',
	tooltip: '使用百度登录获取百度用户信息【百度ID】【昵称】【头像】【md5】，不包括账号密码和Cookie',
	params: [],
	blockOptions: {
		space: 45
	},

}, {
	key: 'bcmcookie_oacode',
	label: 'BCM登录[Cookie]',
	blockOptions: {
		color: "#FF003FAA"
	},
	tooltip: '使用编程猫QQ登录获取用户Cookie，不包括账号密码，非必要请勿使用',
	params: [],
}, {
	key: 'demo',
	label: '转发服务器测试',
	tooltip: '(只需求GET模式，转发服务器会自动判断)接口来源于编程极星创作者协会接口开放平台，由平台进行编程猫接口转发获取信息，Token是Cookie内容，Data是提交时需要的参数，一般编程猫要求的格式是Json。例{"key1":"value1","key2":"value2"}。更多api请详情：https://api.bcmcreator.cn/',
	params: [{
		key: 'cs',
		label: 'GET参数',
		valueType: 'string',
		labelAfter: '(可选)',
		defaultValue: '',
	}, {
		key: 'cookie',
		label: 'Cookie（Token）',
		labelAfter: '(可选)',
		valueType: 'string',
		defaultValue: document.cookie,
	}, {
		key: 'data',
		label: 'Data',
		labelAfter: '(可选)',
		valueType: 'string',
		defaultValue: '',
	}, ],
}, {
	key: 'api',
	label: '编程猫接口',
	tooltip: '接口来源于编程极星创作者协会接口开放平台，由平台进行编程猫接口转发获取信息，Token是Cookie内容，Data是提交时需要的参数，一般编程猫要求的格式是Json。例{"key1":"value1","key2":"value2"}。更多api请详情：https://api.bcmcreator.cn/',
	blockOptions: {
		color: "#FF003FAA"
	},
	params: [{
		key: 'lj',
		label: '路径',
		valueType: 'string',
		defaultValue: '',
	}, {
		key: 'fs',
		label: '提交方式',
		defaultValue: 'GET',
		dropdown: [{
			label: 'GET',
			value: 'GET'
		}, {
			label: 'POST',
			value: 'POST'
		}],
	}, {
		key: 'cookie',
		label: 'Cookie（Token）',
		labelAfter: '(可选)',
		valueType: 'string',
		defaultValue: document.cookie,
	}, {
		key: 'data',
		label: 'Data',
		labelAfter: '(可选)',
		valueType: 'string',
		defaultValue: '',
	}, ],
}, )
class Widget extends InvisibleWidget {
	constructor(props) {
		super(props);
	}
	baidu_user = () => {
		var windowObjectReference;
		var r = parseInt(Math.random() * (999999999999 + 1));
		windowObjectReference = window.open('https://api.bcmcreator.cn/login/baiduuser_login.php?rd=' + r, '百度登录获取用户数据', 'scrollbars=0,status=0,menubar=0,resizable=no,location=no,toolbar=no,top=150,left=150,height=900,width=600');
		var loop = setInterval(() => {
			if (windowObjectReference.closed) {
				clearInterval(loop);
				axios.get('https://coco.codemao.cn/http-widget-proxy/https@SEP@api.bcmcreator.cn/login/code_bcm.php?rd=' + r)
					.then((response) => {
						this.emit('get_code', response['data']);
					})
					.catch((error) => {
						this.emit('get_code', error);
					})
			}
		}, 1000);
	};
	qq_user = () => {
		var windowObjectReference;
		var r = parseInt(Math.random() * (999999999999 + 1));
		windowObjectReference = window.open('https://api.bcmcreator.cn/login/qquser_login.php?rd=' + r, 'QQ登录获取用户数据', 'scrollbars=0,status=0,menubar=0,resizable=no,location=no,toolbar=no,top=150,left=150,height=900,width=600');
		var loop = setInterval(() => {
			if (windowObjectReference.closed) {
				clearInterval(loop);
				axios.get('https://coco.codemao.cn/http-widget-proxy/https@SEP@api.bcmcreator.cn/login/code_bcm.php?rd=' + r)
					.then((response) => {
						this.emit('get_code', response['data']);
					})
					.catch((error) => {
						this.emit('get_code', error);
					})
			}
		}, 1000);
	};

	bcm_oacode = () => {
		var windowObjectReference;
		var r = parseInt(Math.random() * (999999999999 + 1));
		windowObjectReference = window.open('https://api.bcmcreator.cn/login/bcm_login.php?rd=' + r, 'BCM', 'scrollbars=0,status=0,menubar=0,resizable=no,location=no,toolbar=no,top=150,left=150,height=900,width=600');
		var loop = setInterval(() => {
			if (windowObjectReference.closed) {
				clearInterval(loop);
				this.emit('time_code');
				axios.get('https://coco.codemao.cn/http-widget-proxy/https@SEP@api.bcmcreator.cn/login/code_bcm.php?rd=' + r)
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



	bcmcookie_oacode = () => {
		var windowObjectReference;
		var r = parseInt(Math.random() * (999999999999 + 1));
		windowObjectReference = window.open('https://api.bcmcreator.cn/login/bcm_login.php?do=cookie&rd=' + r, 'BCM', 'scrollbars=0,status=0,menubar=0,resizable=no,location=no,toolbar=no,top=150,left=150,height=900,width=600');
		var loop = setInterval(() => {
			if (windowObjectReference.closed) {
				clearInterval(loop);
				this.emit('time_code');
				axios.get('https://coco.codemao.cn/http-widget-proxy/https@SEP@api.bcmcreator.cn/login/code_bcm.php?rd=' + r)
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
		var windowObjectReference;
		var r = parseInt(Math.random() * (999999999999 + 1));
		windowObjectReference = window.open('https://api.bcmcreator.cn/login/qq_bcmlogin.php?rd=' + r, 'QQ登录', 'scrollbars=0,status=0,menubar=0,resizable=no,location=no,toolbar=no,top=150,left=150,height=900,width=600');
		var loop = setInterval(() => {
			if (windowObjectReference.closed) {
				clearInterval(loop);
				this.emit('time_code');
				axios.get('https://coco.codemao.cn/http-widget-proxy/https@SEP@api.bcmcreator.cn/login/code_bcmlogin.php?rd=' + r)
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
		var windowObjectReference;
		var r = parseInt(Math.random() * (999999999999 + 1));
		windowObjectReference = window.open('https://api.bcmcreator.cn/login/wx_bcmlogin.php?rd=' + r, 'WX登录', 'scrollbars=0,status=0,menubar=0,resizable=no,location=no,toolbar=no,top=150,left=150,height=900,width=600');
		var loop = setInterval(() => {
			if (windowObjectReference.closed) {
				clearInterval(loop);
				this.emit('time_code');
				axios.get('https://coco.codemao.cn/http-widget-proxy/https@SEP@api.bcmcreator.cn/login/code_bcmlogin.php?parameter=wx&rd=' + r)
					.then((response) => {
						this.emit('get_code', response['data']);
					})
					.catch((error) => {
						this.emit('get_code', error);
					});
			}
		}, 1000);
	};
	api = (lj, fs, cookie, data) => {
		axios.get("https://coco.codemao.cn/http-widget-proxy/https@SEP@api.bcmcreator.cn/?" + lj + "?bcxtype=" + fs, {
				headers: {
					"Token": cookie,
					"Data": encodeURI(data)
				}
			})
			.then((response) => {
				this.emit('get_data', response['data'], response['status']);
			})
			.catch((error) => {
				console.log(error);
			})
	};
	demo = (cs, cookie, data) => {
		axios.get("https://coco.codemao.cn/http-widget-proxy/https@SEP@api.bcmcreator.cn/header.php?typefs=10ssds" + cs, {
				headers: {
					"Token": cookie,
					"Data": encodeURI(data)
				}
			})
			.then((response) => {
				this.emit('get_data', response['data'], response['status']);
			})
			.catch((error) => {
				console.log(error);
			})
	};
}
exports.types = types;
exports.widget = Widget;