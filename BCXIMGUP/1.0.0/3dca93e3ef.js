var document = this.document;
var window = this.window;
const types = {
	isInvisibleWidget: false,
	type: "BCXIMGUP",
	icon: "https://static.codemao.cn/whale/HkHfooFjY",
	title: "编程猫对象存储",
	version: "1.0.0",
	isGlobalWidget: false,
	properties: [{
			key: '__width',
			label: '宽度',
			valueType: 'number',
			defaultValue: 280,
			blockOptions: {
				generateBlock: false,
			},
		},
		{
			key: '__height',
			label: '高度',
			valueType: 'number',
			defaultValue: 51,
			blockOptions: {
				generateBlock: false,
			},
		},
		{
			key: '__size',
			label: '',
			valueType: 'number',
			defaultValue: 0,
			readonly: true,
			blockOptions: {
				setter: {
					keys: ['__height', '__width'],
				},
				getter: {
					keys: ['__height', '__width'],
				},
			},
		},
	],
	methods: [],
	events: [],
};

class Widget extends VisibleWidget {
	constructor(props) {
		super(props);
		this.__width = props.__width;
		this.__height = props.__height;
		this.inputtext = props.inputtext;
		this.filestyle = props.filestyle;
		this.tips = props.tips;
	}
	render() {
		return (
			React.createElement("div", {
				onClick: this.onClick.bind(this),
				style: {
					width: "100%",
					height: "100%",
				},
				dangerouslySetInnerHTML: {
					__html: ('<form id="bcxUpCodeMaoFile" action="https://api.bcmcreator.cn/img/UpCodeMaoFile.php" method="post" enctype="multipart/form-data"><input type="text" name="Path" value="' + this.inputtext + '" hidden/><input type="button" id="filename"  value="' + this.tips + '" onclick="document.getElementById(\'bcxfileup\').click()" style="' + this.filestyle + '"><input type="file"   style="opacity: 0;" name="file"  id="bcxfileup" required="" onchange="document.getElementById(\'filename\').value=this.files[0].name;" />  ')
				}
			}, null)
		);

	}

	bcxgetform = () => {
		return $('#bcxUpCodeMaoFile input[name="file"]')
			.prop('files')
			.length ? false : true;
	};
	bcxsetform = () => {
		var file = $('#bcxUpCodeMaoFile input[name="file"]');
		file.after(file.clone()
			.val(""));
		file.remove();
		$('#bcxUpCodeMaoFile input[id="filename"]')
			.val(this.tips)

	};

	bcxform = () => {
		var targetUrl = $("#bcxUpCodeMaoFile")
			.attr("action");
		var data = new FormData($("#bcxUpCodeMaoFile")[0]);
		$.ajax({
			type: 'post',
			url: targetUrl,
			cache: false,
			processData: false,
			contentType: false,
			data: data,
			success: data => {
				this.emit('filereturn', JSON.parse(data))
			},
			error: data => {
				this.emit('filereturn', data)
			}
		})
	};
}

types['events'].push({
	key: 'onClick',
	label: '控件点击',
	params: [],

})
Widget.prototype.onClick = function(event) {
	this.emit("onClick");
}

types['events'].push({
	key: 'filereturn',
	label: '获取到回调数据',
	params: [{
		key: 'getcode',
		label: 'JSON数据',
		valueType: 'object',
		defaultValue: '',
	}],

})

types['properties'].push({
	key: 'inputtext',
	label: '存储路径 ',
	valueType: 'string',
	editorType: 'TextInput',
	defaultValue: 'bcxCoco',
	blockOptions: {
		color: '#ffbb55',
		icon: '无',
		generateBlock: false,
		inputsInline: true,
		space: 16,
	}
}, {
	key: 'tips',
	label: '提示 ',
	valueType: 'string',
	editorType: 'TextInput',
	defaultValue: '点击上传文件[编创协提供支持]',
	blockOptions: {
		color: '#ffbb55',
		icon: '无',
		generateBlock: false,
		inputsInline: true,
		space: 16,
	}
}, {
	key: 'filestyle',
	label: 'style',
	valueType: 'string',
	editorType: 'TextArea',
	defaultValue: 'top: 138px;left: 41px;height: 51px;width: 280px;min-width: 40px;min-height: 20px;font-size: 14px;font-family: sans-serif;color: rgb(51, 51, 51);opacity: 1;background: rgb(255, 255, 255);border-radius: 4px;border: 2px solid rgba(93, 197, 251, 0.5);padding: 6px 14px;--input-placeholder-color: #c1c1c1;',
	blockOptions: {
		color: '#ffbb55',
		icon: '无',
		generateBlock: false,
		inputsInline: true,
		space: 16,
	}
}, )

types['methods'].push({
	key: 'bcxform',
	label: '提交表单',
	params: [],
})
types['methods'].push({
	key: 'bcxgetform',
	label: '文件是否空',
	valueType: 'boolean',
	params: [],
})
types['methods'].push({
	key: 'bcxsetform',
	label: '文件清空',
	params: [],
})

function importScript(scriptUrl) {
	var script = document.createElement("script");
	script.setAttribute("type", "text/javascript");
	script.setAttribute("src", scriptUrl);
	document.body.appendChild(script);
}
importScript("https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js")

exports.types = types;
exports.widget = Widget;