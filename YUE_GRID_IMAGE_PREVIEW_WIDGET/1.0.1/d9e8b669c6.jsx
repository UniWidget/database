/**
 * @author: 何我寻月
 * 来自 Yue 控件库
 */

const methodBlockColor = ' #2FD16C'
const createBlockColor = ' #62B7FF'
const returnBlockColor = ' #F4AE3B'

var document = this.document
var window = this.window

const types = {
    title: "宫格图片预览",
    type: "YUE_GRID_IMAGE_PREVIEW_WIDGET",
    icon: "https://static.codemao.cn/pickduck/B1GwPefJge.svg?hash=Frz8NdEDwEa_AaqoJ6pkwamVVsKs",
    docs: { url: 'https://www.yuque.com/yuqueyonghuhelltp/yuekj/qaaqom3uy7dzdc6s' },
    version: "1.0.1",
    isInvisibleWidget: false,
    isGlobalWidget: false,
    hasAnyWidget: true,
    properties: [
        { key: '__width', label: '宽度', valueType: 'number', defaultValue: 300 },
        { key: '__height', label: '高度', valueType: 'number', defaultValue: 300 },
        { key: 'radius', label: '图片圆角', valueType: 'number', defaultValue: 20, unit: '像素' },
        { key: 'border', label: '图片描边（复合属性）', valueType: 'string', defaultValue: '10px solid #FFFFFF' },
        { key: 'data', label: '数据', valueType: 'string', editorType: 'TextArea', defaultValue: '{1: "https://static.bcmcdn.com/coco/player/unstable/Syn-SYyRke.image/png?hash=FtEe8EuVX9_yyRGSRFpLeOUbvkfq", 2: "https://static.bcmcdn.com/coco/player/unstable/Syn-SYyRke.image/png?hash=FtEe8EuVX9_yyRGSRFpLeOUbvkfq",3: "https://static.bcmcdn.com/coco/player/unstable/Syn-SYyRke.image/png?hash=FtEe8EuVX9_yyRGSRFpLeOUbvkfq", 4: "https://static.bcmcdn.com/coco/player/unstable/Syn-SYyRke.image/png?hash=FtEe8EuVX9_yyRGSRFpLeOUbvkfq",5:"https://static.codemao.cn/pickduck/Hkc8Sxu0Jl.png?hash=FjRiper27c9c9amT_JnctpSmDidF",6:"https://static.codemao.cn/pickduck/Hkc8Sxu0Jl.png?hash=FjRiper27c9c9amT_JnctpSmDidF",7:"https://static.codemao.cn/pickduck/Hkc8Sxu0Jl.png?hash=FjRiper27c9c9amT_JnctpSmDidF"}' },
        { key: 'imgWidth', label: '图片宽度', valueType: 'number', defaultValue: 100, unit: '像素' },
        { key: 'imgHeight', label: '图片高度', valueType: 'number', defaultValue: 100, unit: '像素' },
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
                        { label: '松开', value: 'Up' },
                        { label: '右键点击', value: 'Contextmenu' },
                    ]
                }
            ],
            params: [],
        },
        {
            key: 'onClickId',
            label: '图片被点击',
            params: [
                { key: 'id', label: 'ID', valueType: 'string', }
            ],
        },
    ],
    methods: [
        {
            key: "getWidgetId",
            label: '的 ID',
            valueType: 'string',
            params: [],
            blockOptions: { color: returnBlockColor, callMethodLabel: false },
        },
        {
            key: "getWidgetIdMore",
            label: '的',
            valueType: 'string',
            params: [
                { key: "num", label: '第', valueType: 'number', defaultValue: 1, labelAfter:'项的 ID' }
            ],
            blockOptions: { color: returnBlockColor, callMethodLabel: false },
        },
    ],
}


class Widget extends VisibleWidget {
    constructor(props) {
        super(props)
        Object.assign(this, props)
    }

    // 点击事件
    onEvent(name) {
        this.emit('on' + name)
    }

    // 点击内元素事件
    onClickP(id) {
        this.emit('onClickId', id)
    }

    generateImageGrid(input) {
      // 获取配置参数
      const radius = typeof this?.radius === 'number' ? this.radius : 4;
      const widgetId = this?.__widgetId || 'default';
      const border = this?.border || 'none';
      const imgWidth = typeof this?.imgWidth === 'number' ? this.imgWidth : 100; // 默认宽度
      const imgHeight = typeof this?.imgHeight === 'number' ? this.imgHeight : 100; // 默认高度
      const gap = typeof this?.gap === 'number' ? this.gap : 4; // 图片间距
      
      // 安全处理点击回调
      const handleClick = (imgId) => {
        try {
          if (typeof this?.onClickP === 'function') {
            this.onClickP(imgId);
          }
        } catch (e) {
          console.error('点击处理出错:', e);
        }
      };
    
      // 初始化图片对象
      const images = {};
    
      // 安全解析输入
      try {
        if (typeof input === 'string') {
          try {
            input = JSON.parse(input);
          } catch (e) {
            try {
              let sanitized = input.replace(/\s+/g, '');
              sanitized = sanitized.replace(/([{,]\s*)([a-zA-Z0-9_]+)(\s*:)/g, '$1"$2"$3');
              sanitized = sanitized.replace(/'/g, '"');
              sanitized = sanitized.replace(/,\s*}/g, '}');
              sanitized = sanitized.replace(/:\s*([a-zA-Z0-9_\/\.]+)([,\}])/g, ':"$1"$2');
              input = JSON.parse(sanitized);
            } catch (e2) {
              console.log('输入解析失败:', input);
              input = {};
            }
          }
        }
    
        if (typeof input === 'object' && input !== null) {
          for (let i = 1; i <= 9; i++) {
            const url = input[i] || input[String(i)] || input[`${i}`];
            if (typeof url === 'string' && url.trim()) {
              images[i] = url.trim();
            }
          }
        }
      } catch (e) {
        console.log('图片网格输入解析错误:', e);
      }
    
      // 获取有效图片数量
      const count = Object.keys(images).length;
    
      // 空状态处理
      if (count === 0) {
        return <div style={{ width: '100%', height: '100%' }} />;
      }
    
      // 微信朋友圈布局逻辑
      const getLayoutStyle = () => {
        if (count === 1) {
          return {
            containerStyle: { 
              width: `${imgWidth}px`,
              height: `${imgHeight}px`
            },
            itemStyle: { 
              width: '100%', 
              height: '100%' 
            }
          };
        }
        
        if (count === 4) {
          return {
            containerStyle: { 
              width: `${imgWidth * 2 + gap}px`,
              height: `${imgHeight * 2 + gap}px`,
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gridTemplateRows: 'repeat(2, 1fr)',
              gap: `${gap}px`
            },
            itemStyle: { 
              width: '100%', 
              height: '100%' 
            }
          };
        }
        
        // 其他数量使用弹性布局，自动换行
        const maxCols = Math.min(count, 3);
        return {
          containerStyle: { 
            width: `${imgWidth * maxCols + gap * (maxCols - 1)}px`,
            display: 'flex',
            flexWrap: 'wrap',
            gap: `${gap}px`
          },
          itemStyle: { 
            width: `${imgWidth}px`, 
            height: `${imgHeight}px` 
          }
        };
      };
      
      const { containerStyle, itemStyle } = getLayoutStyle();
      
      return (
        <div style={containerStyle}>
          {Array.from({ length: count }).map((_, index) => {
            const key = index + 1;
            const imgId = `Yue_${widgetId}_p_${key}`;
            
            return (
              <div 
                key={key}
                style={{
                  ...itemStyle,
                  position: 'relative',
                  boxSizing: 'border-box',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  border: border !== 'none' ? border : undefined,
                  borderRadius: `${radius}px`,
                  boxSizing: 'border-box',
                  overflow: 'hidden'
                }}>
                  <img
                    id={imgId}
                    src={images[key]}
                    alt=""
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    onClick={() => handleClick(imgId)}
                    onError={(e) => (e.target.style.display = 'none')}
                  />
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    // 渲染控件
    render() { return (
        <div className={`Yue_${this.__widgetId}`}>
            
            <div onClick={() => this.onEvent('Click')} onMouseDown={() => this.onEvent('Down')} onMouseUp={() => this.onEvent('Up')} onContextMenu={() => this.onEvent('Contextmenu')} className={`Yue_${this.__widgetId}`}>
                {this.generateImageGrid(this.data)}
            </div>

            <style>
                {`
                    .Yue_${this.__widgetId} {
                        width: 100%;
                        height: 100%;
                    }
                `}
            </style>
        </div>
    )}

    // 返回控件的 ID
    getWidgetId() { return this.__widgetId }

    getWidgetIdMore(number) {
      return `Yue_${this.__widgetId}_p_${number}`;
    }
}

exports.types = types
exports.widget = Widget