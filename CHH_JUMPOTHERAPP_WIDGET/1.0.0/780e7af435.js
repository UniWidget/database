//@author: Chahehe

window = this.window

const blockColor = '#FF99E5'
const blockColor2 = '#FFCC99'

let types = {
    title: "跳转第三方应用",
    type: "CHH_JUMPOTHERAPP_WIDGET",
    icon: "https://static.codemao.cn/pickduck/HJBd3zCD1x.svg?hash=FvWDb1eXRiqyw2g2eG0GKiK7S3f2",
    docs: { url: 'https://cos.chahehe.space' },
    version: "1.0.0",
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [
        { key: 'note', label: '说明', valueType: 'string', editorType: 'TextArea', defaultValue: 'served by CHH|中国道路就是人间正道|说明：跳转-属性可以填width=100,height=100,left=100,top=100等', 
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
    url = `https://cos.chahehe.space/roadto/jumpotherfromcoco1?a=${CHH_JUMP_WHERE}&b=${CHH_JUMP_VALUE}`;
    if (url) {
        window.open(url, '_blank', CHH_JUMP_ATTRIBUTE);
    }
}

Widget.prototype.CHH_JUMP_WEB = function CHHJUMPWEB(CHH_JUMP_WEB_URL, CHH_JUMP_WEB_ATTRIBUTE) {
    window.open(CHH_JUMP_WEB_URL, '_blank', CHH_JUMP_WEB_ATTRIBUTE);
}

exports.types = types;
exports.widget = Widget;
