
/**
 * dataUrl和Blob互转
 * 制作：一门鸽鸽（QQ：2422481178）
 */

const BLOCK_COLOR = '#00B6B6AA';
const WIDGET_ICON = 'https://creation.codemao.cn/716/appcraft/IMAGE_bZbAOhRcTa_1643095470593.svg';
const BLOCK_ICON = 'https://creation.codemao.cn/716/appcraft/IMAGE_xMzcMWdJQ_1643095470592.svg';
const AUTHER = '一门鸽鸽';
const HOMEPAGE = 'https://shequ.codemao.cn/user/2867423';
const QQ = 2422481178;

const types = {
	type: 'DATA_AND_BLOB_FYM_WIDGET',
	icon: WIDGET_ICON,
	title: 'dataUrl和Blob互转',
	version: '1.0.0',
	platforms: ['android', 'ios', 'web'],
	isInvisibleWidget: true,
	isGlobalWidget: true,
	docs: {
		url: HOMEPAGE
	},
	properties: [],
	methods: [
		{
			key: 'blobToData',
			label: 'Blob转Data',
			valueType: 'string',
			params: [
				{
					key: 'blobUrl',
					label: 'BlobUrl',
					valueType: 'string',
					defaultValue: ''
				},
			],
			blockOptions: {
				icon: BLOCK_ICON,
				color: BLOCK_COLOR,
			},
			tooltip: `将BlobUrl转换为DataUrl`,
		},
		{
			key: 'datatoBlob',
			label: 'Data转Blob',
			valueType: 'string',
			params: [
				{
					key: 'dataUrl',
					label: 'DataUrl',
					valueType: 'string',
					defaultValue: ''
				},
			],
			blockOptions: {
				icon: BLOCK_ICON,
				color: BLOCK_COLOR,
			},
			tooltip: `将DataUrl转换为BlobUrl`,
		},
	],
	events: []
};

const axios = require('axios');

class Widget extends InvisibleWidget {
	constructor(props) {
		super(props);
	}

	async blobToData(blobUrl) {
		const res = await axios({
			method: 'get',
			url: blobUrl,
			responseType: 'blob'
		});
		const blob = res.data;
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = function (e) {
				if (e.target && e.target.result) {
					resolve(e.target.result.toString());
				} else {
					reject('转换失败');
				}
			};
			reader.readAsDataURL(blob);
		});
	}


	datatoBlob(dataUrl) {
		let byteString;
		if (dataUrl.split(',')[0].indexOf('base64') >= 0) {
			byteString = atob(dataUrl.split(',')[1]);
		}
		else {
			byteString = unescape(dataUrl.split(',')[1]);
		}
		const mimeString = dataUrl.split(',')[0].split(':')[1].split(';')[0];
		const ia = new Uint8Array(byteString.length);
		for (let i = 0; i < byteString.length; i++) {
			ia[i] = byteString.charCodeAt(i);
		}
		const blob = new Blob([ia], {
			type: mimeString,
		});
		return URL.createObjectURL(blob);
	}

}

exports.types = types;
exports.widget = Widget;
