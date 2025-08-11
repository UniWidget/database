/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

/*
* 嘿，欢迎使用更多权限，由中子星000制作
* 作者：中子星000
* 主页：https://shequ.codemao.cn/user/2867423
* QQ：2422481178
*/

const BLOCK_COLOR = '#169920b0';
const WIDGET_ICON = 'https://creation.codemao.cn/716/appcraft/IMAGE_dWlY4tRH54_1646533103047';
const BLOCK_ICON = 'https://creation.codemao.cn/716/appcraft/IMAGE_keoGmFPvXq_1646533101278';
const AUTHER = '中子星000';
const HOMEPAGE = 'https://shequ.codemao.cn/user/2867423';
const QQ = 2422481178;

const Types = {
	type: 'MORE_PERMISSIONS_ZZX_WIDGET',
	icon: WIDGET_ICON,
	title: '更多权限',
	version: '1.0.1',
	platforms: ['android', 'ios', 'web'],
	isInvisibleWidget: false,
	isGlobalWidget: false,
	docs: {
		url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Document'
	},
	properties: [],
	methods: [
		{
			key: 'permissions',
			label: '是否有权限',
			valueType: 'boolean',
			params: [],
			tooltip: `检测是否有权限`,
			blockOptions: {
				icon: BLOCK_ICON,
				color: BLOCK_COLOR,
			},
		},
		{
			key: 'alert',
			label: 'alert',
			params: [
				{
					key: 'text',
					label: '内容',
					valueType: 'string',
					defaultValue: '这是一个演示',
				}
			],
			tooltip: `alert`,
			blockOptions: {
				icon: BLOCK_ICON,
				color: BLOCK_COLOR,
			},
		},
	],
	events: []
};

/*
可自行进行拓展
调用方法：
if (this.__get()) //用于判断是否能获取权限，以及获取权限（如果获取不到会在CoCo控制台输出错误）
{
	//codes
	//支持document,window,history,navigator,localStorage,XMLHttpRequest,location
	//使用zzx.name调用
	//具体见示例
}
*/

class Widget extends VisibleWidget {
	constructor(props) {
		super(props);

		this.widgetLog('嘿，欢迎使用更多权限，由中子星000制作，按F12查看更多');
	};

	permissions() {
		return this.__get();
	}

	alert(text) { //demo
		if (this.__get()) //用于判断是否能获取权限，以及获取权限（如果获取不到会在CoCo控制台输出错误）
		{
			zzx.window.alert(text); //使用zzx.调用
		}
	};


	__get() {
		var dom = document.getElementById('zzxGetterElement');
		if (dom != null) {
			dom.onclick();
			if (typeof zzx != 'undefined') {
				return true;
			}
		}
		this.widgetError('获取失败');
		return false;
	}
	render() {
		var rawHTML = '<div id="zzxGetterElement" onclick=";zzx={document:document,window:window,history:history,navigator:navigator,localStorage:localStorage,XMLHttpRequest:XMLHttpRequest,location:location,};" display="none"></div>';
		var rawHTMLData = { __html: rawHTML };
		var props = { dangerouslySetInnerHTML: rawHTMLData }
		return React.createElement('div', props);
	}
}

console.log('嘿，欢迎使用更多权限，由中子星000制作');
console.log('作者：中子星000');
console.log('主页：https://shequ.codemao.cn/user/2867423');
console.log('QQ：2422481178');

exports.types = Types;
exports.widget = Widget;
