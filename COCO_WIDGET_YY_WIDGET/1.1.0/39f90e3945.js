

const BLOCK_COLOR = '#6e4ff4';
const WIDGET_ICON = 'icon-toolbox-feature';
const AUTHER = 'aiskikan';
const QQ = 2676342282

const types = {
	type: 'COCO_WIDGET_YY_WIDGET',
	icon: WIDGET_ICON,
	title: '控件阴影',
	version: '1.1.0',
	auther: AUTHER,
	platforms: ['web', 'android', 'ios'],
	isInvisibleWidget: true,
	isGlobalWidget: true,
	properties: [],
	methods: [
		{
			key: 'change',
			label: '把id为',
			params: [
				{
					key: 'id',
					labelAfter: '的任意控件加阴影',
					valueType: 'string',
					defaultValue: '通过F12查看控件id',
				},
				{
					key: 'ppx',
					valueType: 'number',
					defaultValue: '7',
					labelAfter: 'px'
				},
			],
			blockOptions: {
				callMethodLabel: false,
				color: BLOCK_COLOR,
			},
			tooltip: '对CoCo的任意控件进行操作',
		}
	],
	events: [],
};

class Widget extends InvisibleWidget {
	constructor(props) {
		super(props);
	}
	change = (id, ppx) => {
		//用new Function获取到预览页面和客户端的window对象
		(new Function('id', 'ppx', 'window.document.getElementById(id).style["box-shadow"] = `0px 0px ${ppx}px gray`;'))(id, ppx);
	}
}

exports.types = types;
exports.widget = Widget;
