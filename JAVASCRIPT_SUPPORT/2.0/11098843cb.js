//Javascript支持
//Copyright © 刘lyxAndy 2022. Do not copy.
let run = eval;
function exec(code){
    var func = Function;
    return new func('return '+code)()();
}
//类型定义
const types= {
    type: 'JAVASCRIPT_SUPPORT',
    icon: 'icon-open-console-log',  //调试icon
    title: 'Javascript支持',
    author: '刘lyxAndy',
    version: '2.0',
    isInvisibleWidget: true,
    isGlobalWidget: false,
    properties: [], 
    methods: [
        {
            key: 'run',
            label: '执行',
            params: [
                {
                    key: 'script',
                    label: '代码',
                    valueType: 'string',
                    defaultValue: 'alert("Hello!")',
                },
            ],
        }
    ],
    events: [],
}

//控件实体定义
class JavascriptSupport extends InvisibleWidget {
    constructor(props)
    {
        super(props);
        this.jscode=props.jscode;   //导入js代码
    }
    run = (script) => {
        exec(script);
    }
}

exports.types=types;                //导出类型定义
exports.widget=JavascriptSupport;   //导出实体定义
