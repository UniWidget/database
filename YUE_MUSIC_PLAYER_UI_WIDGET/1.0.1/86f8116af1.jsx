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
    title: "音乐播放器UI",
    type: "YUE_MUSIC_PLAYER_UI_WIDGET",
    icon: "https://static.codemao.cn/pickduck/ByptIRO0kg.svg?hash=FuAjQvzR316bzv0MDu-TqeeFu7YJ",
    docs: { url: 'https://www.yuque.com/yuqueyonghuhelltp/yuekj/ggnx5is4m1scmm64' },
    version: "1.0.1",
    isInvisibleWidget: false,
    isGlobalWidget: false,
    hasAnyWidget: true,
    properties: [
        { key: '__width', label: '宽度', valueType: 'number', defaultValue: 340 },
        { key: '__height', label: '高度', valueType: 'number', defaultValue: 60 },
        { key: 'cardBgColor', label: '卡片背景颜色', valueType: 'string', editorType: 'Color', defaultValue: '#2FD16C' },
        { key: 'cardBgImg', label: '卡片背景图片', valueType: 'image', defaultValue: 'https://static.bcmcdn.com/coco/player/unstable/Syn-SYyRke.image/png?hash=FtEe8EuVX9_yyRGSRFpLeOUbvkfq' },
        { key: 'miSan', label: '弥散', valueType: 'boolean', defaultValue: true },
        { key: 'miSanNum', label: '弥散大小', valueType: 'number', defaultValue: '15', unit: '像素' },
        { key: 'cardRadius', label: '卡片圆角', valueType: 'string', defaultValue: '15px 15px 0px 0px' },
        { key: 'cardBorder', label: '卡片边框', valueType: 'string', defaultValue: '2px solid #2699FFFF' },
        { key: 'cardShadow', label: '卡片阴影样式', valueType: 'string', defaultValue: '2px 2px 5px 4px #33333320' },
        { key: 'imgWPianYiRadius', label: '左右间距(建议填卡片左圆角', valueType: 'number', defaultValue: 10, unit: '像素' },
        { key: 'imgWidthA', label: '上图片宽度', valueType: 'number', defaultValue: 30, unit: '像素' },
        { key: 'imgHeightA', label: '上图片高度', valueType: 'number', defaultValue: 30, unit: '像素' },
        { key: 'imgWidthB', label: '下图片宽度', valueType: 'number', defaultValue: 40, unit: '像素' },
        { key: 'imgHeightB', label: '下图片高度', valueType: 'number', defaultValue: 40, unit: '像素' },
        { key: 'imgRadiusA', label: '上图片圆角', valueType: 'number', defaultValue: 12, unit: '像素' },
        { key: 'imgRadiusB', label: '下图片圆角', valueType: 'number', defaultValue: 16, unit: '像素' },
        { key: 'imgUrlA', label: '上图片源', valueType: 'image', defaultValue: 'https://static.bcmcdn.com/coco/player/unstable/Syn-SYyRke.image/png?hash=FtEe8EuVX9_yyRGSRFpLeOUbvkfq' },
        { key: 'imgUrlB', label: '下图片源', valueType: 'image', defaultValue: 'https://static.codemao.cn/pickduck/Hkc8Sxu0Jl.png?hash=FjRiper27c9c9amT_JnctpSmDidF' },
        { key: 'fontDaXiaoA', label: '标题大小', valueType: 'number', defaultValue: 16, unit: '像素' },
        { key: 'fontDaXiaoB', label: '副标题大小', valueType: 'number', defaultValue: 12, unit: '像素' },
        { key: 'fontColorA', label: '标题颜色', valueType: 'string', editorType: 'Color', defaultValue: '#202020FF' },
        { key: 'fontColorB', label: '副标题颜色', valueType: 'string', editorType: 'Color', defaultValue: '#434343FF' },
        { key: 'fontFamily', label: '自定义字体', valueType: 'string', defaultValue: '' },
        { key: 'fontWeightA', label: '标题字重', valueType: 'number', defaultValue: 900 },
        { key: 'fontWeightB', label: '副标题字重', valueType: 'number', defaultValue: 300 },
        { key: 'fontVariationA', label: '上双轴可变字体粗细', valueType: 'string', defaultValue: '"wght" 300 700' },
        { key: 'fontVariationB', label: '下双轴可变字体粗细', valueType: 'string', defaultValue: '"wght" 300 700' },
        { key: 'fontA', label: '标题内容', valueType: 'string', defaultValue: '来去打工（测试歌名' },
        { key: 'fontB', label: '副标题内容', valueType: 'string', defaultValue: '王以诺（歌手' },
        { key: 'fontGunA', label: '滚动标题', valueType: 'boolean', defaultValue: false },
        { key: 'fontGunB', label: '滚动副标题', valueType: 'boolean', defaultValue: false },
        { key: 'gap', label: '文本左右间距', valueType: 'number', defaultValue: 10, unit: '像素' },
        { key: 'iconSvg', label: '图标SVG对象(123', valueType: 'string', editorType: 'TextArea', defaultValue: '{"1": "M14 13a1 1 0 0 1 .993.883L15 14v6a1 1 0 0 1-1.993.117L13 20v-6a1 1 0 0 1 1-1m3 4.5a1 1 0 0 1 1 1V20a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1m3-4.5a1 1 0 0 1 .993.883L21 14v6a1 1 0 0 1-1.993.117L19 20v-6a1 1 0 0 1 1-1M9 13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm0 2H5v4h4zm8-2a1 1 0 0 1 .993.883L18 14v1.5a1 1 0 0 1-1.993.117L16 15.5V14a1 1 0 0 1 1-1M9 3a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm10 0a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM9 5H5v4h4zm10 0h-4v4h4z", "2": "M17 2a3 3 0 0 1 2.995 2.824L20 5v13.018c0 1.182-1.293 1.883-2.275 1.285l-.107-.072-.618-.449v2.236c0 1.182-1.293 1.883-2.275 1.285l-.107-.072-4.118-2.995-4.118 2.995c-.956.696-2.283.062-2.377-1.084L4 21.018V8a3 3 0 0 1 3-3 3 3 0 0 1 2.824-2.995L10 2zm-3 5H7a1 1 0 0 0-.993.883L6 8v12.036l3.618-2.63a1.5 1.5 0 0 1 1.64-.082l.124.081L15 20.036V8a1 1 0 0 0-.883-.993zm3-3h-7a1 1 0 0 0-1 1h5a3 3 0 0 1 3 3v8.309l1 .727V5a1 1 0 0 0-1-1", "3": "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16M8.964 8.65a1.192 1.192 0 0 1 1.654-.953l.325.143.44.202.349.169.39.196.43.223.462.251.494.28.249.145.469.282.428.268.564.368.464.318.455.328.083.061c.635.477.64 1.429.001 1.909l-.283.209-.393.276-.496.335-.387.25-.43.27-.473.283c-.082.049-.166.098-.252.147l-.498.282-.466.253-.43.224-.39.196-.505.242-.4.181-.202.088a1.192 1.192 0 0 1-1.651-.954l-.054-.499-.03-.334-.042-.599-.024-.46-.018-.506-.01-.549v-.579l.01-.548.018-.506.024-.46.042-.599.071-.73zm1.884 1.355-.027.467-.021.525-.012.58v.618l.012.58.02.525.028.467.416-.21.226-.118.488-.262.53-.299.522-.309.242-.148.444-.28.39-.255-.392-.257-.444-.281-.496-.3a29.503 29.503 0 0 0-.793-.453l-.488-.262-.442-.227z"}' },
        { key: 'iconDaXiao', label: '图标大小', valueType: 'number', defaultValue: 24, unit: '像素' },
        { key: 'iconColor', label: '图标颜色', valueType: 'string', editorType: 'Color', defaultValue: '#1C4D1CFF' },
        { key: 'iconGap', label: '图标间隔', valueType: 'number', defaultValue: 8, unit: '像素' },
        { key: 'jdtOpen', label: '进度条显示', valueType: 'boolean', defaultValue: true },
        { key: 'jdtColorBg', label: '进度条背景颜色', valueType: 'string', editorType: 'Color', defaultValue: '#B6A3FFFF' },
        { key: 'jdtColor', label: '进度条颜色', valueType: 'string', editorType: 'Color', defaultValue: '#F6669BFF' },
        { key: 'jdt', label: '进度', valueType: 'number', defaultValue: 10, unit: '%' },
        { key: 'jdtGap', label: '进度条间距', valueType: 'number', defaultValue: 2, unit: '像素' },
    ],
    events: [
        { 
            key: 'onClickc', 
            label: '被点击', 
            params: [],
        },
        { 
            key: 'onClick', 
            label: '被点击', 
            subTypes: [
                {
                    key: 'event',
                    dropdown: [
                        { label: '下图片', value: 'ImgB' },
                        { label: '上图片', value: 'ImgA' },
                        { label: '标题', value: 'FontA' },
                        { label: '副标题', value: 'FontB' },
                        { label: '图标1', value: 'Icon1' },
                        { label: '图标2', value: 'Icon2' },
                        { label: '图标3', value: 'Icon3' },
                    ]
                }
            ],
            params: [],
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
                { key: "name", label: '元素', valueType: 'string', defaultValue: 'card',
                    dropdown: [
                        { label: '卡片', value: 'card' },
                        { label: '下图片', value: 'imgB' },
                        { label: '上图片', value: 'imgA' },
                        { label: '标题', value: 'fontA' },
                        { label: '副标题', value: 'fontB' },
                        { label: '图标1', value: 'icon1' },
                        { label: '图标2', value: 'icon2' },
                        { label: '图标3', value: 'icon3' },
                    ],
                    labelAfter:'的 ID'
                },
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

    onClick(name) {
        this.emit('onClick' + name)
    }

    // 处理Svg
    chuliSvg(str, key) {
        try {
            const obj = JSON.parse(str);
            return obj[key];
        } catch (error) {
            console.error("解析svg字符串时出错:", error);
            return null;
        }
    }

    processSvgNum(str) {
        try {
            const obj = JSON.parse(str);
            const keys = Object.keys(obj);
            const length = keys.length;
            if (length >= 3) {
                return 3;
            }
            return length;
        } catch (error) {
            console.error("解析svg字符串时出错:", error);
            return null;
        }
    }

    // 渲染控件
    render() { return (
        <div className={`Yue_${this.__widgetId}`}>
            
            <div onClick={() => this.onEvent('Clickc')} style={{width: "100%", height: "100%"}}>
                <div class={`Yue_${this.__widgetId}_card`} id={`${this.__widgetId}_card`}>
                    <div class={`Yue_${this.__widgetId}_cardcard`} style={{width: "100%", height: "100%", position: "relative", zIndex: "1"}}>
                        <div class={`Yue_${this.__widgetId}_img`}>
                            {this.imgUrlB?(<img src={this.imgUrlB} id={`${this.__widgetId}_imgB`} onClick={() => this.onClick('ImgB')} style={{width: `${this.imgWidthB}px`, height: `${this.imgHeightB}px`, borderRadius: `${this.imgRadiusB}px`,userSelect: "none",userDrag: "none"}} draggable="false"/>) : null}
                            {this.imgUrlA?(<img src={this.imgUrlA} id={`${this.__widgetId}_imgA`} onClick={() => this.onClick('ImgA')} style={{width: `${this.imgWidthA}px`, height: `${this.imgHeightA}px`, borderRadius: `${this.imgRadiusA}px`,userSelect: "none",userDrag: "none"}} draggable="false"/>) : null}
                        </div>
                        <div class={`Yue_${this.__widgetId}_wenzi`}>
                            {this.fontA &&!this.fontGunA? (<div id={`${this.__widgetId}_fontA`} onClick={() => this.onClick('FontA')} style={{color:`${this.fontColorA}`, fontSize:`${this.fontDaXiaoA}px`, fontFamily:`${this.fontFamily}, sans-serif`,fontWeight: `${this.fontWeightA}`, fontVariationSettings: `${this.fontVariationA}`, width: "100%"}}>{this.fontA}</div>) : (this.fontA && this.fontGunA? (
                                <div className={`Yue_${this.__widgetId}_fontA_wrapper`}>
                                    <span 
                                        id={`${this.__widgetId}_fontA`}
                                        className={`Yue_${this.__widgetId}_fontA_scroller`}
                                        onClick={() => this.onClick('FontA')}
                                        style={{
                                            color: this.fontColorA,
                                            fontSize: `${this.fontDaXiaoA}px`,
                                            fontFamily: this.fontFamily,
                                            fontWeight: this.fontWeightA,
                                            fontVariationSettings: this.fontVariationA
                                        }}
                                    >
                                        {this.fontA}
                                    </span>
                                </div>) : null )}
                            {this.fontB &&!this.fontGunB? (<div id={`${this.__widgetId}_fontB`} onClick={() => this.onClick('FontB')} style={{color:`${this.fontColorB}`, fontSize:`${this.fontDaXiaoB}px`, fontFamily:`${this.fontFamily}, sans-serif`,fontWeight: `${this.fontWeightB}`, fontVariationSettings: `${this.fontVariationB}`, width: "100%"}}>{this.fontB}</div>) : (this.fontB && this.fontGunB? (
                                <div className={`Yue_${this.__widgetId}_fontB_wrapper`}>
                                    <span 
                                        id={`${this.__widgetId}_fontB`}
                                        className={`Yue_${this.__widgetId}_fontB_scroller`}
                                        onClick={() => this.onClick('FontB')}
                                        style={{
                                            color: this.fontColorB,
                                            fontSize: `${this.fontDaXiaoB}px`,
                                            fontFamily: this.fontFamily,
                                            fontWeight: this.fontWeightB,
                                            fontVariationSettings: this.fontVariationB
                                        }}
                                    >
                                        {this.fontB}
                                    </span>
                                </div>) : null)}
                        </div>
                        <div class={`Yue_${this.__widgetId}_icon`}>
                            {(() => {
                                const result = this.chuliSvg(this.iconSvg, 1);
                                // 设置 viewBox 为 0 0 24 24
                                const viewBox = "0 0 24 24"; 
                                // 为了等比缩放，保持 width 和 height 的比例与 viewBox 一致
                                const width = this.iconDaXiao; 
                                const height = this.iconDaXiao; 
                                return result? (
                                    <svg id={`${this.__widgetId}_icon1`} onClick={() => this.onClick('Icon1')} width={width} height={height} viewBox={viewBox} style={{cursor: "pointer"}}>
                                        <path d={result} fill={this.iconColor} style={{transition:"d 0.3s ease"}} />
                                    </svg>
                                ) : null;
                            })()}

                            {(() => {
                                const result = this.chuliSvg(this.iconSvg, 2);
                                // 设置 viewBox 为 0 0 24 24
                                const viewBox = "0 0 24 24"; 
                                // 为了等比缩放，保持 width 和 height 的比例与 viewBox 一致
                                const width = this.iconDaXiao; 
                                const height = this.iconDaXiao; 
                                return result? (
                                    <svg id={`${this.__widgetId}_icon2`} onClick={() => this.onClick('Icon2')} width={width} height={height} viewBox={viewBox} style={{cursor: "pointer"}}>
                                        <path d={result} fill={this.iconColor} style={{transition:"d 0.3s ease"}} />
                                    </svg>
                                ) : null;
                            })()}

                            {(() => {
                                const result = this.chuliSvg(this.iconSvg, 3);
                                // 设置 viewBox 为 0 0 24 24
                                const viewBox = "0 0 24 24"; 
                                // 为了等比缩放，保持 width 和 height 的比例与 viewBox 一致
                                const width = this.iconDaXiao; 
                                const height = this.iconDaXiao; 
                                return result? (
                                    <svg id={`${this.__widgetId}_icon3`} onClick={() => this.onClick('Icon3')} width={width} height={height} viewBox={viewBox} style={{cursor: "pointer"}}>
                                        <path d={result} fill={this.iconColor} style={{transition:"d 0.3s ease"}} />
                                    </svg>
                                ) : null;
                            })()}
                        </div>
                    </div>
                    {this.jdtOpen?(<div style={{ width: '100%' ,position:"relative",top:`${this.jdtGap}px` }}>
                        <div style={{ width: "100%",height: "2px",backgroundColor:`${this.jdtColorBg}`,borderRadius: "2px" }}></div>
                        <div style={{ width: `${this.jdt}%`,height: "2px",backgroundColor:`${this.jdtColor}`,borderRadius: "2px",position: "relative",bottom: "2px",transition:"width 0.3s ease-in-out" }}></div>
                    </div>) : null}
                </div>
            </div>

            <style>
                {`
                    .Yue_${this.__widgetId} {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .Yue_${this.__widgetId}_card {
                        position: relative;
                        width: 100%;
                        height: 100%;
                        background-color: ${this.cardBgColor};
                        border-radius: ${this.cardRadius};
                        border: ${this.cardBorder};
                        box-shadow: ${this.cardShadow};
                    }

                    .Yue_${this.__widgetId}_card::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        border-radius: ${this.cardRadius};
                        ${this.cardBgImg ? `background-image: url('${this.cardBgImg}');background-repeat: no-repeat;background-position: center center;background-size: cover;` : ''}
                        ${this.cardBgImg ? `clip-path: inset(0 round ${this.cardRadius});` : ''}
                        ${this.miSan ? `filter: blur(${this.miSanNum}px)` : ''};
                        ${this.cardBgImg ? '' : 'z-index: -1;'}
                        ${this.cardBgImg ? 'transition: filter 0.3s ease;' : ''}
                    }

                    .Yue_${this.__widgetId}_cardcard {
                        position: relative;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction:row;
                        align-items: center;
                    }

                    .Yue_${this.__widgetId}_img {
                        position: relative;
                        width: ${this.imgWidthB}px;
                        height: 100%;
                        top: calc( ( 100% - ${this.imgHeightB}px ) / 2);
                        left: ${this.imgWPianYiRadius}px;
                        font-size: 0;
                    }

                    .Yue_${this.__widgetId}_img img:nth-child(1) {
                        z-index: 1;
                        position: relative;
                    }

                    .Yue_${this.__widgetId}_img img:nth-child(2) {
                        z-index: 2;
                        position: absolute;
                        left: ${(this.imgWidthB - this.imgWidthA)/2}px;
                        top: ${(this.imgHeightB - this.imgHeightA)/2}px;
                    }

                    .Yue_${this.__widgetId}_wenzi {
                        position: relative;
                        ${(this.imgUrlA || this.imgUrlB)? `left: ${this.imgWPianYiRadius + this.gap}px;`:`left: ${this.gap - this.imgWidthB}px;`}
                        width: ${this.__width - this.imgWidthB - this.imgWPianYiRadius*2 - this.gap*2 - this.iconDaXiao*this.processSvgNum(this.iconSvg) - this.iconGap*(this.processSvgNum(this.iconSvg) - 1)}px;
                        display: flex;
                        flex-direction: column;
                        white-space: nowrap;
                        overflow: visible;
                    }

                    .Yue_${this.__widgetId}_icon {
                        width: ${this.iconDaXiao*this.processSvgNum(this.iconSvg) + this.iconGap*(this.processSvgNum(this.iconSvg) - 1)}px;
                        margin-left: auto;
                        position: relative;
                        right: ${this.imgWPianYiRadius}px;
                        display: flex;
                        justify-content: flex-start;
                        gap: ${this.iconGap}px;
                    }

                    .Yue_${this.__widgetId}_icon svg {
                        opacity: 1;
                        transition: opacity 0.3s ease;
                    }

                    .Yue_${this.__widgetId}_icon svg:active {
                        opacity: 0.5;
                    }

                    ${this.fontGunA ? `
                        /* 优化后的滚动容器 */
                        .Yue_${this.__widgetId}_fontA_wrapper {
                            display: inline-block;
                            max-width: 100%;
                            overflow: hidden;
                            vertical-align: top;
                            position: relative;
                            mask-image: linear-gradient(
                                to right,
                                transparent 0,
                                black 20px,
                                black calc(100% - 20px),
                                transparent 100%
                            );
                            -webkit-mask-image: linear-gradient(
                                to right,
                                transparent 0,
                                black 20px,
                                black calc(100% - 20px),
                                transparent 100%
                            );
                        }
                        
                        /* 优化动画流畅度 */
                        .Yue_${this.__widgetId}_fontA_scroller {
                            display: inline-block;
                            white-space: nowrap;
                            will-change: transform; /* 启用GPU加速 */
                            animation: smooth-scroll-${this.__widgetId} ${Math.max(4, this.fontA.length/6)}s linear infinite;
                            padding-right: 0.5em; /* 改用相对单位 */
                        }
                        
                        /* 更精准的文本复制 */
                        .Yue_${this.__widgetId}_fontA_scroller::after {
                            content: "${this.fontA}";
                            display: inline-block;
                            padding-left: 1em; /* 相对单位保持比例 */
                            position: relative;
                            left: 0.3em; /* 微调衔接位置 */
                        }
                        
                        /* 优化动画曲线 */
                        @keyframes smooth-scroll-${this.__widgetId} {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(calc(-50% - 0.5em)); }
                        }
                    ` : ''}

                    ${this.fontGunB ? `
                        /* 优化后的滚动容器 */
                        .Yue_${this.__widgetId}_fontB_wrapper {
                            display: inline-block;
                            max-width: 100%;
                            overflow: hidden;
                            vertical-align: top;
                            position: relative;
                            mask-image: linear-gradient(
                                to right,
                                transparent 0,
                                black 20px,
                                black calc(100% - 20px),
                                transparent 100%
                            );
                            -webkit-mask-image: linear-gradient(
                                to right,
                                transparent 0,
                                black 20px,
                                black calc(100% - 20px),
                                transparent 100%
                            );
                        }
                        
                        /* 优化动画流畅度 */
                        .Yue_${this.__widgetId}_fontB_scroller {
                            display: inline-block;
                            white-space: nowrap;
                            will-change: transform; /* 启用GPU加速 */
                            animation: smooth-scroll-${this.__widgetId} ${Math.max(4, this.fontB.length/6)}s linear infinite;
                            padding-right: 0.5em; /* 改用相对单位 */
                        }
                        
                        /* 更精准的文本复制 */
                        .Yue_${this.__widgetId}_fontB_scroller::after {
                            content: "${this.fontB}";
                            display: inline-block;
                            padding-left: 1em; /* 相对单位保持比例 */
                            position: relative;
                            left: 0.3em; /* 微调衔接位置 */
                        }
                        
                        /* 优化动画曲线 */
                        @keyframes smooth-scroll-${this.__widgetId} {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(calc(-50% - 0.5em)); }
                        }
                    ` : ''}
                    
                `}
            </style>
        </div>
    )}

    // 返回控件的 ID
    getWidgetId() { return this.__widgetId }

    getWidgetIdMore(name) { return this.__widgetId + "_" + name }
}

exports.types = types
exports.widget = Widget