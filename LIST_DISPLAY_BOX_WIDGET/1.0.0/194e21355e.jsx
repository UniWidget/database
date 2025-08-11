function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}

const types = {
  isInvisibleWidget: false,
  type: "LIST_DISPLAY_BOX_WIDGET",
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

  }
  haddleClick = (id) => {
    this.emit('onclick', id);
  }
  
  render() {
    return(
      <div id={this.widgetid} style={{
        overflowX: "hidden",
        width: this.__width,
        height: this.__height,
      }}>
        {this.data.map((item) => (
          <React.Fragment key={item.id}>
            <div id={item.id} dangerouslySetInnerHTML={{__html: item.html}}
            onClick={() => this.haddleClick(item.id)}
            ></div>
            <hr style={{
                border: "none",
                borderTop: '1px solid #000',
                padding: '0',
                margin: '5px',
                width: '98%',
                display: "flex",
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
    defaultValue: mathRandomInt(10000000, 99999999),

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

exports.types = types;
exports.widget = Widget;