var document = this.document;
var window = this.window;

function getSelectedText() {
    var selectedText = window.getSelection().toString();
    console.log(selectedText);
    return selectedText;
}

function getRangeAt() {
    var selection = window.getSelection();
    if (selection.rangeCount > 0) {
        var range = selection.getRangeAt(0);
        var startOffset = range.startOffset;
        var endOffset = range.endOffset;
        return {start: startOffset, end: endOffset};
    } else {
        return {start: 0, end: 0};
    }

}

function replaceSelectedText(newContent) {
    var selection = window.getSelection();
    if (selection.rangeCount > 0) {
        var range = selection.getRangeAt(0);
        range.deleteContents();
        var newTextNode = document.createTextNode(newContent);
        range.insertNode(newTextNode);
        range.setStartAfter(newTextNode);
        range.setEndAfter(newTextNode);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

function insertTextAtPosition(originalStr, textToInsert, position) {
    let startPart = originalStr.slice(0, position);
    let endPart = originalStr.slice(position);
    return startPart + textToInsert + endPart;
}

const types = {
  isInvisibleWidget: false,
  type: "RICH_EDITOR",
  icon: "https://cdn.cocotais.cn/project/waddle-2/logo/waddle2-logo.svg",
  title: "富文本编辑器",
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
      defaultValue: 640,
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
    this.html = props.html;
    this.isEdit = props.isEdit;
    this.widgetid = props.widgetid;
    this.border = props.border;
    this.borderradius = props.borderradius;
    this.bgcolor = props.bgcolor;
    this.bgimg = props.bgimg;
    this.bgimgr = props.bgimgr;
    this.bgimgp = props.bgimgp;
    this.bgimgs = props.bgimgs;

  }
  handleSelect = () => {
    if (getSelectedText()) {
      this.emit('select');
    }
  }
  render() {
    return(
        <div
            id={this.widgetid}
            style={{
                width: `${this.__width}px`,
                height: `${this.__height}px`,
                overflowX: `hidden`,
                border: `${this.border}`,
                borderRadius: `${this.borderradius}`,
                backgroundColor: `${this.bgcolor}`,
                backgroundImage: `url('${this.bgimg}')`,
                backgroundRepeat: `${this.bgimgr}`,
                backgroundPosition: `${this.bgimgp}`,
                backgroundSize: `${this.bgimgs}`
            }}
            contentEditable={this.isEdit}
            dangerouslySetInnerHTML={{__html: this.html}}
            onSelect={() => this.handleSelect()}
        />
  );

  }
}

types['properties'].push({
    key: 'widgetid',
    label: '控件ID',
    valueType: 'string',
    defaultValue: "RICH_EDITOR",
})

types['properties'].push({
    key: 'html',
    label: '富文本',
    valueType: 'string',
    editorType: 'TextArea',
    defaultValue: "富文本=HTML",
})

types['properties'].push({
    key: 'isEdit',
    label: '可编辑',
    valueType: 'boolean',
    defaultValue: true,
})

types['properties'].push({
    key: 'border',
    label: '边框',
    valueType: 'string',
    defaultValue: "1px solid #333",
})

types['properties'].push({
    key: 'borderradius',
    label: '圆角',
    valueType: 'string',
    defaultValue: "5px",
})

types['properties'].push({
    key: 'bgcolor',
    label: '背景色',
    valueType: 'color',
    defaultValue: "#00000000",
})

types['properties'].push({
    key: 'bgimg',
    label: '背景图',
    valueType: 'string',
    defaultValue: "",
})

types['properties'].push({
    key: 'bgimgr',
    label: '背景图重复方式',
    valueType: 'string',
    defaultValue: "no-repeat",
    dropdown: [
        {label: '不重复', value: 'no-repeat'},
        {label: '重复', value: 'repeat'},
        {label: 'X轴重复', value: 'repeat-x'},
        {label: 'Y轴重复', value: 'repeat-y'},
    ]
})

types['properties'].push({
    key: 'bgimgp',
    label: '背景图位置',
    valueType: 'string',
    defaultValue: "center center",
})

types['properties'].push({
    key: 'bgimgs',
    label: '背景图大小',
    valueType: 'string',
    defaultValue: "cover",
})

types['events'].push({
    key: 'select',
    label: '文本被选择',
    params: [],
})

types['methods'].push({
    key: 'getSelectedText',
    label: '获取选择的文本',
    params: [],
    valueType: 'string',
    tooltip: '获取用户选中的内容',
})
Widget.prototype.getSelectedText = function () {
    return getSelectedText();
}

types['methods'].push({
    key: 'isSelected',
    label: '是否选择文本',
    params: [],
    valueType: 'boolean',
    tooltip: '检测用户是否已选中内容',
})
Widget.prototype.isSelected = function () {
    if (getSelectedText()) {
        return true;
    } else {
        return false;
    }
}

types['methods'].push({
    key: 'start',
    label: '开始位置',
    params: [],
    valueType: 'number',
    tooltip: '选中内容开始的位置',
})
Widget.prototype.start = function () {
    return getRangeAt().start;
}

types['methods'].push({
    key: 'end',
    label: '结束位置',
    params: [],
    valueType: 'number',
    tooltip: '选中内容结束的位置',
})
Widget.prototype.end = function () {
    return getRangeAt().end;
}

types['methods'].push({
    key: 'num',
    label: '选中数',
    params: [],
    valueType: 'number',
    tooltip: '获取选中内容的长度',
})
Widget.prototype.end = function () {
    return getRangeAt().end - getRangeAt().start;
}

types['methods'].push({
    key: 'replace',
    label: '替换选中',
    params: [
    {
        key: 'text',
        label: '内容',
        valueType: 'string',
        defaultValue: '',
    }],
    tooltip: '无法替换富文本，如需替换请先使用该积木替换含富文本内容，然后替换实际富文本中的&lt;为<、&gt;为>，然后设置富文本为替换后的结果即可',
})
Widget.prototype.replace = function (text,) {
    if (getSelectedText()) {
        replaceSelectedText(text);
    } else {
        this.widgetError('未选中内容');
    }
}

types['methods'].push({
    key: 'Text',
    label: '获取实际富文本',
    params: [],
    valueType: 'string',
    tooltip: '属性中的富文本是获取不到替换选中内容后的富文本的',
})
Widget.prototype.Text = function () {
    return document.getElementById(this.widgetid).innerHTML;
}
exports.types = types;
exports.widget = Widget;