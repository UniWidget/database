const types = {
    type: 'WORD_TEST',
    icon: 'https://static.codemao.cn/coco/player/unstable/H1AVe_eo0.image/svg+xml?hash=Fsmdw_jCzXpdTXj_XevpOY18UMeH.svg',
    title: '敏感词检查',
    author: 'XC改版原创刘',
    version: 'V1.0.0-remake',
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [
        {
            key: 'sblst',
            label: '屏蔽词列表',
            valueType: 'array',
            defaultValue: ['cnm', '官方']
        }
    ],
    methods: [
        {
            key: 'testString',
            label: '检查合规性',
            params: [
                {
                    key: 'msg',
                    label: '文本',
                    valueType: 'string',
                    defaultValue: 'XC改良版屏蔽词检测',
                }
            ],
            valueType: 'string',
        }
    ],
    events: [],
}

class widget extends InvisibleWidget {
    constructor(props){
        super(props);
        this.sblst = props.sblst;
    };

    testString = (msg) =>{
        var sblst = [''];
        var flag = '正常'
        this.sblst.forEach((x)=>{
            if(msg.includes(x)){
                flag = '违规';
            }
        })
        //kylst.forEach((y)=>{
        //    if(msg.includes(y)){
        //        flag = '违规';
        //    }
        //})
        return flag;
    }
}

exports.types = types;
exports.widget = widget;