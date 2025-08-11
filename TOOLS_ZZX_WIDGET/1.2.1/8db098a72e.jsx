/* eslint-disable */

/*
* 嘿，欢迎使用实用工具，由中子星000制作
* 作者：中子星000
* 主页：https://shequ.codemao.cn/user/2867423
* QQ：2422481178
* 使用方法：字面意思
*/

const BLOCK_COLOR = '#6e4ff4';
const WIDGET_ICON = 'icon-toolbox-feature';
const BLOCK_ICON = '';
const AUTHER = '中子星000';
const HOMEPAGE = 'https://shequ.codemao.cn/user/2867423';
const QQ = 2422481178;

const utils = require('utils');

const types = {
	type: 'TOOLS_ZZX_WIDGET',
	icon: WIDGET_ICON,
	title: '实用工具',
	version: '1.2.1',
	platforms: ['web', 'android', 'ios'],
	isInvisibleWidget: false,
	isGlobalWidget: false,
	properties: [
		{
			key: '__width',
			defaultValue: 0,
			readonly: true,
			blockOptions: {
				generateBlock: false,
			},
		},
		{
			key: '__height',
			defaultValue: 0,
			readonly: true,
			blockOptions: {
				generateBlock: false,
			},
		},
		{
			key: 'text',
			valueType: 'string',
			defaultValue: 'Hello world!',
			label: '文本',
			tooltip: '设置生成图片的文本',
		},
	],
	methods: [
		{
			key: 'is_mobile',
			label: '是移动端？',
			valueType: 'boolean',
			params: [],
			blockOptions: {
				color: BLOCK_COLOR,
			},
			tooltip: `是移动端返回true，不是返回false`,
		},
		{
			key: 'setDownload',
			label: '设置下载内容',
			params: [
				{
					key: 'url',
					label: 'Url',
					valueType: 'string',
					defaultValue: 'https://coco.codemao.cn/model/phone.fbx',
				},
				{
					key: 'fileName',
					label: '文件名',
					valueType: 'string',
					defaultValue: 'phoneModal.fbx',
				},
			],
			blockOptions: {
				color: BLOCK_COLOR,
			},
			tooltip: `支持DataUrl，HttpUrl，BlobUrl等，文件名自定义`,
		},
		{
			key: 'download',
			label: '下载',
			params: [],
			blockOptions: {
				color: BLOCK_COLOR,
			},
			tooltip: `进行下载，先调用 设置下载内容`,
		},
		{
			key: 'textSvg',
			label: '生成文本svg',
			valueType: 'string',
			params: [],
			blockOptions: {
				color: BLOCK_COLOR,
			},
			tooltip: `生成文本svg`,
		},
		{
			key: 'textSvgData',
			label: '生成文本svgDataUrl',
			valueType: 'string',
			params: [],
			blockOptions: {
				color: BLOCK_COLOR,
			},
			tooltip: `生成文本svgDataUrl`,
		},
	],
	events: []
};

class Widget extends VisibleWidget {
	constructor(props) {
		super(props);

		this.widgetLog('嘿，欢迎使用实用工具，由中子星000制作')

		this.text = props.text;

		this._url = 'https://coco.codemao.cn/model/phone.fbx';
		this._fileName = 'phoneModal.fbx';
	}

	render = () => {
		return (
			<>
				<a
					id={this.__widgetId + '_A'}
					target={'_blank'}
					href={this._url}
					download={this._fileName}
					style={{
						display: 'none',
					}}
				>
				</a>
				<svg xmlns={'http://www.w3.org/2000/svg'} version={'1.1'}>
					<text
						id={this.__widgetId + '_TEXT'}
						textAnchor={"middle"}
						dominantBaseline={"middle"}
					>{this.text}</text>
				</svg>
			</>
		)
	}

	is_mobile = () => {
		if (utils.isNative()) {
			return true;
		}
		else {
			return false;
		}
	}

	setDownload = (url, fileName) => {
		this.setProps({ _url: url, _fileName: fileName });
	}

	download = () => {
		const element = document.getElementById(this.__widgetId + '_A')
		element.click();
	}

	textSvg = () => {
		const element = document.getElementById(this.__widgetId + '_TEXT');
		var bbox = element.getBBox();
		var w = bbox.width + 10;
		var h = bbox.height + 10;
		return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="${w}" height="${h}"><text x="${w / 2}" y="${h / 2}" text-anchor="middle" dominant-baseline="middle">${this.text}</text></svg>`
	}
	textSvgData = () => {
		const element = document.getElementById(this.__widgetId + '_TEXT');
		var bbox = element.getBBox();
		var w = bbox.width + 10;
		var h = bbox.height + 10;
		return 'data:image/svg+xml;base64;charset=utf8,' + btoa(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="${w}" height="${h}"><text x="${w / 2}" y="${h / 2}" text-anchor="middle" dominant-baseline="middle">${this.text}</text></svg>`)
	}

}

console.log('嘿，欢迎使用实用工具，由中子星000制作');
console.log('作者：中子星000');
console.log('主页：https://shequ.codemao.cn/user/2867423');
console.log('QQ：2422481178');
console.log('使用方法：字面意思');

exports.types = types;
exports.widget = Widget;
