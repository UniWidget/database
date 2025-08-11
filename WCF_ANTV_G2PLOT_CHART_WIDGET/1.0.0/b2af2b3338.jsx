var document = this.document;

const types = {
    isInvisibleWidget: false,
    type: "WCF_ANTV_G2PLOT_CHART_WIDGET",
    icon: "icon-widget-local-storage",
    title: "AntV-G2Plot万能图表",
    auther:"WCF",
    version: "1.0.0",
    isGlobalWidget: false,
    properties: [
      {
        key: '__width',
        label: '宽度',
        valueType: 'number',
        defaultValue: 200,
        blockOptions: {
          generateBlock: false,
        },
      },
      {
        key: '__height',
        label: '高度',
        valueType: 'number',
        defaultValue: 150,
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
      }
    ],
    methods: [
        {
            key: "draw",
            label: "渲染",
            params: [
                {
                    key: "type",
                    label: "图表类型",
                    valueType: "string",
                    defaultValue: "Line"
                },
                {
                    key: "data",
                    label: '数据',
                    valueType: ['object','string'],
                    defaultValue: "{}"
                },
            ]
        },
    ],
    events: [],
  };
  
class Widget extends VisibleWidget {
    constructor(props) {
        super(props);
        this.widgetLog("AntV G2Plot 万能图表 作者：WCF（QQ：1635873939）");
        this.__width = props.__width;
        this.__height = props.__height;
        this.data = props.data;
        this.id = Math.round(Math.random()*99999)+"dr";
        var s = document.createElement("script");
        s.src = "https://unpkg.com/@antv/g2plot@latest/dist/g2plot.min.js";
        s.type = "text/javascript";
        document.body.appendChild(s);
    }

    render() {
      return(
        <>
            <div id={this.id} style={{height: this.__height, width: this.__width}}></div>
        </>
    );
    }

    draw(type,data){
        try{
            const chartObj = G2Plot[type];
            const newChart = new chartObj(this.id, data);
            newChart.render();
        }catch(err){
            if(err=="ReferenceError: G2Plot is not defined"){
                this.widgetError(`渲染错误！有可能是CDN包文件未（完全）导入，请至少在屏幕打开1~3秒后再进行渲染（初次至少3~5秒）！详细错误信息为：${err}`);
            }else if(err=="TypeError: chartObj is not a constructor"){
                this.widgetError(`渲染错误！有可能是图表类型的错误，请检查“图表类型”是否填写正确（正确值例如 Line、Column、Bar、Area、Pie 等）！详细错误信息为：${err}`)
            }else{
                this.widgetError(`渲染错误！有可能是数据的错误，请检查数据是否按照类似官方文档中“new Xxx()”的第二个参数（一个字典）的格式填写正确！详细错误信息为：${err}`)
            }
        }
    }
}

exports.types = types;
exports.widget = Widget;
  