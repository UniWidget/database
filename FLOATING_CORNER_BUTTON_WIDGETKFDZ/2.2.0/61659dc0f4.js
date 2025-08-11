/**
 * @author: 垃圾桶
 * CoCo 可见控件 – 绝对浮动按钮
 * 横向：距视口右侧 17px
 * 纵向：距视口底部 17px
 * 完全脱离父容器限制
 */

const types = {
  type: 'FLOATING_CORNER_BUTTON_WIDGETKFDZ',
  title: '按钮-客服定制',
  icon: 'https://static.bcmcdn.com/coco/player/unstable/BJQC406YJe.image/png?hash=Fj4YC5L1p7YLS58J_A2-Y5CCtBq6',
  version: '2.2.0',
  isInvisibleWidget: false,
  isGlobalWidget: false,
  properties: [
    { key: '__width',  label: '宽度',  valueType: 'number', defaultValue: 90 },
    { key: '__height', label: '高度', valueType: 'number', defaultValue: 35 },
    { key: 'btnText',  label: '按钮文案', valueType: 'string', defaultValue: '按钮' },
    { key: 'textSize', label: '文字大小', valueType: 'number', defaultValue: 14, unit: '像素' },
    { key: 'btnRadius', label: '圆角大小', valueType: 'number', defaultValue: 8, unit: '像素' },
    { key: 'btnColor', label: '按钮颜色', valueType: 'color', defaultValue: '#3280FF' },
    { key: 'textColor', label: '文字颜色', valueType: 'color', defaultValue: '#FFFFFF' },
    { key: 'textBlod', label: '文字加粗', valueType: 'boolean', defaultValue: false },
    { key: 'btnAnim1', label: '点击缩小', valueType: 'boolean', defaultValue: false },
    { key: 'btnAnim2', label: '点击变暗', valueType: 'boolean', defaultValue: true },
    { key: 'btnLoading', label: '加载状态', valueType: 'boolean', defaultValue: false },
    { key: 'btnDisable', label: '禁用状态', valueType: 'boolean', defaultValue: false },
    { key: 'btnDisableBg', label: '禁用状态按钮颜色', valueType: 'color', defaultValue: '#8CB6FF' },
    { key: 'btnDisableColor', label: '禁用状态文字颜色', valueType: 'color', defaultValue: '#FFFFFF' },
    { key: 'borderWidth', label: '边框粗细', valueType: 'number', defaultValue: 0, unit: '像素' },
    { key: 'borderColor', label: '边框颜色', valueType: 'color', defaultValue: '#72BFFF' },
    { key: 'iconSize', label: '图标大小', valueType: 'number', defaultValue: 18, unit: '像素' },
    { key: 'iconCode', label: '图标代码（SVG代码）', valueType: 'string', defaultValue: '', editorType: 'TextArea' },
    { key: 'iconBox', label: '图标区域（viewBox）', valueType: 'string', defaultValue: '0 0 24 24' },
  ],
  events: [
    {
      key: 'on',
      label: '被',
      subTypes: [
        {
          key: 'event',
          dropdown: [
            { label: '点击', value: 'Click' },
            { label: '按下', value: 'Down' },
            { label: '松开', value: 'Up' }
          ]
        }
      ],
      params: []
    }
  ],
  methods: [
    { key: 'getWidgetId', label: '的 ID', valueType: 'string', params: [] }
  ]
};

class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    Object.assign(this, props);
  }

  onEvent(name) {
    if (this.btnDisable || this.btnLoading) return;
    this.emit('on' + name);
  }

  iconElement(iconCode, size, color, viewBox = '0 0 24 24') {
    return (
      <svg className="qii-icon" width={size} height={size} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
        <path d={iconCode} fill={color} />
      </svg>
    );
  }

  loadingIconElement(size, color) {
    return (
      <svg className="qii-loading-icon" width={size + 2} height={size + 2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill={color} d="m1.9 12c0 3.6 1.9 6.2 3 7.2 0.1 0.1 0.8 0.5 1.5 0 0.6-0.7 0.2-1.4 0-1.7-1.3-1.2-2.3-3.1-2.3-5.5 0-2.4 1-4.3 2.2-5.5 0.2-0.1 0.8-0.9 0.1-1.7-0.7-0.5-1.3-0.2-1.5 0-1 1-3 3.6-3 7.2z" />
        <path fill={color} opacity="0.2" d="m12 1.9c5.6 0 10.1 4.5 10.1 10.1 0 5.6-4.5 10.1-10.1 10.1-5.6 0-10.1-4.5-10.1-10.1 0-5.6 4.5-10.1 10.1-10.1zm-7.9 10.1c0 4.3 3.6 7.9 7.9 7.9 4.3 0 7.9-3.6 7.9-7.9 0-4.3-3.6-7.9-7.9-7.9-4.3 0-7.9 3.6-7.9 7.9z" />
      </svg>
    );
  }

  render() {
    return (
      <div className={`CornerBtn_${this.__widgetId}`}>
        <button
          disabled={this.btnDisable}
          onClick={() => this.onEvent('Click')}
          onMouseDown={() => this.onEvent('Down')}
          onMouseUp={() => this.onEvent('Up')}
          onTouchStart={() => this.onEvent('Down')}
          onTouchEnd={() => this.onEvent('Up')}
        >
          {this.btnLoading && this.loadingIconElement(this.iconSize, this.textColor)}
          {this.iconCode !== '' && !this.btnLoading && this.iconElement(this.iconCode, this.iconSize, this.btnDisable ? this.btnDisableColor : this.textColor, this.iconBox)}
          {this.btnText !== '' && <span className={(this.iconCode || this.btnLoading) ? 'hasIcon' : ''}>{this.btnText}</span>}
        </button>

        <style>
          {`
            .CornerBtn_${this.__widgetId} {
              position: fixed;
              right: 17px;
              bottom: 17px;
              width: ${this.__width}px;
              height: ${this.__height}px;
              z-index: 99999;
            }

            .CornerBtn_${this.__widgetId} button {
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all 0.15s;
              background: ${this.btnColor};
              border-radius: ${this.btnRadius}px;
              border: ${this.borderWidth}px solid ${this.borderColor};
              color: ${this.textColor};
              font-size: ${this.textSize}px;
              font-weight: ${this.textBlod ? 'bold' : 'normal'};
            }

            .CornerBtn_${this.__widgetId} button[disabled] {
              background: ${this.btnDisableBg};
              color: ${this.btnDisableColor};
            }

            .CornerBtn_${this.__widgetId} button:not([disabled]):active {
              transform: scale(${this.btnAnim1 ? 0.94 : 1});
              filter: brightness(${this.btnAnim2 ? 0.9 : 1});
            }

            .CornerBtn_${this.__widgetId} button span {
              display: inline-block;
              margin-top: 1.5px;
            }

            .CornerBtn_${this.__widgetId} button span.hasIcon {
              margin-left: 5px;
            }

            .CornerBtn_${this.__widgetId} .qii-icon {
              margin-top: 1px;
            }

            .CornerBtn_${this.__widgetId} .qii-loading-icon {
              margin-top: 1px;
              animation: qii-loading-icon 1s infinite linear;
            }

            @keyframes qii-loading-icon {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    );
  }

  getWidgetId() {
    return this.__widgetId;
  }
}

exports.types = types;
exports.widget = Widget;
