/*
 * 表单
 * 作者 青舒计
 * QQ 2635725313
 * 未经许可，禁止盗用！
*/


//这是常量
//const block = {
//    callMethodLabel: false,
//    color: 'rgb(249, 204, 55)'
//};

const types = {
    type: 'FROM_CYAN_WIDGET',
    icon: 'https://static.codemao.cn/coco/player/unstable/rkWxJC2ni.image/svg+xml?hash=FkCHHdKsXVZTC3lu8FsEFi9fHafA',
    title: '表单',
    version: '1.0.0',
    auther: '青舒计',
    isInvisibleWidget: false,
    isGlobalWidget: false,
    properties: [
        {
            key: 'name',
            label: '名字',
            valueType: 'string',
            defaultValue: 'fromName'
        },
        {
            key: 'action',
            label: '提交跳转URL',
            valueType: 'string',
            defaultValue: 'https://coco.codemao.cn/editor/'
        },
        {
            key: 'method',
            label: '提交跳转请求方法',
            valueType: 'string',
            defaultValue: 'get',
            dropdown: [
                {label: 'GET', value: 'get'},
                {label: 'POST', value: 'post'}
            ]
        },
        {
            key: 'target',
            label: '提交跳转至',
            valueType: 'string',
            defaultValue: '_blank',
            dropdown: [
                {label: '新窗口', value: '_blank'},
                {label: '相同框架', value: '_self'},
                {label: '父框架', value: '_parent'},
                {label: '整个窗口', value: '_top'}
            ]
        },
        {
            key: 'autocomplete',
            label: '自动填充',
            valueType: 'boolean',
            defaultValue: false
        },
        {
            key: 'novalidate',
            label: '屏蔽验证',
            valueType: 'boolean',
            defaultValue: false
        },
        {
            key: 'resetTo',
            label: '重置清空',
            valueType: 'boolean',
            defaultValue: true
        },
        {
            key: 'submitTo',
            label: '提交跳转',
            valueType: 'boolean',
            defaultValue: true
        }
    ],
    methods: [
        {
            key: 'reset',
            label: '重置表单',
            params: []
        },
        {
            key: 'submit',
            label: '提交表单',
            params: []
        }
    ],
    events: [
        {
            key: 'onreset',
            label: '重置表单',
            params: [
                {
                    key: 'ofResetTo',
                    label: '是否清空',
                    valueType: 'boolean'
                }
            ]
        },
        {
            key: 'onsubmit',
            label: '提交表单',
            params: [
                {
                    key: 'ofResetTo',
                    label: '重置表单',
                    valueType: 'boolean'
                }
            ]
        }
    ]
};

class Widget extends VisibleWidget {
    constructor(props) {
        super(props);
        this.ref = undefined;
        this.widgetLog(`作者：青舒计
        编程猫：8525855
        QQ：2635725313`);
    }

    render() {
        return (
            <from
                ref={ref => this.ref = ref}
                name={this.name}
                accept-charset="UTF-8"
                action={this.action}
                method={this.method}
                target={this.target}
                autocomplete={this.autocomplete}
                novalidate={this.novalidate}
                onreset={this.onreset}
                onsubmit={this.onsubmit}
            ></from>
        );
    }

    reset = () => this.ref.reset()

    submit = () => this.ref.submit()

    onreset = () => {
        this.emit('onreset', this.resetTo);
        return this.resetTo;
    }

    onsubmit = () => {
        this.emit('onsubmit', this.submitTo);
        return this.submitTo;
    }
}

exports.types = types;
exports.widget = Widget;
