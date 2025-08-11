/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

/*
* 嘿，欢迎使用CoCo美化，由小小爱html制作
* 作者：小小爱html
* 主页：https://shequ.codemao.cn/user/1121085
* QQ：1026502082
* 使用方法：字面意思
* 本扩展随时可能被ban，请不要过度依赖。知道原理的别告诉官方谢谢：）
*/

const BLOCK_COLOR = '#3EEDD47F';
const WIDGET_ICON = 'icon-toolbox-variable';
const BLOCK_ICON = 'icon-toolbox-variable';
const AUTHER = '小小爱html';
const HOMEPAGE = 'https://shequ.codemao.cn/user/1121085';
const QQ = 1026502082;

const Types = {
	type: 'COCOUI_ZZX_IMSMALL_WIDGET',
	icon: WIDGET_ICON,
	title: 'CoCo美化',
	version: '1.0',
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
    }

    render() {
		const rawHTML = `
		<style>
		.Header_wrapper__3tGRg {
			background: #FF3030;
		}
	
		.WidgetTree_item__322OE .WidgetTree_widgetIcon__1B8nn {
			color: #FF3030;
		}
	
		.Header_shareMenuBtn__25d_L {
			border: 1px solid #FF3030;
			background-color: #fff;
			color: #FF3030;
		}
	
		.Header_shareMenu__wWtsL .coco-dropdown-down-icon {
			color: #FF3030;
		}
	
		.Header_menu__Zy7KP .coco-dropdown-active,
		.Header_menu__Zy7KP .coco-dropdown-selector:hover {
			background: #EE3B3B;
		}
	
		.Header_projectTitleWrapper__2Fwje .Header_projectTitle__3fvYk:hover {
			background-color: #FF4500;
		}
	
		.ScreenList_switch__xLuYh {
			background: transparent;
		}
	
		.ScreenList_switch__xLuYh:hover {
			background-color: #FF4500;
		}
	
		.ScreenList_item__2nka3.ScreenList_selected__1TJfB .ScreenList_view__dO4mo {
			border-color: rgb(255, 48, 48);
		}
	
		.ScreenList_item__2nka3.ScreenList_selected__1TJfB .ScreenList_titleBox__3xdmS .ScreenList_canNotEdit__1sLmi {
			color: rgb(255, 48, 48);
		}
	
		.ScreenList_item__2nka3 .ScreenList_view__dO4mo .ScreenList_delete__tdgnd {
			background: rgb(255, 48, 48);
		}
	
		.coco-menu-item:hover {
			background: #FFE1FF;
		}
	
		.coco-menu-item:active {
			background: #FF6347;
		}
	
		.Header_iconWrapper__1R5yU:active,
		.Header_iconWrapper__1R5yU:hover {
			background: #CD3333;
		}
	
		.Header_activeIconWrapper__1rhSh {
			background: rgb(205, 38, 38);
		}
	
		.style_oTButton__3Iy-r .style_collIconWrapper__3sgII:hover {
			background: #CD3333;
		}
	
		.style_oTButton__3Iy-r .style_activeCollIconWrapper__1vRac {
			background: #CD3333;
		}
	
		.WidgetTree_item__322OE:hover {
			background-color: #FF7F50;
		}
	
		.WidgetTree_item__322OE.WidgetTree_selected__tq-Ka {
			background: rgb(255, 48, 48);
		}
	
		.WidgetTree_item__322OE.WidgetTree_selected__tq-Ka .WidgetTree_controlIcon__3S2kT:active {
			background: #CD1111;
		}
	
		.WidgetTree_item__322OE.WidgetTree_selected__tq-Ka .WidgetTree_controlIcon__3S2kT:hover {
			background: #FFE4E1;
		}
		.ZoomBox_wrapper__2CMDz {
			color: #CD2222;
		}
	</style>
		`
        const rawHTMLData = {__html: rawHTML}
		return (
			<p dangerouslySetInnerHTML={rawHTMLData}></p>
        );
    }
}

console.log('此作品的作者使用了“Coco美化”。');
console.log('“Coco美化”作者：小小爱html');
console.log('“Coco美化”作者主页：https://shequ.codemao.cn/user/1121085');
console.log('“Coco美化”作者QQ：1026502082');
console.log('©2022 Small Tech.')

exports.types = Types;
exports.widget = Widget;
