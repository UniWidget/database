/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

/**
 * 圆角矩形
 * 制作：中子星000（QQ：2422481178）
 */

const BLOCK_COLOR = '#004EFFAA';
const WIDGET_ICON = 'icon-widget-image';
const BLOCK_ICON = 'https://creation.codemao.cn/coconut/web/1.10.0/static/media/big-logo.06b80465.png';
const AUTHER = '中子星000';
const VERSION = '1.3.0';
const QQ = 2422481178;

const types = {
	type: 'YJJX_ZZX_WIDGET',
	icon: WIDGET_ICON,
	title: '圆角矩形',
	isInvisibleWidget: false,
	isGlobalWidget: false,
	version: VERSION,
	properties: [
		{
			key: '__width',
			label: '宽度',
			valueType: 'number',
			defaultValue: 200,
		},
		{
			key: '__height',
			label: '高度',
			valueType: 'number',
			defaultValue: 200,
		},
		{
			key: 'borderRadius',
			label: '圆角',
			labelAfter: 'px',
			valueType: 'number',
			defaultValue: 5,
			blockOptions: {
				icon: BLOCK_ICON,
				color: BLOCK_COLOR,
			},
			tooltip: `设置圆角半径`,
		},
		{
			key: 'filterBlur',
			label: '模糊',
			labelAfter: 'px',
			valueType: 'number',
			defaultValue: 0,
			blockOptions: {
				icon: BLOCK_ICON,
				color: BLOCK_COLOR,
			},
			tooltip: `设置元素模糊`,
		},
		{
			key: 'backgroundColor',
			label: '背景颜色',
			valueType: 'color',
			defaultValue: "#004EFFAA",
			blockOptions: {
				icon: BLOCK_ICON,
				color: BLOCK_COLOR,
			},
			tooltip: `设置背景颜色`,
		},
		{
			key: 'backgroundImage',
			label: '背景图片',
			valueType: 'string',
			defaultValue: 'https://creation.codemao.cn/coconut/web/1.10.0/static/media/big-logo.06b80465.png',
			blockOptions: {
				icon: BLOCK_ICON,
				color: BLOCK_COLOR,
			},
			tooltip: `设置背景图片URL`,
		},
		{
			key: 'objectFit',
			label: '适配',
			valueType: 'string',
			defaultValue: 'contain',
			dropdown: [
				{ label: '全显', value: 'contain' },
				{ label: '裁剪', value: 'cover' },
				{ label: '拉伸', value: 'fill' },
			],
			tooltip: `设置图片适配`,
		}
	],
	methods: [
		{
			key: 'setShadow',
			label: '阴影',
			params: [
				{
					key: 'x',
					label: 'x',
					labelAfter: 'px',
					valueType: 'number',
					defaultValue: 10
				},
				{
					key: 'y',
					label: 'y',
					labelAfter: 'px',
					valueType: 'number',
					defaultValue: 10
				},
				{
					key: 'blur',
					label: 'blur',
					labelAfter: 'px',
					valueType: 'number',
					defaultValue: 10
				},
				{
					key: 'color',
					label: 'color',
					valueType: 'color',
					defaultValue: 'grey'
				},
			],
			blockOptions: {
				icon: BLOCK_ICON,
				color: BLOCK_COLOR,
				inputsInline: 0,
			},
			tooltip: `设置阴影，全部为0就没有啦~`,
		},
	],
	events: [
		{
			key: 'onTouchStart',
			label: '被按下',
			params: [],
		},
		{
			key: 'onTouchEnd',
			label: '被松开',
			params: [],
		},
	],
};

//导入库
const utils = require('utils');

class Widget extends VisibleWidget {
	constructor(props) {
		super(props);

		//各种默认值
		this.borderRadius = props.borderRadius;
		this.backgroundColor = props.backgroundColor;
		this.backgroundImage = props.backgroundImage;
		this.x = '0px';
		this.y = '0px';
		this.blur = '0px';
		this.color = 'grey';
		//1.2.0更新的
		this.objectFit = props.objectFit;
		this.filterBlur = props.filterBlur;

		this.widgetLog(
			`/**
 * 圆角矩形
 * 制作：中子星000（QQ：2422481178）
 */`
		);
	}

	setShadow(x, y, blur, color) {
		this.setProps({
			x: x + 'px',
			y: y + 'px',
			blur: blur + 'px',
			color: color,
		});
	}

	onTouchStart = (event) => {
		utils.isNative()?this.emit('onTouchStart'):null;//仅移动端触发
	}
	onMouseDown = (event) => {
		utils.isNative()?null:this.emit('onTouchStart');//仅电脑端触发
	}
	onTouchEnd = (event) => {
		utils.isNative()?this.emit('onTouchEnd'):null;//仅移动端触发
	}
	onMouseUp = (event) => {
		utils.isNative()?null:this.emit('onTouchEnd');//仅电脑端触发
	}

	render() {
		// 图片为空就设为透明空白图片
		return (
			<img
				onTouchStart={this.onTouchStart/*移动端*/}
				onMouseDown={this.onMouseDown/*电脑端*/}
				onTouchEnd={this.onTouchEnd/*移动端*/}
				onMouseUp={this.onMouseUp/*电脑端*/}
				src={this.backgroundImage ? this.backgroundImage : 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjwvc3ZnPg=='}
				style={{
					height: '100%',
					width: '100%',
					objectFit: this.objectFit,
					filter: 'blur(' + this.filterBlur + 'px)',
					borderRadius: this.borderRadius + 'px',
					backgroundColor: this.backgroundColor,
					boxShadow: this.x + ' ' + this.y + ' ' + this.blur + ' ' + this.color,
				}}>
			</img>
		);
	}
}

console.log(
	`/**
 * 圆角矩形
 * 制作：中子星000（QQ：2422481178）
 */`
);

exports.types = types;
exports.widget = Widget;
