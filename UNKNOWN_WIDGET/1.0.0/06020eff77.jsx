var document = this.document;

function mathRandomInt(a, b) {
    if (a > b) {
      // Swap a and b to ensure a is smaller.
      var c = a;
      a = b;
      b = c;
    }
    return Math.floor(Math.random() * (b - a + 1) + a);
}

var Value = 0;
var id = mathRandomInt(10000000, 99999999)
var widgetId = 'STEPPER_' + id;
var addId = 'Add_' + widgetId;
var numId = 'Num_' + widgetId;
var lessId = 'Less_' + widgetId;

const types = {
  isInvisibleWidget: false,
  type: widgetId + '_WIDGET',
  icon: "https://static.codemao.cn/coco/player/unstable/SyjLF-8n6.image/svg+xml",
  title: "步进器" + id + ' \n同一个屏幕只能用一个该步进器，再加个步进器请重新导入，另一个屏幕无需查询导入',
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: 200,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: '__height',
      label: '高度',
      valueType: 'number',
      defaultValue: 30,
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
    this.disabled = props.disabled;
    this.unit = props.unit;
    this.fontsize = props.fontsize;
    this.step = props.step;
    this.min = props.min;
    this.max = props.max;
    this.iw = props.iw;
    this.bw = props.bw;
    this.css = props.css;
    this.uw = props.uw;

  }
  handleAdd = (event) => {
    Value = Number(document.getElementById(numId).value);
    Value = Value + Number(this.step);
    document.getElementById(numId).value = String(Value);
    if (document.getElementById(numId).value > this.max) {
        document.getElementById(numId).value = String(this.max);
        Value = Number(document.getElementById(numId).value);
        this.widgetWarn('已超出取值范围')
    } else if (document.getElementById(numId).value < this.min) {
        document.getElementById(numId).value = String(this.min);
        Value = Number(document.getElementById(numId).value);
        this.widgetWarn('已超出取值范围')
    }
    console.log(document.getElementById(numId).value);
    this.emit('onAddClick')
  }

  handleLess = (event) => {
    Value = Number(document.getElementById(numId).value);
    Value = Value - Number(this.step);
    document.getElementById(numId).value = String(Value);
    if (document.getElementById(numId).value > this.max) {
        document.getElementById(numId).value = String(this.max);
        Value = Number(document.getElementById(numId).value);
        this.widgetWarn('已超出取值范围')
    } else if (document.getElementById(numId).value < this.min) {
        document.getElementById(numId).value = String(this.min);
        Value = Number(document.getElementById(numId).value);
        this.widgetWarn('已超出取值范围')
    }
    console.log(document.getElementById(numId).value)

    this.emit('onLessClick')
  }

  handleInput = (event) => {
    Value = Number(document.getElementById(numId).value);
    document.getElementById(numId).value = String(Value);
    this.emit('onInput')
  }

  handleChange = (event) => {
    Value = Number(document.getElementById(numId).value);
    document.getElementById(numId).value = String(Value);
    console.log(document.getElementById(numId).value)
  }

  handleFocus = (event) => {
    if (document.getElementById(numId).value > this.max) {
        document.getElementById(numId).value = String(this.max);
        Value = Number(document.getElementById(numId).value);
        this.widgetWarn('已超出取值范围')
    } else if (document.getElementById(numId).value < this.min) {
        document.getElementById(numId).value = String(this.min);
        Value = Number(document.getElementById(numId).value);
        this.widgetWarn('已超出取值范围')
    }
    this.emit('onFocus')
  }

  handleBlur = (event) => {
    if (document.getElementById(numId).value > this.max) {
        document.getElementById(numId).value = String(this.max);
        Value = Number(document.getElementById(numId).value);
        this.widgetWarn('已超出取值范围')
    } else if (document.getElementById(numId).value < this.min) {
        document.getElementById(numId).value = String(this.min);
        Value = Number(document.getElementById(numId).value);
        this.widgetWarn('已超出取值范围')
    }
    document.getElementById(numId).value = String(Value);
    this.emit('onBlur')
}

  render() {
    return(
      <div id={widgetId} style={{display: 'flex', alignItems: 'center', width: (2*40 + this.iw) + 'px', height: '100%'}}>
        <style>{this.css}</style>
        <button id={lessId} class='button' style={{borderRadius: '3px 0px 0px 3px', margin: '0px', border: '1px solid black', height: '100%', width: this.bw + 'px', pointerEvents: this.disabled ? 'none' : 'auto'}} onClick={() => this.handleLess(this)}>-</button>
        <input id={numId} type='number' step={this.step} class='input' style={{margin: '0px', borderRadius: '0px', borderTop: '1px solid black', borderBottom: '1px solid black', borderLeft: 'none', borderRight: 'none', height: '100%', width: this.iw + 'px', pointerEvents: this.disabled ? 'none' : ''}} min={this.min} max={this.max} onInput={() => this.handleInput(this)} onChange={() => this.handleChange(this)} onFocus={() => this.handleFocus(this)} onBlur={() => this.handleBlur(this)}/>
        <div class="container">
            <p class='unit' style={{display: 'flex', borderTop: '1px solid black', borderBottom: '1px solid black', margin: '0px 0px 0px 0px', padding: '0px 0px 0px 0px', alignItems: 'center', textAlign: 'center', height: this.__height + 'px', fontSize: this.fontsize + 'px', width: this.uw + 'px'}}>{this.unit}</p>
        </div>
        <button id={addId} class='button' style={{borderRadius: '0px 3px 3px 0px', margin: '0px', border: '1px solid black', height: '100%', width: this.bw + 'px', pointerEvents: this.disabled ? 'none' : ''}} onClick={() => this.handleAdd(this)}>+</button>
      </div>
  );

  }
}

types['properties'].push({
    key: 'disabled',
    label: '禁用',
    valueType: 'boolean',
    defaultValue: false,

})

types['properties'].push({
    key: 'unit',
    label: '单位',
    valueType: 'string',
    defaultValue: '%',

})

types['properties'].push({
    key: 'fontsize',
    label: '单位字体大小',
    valueType: 'number',
    defaultValue: 12,

})

types['properties'].push({
    key: 'uw',
    label: '单位宽度',
    valueType: 'number',
    defaultValue: 10,

})

types['properties'].push({
    key: 'step',
    label: '步进数',
    valueType: 'number',
    defaultValue: 1,

})

types['properties'].push({
    key: 'min',
    label: '最小值',
    valueType: 'number',
    defaultValue: 0,

})

types['properties'].push({
    key: 'max',
    label: '最大值',
    valueType: 'number',
    defaultValue: 100,

})

types['properties'].push({
    key: 'iw',
    label: '输入框宽度',
    valueType: 'number',
    defaultValue: 120,

})

types['properties'].push({
    key: 'bw',
    label: '按钮宽度',
    valueType: 'number',
    defaultValue: 40,

})

types['properties'].push({
    key: 'css',
    label: '自定义CSS',
    valueType: 'string',
    editorType: 'TextArea',
    defaultValue: '#' + widgetId + '{}\n#' + lessId + '{}\n#' + numId + '{}\n#' + addId + '{}',

})

types['methods'].push({
    key: 'set',
    label: '设置',
    params: [
        {
            key: 'value',
            label: '值为',
            valueType: 'number',
            defaultValue: 0,
        },
    ],


})
Widget.prototype.set = function (value,) {
    Value = Number(document.getElementById(numId).value);
    Value = value;
    document.getElementById(numId).value = String(Value);
    if (document.getElementById(numId).value > this.max) {
        document.getElementById(numId).value = String(this.max);
        Value = Number(document.getElementById(numId).value);
        this.widgetWarn('已超出取值范围')
    } else if (document.getElementById(numId).value < this.min) {
        document.getElementById(numId).value = String(this.min);
        Value = Number(document.getElementById(numId).value);
        this.widgetWarn('已超出取值范围')
    }
}

types['methods'].push({
    key: 'get',
    label: '获取当前值',
    params: [],
    valueType: 'number'

})
Widget.prototype.get = function () {
    Value = Number(document.getElementById(numId).value);
    console.log(document.getElementById(numId).value)
    return Value;
}

types['methods'].push({
    key: 'Infinity',
    label: '返回Infinity',
    params: [],
    valueType: 'number'

})
Widget.prototype.Infinity = function () {
    return 1.797693134862315e+308;//JS能传入的最大值是1.797693134862315e+308
}

types['methods'].push({
    key: 'minus_Infinity',
    label: '返回-Infinity',
    params: [],
    valueType: 'number'

})
Widget.prototype.minus_Infinity = function () {
    return -1.797693134862315e+308;//JS能传入的最大值是1.797693134862315e+308
}

types['methods'].push({
    key: 'width',
    label: '控件总宽度',
    params: [],
    valueType: 'number'

})
Widget.prototype.width = function () {
    return 2*this.bw + this.iw
}

types['methods'].push({
    key: 'add',
    label: '增加',
    params: [
        {
            key: 'num',
            label: '',
            valueType: 'number',
            defaultValue: 1,
        },
    ],

})
Widget.prototype.add = function (num,) {
    Value = Number(document.getElementById(numId).value);
    Value = Value + num;
    document.getElementById(numId).value = String(Value);
    if (document.getElementById(numId).value > this.max) {
        document.getElementById(numId).value = String(this.max);
        Value = Number(document.getElementById(numId).value);
        this.widgetWarn('已超出取值范围')
    } else if (document.getElementById(numId).value < this.min) {
        document.getElementById(numId).value = String(this.min);
        Value = Number(document.getElementById(numId).value);
        this.widgetWarn('已超出取值范围')
    }
}

types['methods'].push({
    key: 'less',
    label: '减少',
    params: [
        {
            key: 'num',
            label: '',
            valueType: 'number',
            defaultValue: 1,
        },
    ],

})
Widget.prototype.less = function (num,) {
    Value = Number(document.getElementById(numId).value);
    Value = Value - num;
    document.getElementById(numId).value = String(Value);
    if (document.getElementById(numId).value > this.max) {
        document.getElementById(numId).value = String(this.max);
        Value = Number(document.getElementById(numId).value);
        this.widgetWarn('已超出取值范围')
    } else if (document.getElementById(numId).value < this.min) {
        document.getElementById(numId).value = String(this.min);
        Value = Number(document.getElementById(numId).value);
        this.widgetWarn('已超出取值范围')
    }
}

types['events'].push({
    key: 'onInput',
    label: '内容改变',
    params: [],

})

types['events'].push({
    key: 'onFocus',
    label: '获取焦点',
    params: [],

})

types['events'].push({
    key: 'onBlur',
    label: '失去焦点',
    params: [],

})

types['events'].push({
    key: 'onAddClick',
    label: '增加被点击',
    params: [],

})

types['events'].push({
    key: 'onLessClick',
    label: '减少被点击',
    params: [],

})
exports.types = types;
exports.widget = Widget;