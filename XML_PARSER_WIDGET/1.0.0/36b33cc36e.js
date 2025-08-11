// 控件类型定义
const xmlParserWidget = {
    type: 'XML_PARSER_WIDGET',
    icon: '#icon-toolbox-feature',
    title: 'XML解析器',
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
        key: 'parseXML',
        label: '解析XML',
        valueType: 'object',
        params: [
          {
            key: 'xmlData',
            label: 'XML数据',
            valueType: 'string',
            defaultValue: ''
          },
        ],
      },
    ],
    events: [],
  };
  
  // 控件实体定义
  class XmlParser extends InvisibleWidget {
    constructor(props) {
      super(props);
    }
  
    parseXML(xmlData) {
      // 实现XML解析逻辑，这里简单地将XML转换为JSON对象
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlData, 'text/xml');
      const parsedData = this.xmlToJson(xmlDoc);
      return parsedData; // 返回解析后的JSON对象
    }
  
    xmlToJson(xml) {
      // 简单的XML转JSON逻辑，实际应根据具体XML结构进行更复杂的解析
      const obj = {};
  
      if (xml.nodeType === 1) {
        if (xml.attributes.length > 0) {
          obj['attributes'] = {};
          for (let j = 0; j < xml.attributes.length; j++) {
            const attribute = xml.attributes.item(j);
            obj['attributes'][attribute.nodeName] = attribute.nodeValue;
          }
        }
      } else if (xml.nodeType === 3) {
        obj['_value'] = xml.nodeValue.trim();
      }
  
      if (xml.hasChildNodes()) {
        for (let i = 0; i < xml.childNodes.length; i++) {
          const item = xml.childNodes.item(i);
          const nodeName = item.nodeName;
  
          if (typeof obj[nodeName] === 'undefined') {
            obj[nodeName] = this.xmlToJson(item);
          } else {
            if (typeof obj[nodeName].push === 'undefined') {
              const old = obj[nodeName];
              obj[nodeName] = [];
              obj[nodeName].push(old);
            }
  
            obj[nodeName].push(this.xmlToJson(item));
          }
        }
      }
  
      return obj;
    }
  }
  
  // 导出类型和控件实体
  exports.types = xmlParserWidget;
  exports.widget = XmlParser;
  