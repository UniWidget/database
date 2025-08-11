//@author: Chahehe
//你可以自己优化。新

window = this.window

const blockColor = '#FF99E5'
const blockColor2 = '#FFCC99'
const blockColor3 = '#feac20'

let types = {
    title: "跳转第三方应用",
    type: "CHH_JUMPOTHERAPP_WIDGET",
    icon: "https://static.codemao.cn/pickduck/HJBd3zCD1x.svg?hash=FvWDb1eXRiqyw2g2eG0GKiK7S3f2",
    docs: { url: 'https://cos.chahehe.space/widget/#/page-5' },
    version: "1.0.1",
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [
        { key: 'note', label: '说明', valueType: 'string', editorType: 'TextArea', defaultValue: '中国道路就是人间正道|说明：跳转-属性可以填width=100,height=100,left=100,top=100等', 
            blockOptions: {
                generateBlock: false,
            },
        },
    ],
    methods: [
        {
            key: 'CHH_JUMP_DO',
            label: '跳转至',
            params: [
              {
                  key: 'CHH_JUMP_WHERE',
                  label: '',
                  valueType: 'string',
                  defaultValue: 'qq',
                  dropdown: [
                    { label: 'QQ', value: 'qq' },
                    { label: 'QQ好友', value: 'qqfriend' },
                    { label: 'QQ群', value: 'qqgroup' },
                    { label: 'QQ空间', value: 'qzone' },
                    { label: '微信', value: 'wechat' },
                    { label: 'Bilibili', value: 'bilibili' },
                    { label: 'B站视频', value: 'bilibilivideo' },
                    { label: '编程猫', value: 'codemaoapp' },
                    { label: '编程猫作品', value: 'codemaoappwork' },
                    { label: '淘宝搜索', value: 'taobaosearch' },
                  ],
              },
              {
                  key: 'CHH_JUMP_VALUE',
                  label: '值',
                  valueType: 'string',
                  defaultValue: '20251024',
              },
              {
                  key: 'CHH_JUMP_ATTRIBUTE',
                  label: '属性',
                  valueType: 'string',
                  defaultValue: 'width=800,height=500',
              },],
        
            blockOptions: {
            color: blockColor,
            icon: 'https://static.codemao.cn/pickduck/BkxCpGRv1l.svg?hash=Fo5tMSGH8x8PBASPUOKI2t3qwmFA',
            generateBlock: true,
            inputsInline: true,
            space: 16,
            },
        },

        {
            key: 'CHH_JUMP_WEB',
            label: '跳转网页',
            params: [
              {
                  key: 'CHH_JUMP_WEB_URL',
                  label: 'URL',
                  valueType: 'string',
                  defaultValue: 'https://szfilehelper.weixin.qq.com',
              },
              {
                  key: 'CHH_JUMP_WEB_ATTRIBUTE',
                  label: '属性',
                  valueType: 'string',
                  defaultValue: 'width=800,height=500,left=100,top=60',
              },],
        
            blockOptions: {
            color: blockColor2,
            icon: 'https://static.codemao.cn/pickduck/BkxCpGRv1l.svg?hash=Fo5tMSGH8x8PBASPUOKI2t3qwmFA',
            generateBlock: true,
            inputsInline: true,
            space: 16,
            },
        },

        {
            key: 'CHH_JUMP_DO_2',
            label: '其它跳转至',
            params: [
              {
                  key: 'CHH_JUMP_WHERE_2',
                  label: '',
                  valueType: 'string',
                  defaultValue: 'douyin',
                  dropdown: [
                    { label: '手机百度', value: 'shoujibaidu' },
                    { label: '多邻国', value: 'duolingo' },
                    { label: 'QQ浏览器', value: 'qqbrowser' },
                    { label: 'UC浏览器', value: 'ucbrowser' },
                    { label: '米家', value: 'mihome' },
                    { label: '拼多多', value: 'pinduoduo' },
                    { label: '淘宝', value: 'taobao' },
                    { label: '京东', value: 'jingdong' },
                    { label: '抖音', value: 'duoyin' },
                    { label: '钉钉', value: 'dingding' },
                  ],
              },
            ],
        
            blockOptions: {
            color: blockColor,
            icon: 'https://static.codemao.cn/pickduck/BkxCpGRv1l.svg?hash=Fo5tMSGH8x8PBASPUOKI2t3qwmFA',
            generateBlock: true,
            inputsInline: true,
            space: 16,
            },
        },

        {
            key: 'CHH_JUMP_DO_3',
            label: '微信跳转至',
            params: [
              {
                  key: 'CHH_JUMP_WHERE_3',
                  label: '',
                  valueType: 'string',
                  defaultValue: 'pengyouquan',
                  dropdown: [
                    { label: '付款码', value: 'fukuanma' },
                    { label: '扫一扫', value: 'saoyisao' },
                    { label: '朋友圈', value: 'pengyouquan' },
                    { label: '设置', value: 'shezhi' },
                    { label: '公众号', value: 'gongzhonghao' },
                    { label: '个人信息', value: 'gerenxinxi' },
                  ],
              },
            ],
        
            blockOptions: {
            color: blockColor,
            icon: 'https://static.codemao.cn/pickduck/BkxCpGRv1l.svg?hash=Fo5tMSGH8x8PBASPUOKI2t3qwmFA',
            generateBlock: true,
            inputsInline: true,
            space: 16,
            },
        },

        {
            key: 'CHH_JUMP_DO_4',
            label: '支付宝跳转至',
            params: [
              {
                  key: 'CHH_JUMP_WHERE_4',
                  label: '',
                  valueType: 'string',
                  defaultValue: 'asaoyisao',
                  dropdown: [
                    { label: '扫一扫', value: 'asaoyisao' },
                    { label: '滴滴出行', value: 'adidichuxing' },
                    
                  ],
              },
            ],
        
            blockOptions: {
            color: blockColor,
            icon: 'https://static.codemao.cn/pickduck/BkxCpGRv1l.svg?hash=Fo5tMSGH8x8PBASPUOKI2t3qwmFA',
            generateBlock: true,
            inputsInline: true,
            space: 16,
            },
        },

        {
            key: 'CHH_JUMP_DO_DIY',
            label: '自定义跳转',
            params: [
              {
                  key: 'CHH_JUMP_DIY_URL',
                  label: '',
                  valueType: 'string',
                  defaultValue: '你的网站',
              },
              {
                key: 'CHH_JUMP_WHERE_DIY',
                label: '跳转至',
                valueType: 'string',
                defaultValue: 'qq',
              },
              {
                key: 'CHH_JUMP_VALUE_DIY',
                label: '值',
                valueType: 'string',
                defaultValue: '20251024',
              },
            ],
        
            blockOptions: {
            color: blockColor,
            icon: 'https://static.codemao.cn/pickduck/BkxCpGRv1l.svg?hash=Fo5tMSGH8x8PBASPUOKI2t3qwmFA',
            generateBlock: true,
            inputsInline: true,
            space: 16,
            },
        },

        {
            key: 'CHH_JUMP_DO_PRO',
            label: '自定义PRO跳转',
            params: [
              {
                  key: 'CHH_JUMP_DO_PRO_1',
                  label: 'page',
                  valueType: 'string',
                  defaultValue: 'https://static.codemao.cn/pickduck/rJ6lqvyu1g.html?hash=FoNfEbyD_xxoHewD9LaKk4H2ngcE',
              },
              {
                  key: 'CHH_JUMP_DO_PRO_2',
                  label: 'UrlScheme',
                  valueType: 'string',
                  defaultValue: 'nemo://com.codemao.nemo/openwith',
              },
              {
                  key: 'CHH_JUMP_DO_PRO_3',
                  label: '图标',
                  valueType: 'string',
                  defaultValue: 'https://static.codemao.cn/pickduck/BkMilSJOye.png?hash=FnbMrLvLzx034xbJnWv37gfE8yMI',
              },],
        
            blockOptions: {
            color: blockColor3,
            icon: 'https://static.codemao.cn/pickduck/BkxCpGRv1l.svg?hash=Fo5tMSGH8x8PBASPUOKI2t3qwmFA',
            generateBlock: true,
            inputsInline: true,
            space: 16,
            },
        },

        {
            key: 'CHH_JUMP_DO_QQqun',
            label: 'QQ跳转',
            params: [
              {
                  key: 'CHH_JUMP_DIY_Qid',
                  label: '值',
                  valueType: 'string',
                  defaultValue: 'QQ号或群号',
              },
            ],
        
            blockOptions: {
            color: blockColor,
            icon: 'https://static.codemao.cn/pickduck/BkxCpGRv1l.svg?hash=Fo5tMSGH8x8PBASPUOKI2t3qwmFA',
            generateBlock: true,
            inputsInline: true,
            space: 16,
            },
        },
    ],
    events: [
        {
            key: 'CHH_JUMP_FAIL',
            label: '跳转应用失败',
            params: [],
            blockOptions: {
            color: blockColor,
            icon: 'https://static.codemao.cn/pickduck/HkaMizRDke.svg?hash=Ftiwh4MH85MtM4ccYwXko7BOZIvA',
            generateBlock: true,
            inputsInline: true,
            space: 16,
            },
        },
    ],
    platforms: ["android", "ios", "harmony"],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
          this.widgetLog('跳转的值为QQ号,群号,等');
    }
}

Widget.prototype.CHH_JUMP_DO = function CHHJUMPDO(CHH_JUMP_WHERE, CHH_JUMP_VALUE, CHH_JUMP_ATTRIBUTE) {
    let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (!isMobile) {
        console.log('此功能仅支持移动端，请在手机或平板上打开');
        this.emit("CHH_JUMP_FAIL");
        return;
    }
    let url;
    url = `https://static.codemao.cn/pickduck/ry56IT1dyx.html?hash=FmfakCADR15ITKwq6lv1K4Vb8Gvu&a=${CHH_JUMP_WHERE}&b=${CHH_JUMP_VALUE}`;
    if (url) {
        window.open(url, '_blank', CHH_JUMP_ATTRIBUTE);
    }
}

Widget.prototype.CHH_JUMP_WEB = function CHHJUMPWEB(CHH_JUMP_WEB_URL, CHH_JUMP_WEB_ATTRIBUTE) {
    window.open(CHH_JUMP_WEB_URL, '_blank', CHH_JUMP_WEB_ATTRIBUTE);
}

Widget.prototype.CHH_JUMP_DO_2 = function CHHJUMPDO2(CHH_JUMP_WHERE_2) {
    let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (!isMobile) {
        console.log('此功能仅支持移动端，请在手机或平板上打开');
        this.emit("CHH_JUMP_FAIL");
        return;
    }
    let url;
    url = `https://static.codemao.cn/pickduck/ry56IT1dyx.html?hash=FmfakCADR15ITKwq6lv1K4Vb8Gvu&a=${CHH_JUMP_WHERE_2}`;
    if (url) {
        window.open(url, '_blank');
    }
}

//weixin
Widget.prototype.CHH_JUMP_DO_3 = function CHHJUMPDO3(CHH_JUMP_WHERE_3) {
    let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (!isMobile) {
        console.log('此功能仅支持移动端，请在手机或平板上打开');
        this.emit("CHH_JUMP_FAIL");
        return;
    }
    let url;
    url = `https://static.codemao.cn/pickduck/ry56IT1dyx.html?hash=FmfakCADR15ITKwq6lv1K4Vb8Gvu&a=${CHH_JUMP_WHERE_3}`;
    if (url) {
        window.open(url, '_blank');
    }
}

//alipay
Widget.prototype.CHH_JUMP_DO_4 = function CHHJUMPDO4(CHH_JUMP_WHERE_4) {
    let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (!isMobile) {
        console.log('此功能仅支持移动端，请在手机或平板上打开');
        this.emit("CHH_JUMP_FAIL");
        return;
    }
    let url;
    url = `https://static.codemao.cn/pickduck/ry56IT1dyx.html?hash=FmfakCADR15ITKwq6lv1K4Vb8Gvu&a=${CHH_JUMP_WHERE_4}`;
    if (url) {
        window.open(url, '_blank');
    }
}

Widget.prototype.CHH_JUMP_DO_DIY = function CHHJUMPDODIY(CHH_JUMP_DIY_URL, CHH_JUMP_WHERE_DIY, CHH_JUMP_VALUE_DIY) {
    let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (!isMobile) {
        console.log('此功能仅支持移动端，请在手机或平板上打开');
        this.emit("CHH_JUMP_FAIL");
        return;
    }
    let url;
    url = `${CHH_JUMP_DIY_URL}?a=${CHH_JUMP_WHERE_DIY}&b=${CHH_JUMP_VALUE_DIY}`;
    if (url) {
        window.open(url, '_blank');
    }
}


//pro.可以只保留这个
Widget.prototype.CHH_JUMP_DO_PRO = function CHHJUMPDOPRO(CHH_JUMP_DO_PRO_1, CHH_JUMP_DO_PRO_2, CHH_JUMP_DO_PRO_3) {
    let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (!isMobile) {
        console.log('%cApp跳转功能仅支持移动端，请在手机或平板上打开','color:#FFB6C1;');
        this.emit("CHH_JUMP_FAIL");
        return;
    }
    let url;
    url = `${CHH_JUMP_DO_PRO_1}&a=${CHH_JUMP_DO_PRO_2}&b=${CHH_JUMP_DO_PRO_3}`;
    if (url) {
        window.open(url, '_blank');
    }
}

//qqsdk
Widget.prototype.CHH_JUMP_DO_QQqun = function CHHJUMPDOQQqun(CHH_JUMP_DIY_Qid) {
    let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (!isMobile) {
        console.log('此功能仅支持移动端，请在手机或平板上打开');
        this.emit("CHH_JUMP_FAIL");
        return;
    }
    let url;
    url = `https://static.codemao.cn/pickduck/ry56IT1dyx.html?hash=FmfakCADR15ITKwq6lv1K4Vb8Gvu&a=qqqqsdk&b=${CHH_JUMP_DIY_Qid}`;
    if (url) {
        window.open(url, '_blank');
    }
}

exports.types = types;
exports.widget = Widget;
