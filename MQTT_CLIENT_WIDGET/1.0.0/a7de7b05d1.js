
document = this.document;
navigator = this.navigator;
window = this.window;
document.head.appendChild(document.createElement('script')).src = 'https://unpkg.com/mqtt/dist/mqtt.min.js';

const types = {
    isInvisibleWidget: true,
    type: "MQTT_CLIENT_WIDGET",
    icon: "https://www.emqx.com/favicon.ico",
    title: "MQTT 客户端控件",
    version: "1.0.0",
    author: "刘lyxAndy",
    license: "MIT",
    platform: ["web"],
    docs: {
        url: "https://www.npmjs.com/package/mqtt"
    },
    isGlobalWidget: true,
    properties: [],
    methods: [
        {
            key: 'connect',
            label: '连接',
            params: [
                {
                    key: 'url',
                    label: 'URL',
                    valueType: 'string',
                    defaultValue: 'wss://localhost:1883',
                },
                {
                    key: 'options',
                    label: '选项',
                    valueType: 'string',
                    defaultValue: '{}',
                }
            ]
        },
        {
            key: 'reconnect',
            label: '重新连接',
            params: [],
        },
        {
            key: 'close',
            label: '关闭连接',
            params: [],
        },
        {
            key: 'subscribe',
            label: '订阅主题',
            params: [
                {
                    key: 'topic',
                    label: '主题',
                    valueType: 'string',
                    defaultValue: '',
                },
                {
                    key: 'options',
                    label: '选项',
                    valueType: 'string',
                    defaultValue: '{}',
                }
            ],
        },
        {
            key: 'unsubscribe',
            label: '取消订阅主题',
            params: [
                {
                    key: 'topic',
                    label: '主题',
                    valueType: 'string',
                    defaultValue: '',
                },
                {
                    key: 'options',
                    label: '选项',
                    valueType: 'string',
                    defaultValue: '{}',
                }
            ],
        },
        {
            key: 'publish',
            label: '发布消息',
            params: [
                {
                    key: 'topic',
                    label: '主题',
                    valueType: 'string',
                    defaultValue: '',
                },
                {
                    key: 'message',
                    label: '消息',
                    valueType: 'string',
                    defaultValue: '',
                },
                {
                    key: 'options',
                    label: '选项',
                    valueType: 'string',
                    defaultValue: '{}',
                }
            ],
        },
    ],
    events: [
        {
            key: 'connect',
            label: '连接成功',
            params: [],
        },
        {
            key: 'reconnect',
            label: '重新连接中',
            params: [],
        },
        {
            key: 'close',
            label: '连接关闭',
            params: [],
        },
        {
            key: 'error',
            label: '连接错误',
            params: [
                {
                    key: 'error',
                    label: '错误信息',
                    valueType: 'string',
                },
            ],
        },
        {
            key: 'message',
            label: '接收到消息',
            params: [
                {
                    key: 'topic',
                    label: '主题',
                    valueType: 'string',
                },
                {
                    key: 'message',
                    label: '消息',
                    valueType: 'string',
                },
            ],
        },
    ],
};

class MQTTClient extends InvisibleWidget {
    constructor(props) {
        super(props);
        this.client = null;
    }
    async connect(url, options = '{}') {
        async function isMqttImported() {
            return new Promise((resolve) => {
                setInterval(() => {
                    if (window.mqtt) {
                        resolve(true)
                    }
                }, 500)
            })
        }
        if (!(url.startsWith('ws://') || url.startsWith('wss://'))) {
            this.widgetError("The only protocol supported in browsers is MQTT over Web" + "Sockets" + ", so you must use ws:// or wss:// protocols.")
            return
        }
        options = JSON.parse(options);
        await isMqttImported();
        this.client = window.mqtt.connect(url, options);
        this.client.on('connect', () => this.emit('connect'));
        this.client.on('reconnect', () => this.emit('reconnect'));
        this.client.on('close', () => this.emit('close'));
        this.client.on('error', (error) => this.emit('error', error));
        this.client.on('message', (topic, message) => this.emit('message', topic, message.toString()));
    }
    reconnect() {
        if (this.client) {
            this.client.reconnect();
        }
    }
    close() {
        if (this.client) {
            this.client.end();
        }
    }
    subscribe(topic, options = "{}") {
        if (this.client) {
            options = JSON.parse(options)
            this.client.subscribe(topic, options);
        }
    }
    unsubscribe(topic, options = "{}") {
        if (this.client) {
            options = JSON.parse(options)
            this.client.unsubscribe(topic, options);
        }
    }
    publish(topic, message, options = "{}") {
        if (this.client) {
            options = JSON.parse(options)
            this.client.publish(topic, message, options);
        }
    }
}

exports.types = types;
exports.widget = MQTTClient;
