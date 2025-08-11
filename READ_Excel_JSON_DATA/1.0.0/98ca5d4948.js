var document = this.document;

let script = document.createElement("script");
script.src = "https://static.codemao.cn/IFTC-Studio/HJDA3JDsR.js";
document.head.appendChild(script);

function eadExcelFromDataURL(dataURL) {
	const binaryData = getDataFromDataURL(dataURL);
	const workbook = XLSX.read(binaryData, { type: 'binary' });
	const sheetName = workbook.SheetNames[0];
	const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
		header: 1
	});
	return jsonData;
}

function getDataFromDataURL(dataURL) {
	const parts = dataURL.split(';base64,');
	if (parts.length !== 2) {
		throw new Error('Invalid DataURL');
	}
	const base64Data = parts[1];
	const binaryData = atob(base64Data);
	return binaryData;
}

const types = {
	isInvisibleWidget: true,
	type: "READ_Excel_JSON_DATA",
	icon: "https://cdn.cocotais.cn/project/waddle-2/logo/waddle2-logo.svg",
	title: "读取Excel表格",
	version: "1.0.0",
	isGlobalWidget: true,
	properties: [],
	methods: [],
	events: [],
};

class Widget extends InvisibleWidget {
	constructor(props) {
		super(props);
		this.dataURL = props.dataURL;

	}
}

types['properties'].push({
	key: "dataURL",
	label: "dataURL",
	valueType: "string",
	defaultValue: ""
})

types['methods'].push({
    key: 'Read',
    label: '读取',
    params: [],
    valueType: "object"
})

Widget.prototype.Read = function () {
	console.log(this.dataURL)
	const parts = this.dataURL.split(';base64,');
	if (parts.length !== 2) {
		throw new Error('Invalid DataURL');
	}
	const base64Data = parts[1];
	const binaryData = atob(base64Data);
	const workbook = XLSX.read(binaryData, { type: 'binary' });
	const sheetName = workbook.SheetNames[0];
	const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
		header: 1
	});
	return jsonData;
}

exports.types = types;
exports.widget = Widget;