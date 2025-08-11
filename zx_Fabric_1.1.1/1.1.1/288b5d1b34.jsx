//制作：ZX
var window = this.window;
var is_can_shuofang = true;
var initialDistance;
var canvas = {};
window.dynamicLoadJs = (url) => {
    return new Promise((resolve, reject) => {
        try {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;
            head.appendChild(script);
            setTimeout(() => {
                resolve(true)
            }, 1000)
        } catch {
            reject(false)
        }
    })

}
var document = this.document
const types = {
    isInvisibleWidget: false,
    type: "zx_Fabric_1.1.1",
    icon: "",
    title: "zx_超级画布",
    version: "1.1.1",
    isGlobalWidget: false,
    properties: [
        {
            key: 'scenewidth',
            label: '宽度',
            valueType: 'number',
            defaultValue: 200,
        },
        {
            key: 'sceneheight',
            label: '宽度',
            valueType: 'number',
            defaultValue: 300,
        },
        {
            key: '__width',
            label: '宽度',
            valueType: 'number',
            defaultValue: 200,
            blockOptions: {
                generateBlock: false,
            },
        },
        {
            key: '__height',
            label: '高度',
            valueType: 'number',
            defaultValue: 150,
            blockOptions: {
                generateBlock: false,
            },
        },
        {
            key: '__size',
            label: '',
            valueType: 'number',
            defaultValue: 0,
            readonly: true,
            blockOptions: {
                setter: {
                    keys: ['__height', '__width'],
                },
                getter: {
                    keys: ['__height', '__width'],
                },
            },
        },
    ],
    methods: [],
    events: [],
};
class Widget extends VisibleWidget {
    constructor(props) {
        super(props);
        this.__width = props.__width;
        this.__height = props.__height;
    }
    render() {
        return (
            <>
                <canvas id="zx_f_c_superhero" width={this.__width} height={this.__height} style={{ border: "1px solid #ccc" }} > </canvas>

            </>

        )
    }
}
types['events'].push({
    key: 'ok_chushihua',
    label: '初始化完成',
    params: [],

})
types['events'].push({
    key: 'not_chushihua',
    label: '初始化失败',
    params: [],

})
// types['events'].push({
//     key: 'click_fabric',
//     label: '画布被点击',
//     params: [
//         {
//             key: 'x',
//             label: 'x',
//             valueType: 'number',
//         },
//         {
//             key: 'y',
//             label: 'y',
//             valueType: 'number',
//         },
//     ],

// })
types['events'].push({
    key: 'object_click',
    label: '画布内对象被点击',
    params: [
        {
            key: 'object_id',
            label: '对象索引',
            valueType: 'number',
        },
    ],

})
types['methods'].push({
    key: 'chushihua',
    label: '初始化',
    params: [
        {
            key: 'color',
            label: '背景色',
            valueType: 'string',
            defaultValue: '#00000000'
        },
        {
            key: 'isStaticCanvas',
            label: '是否可交互',
            valueType: 'boolean',
            defaultValue: true,

        },
    ],
})

Widget.prototype.chushihua = async function (color, isStaticCanvas) {
    if (await window.dynamicLoadJs('https://static.codemao.cn/pickduck/r1jxb24Zkg.js?hash=FllUvgQwBrFZZGRzVbWV1GHqvFI_')) {
        if (isStaticCanvas) {
            canvas = new fabric.Canvas('zx_f_c_superhero', {
                backgroundColor: color,
                panning: true,
            })
        }
        else {
            canvas = new fabric.StaticCanvas('zx_f_c_superhero', {
                backgroundColor: color,
                panning: true, //实验性
            })
        }
        this.emit('click_fabric', 0, 0)
        canvas.on('mouse:down', e => { // 鼠标按下时触发
            var target = canvas.findTarget(e.e);
            this.emit('object_click', canvas.getObjects().indexOf(target))
        })
        //设置缩放事件
        // canvas.on('canvas:scaling', function (options) {
        //     this.emit('click_fabric', 2, 2)
        // });
        // canvas.on('touch:gesture', function (opt) {
        //     this.emit('click_fabric', 1, 1)
        //     var e = opt.e;
        //     if (e.scale !== 1) {
        //         var zoom = canvas.getZoom() * e.scale;
        //         canvas.setZoom(zoom);
        //         console.log('Canvas zoom:', zoom);
        //         e.preventDefault();
        //         e.stopPropagation();
        //     }
        // });
        // canvas.on('touch:start', function (e) {
        //     this.emit('click_fabric', 1, 1)
        //     if (e.e.touches.length === 2) {
        //         var point1 = e.e.touches[0];
        //         var point2 = e.e.touches[1];

        //         // 计算两点之间的距离
        //         initialDistance = Math.sqrt(
        //             (point1.pageX - point2.pageX) * (point1.pageX - point2.pageX) +
        //             (point1.pageY - point2.pageY) * (point1.pageY - point2.pageY)
        //         );
        //     }
        // });
        // canvas.on('touch:move', function (e) {
        //     this.emit('click_fabric', 2, 2)
        //     if (e.e.touches.length === 2 && is_can_shuofang) {
        //         // 获取两个触摸点
        //         var point1 = e.e.touches[0];
        //         var point2 = e.e.touches[1];
        //         console.log('333333', point1.pageX, point2.pageX);
        //         console.log('333333', point1.pageY, point2.pageY);

        //         // 计算移动后的两点之间的距离
        //         var newDistance = Math.sqrt(
        //             (point1.pageX - point2.pageX) * (point1.pageX - point2.pageX) +
        //             (point1.pageY - point2.pageY) * (point1.pageY - point2.pageY)
        //         );
        //         // 计算缩放比例
        //         var scale = newDistance / initialDistance;
        //         // 获取当前画布的缩放级别
        //         var currentScale = canvas.getZoom();
        //         // 应用新的缩放级别
        //         canvas.zoomToPoint(
        //             {
        //                 x: (point1.pageX + point2.pageX) / 2,
        //                 y: (point1.pageY + point2.pageY) / 2
        //             },
        //             currentScale * scale);
        //         // 重置初始距离
        //         initialDistance = newDistance;
        //         // 更新画布，重新渲染
        //         canvas.renderAll();
        //     }
        // });
        // canvas.on('mouse:down', opt => { // 鼠标按下时触发
        //     let evt = opt.e
        //     this.emit('click_fabric', 2, 2)

        //     if (evt.altKey === true) { // 是否按住alt
        //         canvas.isDragging = true // isDragging 是自定义的，开启移动状态
        //         canvas.lastPosX = evt.clientX // lastPosX 是自定义的
        //         canvas.lastPosY = evt.clientY // lastPosY 是自定义的
        //     }
        // })
        // canvas.on('mouse:move', opt => { // 鼠标移动时触发
        //     if (canvas.isDragging) {
        //         let evt = opt.e
        //         let vpt = canvas.viewportTransform // 聚焦视图的转换
        //         vpt[4] += evt.clientX - canvas.lastPosX
        //         vpt[5] += evt.clientY - canvas.lastPosY
        //         canvas.requestRenderAll() // 重新渲染
        //         canvas.lastPosX = evt.clientX
        //         canvas.lastPosY = evt.clientY
        //     }
        // })

        // canvas.on('mouse:up', opt => { // 鼠标松开时触发
        //     canvas.setViewportTransform(canvas.viewportTransform) // 设置此画布实例的视口转换  
        //     canvas.isDragging = false // 关闭移动状态
        // })
        // canvas.on('drag:move', e => {
        //     console.log('555', e);
        //     this.emit('click_fabric', 4, e.clientX)

        // })
        this.emit('ok_chushihua')
    }
    else {
        this.emit('not_chushihua')

    }
}
types['methods'].push({
    key: 'set_isDrawingMode',
    label: '设置是否可自由作画',
    params: [
        {
            key: 'isDrawingMode',
            label: '是否',
            valueType: 'boolean',
            defaultValue: false,

        },
    ],
})

Widget.prototype.set_isDrawingMode = function (isDrawingMode) {
    canvas.isDrawingMode = isDrawingMode
}

types['methods'].push({
    key: 'set_freeDrawingBrush_width',
    label: '设置自由画笔宽度',
    params: [
        {
            key: 'width',
            label: '宽',
            valueType: 'number',
            defaultValue: 10,
        },
    ],
})

Widget.prototype.set_freeDrawingBrush_width = function (width) {
    canvas.freeDrawingBrush.width = width

}

types['methods'].push({
    key: 'set_freeDrawingBrush_strokeDashArray',
    label: '设置自由画笔为虚线',
    params: [
        {
            key: 'strokeDashArray_chang',
            label: '虚线长',
            valueType: 'number',
            defaultValue: 10,
        },
        {
            key: 'strokeDashArray_kong',
            label: '空隔',
            valueType: 'number',
            defaultValue: 10,
        },
    ],
})

Widget.prototype.set_freeDrawingBrush_strokeDashArray = function (strokeDashArray_chang, strokeDashArray_kong) {
    canvas.freeDrawingBrush.strokeDashArray = [strokeDashArray_chang, strokeDashArray_kong]
}


types['methods'].push({
    key: 'set_freeDrawingBrush_color',
    label: '设置自由画笔颜色',
    params: [
        {
            key: 'color',
            label: '颜色',
            valueType: 'string',
            defaultValue: '#ffffff',
        },
    ],
})

Widget.prototype.set_freeDrawingBrush_color = function (color) {
    canvas.freeDrawingBrush.color = color
}

types['methods'].push({
    key: 'set_freeDrawingBrush_shadow',
    label: '设置自由画笔阴影',
    params: [
        {
            key: 'blur',
            label: '模糊度',
            valueType: 'number',
            defaultValue: 10,
        },
        {
            key: 'ox',
            label: 'x偏移',
            valueType: 'number',
            defaultValue: 10,
        },
        {
            key: 'oy',
            label: 'y偏移',
            valueType: 'number',
            defaultValue: 10,
        },
        {
            key: 'is_affectStroke',
            label: '是否影响其他笔画',
            valueType: 'boolean',
            defaultValue: true,
        },
        {
            key: 'color',
            label: '颜色',
            valueType: 'string',
            defaultValue: '#30e3ca',
        },
    ],
})

Widget.prototype.set_freeDrawingBrush_shadow = function (blur, ox, oy, is_affectStroke, color) {
    canvas.freeDrawingBrush.shadow = new fabric.Shadow({
        blur: blur,
        offsetX: ox,
        offsetY: oy,
        affectStroke: is_affectStroke,
        color: color
    })
}

types['methods'].push({
    key: 'set_freeDrawingBrush_velocityFilterWeight',
    label: '设置自由画笔平滑绘图权重(详见文档)',
    params: [
        {
            key: 'value',
            label: '权重',
            valueType: 'number',
            defaultValue: 0.7,
        },
    ],
})

Widget.prototype.set_freeDrawingBrush_velocityFilterWeight = function (value) {
    canvas.freeDrawingBrush.velocityFilterWeight = value
}

types['methods'].push({
    key: 'set_freeDrawingBrush_opacity',
    label: '设置自由画笔透明度(0~1)',
    params: [
        {
            key: 'value',
            label: '透明度',
            valueType: 'number',
            defaultValue: 0.7,
        },
    ],
})

Widget.prototype.set_freeDrawingBrush_opacity = function (value) {
    canvas.freeDrawingBrush.opacity = value
}

types['methods'].push({
    key: 'set_freeDrawingBrush_selectable',
    label: '设置自由画笔绘画对象是否可选择',
    params: [
        {
            key: 'value',
            label: '透明度',
            valueType: 'boolean',
            defaultValue: true,
        },
    ],
})

Widget.prototype.set_freeDrawingBrush_selectable = function (value) {
    canvas.freeDrawingBrush.selectable = value
}

types['methods'].push({
    key: 'set_freeDrawingBrush_anybody',
    label: '设置自由画笔属性',
    params: [
        {
            key: 'name',
            label: '属性名',
            valueType: 'string',
            defaultValue: 'color',
        },
        {
            key: 'value',
            label: '属性值',
            valueType: ['string', 'number', 'boolean', 'array', 'color', 'object'],
            defaultValue: '',
        },
    ],
})

Widget.prototype.set_freeDrawingBrush_anybody = function (name, value) {
    canvas.freeDrawingBrush[name] = value
}

Widget.prototype.set_freeDrawingBrush_selectable = function (value) {
    canvas.freeDrawingBrush.selectable = value
}

types['methods'].push({
    key: 'set_zoomToPoint',
    label: '设置画布放大倍数',
    params: [
        {
            key: 'x',
            label: '放大中心点x',
            valueType: 'number',
            defaultValue: 0,
        },
        {
            key: 'y',
            label: '放大中心点y',
            valueType: 'number',
            defaultValue: 0,
        },
        {
            key: 'zoom',
            label: '放大倍数',
            valueType: 'number',
            defaultValue: 3,
        },
    ],
})

Widget.prototype.set_zoomToPoint = function (x, y, zoom,) {
    canvas.zoomToPoint(
        {
            x: x, // 鼠标x轴坐标
            y: y  // 鼠标y轴坐标
        },
        zoom // 最后要缩放的值
    )
}

types['methods'].push({
    key: 'set_ViewportTransform',
    label: '移动画布',
    params: [
        {
            key: 'x',
            label: 'x',
            valueType: 'number',
            defaultValue: 0,
        },
        {
            key: 'y',
            label: 'y',
            valueType: 'number',
            defaultValue: 0,
        },

    ],
})

Widget.prototype.set_ViewportTransform = function (x, y) {
    let vpt = canvas.viewportTransform
    vpt[4] += x
    vpt[5] += y
    canvas.requestRenderAll() // 重新渲染
    canvas.setViewportTransform(canvas.viewportTransform) // 设置此画布实例的视口转换  
}

types['methods'].push({
    key: 'create_rect',
    label: '创建矩形',
    params: [
        {
            key: 'height',
            label: '长',
            valueType: 'number',
            defaultValue: 100,
        },
        {
            key: 'width',
            label: '宽',
            valueType: 'number',
            defaultValue: 100,

        },
        {
            key: 'top',
            label: '距顶距离',
            valueType: 'number',
            defaultValue: 10,

        },
        {
            key: 'left',
            label: '距左距离',
            valueType: 'number',
            defaultValue: 10,

        },
        {
            key: 'fill',
            label: '颜色',
            valueType: 'string',
            defaultValue: '#000',

        },
        {
            key: 'rx',
            label: 'x圆角',
            valueType: 'number',
            defaultValue: 10,

        },
        {
            key: 'ry',
            label: 'y圆角',
            valueType: 'number',
            defaultValue: 10,

        },
    ],
})

Widget.prototype.create_rect = async function (width, height, top, left, fill, rx, ry) {
    var rect = new fabric.Rect({
        top: top,
        left: left,
        width: width,
        height: height,
        fill: fill,
        rx: rx,
        ry: ry,
    })
    canvas.add(rect)
}

types['methods'].push({
    key: 'create_Circle',
    label: '创建圆形',
    params: [
        {
            key: 'radius',
            label: '半径',
            valueType: 'number',
            defaultValue: 100,

        },
        {
            key: 'top',
            label: '距顶距离',
            valueType: 'number',
            defaultValue: 10,

        },
        {
            key: 'left',
            label: '距左距离',
            valueType: 'number',
            defaultValue: 10,

        },
        {
            key: 'fill',
            label: '颜色',
            valueType: 'string',
            defaultValue: '#000',

        },
    ],
})

Widget.prototype.create_Circle = async function (radius, top, left, fill) {
    var circle = new fabric.Circle({
        top: top,
        left: left,
        radius: radius,
        fill: fill,
    })
    canvas.add(circle)
}

types['methods'].push({
    key: 'create_Ellipse',
    label: '创建椭圆形',
    params: [
        {
            key: 'rx',
            label: 'x轴半径',
            valueType: 'number',
            defaultValue: 50,

        },
        {
            key: 'ry',
            label: 'y轴半径',
            valueType: 'number',
            defaultValue: 100,

        },

        {
            key: 'top',
            label: '距顶距离',
            valueType: 'number',
            defaultValue: 10,

        },
        {
            key: 'left',
            label: '距左距离',
            valueType: 'number',
            defaultValue: 10,

        },
        {
            key: 'fill',
            label: '颜色',
            valueType: 'string',
            defaultValue: '#000',

        },
    ],
})

Widget.prototype.create_Ellipse = async function (rx, ry, top, left, fill) {
    var Ellipse = new fabric.Ellipse({
        rx: rx,
        ry: ry,
        top: top,
        left: left,
        fill: fill,
    })
    canvas.add(Ellipse)
}

types['methods'].push({
    key: 'create_Triangle',
    label: '创建三角形',
    params: [
        {
            key: 'width',
            label: '底',
            valueType: 'number',
            defaultValue: 100,

        },
        {
            key: 'height',
            label: '高',
            valueType: 'number',
            defaultValue: 100,

        },

        {
            key: 'top',
            label: '距顶距离',
            valueType: 'number',
            defaultValue: 10,

        },
        {
            key: 'left',
            label: '距左距离',
            valueType: 'number',
            defaultValue: 10,

        },
        {
            key: 'fill',
            label: '颜色',
            valueType: 'string',
            defaultValue: '#000',

        },
    ],
})

Widget.prototype.create_Triangle = async function (width, height, top, left, fill) {
    var Triangle = new fabric.Triangle({
        width: width,
        height: height,
        top: top,
        left: left,
        fill: fill,
    })
    canvas.add(Triangle)
}

types['methods'].push({
    key: 'create_Line',
    label: '创建线段',
    params: [
        {
            key: 'q_x',
            label: '起点x坐标',
            valueType: 'number',
            defaultValue: 100,

        },
        {
            key: 'q_y',
            label: '起点y坐标',
            valueType: 'number',
            defaultValue: 100,

        },
        {
            key: 'z_x',
            label: '终点x坐标',
            valueType: 'number',
            defaultValue: 100,

        },
        {
            key: 'z_y',
            label: '终点y坐标',
            valueType: 'number',
            defaultValue: 100,

        },
        {
            key: 'fill',
            label: '颜色',
            valueType: 'string',
            defaultValue: '#000',

        },
    ],
})

Widget.prototype.create_Line = async function (q_x, q_y, z_x, z_y, fill) {
    var Line = new fabric.Line(
        [
            q_x, q_y, // 起始点坐标
            z_x, z_y // 结束点坐标
        ],
        {
            stroke: fill, // 笔触颜色
        }
    )
    canvas.add(Line)
}

types['methods'].push({
    key: 'create_Textbox',
    label: '创建文本框',
    params: [
        {
            key: 'text',
            label: '文本',
            valueType: 'string',
            defaultValue: 'zx超级画板',

        },
        {
            key: 'width',
            label: '宽',
            valueType: 'number',
            defaultValue: 100,

        },
        {
            key: 'fill',
            label: '颜色',
            valueType: 'string',
            defaultValue: '#000',

        },
        {
            key: 'fontSize',
            label: '字体大小',
            valueType: 'number',
            defaultValue: 10,
        },
        {
            key: 'fontWeight',
            label: '字体粗细',
            valueType: 'number',
            defaultValue: 400,
        },
        {
            key: 'editable',
            label: '可编辑',
            valueType: 'boolean',
            defaultValue: true,
        },
    ],
})

Widget.prototype.create_Textbox = async function (text, width, fill, fontSize, fontWeight, editable) {
    var textbox = new fabric.Textbox(text, {
        width: width,
        fontSize: fontSize,
        fontWeight: fontWeight,
        fill: fill,
        editable: editable
    })
    canvas.add(textbox)
}

types['methods'].push({
    key: 'set_object_value',
    label: '设置对象属性',
    params: [
        {
            key: 'object_id',
            label: '对象索引',
            valueType: 'number',
            defaultValue: 0,
        },
        {
            key: 'valuesname',
            label: '属性名(详见文档)',
            valueType: 'string',
            defaultValue: '',
        },
        {
            key: 'value',
            label: '设置值',
            valueType: ['string', 'number', 'boolean', 'array', 'color', 'object'],
            defaultValue: '',
        },
    ],
})

Widget.prototype.set_object_value = async function (object_id, valuesname, value) {
    canvas.getObjects()[object_id][valuesname] = value
    canvas.requestRenderAll() // 重新渲染

}

types['methods'].push({
    key: 'get_object_value',
    label: '获取对象属性',
    valueType: ['string', 'number', 'boolean', 'array', 'color', 'object'],
    params: [
        {
            key: 'object_id',
            label: '对象索引',
            valueType: 'number',
            defaultValue: 0,
        },
        {
            key: 'valuesname',
            label: '属性名(详见文档)',
            valueType: 'string',
            defaultValue: '',
        },
    ],
})

Widget.prototype.get_object_value = async function (object_id, valuesname, value) {
    return canvas.getObjects()[object_id][valuesname]
}

types['methods'].push({
    key: 'get_data_json',
    label: '获取画板json数据',
    valueType: 'string',
    params: [],
})

Widget.prototype.get_data_json = async function () {
    return JSON.stringify(canvas.toJSON())
}
types['methods'].push({
    key: 'get_data_png',
    label: '获取画板png数据',
    valueType: 'string',
    params: [],
})

Widget.prototype.get_data_png = async function () {
    var data = canvas.toDataURL('png')
    canvas.requestRenderAll()
    return data
}
types['methods'].push({
    key: 'set_data_json',
    label: '载入数据',
    params: [
        {
            key: 'json',
            label: 'json',
            valueType: 'string',
            defaultValue: '',
        },
    ],
})

Widget.prototype.set_data_json = async function (json) {
    canvas.loadFromJSON(JSON.parse(json))
}
exports.types = types;
exports.widget = Widget;
