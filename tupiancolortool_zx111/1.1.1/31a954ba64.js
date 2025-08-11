var window = this.window
var document = this.document



const types = {
    isInvisibleWidget: true,
    type: "tupiancolortool_zx111",
    icon: "https://static.codemao.cn/pickduck/H17mhnwPye.png?hash=FlCFX6KF2yqCsP19hc1qWUbR-jiP",
    title: "图片颜色工具_zx",
    version: "1.1.1",
    docs: 'https://www.yuque.com/u37737036/zx/nm9p2896ozo2yg2f?singleDoc#',
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);

    }
    getbgc(url) {
        function a(url) {
            return new Promise((resolve, reject) => {
                var color = null;
                var imageUrl = url;
                const img = new Image();
                img.crossOrigin = "anonymous"; // 处理跨域请求

                img.onload = function () {
                    function getPixelColor(imageData, width, x, y) {
                        const index = (y * width + x) * 4;
                        return [
                            imageData[index],     // R
                            imageData[index + 1], // G
                            imageData[index + 2]  // B
                        ];
                    }

                    // 创建临时Canvas并缩小图片以提高性能
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');

                    // 设置Canvas尺寸（适当缩小以提高性能）
                    const scale = 100;
                    canvas.width = scale;
                    canvas.height = scale;

                    // 绘制缩小后的图片
                    ctx.drawImage(img, 0, 0, scale, scale);

                    // 获取图像数据
                    const imageData = ctx.getImageData(0, 0, scale, scale).data;

                    // 采样边缘像素（四周各取1像素宽）
                    const edgePixels = [];
                    for (let i = 0; i < scale; i++) {
                        // 顶部边缘
                        edgePixels.push(getPixelColor(imageData, scale, i, 0));
                        // 底部边缘
                        edgePixels.push(getPixelColor(imageData, scale, i, scale - 1));
                        // 左侧边缘（跳过已处理的角）
                        if (i > 0 && i < scale - 1) edgePixels.push(getPixelColor(imageData, scale, 0, i));
                        // 右侧边缘（跳过已处理的角）
                        if (i > 0 && i < scale - 1) edgePixels.push(getPixelColor(imageData, scale, scale - 1, i));
                    }

                    // 统计颜色频率（带简化处理）
                    const colorFrequency = {};
                    edgePixels.forEach(color => {
                        // 简化颜色值（按16的倍数分组）
                        const simplified = color.map(c => Math.round(c / 16) * 16);
                        const key = simplified.join(',');
                        colorFrequency[key] = (colorFrequency[key] || 0) + 1;
                    });

                    // 找到最常出现的颜色
                    let maxCount = 0;
                    let dominantColor = [0, 0, 0];
                    Object.entries(colorFrequency).forEach(([key, count]) => {
                        if (count > maxCount) {
                            maxCount = count;
                            dominantColor = key.split(',').map(Number);
                        }
                    });

                    // 转换为十六进制格式
                    const hex = '#' + dominantColor.map(c => {
                        return c.toString(16).padStart(2, '0');
                    }).join('');

                    // 输出结果
                    console.log('最常出现的颜色（简化后）：', hex);
                    color = hex;

                    // 使用Promise的resolve返回结果
                    resolve(hex);
                };

                img.onerror = function () {
                    console.error('无法加载图片');
                    reject(new Error('无法加载图片'));
                };

                img.src = imageUrl;
            });
        }
        a(url)
            .then(color => {
                this.emit('isok', color)
                return color;
            })
    }


    getiswhiteorblack(color) {
        function invertColor(hexColor) {
            // 去掉可能存在的井号（#）
            hexColor = hexColor.replace(/^#/, "");

            // 如果输入的是3位的十六进制颜色（如 #abc），需要扩展为6位（#aabbcc）
            if (hexColor.length === 3) {
                hexColor = hexColor.split('').map(char => char + char).join('');
            }

            // 检查是否是有效的6位十六进制颜色
            if (hexColor.length !== 6) {
                throw new Error("Invalid color format. Please use a 3-digit or 6-digit hex color.");
            }

            // 将每一对十六进制字符转换为数字，并计算其翻转色（255 - 当前值）
            let invertedColor = hexColor.match(/../g).map(pair => {
                return (255 - parseInt(pair, 16)).toString(16).padStart(2, '0');
            }).join('');

            // 返回翻转色，加上井号（#）
            return "#" + invertedColor;
        }
        function determineTextColor(hexColor) {
            // 去掉可能存在的井号（#）
            hexColor = hexColor.replace(/^#/, "");

            // 如果输入的是3位的十六进制颜色（如 #abc），需要扩展为6位（#aabbcc）
            if (hexColor.length === 3) {
                hexColor = hexColor.split('').map(char => char + char).join('');
            }

            // 检查是否是有效的6位十六进制颜色
            if (hexColor.length !== 6) {
                throw new Error("Invalid color format. Please use a 3-digit or 6-digit hex color.");
            }

            // 将每一对十六进制字符转换为十进制数字
            const r = parseInt(hexColor.slice(0, 2), 16);
            const g = parseInt(hexColor.slice(2, 4), 16);
            const b = parseInt(hexColor.slice(4, 6), 16);

            // 计算亮度（使用公式：Y = 0.299R + 0.587G + 0.114B）
            const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

            // 根据亮度判断文本颜色
            return luminance > 128 ? "black" : "white";
        }


        return determineTextColor(color)
    }
}


types['methods'].push({
    key: 'getbgc',
    label: '获取主题色',
    valueType: 'string',
    params: [{
        key: 'url',
        label: 'url',
        valueType: 'string',
        defaultValue: "",
    }]
})

types['methods'].push({
    key: 'getiswhiteorblack',
    label: '判断文字应为',
    valueType: 'string',
    params: [
        {
            key: 'color',
            label: '颜色',
            valueType: 'color',
            defaultValue: '',
        },
    ],
})
types['events'].push({
    key: 'isok',
    label: '识别成功',
    params: [
        {
            key: 'color',
            label: '颜色',
            valueType: 'string',
        },
    ],

})
exports.types = types;
exports.widget = Widget;
