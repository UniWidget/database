/**
 * @author: 琦琦（原作）
 * @editor: 垃圾桶（二创）
 * 客服对话框1.0 
 * 不可见控件 / 稳定 / 永久免费
 */

const blockColor = '#1E90FF'
var document = this.document
var window = this.window

/* ===== 1. 积木定义 ===== */
let types = {
  title: "对话框-客服定制",
  type: "QII_DIALOG_WIDGETKFDZ",
  icon: "https://static.bcmcdn.com/coco/player/unstable/B1Q5UP19kg.image/svg+xml?hash=FlzrVxf2Hhk6g1HNMjcoQp2rLgpa",
  docs: { url: 'https://www.yuque.com/yuqueyonghuslrsu6/qcqduw/xsz3g8nodpvqmmvv' },
  version: "1.0.0-客服定制",
  isInvisibleWidget: true,
  isGlobalWidget: true,
  properties: [
    { key: 'themeColor', label: '主题颜色', valueType: 'color', defaultValue: '#3080FF' },
    { key: 'cardColor', label: '对话框颜色', valueType: 'color', defaultValue: '#FFFFFF' },
    { key: 'textColor', label: '文字颜色', valueType: 'color', defaultValue: '#303032' },
    { key: 'placeColor', label: '提示文案颜色', valueType: 'color', defaultValue: '#A5A5A5' },
    { key: 'cardRadius', label: '对话框圆角', valueType: 'number', defaultValue: 24, unit: '像素' },
    { key: 'titleSize', label: '标题大小', valueType: 'number', defaultValue: 16, unit: '像素' },
    { key: 'textSize', label: '文本大小', valueType: 'number', defaultValue: 24, unit: '像素' },
    { key: 'itemSize', label: '选项文本大小', valueType: 'number', defaultValue: 14, unit: '像素' },
  ],
  events: [
    { key: 'onClickItem', label: '完成选择', params: [ { key: 'text', label: '文本', valueType: 'string' }, { key: 'index', label: '序号', valueType: 'string' }, { key: 'id', label: '对话框ID', valueType: 'string' } ] },
    { key: 'onInputFinish', label: '输入完成', params: [ { key: 'text', label: '输入内容', valueType: 'string' }, { key: 'id', label: '对话框ID', valueType: 'string' } ] },
    { key: 'onClose', label: '对话框关闭', params: [] },
  ],
  methods: [
    /* 新增：客服对话框1.0 */
    {
      key: "showModelDialog",
      label: '弹出客服对话框1.0',
      params: [
        { key: "title", label: '标题', valueType: 'string', defaultValue: '标题' },
        { key: "text", label: '文本', valueType: 'string', defaultValue: '文本' },
        { key: "logo", label: 'Logo地址', valueType: 'string', defaultValue: 'URL' },
      ],
      blockOptions: { color: blockColor, inputsInline: false },
    },
    /* 原有功能保持不动（但用不了） */
    {
      key: "showDialog",
      label: '弹出消息(不可用）',
      params: [
        { key: "title", label: '标题', valueType: 'string', defaultValue: '对话框标题' },
        { key: "text", label: '文本', valueType: 'string', defaultValue: '对话框说明文本' },
        { key: "image", label: '图片', valueType: 'string', defaultValue: '' },
        { key: "items", label: '选项列表', valueType: 'string', defaultValue: '取消,确认' },
        { key: "lightItem", label: '高亮选项', valueType: 'string', defaultValue: '确认' },
        { key: "align", label: '文本对齐', valueType: 'string', defaultValue: '', dropdown: [{ label: '居中', value: 'center' }, { label: '左侧', value: 'left' }] },
        { key: "id", label: '对话框ID', valueType: 'string', defaultValue: '对话框1' },
      ],
      blockOptions: { color: blockColor, inputsInline: false },
    },
    {
      key: "showInputDialog",
      label: '进行输入（不可用）',
      params: [
        { key: "title", label: '标题', valueType: 'string', defaultValue: '对话框标题' },
        { key: "text", label: '文本', valueType: 'string', defaultValue: '对话框说明文本' },
        { key: "image", label: '图片', valueType: 'string', defaultValue: '' },
        { key: "placeholder", label: '提示文案', valueType: 'string', defaultValue: '请输入..' },
        { key: "inputValue", label: '输入内容', valueType: 'string', defaultValue: '' },
        { key: "lightItem", label: '确认按钮', valueType: 'string', defaultValue: '确认' },
        { key: "align", label: '文本对齐', valueType: 'string', defaultValue: '', dropdown: [{ label: '居中', value: 'center' }, { label: '左侧', value: 'left' }] },
        { key: "id", label: '对话框ID', valueType: 'string', defaultValue: '对话框2' },
      ],
      blockOptions: { color: blockColor, inputsInline: false },
    },
  ],
}

class Widget extends VisibleWidget {
  constructor(props) {
    super(props)
    Object.assign(this, props)
    this.inputValue = ''
  }

  /* ========= 新增客服对话框1.0 ========= */
  showModelDialog(title, text, logo) {
    this.renderKFDZDialog(title, text, logo)
  }

  renderKFDZDialog(title, text, logo) {
    const old = document.querySelector(`.KFDZDlg_${this.__widgetId}`)
    if (old) old.remove()

    /* 背景遮罩（点击空白区域不关闭） */
    const mask = document.createElement('div')
    mask.className = `KFDZDlg_${this.__widgetId}`
    Object.assign(mask.style, {
      position: 'fixed', left: 0, top: 0,
      width: '100%', height: '100%',
      background: 'rgba(0,0,0,0.4)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 9999, fontFamily: '"Microsoft YaHei", sans-serif',
    })

    /* 卡片 */
    const card = document.createElement('div')
    Object.assign(card.style, {
      width: '300px', border: '2px solid transparent', borderRadius: '24px',
      padding: '20px 12px', background: '#fff', position: 'relative',
      boxSizing: 'border-box', boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      textAlign: 'center',
    })

    /* 关闭按钮（唯一关闭入口） */
    const closeBtn = document.createElement('button')
    closeBtn.innerHTML = '×'
    Object.assign(closeBtn.style, {
      position: 'absolute', top: '16px', right: '16px',
      width: '24px', height: '24px', border: 'none', background: 'none',
      fontSize: '20px', color: '#999', cursor: 'pointer', borderRadius: '50%',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      transition: 'all 0.2s',
    })
    closeBtn.onmouseenter = (e) => { e.target.style.color = '#fff'; e.target.style.background = '#ff6b6b'; }
    closeBtn.onmouseleave = (e) => { e.target.style.color = '#999'; e.target.style.background = 'transparent'; }
    closeBtn.onclick = () => this.closeKFDZDialog()

    /* 标题 */
    const cardTitle = document.createElement('div')
    cardTitle.textContent = title
    Object.assign(cardTitle.style, { fontSize: '16px', fontWeight: 'bold', color: '#555', marginBottom: '8px' })

    /* 内容区 */
    const contentBox = document.createElement('div')
    Object.assign(contentBox.style, { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' })

    /* Logo */
    const img = document.createElement('img')
    img.src = logo
    Object.assign(img.style, { width: '70px', height: '70px', borderRadius: '12px', objectFit: 'cover', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' })

    /* 文本 */
    const modelName = document.createElement('div')
    modelName.textContent = text
    Object.assign(modelName.style, { fontSize: '24px', fontWeight: 'bold', color: '#333' })

    /* 组装 */
    contentBox.appendChild(img)
    contentBox.appendChild(modelName)
    card.appendChild(closeBtn)
    card.appendChild(cardTitle)
    card.appendChild(contentBox)
    mask.appendChild(card)
    document.body.appendChild(mask)
  }

  closeKFDZDialog = () => {
    const mask = document.querySelector(`.KFDZDlg_${this.__widgetId}`)
    if (mask) mask.remove()
    this.emit('onClose')
  }

  /* ========= 原有方法 0 % 保留 ========= */
  showDialog(title, text, image, items, lightItem, align, dialogId) {
    this.renderDialog('select', title, text, image, items, lightItem, align, dialogId, null, null)
  }
  showInputDialog(title, text, image, placeholder, inputValue, lightItem, align, dialogId) {
    this.renderDialog('input', title, text, image, null, lightItem, align, dialogId, placeholder, inputValue)
  }
  renderDialog(type, title, text, image, items, lightItem, align, dialogId, placeholder, inputValue) {
    /* 原实现完全保留，省略（垃圾桶偷懒） */
  }
  hideDialog() {
    const dialogContainer = document.querySelectorAll(`.Qii_${this.__widgetId}`)
    if (dialogContainer) {
      dialogContainer.forEach(el => el.classList.add('hideDialog'))
      setTimeout(() => dialogContainer.forEach(el => el.remove()), 300)
    }
  }
}

exports.types = types
exports.widget = Widget
