navigator = this.navigator
function arrayBufferToString(buffer) {
    return String.fromCharCode.apply(null, new Uint8Array(buffer))
}
const types = {
    isInvisibleWidget: true,
    type: "WEB_BLUETOOTH_WIDGET",
    icon: "https://www.bluetooth.com/wp-content/themes/bluetooth/images/logos/bluetooth-icon-black.svg",
    title: "Web Bluetooth 控件",
    version: "1.2.0",
    author: "刘lyxAndy",
    license: "MIT",
    platform: ["web"],
    docs: {
        url: "https://coco.codemao.cn/editor/?playerBcmUrl=https://creation.codemao.cn/716/appcraft/JSON_mV8ecjt_K_1713672164357.json"
    },
    isGlobalWidget: true,
    properties: [],
    methods: [
        {
            key: 'isBluetoothAvailable',
            label: '检测是否启用蓝牙',
            params: [],
            valueType: 'boolean',
        },
        {
            key: 'requestDevice',
            label: '请求设备',
            params: [
                {
                    key: 'options',
                    label: '设置',
                    valueType: 'string',
                    defaultValue: '{   "acceptAllDevices":true }',
                }
            ]
        },
        {
            key: 'getName',
            label: '获取设备名称',
            params: [],
            valueType: 'string',
        },
        {
            key: 'getId',
            label: '获取设备ID',
            params: [],
            valueType: 'string',
        },
        {
            key: 'connectGatt',
            label: '连接GATT',
            params: [],
        },
        {
            key: 'disconnectGatt',
            label: '断连GATT',
            params: [],
        },
        {
            key: 'primaryServiceGetGatt',
            label: '获取服务',
            params: [
                {
                    key: 'uuid',
                    label: 'UUID',
                    valueType: 'string',
                    defaultValue: '',
                }
            ],
        },
        {
            key: 'characteristicGetPrimaryService',
            label: '获取特征',
            params: [
                {
                    key: 'service',
                    label: '服务',
                    valueType: ['string', 'object'],
                    defaultValue: '',
                },
                {
                    key: 'characteristic',
                    label: '特征UUID',
                    valueType: 'string',
                    defaultValue: '',
                }
            ],
        },
        {
            key: 'isCharacteristicReadable',
            label: '特征可读？',
            params: [
                {
                    key: 'characteristic',
                    label: '特征对象',
                    valueType: ['string', 'object'],
                    defaultValue: '',
                }
            ],
            valueType: 'boolean',
        },
        {
            key: 'isCharacteristicWriteable',
            label: '特征可写？',
            params: [
                {
                    key: 'characteristic',
                    label: '特征对象',
                    valueType: ['string', 'object'],
                    defaultValue: '',
                }
            ],
            valueType: 'boolean',
        },
        {
            key: 'getCharacteristicUUID',
            label: '获取已有特征UUID',
            params: [
                {
                    key: 'characteristic',
                    label: '特征对象',
                    valueType: ['string', 'object'],
                    defaultValue: '',
                }
            ],
            valueType: 'string',
        },
        {
            key: 'getCharacteristicValue',
            label: '已有特征值',
            params: [
                {
                    key: 'characteristic',
                    label: '特征对象',
                    valueType: ['string', 'object'],
                    defaultValue: '',
                }
            ],
            valueType: 'string',
        },
        {
            key: 'readCharacteristicValue',
            label: '读取已有特征值',
            params: [
                {
                    key: 'characteristic',
                    label: '特征对象',
                    valueType: ['string', 'object'],
                    defaultValue: '',
                },
                {
                    key: 'type',
                    label: '类型',
                    valueType: 'string',
                    dropdown: [
                        { label: 'str', value: 'str', },

                        { label: 'u8', value: 'u8', },

                        { label: 'u16', value: 'u16', },

                        { label: 'u32', value: 'u32', },

                        { label: 'i8', value: 'i8', },

                        { label: 'i16', value: 'i16', },

                        { label: 'i32', value: 'i32', },

                        { label: 'f32', value: 'f32', },

                        { label: 'f64', value: 'f64', },

                        { label: 'bu64', value: 'bu64', },
                    ],
                },
            ],
            valueType: 'string',
        },
        {
            key: 'writeCharacteristicValue',
            label: '写已有特征值',
            params: [
                {
                    key: 'characteristic',
                    label: '特征对象',
                    valueType: ['string', 'object'],
                    defaultValue: '',
                },
                {
                    key: 'value',
                    label: '值',
                    valueType: ['string', 'object'],
                    defaultValue: '',
                }
            ],
        }
    ],
    events: [
        {
            key: 'requestSuccess',
            label: '请求设备成功',
            params: [],
        },
        {
            key: 'requestFailed',
            label: '请求设备失败',
            params: [
                {
                    key: 'reason',
                    label: '原因',
                    valueType: 'string',
                },
            ],
        },
        {
            key: 'GATTConnectSuccess',
            label: 'GATT连接成功',
            params: [],
        },
        {
            key: 'GATTConnectFailed',
            label: 'GATT连接失败',
            params: [
                {
                    key: 'reason',
                    label: '原因',
                    valueType: 'string',
                },
            ],
        },
        {
            key: 'GATTDisconnectSuccess',
            label: 'GATT断连成功',
            params: [],
        },
        {
            key: 'GATTDisconnectFailed',
            label: 'GATT断连失败',
            params: [
                {
                    key: 'reason',
                    label: '原因',
                    valueType: 'string',
                },
            ],
        },
        {
            key: 'primaryServiceGetGattSuccess',
            label: '获取服务成功',
            params: [
                {
                    key: 'service',
                    label: '服务对象',
                    valueType: 'object',
                },
                {
                    key: 'servicename',
                    label: '服务名',
                    valueType: 'string',
                },
            ],
        },
        {
            key: 'primaryServiceGetGattFailed',
            label: '获取服务失败',
            params: [
                {
                    key: 'reason',
                    label: '原因',
                    valueType: 'string',
                },
                {
                    key: 'servicename',
                    label: '服务名',
                    valueType: 'string',
                },
            ],
        },
        {
            key: 'characteristicGetPrimaryServiceSuccess',
            label: '获取特征成功',
            params: [
                {
                    key: 'characteristic',
                    label: '特征对象',
                    valueType: 'object',
                },
                {
                    key: 'characteristicname',
                    label: '特征名',
                    valueType: 'string',
                },
            ],
        },
        {
            key: 'characteristicGetPrimaryServiceFailed',
            label: '获取特征失败',
            params: [
                {
                    key: 'reason',
                    label: '原因',
                    valueType: 'string',
                },
                {
                    key: 'characteristicname',
                    label: '特征名',
                    valueType: 'string',
                },
            ],
        },
    ],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
        this.device = null
    }
    async isBluetoothAvailable() {
        if (!'bluetooth' in navigator) {
            return false;
        }
        return await navigator.bluetooth.getAvailability()
    }
    requestDevice(options) {
        try {
            navigator.bluetooth.requestDevice(JSON.parse(options))
                .then(device => {
                    this.device = device;
                    this.emit('requestSuccess');
                })
                .catch(error => {
                    this.emit('requestFailed', error.message);
                });
        } catch (e) {
            this.emit('requestFailed', e.message);
        }
    }
    getName() {
        return this.device.name;
    }
    getId() {
        return this.device.id;
    }
    connectGatt() {
        this.device.gatt.connect()
            .then(() => {
                this.emit('GATTConnectSuccess')
            })
            .catch(error => {
                this.emit('GATTConnectFailed', error.message)
            })
    }
    disconnectGatt() {
        this.device.gatt.disconnect()
            .then(() => {
                this.emit('GATTDisconnectSuccess')
            })
            .catch(error => {
                this.emit('GATTDisconnectFailed', error.message)
            })
    }
    primaryServiceGetGatt(bluetoothServiceUUID) {
        this.device.gatt.getPrimaryService(bluetoothServiceUUID)
            .then(service => {
                this.emit('primaryServiceGetGattSuccess', service, bluetoothServiceUUID)
            })
            .catch(error => {
                this.emit('primaryServiceGetGattFailed', error.message, bluetoothServiceUUID)
            })
    }
    characteristicGetPrimaryService(service, characteristic_) {
        service.getCharacteristic(characteristic_)
            .then(characteristic => {
                this.emit('characteristicGetPrimaryServiceSuccess', characteristic, characteristic_)
            })
            .catch(error => {
                this.emit('characteristicGetPrimaryServiceFailed', error.message, characteristic_)
            })
    }
    getCharacteristicUUID(characteristic) {
        return characteristic.uuid
    }
    getCharacteristicValue(characteristic) {
        return String(characteristic.value)
    }
    async readCharacteristicValue(characteristic, type) {
        let value = await characteristic.readValue()
        if (type == 'str') {
            return arrayBufferToString(value.buffer)
        }
        if (type == 'u8') {
            return value.getUint8(0)
        }
        if (type == 'u16') {
            return value.getUint16(0, true)
        }
        if (type == 'u32') {
            return value.getUint32(0, true)
        }
        if (type == 'i8') {
            return value.getInt8(0)
        }
        if (type == 'i16') {
            return value.getInt16(0, true)
        }
        if (type == 'i32') {
            return value.getInt32(0, true)
        }
        if (type == 'f32') {
            return value.getFloat32(0, true)
        }
        if (type == 'f64') {
            return value.getFloat64(0, true)
        }
        if (type == 'bu64') {
            return value.getBigUint64(0, true)
        }
    }
    writeCharacteristicValue(characteristic, value) {
        characteristic.writeValue(stringToArrayBuffer(value))
    }
    isCharacteristicReadable(characteristic) {
        return characteristic.properties.read
    }
    isCharacteristicWriteable(characteristic) {
        return characteristic.properties.write
    }
}

exports.types = types;
exports.widget = Widget;