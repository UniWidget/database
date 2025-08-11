const types = {
    title: '表情字符互转',
    icon: 'https://static.codemao.cn/coco/player/unstable/SkebBPgyj.image/svg+xml?hash=FryDCcvUDrD6YG8VYxmug2l2_sLA',
    type: 'EMO_TO_STR',
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    methods: [
        {
            key: 'toEmo',
            label: '转表情',
            params: [
                {
                    key: 'text',
                    label: '文字',
                    valueType: 'string',
                    defaultValue: '',
                }
            ],
            valueType: 'string',
        },
        {
            key: 'toStr',
            label: '转文字',
            params: [
                {
                    key: 'emo',
                    label: '表情',
                    valueType: 'string',
                    defaultValue: '',
                }
            ],
            valueType: 'string',
        },
    ],
    events: [],
}
class Widget extends InvisibleWidget {
    constructor(props){
        super(props);
        console.log("欢迎使用 表情字符互转控件")
        console.log("作者 刘lyxAndy")
        console.log("版本 1.0.1")
        console.warn("请勿抄袭，违者可追究法律责任！")
    }
    toEmo=(text)=>{
        var reg = /\&#.*?;/g;
        var result = text.replace(reg,function(char){
            var H,L,code;
            if(char.length == 9 ){
                code = parseInt(char.match(/[0-9]+/g));
                H = Math.floor((code-0x10000) / 0x400)+0xD800;
                L = (code - 0x10000) % 0x400 + 0xDC00;
                return unescape("%u"+H.toString(16)+"%u"+L.toString(16));
            }else{
                return char;
            }
        });
        return result;
     }
    toStr=(emo)=>{ 
        var patt=/[\ud800-\udbff][\udc00-\udfff]/g; // 检测utf16字符正则 
        emo = emo.replace(patt, function(char){ 
            var H, L, code; 
            if (char.length===2) { 
                H = char.charCodeAt(0); // 取出高位 
                L = char.charCodeAt(1); // 取出低位 
                code = (H - 0xD800) * 0x400 + 0x10000 + L - 0xDC00; // 转换算法 
                return "&#" + code + ";"; 
            } else { 
                return char; 
            } 
        }); 
        return emo; 
    }
}
exports.types=types;
exports.widget=Widget;