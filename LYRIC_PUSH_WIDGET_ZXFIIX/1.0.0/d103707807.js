/**
 * 歌词滚动推送
 * 制作：柠儿（QQ：3463448740）
 */
const AUTHER = '青柠';
const QQ = 3463448740;
const types = {
	type: 'LYRIC_PUSH_WIDGET_ZXFIIX',
	icon: 'https://www.lihouse.xyz/coco_widget/lyric_push/logo.svg',
	title: '歌词滚动推送逐字歌词版',
	version: '1.0.0',
	auther: AUTHER,
	docs: {
		url: 'https://doc.lihouse.xyz/lyric_push.html',
	},
	platforms: ['web', 'android', 'ios',],
	isInvisibleWidget: true,
	isGlobalWidget: true,
	hasAnyWidget: false,
	properties: [{
		key: 'lines',
		label: '歌词总行数',
		valueType: 'number',
		defaultValue: '0',
		readonly: !0
	},],
	methods: [

		{
			key: 'set',
			label: '解析歌词',
			params: [{
				key: 'lyric',
				label: '字符串',
				valueType: 'string',
				defaultValue: '',
			},],
			blockOptions: {
				color: '#ff6d32',
			},
		},

		{
			key: 'start',
			label: '开始推送',
			params: [{
				key: 'addingSecond',
				label: '在',
				valueType: 'number',
				defaultValue: '0',
				labelAfter: '秒'
			},],
			blockOptions: {
				color: '#ff6d32',
			},
		},

		{
			key: 'pause',
			label: '暂停推送',
			params: [],
			blockOptions: {
				color: '#ff6d32',
			},
		},


		{
			key: 'change',
			label: '跳转推送',
			params: [{
				key: 'seconds',
				label: '到',
				valueType: 'number',
				defaultValue: '0',
				labelAfter: '秒'
			},],
			blockOptions: {
				color: '#ff6d32',
			},
		},

	],
	events: [{
		key: 'onParse',
		label: '歌词被解析',
		params: [
			{ key: 'lyric', label: '当前歌词', valueType: 'string', },
			{ key: 'line', label: '当前行数', valueType: 'number', },
			{ key: 'index', label: '当前字位数', valueType: 'number', },
			{ key: 'time', label: '持续时间', valueType: 'number', },
		],
	},
	{
		key: 'onAccomplish',
		label: '歌词解析完成',
		params: [],
	},
	{
		key: 'onPush',
		label: '歌词被推送',
		params: [
			{ key: 'lyric', label: '当前歌词', valueType: 'string', },
			{ key: 'line', label: '当前行数', valueType: 'number', },
			{ key: 'index', label: '当前字位数', valueType: 'number', },
			{ key: 'time', label: '持续时间', valueType: 'number', },
		],
	},
	{
		key: 'onError',
		label: '出错',
		params: [{
			key: 'reason',
			label: '错误原因',
			valueType: 'string',
		}],
	},
	],
};

class Widget extends InvisibleWidget {
	constructor(props) {
		console.log('[LYRIC_PUSH_WIDGET] 作者:' + AUTHER + ' 联系方式:' + QQ);
		super(props);
		this.widgetLog('的使用文档网址:https://doc.lihouse.xyz/lyric_push.html');
		this.lyric = '';
		this.lines = props.lines;
		this.paused = false;
		this.globalObject = {};
		this.setted = false;
		this.status = false;
	}


	set(lyric) {
		if (this.status == true) {
			this.emit('onError', '请先暂停推送再设置！')
			this.widgetWarn('请先暂停推送再设置！')
		}
		this.lyric = lyric
		this.setted = true;
		const lines = this.polyfillForCoco();
		this.lines = lines.length
		// lines.forEach((line, i) => {
		// 	const match = line.match(/\[(\d+:\d+\.\d+)\](.*)/);
		// 	if (match) {
		// 		const [, , content] = match;
		// 		this.emit('onParse', content.trim(), i);
		// 	}
		// })


		const regex = /\((\d+),(\d+),\d+\)(.*?)(?=\(|\s*$)/g;
		let match;
		lines.forEach((item, index) => {
			let num = 1;
			while ((match = regex.exec(item)) != null) {
				const context = match
				const nums = num
				this.emit('onParse', context[3].trim(), index, nums, parseInt(context[2], 10));
				num++;
			}
		})

		this.emit('onAccomplish')
	}

	start() {
		if (this.setted == false) {
			this.emit('onError', '请先设置歌词！')
			this.widgetWarn('请先设置歌词！');
			return;
		}
		if (this.status == true) {
			this.emit('onError', '请先暂停推送再开始！')
			this.widgetWarn('请先暂停推送再开始！')
		}
		this.clearObject();
		this.status = true;
		this.paused = false;
		this.play();
	}


	change(seconds) {
		if (this.setted == false) {
			this.emit('onError', '请先设置歌词！')
			this.widgetWarn('请先设置歌词！');
			return;
		}
		if (this.status == false) {
			this.emit('onError', '请先开始推送！')
			this.widgetWarn('请先开始推送');
			return;
		}
		this.status = false;
		this.paused = true;
		this.clearObject();
		this.start(seconds);
	}

	pause() {
		if (this.setted == false) {
			this.emit('onError', '请先设置歌词！')
			this.widgetWarn('请先设置歌词！');
			return;
		}
		if (this.status == false) {
			this.emit('onError', '请先开始推送！')
			this.widgetWarn('请先开始推送');
			return;
		}
		this.status = false;
		this.paused = true;
		this.clearObject();
	}

	start(addingSecond) {
		console.log(this.globalObject)
		if (this.setted == false) {
			this.emit('onError', '请先设置歌词！')
			this.widgetWarn('请先设置歌词再！');
			return;
		}
		if (this.status == true) {
			this.emit('onError', '已经在推送了！')
			this.widgetWarn('已经在推送了！！');
			return;
		}
		this.paused = false;
		this.status = true;
		const lines = this.polyfillForCoco();
		this.addingSecond = addingSecond;
		const regex = /\((\d+),(\d+),\d+\)(.*?)(?=\(|\s*$)/g;
		let match;
		lines.forEach((item, index) => {
			let num = 1;
			while ((match = regex.exec(item)) != null) {
				const context = match
				const nums = num
				if (parseInt(match[1], 10) < addingSecond) return;
				const timeoutId = setTimeout(() => {
					this.progess++;
					if (!this.paused) {
						this.emit('onPush', context[3].trim(), index, nums, parseInt(context[2], 10));
					}
				}, parseInt(context[1], 10));
				this.addToGlobalObject(index.toString() + num.toString(), timeoutId);
				num++;
			}
		})
	}

	addToGlobalObject(key, timeoutId) {
		this.globalObject[key] = timeoutId;
	}

	clearObject() {
		Object.values(this.globalObject)
			.forEach(timeoutId => {
				clearTimeout(timeoutId);
			});
		while (this.globalObject.length > 0) {
			this.globalObject.pop();
		}
		this.globalObject = {};
	}

	polyfillForCoco() {
		/* 特别说明： coco在将源字符串重新保存为变量时，会把\n变成 \\n导致分割失败，这个函数是一个hack意味的修复*/
		let singleSplit = this.lyric.split('\n');
		let doubleSplit = this.lyric.split('\\n');
		if (singleSplit.length >= doubleSplit.length) {
			return singleSplit;
		} else {
			return doubleSplit;
		}
	}

}
exports.types = types;
exports.widget = Widget;