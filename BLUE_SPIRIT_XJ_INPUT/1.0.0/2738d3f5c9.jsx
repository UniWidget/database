var document = this.document
const types = {
  type: "BLUE_SPIRIT_XJ_INPUT",
  icon: "icon-widget-input",
  title: "输入框-蓝灵",
  isInvisibleWidget: false,
  isGlobalWidget: false,
  hasAnyWidget: true,
  properties: [
    {
      key: 'content',
      label: '提示文案',
      valueType: 'string',
      defaultValue: '输入框'
    },
    {
      key: 'value',
      label: '输入文案',
      valueType: 'string',
      defaultValue: ''
    },
    {
      key: 'backgroundColor',
      label: '非焦点提示文案与输入框色',
      valueType: 'color',
      defaultValue: '#9b9b9b'
    },
    {
      key: 'backgroundColorLeft',
      label: '焦点输入框色·左',
      valueType: 'color',
      defaultValue: '#116399'
    },
    {
      key: 'backgroundColorRight',
      label: '焦点输入框色·右',
      valueType: 'color',
      defaultValue: '#38caef'
    },
    {
      key: 'focusTextBackgroundColor',
      label: '焦点提示文案色',
      valueType: 'color',
      defaultValue: '#38caef'
    },
    {
      key: 'textBackgroundColor',
      label: '输入文案色',
      valueType: 'color',
      defaultValue: '#000'
    },
  ],
  methods: [
    {
      key: 'initiativeOnFocus',
      label: '获取焦点',
      params: []
    },
    {
      key: 'initiativeOnBlur',
      label: '失去焦点',
      params: []
    },
  ],
  events: [
    {
      key: 'onChange',
      label: '更改',
      params: []
    },
    {
      key: 'onFocus',
      label: '获取焦点',
      params: []
    },
    {
      key: 'onBlur',
      label: '失去焦点',
      params: []
    },
  ]
}
class XJWidget extends VisibleWidget {
  constructor(p) {
    super(p)
    Object.assign(this,p)
  }
  initiativeOnFocus = () => document.querySelector(`#${this.__widgetId} > div.form__group.field > input`).focus()
  initiativeOnBlur = () => document.querySelector(`#${this.__widgetId} > div.form__group.field > input`).blur()
  onChange = e => {
    this.setProps({ 'value': e.target.value })
    this.emit("onChange")
  }
  onFocus = e => this.emit("onFocus")
  onBlur = e => this.emit("onBlur")
  render() {
    return(
      <>
        <div
            className="form__group field"
        >
          <input
              type="input"
              className="form__field"
              placeholder="Name"
              required=""
              onChange={this.onChange.bind(this)}
              onFocus={this.onFocus.bind(this)}
              onBlur={this.onBlur.bind(this)}
              value={this.value}
          />
          <label
              htmlFor="name"
              className="form__label"
          >
            {this.content}
          </label>
        </div>
        <div dangerouslySetInnerHTML={{__html: `<style>
          .form__group {
          position: relative;
          padding: 20px 0 0;
          width: 100%;
          }
          
          .form__field {
          font-family: inherit;
          width: 100%;
          border: none;
          border-bottom:2px solid ${this.backgroundColor};
          outline:0;
          font-size:17px;
          color:${this.textBackgroundColor};
          padding:7px 0;
          background:transparent;
          transition:border-color 0.2s
          }
          
          .form__field::placeholder {
          color: transparent
          }
          
          .form__field:placeholder-shown~.form__label {
          font-size: 17px;
          cursor: text;
          top: 20px
          }
          
          .form__label {
          position: absolute;
          top: 0;
          display: block;
          transition: 0.2s;
          font-size: 17px;
          color:${this.backgroundColor};
          pointer-events:none
          }
          
          .form__field:focus {
          padding-bottom: 6px;
          font-weight: 700;
          border-width: 3px;
          border-image: linear-gradient(to right, ${this.backgroundColorLeft}, ${this.backgroundColorRight});
          border-image-slice: 1
          }
          
          .form__field:focus~.form__label {
          position: absolute;
          top: 0;
          display: block;
          transition: 0.2s;
          font-size: 17px;
          color: ${this.focusTextBackgroundColor};
          font-weight: 700
          }
          
          .form__field:required,
          .form__field:invalid {
          box-shadow: none
          }
        </style>`}}/>
      </>
    )
  }
}
for (let i of types.methods) {
  i.blockOptions = {...i.blockOptions, callMethodLabel: false}
}
exports.types = types
exports.widget = XJWidget