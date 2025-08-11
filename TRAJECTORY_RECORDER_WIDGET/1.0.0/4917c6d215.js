navigator = this.navigator
const types = {
    type: 'TRAJECTORY_RECORDER_WIDGET',
    icon: 'https://static.codemao.cn/pickduck/B1sJoAh_R.png?hash=Fmq0TvBCrmXfSHxEdbL7ax4huOTO',
    title: '运动轨迹记录器',
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    methods: [
        {
            key: 'startRecord',
            label: '开始记录',
            params: [
                {
                    key: 'ms',
                    label: '缓存时间(毫秒)',
                    valueType: 'number',
                    defaultValue: 5000,    // 默认5秒
                },
                {
                    key: 'timeout',
                    label: '超时时间(毫秒)',
                    valueType: 'number',
                    defaultValue: 5000,    // 默认5秒
                },
                {
                    key: 'enableHighAccuracy',
                    label: '启用高精度',
                    valueType: 'boolean',
                    defaultValue: true,
                }
            ],
        },
        {
            key: 'stopRecord',
            label: '停止记录',
            params: [],
        },
        {
            key: 'getRecord',
            label: '获取记录',
            params: [],
            valueType: 'string'
        },
        {
            key: 'clearRecord',
            label: '清空记录',
            params: [],
        },
    ],
    events: [
        {
            key: 'receiveNew',
            label: '收到新数据',
            params: [
                {
                    key: 'timestamp',
                    label: '时间戳',
                    valueType: 'number',
                },
                {
                    key: 'latitude',
                    label: '纬度',
                    valueType: 'number',
                },
                {
                    key: 'longitude',
                    label: '经度',
                    valueType: 'number',
                },
                {
                    key: 'accuracy',
                    label: '经纬度精度(米)',
                    valueType: 'number',
                },
                {
                    key: 'altitude',
                    label: '海拔(米)',
                    valueType: 'number',
                },
                {
                    key: 'altitudeAccuracy',
                    label: '海拔精度(米)',
                    valueType: 'number',
                },
                {
                    key: 'heading',
                    label: '朝向(°)',
                    valueType: 'number',
                },
                {
                    key: 'speed',
                    label: '速度(米/秒)',
                    valueType: 'number',
                },
            ],
        },
        {
            key: 'receiveError',
            label: '出现错误',
            params: [
                {
                    key: 'because',
                    label: '原因',
                    valueType: 'string',
                },
                {
                    key: 'message',
                    label: '错误信息',
                    valueType: 'string',
                }
            ],
        },
    ]
}

class Widget extends InvisibleWidget {
    constructor(props){
        super(props)
        this.id = null
        this.records = []
    }
    startRecord(ms, timeout, enableHighAccuracy){
        this.id = navigator.geolocation.watchPosition((e)=>{this.successCallback(e)}, (e)=>{this.errorCallback(e)}, {
            timeout: timeout,
            enableHighAccuracy: enableHighAccuracy,
            maximumAge: ms
        })
    }
    successCallback(pos){
        //console.log(pos)
        this.records.push({
            ...(pos.coords.toJSON()),
            timestamp: pos.timestamp
        })
        this.emit('receiveNew',
            pos.timestamp,
            pos.coords.latitude,
            pos.coords.longitude,
            pos.coords.accuracy,
            pos.coords.altitude,
            pos.coords.altitudeAccuracy,
            pos.coords.heading,
            pos.coords.speed
        )
    }
    errorCallback(err){
        this.emit('receiveError', {
            because: err.code == 1 ? '用户拒绝' : err.code == 2 ? '定位失败' : '定位超时',
            message: err.message
        })
    }
    stopRecord(){
        navigator.geolocation.clearWatch(this.id)
    }
    getRecord(){
        return JSON.stringify(this.records)
    }
    clearRecord(){
        this.records = []
    }
}

exports.types = types
exports.widget = Widget