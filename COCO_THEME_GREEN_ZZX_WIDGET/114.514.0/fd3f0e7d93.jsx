/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

/*
* CoCo主题
* 制作：中子星000（QQ：2422481178）
* 魔改：天上来的熊孩子（QQ：2639194612）
*/

const WIDGET_ICON = 'icon-toolbox-variable';
const AUTHER = '中子星000';
const QQ = 2422481178;

const Types = {
	type: 'COCO_THEME_GREEN_ZZX_WIDGET',
	icon: WIDGET_ICON,
	title: 'CoCo主题-宝石绿',
	version: '114.514.0',
	platforms: ['android', 'ios', 'web'],
	isInvisibleWidget: false,
	isGlobalWidget: false,
	docs: {
		url: 'https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps/What_is_CSS'
	},
	properties: [],
	methods: [],
	events: []
};

class Widget extends VisibleWidget {
	constructor(props) {
		super(props);
		this.widgetLog(`
* CoCo主题
* 制作：中子星000（QQ：2422481178）
* 魔改：天上来的熊孩子（QQ：2639194612）
`);
	}

	render() {
		return (
			<style>
				{`
.Header_wrapper__3tGRg {
	background: #559C58;
}

.WidgetTree_item__322OE .WidgetTree_widgetIcon__1B8nn {
	color: #559C58;
}

.Header_shareMenuBtn__25d_L {
	border: 1px solid #56FF29;
	background-color: #fff;
	color: #29FF42;
}

.Header_shareMenu__wWtsL .coco-dropdown-down-icon {
	color: #29FF42;
}

.Header_menu__Zy7KP .coco-dropdown-active,
.Header_menu__Zy7KP .coco-dropdown-selector:hover {
	background: #6BD652;
}

.Header_projectTitleWrapper__2Fwje .Header_projectTitle__3fvYk:hover {
	background-color: #02C810;
}

.ScreenList_switch__xLuYh {
	background: transparent;
}

.ScreenList_switch__xLuYh:hover {
	background-color: #02C810;
}

.ScreenList_item__2nka3.ScreenList_selected__1TJfB .ScreenList_view__dO4mo {
	border-color: rgb(30, 223, 23);
}

.ScreenList_item__2nka3.ScreenList_selected__1TJfB .ScreenList_titleBox__3xdmS .ScreenList_canNotEdit__1sLmi {
	color: rgb(30, 223, 23);
}

.ScreenList_item__2nka3 .ScreenList_view__dO4mo .ScreenList_delete__tdgnd {
	background: rgb(30, 223, 23);
}

.coco-menu-item:hover {
	background: #EBFFE8;
}

.coco-menu-item:active {
	background: #D8FFD3;
}

.Header_iconWrapper__1R5yU:active,
.Header_iconWrapper__1R5yU:hover {
	background: #1BF250;
}

.Header_activeIconWrapper__1rhSh {
	background: rgb(82, 230, 14);
}

.style_oTButton__3Iy-r .style_collIconWrapper__3sgII:hover {
	background: #1BF250;
}

.style_oTButton__3Iy-r .style_activeCollIconWrapper__1vRac {
	background: #1BF250;
}

.WidgetTree_item__322OE:hover {
	background-color: #DBFFE2;
}

.WidgetTree_item__322OE.WidgetTree_selected__tq-Ka {
	background: rgb(41, 255, 48);
}

.WidgetTree_item__322OE.WidgetTree_selected__tq-Ka .WidgetTree_controlIcon__3S2kT:active {
	background: #47FF54;
}

.WidgetTree_item__322OE.WidgetTree_selected__tq-Ka .WidgetTree_controlIcon__3S2kT:hover {
	background: #C2FFD7;
}
.ZoomBox_wrapper__2CMDz {
	color: #3DE70D;
}

.WidgetList_widgetItem__14O1V:not(.WidgetList_disabled__OFsVy):hover {
    background: #29FF4F;
    border-color: #559C58;
}

.WidgetList_categoryItem__1o_mN .WidgetList_categoryHeader__23-do:hover {
    background-color: #DEFFDB;
}

.WidgetTree_item__322OE .WidgetTree_right__1Jzb6 {
    color: #559C58;
}

.Header_packageBtn__uKJgR:not(:disabled):active, .Header_packageBtn__uKJgR:not(:disabled):hover {
    background: #559C58;
}

.WidgetList_widgetMallBtn__2_eHI {
    background: #E1FFDB;
}

.WidgetMallDialog_widgetCardFooter__1GiB8 .WidgetMallDialog_added__3xx9Q {
    background: #D1FFDB;
}

.styles_cloudDBManager__23tv1 .styles_left__fu4Cm .styles_DBData__3Ij4K .styles_item__3JiEY.styles_selected__xW063 {
    background: #559C58;
}

.styles_cloudDBManager__23tv1 .styles_left__fu4Cm .styles_DBData__3Ij4K .styles_item__3JiEY:hover {
    background: #DBFFE1;
}

.WidgetTree_item__322OE.WidgetTree_selectedLight__2bnyj {
    background: #DBFFE1;
}

				`}
			</style>
		);
	}
}

console.log(`
* CoCo主题
* 制作：中子星000（QQ：2422481178）
* 魔改：天上来的熊孩子（QQ：2639194612）
`);

exports.types = Types;
exports.widget = Widget;
