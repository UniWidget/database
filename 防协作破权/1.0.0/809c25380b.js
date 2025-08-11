var location = this.location
var document = this.document
const types = {
  type: '防协作破权',
  icon: 'https://ocean.codemao.cn/appcraft/resource/icon/基础/禁止.svg',
  title: '防协作破权',
  isInvisibleWidget: true,
  isGlobalWidget: true,
  properties: [],
  methods: [],
  events: [],
}
class XJWidget extends InvisibleWidget {constructor(props) {super(props)}}
exports.types = types
exports.widget = XJWidget
if(location.href.toLocaleLowerCase().includes("invitecode")){document.open();location.search=""}