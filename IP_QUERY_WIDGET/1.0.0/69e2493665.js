/**
 * ip归属查询
 * 制作：柠儿（QQ：3463448740）
 */
const AUTHER = '青柠';
const QQ = 3463448740;
const types = {
	type: 'IP_QUERY_WIDGET',
	icon: 'https://www.lihouse.xyz/coco_widget/ip_query/ip.svg',
	title: 'ip归属地',
	version: '1.0.0',
	auther: AUTHER,
	docs: {
		url: 'https://doc.lihouse.xyz/ip.html',
	},
	platforms: ['web', 'android', 'ios' ],
	isInvisibleWidget: true,
	isGlobalWidget: true,
	hasAnyWidget: false,
	properties: [],
	methods: [

		{
			key: 'getlocation',
			label: '查询ip归属地及运营商',
			params: [{
				key: 'ip',
				valueType: 'string',
				defaultValue: '107.164.36.22',
			} ],
		},

	],
	events: [{
			key: 'onResulting',
			label: '查询到信息',
			params: [{
					key: 'location',
					label: '归属地',
					valueType: 'string',
				},
				{
					key: 'isp',
					label: '运营商',
					valueType: 'string',
				},
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
const axios = require('axios')
class Widget extends InvisibleWidget {
	constructor(props) {
		console.log('[INFORMATION_QUERY_WIDGET] 作者:'+AUTHER+' 联系方式:'+QQ)
		super(props)
		this.widgetLog('的使用文档网址:https://doc.lihouse.xyz/ip.html')
	}

	getlocation(ip){
		console.log(1)
		if(!this.isValidIP(ip)){
			this.emit('onError', 'ip格式不正确！')
			this.widgetWarn('ip格式不正确！')
			return
		}
		axios.get('https://www.lihouse.xyz/coco_widget/ip_query/query?ip='+ip).then(response => {
            let raw = response.data
            if(raw.status){
                this.emit('onResulting', raw.callback.location, raw.callback.isp)
            }else{
                this.emit('onEror', raw.msg)
            }
        }, error => {
			this.emit('onEror', error)
            this.widgetError(error)
        })
	}
	
	
	isValidIP(ip) {
		const ipFormat = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
		if (!ipFormat.test(ip)) {
			return false;
		}
		const ipParts = ip.split('.');
		for (let i = 0; i < ipParts.length; i++) {
			let part = parseInt(ipParts[i]);
			if (isNaN(part) || part < 0 || part > 255) {
				return false;
			}
		}
		return true;
	}
}
exports.types = types;
exports.widget = Widget;