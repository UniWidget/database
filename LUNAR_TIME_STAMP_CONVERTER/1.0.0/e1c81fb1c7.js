var a = globalThis.document.createElement("script");
a.src =  ("https://cdnjs.cloudflare.com/ajax/libs/lunar-javascript/1.6.8/lunar.min.js");
globalThis.document.head.appendChild(a)
// 2024.2.7 ReducedRadius制作
/**
 * 本控件由于使用Lunar库,可能不稳定!
 */
const types = {
    isInvisibleWidget: true,
    type: "LUNAR_TIME_STAMP_CONVERTER",
    icon: 'icon-widget-date-picker',
    title: "时间戳工具库",
    version: "1.0.0",
    isGlobalWidget: false,
    properties: [],
    methods: [{
      key:"getStamp",
      label:"获取当前时间戳",
      valueType:"number",
      params:[]
    },{
      key:"Stamp2Time",
      label:"时间戳还原时间字符串",
      valueType:"string",
      params:[{
        key:"t",
        label:"时间戳",
        valueType:"number",
        defaultValue:Date.now()
      }]
    },{
      key:"Time2Stamp",
      label:"时间编码时间戳",
      valueType:"string",
      params:[{
        key:"t",
        label:"时间字符串",
        valueType:"string",
        defaultValue:new Date().toLocaleDateString()
      }]
    },{
      key:'getZone',
      label:"获取时区名称",
      valueType:"string",
      params:[]
    },{
      key:"format",
      label:"时间戳转换为自然语言",
      valueType:"string",
      params:[{
        key:"t",
        label:"时间戳",
        valueType:"number",
        defaultValue:Date.now()
      }]
    },{
      key:"lunar",
      label:'获取时间戳对应农历',
      valueType:"string",
      params:[{
        key:"t",
        label:"时间戳",
        valueType:"number",
        defaultValue:Date.now()
      },{
        key:"only",
        label:"仅日期(否则输出所有农历信息)",
        valueType:"boolean",
        defaultValue:true
      }],
      blockOptions:{
            inputsInline:false,
            line:"农历相关转换"
      }
    },{
      key:"getYearShengXiao",
      label:"获取时间戳对应生肖",
      valueType:"string",
      params:[{
        key:"t",
        label:"时间戳",
        valueType:"number",
        defaultValue:Date.now()
      }]
    },{
      key:"getLunar",
      label:"获取当前农历",
      valueType:['number',"string"],
      params:[
        {
          key:"id",
          label:"",
          valueType:"string",
          defaultValue:"Year",
          dropdown:[
              {label:"年(数值)",value:"Year"},
              {label:"月(数值,闰月以负数表示)",value:"Month"},
              {label:"日(数值)",value:"Day"},
              {label:"月名",value:"MonthInChinese"},
              {label:"日名",value:"DayInChinese"},
              {label:"干支纪时",value:"TimeInGanZhi"}
          ]
        }
      ]
    }],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
        if(!globalThis.navigator.onLine){
           this.widgetError("无法使用本功能!")
           return;
        }
        this.widgetLog("欢迎使用时间戳转换工具,该控件由于加载库,必须联网方可使用")
    }

    getStamp(){return Date.now()}
    Stamp2Time(t){return new Date(t).toLocaleString()}
    Time2Stamp(t){return new Date(t).getTime()}
    getZone(){
       var a = (new Date().getTimezoneOffset()/60);
      return (a > 0)?"西"+a+"区":(a<0?"东"+-a+"区":"中时区")
    }
    format(t){
      return new Intl.DateTimeFormat("zh-CN",{dateStyle:"full",timeStyle:"short"}).format(t)
    }
    lunar(t,only){
       if("Lunar" in globalThis){
        console.log(globalThis.Lunar.fromDate(new Date(t)))
          return (globalThis.Lunar.fromDate(new Date(t)))["to"+(only?"":"Full")+"String"]()
       }else{
        this.widgetError("控件未加载完毕,请在前加入[等待_秒]积木后重试")
       }
      
    }
    getYearShengXiao(t){
    
      if("Lunar" in globalThis){
        return globalThis.Lunar.fromDate(new Date(t)).getYearShengXiao()
     }else{
      this.widgetError("控件未加载完毕,请在前加入[等待_秒]积木后重试")
     }
    
    }
    getLunar(id){
      if("Lunar" in globalThis){
        return globalThis.Lunar.fromDate(new Date())["get"+id]()
     }else{
      this.widgetError("控件未加载完毕,请在前加入[等待_秒]积木后重试")
     }
    }



    
    
}




exports.types = types;
exports.widget = Widget;
