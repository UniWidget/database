////////////// The part below is from REQUIRE_ELEMENTS by liulyxandy //////////////
document = this.document;
window = this.window;
window.dynamicLoadJs = (url) => {
    return new Promise((resolve, reject) => {
        try {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;
            head.appendChild(script);
            resolve(true)
        } catch {
            reject(false)
        }
    })

}
window.dynamicLoadCSS = (url) => {
    return new Promise((resolve, reject) => {
        try {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('link');
            script.type = 'text/css';
            script.rel = 'stylesheet';
            script.href = url;
            head.appendChild(script);
            resolve(true)
        } catch {
            reject(false)
        }
    })

}
////////////// The part above is from REQUIRE_ELEMENTS by liulyxandy //////////////

const getThis = () => this

const types = {
    type: 'TRAJECTORY_MAP_WIDGET',
    icon: 'https://static.codemao.cn/pickduck/B1sJoAh_R.png?hash=Fmq0TvBCrmXfSHxEdbL7ax4huOTO',
    title: '轨迹地图',
    isInvisibleWidget: false,
    isGlobalWidget: false,
    properties: [
        {
            key: '__width', // 内置属性
            label: '宽度',
            valueType: 'number', // 数字类型
            defaultValue: 180,
        },
        {
            key: '__height', // 内置属性
            label: '高度',
            valueType: 'number', // 数字类型
            defaultValue: 180,
        },
        {
            key: 'tileurl',
            label: '瓦片数据',
            valueType: 'string',
            defaultValue: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        },
        {
            key: 'copyright',
            label: '地图版权信息',
            valueType: 'string',
            defaultValue: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }
    ],
    methods: [
        {
            key: 'dot',
            label: '创建连线上一点',
            params: [
                {
                    key: 'a',
                    label: '纬度',
                    valueType: 'number',
                    defaultValue: 0,
                },
                {
                    key: 'b',
                    label: '经度',
                    valueType: 'number',
                    defaultValue: 0,
                }
            ],
        },
    ],
    events: []
}
class Widget extends VisibleWidget {
    constructor(props) {
        super(props)
        this.__width = props.__width
        this.__height = props.__height
        this.map = null
        this.dots = []
        this.line = null
        this.tileurl = props.tileurl
        this.copyright = props.copyright
        window.dynamicLoadCSS("https://unpkg.com/leaflet@1.9.3/dist/leaflet.css")
            .then(() => {
                window.dynamicLoadJs("https://cdn.jsdelivr.net/npm/leaflet@1.9.3/dist/leaflet.js")
                    .then(() => {
                        let wait = setInterval(() => {
                            if (!getThis().L) {
                                console.log(getThis())
                                return
                            }
                            try {
                                this.map = getThis().L.map(this.__widgetId + '-MAP').setView([39, 116], 13)
                                getThis().L.tileLayer(this.tileurl, {
                                    maxZoom: 19,
                                    attribution: this.copyright
                                }).addTo(this.map);
                                this.line = getThis().L.polyline([], { color: 'red' }).addTo(this.map)
                                this.map.fitBounds(this.line.getBounds());
                                clearInterval(wait)
                                return
                            } catch (e) {
                                clearInterval(wait)
                                return
                            }
                        }, 1000)
                    })
            })
    }

    dot(a, b) {
        this.dots.push([a, b])
        this.line.setLatLngs(this.dots)
        this.map.fitBounds(this.line.getBounds());
    }

    render() {
        return (
            <div id={this.__widgetId + "-MAP"} style={{
                width: this.__width,
                height: this.__height
            }}></div>
        )
    }
}

exports.types = types
exports.widget = Widget