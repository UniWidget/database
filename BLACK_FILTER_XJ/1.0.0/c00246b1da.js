var document = this.document

const types = {
  type: 'BLACK_FILTER_XJ',
  icon: 'https://ocean.codemao.cn/appcraft/resource/icon/媒体/图片.svg',
  title: '暗黑滤镜',
  version: '1.0.0',
  author: 'XJ王大哥(2357942846)',
  isInvisibleWidget: true,
  isGlobalWidget: true,
  properties: [],
  methods: [
    {
      key: 'addFilter',
      label: '添加滤镜',
      params: [],
      blockOptions: {callMethodLabel: false}
    },
    {
      key: 'removeFilter',
      label: '删除滤镜',
      params: [],
      blockOptions: {callMethodLabel: false}
    },
  ],
  events: [],
}

class Widget extends InvisibleWidget {
  constructor(props) {super(props)}
  addFilter = () => document.getElementById('rootPlayer').style.filter = `invert(1) hue-rotate(180deg)`
  removeFilter = () => document.getElementById('rootPlayer').style.removeProperty('filter')
}

exports.types = types
exports.widget = Widget