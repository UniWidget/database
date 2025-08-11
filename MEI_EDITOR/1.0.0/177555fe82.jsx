const types = {
  isInvisibleWidget: false,
  type: "MEI_EDITOR",
  icon: "https://waddle.coco-central.cn/static/img/logo/logo-white.svg",
  title: "更好看的编辑器",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: 0,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: '__height',
      label: '高度',
      valueType: 'number',
      defaultValue: 0,
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
    return(
      React.createElement("div", {dangerouslySetInnerHTML: {__html: '<style>.WidgetList_widgetItem__14O1V:not(.WidgetList_disabled__OFsVy):hover {     background: #9429ff;     border-color: #9429ff;     color: #fff;     box-shadow: 0 5px 12px 0 #b469ff, 0 2px 4px 0 #b469ff;     -webkit-transform: translateY(-1px);     transform: translateY(-1px); } .WidgetList_doubleColumn__34XFq .WidgetList_widgetItem__14O1V {     width: 100%;     height: 56px; } .WidgetList_widgetItem__14O1V {     display: flex;     flex-direction: row;     cursor: grab;     width: 68px;     padding-bottom: 4px;     margin-bottom: 14px;     vertical-align: middle;     border-radius: 8px;     border: 1px solid #f2f2f2;     color: #61626b;     background-color: #fff;     transition: box-shadow .1s ease-in-out,-webkit-transform .1s ease-in-out;     transition: transform .1s ease-in-out,box-shadow .1s ease-in-out;     transition: transform .1s ease-in-out,box-shadow .1s ease-in-out,-webkit-transform .1s ease-in-out;     align-items: center;     justify-content: center; }.WidgetList_widgetItem__14O1V .WidgetList_title__2-7lq {     font-size: 17px;     -webkit-transform: scale(.9);     transform: scale(.9);     text-align: center;     display: flex;     align-items: center;     justify-content: center;     margin-top: 7px;     margin-left: 8px;     flex: 0 0; }.Header_wrapper__3tGRg {     width: 100%;     height: 100%;     background: #9429ff;     box-shadow: 0 -3px 30px #9429ff;     position: relative;     z-index: 1;     display: flex;     align-items: center;     justify-content: space-between;     -webkit-user-select: none;     -ms-user-select: none;     user-select: none; }.Header_menu__Zy7KP .coco-dropdown-active, .Header_menu__Zy7KP .coco-dropdown-selector:hover {     background: #a142ff; }.Header_projectTitleWrapper__2Fwje .Header_projectTitle__3fvYk:hover {     background-color: #a142ff; }.Header_iconWrapper__1R5yU:active, .Header_iconWrapper__1R5yU:hover {     background: #a142ff;     border-radius: 4px; }.Header_packageBtn__uKJgR:not(:disabled):active, .Header_packageBtn__uKJgR:not(:disabled):hover {     border-color: hsla(0,0%,100%,.5);     background: #a142ff; }.ScreenList_wrapper__nhsQ3 .ScreenList_screenIndexBox__1Wq_j .ScreenList_screenIndexList__1K5Ah .ScreenList_index__1Rg7r.ScreenList_active__q9aHn {     color: #fff;     background-color: #a74fff; }.Notice_container__6Feqw.Notice_warn__2t0LW {     border: 1px solid #9a84f8;     background: #9429ff;     color: #ffffff;     box-shadow: 0 2px 8px 0 #ad5aff; }.Notice_container__6Feqw .Notice_message__3wDPL {     font-size: 16px;     font-weight: 400; color:#fff;}</style>'}}, null)
  );

  }
}

exports.types = types;
exports.widget = Widget;
