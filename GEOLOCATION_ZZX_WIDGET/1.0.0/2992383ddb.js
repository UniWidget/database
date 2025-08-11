/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

/*
* 嘿，欢迎使用地理定位，由中子星000制作
* 需要和 更多权限 控件配合使用
* 作者：中子星000
* 主页：https://shequ.codemao.cn/user/2867423
* QQ：2422481178
*/

const BLOCK_COLOR = '#FF7540DD';
const WIDGET_ICON = 'https://creation.codemao.cn/716/appcraft/IMAGE_t1wOE7iE2S_1647491399348';
const BLOCK_ICON = 'https://creation.codemao.cn/716/appcraft/IMAGE_JHxj1ECN8A_1647491399351';
const AUTHER = '中子星000';
const HOMEPAGE = 'https://shequ.codemao.cn/user/2867423';
const QQ = 2422481178;

const Types = {
	type: 'GEOLOCATION_ZZX_WIDGET',
	icon: WIDGET_ICON,
	title: '地理定位',
	version: '1.0.0',
	platforms: ['android', 'ios', 'web'],
	isInvisibleWidget: true,
	isGlobalWidget: true,
	docs: {
		url: 'https://w3c.github.io/geolocation-api/#position_error_interface'
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
			key: 'isSupport',
			label: '是否支持获取地理定位',
			valueType: 'boolean',
			params: [],
			tooltip: `检测是否支持获取地理定位`,
			blockOptions: {
				icon: BLOCK_ICON,
				color: BLOCK_COLOR,
			},
		},
		{
			key: 'getCurrentPosition',
			label: '获取坐标',
			params: [
				{
					key: 'jing_du',
					label: '获取',
					labelAfter: '地理坐标',
					valueType: 'boolean',
					defaultValue: false,
					dropdown: [
						{ label: '低精度', value: false },
						{ label: '高精度', value: true },
					],
				},
				{
					key: 'chao_shi',
					label: '超时',
					labelAfter: '毫秒',
					valueType: 'number',
					defaultValue: 5000,
				},
				{
					key: 'label',
					label: '标签',
					valueType: 'string',
					defaultValue: '',
				},
			],
			blockOptions: {
				icon: BLOCK_ICON,
				color: BLOCK_COLOR,
			},
			tooltip: `\
获取坐标
输入：
- 精度：布尔值，高精度、低精度（高精度耗电且慢）
- 超时时间：单位毫秒
- 标签（可选）：事件积木原样返回，可以用于给开发者知道是哪块积木调用时触发事件
触发事件：
- 获取成功时
- 发生错误时
（参数见对应事件积木）\
`,
		},
	],
	events: [
		{
			key: 'succeed',
			label: '获取成功时',
			params: [
				{
					key: 'latitude',
					label: '纬度',
					valueType: 'string',
				},
				{
					key: 'longitude',
					label: '经度',
					valueType: 'string',
				},
				{
					key: 'accuracy',
					label: '精度',
					valueType: 'string',
				},
				{
					key: 'label',
					label: '标签',
					valueType: 'string',
				},
			],
			blockOptions: {
				icon: BLOCK_ICON,
				color: BLOCK_COLOR,
			},
			tooltip: `\
当获取成功时
输出：
- 纬度
- 经度
- 精度：单位米
- 标签：事件积木原样返回，可以用于给开发者知道是哪块积木调用时触发事件
\
`,
		},
		{
			key: 'error',
			label: '获取失败时',
			params: [
				{
					key: 'code',
					label: '错误代码',
					valueType: 'number',
				},
				{
					key: 'message',
					label: '错误信息',
					valueType: 'string',
				},
				{
					key: 'label',
					label: '标签',
					valueType: 'string',
				},
			],
			blockOptions: {
				icon: BLOCK_ICON,
				color: BLOCK_COLOR,
			},
			tooltip: `\
当获取失败（超时）时
输出：
- 错误代码：-1为不支持，其他见https://w3c.github.io/geolocation-api/#position_error_interface
- 错误信息
- 标签：事件积木原样返回，可以用于给开发者知道是哪块积木调用时触发事件
\
`,
		}
	]
};

class Widget extends InvisibleWidget {
	constructor(props) {
		super(props);

		this.widgetLog('嘿，欢迎使用地理定位，由中子星000制作，按F12查看更多');
		this.widgetLog('需要和 更多权限 控件配合使用');
	}

	permissions() {
		return this.__get();
	}

	__get() {
		var dom = document.getElementById('zzxGetterElement');
		if (dom != null) {
			dom.onclick();
			if (typeof zzx != 'undefined') {
				return 1;
			}
		}
		this.widgetError('获取失败，请添加控件 更多权限');
		return 0;
	}

	isSupport() {
		return navigator.geolocation;
	}

	getCurrentPosition(jing_du, chao_shi, label) { // 精度，超时
		if (this.__get()) {
			if (zzx.navigator.geolocation) {
				zzx.navigator.geolocation.getCurrentPosition(
					pos => {
						this.emit('succeed', pos.coords.latitude, pos.coords.longitude, pos.coords.accuracy, label)
					},
					err => {
						this.emit('error', err.code, err.message, label)
					},
					{
						enableHighAccuracy: jing_du,
						timeout: chao_shi,
						maximumAge: 0
					}
				)
			}
			else {
				this.emit('error', -1, '不支持获取地理定位')
			}
		}
	}

}

console.log('嘿，欢迎使用地理定位，由中子星000制作');
console.log('需要和 更多权限 控件配合使用');
console.log('作者：中子星000');
console.log('主页：https://shequ.codemao.cn/user/2867423');
console.log('QQ：2422481178');
console.log('使用方法：字面意思');

exports.types = Types;
exports.widget = Widget;
