const qq = 2635725313;//
var document = this.document;
var window = this.window;
var navigator = this.navigator;
var history = this.history;
const types = {
    isInvisibleWidget: true,
    type: "CYAN_LOCATION_WIDGET",
    icon: "https://ocean.codemao.cn/appcraft/resource/icon/基础/查询.svg",
    title: "获取URL部分",
    version: "1.0.1",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};
types.platforms=["web"];
types.auther = '青舒计';
class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
          this.widgetLog('编程猫：8525855');
  this.widgetLog('B站：1523540905');
  this.widgetLog('QQ：2635725313');
  this.widgetLog('©青舒计 精心制作');

    }

}

types['methods'].push({
    key: 'javascript_location_replace_JSLR',
    label: '跳转URL到当前页面',
    params: [
      {
          key: 'location_href_LH',
          label: 'URL',
          valueType: 'string',
          defaultValue: 'https://coco.codemao.cn',
      },],

    blockOptions: {
    color: "#E55F46",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_location_replace_JSLR = function (location_href_LH,) {
      window.location.assign(location_href_LH);

}
types['methods'].push({
    key: 'javascript_location_assign_JSLR',
    label: '跳转URL到新的页面',
    params: [
      {
          key: 'location_href_LH',
          label: 'URL',
          valueType: 'string',
          defaultValue: 'https://coco.codemao.cn',
      },],

    blockOptions: {
    color: "#E55F46",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_location_assign_JSLR = function (location_href_LH,) {
      window.open(location_href_LH);

}
types['methods'].push({
    key: 'javascript_location_reload_JSLR',
    label: '刷新当前URL',
    params: [
      {
          key: 'location_href_LH',
          label: '不使用缓存',
          valueType: 'boolean',
          defaultValue: true,
      },],

    blockOptions: {
    color: "#E55F46",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 48,
},
})
Widget.prototype.javascript_location_reload_JSLR = function (location_href_LH,) {
      window.location.reload(location_href_LH);

}
types['methods'].push({
    key: 'javascript_location_href_JSLH_is',
    label: '设置当前URL网址',
    params: [
      {
          key: 'location_L',
          label: '为',
          valueType: 'string',
          defaultValue: 'https://coco.codemao.cn',
      },],

    blockOptions: {
    color: "#E55F46",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_location_href_JSLH_is = function (location_L,) {
      window.location.href=location_L;

}
types['methods'].push({
    key: 'javascript_location_search_JSLS_is',
    label: '设置当前URL参数',
    params: [
      {
          key: 'location_L',
          label: '为',
          valueType: 'string',
          defaultValue: '?key=value',
      },],

    blockOptions: {
    color: "#E55F46",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_location_search_JSLS_is = function (location_L,) {
      window.location.search=location_L;

}
types['methods'].push({
    key: 'javascript_location_pathname_JSLP_is',
    label: '设置当前URL路径',
    params: [
      {
          key: 'location_L',
          label: '为',
          valueType: 'string',
          defaultValue: '/value',
      },],

    blockOptions: {
    color: "#E55F46",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_location_pathname_JSLP_is = function (location_L,) {
      window.location.pathname=location_L;

}
types['methods'].push({
    key: 'javascript_location_hash_JSLH_is',
    label: '设置当前URL锚点',
    params: [
      {
          key: 'location_L',
          label: '为',
          valueType: 'string',
          defaultValue: '#value',
      },],

    blockOptions: {
    color: "#E55F46",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_location_hash_JSLH_is = function (location_L,) {
      window.location.hash=location_L;

}
types['methods'].push({
    key: 'javascript_location_hostname_JSLH_is',
    label: '设置当前URL域名',
    params: [
      {
          key: 'location_L',
          label: '为',
          valueType: 'string',
          defaultValue: 'coco.codemao.cn',
      },],

    blockOptions: {
    color: "#E55F46",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_location_hostname_JSLH_is = function (location_L,) {
      window.location.hostname=location_L;

}
types['methods'].push({
    key: 'javascript_location_protocol_JSLP_is',
    label: '设置当前URL协议',
    params: [
      {
          key: 'location_L',
          label: '为',
          valueType: 'string',
          defaultValue: 'https:',
      },],

    blockOptions: {
    color: "#E55F46",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_location_protocol_JSLP_is = function (location_L,) {
      window.location.protocol=location_L;

}
types['methods'].push({
    key: 'javascript_location_port_JSLP_is',
    label: '设置当前URL端口',
    params: [
      {
          key: 'location_L',
          label: '为',
          valueType: 'string',
          defaultValue: '80',
      },],

    blockOptions: {
    color: "#E55F46",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 48,
},
})
Widget.prototype.javascript_location_port_JSLP_is = function (location_L,) {
      window.location.port=location_L;

}
types['methods'].push({
    key: 'javascript_location_href_JSLH',
    label: '的当前URL网址',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#E55F46",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_location_href_JSLH = function () {
      return (window.location.href);
}
types['methods'].push({
    key: 'javascript_location_search_JSLS',
    label: '的当前URL参数',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#E55F46",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_location_search_JSLS = function () {
      return (window.location.search);
}
types['methods'].push({
    key: 'javascript_location_pathname_JSLP',
    label: '的当前URL路径',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#E55F46",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_location_pathname_JSLP = function () {
      return (window.location.pathname);
}
types['methods'].push({
    key: 'javascript_location_hash_JSLH',
    label: '的当前URL锚点',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#E55F46",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_location_hash_JSLH = function () {
      return (window.location.hash);
}
types['methods'].push({
    key: 'javascript_location_hostname_JSLH',
    label: '的当前URL域名',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#E55F46",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_location_hostname_JSLH = function () {
      return (window.location.hostname);
}
types['methods'].push({
    key: 'javascript_location_protocol_JSLP',
    label: '的当前URL协议',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#E55F46",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_location_protocol_JSLP = function () {
      return (window.location.protocol);
}
types['methods'].push({
    key: 'javascript_location_port_JSLP',
    label: '的当前URL端口',
    params: [],
    valueType: 'string',
    blockOptions: {
    color: "#E55F46",
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.javascript_location_port_JSLP = function () {
      return (window.location.port);
}
exports.types = types;
exports.widget = Widget;
