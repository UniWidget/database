const types = {
    isInvisibleWidget: true,
    type: "CO_MY_SQL",
    icon: "icon-widget-table-data",
    title: "CoMySQL",
    version: "1.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
        this.db = undefined;
    }

}
types['methods'].push({
    key: 'openDatabase',
    label: '连接/创建SQL数据库',
    params: [{
        key: 'dbname',
        label: '数据库名',
        valueType: 'string',
        defaultValue: "",
    },],

})
Widget.prototype.openDatabase = function (dbname,) {
    this.db = openDatabase(dbname, "0.1.0", dbname, 10240);
    if (this.db) {
        this.connected();
    } else {
        this.error_connected();
    }
}

types['methods'].push({
    key: 'excuteSql',
    label: '执行',
    params: [{
        key: 'dbname',
        label: 'SQL语句',
        valueType: 'string',
        defaultValue: "",
    },],

})
Widget.prototype.excuteSql = function (dbname,) {
    this.db.transaction((tx) => {
        tx.executeSql(dbname, [], (tx, result) => {
            var q = [];
            for (i = 0; i < result.rows.length; i++) {
                q[i] = result.rows.item(i)
            }

            this.emit("success", q, result.rows.length)
        }, (tx, error)=>{
            this.emit("errno", error.message)
        })
    })
}

types['methods'].push({
    key: 'closeDatabase',
    label: '关闭数据库连接',
    params: [],

})
Widget.prototype.closeDatabase = function () {
    this.db = undefined;
}

types['events'].push({
    key: 'connected',
    label: '成功连接数据库',
    params: [],

})
Widget.prototype.connected = function () {
    this.emit("connected");
    console.log("DATABASE CONNECTED")
}
types['events'].push({
    key: 'error_connected',
    label: '失败连接数据库',
    params: [],

})
Widget.prototype.error_connected = function () {
    this.emit("connected");
    console.log("DATABASE CONNECT ERROR")
}
types['events'].push({
    key: 'success',
    label: '执行SQL语句成功',
    params: [{
        key: 'list',
        label: '返回值列表',
        valueType: 'array',
    }, {
        key: 'length',
        label: '返回值长度（列表）',
        valueType: 'number',
    },],

})

types['events'].push({
    key: 'errno',
    label: '执行SQL语句失败',
    params: [{
        key: 'length',
        label: '错误信息',
        valueType: 'string',
    },],

})

exports.types = types;
exports.widget = Widget;
