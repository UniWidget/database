function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}

var widgetclass = 'ICON_LIST_' + mathRandomInt(10000000, 99999999);

const types = {
  isInvisibleWidget: false,
  type: "1.0_ICON_LIST_WIDGET",
  icon: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHg9IjYiIHk9IjYiIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgcng9IjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzdjN2M3YyIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHJlY3QgeD0iMTMiIHk9IjEzIiB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzdjN2MiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxyZWN0IHg9IjI3IiB5PSIxMyIgd2lkdGg9IjgiIGhlaWdodD0iOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjN2M3YzdjIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cmVjdCB4PSIxMyIgeT0iMjciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzdjN2M3YyIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHJlY3QgeD0iMjciIHk9IjI3IiB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzdjN2MiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==",
  title: "图标列表展示",
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
    {
      key: 'data',
      label: '数据',
      valueType: ['object', 'string'],
      defaultValue: '[]',
      tooltip: '填写初始数据时，请确保是JSON格式的数据，作品崩溃了不要怪我没提醒'
    },
    {
      key: 'borderradius',
      label: '边框圆角',
      valueType: 'number',
      defaultValue: 5,
    },
    {
      key: 'borderwidth',
      label: '边框线宽度',
      valueType: 'number',
      defaultValue: 0,
      tooltip: '0表示没有',
    },
    {
      key: 'bordercolor',
      label: '边框线颜色',
      valueType: 'color',
      defaultValue: '#333',
    },
    {
      key: 'borderstyle',
      label: '边框线样式',
      valueType: 'string',
      defaultValue: 'solid',
    },
    {
      key: 'fontfamily',
      label: '文字字体名',
      valueType: 'string',
      defaultValue: 'zhanKuWenYiTi',
      tooltip: '填写系统自带的字体名或coco已加载的字体名',
    },
  ],
  methods: [],
  events: [
    {
      key: 'onIconClick',
      label: '图标点击',
      params: [
        {
          key: 'num',
          label: '数据',
          valueType: 'object',
        },
      ],
    },
    {
      key: 'onTitleClick',
      label: '名称点击',
      params: [
        {
          key: 'num',
          label: '数据',
          valueType: 'object',
        },
      ],
    },
    {
      key: 'onItemClick',
      label: '项目点击',
      params: [
        {
          key: 'num',
          label: '数据',
          valueType: 'object',
        },
      ],
    },
  ],
};

class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.__width = props.__width;
    this.__height = props.__height;
    this.data = JSON.parse(props.data);
    this.borderradius = props.borderradius;
    this.borderwidth = props.borderwidth;
    this.bordercolor = props.bordercolor;
    this.borderstyle = props.borderstyle;
    this.fontfamily = props.fontfamily;
    this.actionIcon = props.actionIcon;
    this.actionTitle = props.actionTitle;
    this.activeItem = props.activeItem;
  }

  handleItemClick = (row, col) => {
    this.emit('onItemClick', { row: row + 1, col: col + 1 });
  };

  handleIconClick = (row, col) => {
    this.emit('onIconClick', { row: row + 1, col: col + 1 });
  };

  handleTitleClick = (row, col) => {
    this.emit('onTitleClick', { row: row + 1, col: col + 1 });
  };

  render() {
    var widgetkey = mathRandomInt(10000000, 99999999);
    var Itemclass = 'Item' + widgetkey;
    var Iconclass = 'Icon' + widgetkey;
    var width = (1 / this.data.length) * 100 + '%';
    console.log(width);
    return (
      <div
        class={widgetclass}
        style={{
          overflowX: 'hidden',
          width: '100%',
          height: '100%'
        }}>
        {this.data.map((row, rowIndex) => (
          <div key={rowIndex} style={{
            display: 'flex',
            justifyContent: 'space-around'
          }}>
            {row.map((item, itemIndex) => (
              <div
                key={itemIndex}
                class={Itemclass}
                onClick={this.handleItemClick(rowIndex, itemIndex)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: { width }
                }}>
                <img
                  src={item.logo}
                  alt={item.title}
                  class={Iconclass}
                  style={{
                    textAlign: 'center',
                    margin: '0',
                    marginTop: '10px',
                    borderRadius: this.borderradius,
                    border: this.borderwidth + ' ' + this.borderstyle + ' ' + this.bordercolor,
                    width: '42px'
                  }}
                  onClick={this.handleIconClick(rowIndex, itemIndex)}
                />
                <p
                  style={{
                    textAlign: 'center',
                    margin: '0',
                    fontSize: '10px',
                    fontFamily: this.fontfamily,
                    writingMode: 'horizontal-tb'
                  }}
                  onClick={this.handleTitleClick(rowIndex, itemIndex)}>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

exports.types = types;
exports.widget = Widget;