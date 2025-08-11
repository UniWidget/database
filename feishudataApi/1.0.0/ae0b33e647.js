//昨夜的星辰对接，冷鱼闲风封装控件。
var confirmWindow, promptWindow, printWindow, openWindow;
var document = this.document;
var window = this.window;
const axios = require('axios');
const types = {
	isInvisibleWidget: true,
	type: "feishudataApi",
	icon: "https://cdn-community.codemao.cn/47/community/d2ViXzMwMDFfODQzODE4XzBfMTY2OTk4NzYzMDM3N18zMWJiODE4ZQ.png",
	title: "飞书多维表接口",
	version: "1.0.0",
	isGlobalWidget: true,
	properties: [],
	methods: [],
	events: [],
};
types.docs = {
	url: ""
};
types.platforms = ['web'],
	types['methods'].push({
		key: 'token_appid_secret',
		label: '获取Token（token_appid_secret）',
		tooltip: 'app_access_token 的最大有效期是 2 小时。如果在有效期小于 30 分钟的情况下，调用本接口，会返回一个新的 app_access_token，这会同时存在两个有效的 app_access_token',
		params: [{
			key: 'app_id',
			label: 'app_id',
			valueType: 'string',
			defaultValue: '',
		}, {
			key: 'app_secret',
			label: 'app_secret',
			valueType: 'string',
			defaultValue: '',
		}, ],

	}, {
		key: '_apps_tableid_gs',
		label: '获取表格信息',
		tooltip: '获取多维表格全部行-值内容，并以json返回。',
		params: [{
			key: 'app_token',
			label: 'app_token',
			valueType: 'string',
			defaultValue: '',
		}, {
			key: 'table_id',
			label: 'table_id',
			valueType: 'string',
			defaultValue: '',
		}, {
			key: 'ys',
			label: '分页标记',
			valueType: 'string',
			defaultValue: '',
		},{
			key: 'bds',
			label: '表达式（可空）',
			valueType: 'string',
			defaultValue: '',
		}, {
			key: 'token_appid_secret',
			label: 'Token',
			valueType: 'string',
			defaultValue: '',
		}, ],

	}, {
		key: '_app_table_record',
		label: '获取表格信息(检索记录)',
		tooltip: '获取多维表格检索记录。',
		params: [{
			key: 'app_token',
			label: 'app_token',
			valueType: 'string',
			defaultValue: '',
		}, {
			key: 'table_id',
			label: 'table_id',
			valueType: 'string',
			defaultValue: '',
		}, {
			key: 'record_id',
			label: 'record_id',
			valueType: 'string',
			defaultValue: '',
		},{
			key: 'token_appid_secret',
			label: 'Token',
			valueType: 'string',
			defaultValue: '',
		}, ],

	},  {
		key: '_apps_table_hid',
		label: '删除行',
		tooltip: '删除多维表格指定行的内容。并以json返回。',
		params: [{
			key: 'app_token',
			label: 'app_token',
			valueType: 'string',
			defaultValue: '',
		}, {
			key: 'table_id',
			label: 'table_id',
			valueType: 'string',
			defaultValue: '',
		}, {
			key: 'rowid',
			label: '行id',
			valueType: 'string',
			defaultValue: '',
		}, {
			key: 'token_appid_secret',
			label: 'Token',
			valueType: 'string',
			defaultValue: '',
		}, ],

	}, {
		key: '_apps_table_row_key',
		label: '更新行-值',
		tooltip: '更新多维表格其中行-值内容，并以json返回。',
		params: [{
			key: 'app_token',
			label: 'app_token',
			valueType: 'string',
			defaultValue: '',
		}, {
			key: 'table_id',
			label: 'table_id',
			valueType: 'string',
			defaultValue: '',
		}, {
			key: 'rowid',
			label: '行id',
			valueType: 'string',
			defaultValue: '',
		}, {
			key: 'data',
			label: '内容（字典形式）',
			valueType: 'string',
			defaultValue: '',
		}, {
			key: 'token_appid_secret',
			label: 'Token',
			valueType: 'string',
			defaultValue: '',
		}, ],

	}, {
		key: '_apps_tableid_key',
		label: '新增行-值',
		tooltip: '在多维表格最底部新增行-值内容，并以json返回。',
		params: [{
			key: 'app_token',
			label: 'app_token',
			valueType: 'string',
			defaultValue: '',
		}, {
			key: 'table_id',
			label: 'table_id',
			valueType: 'string',
			defaultValue: '',
		}, {
			key: 'data',
			label: '内容（字典形式）',
			valueType: 'string',
			defaultValue: '',
		}, {
			key: 'token_appid_secret',
			label: 'Token',
			valueType: 'string',
			defaultValue: '',
		}, ],

	}, {
		key: '_app_table_create',
		label: '新增数据表',
		tooltip: '在多维表格新增数据表，并以json返回。',
		params: [{
			key: 'app_token',
			label: 'app_token',
			valueType: 'string',
			defaultValue: '',
		}, {
			key: 'name',
			label: '表格名称',
			valueType: 'string',
			defaultValue: '',
		}, {
			key: 'token_appid_secret',
			label: 'Token',
			valueType: 'string',
			defaultValue: '',
		}, ],

	}, {
		key: '_app_table_list',
		label: '全部数据表',
		tooltip: '在多维表格列出所有的数据表，并以json返回。',
		params: [{
			key: 'app_token',
			label: 'app_token',
			valueType: 'string',
			defaultValue: '',
		}, {
			key: 'token_appid_secret',
			label: 'Token',
			valueType: 'string',
			defaultValue: '',
		}, ],

	}, {
		key: '_app_table_delete',
		label: '删除数据表',
		tooltip: '在多维表格删除其中数据表，并以json返回。',
		params: [{
			key: 'app_token',
			label: 'app_token',
			valueType: 'string',
			defaultValue: '',
		}, {
			key: 'table_id',
			label: 'table_id',
			valueType: 'string',
			defaultValue: '',
		}, {
			key: 'token_appid_secret',
			label: 'Token',
			valueType: 'string',
			defaultValue: '',
		}, ],

	}, )
types['events'].push({
		key: 'get_token_appid_secret',
		label: '获取到Token',
		params: [{
			key: 'getcode',
			label: 'Token',
			valueType: 'string',
			defaultValue: '',
		}, ]
	}, {
		key: 'get_apps_tableid_gs',
		label: '获取到表格内容',
		params: [{
			key: 'getcode',
			label: '内容',
			valueType: 'object',
			defaultValue: '',
		}, ]
	}, {
		key: 'dataru',
		label: '数据反馈',
		params: [{
			key: 'getcode',
			label: '内容',
			valueType: 'object',
			defaultValue: '',
		}, ]
	},


)


class Widget extends InvisibleWidget {
	constructor(props) {
		super(props);
	}
	//获取Token
	token_appid_secret = (app_id, app_secret) => {
		this.data = {
			"app_id": app_id,
			"app_secret": app_secret
		};
		this.headers = {
			"Content-Type": "application/json;charset=UTF-8"
		};
		axios.post('https://coco.codemao.cn/http-widget-proxy/https@SEP@open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal',
				this.data, {
					headers: this.headers,
				}
			)
			.then(response => {
				this.emit('get_token_appid_secret', response.data.tenant_access_token);

			}, error => {
				console.log(error.message)
			})
	}
	//获取所有数据表
	_app_table_list = (app_token, token_appid_secret) => {

		this.headers = {
			"Authorization": "Bearer " + token_appid_secret,
		};

		axios.get("https://coco.codemao.cn/http-widget-proxy/https@SEP@open.feishu.cn/open-apis/bitable/v1/apps/" + app_token + "/tables?page_size=100", {
				headers: this.headers,
			})
			.then(response => {
				this.emit('dataru', response.data);
			}, error => {
				this.emit('dataru', error.message);
			})
	}
	//检索记录
	_app_table_record = (app_token,table_id,record_id, token_appid_secret) => {

		this.headers = {
			"Authorization": "Bearer " + token_appid_secret,
		};

		axios.get("https://coco.codemao.cn/http-widget-proxy/https@SEP@open.feishu.cn/open-apis/bitable/v1/apps/"+app_token+"/tables/"+table_id+"/records/"+record_id, {
				headers: this.headers,
			})
			.then(response => {
				this.emit('dataru', response.data);
			}, error => {
				this.emit('dataru', error.message);
			})
	}


	//删除数据表
	_app_table_delete = (app_token, table_id, token_appid_secret) => {
		this.headers = {
			"Authorization": "Bearer " + token_appid_secret,
		};

		axios.delete("https://coco.codemao.cn/http-widget-proxy/https@SEP@open.feishu.cn/open-apis/bitable/v1/apps/" + app_token + "/tables/" + table_id, {
				headers: this.headers,
			})
			.then(response => {
				this.emit('dataru', response.data);
			}, error => {
				this.emit('dataru', error.message);
			})
	}
	//新增数据表
	_app_table_create = (app_token, name, token_appid_secret) => {
		this.data = {
				"table": {
					"name": name
				}
			},
			this.headers = {
				"Authorization": "Bearer " + token_appid_secret,
				"content-type": "application/json; charset=utf-8"
			};

		axios.post("https://coco.codemao.cn/http-widget-proxy/https@SEP@open.feishu.cn/open-apis/bitable/v1/apps/" + app_token + "/tables",
				this.data, {
					headers: this.headers,
				}
			)
			.then(response => {
				this.emit('dataru', response.data);
			}, error => {
				this.emit('dataru', error.message);
			})
	}
	//更新行
	_apps_table_row_key = (app_token, table_id, rowid, data, token_appid_secret) => {
		this.data = '{"fields": ' + data + '}'.replace(/\\/g, ''),
			this.headers = {
				"Authorization": "Bearer " + token_appid_secret,
				"content-type": "application/json; charset=utf-8"
			};

		axios.put("https://coco.codemao.cn/http-widget-proxy/https@SEP@open.feishu.cn/open-apis/bitable/v1/apps/" + app_token + "/tables/" + table_id + "/records/" + rowid,
				this.data, {
					headers: this.headers,
				}
			)
			.then(response => {
				this.emit('dataru', response.data);
			}, error => {
				this.emit('dataru', error.message);
			})
	}
	//删除行
	_apps_table_hid = (app_token, table_id, rowid, token_appid_secret) => {
		this.data = {
				"records": [rowid]
			},
			this.headers = {
				"Authorization": "Bearer " + token_appid_secret,
				"content-type": "application/json; charset=utf-8"
			};
		axios.post("https://coco.codemao.cn/http-widget-proxy/https@SEP@open.feishu.cn/open-apis/bitable/v1/apps/" + app_token + "/tables/" + table_id + "/records/batch_delete",
				this.data, {
					headers: this.headers,
				}
			)
			.then(response => {
				this.emit('dataru', response.data);

			}, error => {
				console.log(error.message)
			})
	}
	//新增行
	_apps_tableid_key = (app_token, table_id, data, token_appid_secret) => {
		this.data = '{"fields": ' + data + '}'.replace(/\\/g, ''),
			this.headers = {
				"Authorization": "Bearer " + token_appid_secret,
				"content-type": "application/json; charset=utf-8"
			};

		axios.post("https://coco.codemao.cn/http-widget-proxy/https@SEP@open.feishu.cn/open-apis/bitable/v1/apps/" + app_token + "/tables/" + table_id + "/records",
				this.data, {
					headers: this.headers,
				}
			)
			.then(response => {
				this.emit('dataru', response.data);
			}, error => {
				this.emit('dataru', error.message);
			})
	}


	//获取数据表信息
	_apps_tableid_gs = (app_token, table_id,ys, bds, token_appid_secret) => {
		this.headers = {
			"Authorization": "Bearer " + token_appid_secret
		};
		if(bds != '') {
			axios.get("https://coco.codemao.cn/http-widget-proxy/https@SEP@open.feishu.cn/open-apis/bitable/v1/apps/" + app_token + "/tables/" + table_id + "/records?page_size=500&page_token="+ys+"&filter=" + encodeURI(bds) , {
					headers: this.headers,
				})
				.then(response => {
					this.emit('get_apps_tableid_gs', response.data);

				}, error => {
					console.log(error.message)
				})
		} else {
			axios.get("https://coco.codemao.cn/http-widget-proxy/https@SEP@open.feishu.cn/open-apis/bitable/v1/apps/" + app_token + "/tables/" + table_id + "/records?page_size=500&page_token="+ys,

					{
						headers: this.headers,
					}
				)
				.then(response => {
					this.emit('get_apps_tableid_gs', response.data);

				}, error => {
					console.log(error.message)
				})
		}
	}
}


exports.types = types;
exports.widget = Widget;