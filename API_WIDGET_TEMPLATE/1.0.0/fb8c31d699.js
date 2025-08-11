/* ApiWidgetTemplate 0.0.2*/
/* author: WiseAnswer */
/*注意！本控件并未完成，仅仅完成了API方法控件类型定义！ */
/*User defined area start*/
const TESTWIDGET = {
    /*控件的一些基本设置 */
	config: {
        /*控件名*/
		type: "APIWIDGETTEMPLATE_TEST_WIDGET",
        /*中文标题*/
		title: "Api控件模板测试控件",
        /*图标链接 */
		icon_url: "",
        /*作者 */
		author: "WiseAnswer",
        /*文档*/
		docs: ""
	},
    /*Api方法们 键名即为其key*/
	apiList: {
		Api1: {
            /*中文标题~~~*/
			title: "coco作品",
            /*Api网址*/
			url: "https://coco.codemao.cn/editor/",
            /*Api网址*/
			mothod: "get",
            /*参数，1用于类型，2用于自动生成请求,Post/Get将使用对应格式，Post使用json发送，无参数的请求无效*/
			params: {
                /*参数们 键名即为其控件类型中的key与发送请求时的key*/
				workId: {
                    /*中文标题*/
					title: "作品id",
                    /*类型*/
					type: "number",
                    /*默认值*/
				    default:"114514",
                    /*经典n选1*/
					list: [{
						title: "小红的",
						value: 114514
					},
					{
						title: "小绿的",
						value: 1919810
					}]
				}
			},
            /*返回值类型*/
			type: "string",
            /*以后将添加内部直接解析功能*/
			//returned: [""]
		}
	}/*未完成的未来的自定义函数/时间功能,
	funcList: {
		func1: {
			title: "fun1",
			params: [{
				key: "p1",
				title: "pp",
				type: "string",
			default:
				"hh",
				list: [{
					title: "hh",
					value: "hh"
				},
				{
					title: "hh1",
					value: "hh1"
				}]
			}],
			type: "string"
		}
	}*/
};
/*使用这一函数自动生成并导出控件*/
init_Widget(TESTWIDGET);
/*User defined area end*/


































/*Do not modify the following!*/

function init_Widget(t){console.log(t);var i={type:"API_WIDGET_TEMPLATE",icon:"https://static.codemao.cn/appcraft/extension-widgets/production/blink-button.svg",title:"API控件模板",isInvisibleWidget:!0,isGlobalWidget:!0,properties:[],methods:[],events:[]};class e extends InvisibleWidget{constructor(t){super(t)}}if("object"!=typeof t){console.error("ApiWidgetTmplate.init_Widget():param Config is not a object");return}if("config"in t)for(var a=[["type","type"],["title","title"],["icon","icon_url"],["author","author"],["docs","docs"]],r=0;r<a.length;r++)a[r][1]in t.config&&(i[a[r][0]]=t.config[a[r][1]]);if("apiList"in t)for(var o in t.apiList){console.log("ApiWidgetTmplate.init_Widget():setting:"+o);var n={key:"key"+Math.floor(1e4*Math.random()),label:"label"+Math.floor(1e4*Math.random()),params:[],valueType:"string"};for(var l in n.key=o,"title"in t.apiList[o]?n.label=t.apiList[o].title:console.warn("ApiWidgetTmplate.init_Widget():Api "+o+" does not have 'title'"),"type"in t.apiList[o]?n.valueType=t.apiList[o].type:console.warn("ApiWidgetTmplate.init_Widget():Api "+o+" does not have 'type'"),t.apiList[o].params){console.log("ApiWidgetTmplate.init_Widget():setting param:"+l);var p=init_Widget_GetFormatParamTerm(l,t.apiList[o].params[l]);console.log("ApiWidgetTmplate.init_Widget():formatParamTerm:"+l,p),n.params.push(p)}console.log("ApiWidgetTmplate.init_Widget():formatTerm "+o,n),i.methods.push(n)}console.log("WidgetType: ",i),exports.types=i,exports.widget=e}function init_Widget_GetFormatParamTerm(t,i){var e={key:"param"+Math.floor(1e4*Math.random()),label:"param"+Math.floor(1e4*Math.random()),valueType:"string",defaultValue:""};if("object"!=typeof i)return console.error("ApiWidgetTmplate.js::init_Widget_GetFormatParamTerm():param UnFormatParma is not a object"),e;if(e.key=t,"title"in i?e.label=i.title:console.warn("ApiWidgetTmplate.js::init_Widget_GetFormatParamTerm():Param does not have 'title'"),"default"in i?e.defaultValue=i.default:console.warn("ApiWidgetTmplate.js::init_Widget_GetFormatParamTerm():Param does not have 'default'"),"list"in i){e.dropdown=[];for(var a=0;a<i.list.length;a++){var r={label:i.list[a].title,value:i.list[a].value};console.log("ApiWidgetTmplate.js::init_Widget_GetFormatParamTerm():Dropdown List:",r),e.dropdown.push(r)}}else console.warn("ApiWidgetTmplate.js::init_Widget_GetFormatParamTerm():Param does not have 'list'");return e}