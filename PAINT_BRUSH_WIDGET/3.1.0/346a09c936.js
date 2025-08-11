const blockColor = '#1E90FF';

const types = {
    title: "超级画笔",
    type: "PAINT_BRUSH_WIDGET",
    icon: "https://static.bcmcdn.com/coco/player/unstable/ry8900mSJx.image/svg+xml?hash=FsYOLXpxnmH2losy47-80nFgg2Hn",
    version: "3.1.0",
    isInvisibleWidget: false,
    isGlobalWidget: false,
    properties: [
        {
            key: '__width',
            label: '画布宽度',
            valueType: 'number',
            defaultValue: 800,
            blockOptions: { minimum: 100, maximum: 2000 }
        },
        {
            key: '__height',
            label: '画布高度',
            valueType: 'number',
            defaultValue: 600,
            blockOptions: { minimum: 100, maximum: 2000 }
        },
        {
            key: 'brushColor',
            label: '画笔颜色',
            valueType: 'color',
            defaultValue: '#000000',
            blockOptions: { generateBlock: true }
        },
        {
            key: 'brushSize',
            label: '画笔尺寸',
            valueType: 'number',
            defaultValue: 5,
            blockOptions: {
                generateBlock: true,
                minimum: 1,
                maximum: 100
            }
        },
        {
            key: 'brushType',
            label: '笔刷类型',
            valueType: 'number',
            defaultValue: 0,
            blockOptions: {
                generateBlock: true,
                displayAs: 'select',
                enumOptions: [
                    { label: '铅笔', value: 0 },
                    { label: '马克笔', value: 1 },
                    { label: '荧光笔', value: 2 },
                    { label: '喷枪', value: 3 },
                    { label: '毛笔', value: 4 },
                    { label: '钢笔', value: 5 },
                    { label: '粉笔', value: 6 },
                    { label: '炭笔', value: 7 },
                    { label: '水彩笔', value: 8 },
                    { label: '油画笔', value: 9 },
                    { label: '蜡笔', value: 10 },
                    { label: '圆珠笔', value: 11 },
                    { label: '记号笔', value: 12 },
                    { label: '荧光笔（粗）', value: 13 },
                    { label: '喷枪（粗）', value: 14 },
                    { label: '铅笔（粗）', value: 15 },
                    { label: '马克笔（粗）', value: 16 },
                    { label: '荧光笔（细）', value: 17 },
                    { label: '喷枪（细）', value: 18 },
                    { label: '铅笔（细）', value: 19 },
                    { label: '马克笔（细）', value: 20 },
                    { label: '毛笔（粗）', value: 21 },
                    { label: '钢笔（粗）', value: 22 },
                    { label: '粉笔（粗）', value: 23 },
                    { label: '炭笔（粗）', value: 24 },
                    { label: '水彩笔（粗）', value: 25 },
                    { label: '油画笔（粗）', value: 26 },
                    { label: '蜡笔（粗）', value: 27 },
                    { label: '圆珠笔（粗）', value: 28 },
                    { label: '记号笔（粗）', value: 29 },
                    { label: '荧光笔（超粗）', value: 30 },
                    { label: '喷枪（超粗）', value: 31 },
                    { label: '铅笔（超粗）', value: 32 },
                    { label: '马克笔（超粗）', value: 33 },
                    { label: '荧光笔（超细）', value: 34 },
                    { label: '喷枪（超细）', value: 35 },
                    { label: '铅笔（超细）', value: 36 },
                    { label: '马克笔（超细）', value: 37 }
                ]
            }
        }
    ],
    methods: [
        {
            key: 'undo',
            label: '撤销',
            tooltip: '撤销上一步操作'
        },
        {
            key: 'redo',
            label: '重做',
            tooltip: '重做上一步操作'
        }
    ]
};

class Widget extends VisibleWidget {
    constructor(props) {
        super(props);
        Object.assign(this, props);

        this.canvasRef = null;
        this.ctx = null;
        this.isDrawing = false;
        this.lastPos = { x: 0, y: 0 };
        this.history = [];
        this.currentStep = -1;

        // 绑定事件处理
        this.handleStart = this.handleStart.bind(this);
        this.handleMove = this.handleMove.bind(this);
        this.handleEnd = this.handleEnd.bind(this);
    }

    componentDidMount() {
        this.initCanvas();
        this.saveState();
    }

    initCanvas() {
        const canvas = this.canvasRef;
        this.ctx = canvas.getContext('2d');

        // 高清屏适配
        const dpr = window.devicePixelRatio || 1;
        canvas.width = this.__width * dpr;
        canvas.height = this.__height * dpr;
        this.ctx.scale(dpr, dpr);

        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
    }

    handleStart(e) {
        this.isDrawing = true;
        const pos = this.getPosition(e);
        this.lastPos = pos;
        this.startNewStroke();
    }

    handleMove(e) {
        if (!this.isDrawing) return;
        const pos = this.getPosition(e);

        this.drawStroke({
            from: this.lastPos,
            to: pos,
            color: this.brushColor,
            size: this.brushSize,
            type: this.brushType
        });

        this.lastPos = pos;
    }

    handleEnd() {
        if (this.isDrawing) {
            this.isDrawing = false;
            this.saveState();
        }
    }

    getPosition(e) {
        const rect = this.canvasRef.getBoundingClientRect();
        const clientX = e.clientX || (e.touches?.[0]?.clientX ?? 0);
        const clientY = e.clientY || (e.touches?.[0]?.clientY ?? 0);

        return {
            x: (clientX - rect.left) * (this.__width / rect.width),
            y: (clientY - rect.top) * (this.__height / rect.height)
        };
    }

    startNewStroke() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.lastPos.x, this.lastPos.y);
    }

    drawStroke(config) {
        switch(config.type) {
            case 0: // 铅笔
                this.drawPencil(config);
                break;
            case 1: // 马克笔
                this.drawMarker(config);
                break;
            case 2: // 荧光笔
                this.drawHighlighter(config);
                break;
            case 3: // 喷枪
                this.drawSpray(config);
                break;
            case 4: // 毛笔
                this.drawBrush(config, 1.5);
                break;
            case 5: // 钢笔
                this.drawPen(config, 1);
                break;
            case 6: // 粉笔
                this.drawChalk(config, 2);
                break;
            case 7: // 炭笔
                this.drawCharcoal(config, 2);
                break;
            case 8: // 水彩笔
                this.drawWatercolor(config, 1.5);
                break;
            case 9: // 油画笔
                this.drawOilPaint(config, 2);
                break;
            case 10: // 蜡笔
                this.drawCrayon(config, 1.5);
                break;
            case 11: // 圆珠笔
                this.drawBallpoint(config, 1);
                break;
            case 12: // 记号笔
                this.drawMarker(config);
                break;
            case 13: // 荧光笔（粗）
                this.drawHighlighter(config, 4);
                break;
            case 14: // 喷枪（粗）
                this.drawSpray(config, 2);
                break;
            case 15: // 铅笔（粗）
                this.drawPencil(config, 3);
                break;
            case 16: // 马克笔（粗）
                this.drawMarker(config, 4);
                break;
            case 17: // 荧光笔（细）
                this.drawHighlighter(config, 1);
                break;
            case 18: // 喷枪（细）
                this.drawSpray(config, 0.5);
                break;
            case 19: // 铅笔（细）
                this.drawPencil(config, 1);
                break;
            case 20: // 马克笔（细）
                this.drawMarker(config, 2);
                break;
            case 21: // 毛笔（粗）
                this.drawBrush(config, 3);
                break;
            case 22: // 钢笔（粗）
                this.drawPen(config, 2);
                break;
            case 23: // 粉笔（粗）
                this.drawChalk(config, 3);
                break;
            case 24: // 炭笔（粗）
                this.drawCharcoal(config, 3);
                break;
            case 25: // 水彩笔（粗）
                this.drawWatercolor(config, 3);
                break;
            case 26: // 油画笔（粗）
                this.drawOilPaint(config, 4);
                break;
            case 27: // 蜡笔（粗）
                this.drawCrayon(config, 3);
                break;
            case 28: // 圆珠笔（粗）
                this.drawBallpoint(config, 2);
                break;
            case 29: // 记号笔（粗）
                this.drawMarker(config, 5);
                break;
            case 30: // 荧光笔（超粗）
                this.drawHighlighter(config, 6);
                break;
            case 31: // 喷枪（超粗）
                this.drawSpray(config, 3);
                break;
            case 32: // 铅笔（超粗）
                this.drawPencil(config, 5);
                break;
            case 33: // 马克笔（超粗）
                this.drawMarker(config, 6);
                break;
            case 34: // 荧光笔（超细）
                this.drawHighlighter(config, 0.5);
                break;
            case 35: // 喷枪（超细）
                this.drawSpray(config, 0.2);
                break;
            case 36: // 铅笔（超细）
                this.drawPencil(config, 0.5);
                break;
            case 37: // 马克笔（超细）
                this.drawMarker(config, 1);
                break;
            default:
                this.drawBasic(config);
        }
    }

    drawPencil({ from, to, color, size }, multiplier = 1) {
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = size * multiplier;
        this.ctx.globalAlpha = 1;
        this.ctx.lineTo(to.x, to.y);
        this.ctx.stroke();
    }

    drawMarker({ from, to, color, size }, multiplier = 1) {
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = size * multiplier;
        this.ctx.globalAlpha = 0.8;
        this.ctx.lineTo(to.x, to.y);
        this.ctx.stroke();
    }

    drawHighlighter({ from, to, color, size }, multiplier = 1) {
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = size * multiplier;
        this.ctx.globalAlpha = 0.5;
        this.ctx.lineTo(to.x, to.y);
        this.ctx.stroke();
    }

    drawSpray({ from, to, color, size }, densityMultiplier = 1) {
        const density = size * densityMultiplier;
        for (let i = 0; i < density; i++) {
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * size;
            const x = to.x + radius * Math.cos(angle);
            const y = to.y + radius * Math.sin(angle);

            this.ctx.beginPath();
            this.ctx.arc(x, y, size / 5, 0, Math.PI * 2);
            this.ctx.fillStyle = color           ;
 this.ctx.fill();
        }
    }

    drawBrush({ from, to, color, size }, multiplier = 1) {
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = size * multiplier;
        this.ctx.globalAlpha = 0.9;
        this.ctx.lineTo(to.x, to.y);
        this.ctx.stroke();
    }

    drawPen({ from, to, color, size }, multiplier = 1) {
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = size * multiplier;
        this.ctx.globalAlpha = 1;
        this.ctx.lineTo(to.x, to.y);
        this.ctx.stroke();
    }

    drawChalk({ from, to, color, size }, multiplier = 1) {
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = size * multiplier;
        this.ctx.globalAlpha = 0.7;
        this.ctx.lineTo(to.x, to.y);
        this.ctx.stroke();
    }

    drawCharcoal({ from, to, color, size }, multiplier = 1) {
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = size * multiplier;
        this.ctx.globalAlpha = 0.6;
        this.ctx.lineTo(to.x, to.y);
        this.ctx.stroke();
    }

    drawWatercolor({ from, to, color, size }, multiplier = 1) {
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = size * multiplier;
        this.ctx.globalAlpha = 0.4;
        this.ctx.lineTo(to.x, to.y);
        this.ctx.stroke();
    }

    drawOilPaint({ from, to, color, size }, multiplier = 1) {
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = size * multiplier;
        this.ctx.globalAlpha = 0.9;
        this.ctx.lineTo(to.x, to.y);
        this.ctx.stroke();
    }

    drawCrayon({ from, to, color, size }, multiplier = 1) {
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = size * multiplier;
        this.ctx.globalAlpha = 0.8;
        this.ctx.lineTo(to.x, to.y);
        this.ctx.stroke();
    }

    drawBallpoint({ from, to, color, size }, multiplier = 1) {
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = size * multiplier;
        this.ctx.globalAlpha = 1;
        this.ctx.lineTo(to.x, to.y);
        this.ctx.stroke();
    }

    drawBasic({ from, to, color, size }) {
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = size;
        this.ctx.globalAlpha = 1;
        this.ctx.lineTo(to.x, to.y);
        this.ctx.stroke();
    }

    saveState() {
        const imageData = this.ctx.getImageData(0, 0, this.__width, this.__height);

        // 只保留最近20步历史
        if (this.currentStep < 19) {
            this.history = this.history.slice(0, this.currentStep + 1);
        }

        this.history.push(imageData);
        this.currentStep = this.history.length - 1;
    }

    undo() {
        if (this.currentStep > 0) {
            this.currentStep--;
            this.ctx.putImageData(this.history[this.currentStep], 0, 0);
        }
    }

    redo() {
        if (this.currentStep < this.history.length - 1) {
            this.currentStep++;
            this.ctx.putImageData(this.history[this.currentStep], 0, 0);
        }
    }

    render() {
        return (
            <div style={{ position: 'relative' }}>
                <canvas
                    ref={(ref) => this.canvasRef = ref}
                    style={{
                        width: `${this.__width}px`,
                        height: `${this.__height}px`,
                        touchAction: 'none',
                        backgroundColor: '#fff',
                        border: `2px solid ${blockColor}`,
                        borderRadius: '8px'
                    }}
                    onMouseDown={this.handleStart}
                    onMouseMove={this.handleMove}
                    onMouseUp={this.handleEnd}
                    onMouseLeave={this.handleEnd}
                    onTouchStart={this.handleStart}
                    onTouchMove={this.handleMove}
                    onTouchEnd={this.handleEnd}
                />

                {/* 内置工具栏 */}
                <div style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '8px',
                    background: 'rgba(255,255,255,0.9)',
                    padding: '8px',
                    borderRadius: '4px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                    <button 
                        onClick={() => this.undo()} 
                        disabled={this.currentStep <= 0}
                    >撤销</button>
                    <button 
                        onClick={() => this.redo()} 
                        disabled={this.currentStep >= this.history.length - 1}
                    >重做</button>
                </div>
            </div>
        );
    }
}

exports.types = types;
exports.widget = Widget;