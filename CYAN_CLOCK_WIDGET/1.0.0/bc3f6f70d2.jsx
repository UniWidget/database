let getDocument = this.document; //获取权限

let time = new Date();
let s, m, h; /*时间相关*/

let pi = Math.PI; //圆周率

let secondAngle, minuteAngle, hourAngle; //计算针的弧度的储存

function init(id){
  let canvas = getDocument.getElementById(id);
  let ctx = canvas.getContext("2d");
  draw(ctx);
}

function draw(ctx){
  requestAnimationFrame(function step(){
    drawDial(ctx); //绘制表盘
    drawAllHands(ctx); //绘制时分秒针
    requestAnimationFrame(step);
  });
}
/*绘制时分秒针*/
function drawAllHands(ctx){
  s = time.getSeconds();
  m = time.getMinutes();
  h = time.getHours();

  secondAngle = pi / 180 * 6 * s;  //计算出来s针的弧度
  minuteAngle = pi / 180 * 6 * m + secondAngle / 60;  //计算出来分针的弧度
  hourAngle = pi / 180 * 30 * h + minuteAngle / 12;  //计算出来时针的弧度

  drawHand(hourAngle, 60, 6, "red", ctx);  //绘制时针
  drawHand(minuteAngle, 106, 4, "green", ctx);  //绘制分针
  drawHand(secondAngle, 129, 2, "blue", ctx);  //绘制秒针
}
/*绘制时针、或分针、或秒针
 * 参数1：要绘制的针的角度
 * 参数2：要绘制的针的长度
 * 参数3：要绘制的针的宽度
 * 参数4：要绘制的针的颜色
 * 参数5：ctx
 * */
function drawHand(angle, len, width, color, ctx){
  ctx.save();
  ctx.translate(150, 150); //把坐标轴的远点平移到原来的中心
  ctx.rotate(-Math.PI / 2 + angle);  //旋转坐标轴。 x轴就是针的角度
  ctx.beginPath();
  ctx.moveTo(-4, 0);
  ctx.lineTo(len, 0);  // 沿着x轴绘制针
  ctx.lineWidth = width;
  ctx.strokeStyle = color;
  ctx.lineCap = "round";
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
}

/*绘制表盘*/
function drawDial(ctx){
  ctx.clearRect(0, 0, 300, 300); //清除所有内容
  ctx.save();

  ctx.translate(150, 150); //一定坐标原点到原来的中心
  ctx.beginPath();
  ctx.arc(0, 0, 148, 0, 2 * pi); //绘制圆周
  ctx.stroke();
  ctx.closePath();

  for (let i = 0; i < 60; i++){//绘制刻度。
    ctx.save();
    ctx.rotate(-pi / 2 + i * pi / 30);  //旋转坐标轴。坐标轴x的正方形从 向上开始算起
    ctx.beginPath();
    ctx.moveTo(110, 0);
    ctx.lineTo(140, 0);
    ctx.lineWidth = i % 5 ? 2 : 4;
    ctx.strokeStyle = i % 5 ? "blue" : "red";
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }
  ctx.restore();
}

let widgetIcon = "data:image/png;base64,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";

const types = {
  type: "CYAN_CLOCK_WIDGET",
  icon: widgetIcon,
  title: "简单时钟",
  version: "1.0.0",
  isInvisibleWidget: false,
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: 200,
      blockOptions: {
        generateBlock: true
      }
    },
    {
      key: '__height',
      label: '高度',
      valueType: 'number',
      defaultValue: 200,
      blockOptions: {
        generateBlock: true
      }
    }
  ],
  methods: [],
  events: []
};

class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    init(this.__widgetId + "_clock");
    //绘制表盘
  }
  
  render() {
    return(
      <canvas
        id={this.__widgetId + "_clock"}
        width={"100%"}
        height={"100%"}>
      </canvas>
    );
  }
}

exports.types = types;
exports.widget = Widget;
