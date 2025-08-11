
/**
 * 昨夜的星辰定制二维列表
 * 制作：中子星000（QQ：2422481178）
 */

const BLOCK_COLOR = '#f9cc37';
const WIDGET_ICON = 'icon-toolbox-list';
const AUTHER = '中子星000';
const QQ = 2422481178;

const types = {
	type: '2DLIST_STO_ZZX_WIDGET',
	icon: WIDGET_ICON,
	title: '二维列表',
	version: '1.0.0',
	auther: AUTHER,
	platforms: ['web', 'android', 'ios'],
	isInvisibleWidget: true,
	isGlobalWidget: true,
	properties: [],
	methods: [
		{
			key: '创建列表',
			label: '把',
			valueType: 'array',
			params: [
				{
					key: 'list1',
					valueType: ['array', 'string'],
					defaultValue: '列表',
				},
				{
					key: 'list2',
					valueType: ['array', 'string'],
					defaultValue: '列表',
				},
				{
					key: 'list3',
					valueType: ['array', 'string'],
					defaultValue: '列表',
				},
				{
					key: 'mode',
					label: '作为',
					valueType: 'string',
					defaultValue: '列',
					dropdown: [
						{ label: '行', value: '行' },
						{ label: '列', value: '列' },
					],
					labelAfter: '拼接成二维列表',
				},
			],
			blockOptions: {
				color: BLOCK_COLOR,
				callMethodLabel: false,
			},
			tooltip: `把输入的列表按照选定方法拼接成二维列表（访问列表时先行后列哦）`,
		},
		{
			key: '拓展列表',
			label: '在',
			valueType: 'array',
			params: [
				{
					key: 'list1',
					labelAfter: '后',
					valueType: ['array', 'string'],
					defaultValue: '二维列表',
				},
				{
					key: 'mode',
					label: '添加',
					valueType: 'string',
					defaultValue: '列',
					dropdown: [
						{ label: '行', value: '行' },
						{ label: '列', value: '列' },
					],
				},
				{
					key: 'list2',
					valueType: ['array', 'string'],
					defaultValue: '列表',
				},
			],
			blockOptions: {
				color: BLOCK_COLOR,
				callMethodLabel: false,
			},
			tooltip: `拓展二维列表`,
		},
		{
			key: '读取列表',
			valueType: ['array', 'string', 'number', 'any'],
			params: [
				{
					key: 'list',
					valueType: ['array', 'string'],
					defaultValue: '二维列表',
				},
				{
					key: 'row',
					labelAfter: '行',
					valueType: 'number',
					defaultValue: 1,
				},
				{
					key: 'column',
					labelAfter: '列',
					valueType: 'number',
					defaultValue: 1,
				},
			],
			blockOptions: {
				color: BLOCK_COLOR,
				callMethodLabel: false,
			},
			tooltip: `读取二维列表，也可以用原生列表积木读取，先行后列`,
		},
		{
			key: '修改列表',
			valueType: ['array', 'string', 'number', 'any'],
			params: [
				{
					key: 'list',
					valueType: ['array', 'string'],
					defaultValue: '二维列表',
				},
				{
					key: 'row',
					labelAfter: '行',
					valueType: 'number',
					defaultValue: 1,
				},
				{
					key: 'column',
					labelAfter: '列',
					valueType: 'number',
					defaultValue: 1,
				},
				{
					key: 'value',
					label: '修改为',
					valueType: ['array', 'string', 'number', 'any'],
					defaultValue: 'Hello world!',
				},
			],
			blockOptions: {
				color: BLOCK_COLOR,
				callMethodLabel: false,
			},
			tooltip: `读取二维列表，也可以用原生列表积木读取，先行后列`,
		},
	],
	events: []
};

class Widget extends InvisibleWidget {
	constructor(props) {
		super(props);
	}

	创建列表 = (list1, list2, list3, mode) => {
		var arr = [[...list1], [...list2], [...list3]];
		if (mode === '行') {
			return arr
		}
		else {
			var new_arr = arr[0].map(function (ele, i) {
				return arr.map(function (row) {
					return row[i];
				});
			});
			return new_arr;
		}
	}


	拓展列表 = (list1, mode, list2) => {
		if (mode === '行') {
			if (list1[0].length !== list2.length) {
				this.widgetWarn(`二维列表行数(${list1[0].length})与拓展列表长度(${list2.length})不相等`)
			}
			return list1.concat([list2]);
		}
		else {
			if (list1.length !== list2.length) {
				this.widgetWarn(`二维列表列数(${list1.length})与拓展列表长度(${list2.length})不相等`)
			}
			var new_arr = list1.map(function (ele, i) {
				return ele.concat(list2[i]);
			});
			return new_arr;
		}
	}

	读取列表 = (list, row, column) => {
		return list[row + 1][column + 1];
	}

	修改列表 = (list, row, column, value) => {
		var arr = [...list];
		arr[row - 1][column - 1] = value;
		return arr;
	}

}

console.log('欢迎找中子星000（qq:2422481178）定制控件，本控件为定制控件')

exports.types = types;
exports.widget = Widget;
