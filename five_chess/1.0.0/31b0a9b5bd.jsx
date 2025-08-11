var initialization, chessdata, nowteam, ifavatar, htmldata, loading, i, time, timelist;
const antd = require('antd-mobile');
const version = '0.0.47.1'
const author = 'shulin,SLIGHTNING'
time = -1
initialization = false;
loading = false
htmldata = []
timelist = []//[先手,[[间隔,坐标],[间隔,坐标]]]

function mathRandomInt(a, b) {//waddle封装的随机整数
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}
function divisible(num1, num2) {//整除
  return (num1 - (num1 % num2)) / num2
}

const types = {
  isInvisibleWidget: false,
  type: "five_chess",
  icon: "https://coco.codemao.cn/http-widget-proxy/https@SEP@www.cloudroo.top/favicon.ico",
  title: "星梦五子棋",
  author,
  version,
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: 344,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: '__height',
      label: '高度',
      valueType: 'number',
      defaultValue: 360,
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
types.docs = { url: "https://www.yuque.com/shulinnn/tower/egvvxr28t3g6df4d" };
types.platforms = ["android", "ios", "web"]
class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.__width = props.__width;
    this.__height = props.__height;
    this.HTMLdata = props.HTMLdata;
    this.rows = props.rows;
    this.antd_avatar = props.antd_avatar;
    this.blank = props.blank;
    this.black = props.black;
    this.while = props.while;
    this.border_radius = props.border_radius;
    this.chesssize = props.chesssize;
    this.margin = props.margin;
    if (typeof this.HTMLdata !== 'object' || typeof htmldata !== 'object') {
      console.error('星梦五子棋内置棋盘渲染失败：[控件初始化]渲染数据校验失败，传入渲染数据：' + this.HTMLdata + '，处理后的数据：' + htmldata);
      this.HTMLdata = []
      htmldata = []
    }
    this.widgetLog('制作：' + author);
    this.widgetLog('出品：星梦开发部');
    this.widgetLog('当前控件版本：' + version);
  };
  render() {
    ifavatar = this.antd_avatar
    if (ifavatar) {
      if (typeof this.HTMLdata !== 'object') {
        this.HTMLdata = []
        this.emit('onHTMLError', nil, nil, '渲染数据校验失败');
        this.widgetError('内置棋盘渲染失败：渲染数据校验失败');
        console.error('星梦五子棋内置棋盘渲染失败：渲染数据校验失败');
      }
      htmldata = this.HTMLdata
      try {
        return (
          <>
            {htmldata.map((item, index) => (
              <antd.Space warp>
                <antd.Avatar
                  fallback={React.createElement("img", { src: this.blank, alt: '', }, null)}
                  src={item.src}
                  fit={'contain'}
                  lazy={true}
                  onClick={() => this.emit('onClick', index + 1, item.src)}
                  onError={() => this.emit('onHTMLError', index + 1, item.src, '棋子渲染出错')}

                  style={{
                    '--border-radius': this.border_radius,
                    '--size': this.chesssize,
                    "margin": this.margin
                  }}
                />
              </antd.Space>
            ))}
          </>
        );
      } catch (err) {
        this.HTMLdata = []
        this.antd_avatar = false
        this.emit('onHTMLError', '', '', err);
        this.widgetError('内置棋盘渲染失败：' + err);
        console.error('星梦五子棋内置棋盘渲染失败：' + err);
        this.setProps({ 'HTMLdata': [] });
      }
    } else {
      return (
        React.createElement("p", {}, [
          <>
            <antd.Space warp>
              <antd.Avatar
                fallback={React.createElement("img", { src: this.blank, alt: '', }, null)}
                src={this.black}
                fit={'contain'}
                lazy={true}

                style={{
                  '--border-radius': this.border_radius,
                  '--size': this.chesssize,
                  "margin": this.margin
                }}
              />
            </antd.Space>
            <antd.Space warp>
              <antd.Avatar
                fallback={React.createElement("img", { src: this.blank, alt: '', }, null)}
                src={this.black}
                fit={'contain'}
                lazy={true}

                style={{
                  '--border-radius': this.border_radius,
                  '--size': this.chesssize,
                  "margin": this.margin
                }}
              />
            </antd.Space>
            <antd.Avatar
              fallback={React.createElement("img", { src: this.blank, alt: '', }, null)}
              src={this.black}
              fit={'contain'}
              lazy={true}

              style={{
                '--border-radius': this.border_radius,
                '--size': this.chesssize,
                "margin": this.margin
              }}
            />
          </>,
          React.createElement("h2", {
            style: {
              color: 'red',
            },
          }, ['内置棋盘未开启，可隐藏本控件']),
          React.createElement("h4", {
            style: {
              color: 'black',
            },
          }, ['不会使用本控件？打开属性面板点击底下“如何使用？”查看控件手册（左上角的黑棋是方便训练师校准的）']),
          React.createElement("a", {
            href: 'https://creation.codemao.cn/716/appcraft/IMAGE_azaL1ZGnK_1673956081477.gif',
          }, ['点击获取棋盘图片']),])
      );
    }
  }
}

types['properties'].push({
  key: 'HTMLdata',
  label: '渲染数据',
  valueType: ['string', 'number', 'boolean', 'array', 'object',],
  defaultValue: [],

})

types['properties'].push({
  key: 'rows',
  label: '棋盘边长',
  valueType: 'number',
  defaultValue: 15,

})

types['properties'].push({
  key: 'antd_avatar',
  label: '渲染棋盘（使用antd_avatar）',
  valueType: 'boolean',
  defaultValue: false,
  blockOptions: {
    generateBlock: false
  },

})

types['properties'].push({
  key: 'blank',
  label: '内置棋盘占位图',
  valueType: 'string',
  defaultValue: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',

})

types['properties'].push({
  key: 'black',
  label: '内置棋盘黑子',
  valueType: 'string',
  defaultValue: 'https://coco.codemao.cn/http-widget-proxy/https@SEP@creation.codemao.cn/716/appcraft/IMAGE_IkdvdQI2Bc_1694912188477.png',

})

types['properties'].push({
  key: 'while',
  label: '内置棋盘白子',
  valueType: 'string',
  defaultValue: 'https://coco.codemao.cn/http-widget-proxy/https@SEP@creation.codemao.cn/716/appcraft/IMAGE_kqpJld93Q_1694912188474.png',

})

types['properties'].push({
  key: 'border_radius',
  label: '内置棋盘棋子圆角',
  valueType: 'string',
  defaultValue: '4px',

})

types['properties'].push({
  key: 'chesssize',
  label: '内置棋盘棋子尺寸',
  valueType: 'string',
  defaultValue: '15px',

})

types['properties'].push({
  key: 'margin',
  label: '内置棋盘棋子边距',
  valueType: 'string',
  defaultValue: '1.5px 3.8px',

})

types['events'].push({
  key: 'onHTMLError',
  label: '内置棋盘渲染出错',
  params: [
    {
      key: 'chess_index',
      label: '棋子序',
      valueType: 'number',
    },
    {
      key: 'chess_src',
      label: '棋子图',
      valueType: 'string',
    },
    {
      key: 'message',
      label: '错误消息',
      valueType: 'string',
    }
  ],

})

types['events'].push({
  key: 'onBlockError',
  label: '程序端出错',
  params: [
    {
      key: 'Block_location',
      label: '错误标识',
      valueType: 'string',
    },
    {
      key: 'Block_message',
      label: '错误消息',
      valueType: 'string',
    },],

})

types['events'].push({
  key: 'onClick',
  label: '内置棋盘棋子被点击',
  params: [
    {
      key: 'chess_index',
      label: '棋子序',
      valueType: 'number',
    },
    {
      key: 'chess_src',
      label: '棋子图',
      valueType: 'string',
    },],

})
Widget.prototype.onClick = function (event) {

}

types['methods'].push({
  key: 'first',
  label: '初始化',
  params: [
    {
      key: 'F_team',
      label: '选定先手为',
      valueType: 'string',
      dropdown: [
        { label: '随机', value: 'unknown', },

        { label: '黑棋', value: 'team1', },

        { label: '白棋', value: 'team2', },
      ],
    },
    {
      key: 'record',
      label: '操作录制',
      valueType: 'boolean',
      defaultValue: true,
    },
    {
      key: 'debug',
      label: '调试模式',
      valueType: 'boolean',
      defaultValue: false,
    },
  ],
  tooltip: '初始化五子棋游戏，可指定先手。请务必在游戏开始前先执行本积木，否则控制积木不可用',
  blockOptions: {
    inputsInline: false
  },


})
Widget.prototype.first = function (F_team, record, debug,) {
  if (debug && !initialization && !loading) {
    loading = true
    if (this.antd_avatar) {
      var repeat_end = Math.pow(this.rows, 2);
      for (var count = 0; count < repeat_end; count++) {
        this.HTMLdata.push({ 'src': this.black })
      }
      this.setProps({ 'HTMLdata': (this.HTMLdata) });
    }
    initialization = true;
  } else {
    if (!initialization && !loading) {
      loading = true
      if (F_team == 'unknown') {
        if (mathRandomInt(0, 1) == 0) {
          nowteam = 'team1'
        } else {
          nowteam = 'team2'
        }
      } else {
        nowteam = F_team
      }
      chessdata = [];
      if (this.antd_avatar) {
        var repeat_end = Math.pow(this.rows, 2);
        for (var count = 0; count < repeat_end; count++) {
          this.HTMLdata.push({ 'src': this.blank })
          chessdata.push(0)
        }
        this.setProps({ 'HTMLdata': (this.HTMLdata) });
      } else {
        var repeat_end2 = Math.pow(this.rows, 2);
        for (var count2 = 0; count2 < repeat_end2; count2++) {
          chessdata.push(0)
        }
      }
      if (record) {
        time = new Date().getTime()
        timelist = (nowteam == 'team1' ? [0, []] : [1, []])
      }
      loading = false
      initialization = true;
    }
  }
}
types['methods'].push({
  key: 'recall',
  label: '游戏回放',
  params: [
    {
      key: 'Timelist',
      label: '回放数据',
      valueType: ['string', 'number', 'boolean', 'color', 'array', 'object'],
      defaultValue: "",
    },],


})
Widget.prototype.recall = function (Timelist,) {
  try { var timelist1 = JSON.parse(Timelist.replaceAll('，', ',')) } catch (err) {
    this.emit("onBlockError", '积木“游戏回放”', '回放数据解析失败，无法回放');
    console.error("回放数据解析失败，无法回放")
    var timelist1 = []
  }
  console.log(timelist1)
  if (Array.isArray(timelist1) && (timelist1[0] == 0 || timelist1[0] == 1)) {
    loading = true
    var repeat_end = Math.pow(this.rows, 2);
    this.HTMLdata = []
    for (var count = 0; count < repeat_end; count++) {
      this.HTMLdata.push({ 'src': this.blank })
    }
    this.setProps({ 'HTMLdata': (this.HTMLdata) })
    let step=0
    console.time(step)
    const recallgame = setInterval(() => {
      console.timeEnd(step)
      if ((step + timelist1[0]) % 2 == 0) {
        this.HTMLdata[timelist1[1][step][1] - 1] = { 'src': this.black };
      } else {
        this.HTMLdata[timelist1[1][step][1] - 1] = { 'src': this.while };
      }
      this.setProps({ 'HTMLdata': (this.HTMLdata) });
      if (step === timelist1[1].length) {
        clearInterval(recallgame);
      }
      step++
      console.time(step)
    }, timelist1[1][(step)][0]);
    loading = false
  } else {
    this.emit("onBlockError", '积木“游戏回放”', '回放数据校验失败，无法回放');
    console.error("回放数据校验失败，无法回放")
  }
}

types['methods'].push({
  key: 'todo',
  label: '',
  params: [
    {
      key: 'TODO',
      label: '不获取返回值执行',
      valueType: 'number',
      defaultValue: "",
    },],


})
Widget.prototype.todo = function (TODO,) {
  console.log(TODO);

}

types['methods'].push({
  key: 'C_play',
  label: '积木控制落子',
  params: [
    {
      key: 'C_location',
      label: '在位置',
      valueType: 'number',
      defaultValue: 15,
    },
    {
      key: 'C_team',
      label: '落',
      valueType: 'string',
      dropdown: [
        { label: '黑棋', value: 'team1', },

        { label: '白棋', value: 'team2', },
      ],
    },

  ],
  valueType: 'number',
  tooltip: '手动落子，在初始化后方可用。有返回值，使用方法请查阅手册'
})
Widget.prototype.C_play = function (C_location, C_team,) {
  try {
    if (initialization) {
      if (chessdata[C_location - 1] == 0) {
        if (C_team == 'team1') {
          if (nowteam == 'team1') {
            if (C_location > 0 && C_location <= Math.pow(this.rows, 2)) {
              this.HTMLdata[C_location - 1] = { 'src': this.black };
              chessdata[C_location - 1] = 1;
              nowteam = 'team2';
              this.setProps({ 'HTMLdata': (this.HTMLdata) });
              if (time > 0) {
                var atime = new Date().getTime()
                timelist[1].push([Number(atime - time), C_location])
                time = atime
              }
              return 0;
            } else {
              //this.emit("onBlockError", '积木“积木控制落子”', '落子请求被拒绝：落子位置不在棋盘内');
              return 6;
            }
          } else {
            //this.emit("onBlockError", '积木“积木控制落子”', '落子请求被拒绝：还没轮到黑手落子');
            return 5;
          }
        } else if (C_team == 'team2') {
          if (nowteam == 'team2') {
            if (C_location > 0 && C_location <= Math.pow(this.rows, 2)) {
              this.HTMLdata[C_location - 1] = { 'src': this.while };
              chessdata[C_location - 1] = 2;
              nowteam = 'team1';
              this.setProps({ 'HTMLdata': (this.HTMLdata) });
              if (time > 0) {
                var atime = new Date().getTime()
                timelist[1].push([Number(atime - time), C_location])
                time = atime
              }
              return 0;
            } else {
              //this.emit("onBlockError", '积木“积木控制落子”', '落子请求被拒绝：落子位置不在棋盘内');
              return 6;
            }
          } else {
            //this.emit("onBlockError", '积木“积木控制落子”', '落子请求被拒绝：还没轮到白手落子');
            return 5;
          }
        } else {
          //this.emit("onBlockError", '积木“积木控制落子”代码层面错误', '落子请求被拒绝：未知队伍');
          return 4;
        }
      } else {
        //this.emit("onBlockError", '积木“积木控制落子”', '落子请求被拒绝：当前位置已有棋子');
        return 3;
      }
    } else {
      this.emit("onBlockError", '积木“积木控制落子”', '落子请求被拒绝：请先初始化再进行游戏');
      return 2
    }
  } catch (err) {
    this.emit('onBlockError', '积木“积木控制落子”', err)
    return 1
  }
}

function check1(row, location, chesslist) {//斜线判定（边长，位置，落子数据）
  if (divisible(location, row) <= (row - 4) && location % row >= 4) {//判断是否有位置连五子
    for (var ii = 1; ii <= 5; ii += 1) {
      if (chesslist[(location - 1) + ((row + 1) * (ii - 1))] == chesslist[location - 1]) {
        if (ii == 5) {//如果五子连成
          return true
        } else {
          continue
        }
      } else {
        break
      }
    }
  }
  if (divisible(location, row) >= 5 && location % row <= 11) {//判断是否有位置连五子
    for (var ii = 1; ii <= 5; ii += 1) {
      if (chesslist[(location - 1) + ((row - 1) * (ii - 1))] == chesslist[location - 1]) {
        if (ii == 5) {//如果五子连成
          return true
        } else {
          continue
        }
      } else {
        return false
      }
    }
  }
}
types['methods'].push({
  key: 'C_judgment',
  label: '结果判定',
  params: [
    {
      key: 'chess',
      label: '落子数据',
      valueType: ['string', 'number', 'boolean', 'color', 'array', 'object'],
      defaultValue: "",
    },
    {
      key: 'J_toboard',
      label: '结果传入',
      valueType: 'boolean',
      defaultValue: false,
    },],
  valueType: 'number',
  tooltip: '根据落子数据判定胜负；有返回值，用法可查阅手册',
  blockOptions: {
    inputsInline: false
  },

})
Widget.prototype.C_judgment = function (chess, J_toboard,) {
  try { var J_chess = JSON.parse(chess.replaceAll('，', ',')) } catch (err) { var J_chess = chess.replaceAll('，', ',') }
  if (initialization && !loading) {
    loading = true;
    var i_end = Math.pow(this.rows, 2);
    var i_inc = 1;
    if (1 > i_end) {
      i_inc = -i_inc;
    }
    for (i = 1; i_inc >= 0 ? i <= i_end : i >= i_end; i += i_inc) {
      if (J_chess[(i - 1)] != 0) {
        if ((i <= (this.rows) - 4 || i % (this.rows) >= 0) && J_chess[((i + 1) - 1)] == J_chess[(i - 1)] && J_chess[((i + 2) - 1)] == J_chess[(i - 1)] && J_chess[((i + 3) - 1)] == J_chess[(i - 1)] && J_chess[((i + 4) - 1)] == J_chess[(i - 1)]) {
          if (J_toboard) {
            this.HTMLdata == []
            this.setProps({ 'HTMLdata': (this.HTMLdata) });
            chessdata = [];
          }
          loading = false
          initialization = false
          return (J_chess[(i - 1)]);//右横
        } else if ((i <= (this.rows) || divisible(i, (this.rows)) <= ((this.rows) - 4)) && J_chess[((i + (this.rows)) - 1)] == J_chess[(i - 1)] && J_chess[((i + (this.rows) * 2) - 1)] == J_chess[(i - 1)] && J_chess[((i + (this.rows) * 3) - 1)] == J_chess[(i - 1)] && J_chess[((i + (this.rows) * 4) - 1)] == J_chess[(i - 1)]) {
          if (J_toboard) {
            this.HTMLdata == []
            this.setProps({ 'HTMLdata': (this.HTMLdata) });
            chessdata = [];
          }
          loading = false
          initialization = false
          return (J_chess[(i - 1)]);//下竖
        } else if (check1(this.rows, i, J_chess)) {
          if (J_toboard) {
            this.HTMLdata == []
            this.setProps({ 'HTMLdata': (this.HTMLdata) });
            chessdata = [];
          }
          loading = false
          initialization = false
          return (J_chess[(i - 1)]);//斜线
        } else {
          continue;
        }
      } else {
        continue;
      }
    }
    loading = false
    return 0;
  } else {
    loading = false
    return (-1);
  }
}

types['methods'].push({
  key: 'getChessdata',
  label: '获取落子数据',
  params: [],
  valueType: 'array',
  tooltip: ''

})
Widget.prototype.getChessdata = function () {
  return JSON.stringify(chessdata).replaceAll(',', '，');
}

types['methods'].push({
  key: 'getTimelist',
  label: '获取操作回放数据',
  params: [],
  valueType: 'array',
  tooltip: ''

})
Widget.prototype.getTimelist = function () {
  return JSON.stringify(timelist).replaceAll(',', '，');
}

exports.types = types;
exports.widget = Widget;