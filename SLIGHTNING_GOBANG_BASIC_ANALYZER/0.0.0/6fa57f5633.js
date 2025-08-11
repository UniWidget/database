const types = {
    type: "SLIGHTNING_GOBANG_BASIC_ANALYZER",
    author: "SLIGHTNING",
    title: "五子棋分析",
    icon: "https://ts4.cn.mm.bing.net/th?id=ODLS.c256d985-0ef0-4db0-8ee9-12c0c51ceb04&w=32&h=32&qlt=92&pcl=fffffa&o=6&pid=1.2",
    version: "0.0.0",
    isInvisibleWidget: true,
    isGlobalWidget: false,
    properties: [],
    methods: [
        {
            key: "reset",
            label: "重置",
            params: []
        }, {
            key: "down",
            label: "落子",
            params: [
                {
                    key: "x",
                    label: "x",
                    valueType: "number",
                    defaultValue: 1
                }, {
                    key: "y",
                    label: "y",
                    valueType: "number",
                    defaultValue: 1
                }
            ]
        }, {
            key: "undo",
            label: "悔棋",
            params: []
        }, {
            key: "stateIs",
            params: [
                {
                    key: "state",
                    dropdown: [
                        { label: "进行中", value: "going" },
                        { label: "轮到黑方", value: "blacksTurn" },
                        { label: "轮到白方", value: "whitesTurn" },
                        { label: "终局", value: "over" },
                        { label: "胜局", value: "win" },
                        { label: "黑方胜", value: "blackWin" },
                        { label: "白方胜", value: "whiteWin" },
                        { label: "和局", value: "peace" }
                    ]
                }
            ],
            valueType: "boolean"
        }, {
            key: "getCount",
            label: "计数",
            params: [],
            valueType: "number"
        }, {
            key: "is",
            params: [
                {
                    key: "x",
                    label: "x",
                    valueType: "number",
                    defaultValue: 1
                }, {
                    key: "y",
                    label: "y",
                    valueType: "number",
                    defaultValue: 1
                }, {
                    key: "value",
                    label: "为",
                    dropdown: [
                        { label: "无", value: "none" },
                        { label: "黑子", value: "black" },
                        { label: "白子", value: "white" }
                    ]
                }
            ],
            valueType: "boolean"
        }
    ],
    events: [
        {
            key: "onOperatingUI",
            label: "操作界面",
            params: [
                {
                    key: "data",
                    label: "数据",
                    valueType: ["object", "array"]
                }
            ]
        }
    ]
}

types.methods.forEach(method => {
    method.blockOptions = {
        color: "#ae6f43",
        callMethodLabel: false
    }
})

function checkPosition(x, y) {
    return right = 0 < x && x <=15 && 0 < y && y <=15
}

class Widget extends InvisibleWidget {

    constructor(props) {
        super(props)
        this.reset()
    }

    reset() {
        this.count = 1
        this.pieces = []
        for (let i = 0; i < 15; i++) {
            let linePieces = []
            for (let j = 0; j < 15; j++) {
                linePieces.push("none")
            }
            this.pieces.push(linePieces)
        }
        this.over = false
        this.win = null
        this.downs = []
        this.emit("onOperatingUI", {
            operation: "empty",
            arguments: {}
        })
    }

    down(x, y) {
        if (this.over) {
            this.widgetError("对局已结束")
            return
        }
        if (this.checkPosition(x, y)) {
            if (!this.is(x, y, "none")) {
                this.widgetError("不能把棋子下到已有的棋子上")
                return
            }
            const position = {x: x, y: y}, color = ["white", "black"][this.count % 2]
            this.pieces[x - 1][y - 1] = color
            let operations = []
            if (this.downs.length > 0) {
                operations.push({
                    operation: "setRing",
                    arguments: {
                        ...this.downs[0],
                        value: null,
                    }
                })
            }
            this.downs.unshift(position)
            operations.push([
                {
                    operation: "set",
                    arguments: {
                        ...position,
                        value: color,
                        count: this.count
                    }
                }, {
                    operation: "setRing",
                    arguments: {
                        ...position,
                        value: "inverse"
                    }
                }
            ])
            var win = this.checkWin(x, y)
            if (win != null) {
                this.over = true
                this.win = color
                operations.push(win)
            }
            if (this.count == 225) {
                this.over = true
            }
            this.emit("onOperatingUI", operations)
            if (!this.over) {
                this.count++
            }
        }
    }

    checkWin(x, y) {
        var color = ["white", "black"][this.count % 2]
        var backward = number => -number, none = number => 0, forward = number => number
        var direction = [
            {
                direction: "horizontal",
                transform: {
                    x: forward,
                    y: none
                }
            }, {
                direction: "vertical",
                transform: {
                    x: none,
                    y: forward
                }
            }, {
                direction: "forward-slant",
                transform: {
                    x: forward,
                    y: backward
                }
            }, {
                direction: "backward-slant",
                transform: {
                    x: forward,
                    y: forward
                }
            }
        ]
        try {
            direction.forEach(direction => {
                var {transform, direction} = direction
                var forward = 0, backward = 0
                var first
                var newX, newY
                for (;;) {
                    forward++
                    newX = x + transform.x(forward)
                    newY = y + transform.y(forward)
                    if (!(checkPosition(newX, newY) && this.is(newX, newY, color))) {
                        forward--
                        break
                    }
                }
                for (;;) {
                    newX = x + transform.x(backward)
                    newY = y + transform.y(backward)
                    if (checkPosition(newX, newY) && this.is(newX, newY, color)) {
                        first = {x: newX, y: newY}
                        backward--
                    } else {
                        break
                    }
                }
                if (forward - backward >= 5) {
                    throw {
                        operation: "showFiveContiguousPieces",
                        arguments: {
                            ...first,
                            direction: direction
                        }
                    }
                }
            })
        } catch (operation) {
            return operation
        }
        return null
    }

    stateIs(state) {
        switch (state) {
            case "going":
                return !this.over
            case "blacksTurn":
                return !this.over && this.count % 2 == 1
            case "whitesTurn":
                return !this.over && this.count % 2 == 0
            case "over":
                return this.over
            case "win":
                return this.win != null
            case "blackWin":
                return this.win == "black"
            case "whiteWin":
                return this.win == "white"
            case "peace":
                return this.over && this.win == null
        }
        return this.over
    }

    getCount() {
        return this.count
    }

    is(x, y, value) {
        return this.checkPosition(x, y) && this.pieces[x - 1][y - 1] == value
    }

    checkPosition(x, y) {
        var right = checkPosition(x, y)
        if (!right) {
            this.widgetError(`无效的坐标：(${x},${y})`)
        }
        return right
    }
}

exports.types = types
exports.widget = Widget
