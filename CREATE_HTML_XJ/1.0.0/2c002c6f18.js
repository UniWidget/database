const types = {
  type: 'CREATE_HTML_XJ',
  icon: 'https://ocean.codemao.cn/appcraft/resource/icon/社交/购物篮.svg',
  title: '生成HTML',
  version: '1.0.0',
  author: 'XJ王大哥(2357942846)',
  isInvisibleWidget: true,
  isGlobalWidget: true,
  properties: [],
  methods: [
    {
        key: 'img',
        label: '图片',
        params: [{key:'src',label: '链接',valueType: 'string',defaultValue:""}],
        valueType: 'string',
        blockOptions: {color: "rgb(160, 115, 255)",callMethodLabel: false}
    },
    {
        key: 'audio',
        label: '音频',
        params: [{key:'src',label: '链接',valueType: 'string',defaultValue:""}],
        valueType: 'string',
        blockOptions: {color: "rgb(160, 115, 255)",callMethodLabel: false}
    },
    {
        key: 'video',
        label: '视频',
        params: [{key:'src',label: '链接',valueType: 'string',defaultValue:""}],
        valueType: 'string',
        blockOptions: {color: "rgb(160, 115, 255)",callMethodLabel: false}
    },
    {
        key: 'a',
        label: '超链接',
        params: [
            {key:'href',label: '链接',valueType: 'string',defaultValue:""},
            {key:'text',label: '文本',valueType: 'string',defaultValue:""}
        ],
        valueType: 'string',
        blockOptions: {color: "rgb(160, 115, 255)",callMethodLabel: false}
    },
  ],
  events: [],
};

class Widget extends InvisibleWidget {
  constructor(props) {super(props)}
  img = s => `<img src="${s}">`
  audio = s => `<audio controls src="${s}"></audio>`
  video = s => `<video controls style="width:100%;" src="${s}"></video>`
  a = (h,t) => `<a href="${h}">${t}</a>`
}

exports.types = types
exports.widget = Widget