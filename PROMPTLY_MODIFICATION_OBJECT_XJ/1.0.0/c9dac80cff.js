const types = {
  type: 'PROMPTLY_MODIFICATION_OBJECT_XJ',
  icon: 'icon-toolbox-object',
  title: '修改字典',
  version: '1.0.0',
  author: 'XJ王大哥(2357942846)',
  isInvisibleWidget: true,
  isGlobalWidget: true,
  properties: [],
  methods: [
    {
        key: 'modification',
        label: '',
        params: [
          {key:'object',label: '修改字典',valueType: ['string', 'number', 'boolean', 'array', 'color', 'object',],defaultValue:""},
          {key:'key',label: '键',valueType: ['string', 'number', 'boolean', 'array', 'color', 'object',],defaultValue:""},
          {key:'value',label: '的值为',valueType: ['string', 'number', 'boolean', 'array', 'color', 'object',],defaultValue:""},
        ],
        valueType: ['string', 'number', 'boolean', 'array', 'color', 'object',],
        blockOptions: {color: "rgb(160, 115, 255)",callMethodLabel: false}
    },
    {
        key: 'delete',
        label: '',
        params: [
          {key:'object',label: '删除字典',valueType: ['string', 'number', 'boolean', 'array', 'color', 'object',],defaultValue:""},
          {key:'key',label: '的键',valueType: ['string', 'number', 'boolean', 'array', 'color', 'object',],defaultValue:""},
        ],
        valueType: 'string',
        blockOptions: {color: "rgb(160, 115, 255)",callMethodLabel: false}
    }
  ],
  events: [],
};

class Widget extends InvisibleWidget {
  constructor(props) {super(props)}
  modification = (m,k,v) => {
    m[k] = v
    return m
  }
  delete = (m,k) => {
    delete m[k]
    return m
  }
}

exports.types = types
exports.widget = Widget