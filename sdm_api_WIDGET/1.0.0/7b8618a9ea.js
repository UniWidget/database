const axios = require('axios');

const types = {
    isInvisibleWidget: true,
    type: "sdm_api_WIDGET",
    icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
    title: "星梦api",
    version: "1.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
        this.widgetLog('作者：旁观者JErS（训练师编号：14594926，QQ：561013124）');
        this.widgetLog('五子棋判断输赢api棋盘情况：长度为225的列表并转换为字符串类型放入，0（白方胜利），1黑方胜利），2（继续 ），3（ 平局 ）');

    }

}

types['methods'].push({
    key: 'test',
    label: '屏蔽词检测',
    params: [
        {
            key: 'text',
            label: '你要检测的内容',
            valueType: 'string',
            defaultValue: '星梦',
        },],
    valueType: 'boolean',

})
Widget.prototype.test = function (text,) {
    return new Promise((r) => {
        axios.get(('http://web.codekpy.site/test/?text=' + String(text)))
            .then((response) => {
                r((response) == '200');
            })
            .catch((error) => {
                r(false);
            });
    })

}
types['methods'].push({
    key: 'wzq',
    label: '五子棋判断输赢',
    params: [
        {
            key: 'board',
            label: '棋盘情况',
            valueType: 'string',
            defaultValue: "",
        },],
    valueType: 'number',
    blockOptions: {
        color: '#ffcc00',
        icon: '无',
        generateBlock: true,
        inputsInline: true,
        space: 16,
    },
})
Widget.prototype.wzq = function (board,) {
    return new Promise((r) => {
        axios.get(('http://huanmeng.freedn1.cf/api.php?board=' + String(board)))
            .then((response) => {
                r(response);
            })
            .catch((error) => {
                r(error);
            });
    })

}
exports.types = types;
exports.widget = Widget;
