var document = this.document;

const antd = require('antd-mobile')
function loadScript(url) {
    var script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);
}
loadScript("https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js")

const types = {
    isInvisibleWidget: false,
    type: "Clander",
    icon: "https://cdn.cocotais.cn/project/waddle-2/logo/waddle2-logo.svg",
    title: "日历",
    version: "1.0.0",
    isGlobalWidget: false,
    properties: [
        {
            key: '__width',
            label: '宽度',
            valueType: 'number',
            defaultValue: 300,
            blockOptions: {
                generateBlock: false,
            },
        },
        {
            key: '__height',
            label: '高度',
            valueType: 'number',
            defaultValue: 410,
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

const wrapperStyle = {
    width: 300,
    border: `1px solid rgb(240, 240, 240)`,
    borderRadius: `8px`,
};

const haddlePanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
};

class Widget extends VisibleWidget {
    constructor(props) {
        super(props);
        this.__width = props.__width;
        this.__height = props.__height;
        this.CalendarID = props.CalendarID;
        this.calendar = document.querySelector(`#${this.CalendarID} > .adm-calendar`);
        console.log(this.calendar);
        this.defaultValue = props.defaultValue;
        this.value = props.value;

    }
    handleSelect(date, info) {
        this.emit("onSelect", date, info)
    }
    haddleClick() {
        var days = document.querySelectorAll(".adm-calendar-cell");
        var daytops = document.querySelectorAll(".adm-calendar-cell-top");
        days.forEach((day, num) => {
            day.onclick = e => {
                console.log(daytops[num].innerHTML)
            }
        })
    }
    render() {
        return (
            <div
                id={this.CalendarID}
                style={wrapperStyle}
            >
                <antd.Calendar
                    defaultValue={this.defaultValue}
                    value={this.value}
                    fullscreen={false}
                    onChange={date => {
                        console.log(date);
                        this.emit("onChange", date);
                    }}
                    onclick={() => this.haddleClick}
                    onPanelChange={haddlePanelChange}
                    onSelect={(date, info) => this.handleSelect(date, info)}
                ></antd.Calendar>
            </div >
        )
    }
}

types['events'].push({
    key: 'onChange',
    label: '改变',
    params: [
        {
            key: 'date',
            label: '日期',
            valueType: ['string', 'number', 'boolean', 'array', 'object',],
        },
    ],

})

types['events'].push({
    key: 'onSelect',
    label: '选择',
    params: [
        {
            key: 'date',
            label: '日期',
            valueType: ['string', 'number', 'boolean', 'array', 'object',],
        },
        {
            key: 'info',
            label: '信息',
            valueType: ['string', 'number', 'boolean', 'array', 'object',],
        },
    ],

})

types['properties'].push({
    key: 'CalendarID',
    label: '日历ID',
    valueType: 'string',
    defaultValue: "antdCalendar",
    tooltip: "注意：该项为必填，空在那后果自负",

})

types['properties'].push({
    key: 'defaultValue',
    label: '默认值',
    valueType: 'string',
    defaultValue: "",

})

types['properties'].push({
    key: 'value',
    label: '值',
    valueType: 'string',
    defaultValue: "",

})

exports.types = types;
exports.widget = Widget;