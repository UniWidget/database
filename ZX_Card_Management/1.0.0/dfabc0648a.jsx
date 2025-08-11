var document = this.document
const types = {
    isInvisibleWidget: false,
    type: "ZX_Card_Management",
    icon: "",
    title: "ZX_手牌管理",
    version: "1.0.0",
    docs: '',
    isGlobalWidget: false,
    properties: [{
        key: 'data',
        label: 'data',
        valueType: 'string',
        defaultValue: '[{ "symbol": 1, "value": "诸葛连弩" },{ "symbol": 2, "value": "杀" },{ "symbol": 3, "value": "杀" },{ "symbol": 4, "value": "杀" },{ "symbol": 5, "value": "杀" },{ "symbol": 6, "value": "杀" },{ "symbol": 7, "value": "杀" },{ "symbol": 8, "value": "杀  " }]',
    },
    {
        key: 'clickcardlist',
        label: '选中列表',
        valueType: 'string',
        defaultValue: '1,2',
    },
    {
        key: 'fontsize',
        label: '文字大小',
        valueType: 'number',
        defaultValue: 15,
    },
    {
        key: 'cardheight',
        label: '卡牌高',
        valueType: 'number',
        defaultValue: 70,
    }, {
        key: 'cardwidth',
        label: '卡牌宽',
        valueType: 'number',
        defaultValue: 50,
    },
    {
        key: 'cardbgc',
        label: '卡牌背景颜色',
        valueType: 'color',
        defaultValue: '#fefefe',
    },
    {
        key: 'upcardbgc',
        label: '选中卡牌背景颜色',
        valueType: 'color',
        defaultValue: '#fefefe',
    },
    {
        key: 'upsize',
        label: '选中上移距离%',
        valueType: 'number',
        defaultValue: 50,
    },
    {
        key: 'autofontsize',
        label: '自动调整字体大小',
        valueType: 'boolean',
        defaultValue: false,
    },
    {
        key: 'maxclick',
        label: '最大选取数量',
        valueType: 'number',
        defaultValue: 2,
    },
    {
        key: 'isautocanceled',
        label: '自动取消选中',
        valueType: 'boolean',
        defaultValue: true,
    },
    ],
    methods: [
        {
            key: 'addcard',
            label: '添加手牌',
            params: [
                {
                    key: 'symbol',
                    label: '花色',
                    valueType: 'number',
                    dropdown: [
                        { label: '黑桃', value: 1 },
                        { label: '红桃', value: 2 },
                        { label: '方块', value: 3 },
                        { label: '梅花', value: 4 },
                    ],
                },
                {
                    key: 'name',
                    label: '名称',
                    valueType: 'string',
                    defaultValue: 'A',
                },
            ],
        },
        {
            key: 'addcard2',
            label: '添加手牌',
            params: [
                {
                    key: 'symbol',
                    label: '花色',
                    valueType: 'number',
                    defaultValue: 1,
                },
                {
                    key: 'name',
                    label: '名称',
                    valueType: 'string',
                    defaultValue: 'A',
                },
            ],
        },
        {
            key: 'delete_card',
            label: '删除手牌',
            params: [
                {
                    key: 'id',
                    label: '序列',
                    valueType: 'number',
                    defaultValue: 1,
                },
            ],
        },
    ],
    events: [{
        key: 'click_card',
        label: '点击手牌',
        params: [
            {
                key: 'index',
                label: '手牌位数',
                valueType: 'number',
            },
        ],
    },
    {
        key: 'selected_card',
        label: '选中手牌',
        params: [
            {
                key: 'index',
                label: '手牌位数',
                valueType: 'number',
            },
        ],
    },
    {
        key: 'canceled_card',
        label: '取消选择手牌',
        params: [
            {
                key: 'index',
                label: '手牌位数',
                valueType: 'number',
            },
        ],
    },
    {
        key: 'not_scusses',
        label: '选取手牌超上限',
        params: [
            {
                key: 'index',
                label: '手牌位数',
                valueType: 'number',
            },
        ],
    }
    ],
};

class Widget extends VisibleWidget {
    constructor(props) {
        super(props);
        Object.assign(this, props);
    }
    SUIT_MAP = {
        1: { symbol: "♠", color: "black" },
        2: { symbol: "♥", color: "red" },
        3: { symbol: "♦", color: "red" },
        4: { symbol: "♣", color: "black" },
    };
    clickcard(index) {
        if (this.clickcardlist.split(',').includes(String(index + 1))) {
            this.clickcardlist = this.clickcardlist.split(',').filter(num => num != String(index + 1)).join(',')
            this.emit('canceled_card', index + 1)

        }
        else {
            if (this.clickcardlist.split(',').length >= this.maxclick) {
                if (this.isautocanceled) {
                    this.clickcardlist = this.clickcardlist.split(',').slice(1).join(',')
                    this.clickcardlist = this.clickcardlist + ',' + (index + 1)
                    this.emit('selected_card', index + 1)
                }
                else {
                    this.emit('not_scusses', index + 1)
                }
            }
            else {
                this.clickcardlist = this.clickcardlist + ',' + (index + 1)
            }
        }
        this.emit('click_card', index + 1)
        this.setProps({ 'clickcardlist': this.clickcardlist })
    }
    delete_card(indexs) {
        console.log(this.datatojson());
        let data = this.datatojson().filter((item, i) => i !== indexs - 1)
        console.log(data);
        this.data = JSON.stringify(data)
        this.setProps({ 'data': JSON.stringify(data) })
    }
    datatojson() {
        return JSON.parse(this.data);
    }
    jishuanX(index) {
        if (index == 0) {
            return 0
        }
        else {
            return this.cardwidth * index - index * (this.cardwidth - ((this.__width - this.cardwidth) / (this.datatojson().length - 1)))
        }
    }
    rendercard(item, index) {
        if (this.autofontsize) {
            const maxFontSize = this.calculateMaxFontSize(item.value, this.cardwidth, this.fontsize);
            this.fontsize = maxFontSize

        }
        return (
            <>
                <div className="card" style={{
                    width: this.cardwidth + 'px',
                    zIndex: index + 100,
                    backgroundColor: this.clickcardlist.split(',').includes(String(index + 1)) ? this.upcardbgc : this.cardbgc,
                    height: this.cardheight + 'px',
                    border: '1px solid #ccc',
                    display: 'flex',
                    position: 'absolute',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRadius: '3px',
                    transition: ' all 0.2s ease-in-out',
                    color: this.SUIT_MAP[item.symbol % 4 == 0 ? 4 : item.symbol % 4].color,
                    transform: `translateX(${this.jishuanX(index)}px) ${this.clickcardlist.split(',').includes(String(index + 1)) ? 'translateY(' + -this.upsize + '%)' : ''}`
                }}
                    onClick={() => this.clickcard(index)}
                >
                    <div class="suit-1">{this.SUIT_MAP[item.symbol % 4 == 0 ? 4 : item.symbol % 4].symbol}</div>
                    <center>
                        <div class="data" style={{ fontSize: this.fontsize + 'px', flex: 1 }}>{item.value}</div>
                    </center>
                    <div class="suit-2" style={{ display: 'flex', justifyContent: 'end' }}>{this.SUIT_MAP[item.symbol % 4 == 0 ? 4 : item.symbol % 4].symbol}</div>
                </div >
            </>
        )
    }
    addcard(symbol, name) {
        let a = this.datatojson()
        a.push({ symbol: symbol, value: name })
        this.data = JSON.stringify(a)
        this.setProps({ 'data': this.data })
    }
    addcard2(symbol, name) {
        this.addcard(symbol, name)
    }
    calculateMaxFontSize(text, maxWidth, initialFontSize) {
        const tempElement = document.createElement('span');
        tempElement.style.position = 'absolute';
        tempElement.style.whiteSpace = 'nowrap';
        tempElement.style.fontSize = initialFontSize + 'px';
        tempElement.textContent = text;
        document.body.appendChild(tempElement);

        let fontSize = initialFontSize;
        while (tempElement.offsetWidth > maxWidth && fontSize > 10) {
            fontSize -= 1;
            tempElement.style.fontSize = fontSize + 'px';
        }
        document.body.removeChild(tempElement);
        return fontSize;
    }
    render() {
        let datas = JSON.parse(this.data);
        return (
            <>
                <div className="box" style={{ position: 'relative', display: 'flex', flexWrap: 'wrap', width: '100%', height: '100%' }}>
                    {
                        datas.map((item, index) => {
                            return this.rendercard(item, index)
                        })
                    }
                </div>
            </>
        )

    }
}
exports.types = types;
exports.widget = Widget;
