// 二创作者：垃圾桶
// 基于控件“对话框1.0.0”和“验证码_zx”进行修改
// 控件名：对话框-客服定制-验证码版
// 版本：1.0.0
// 稳定且永久免费

const blockColor = '#1E90FF';
var document = this.document;
var window = this.window;

// 验证码生成函数
!(function (window, document) {
    function GVerify(options) {
        this.options = {
            id: "",
            canvasId: "verifyCanvas",
            width: "100",
            height: "38",
            type: "blend",
            code: ""
        }

        if (Object.prototype.toString.call(options) == "[object Object]") {
            for (var i in options) {
                this.options[i] = options[i];
            }
        } else {
            this.options.id = options;
        }

        this.options.numArr = "1,2,3,4,5,6,7,8,9".split(",");
        this.options.letterArr = getAllLetter();

        this._init();
        this.refresh();
    }

    GVerify.prototype = {
        version: '1.0.0',
        _init: function () {
            var con = document.getElementById(this.options.id);
            if (!con) return;
            
            var canvas = document.createElement("canvas");
            this.options.width = con.offsetWidth > 0 ? con.offsetWidth : "100";
            this.options.height = con.offsetHeight > 0 ? con.offsetHeight : "38";
            canvas.id = this.options.canvasId;
            canvas.width = this.options.width;
            canvas.height = this.options.height;
            canvas.style.cursor = "pointer";
            canvas.innerHTML = "您的浏览器版本不支持canvas";
            con.appendChild(canvas);
            var parent = this;
            canvas.onclick = function () {
                parent.refresh();
            };
        },
        refresh: function () {
            this.options.code = "";
            var canvas = document.getElementById(this.options.canvasId);
            if (!canvas) return;
            
            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');
            } else {
                return;
            }

            ctx.textBaseline = "middle";
            ctx.fillStyle = randomColor(180, 240);
            ctx.fillRect(0, 0, this.options.width, this.options.height);

            var txtArr;
            if (this.options.type == "blend") {
                txtArr = this.options.numArr.concat(this.options.letterArr);
            } else if (this.options.type == "number") {
                txtArr = this.options.numArr;
            } else {
                txtArr = this.options.letterArr;
            }

            for (var i = 1; i <= 4; i++) {
                var txt = txtArr[randomNum(0, txtArr.length)];
                this.options.code += txt;
                ctx.font = randomNum(this.options.height / 2, this.options.height) + 'px SimHei';
                ctx.fillStyle = randomColor(50, 160);
                ctx.shadowOffsetX = randomNum(-3, 3);
                ctx.shadowOffsetY = randomNum(-3, 3);
                ctx.shadowBlur = randomNum(-3, 3);
                ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
                var x = this.options.width / 5 * i;
                var y = this.options.height / 2;
                var deg = randomNum(-30, 30);
                ctx.translate(x, y);
                ctx.rotate(deg * Math.PI / 180);
                ctx.fillText(txt, 0, 0);
                ctx.rotate(-deg * Math.PI / 180);
                ctx.translate(-x, -y);
            }
            for (var i = 0; i < 4; i++) {
                ctx.strokeStyle = randomColor(40, 180);
                ctx.beginPath();
                ctx.moveTo(randomNum(0, this.options.width), randomNum(0, this.options.height));
                ctx.lineTo(randomNum(0, this.options.width), randomNum(0, this.options.height));
                ctx.stroke();
            }
            for (var i = 0; i < this.options.width / 4; i++) {
                ctx.fillStyle = randomColor(0, 255);
                ctx.beginPath();
                ctx.arc(randomNum(0, this.options.width), randomNum(0, this.options.height), 1, 0, 2 * Math.PI);
                ctx.fill();
            }
        },
        validate: function (code) {
            var code = code.toLowerCase();
            var v_code = this.options.code.toLowerCase();
            if (code == v_code) {
                return true;
            } else {
                this.refresh();
                return false;
            }
        }
    }
    function getAllLetter() {
        var letterStr = "a,b,c,d,e,f,g,h,i,j,k,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,U,V,W,X,Y,Z";
        return letterStr.split(",");
    }
    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    function randomColor(min, max) {
        var r = randomNum(min, max);
        var g = randomNum(min, max);
        var b = randomNum(min, max);
        return "rgb(" + r + "," + g + "," + b + ")";
    }
    window.GVerify = GVerify;
})(window, document);

let types = {
    title: "对话框-客服定制-验证码版",
    type: "QII_VERIFY_DIALOG_WIDGETKFDZYZMB",
    icon: "https://static.bcmcdn.com/coco/player/unstable/B1Q5UP19kg.image/svg+xml?hash=FlzrVxf2Hhk6g1HNMjcoQp2rLgpa",
    version: "1.0.0",
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [
        { key: 'themeColor', label: '主题颜色', valueType: 'color', defaultValue: '#3080FF' },
        { key: 'cardColor', label: '对话框颜色', valueType: 'color', defaultValue: '#FFFFFF' },
        { key: 'textColor', label: '文字颜色', valueType: 'color', defaultValue: '#303032' },
        { key: 'placeColor', label: '提示文案颜色', valueType: 'color', defaultValue: '#A5A5A5' },
        { key: 'cardRadius', label: '对话框圆角', valueType: 'number', defaultValue: 12, unit: '像素' },
        { key: 'titleSize', label: '标题大小', valueType: 'number', defaultValue: 16, unit: '像素' },
        { key: 'textSize', label: '文本大小', valueType: 'number', defaultValue: 14, unit: '像素' },
        { key: 'itemSize', label: '选项文本大小', valueType: 'number', defaultValue: 14, unit: '像素' },
        { key: 'verifyWidth', label: '验证码宽度', valueType: 'number', defaultValue: 120, unit: '像素' },
        { key: 'verifyHeight', label: '验证码高度', valueType: 'number', defaultValue: 40, unit: '像素' },
        { 
            key: 'verifyType', 
            label: '验证码类型', 
            valueType: 'dropdown', 
            defaultValue: 'blend',
            dropdown: [
                { 'value': 'blend', 'label': '混合' },
                { 'value': 'number', 'label': '纯数字' },
                { 'value': 'letter', 'label': '纯字母' },
            ]
        }
    ],
    events: [
        { 
            key: 'onClickItem', 
            label: '完成选择',
            params: [
                { key: 'text', label: '文本', valueType: 'string' },
                { key: 'index', label: '序号', valueType: 'string' },
                { key: 'id', label: '对话框ID', valueType: 'string' },
            ],
        },
        { 
            key: 'onInputFinish', 
            label: '输入完成',
            params: [
                { key: 'text', label: '输入内容', valueType: 'string' },
                { key: 'id', label: '对话框ID', valueType: 'string' },
            ],
        },
        { 
            key: 'onVerifySuccess', 
            label: '验证成功',
            params: [
                { key: 'id', label: '对话框ID', valueType: 'string' },
            ],
        },
        { 
            key: 'onVerifyFailed', 
            label: '验证失败',
            params: [
                { key: 'id', label: '对话框ID', valueType: 'string' },
            ],
        },
    ],
    methods: [
        {
            key: "showDialog",
            label: '弹出消息',
            params: [
                { key: "title", label: '标题', valueType: 'string', defaultValue: '对话框标题' },
                { key: "text", label: '文本', valueType: 'string', defaultValue: '对话框说明文本' },
                { key: "image", label: '图片', valueType: 'string', defaultValue: '' },
                { key: "items", label: '选项列表', valueType: 'string', defaultValue: '取消,确认' },
                { key: "lightItem", label: '高亮选项', valueType: 'string', defaultValue: '确认' },
                { key: "align", label: '文本对齐', valueType: 'string', defaultValue: '', 
                    dropdown: [
                        { label: '居中', value: 'center' },
                        { label: '左侧', value: 'left' },
                    ],
                },
                { key: "id", label: '对话框ID', valueType: 'string', defaultValue: '对话框1' },
            ],
            blockOptions: { color: blockColor, inputsInline: false },
        },
        {
            key: "showInputDialog",
            label: '进行输入',
            params: [
                { key: "title", label: '标题', valueType: 'string', defaultValue: '对话框标题' },
                { key: "text", label: '文本', valueType: 'string', defaultValue: '对话框说明文本' },
                { key: "image", label: '图片', valueType: 'string', defaultValue: '' },
                { key: "placeholder", label: '提示文案', valueType: 'string', defaultValue: '请输入..' },
                { key: "inputValue", label: '输入内容', valueType: 'string', defaultValue: '' },
                { key: "lightItem", label: '确认按钮', valueType: 'string', defaultValue: '确认' },
                { key: "align", label: '文本对齐', valueType: 'string', defaultValue: '', 
                    dropdown: [
                        { label: '居中', value: 'center' },
                        { label: '左侧', value: 'left' },
                    ],
                },
                { key: "id", label: '对话框ID', valueType: 'string', defaultValue: '对话框2' },
            ],
            blockOptions: { color: blockColor, inputsInline: false },
        },
        {
            key: "showVerifyDialog",
            label: '验证码验证',
            params: [
                { key: "title", label: '标题', valueType: 'string', defaultValue: '请输入验证码' },
                { key: "text", label: '文本', valueType: 'string', defaultValue: '请完成下方验证码验证' },
                { key: "image", label: '图片', valueType: 'string', defaultValue: '' },
                { key: "placeholder", label: '提示文案', valueType: 'string', defaultValue: '输入验证码' },
                { key: "lightItem", label: '确认按钮', valueType: 'string', defaultValue: '确认' },
                { key: "align", label: '文本对齐', valueType: 'string', defaultValue: 'center', 
                    dropdown: [
                        { label: '居中', value: 'center' },
                        { label: '左侧', value: 'left' },
                    ],
                },
                { key: "id", label: '对话框ID', valueType: 'string', defaultValue: 'KFDZYZMB_1' },
                { 
                    key: "verifyType", 
                    label: '验证码类型', 
                    valueType: 'dropdown', 
                    defaultValue: 'blend',
                    dropdown: [
                        { 'value': 'blend', 'label': '混合' },
                        { 'value': 'number', 'label': '纯数字' },
                        { 'value': 'letter', 'label': '纯字母' },
                    ]
                }
            ],
            blockOptions: { color: blockColor, inputsInline: false },
        },
    ],
}

class Widget extends VisibleWidget {
    constructor(props) {
        super(props)
        Object.assign(this, props)

        this.inputValue = ''    // 输入内容
        this.verifyCode = null  // 验证码实例
        this.verifyInput = null // 验证码输入框
    }

    // 显示选择对话框
    showDialog(title, text, image, items, lightItem, align, dialogId) {
        this.renderDialog('select', title, text, image, items, lightItem, align, dialogId, null, null)
    }

    // 显示输入对话框
    showInputDialog(title, text, image, placeholder, inputValue, lightItem, align, dialogId) {
        this.renderDialog('input', title, text, image, null, lightItem, align, dialogId, placeholder, inputValue)
    }

    // 显示验证码对话框
    showVerifyDialog(title, text, image, placeholder, lightItem, align, dialogId, verifyType) {
        this.renderDialog('verify', title, text, image, null, lightItem, align, dialogId, placeholder, null, verifyType)
    }

    // 渲染对话框
    renderDialog(type, title, text, image, items, lightItem, align, dialogId, placeholder, inputValue, verifyType) {
        // 检查是否已经存在对话框
        const hasDialog = document.querySelector(`.Qii_${this.__widgetId}`)
        if (hasDialog) this.hideDialog()

        // 对话框卡片
        const dialogCard = document.createElement('div')
        dialogCard.className = `card`
        dialogCard.addEventListener('click', (e) => {
            e.stopPropagation()
        })

        // 图片
        if (image) {
            const dialogImage = document.createElement('img')
            dialogImage.className = 'image'
            dialogImage.src = image
            dialogCard.appendChild(dialogImage)
        }

        // 标题
        if (title) {
            const dialogTitle = document.createElement('div')
            dialogTitle.className = 'title'
            dialogTitle.textContent = title
            dialogCard.appendChild(dialogTitle)
        }

        // 文本
        if (text) {
            const dialogText = document.createElement('div')
            dialogText.className = 'text'
            dialogText.innerHTML = text
            dialogCard.appendChild(dialogText)
        }
        
        // 输入框或验证码区域
        if (type === 'input') {
            items = '取消,' + lightItem
            const dialogInput = document.createElement('input')
            dialogInput.className = 'input'
            dialogInput.placeholder = placeholder
            dialogInput.value = inputValue
            this.inputValue = inputValue
            dialogInput.addEventListener('change', (e) => {
                this.inputValue = e.target.value
            })
            dialogCard.appendChild(dialogInput)
        } else if (type === 'verify') {
            items = '取消,' + lightItem
            
            // 验证码容器
            const verifyContainer = document.createElement('div')
            verifyContainer.className = 'verifyContainer'
            
            // 验证码显示区域
            const verifyDisplay = document.createElement('div')
            verifyDisplay.id = `verify-display-${dialogId}`
            verifyDisplay.style.width = `${this.verifyWidth}px`
            verifyDisplay.style.height = `${this.verifyHeight}px`
            verifyDisplay.style.margin = '0 auto'
            verifyDisplay.style.marginTop = '15px'
            
            // 验证码输入框
            const dialogInput = document.createElement('input')
            dialogInput.className = 'input'
            dialogInput.placeholder = placeholder
            dialogInput.style.marginTop = '15px'
            dialogInput.style.width = 'calc(100% - 40px)'
            dialogInput.style.marginLeft = '20px'
            dialogInput.style.marginRight = '20px'
            this.verifyInput = dialogInput
            
            verifyContainer.appendChild(verifyDisplay)
            verifyContainer.appendChild(dialogInput)
            dialogCard.appendChild(verifyContainer)
            
            // 初始化验证码
            setTimeout(() => {
                this.verifyCode = new GVerify({
                    id: `verify-display-${dialogId}`,
                    width: this.verifyWidth,
                    height: this.verifyHeight,
                    type: verifyType || this.verifyType
                });
            }, 50);
        }

        // 选项列表
        if (items) {
            const dialogItems = document.createElement('div')
            dialogItems.className = 'itemList'
            // 循环生成选项
            items = items.split(',')
            if (items.length > 2) {
                dialogItems.classList.add('vertical')
            }
            for (let index = 0; index < items.length; index++) {
                const item = document.createElement('div')
                item.className = 'item'
                item.textContent = items[index]
                if (items[index] === lightItem) {
                    item.classList.add('lightItem')
                }
                // 点击选项
                item.addEventListener('click', () => {
                    if (type === 'select') {
                        this.emit('onClickItem', items[index], index + 1, dialogId)
                    }
                    if (type === 'input' && items[index] === lightItem) {
                        this.emit('onInputFinish', this.inputValue, dialogId)
                        this.inputValue = ''
                    }
                    if (type === 'verify' && items[index] === lightItem) {
                        if (this.verifyCode && this.verifyInput) {
                            const result = this.verifyCode.validate(this.verifyInput.value)
                            if (result) {
                                this.emit('onVerifySuccess', dialogId)
                            } else {
                                this.emit('onVerifyFailed', dialogId)
                            }
                        }
                    }
                    this.hideDialog()
                })
                dialogItems.appendChild(item)
            }
            dialogCard.appendChild(dialogItems)
        }

        // 对话框样式
        const style = document.createElement('style')
        style.textContent = `
            .Qii_${this.__widgetId} {
                position: fixed; left: 0; top: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                z-index: 9999;
                animation: Qii_DIALOG_BG_SHOW 0.4s cubic-bezier(.3,.4,.5,1) both;
            }
            .Qii_${this.__widgetId}.hideDialog {
                pointer-events: none;
                animation: Qii_DIALOG_BG_HIDE 0.25s cubic-bezier(.3,.4,.5,1) both;
            }

            /* 卡片 */
            .Qii_${this.__widgetId} .card {
                width: 320px;
                margin-bottom: 20px;
                background: ${this.cardColor};
                border-radius: ${this.cardRadius}px;
                overflow: hidden;
                animation: Qii_DIALOG_CARD_SHOW 0.7s cubic-bezier(.35,.5,.15,1) both;
            }
            .Qii_${this.__widgetId}.hideDialog .card {
                animation: Qii_DIALOG_CARD_HIDE 0.25s cubic-bezier(.35,.5,.15,1) both;
            }

            /* 图片 */
            .Qii_${this.__widgetId} .card .image {
                margin: 10px 10px 0px 10px;
                width: calc(100% - 20px);
                max-height: 280px;
                border-radius: ${this.cardRadius - 4}px;
                object-fit: cover;
            }

            /* 标题 */
            .Qii_${this.__widgetId} .card .title {
                padding: 0 20px;
                margin-top: 20px;
                color: ${this.textColor};
                font-size: ${this.titleSize}px;
                font-weight: bold;
                text-align: center;
            }

            /* 文本 */
            .Qii_${this.__widgetId} .card .text {
                padding: 0 20px;
                margin-top: 12px;
                color: ${this.textColor};
                font-size: ${this.textSize}px;
                text-align: ${align || 'center'};
                white-space: pre-line;
            }

            /* 输入框 */
            .Qii_${this.__widgetId} .card .input {
                border: none;
                outline: none;
                padding: 0 14px;
                margin: 16px 20px 0 20px;
                width: calc(100% - 40px);
                height: 42px;
                border-radius: 8px;
                background: rgba(0, 0, 20, 0.06);
                color: ${this.textColor};
                font-size: ${this.textSize}px;
            }
            .Qii_${this.__widgetId} .card .input::placeholder {
                color: ${this.placeColor};
            }
            
            /* 验证码容器 */
            .Qii_${this.__widgetId} .verifyContainer {
                display: flex;
                flex-direction: column;
                margin-top: 10px;
            }
            
            /* 验证码刷新提示 */
            .Qii_${this.__widgetId} .verifyTip {
                text-align: center;
                font-size: 12px;
                color: #999;
                margin-top: 5px;
            }

            /* 选项列表 */
            .Qii_${this.__widgetId} .itemList {
                margin-top: 20px;
                display: flex;
                border-top: 1px solid #00002008;
            }
            .Qii_${this.__widgetId} .itemList.vertical {
                flex-direction: column;
            }
            .Qii_${this.__widgetId} .itemList .item {
                width: 100%;
                height: 50px;
                line-height: 50px;
                color: ${this.textColor};
                font-size: ${this.itemSize}px;
                text-align: center;
                font-weight: bold;
                user-select: none;
                cursor: pointer;
            }
            .Qii_${this.__widgetId} .itemList .item:active {
                background: rgba(0, 0, 20, 0.06);
            }

            .Qii_${this.__widgetId} .itemList .lightItem {
                color: ${this.themeColor};
            }


            /* 背景动画 */
            @keyframes Qii_DIALOG_BG_SHOW {
                0% { background: rgba(0, 0, 0, 0.0) }
                100% { background: rgba(0, 0, 0, 0.4) }
            }
            @keyframes Qii_DIALOG_BG_HIDE {
                0% { background: rgba(0, 0, 0, 0.4) }
                100% { background: rgba(0, 0, 0, 0.0) }
            }

            /* 卡片动画 */
            @keyframes Qii_DIALOG_CARD_SHOW {
                0% {
                    transform: scale(0.5);
                    opacity: 0;
                }
                25% {
                    opacity: 1;
                }
                50% {
                    transform: scale(1.01);
                }
                100% {
                    transform: scale(1);
                }
            }
            @keyframes Qii_DIALOG_CARD_HIDE {
                0% {
                    transform: scale(1);
                    opacity: 1;
                }
                100% {
                    transform: scale(0.5);
                    opacity: 0;
                }
            }
        `;

        // 对话框容器
        const dialogContainer = document.createElement('div')
        dialogContainer.className = `Qii_${this.__widgetId}`
        dialogContainer.appendChild(dialogCard)
        dialogContainer.appendChild(style)

        // 添加对话框到屏幕上
        document.body.appendChild(dialogContainer)
    }


    // 隐藏对话框
    hideDialog() {
        const dialogContainer = document.querySelectorAll(`.Qii_${this.__widgetId}`)
        if (dialogContainer) {
            // 添加类名，显示隐藏动画
            dialogContainer.forEach(element => {
                element.classList.add('hideDialog')
            })
            // 等待动画结束移除对话框
            setTimeout(() => {
                dialogContainer.forEach(element => {
                    element.remove()
                })
                this.verifyCode = null
                this.verifyInput = null
            }, 300)
        }
    }
}

exports.types = types
exports.widget = Widget