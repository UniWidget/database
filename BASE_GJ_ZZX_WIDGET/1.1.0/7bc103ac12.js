/* eslint-disable */

/*
 * 嘿，欢迎使用Base编解码，由中子星000制作
 * 作者：中子星000
 * 主页：https://shequ.codemao.cn/user/2867423
 * QQ：2422481178
 * 使用方法：字面意思
 */

const BLOCK_COLOR = '#00B6B6AA';
const WIDGET_ICON =
  'https://creation.codemao.cn/716/appcraft/IMAGE_bZbAOhRcTa_1643095470593.svg';
const BLOCK_ICON =
  'https://creation.codemao.cn/716/appcraft/IMAGE_xMzcMWdJQ_1643095470592.svg';
const AUTHER = '中子星000';
const HOMEPAGE = 'https://shequ.codemao.cn/user/2867423';
const QQ = 2422481178;

const types = {
  type: 'BASE_GJ_ZZX_WIDGET',
  icon: WIDGET_ICON,
  title: 'Base编解码',
  version: '1.1.0',
  platforms: ['android', 'ios', 'web'],
  isInvisibleWidget: true,
  isGlobalWidget: true,
  docs: {
    url: 'https://www.yuque.com/coco-central/guide/base64',
  },
  properties: [],
  methods: [
    {
      key: 'base64',
      label: 'Base64',
      valueType: 'string',
      params: [
        {
          key: 'mode',
          valueType: 'string',
          defaultValue: 'encode',
          dropdown: [
            { label: '编码', value: 'encode' },
            { label: '解码', value: 'decode' },
          ],
        },
        {
          key: 'str',
          label: '文本',
          valueType: 'string',
          defaultValue: '',
        },
      ],
      blockOptions: {
        icon: BLOCK_ICON,
        color: BLOCK_COLOR,
      },
      tooltip: `本扩展支持中文 编码模式：将字符串编码为Base64；解码模式：将Base64解码为字符串`,
    },
  ],
  events: [],
};


class Widget extends InvisibleWidget {
  constructor(props) {
    super(props);
  }

  base64(mode, str) {
    if (mode === 'encode') {
      return btoa(
        str
      );
    } else {
      return atob(str);
    }
  }
}

exports.types = types;
exports.widget = Widget;
