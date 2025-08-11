var document = this.document;

const url = 'https://api.pgaot.com/user/up_cat_file';
const types = {
    isInvisibleWidget: true,
    type: "BCM_FILE_UPLOADER",
    icon: "https://cdn.cocotais.cn/project/waddle-2/logo/waddle2-logo.svg",
    title: "编程猫对象存储2.0",
    version: "1.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
        this.path = props.path;
        this.file = null;
        
    }

}

types['properties'].push({
    key: 'path',
    label: '路径',
    valueType: 'string',
    defaultValue: 'bcx',
})

types['methods'].push({
    key: 'choose',
    label: '选择文件',
    params: [
    {
        key: 'type',
        label: '类型',
        valueType: 'string',
        defaultValue: "image/*",
    },],


})
Widget.prototype.choose = function (type) {
    var f = document.getElementById('FILE_UPLOADER');
    if(f) {
        f.remove();
        this.file = null;
    }
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = type;
    input.id = 'FILE_UPLOADER';
    input.style.display = 'none';
    document.getElementById('root').appendChild(input);
    var f = document.getElementById('FILE_UPLOADER');
    f.click();
//    var fnum = f.files.length;
    f.onchange = () => {
//        if (f.files.length > 0) {
            this.file = f.files[0];
            this.emit('change', this.file);
//        } else if(fnum == 0) {
//            this.emit('cancel');
//        }
    }
}

types['events'].push({
    key: 'change',
    label: '选择完毕',
    params: [
    {
        key: 'file',
        label: '文件',
        valueType: 'object',
    },],

})

//types['events'].push({
//    key: 'cancel',
//    label: '取消选择',
//    params: [],
//
//})

types['methods'].push({
    key: 'upload',
    label: '上传文件',
    params: [],


})
Widget.prototype.upload = function () {
    var data = new FormData();
    data.append('path', this.path);
    data.append('file', this.file);
    $.ajax({
		type: 'post',
		url: url,
		cache: false,
		processData: false,
		contentType: false,
		data: data,
		success: data => {
			this.emit('success', JSON.parse(data))
		},
		error: data => {
			this.emit('error', JSON.parse(data))
		}
	})
}

types['events'].push({
    key: 'success',
    label: '成功',
    params: [
    {
        key: 'result',
        label: 'JSON',
        valueType: 'object',
    },],

})

types['events'].push({
    key: 'error',
    label: '出错',
    params: [
    {
        key: 'result',
        label: 'JSON',
        valueType: 'object',
    },],

})

types['methods'].push({
    key: 'isHave',
    label: '是否有文件',
    params: [],
    valueType: 'boolean',


})
Widget.prototype.isHave = function () {
    var f = document.getElementById('FILE_UPLOADER');
    return f ? f.files.length > 0 ? true : false : false;
}

types['methods'].push({
    key: 'clear',
    label: '清空文件',
    params: [],


})
Widget.prototype.clear = function () {
    var f = document.getElementById('FILE_UPLOADER');
    if(f) {
        f.remove();
        this.file = null;
    }
}

function importScript(scriptUrl) {
	var script = document.createElement("script");
	script.setAttribute("type", "text/javascript");
	script.setAttribute("src", scriptUrl);
	document.body.appendChild(script);
}
importScript("https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js");

exports.types = types;
exports.widget = Widget;