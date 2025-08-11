/** 
 * Copyright (c) 2025, 刘lyxAndy. All rights reserved.
 * Published under MIT License (https://opensource.org/license/MIT).
 */

window = this.window

const types = {
    title: '取色器',
    icon: 'icon-filter',
    type: 'EYEDROPPER_API_WIDGET',
    isInvisibleWidget: true,
    isGlobalWidget: false,
    properties: [],
    methods: [
        {
            key: 'open',
            label: '取色',
            params: []
        }
    ],
    events: [
        {
            key: 'onColorPicked',
            label: '取色完成',
            params: [
                {
                    key: 'color',
                    label: '颜色',
                    valueType: 'string'
                }
            ]
        },
        {
            key: 'onError',
            label: '失败',
            params: [
                {
                    key: 'reason',
                    label: '原因名称',
                    valueType: 'string'
                },
                {
                    key: 'message',
                    label: '原因描述',
                    valueType: 'string'
                }
            ]
        }
    ],
}
class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
    }

    open() {
        if ('EyeDropper' in window) {
            const eye = new window.EyeDropper();
            eye.open().then(color => {
                this.emit('onColorPicked', color.sRGBHex);
            }).catch(reason => {
                this.emit('onError', reason.name, reason.message);
            });
        }
        else {
            this.emit('onError', 'NotSupportedError', '浏览器不支持EyeDropper API');
        }
    }
}

exports.types = types;
exports.widget = Widget;
