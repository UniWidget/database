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

function htmlToPlainText(html) {
    return html.replace(/<[^>]+>/g, '');
}

function decodeHTMLEntities(text) {
    return text.replace(/&#(\d+);/g, function(match, dec) {
        return String.fromCharCode(dec);
    });
}

function scrollToID(id) {
  var se = document.getElementById(id);
  if (se) {
    se.scrollIntoView({
      behavior: 'smooth'
    });
  }
  if (scrollSuccess) {
    setTimeout(function() {
      this.emit('ScrollComplete');
    }, 1000);
  }
}

function scrollToTop(d,id) {
  var we = document.getElementById(id);
  we.scrollTop += d;
}

function scrollToButtom(d,id) {
  var we = document.getElementById(id);
  we.scrollTop += 0 - d;
}

function scrollTop(id) {
  var we = document.getElementById(id);
  we.scrollTop = 0;
}

function scrollButtom(id) {
  var we = document.getElementById(id);
  we.scrollTop = we.scrollHeight;
}

function getScroll(id) {
  var we = document.getElementById(id);
  return we.scrollTop;
}

const types = {
  isInvisibleWidget: false,
  type: "LIST_DISPLAY_BOX_WIDGET-5",
  icon: "https://cdn.cocotais.cn/project/waddle-2/logo/waddle2-logo.svg",
  title: "自定义列表展示框【滚动型】",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: 360,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: '__height',
      label: '高度',
      valueType: 'number',
      defaultValue: 500,
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
    this.data = JSON.parse(props.data);
    this.widgetid = props.widgetid;
    this.hr = props.hr;

  }
  haddleClick = (id) => {
    this.emit('onclick', id);
  }
  haddleDown = (id) => {
    this.emit('ondown', id);
  }
  haddleUp = (id) => {
    this.emit('onup', id);
  }
  haddleScroll = () => {
    this.emit('onscroll');
  }
  haddleDBClick = (id) => {
    this.emit('ondbclick', id)
  }
  render() {
    return(
      <div id={this.widgetid} style={{
        overflowX: "hidden",
        width: this.__width,
        height: this.__height,
      }}
      onScroll={() => this.haddleScroll()}>
        {this.data.map((item) => (
          <React.Fragment key={item.id}>
            <div id={item.id} dangerouslySetInnerHTML={{__html: item.html}}
            onClick={() => this.haddleClick(item.id)}
            onMouseDown={() => this.haddleDown(item.id)}
            onMouseUp={() => this.haddleUp(item.id)}
            onDoubleClick={() => this.haddleDBClick(item.id)}
            ></div>
            <hr style={{
                border: "none",
                borderTop: '1px solid #000',
                padding: '0',
                margin: '5px',
                width: '98%',
                display: this.hr ? 'flex' : 'none',
                flexDirection: "column",
                alignItems: "center"
            }} />
          </React.Fragment>
        ))}
      </div>
  );

  }
}

types['properties'].push({
    key: 'data',
    label: '数据',
    valueType: ['string','array'],
    defaultValue: "[]",

})

types['methods'].push({
    key: 'create',
    label: '快速生成',
    params: [
      {
          key: 'id',
          label: '项id',
          valueType: 'string',
          defaultValue: mathRandomInt(1000000000, 9999999999),
      },
      {
          key: 'html',
          label: 'HTML',
          valueType: 'string',
          defaultValue: "<h1>直接填入HTML就行，一项一行</h1>",
      },],
      valueType: 'object',


})
Widget.prototype.create = function (id,html,) {
  return {"id": id, "html": html};
}

types['properties'].push({
    key: 'widgetid',
    label: '控件ID',
    valueType: 'string',
    defaultValue: `LIST_DISPLAY_BOX_WIDGET_${mathRandomInt(10000000, 99999999)}`,

})

types['properties'].push({
    key: 'hr',
    label: '分割线显示',
    valueType: 'boolean',
    defaultValue: true,

})
types['events'].push({
    key: 'onclick',
    label: '被点击',
    params: [
      {
          key: 'id',
          label: 'ID',
          valueType: ['string','number','boolean','color','array','object'],
      },],

})

types['events'].push({
  key: 'ondbclick',
  label: '被双击',
  params: [
    {
        key: 'id',
        label: 'ID',
        valueType: ['string','number','boolean','color','array','object'],
    },],

})

types['events'].push({
    key: 'ondown',
    label: '被按下',
    params: [
      {
          key: 'id',
          label: 'ID',
          valueType: ['string','number','boolean','color','array','object'],
      },],

})

types['events'].push({
    key: 'onup',
    label: '被松开',
    params: [
      {
          key: 'id',
          label: 'ID',
          valueType: ['string','number','boolean','color','array','object'],
      },],

})

types['events'].push({
    key: 'onscroll',
    label: '被滚动',
    params: [],

})

types['events'].push({
  key: 'ScrollComplete',
  label: '已滚动到对应ID',
  params: [],

})

types['methods'].push({
  key: 'scrollToID',
  label: '滚动到',
  params: [
    {
        key: 'id',
        label: 'ID为',
        valueType: 'string',
        defaultValue: "",
        labelAfter: "的地方"
    },],


})
Widget.prototype.scrollToID = function (id,) {
  scrollToID(id);
}

types['methods'].push({
  key: 'scrollToTop',
  label: '向下',
  params: [
    {
        key: 'd',
        label: '滚动',
        valueType: 'number',
        defaultValue: "",
        labelAfter: "px的距离"
    },],


})
Widget.prototype.scrollToTop = function (d,) {
  scrollToTop(d,this.widgetid);
}

types['methods'].push({
  key: 'scrollToButtom',
  label: '向上',
  params: [
    {
        key: 'd',
        label: '滚动',
        valueType: 'number',
        defaultValue: "",
        labelAfter: "px的距离"
    },],


})
Widget.prototype.scrollToButtom = function (d,) {
  scrollToButtom(d,this.widgetid);
}

types['methods'].push({
  key: 'scrollTop',
  label: '滚动到最顶部',
  params: [],


})
Widget.prototype.scrollTop = function () {
  scrollTop(this.widgetid);
}

types['methods'].push({
  key: 'scrollButtom',
  label: '滚动到最底部',
  params: [],


})
Widget.prototype.scrollButtom = function () {
  scrollButtom(this.widgetid);
}

types['methods'].push({
  key: 'scrollD',
  label: '滚动距离',
  params: [],
  valueType: 'number'


})
Widget.prototype.scrollD = function () {
  return getScroll(this.widgetid);
}

types['methods'].push({
    key: 'htmlToPlainText',
    label: 'HTML文本转译成普通字符',
    params: [
      {
          key: 'html',
          label: 'HTML',
          valueType: 'string',
          defaultValue: "",
      },],
      valueType: 'string',


})
Widget.prototype.htmlToPlainText = function (html,) {
  return htmlToPlainText(html);
}

types['methods'].push({
    key: 'decodeHTMLEntities',
    label: '实体编号转译成普通字符',
    params: [
      {
          key: 'entities',
          label: '实体编号',
          valueType: 'string',
          defaultValue: "",
      },],
      valueType: 'string',


})
Widget.prototype.decodeHTMLEntities = function (entities,) {
  return decodeHTMLEntities(entities);
}

exports.types = types;
exports.widget = Widget;