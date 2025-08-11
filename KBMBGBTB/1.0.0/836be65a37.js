const types = {
    isInvisibleWidget: true,
    type: "KBMBGBTB",
    icon: "https://ts1.cn.mm.bing.net/th?id=OIP-C.stFyt1ZjfZw82pbMruB49AHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    title: "文件大小转换",
    version: "1.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);

    }

}

types['methods'].push({
    key: 'zhuanhuan',
    label: '把',
    params: [
      {
          key: 'num',
          label: '',
          valueType: 'number',
          defaultValue: "",
      },
      {
          key: 'one',
          label: '',
          valueType: 'string',
          dropdown: [
    { label: 'B', value: 'B', },

    { label: 'KB', value: 'KB', },

    { label: 'MB', value: 'MB', },

    { label: 'GB', value: 'GB', },

    { label: 'TB', value: 'TB', },
  ],
      },


      {
          key: 'two',
          label: '转换为',
          valueType: 'string',
          dropdown: [
    { label: 'B', value: 'B', },

    { label: 'KB', value: 'KB', },

    { label: 'MB', value: 'MB', },

    { label: 'GB', value: 'GB', },

    { label: 'TB', value: 'TB', },
  ],
      },

],
    valueType: 'number',

})
Widget.prototype.zhuanhuan = function (num,one,two,) {
      if (one == 'B' && two == 'B') {
    return (num * Math.pow(1024, 0));} else if (one == 'B' && two == 'KB') {
    return (num / Math.pow(1024, 1));} else if (one == 'B' && two == 'MB') {
    return (num / Math.pow(1024, 2));} else if (one == 'B' && two == 'GB') {
    return (num / Math.pow(1024, 3));} else if (one == 'B' && two == 'TB') {
    return (num / Math.pow(1024, 4));} else if (one == 'KB' && two == 'B') {
    return (num * Math.pow(1024, 1));} else if (one == 'KB' && two == 'KB') {
    return (num * Math.pow(1024, 0));} else if (one == 'KB' && two == 'MB') {
    return (num / Math.pow(1024, 1));} else if (one == 'KB' && two == 'GB') {
    return (num / Math.pow(1024, 2));} else if (one == 'KB' && two == 'TB') {
    return (num / Math.pow(1024, 3));} else if (one == 'MB' && two == 'B') {
    return (num * Math.pow(1024, 2));} else if (one == 'MB' && two == 'KB') {
    return (num * Math.pow(1024, 1));} else if (one == 'MB' && two == 'MB') {
    return (num * Math.pow(1024, 0));} else if (one == 'MB' && two == 'GB') {
    return (num / Math.pow(1024, 1));} else if (one == 'MB' && two == 'TB') {
    return (num / Math.pow(1024, 2));} else if (one == 'GB' && two == 'B') {
    return (num * Math.pow(1024, 3));} else if (one == 'GB' && two == 'KB') {
    return (num * Math.pow(1024, 2));} else if (one == 'GB' && two == 'MB') {
    return (num * Math.pow(1024, 1));} else if (one == 'GB' && two == 'GB') {
    return (num * Math.pow(1024, 0));} else if (one == 'GB' && two == 'TB') {
    return (num / Math.pow(1024, 1));} else if (one == 'TB' && two == 'B') {
    return (num * Math.pow(1024, 4));} else if (one == 'TB' && two == 'KB') {
    return (num * Math.pow(1024, 3));} else if (one == 'TB' && two == 'MB') {
    return (num * Math.pow(1024, 2));} else if (one == 'TB' && two == 'GB') {
    return (num * Math.pow(1024, 1));} else if (one == 'TB' && two == 'TB') {
    return (num * Math.pow(1024, 0));} else {
    return (-1);}

}
exports.types = types;
exports.widget = Widget;
