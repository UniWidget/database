const BLOCK_COLOR = '#004EFFAA';
const WIDGET_ICON = 'https://pay.lihouse.xyz/favicon.ico';
const BLOCK_ICON = 'https://pay.lihouse.xyz/favicon.ico';
const AUTHER = '柠';
const VERSION = '2.1.0';
const QQ = 3463448740;

const types = {
    type: 'EPAY_2.1',
    icon: WIDGET_ICON,
    title: '柠支付 2.1',
    isInvisibleWidget: false,
    isGlobalWidget: false,
    version: VERSION,
    properties: [

    ],
    methods: [{
            key: 'setOrderName',
            label: '设置',
            params: [{
                key: 'name',
                label: '商品名称',
                valueType: 'string',
                defaultValue: '粉晶石',
            }, ],
            blockOptions: {
                icon: BLOCK_ICON,
                color: BLOCK_COLOR,
                inputsInline: 0,
            },
        },
        {
            key: 'setOrderDesc',
            label: '设置',
            params: [{
                key: 'name',
                label: '商品描述',
                valueType: 'string',
                defaultValue: '粉晶石是由爱神维纳斯的眼泪形成的。当她为失去心爱的人而哭泣时，她的眼泪落在地上，变成了这些美丽的宝石。从那时起，粉晶石就被认为是爱的象征，可以帮助人们找到真爱和幸福',
            }, ],
            blockOptions: {
                icon: BLOCK_ICON,
                color: BLOCK_COLOR,
                inputsInline: 0,
            },
        },
        {
            key: 'setOrderMoney',
            label: '设置',
            params: [{
                key: 'name',
                label: '商品价格',
                valueType: 'string',
                defaultValue: '0.66',
            }, ],
            blockOptions: {
                icon: BLOCK_ICON,
                color: BLOCK_COLOR,
                inputsInline: 0,
            },
        },
        {
            key: 'setOrderKey',
            label: '设置',
            params: [{
                key: 'name',
                label: '商户密钥',
                valueType: 'string',
                defaultValue: '请联系柠儿获取',
            }, ],
            blockOptions: {
                icon: BLOCK_ICON,
                color: BLOCK_COLOR,
                inputsInline: 0,
            },
        },
        {
            key: 'setBg',
            label: '设置',
            params: [{
                key: 'name',
                label: '背景图片(留空为默认)',
                valueType: 'string',
                defaultValue: '',
            }, ],
            blockOptions: {
                icon: BLOCK_ICON,
                color: BLOCK_COLOR,
                inputsInline: 0,
            },
        },
        {
            key: 'lauchPayment',
            label: '检验参数是否合规并开启交易',
            params: [],
            blockOptions: {
                icon: BLOCK_ICON,
                color: BLOCK_COLOR,
                inputsInline: 0,
            },
            tooltip: `发起支付，展示支付页面。期间请勿修改商品相关信息~`,
        },
        {
            key: 'closePayment',
            label: '关闭交易',
            params: [],
            blockOptions: {
                icon: BLOCK_ICON,
                color: BLOCK_COLOR,
                inputsInline: 0,
            },
            tooltip: `关闭支付，关闭支付页面。`,
        },
    ],
    events: [{
            key: 'onSuccess',
            label: '当校验支付成功',
            params: [],
        },
        {
            key: 'onFail',
            label: '当校验支付失败',
            params: [],
        },
        {
            key: 'onWaiting',
            label: '当校验支付中',
            params: [],
        },
        {
            key: 'onError',
            label: '当设置信息有误',
            params: [],
        },
    ],
};
const axios = require('axios')
const crypto = require('crypto-js')
class Widget extends VisibleWidget {
    constructor(props) {
        super(props);
        console.log('[NINGPAY_WIDGET] 作者:' + AUTHER + ' 商户注册联系方式:' + QQ + ' 建议单独设置一个屏幕全屏展示该控件使用！')
        this.widgetLog('[NINGPAY_WIDGET] 作者:' + AUTHER + ' 商户注册联系方式:' + QQ + ' 建议单独设置一个屏幕全屏展示该控件使用！')
        this.base = 'https://pay.lihouse.xyz/sdk/index.php'
        this.url = ''
        this.orderDesc = ''
        this.orderMoney = ''
        this.orderName = ''
        this.bg = 'bg'
        this.infoStyle = {
            display: 'block'
        };
        this.iframeStyle = {
            border: 'none',
            display: 'none'
        };
        this.key = '';
        this.isLauched = false;
        this.tn = 0;
        this.task = '';
    }

    lauchPayment() {
        if (this.isLauched) {
            this.emit('onError', '请关闭交易后再发起!')
            this.widgetWarn('请关闭交易后再发起!');
            return;
        }
        if (this.orderName.length !== 0 && this.orderDesc.length !== 0 && this.orderMoney !== 0 && this.key.length !== 0) {
            this.isLauched = true;
            this.orderMoney = parseFloat(this.orderMoney).toFixed(2);
            this.tn = this.getTn()
            this.setProps({
                infoStyle: {
                    display: 'none'
                },
                iframeStyle: {
                    border: 'none'
                },
                url: `${this.base}?key=${this.key}&fee=${this.orderMoney}&name=${this.orderName}&tn=${this.tn}&bg=${this.bg}&desc=${this.orderDesc}`
            });
            this.task = setInterval(() => {
                console.log(this.isLauched)
                this.getInfo(this.tn, this.orderMoney);
            }, 1000);
        } else {
            this.emit('onError', '信息设置不完全!')
            this.widgetWarn('信息设置不完全!');
        }
    }

    setBg(bg) {
        if (!this.check()) return;
        this.bg = bg;
    }
    closePayment() {
        if (this.isLauched) {
			this.isLauched = false;
			clearInterval(this.task)
            this.setProps({
                infoStyle: {
                    display: 'block'
                },
                iframeStyle: {
                    border: 'none',
                    display: 'none'
                },
            });
        } else {
            this.emit('onError', '交易未发起，无需关闭!')
            this.widgetWarn('交易未发起，无需关闭!');
        }
    }

    getDate() {
        const date = new Date();
        const year = date.getFullYear();
        const month = ("0" + (date.getMonth() + 1)).slice(-2);
        const day = ("0" + date.getDate()).slice(-2);
        const hours = ("0" + date.getHours()).slice(-2);
        const minutes = ("0" + date.getMinutes()).slice(-2);
        const seconds = ("0" + date.getSeconds()).slice(-2);
        const milliseconds = ("00" + date.getMilliseconds()).slice(-3);
        return `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`;
    }

    MtRand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getTn() {
        return `${this.getDate()}${this.MtRand(1000, 9999)}`;
    }

    getInfo(tn, money) {
		const _0x5876e0=_0x6d53;function _0x1528(){const _0x5499af=['emit','1501045zjzIqs','get','322456BFmwsv','onWaiting','https://pay.lihouse.xyz/sdk/getInfo.php?tn=','status','MD5','onSuccess','sign','4142442uAjyzb','63mDbDKX','135055OSxzMi','77VVSCsB','task','2oKjRbv','52eSlOBU','2352612fAdlDz','data','1548150WlPsam','614868sPdfKa','widgetError','toString'];_0x1528=function(){return _0x5499af;};return _0x1528();}function _0x6d53(_0x411766,_0x105fa1){const _0x1528e2=_0x1528();return _0x6d53=function(_0x6d536e,_0x3fe073){_0x6d536e=_0x6d536e-0x15b;let _0x1858da=_0x1528e2[_0x6d536e];return _0x1858da;},_0x6d53(_0x411766,_0x105fa1);}(function(_0x2c66b4,_0x80a6){const _0x1d3be3=_0x6d53,_0x2a1c7d=_0x2c66b4();while(!![]){try{const _0x40fe2c=-parseInt(_0x1d3be3(0x16b))/0x1+parseInt(_0x1d3be3(0x166))/0x2*(parseInt(_0x1d3be3(0x168))/0x3)+-parseInt(_0x1d3be3(0x167))/0x4*(-parseInt(_0x1d3be3(0x163))/0x5)+-parseInt(_0x1d3be3(0x161))/0x6+-parseInt(_0x1d3be3(0x16f))/0x7+parseInt(_0x1d3be3(0x171))/0x8*(parseInt(_0x1d3be3(0x162))/0x9)+parseInt(_0x1d3be3(0x16a))/0xa*(parseInt(_0x1d3be3(0x164))/0xb);if(_0x40fe2c===_0x80a6)break;else _0x2a1c7d['push'](_0x2a1c7d['shift']());}catch(_0x2d23f8){_0x2a1c7d['push'](_0x2a1c7d['shift']());}}}(_0x1528,0xef9f3),axios[_0x5876e0(0x170)](_0x5876e0(0x15c)+tn)['then'](_0x704661=>{const _0x4b088f=_0x5876e0;let _0xec9efe=_0x704661[_0x4b088f(0x169)];_0xec9efe[_0x4b088f(0x15d)]?crypto[_0x4b088f(0x15e)](tn[_0x4b088f(0x16d)]()+money[_0x4b088f(0x16d)]())[_0x4b088f(0x16d)]()==_0xec9efe[_0x4b088f(0x160)]?(clearInterval(this[_0x4b088f(0x165)]),this[_0x4b088f(0x16e)](_0x4b088f(0x15f))):this[_0x4b088f(0x16e)]('onFail'):this[_0x4b088f(0x16e)](_0x4b088f(0x15b));},_0x5386af=>{const _0xdb5207=_0x5876e0;this[_0xdb5207(0x16c)](_0x5386af);}));
    }

    check() {
        if (this.isLauched) {
            this.emit('onError', '当前正在交易中，可在关闭交易后重新设置信息!')
            this.widgetWarn('当前正在交易中，可在关闭交易后重新设置信息!');
            return false;
        }
        return true;
    }

    setOrderName(name) {
        if (!this.check()) return;
        if (name.length <= 0) {
            this.emit('onError', '名称不要留空哦!')
            this.widgetWarn('名称不要留空哦!');
            return;
        }
        this.orderName = name;
    }

    setOrderDesc(desc) {
        if (!this.check()) return;
        if (desc.length <= 0) {
            this.emit('onError', '描述不要留空哦!')
            this.widgetWarn('描述不要留空哦!');
            return;
        }
        this.orderDesc = desc;
    }
    setOrderMoney(money) {
        if (!this.check()) return;
        if (Number(money) && Number(money) <= 0) {
            this.emit('onError', '金额设置不合法，还是不要倒贴别人好了!')
            this.widgetWarn('金额设置不合法，还是不要倒贴别人好了!');
            return;
        }
        if (money.toString().match(/\.\d{3,}/)) {
            this.emit('onError', '金额设置不合法，最多允许存在两个小数点!')
            this.widgetWarn('金额设置不合法，最多允许存在两个小数点!');
            return;
        }
        this.orderMoney = money;
    }
    setOrderKey(key) {
        if (!this.check()) return;
        if (key.length <= 0) {
            this.emit('onError', '密钥不要留空哦，可以加qq 3463448740了解!')
            this.widgetWarn('密钥不要留空哦，可以加qq 3463448740了解!');
            return;
        }
        this.key = key;
    }
	render() {
		const pageStyle = {
		  padding: '20px',
		  width:'100%',
		  textAlign: 'center',
		  position: 'absolute',
		  top: '50%',
		  left: '50%',
		  transform: 'translate(-50%, -50%)',
		};
		
		const titleStyle = {
		  fontSize: '24px',
		  marginBottom: '20px',
		};
		
		const descriptionStyle = {
		  fontSize: '16px',
		  color: '#888',
		  marginBottom: '40px',
		};
		
		const buttonAreaStyle = {
		  display: 'flex',
		  justifyContent: 'center',
		};
		
		return (
		  <div style={{height : '100%'}}>
			<div style={this.infoStyle}>
			  <div style={pageStyle}>
				<div style={titleStyle}>最后一步</div>
				<div style={descriptionStyle}>请等待应用发起支付...</div>
				<div style={buttonAreaStyle}>
				  <p>PROVIDED BY NINGPAY</p>
				</div>
			  </div>
			</div>
			<iframe style={this.iframeStyle} src={this.url} width="100%" height="100%"></iframe>
		  </div>
		);
	  }
}

exports.types = types;
exports.widget = Widget;
