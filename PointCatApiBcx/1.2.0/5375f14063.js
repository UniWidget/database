var confirmWindow, promptWindow, printWindow, openWindow;
var document = this.document;
var window = this.window;
const axios = require('axios');
const types = {
	isInvisibleWidget: true,
	type: "PointCatApiBcx",
	icon: "https://cdn-community.codemao.cn/47/community/d2ViXzMwMDFfODQzODE4XzBfMTY2ODgyMTE0MDE4N19jN2U4YWRmOQ.jpeg",
	title: "点到猫小程序接口",
	version: "1.2.0",
	isGlobalWidget: true,
	properties: [],
	methods: [],
	events: [],
};
types.docs = {
	url: ""
};
types.platforms = ['web'],
types['events'].push({
	key: 'get_xcxUser',
	label: '入口-小程序用户数据回调',
	tooltip: '用户相关数据回调。\n如没有将会返回[用户可能不在入口界面或未授权本小程序。无法获取对方数据。]\n反之回调[小程序ID$$用户标识码$$用户ID$$用户昵称$$用户头像$$用户简介]',
	params: [{
		key: 'getcode',
		label: '数据文本',
		valueType: 'string',
		defaultValue: '',
	},
	],
},{
	key: 'get_Share',
	label: '入口-分享掉起数据回调',
	tooltip: '分享调起数据回调。\n如没有将会返回[无]\n反之回调[参数内容]',
	params: [{
		key: 'getcode',
		label: '数据文本',
		valueType: 'string',
		defaultValue: '',
	},
	],
})
types['methods'].push({
	key: 'getData',
	label: '申请授权获得小程序用户数据',
	tooltip: '本控件所有功能都需要获得授权后才可以使用，否则入口不传回用户数据，其他功能无法使用。',
	params: [{
		key: 'fs',
		label: '授权介绍（用途）',
		valueType: 'string',
		defaultValue: '',
	},
	],
},
{
	key: 'Door_xcxId',
	label: '入口-获取小程序用户数据',
	tooltip: '小程序进入后的第一个界面，如用户已授权将会给你以GET方式传递用户相关数据。[如没授权请先使用授权获取用户数据积木]',
	params: [],
	
},{
	key: 'Door_Share',
	label: '入口-获取调用分享参数',
	tooltip: '小程序进入后的第一个界面，如果是分享调起会带有附加参数，如果没有将返回[空]',
	params: [],
	
},{
	key: 'URL_Scheme',
	label: '调用APP的URL Scheme',
	tooltip: '通过被调用提供的URL Scheme可以调起APP指定界面。',
	params: [	{
		key: 'data',
		label: '',
		valueType: 'string',
		defaultValue: '',
	},],
},{
	key: 'Title',
	label: '设置网页标题',
	tooltip: '网页标题，类似<title></title>。',
	params: [	{
		key: 'data',
		label: '',
		valueType: 'string',
		defaultValue: '',
	},],
},
{
	key: 'GET_DataOne',
	label: '调用功能【1】',
	tooltip: '调用小程序提供的开放功能【1】。单数据传递。（调用点到猫内置功能，参考：2.获取手机信息 3.图床 4.系统浏览器打开 5.跳转下载器 6.退出小程序 8.显示桌面）',
	params: [{
		key: 'fs',
		label: '功能',
		defaultValue: '请选择',
		dropdown: [{
			label: '手机震动（填写毫秒【纯数字】）',
			value: 'vifanzd='
		},{
			label: '分享调起（填写自定义回调参数）',
			value: 'vifanjmshare='
		},{
			label: '调起指定bcm成员作品列表（填写bcmid）',
			value: 'vifanbcmzpid='
		},{
			label: '调起指定bcm成员个人数据（填写bcmid）',
			value: 'vifanbcmuserid='
		},{
			label: '调起指定bcm成员工作室数据（填写bcmid）',
			value: 'vifanbcmgzsid='
		},{
			label: '获取网站源码（填写网址）',
			value: 'vifanwedym='
		},
		{
			label: '跳转到QQ聊天（填写QQ号）',
			value: 'vifanQQ='
		},
		{
			label: '跳转到QQ群（填写Q群号）',
			value: 'vifanQqun='
		},
		{
			label: '跳转到指定APP（填写应用包名）',
			value: 'vifanapp='
		},
		{
			label: '卸载指定APP（填写应用包名）',
			value: 'vifanuninapp='
		},
		{
			label: '复制指定内容（填写字符串）',
			value: 'vifansxb='
		},
		{
			label: '拨打指定电话（填写电话号）',
			value: 'vifanucall='
		},
		{
			label: '调用点到猫内置功能（看简介填写数字）',
			value: 'vifangl='
		}],
	},
	{
		key: 'data',
		label: '文字参数',
		valueType: 'string',
		defaultValue: '',
	},
	{
		key: 'xcxid',
		label: '小程序ID',
		valueType: 'string',
		defaultValue: '',
	},
	{
		key: 'userid',
		label: '用户标识码',
		valueType: 'string',
		defaultValue: '',
	},
	],
},
{
	key: 'GET_DataTwo',
	label: '调用功能【2】',
	tooltip: '调用小程序提供的开放功能【2】。二数据传递。',
	params: [{
		key: 'fs',
		label: '功能',
		defaultValue: '请选择',
		dropdown: [{
			label: '下载文件（第一空填文件名，第二空填下载直链）',
			value: 'xzname=￥xzlj='
		},
		{
			label: '调用系统通知（第一空填标题，第二空填主要内容）',
			value: 'vifantztitle=￥vifantznr='
		},
		{
			label: '调用系统短信系统（第一空填对方电话号【收件人】，第二空填主要信息内容）',
			value: 'vifanusmstitle=￥vifannr='
		}],
	},
	{
		key: 'dataOne',
		label: '文字参数【1】',
		valueType: 'string',
		defaultValue: '',
	},
	{
		key: 'dataTwo',
		label: '文字参数【2】',
		valueType: 'string',
		defaultValue: '',
	},
	{
		key: 'xcxid',
		label: '小程序ID',
		valueType: 'string',
		defaultValue: '',
	},
	{
		key: 'userid',
		label: '用户标识码',
		valueType: 'string',
		defaultValue: '',
	},
	],


},{
	key: 'GET_DataF',
	label: '调用功能【3】',
	tooltip: '调用小程序提供的开放功能【3】。三数据传递。',
	params: [{
		key: 'fs',
		label: '功能',
		defaultValue: '请选择',
		dropdown: [{
			label: '调起系统悬浮窗（第一空网址，第二空悬浮窗宽度，第三空悬浮窗高度）',
			value: 'vifanxfk=￥vifanxfkw=￥vifanxfkh='
		}
	],
	},
	{
		key: 'dataOne',
		label: '文字参数【1】',
		valueType: 'string',
		defaultValue: '',
	},
	{
		key: 'dataTwo',
		label: '文字参数【2】',
		valueType: 'string',
		defaultValue: '',
	},	{
		key: 'dataS',
		label: '文字参数【3】',
		valueType: 'string',
		defaultValue: '',
	},
	{
		key: 'xcxid',
		label: '小程序ID',
		valueType: 'string',
		defaultValue: '',
	},
	{
		key: 'userid',
		label: '用户标识码',
		valueType: 'string',
		defaultValue: '',
	},
	],
},)
class Widget extends InvisibleWidget {
	constructor(props) {
		super(props);
	}

	Door_xcxId=()=>{
		if (GetQueryString('xcxidvifan') != null) {
			this.emit('get_xcxUser', GetQueryString('xcxidvifan') + "$$" + GetQueryString('useridvifan') + "$$" + GetQueryString('vifanid') + "$$" + GetQueryString('vifanname') + "$$" + GetQueryString('vifantx') + "$$" + GetQueryString('vifanjs'));
		} else {
			this.emit('get_xcxUser', "用户可能不在入口界面或未授权本小程序。无法获取对方数据。因此无法使用本调试方式。可以参考开发文档使用其他方式调取数据");
		}
	};

	Door_Share=()=>{
		if (GetQueryString('xcxdata') != null) {
			this.emit('get_Share', GetQueryString('xcxdata') );
		} else {
			this.emit('get_Share', "空");
		}
	};
	GET_DataOne=(fs, data, xcxid, userid)=>{
		axios.get("https://api.bcmcreator.cn/cocoxcx/setXcxDataAndroid.php?xcxId=" + xcxid + "&UserId=" + userid + "&Data=" + fs + data, {

}).then((response)=>{
			console.log(response['data']);
		}).
		catch((error)=>{
			console.log(error);
		})
	};
	
	
	
	GET_DataTwo=(fs, dataOne, dataTwo, xcxid, userid)=>{
		var fs = fs.split('￥');
		axios.get("https://api.bcmcreator.cn/cocoxcx/setXcxDataAndroid.php?xcxId=" + xcxid + "&UserId=" + userid + "&Data=" + fs[0] + dataOne + "%%" + fs[1] + dataTwo, {

}).then((response)=>{
			console.log(response['data']);
		}).
		catch((error)=>{
			console.log(error);
		})
	};
	GET_DataBool=(fs, data, xcxid, userid)=>{
		axios.get("https://api.bcmcreator.cn/cocoxcx/setXcxDataAndroid.php?xcxId=" + xcxid + "&UserId=" + userid + "&Data=" + fs + data, {

}).then((response)=>{
			console.log(response['data']);
		}).
		catch((error)=>{
			console.log(error);
		})
	};
		GET_DataF=(fs, dataOne, dataTwo, dataS, xcxid, userid)=>{
		var fs = fs.split('￥');
		axios.get("https://api.bcmcreator.cn/cocoxcx/setXcxDataAndroid.php?xcxId=" + xcxid + "&UserId=" + userid + "&Data=" + fs[0] + dataOne + "%%" + fs[1] + dataTwo+ "%%" + fs[2] + dataS, {

}).then((response)=>{
			console.log(response['data']);
		}).
		catch((error)=>{
			console.log(error);
		})
	};
	
	getData=(fs)=>{
		window.location.href = "https://bcmcreator.cn/AU/?vifanUserAuth=" + fs;
	};
	URL_Scheme=(data)=>{
		window.location.href = data;
	};
	Title=(data)=>{
		document.title = data;    
	};
}

function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) {
		return decodeURI(r[2]);
	} else {
		return null;
	}
}

exports.types = types;
exports.widget = Widget;