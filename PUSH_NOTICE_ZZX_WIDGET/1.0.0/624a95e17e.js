/* eslint-disable */

/*
* 嘿，欢迎使用通知推送，由中子星000制作
* 作者：中子星000
* 主页：https://shequ.codemao.cn/user/2867423
* QQ：2422481178
* 使用方法：字面意思
*/

const BLOCK_COLOR = '#00B6B6AA';
const WIDGET_ICON = 'https://creation.codemao.cn/716/appcraft/IMAGE_bZbAOhRcTa_1643095470593.svg';
const BLOCK_ICON = 'https://creation.codemao.cn/716/appcraft/IMAGE_xMzcMWdJQ_1643095470592.svg';
const AUTHER = '中子星000';
const HOMEPAGE = 'https://shequ.codemao.cn/user/2867423';
const QQ = 2422481178;

const types = {
	type: 'PUSH_NOTICE_ZZX_WIDGET',
	icon: WIDGET_ICON,
	title: '通知推送',
	version: '1.0.0',
	platforms: ['web'],
	isInvisibleWidget: true,
	isGlobalWidget: true,
	docs: {
		url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/notification'
	},
	properties: [],
	methods: [
		{
			key: 'push',
			label: '通知推送',
			params: [
				{
					key: 'text',
					label: '内容',
					valueType: 'string',
					defaultValue: '这是一条通知……',
				},
			],
			blockOptions: {
				icon: BLOCK_ICON,
				color: BLOCK_COLOR,
			},
			tooltip: `用于推送通知，目前仅限前台（或当切换后台）使用`,
		},
	],
	events: []
};

class Widget extends InvisibleWidget {
	constructor(props) {
		super(props);
	}

	push(text) {
		function notifyMe() {
			// // 先检查浏览器是否支持
			// if (!("Notification" in window)) {
			// 	alert("This browser does not support desktop notification");
			// }

			// 检查用户是否同意接受通知
			if (Notification.permission === "granted") {
				// If it's okay let's create a notification
				var notification = new Notification(text);
			}

			// 否则我们需要向用户获取权限
			else if (Notification.permission !== "denied") {
				Notification.requestPermission().then(function (permission) {
					// 如果用户接受权限，我们就可以发起一条消息
					if (permission === "granted") {
						var notification = new Notification(text);
					}
				});
			}


			// 最后，如果执行到这里，说明用户已经拒绝对相关通知进行授权
			// 出于尊重，我们不应该再打扰他们了
		}
		notifyMe()
	}

}

console.log('嘿，欢迎使用通知推送，由中子星000制作');
console.log('作者：中子星000');
console.log('主页：https://shequ.codemao.cn/user/2867423');
console.log('QQ：2422481178');
console.log('使用方法：字面意思');

exports.types = types;
exports.widget = Widget;
