// 控件类型定义
const htmlParserWidget = {
    type: 'HTML_PARSER_WIDGET',
    icon: '#icon-toolbox-feature',
    title: 'HTML解析器',
    isInvisibleWidget: true,
    isGlobalWidget: true,
    license: 'MIT',
    author: {
      nickname: '刘lyxAndy',
      codemao: 'https://shequ.codemao.cn/user/7264276',
      qq: 3449556207
    },
    platforms: ['web', 'android', 'ios'],
    properties: [],
    methods: [
      {
        key: 'parseHtml',
        label: '解析HTML',
        valueType: 'object',
        params: [
          {
            key: 'htmlData',
            label: 'HTML数据',
            valueType: 'string',
            defaultValue: ''
          },
        ],
      },
    ],
    events: [],
  };
  
  // 控件实体定义
  class HTMLParser extends InvisibleWidget {
    constructor(props) {
      super(props);
    }
  
    parseHtml(htmlData) {
      // 使用DOMParser解析完整的HTML文档字符串
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(htmlData, 'text/html');
      
      // 从文档的根元素（通常是<html>）开始转换
      return this.htmlToObject(htmlDoc.documentElement);
    }
  
    htmlToObject(element) {
      debugger
      console.log(element)
       // 将HTML元素转换为JavaScript对象表示
      const obj = {
        tagName: element.tagName.toLowerCase(), // 元素标签名
        attributes: {}, // 存储元素属性
        children: [], // 存储子元素
        textContent: element.textContent.trim(), // 元素文本内容
      };
  
      // 处理元素属性
      for (let i = 0; i < element.attributes.length; i++) {
        const attribute = element.attributes[i];
        obj.attributes[attribute.name] = attribute.value;
      }
  
      // 遍历子元素
      for (let i = 0; i < element.children.length; i++) {
        const child = element.children[i];
        obj.children.push(this.htmlToObject(child));
      }
  
      // 如果该元素没有子元素且textContent为空，则不保留textContent属性
      if (!obj.children.length && !obj.textContent) {
        delete obj.textContent;
      }
  
      return obj;
    }
  }
  
  // 导出类型和控件实体
  exports.types = htmlParserWidget;
  exports.widget = HTMLParser;
  