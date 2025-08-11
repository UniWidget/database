const color = "#dfb52c"

const types = {
    type: "SLIGHTNING_GOBANG_UI",
    author: "SLIGHTNING",
    title: "五子棋界面",
    icon: "https://ts4.cn.mm.bing.net/th?id=ODLS.c256d985-0ef0-4db0-8ee9-12c0c51ceb04&w=32&h=32&qlt=92&pcl=fffffa&o=6&pid=1.2",
    version: "0.0.0",
    isInvisibleWidget: false,
    isGlobalWidget: false,
    properties: [
        {
            key: "__width",
            label: "宽度",
            valueType: "number",
            defaultValue: 300,
        }, {
            key: "__height",
            label: "高度",
            valueType: "number",
            defaultValue: 300,
        }, {
            key: "piecesState",
            label: "棋子状态",
            valueType: ["string", "array"],
            defaultValue: "",
        }
    ],
    methods: [
        {
            key: "operate",
            label: "操作",
            params: [
                {
                    key: "data",
                    label: "数据",
                    valueType: ["object", "array", "string"],
                    defaultValue: `{"operation":"empty","argument":{}}`,
                }
            ]
        }, {
            key: "empty",
            label: "清空",
            params: []
        }, {
            key: "set",
            label: "设置",
            params: [
                {
                    key: "x",
                    label: "x",
                    valueType: "number",
                    defaultValue: 1,
                }, {
                    key: "y",
                    label: "y",
                    valueType: "number",
                    defaultValue: 1
                }, {
                    key: "value",
                    label: "棋子为",
                    dropdown: [
                        { label: "无", value: null },
                        { label: "黑子", value: "black" },
                        { label: "白子", value: "white" },
                        { label: "黑子预览", value: "previewBlack" },
                        { label: "白子预览", value: "previewWhite" }
                    ]
                }, {
                    key: "count",
                    label: "计数",
                    valueType: "number",
                    defaultValue: 1
                }
            ]
        }, {
            key: "setRing",
            label: "设置",
            params: [
                {
                    key: "x",
                    label: "x",
                    valueType: "number",
                    defaultValue: 1,
                }, {
                    key: "y",
                    label: "y",
                    valueType: "number",
                    defaultValue: 1
                }, {
                    key: "value",
                    label: "环为",
                    dropdown: [
                        { label: "无", value: null },
                        { label: "反色", value: "inverse" },
                        { label: "黑色", value: "black" },
                        { label: "白色", value: "white" },
                        { label: "金色", value: "gold" }
                    ]
                }
            ]
        }, {
            key: "showFiveContiguousPieces",
            label: "展示五子连珠",
            params: [
                {
                    key: "x",
                    label: "起始于 x",
                    valueType: "number",
                    defaultValue: 1,
                }, {
                    key: "y",
                    label: "y",
                    valueType: "number",
                    defaultValue: 1
                }, {
                    key: "direction",
                    label: "方向",
                    dropdown: [
                        { label: "水平", value: "horizontal" },
                        { label: "竖直", value: "vertical" },
                        { label: "正斜", value: "forward-slant" },
                        { label: "反斜", value: "backward-slant" }
                    ]
                }
            ]
        }
    ],
    events: [
        {
            key: "onClick",
            label: "点击",
            params: [
                {
                    key: "x",
                    label: "x",
                    valueType: "number"
                }, {
                    key: "y",
                    label: "y",
                    valueType: "number"
                }
            ]
        }, {
            key: "onMouseMove",
            label: "鼠标移动",
            params: [
                {
                    key: "x",
                    label: "x",
                    valueType: "number"
                }, {
                    key: "y",
                    label: "y",
                    valueType: "number"
                }
            ]
        }
    ]
}

types.methods.forEach(method => {
    method.blockOptions = {
        color: "#977d30",
        callMethodLabel: false
    }
})

const methodMap = (() => {
    var result = {}
    types.methods.forEach(method => {
        var params = {}, map = {}
        result[method.key] = {
            params: params,
            map: map
        }
        method.params.forEach(param => {
            var {key} = param
            params[key] = param.defaultValue
            if ("dropdown" in param) {
                map[key] = param.dropdown.map(dropdown => dropdown.value)
            }
        })
    })
    return result
})()

function randomString(length=32) {
    result = ""
    for (let i = 0; i < length; i++) {
        result += "abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ"
                  [Math.floor(Math.random() * 52)]
    }
    return result
}

class range {

    constructor(start, end, step=1) {
        if (typeof (end) == "undefined") {
            end = start
            start = 0
        }
        this.start = start
        this.end = end
        this.step = step
    }

    forEach(callBack) {
        for (let i = this.start; i < this.end; i += this.step) {
            callBack(i)
        }
    }

    map(callBack) {
        var array = []
        this.forEach((count) => {
            array.push(callBack(count))
        })
        return array
    }
}

function wait(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

function createEmptyPiecesState() {
    return new range(15).map(y => {
        return createEmptyLine()
    })
}

function createEmptyLine() {
    return new range(15).map(x => {
        return createEmptyPieceState()
    })
}

function createEmptyPieceState() {
    return {
        piece: null,
        ring: null,
        count: 0
    }
}

const pieceStaceEnumerationMap = {
    piece: [null, "black", "white", "previewBlack", "previewWhite"],
    ring: [null, "black", "white", "inverse", "gold"]
}

class Widget extends VisibleWidget {

    constructor(props) {
        super(props)
        this.id = props.__widgetId
        this.piecesState = props.piecesState
        this.setSize(props.__width, props.__height)
    }

    setSize(width, height) {
        this.width = width
        this.height = height
        this.side = Math.min(width, height)
        this.lineWidth = Math.round(this.side / 300)
    }

    async operate(data) {
        data = this.typeCheckAndCorrect(data, data => typeof(data) == "object" && data != null, "操作信息", () => [])
        if (Array.isArray(data)) {
            data.forEach(data => {
                this.operate(data)
            })
        } else {
            data = this.objectCheckAndCorrect(data, {
                operation: "empty",
                arguments: {}
            }, "操作数据", {
                operation: Object.keys(methodMap)
            })
            var method = methodMap[data.operation]
            var argumentMap = this.objectCheckAndCorrect(data.arguments, method.params, "操作参数", method.map)
            switch (data.operation) {
                case "empty":
                    this.empty()
                    break
                case "set":
                    this.set(argumentMap.x, argumentMap.y, argumentMap.value, argumentMap.count)
                    break
                case "setRing":
                    this.setRing(argumentMap.x, argumentMap.y, argumentMap.value)
                    break
                case "showFiveContiguousPieces":
                    await this.showFiveContiguousPieces(argumentMap.x, argumentMap.y, argumentMap.direction)
                    break
            }
        }
    }

    empty() {
        this.setProps({piecesState: createEmptyPiecesState()})
    }

    set(x, y, value, count) {
        if (this.checkIndex(x, y)) {
            var state = this.piecesState[x - 1][y - 1]
            state.piece = value
            state.count = count
            this.setProps({piecesState: this.piecesState})
        }
    }

    setRing(x, y, value) {
        if (this.checkIndex(x, y)) {
            this.piecesState[x - 1][y - 1].ring = value
            this.setProps({piecesState: this.piecesState})
        }
    }

    async showFiveContiguousPieces(x, y, direction) {
        const add = data => data + 1
        const none = data => data
        const sub = data => data - 1
        var xTransform, yTransform, rotate
        switch (direction) {
            case "horizontal":
                xTransform = add
                yTransform = none
                rotate = 0
                break;
            case "vertical":
                xTransform = none
                yTransform = add
                rotate = -90
                break;
            case "forward-slant":
                xTransform = add
                yTransform = sub
                rotate = 45
                break;
            case "backward-slant":
                xTransform = add
                yTransform = add
                rotate = -45
                break;
        }
        await wait(500)
        this.setProps({stress: {
            x: xTransform(xTransform(x - 1)),
            y: yTransform(yTransform(y - 1)),
            rotate: rotate
        }})
        await wait(1000)
        for (let i = 0; i < 5; i++) {
            this.setRing(x, y, "gold")
            await wait(500)
            x = xTransform(x)
            y = yTransform(y)
        }
        this.setProps({stress: null})
        await wait(1000)
    }

    checkIndex(x, y) {
        var right = 0 < x && x <=15 && 0 < y && y <=15
        if (!right) {
            this.widgetError(`无效的坐标：(${x},${y}`)
        }
        return right
    }

    checkAndCorrect() {
        if (this.piecesState == "") {
            this.piecesState = createEmptyPiecesState()
        } else if (typeof(this.piecesState) == "string") {
            try {
                this.piecesState = JSON.parse(this.piecesState)
                if (!Array.isArray(this.piecesState)) {
                    throw new Error(`不能识别的数据类型：${typeof(this.piecesState)}`)
                }
            } catch (error) {
                this.piecesState = createEmptyPiecesState()
                this.widgetError(`棋子状态信息解析失败：${error.message}，已清空棋盘`)
            }
        }
        if (this.piecesState.length < 15) {
            while (this.piecesState.length < 15) {
                this.picesStace.push(createEmptyLine())
            }
            this.widgetError("棋子状态少于 15 行，已用空行补齐")
        } else if (this.piecesState.length > 15) {
            while (this.piecesState.length > 15) {
                this.picesStace.pop()
            }
            this.widgetError("棋子状态超过 15 行，已删除多余行")
        }
        var empty = createEmptyPieceState()
        var y = 0
        this.piecesState.forEach(linePiecesState => {
            y++
            linePiecesState = this.typeCheckAndCorrect(linePiecesState, (data => Array.isArray(data)), `第 ${y} 行棋子状态信息`, createEmptyLine)
            if (linePiecesState.length < 15) {
                while (linePiecesState.length < 15) {
                    this.picesStace.push(createEmptyPieceState())
                }
                this.widgetError(`第 ${y} 行棋子状态信息少于 15 个，已用空位补齐`)
            } else if (linePiecesState.length > 15) {
                while (linePiecesState.length > 15) {
                    this.picesStace.pop()
                }
                this.widgetError(`第 ${y} 行棋子状态信息超过 15 个，已删除多余状态信息`)
            }
            var x = 0
            linePiecesState.forEach(pieceState => {
                x++
                linePiecesState[x - 1] = this.objectCheckAndCorrect(pieceState, createEmptyPieceState(), `第 ${x} 行第 ${y} 个棋子状态信`, pieceStaceEnumerationMap)
            })
            this.piecesState[y - 1] = linePiecesState
        })
    }

    typeCheckAndCorrect(data, isCorrectType, name, create) {
        while (!isCorrectType(data)) {
            if (data == "") {
                data = create()
            } else if (typeof(data) == "string") {
                try {
                    data = JSON.parse(data)
                } catch (error) {
                    data = create()
                    this.widgetError(`${name}解析失败：${error.message}，已替换为默认值`)
                }
            } else {
                data = create()
                this.widgetError(`${name}解析失败：不能识别的数据类型：${typeof(data)}，已替换为默认值`)
            }
        }
        return data
    }

    objectCheckAndCorrect(data, right, name, enumerationMap={}) {
        data = this.typeCheckAndCorrect(data, data => typeof(data) == "object" && data != null, name, () => right)
        Object.keys(right).forEach(key => {
            if (!(key in data)) {
                data[key] = right[key]
                this.widgetError(`${name}中缺少属性 ${key}，已设置为默认值`)
            }
        })
        Object.keys(data).forEach(key => {
            if (!(key in right)) {
                delete data[key]
                this.widgetError(`${name}中存在无法识别的属性 ${key}，已将其删除`)
            }
        })
        Object.keys(enumerationMap).forEach(key => {
            var values = enumerationMap[key]
            var value = data[key]
            if (!values.includes(value)) {
                var index = Number(value)
                if (value == "") {
                    index = 1
                }
                if (!isNaN(index) && 0 < index && index <= values.length) {
                    data[key] = values[index - 1]
                } else {
                    for (let i = 0; i < values.length; i++) {
                        if (String(values[i]).startsWith(value)) {
                            data[key] = values[i]
                            break
                        }
                    }
                }
                if (!values.includes(data[key])) {
                    data[key] = right[key]
                    this.widgetError(`${name}的 ${key} 属性的值（${value}）无法识别，已将其设为默认值`)

                }
            }
        })
        return data
    }

    updateSize() {
        var rootElement = document.getElementById(this.id)
        if (rootElement != null) {
            this.setSize(rootElement.offsetWidth, rootElement.offsetHeight)
        }
    }

    render() {
        this.checkAndCorrect()
        this.updateSize()
        return <div style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            overflow: "hidden"
        }}>
            <div
                onMouseLeave={event => {
                    this.emit("onMouseMove", 0, 0)
                }}
                style={{
                    width: "310px",
                    height: "310px",
                    transform: `translate(${(this.width - 310) / 2}px, ${(this.height - 310) / 2}px) scale(${this.side / 310})`
                }}
            >
                <div
                    style={(() => {
                        var style = {
                            width: "310px",
                            height: "310px",
                            padding: "5px",
                            borderRadius: "8px",
                            backgroundColor: color,
                            transition: "transform 1s",
                        }
                        if (this.stress != null) {
                            var {x, y, rotate} = this.stress
                            style.transform = `rotate(${rotate}deg) translate(${this.side / 7.5 * (7 - x)}px, ${this.side / 7.5 * (7 - y)}px) scale(2)`
                        }
                        return style
                    })()}
                >
                    <div style={{
                        width: "300px",
                        height: "300px",
                        position: "absolute"
                    }}>
                        <div>
                            {(() => {
                                var linesElement =
                                <div style={{
                                    width: "300px",
                                    height: "300px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-around",
                                    alignItems: "center"
                                }}>
                                    {new range(15).map((count) => {
                                        return <div style={{
                                            width: "280px",
                                            height: "1px",
                                            backgroundColor: "black"
                                        }}></div>
                                    })}
                                </div>
                                return <div>
                                    <div style={{position: "absolute"}}>{linesElement}</div>
                                    <div style={{position: "absolute", transform: "rotate(90deg)"}}>{linesElement}</div>
                                </div>
                            })()}
                        </div>
                        <div>
                            {(() => {
                                var elements = []
                                new range(15).forEach(x => {
                                    new range(15).forEach(y => {
                                        var state = this.piecesState[x][y]
                                        elements.push(<div style={{
                                            width: "15px",
                                            height: "15px",
                                            left: x * 20 + 2.5,
                                            top: y * 20 + 2.5,
                                            position: "absolute",
                                            borderRadius: "100%",
                                            backgroundColor: (() => {
                                                switch (state.piece) {
                                                    case "previewBlack":
                                                        return "#00000040"
                                                    case "previewWhite":
                                                        return "#FFFFFF80"
                                                    default:
                                                        return state.piece
                                                }
                                            })(),
                                            outlineStyle: "solid",
                                            outlineColor: (() => {
                                                var {piece, ring} = state
                                                switch (ring) {
                                                    case null:
                                                        switch (piece) {
                                                            case null:
                                                                return "transparent"
                                                            case "black":
                                                                return "#00000080"
                                                            case "white":
                                                                return "#FFFFFF80"
                                                            case "previewBlack":
                                                                return "black"
                                                            case "previewWhite":
                                                                return "white"
                                                            default:
                                                                return "red"
                                                        }
                                                    case "inverse":
                                                        return {"black": "white", "white": "black"}[piece]
                                                    default:
                                                        return ring
                                                }
                                            })(),
                                            outlineWidth: "2px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: `${1.6 / Math.max(state.count.toString().length, 2)}em`,
                                            fontWeight: "bold",
                                            color: {"black": "white", "white": "black", "previewBlack": "white", "previewWhite": "black"}[state.piece]
                                        }}>
                                            {
                                                state.piece == null? null: state.count
                                            }
                                        </div>)
                                        elements.push(<div
                                            onClick={() => {
                                                this.emit("onClick", x + 1, y + 1)
                                            }}
                                            onMouseOver={() => {
                                                this.emit("onMouseMove", x + 1, y + 1)
                                            }}
                                            style={{
                                                width: 20,
                                                height: 20,
                                                left: x * 20,
                                                top: y * 20,
                                                position: "absolute"
                                            }}
                                        ></div>)
                                    })
                                })
                                return elements
                            })()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

exports.types = types
exports.widget = Widget