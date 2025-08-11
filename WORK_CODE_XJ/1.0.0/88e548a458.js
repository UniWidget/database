var 密码 = ''

var window = this.window
var location = this.location
var document = this.document
const types = {
  type: 'WORK_CODE_XJ',
  icon: 'https://ocean.codemao.cn/appcraft/resource/icon/基础/锁_关.svg',
  title: '作品密码',
  isInvisibleWidget: true,
  isGlobalWidget: true,
  properties: [],
  methods: [],
  events: [],
}
class XJWidget extends InvisibleWidget {constructor(p) {super(p)}}
exports.types = types
exports.widget = XJWidget
if(!location.pathname.includes('player')){
  if(window.prompt('请输入密码（默认为空）：') !== 密码){
    document.open()
    location.search=""
  }
}