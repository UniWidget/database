document = this.document;

const types = {
    type: "ARCO_MESSAGE_WIDGET",
    icon: "https://arco.design/favicon.ico",
    title: "Arco Design 全局提醒",
    version: '1.0.0',
    author: '刘lyxAndy',
    docs: {
        url: "https://arco.design/vue/component/message",
    },
    license: 'MIT',
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends VisibleWidget {
    constructor(props) {
        super(props);
        this.__width = "100vw";
        this.__height = "100vh";
        this.content = props.content
        /* 灵感来自于@XJ王大哥，在此鸣谢 */
        let src = document.createElement("link");
        src.rel = "stylesheet";
        src.href = "//unpkg.com/@arco-design/web-vue/dist/arco.css";
        document.head.appendChild(src);

        src = document.createElement("script");
        src.src = "//unpkg.com/vue@3";
        src.onload = this.initArco;
        document.body.appendChild(src);
    }
    initArco = () => {
        let src = document.createElement("script");
        src.src = "//unpkg.com/@arco-design/web-vue";
        src.onload = this.init;
        document.body.appendChild(src);
    };
    init = () => {
        let x = document.createElement('div')
        x.id='app'
        document.body.appendChild(x)
        const app = Vue.createApp({});
        app.use(ArcoVue);
        app.mount("#app");
    }
}
types['methods'].push({
    key: 'info',
    label: '默认消息',
    params: [
      {
          key: 'message',
          label: '内容',
          valueType: 'string',
          defaultValue: 'Hello World!',
      },
      {
          key: 'isBottom',
          label: '是否置底',
          valueType: 'boolean',
          defaultValue: false,
      },
      {
          key: 'showClose',
          label: '是否显示关闭按钮',
          valueType: 'boolean',
          defaultValue: false,
      },
      {
          key: 'time',
          label: '显示时间',
          valueType: 'number',
          defaultValue: 3,
      },],


})
Widget.prototype.info = function (message,isBottom,showClose,time,) {
    ArcoVue.Message.info({
        content: message,
        position: isBottom?'bottom':'top',
        closable: showClose,
        duration: time*1000
    })
}
types['methods'].push({
    key: 'success',
    label: '成功消息',
    params: [
      {
          key: 'message',
          label: '内容',
          valueType: 'string',
          defaultValue: 'Hello World!',
      },
      {
          key: 'isBottom',
          label: '是否置底',
          valueType: 'boolean',
          defaultValue: false,
      },
      {
          key: 'showClose',
          label: '是否显示关闭按钮',
          valueType: 'boolean',
          defaultValue: false,
      },
      {
          key: 'time',
          label: '显示时间',
          valueType: 'number',
          defaultValue: 3,
      },],


})
Widget.prototype.success = function (message,isBottom,showClose,time,) {
    ArcoVue.Message.success({
        content: message,
        position: isBottom?'bottom':'top',
        closable: showClose,
        duration: time*1000
    })
}
types['methods'].push({
    key: 'warning',
    label: '警告消息',
    params: [
      {
          key: 'message',
          label: '内容',
          valueType: 'string',
          defaultValue: 'Hello World!',
      },
      {
          key: 'isBottom',
          label: '是否置底',
          valueType: 'boolean',
          defaultValue: false,
      },
      {
          key: 'showClose',
          label: '是否显示关闭按钮',
          valueType: 'boolean',
          defaultValue: false,
      },
      {
          key: 'time',
          label: '显示时间',
          valueType: 'number',
          defaultValue: 3,
      },],


})
Widget.prototype.warning = function (message,isBottom,showClose,time,) {
    ArcoVue.Message.warning({
        content: message,
        position: isBottom?'bottom':'top',
        closable: showClose,
        duration: time*1000
    })
}
types['methods'].push({
    key: 'error',
    label: '错误消息',
    params: [
      {
          key: 'message',
          label: '内容',
          valueType: 'string',
          defaultValue: 'Hello World!',
      },
      {
          key: 'isBottom',
          label: '是否置底',
          valueType: 'boolean',
          defaultValue: false,
      },
      {
          key: 'showClose',
          label: '是否显示关闭按钮',
          valueType: 'boolean',
          defaultValue: false,
      },
      {
          key: 'time',
          label: '显示时间',
          valueType: 'number',
          defaultValue: 3,
      },],


})
Widget.prototype.error = function (message,isBottom,showClose,time,) {
    ArcoVue.Message.error({
        content: message,
        position: isBottom?'bottom':'top',
        closable: showClose,
        duration: time*1000
    })
}
types['methods'].push({
    key: 'normal',
    label: '普通消息',
    params: [
      {
          key: 'message',
          label: '内容',
          valueType: 'string',
          defaultValue: 'Hello World!',
      },
      {
          key: 'isBottom',
          label: '是否置底',
          valueType: 'boolean',
          defaultValue: false,
      },
      {
          key: 'showClose',
          label: '是否显示关闭按钮',
          valueType: 'boolean',
          defaultValue: false,
      },
      {
          key: 'time',
          label: '显示时间',
          valueType: 'number',
          defaultValue: 3,
      },],


})
Widget.prototype.normal = function (message,isBottom,showClose,time,) {
    ArcoVue.Message.normal({
        content: message,
        position: isBottom?'bottom':'top',
        closable: showClose,
        duration: time*1000
    })
}
types['methods'].push({
    key: 'close',
    label: '关闭所有消息',
    params: [],


})
Widget.prototype.close = function () {
    ArcoVue.Message.clear()
}
exports.types = types;
exports.widget = Widget;