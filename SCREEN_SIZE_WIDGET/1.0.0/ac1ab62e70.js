var document = this.document;
var elements = document.getElementsByClassName('screen-view-inner');  
console.log(elements);

function size (height,width) {
    // 遍历每个元素  
    for (var i = 0; i < elements.length; i++) {  
        // 设置高度  
        elements[i].style.height = width;  
        console.log(elements[i].style.height);
        // 设置宽度 
        elements[i].style.width = height;  
        console.log(elements[i].style.width);
      }
}

const types = {
    isInvisibleWidget: true,
    type: "SCREEN_SIZE_WIDGET",
    icon: "https://public.coco-central.cn/waddle/2/waddle2.svg",
    title: "屏幕大小",
    version: "1.0.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);

    }

}

types['methods'].push({
    key: 'set',
    label: '设置屏幕大小',
    params: [
        {
            key: 'tip',
            label: '建议与这个一起食用效果更佳',
            valueType: 'string',
            defaultValue: "https://coco.codemao.cn/editor/editor-player.html#id={该作品ID}",
        },
      {
          key: 'width',
          label: '宽为',
          valueType: 'string',
          defaultValue: "100%",
      },
      {
          key: 'height',
          label: '高为',
          valueType: 'string',
          defaultValue: "100%",
      },],


})
Widget.prototype.set = function (height,width,) {
    size(height,width);
}

exports.types = types;
exports.widget = Widget;