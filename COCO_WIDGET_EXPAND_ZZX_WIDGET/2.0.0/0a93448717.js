
/**
 * CoCo原生可见控件拓展
 * 制作：中子星000（QQ：2422481178）
 */

const BLOCK_COLOR = '#6e4ff4';
const WIDGET_ICON = 'icon-toolbox-feature';
const AUTHER = '中子星000';
const QQ = 2422481178;

const types = {
	type: 'COCO_WIDGET_EXPAND_ZZX_WIDGET',
	icon: WIDGET_ICON,
	title: '可见控件拓展',
	version: '2.0.0',
	auther: AUTHER,
	platforms: ['web', 'android', 'ios'],
	isInvisibleWidget: false,
	isGlobalWidget: false,
	properties: [],
	methods: [
		{
			key: 'change_input_type',
			label: '把id为',
			params: [
				{
					key: 'id',
					labelAfter: '的「输入框」变成',
					valueType: 'string',
					defaultValue: '通过F12查看控件id',
				},
				{
					key: 'type',
					valueType: 'string',
					defaultValue: 'password',
					dropdown: [
						{ label: '密码框', value: 'password' },
						{ label: '普通输入框', value: 'text' },
					],
				},
			],
			blockOptions: {
				callMethodLabel: false,
				color: BLOCK_COLOR,
			},
			tooltip: '对CoCo的「输入框」进行操作',
		},
		{
			key: 'change_overflow',
			label: '设置id为',
			params: [
				{
					key: 'id',
					labelAfter: '的「文本」',
					valueType: 'string',
					defaultValue: '通过F12查看控件id',
				},
				{
					key: 'direction',
					valueType: 'string',
					defaultValue: 'overflow-y',
					dropdown: [
						{ label: '纵向滑动条', value: 'overflow-y' },
						{ label: '横向滑动条', value: 'overflow-x' },
					],
				},
				{
					key: 'type',
					valueType: 'string',
					defaultValue: 'auto',
					dropdown: [
						{ label: '自动', value: 'auto' },
						{ label: '显示', value: 'scroll' },
						{ label: '隐藏', value: 'hidden' },
					],
				},
			],
			blockOptions: {
				callMethodLabel: false,
				color: BLOCK_COLOR,
			},
			tooltip: '对CoCo的「文本」进行操作',
		},
		{
			key: 'change_background_image',
			label: '设置id为',
			params: [
				{
					key: 'id',
					labelAfter: '的「文本」',
					valueType: 'string',
					defaultValue: '通过F12查看控件id',
				},
				{
					key: 'image_url',
					label: '背景图为',
					valueType: 'string',
					defaultValue: 'https://creation.codemao.cn/884/l4zca4z7.jpeg?imageMogr2/thumbnail/!200x200r/blur/1x0/quality/100|imageslim',
				},
			],
			blockOptions: {
				callMethodLabel: false,
				color: BLOCK_COLOR,
			},
			tooltip: '对CoCo的「文本」进行操作',
		},
		{
			key: 'move',
			label: '把id为',
			params: [
				{
					key: 'id',
					labelAfter: '的「可见控件」',
					valueType: 'string',
					defaultValue: '通过F12查看控件id',
				},
				{
					key: 'time',
					label: '在',
					labelAfter: '秒内',
					valueType: 'number',
					defaultValue: 3,
				},
				{
					key: 'type',
					labelAfter: '地移动到',
					valueType: 'string',
					defaultValue: 'linear',
					dropdown: [
						{ label: '匀速', value: 'linear' },
						{ label: '开始低速中间加快结束低速', value: 'ease' },
						{ label: '逐渐加速', value: 'ease-in' },
						{ label: '逐渐减速', value: 'ease-out' },
						{ label: '开始低速结束低速', value: 'ease-in-out' },
					],
				},
				{
					key: 'x',
					labelAfter: 'x',
					valueType: 'number',
					defaultValue: 0,
				},
				{
					key: 'y',
					labelAfter: 'y',
					valueType: 'number',
					defaultValue: 0,
				},
			],
			blockOptions: {
				callMethodLabel: false,
				inputsInline: true,
				color: BLOCK_COLOR,
			},
			tooltip: `对CoCo的「可见控件」进行操作
			使用方法：
			首先你有如下几个变量：控件id，时间，x坐标，y坐标
			积木放置（可以自己封装成函数）：
			[可见控件拓展]把id为(控件id)的「可见控件」在(时间)秒内[匀速(或其他选项)]地移动到(x坐标)x(y坐标)y
			等待(时间)秒
			设置[可见控件]的[x坐标]为(x坐标)
			设置[可见控件]的[y坐标]为(y坐标)
			[可见控件拓展]把id为(控件id)的「可见控件」的动画清除
			`,
		},
		{
			key: 'clean',
			label: '把id为',
			params: [
				{
					key: 'id',
					labelAfter: '的「可见控件」的动画清除',
					valueType: 'string',
					defaultValue: '通过F12查看控件id',
				},
			],
			blockOptions: {
				callMethodLabel: false,
				inputsInline: true,
				color: BLOCK_COLOR,
			},
			tooltip: '对CoCo的「可见控件」进行操作',
		},
	],
	events: [],
};

class Widget extends VisibleWidget {
	constructor(props) {
		super(props);
		this.animations = [];
		this.refresh_var = 0;

	}

	render() {
		return (
			<>
				{this.animations.map((value, index) => {
					return <style>
						{`
#${value.id} {
  -moz-animation-duration: ${value.time}s;
  -webkit-animation-duration: ${value.time}s;
  animation-duration: ${value.time}s;
  -moz-animation-name: ${value.id + '_animation'};
  -webkit-animation-name: ${value.id + '_animation'};
  animation-name: ${value.id + '_animation'};
  -moz-animation-timing-function: ${value.type};
  -webkit-animation-timing-function: ${value.type};
  animation-timing-function: ${value.type};
  -moz-animation-fill-mode:forwards;
  -webkit-animation-fill-mode:forwards;
  animation-fill-mode:forwards;
}

@-moz-keyframes ${value.id + '_animation'} {
  from {
    top: ${document.getElementById(value.id).style.top}px;
	left: ${document.getElementById(value.id).style.left}px;
  }
  to {
    top: ${value.y}px;
	left: ${value.x}px;
  }
}

@-webkit-keyframes ${value.id + '_animation'} {
  from {
    top: ${document.getElementById(value.id).style.top}px;
	left: ${document.getElementById(value.id).style.left}px;
  }
  to {
    top: ${value.y}px;
	left: ${value.x}px;
  }
}

@keyframes ${value.id + '_animation'} {
  from {
    top: ${document.getElementById(value.id).style.top}px;
	left: ${document.getElementById(value.id).style.left}px;
  }
  to {
    top: ${value.y}px;
	left: ${value.x}px;
  }
}
						`}
					</style>
				})}
			</>
		)
	}

	refresh = () => { this.setProps({ refresh_var: 0 }) }
	change_input_type = (id, type) => {
		//用new Function获取到预览页面和客户端的window对象
		(new Function('id', 'type', 'window.document.getElementById(id).firstChild.firstChild.type = type;'))(id, type);
	}
	change_overflow = (id, direction, type) => {
		//用new Function获取到预览页面和客户端的window对象
		(new Function('id', 'direction', 'type', 'window.document.getElementById(id).firstChild.style[direction] = type;'))(id, direction, type);
	}
	change_background_image = (id, image_url) => {
		//用new Function获取到预览页面和客户端的window对象
		(new Function('id', 'image_url', 'window.document.getElementById(id).firstChild.style["background-image"] = `url("${image_url}")`;window.document.getElementById(id).firstChild.style["background-repeat"] = "no-repeat";window.document.getElementById(id).firstChild.style["background-size"] = "100% auto";'))(id, image_url);
	}
	move = (id, time, type, x, y) => {
		this.animations.push({ id: id, time: time, type: type, x: x, y: y });
		this.refresh();
	}
	clean = (id) => {
		this.animations.map((value, index) => {
			if (value.id == id) {
				delete this.animations[index];
			}
		});
		this.refresh();
	}
}

console.log(`/**
 * CoCo原生可见控件拓展
 * 制作：中子星000（QQ：2422481178）
 */`);

exports.types = types;
exports.widget = Widget;
