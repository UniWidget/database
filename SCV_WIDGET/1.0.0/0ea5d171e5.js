var document = this.document;
function downCsv0(fileName, data) {
    let scv_header = "";
    for(let header in data[0]) {
        scv_header += `${header},`;
    };
    let scv = `${scv_header}\n`;
    for (let i =0; i < data.length; i++) {
        for(let key in data[i]) {
            scv += `${data[i][key]},`; //用键值取
        };
    scv += "\n";
    };
    return `data:text/csv;charset=utf-8,\ufeff${encodeURIComponent(scv)}`;
}
const types = {
    type: 'SCV_WIDGET',
    icon: 'icon-widget-table-data',
    title: '表格助手',
    version: '1.0.0',
    platforms: ['android', 'ios', 'web'],
    isInvisibleWidget: false,
    isGlobalWidget: false,
    docs: {
        url: ''
    },
    properties: [
        {
          key: '__width', // 内置属性
          label: '宽度',
          valueType: 'number', // 数字类型
          defaultValue: 0
        },
        {
          key: '__height', // 内置属性
          label: '高度',
          valueType: 'number', // 数字类型
          defaultValue: 0
        }
    ],
    methods: [
        {
            key: "downCsv",
            label: "下载表格",
            params: [
                {
                    key: "data",
                    label: "",
                    labelAfter: "",
                    valueType: ["string", "array"],
                    defaultValue: '[{"1":"2"}, {"1":"2"}]'
                },
                {
                    key: "fileName",
                    label: "名称为",
                    labelAfter: "",
                    valueType: "string",
                    defaultValue: "表格.csv"
                }
            ],
            blockOptions: {
                callMethodLabel: false,
                color: "rgb(247, 135, 103)"
            }
        }
    ],
    events: []
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
        this.__width = props.__width;
        this.__height = props.__height;
        this.href0 = "";
        this.download0 = ".csv";
        this.link = document.getElementById(`${this.__widgetId}_link`);console.log(this.setProps)
    }
    render() {
        return (
            <a
                id={`${this.__widgetId}_link`}
                href={this.href0}
                download={this.download0}>
            </a>
        );
    }
    downCsv = (data, fileName) => {
        var csv0;
        if (typeof(data) == "string") {
            csv0 = downCsv0(fileName, JSON.parse(`{"data": ${data}}`)["data"]);
        } else {
            csv0 = downCsv0(fileName, data);
        };
        this.setProps({'href': csv0, 'download0': fileName});
        this.link.click();
        console.log("成功");
    }
}
exports.types = types;
exports.widget = Widget;
