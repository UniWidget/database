
/**
 * 底部导航栏
 * 制作：一门鸽鸽（QQ：2422481178）
 */

// 作者信息
const AUTHER = '一门鸽鸽';
const QQ = 2422481178;

// 一些常量
const BLOCK_COLOR = '#68cdff';
const WIDGET_ICON = 'icon-widget-web-view';

// 控件类型定义
const types = {
	type: 'FOOTER_NAV_FYM_WIDGET',
	icon: WIDGET_ICON,
	title: '底部导航栏',
	version: '1.0.0',
	isInvisibleWidget: false,
	isGlobalWidget: false,
	properties: [
		{
			key: '__width',
			label: '宽度',
			valueType: 'number',
			defaultValue: 360,
		},
		{
			key: '__height',
			label: '高度',
			valueType: 'number',
			defaultValue: 60,
		},
		{
			key: 'configJSON',
			label: '配置表',
			valueType: 'string',
			editorType: 'TextArea',
			blockOptions: { generateBlock: false },
			defaultValue: `\
{
    "背景颜色": "#EFF2F8",
    "高亮背景颜色": "#FFFFFF",
    "文本颜色": "#61626B",
    "高亮文本颜色": "#33383D",
    "高亮按钮序号": 1,
    "按钮配置": [
        {
            "文本": "主页",
            "图标": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-house' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207l-5-5-5 5V13.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7.207Z'/%3E%3C/svg%3E"
        },
        {
            "文本": "短视频",
            "图标": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-camera-reels' viewBox='0 0 16 16'%3E%3Cpath d='M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z'/%3E%3Cpath d='M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z'/%3E%3Cpath d='M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z'/%3E%3C/svg%3E"
        },
        {
            "文本": "购物",
            "图标": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-bag-check' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z'/%3E%3Cpath d='M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z'/%3E%3C/svg%3E"
        },
        {
            "文本": "好友",
            "图标": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-people' viewBox='0 0 16 16'%3E%3Cpath d='M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z'/%3E%3C/svg%3E"
        },
        {
            "文本": "我的",
            "图标": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-person' viewBox='0 0 16 16'%3E%3Cpath d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z'/%3E%3C/svg%3E"
        }
    ]
}\
`,
		},
	],
	methods: [
		{ key: 'setHighLight', label: '设置高亮序号', params: [{ key: 'number', label: '序号', valueType: 'number', defaultValue: 1 }] },
		{ key: 'getHighLight', label: '获取高亮序号', valueType: 'number', params: [] },
	],
	events: [
		{
			key: 'onClick', label: '按下', params: [
				{ key: 'number', label: '序号', valueType: 'number' },
				{ key: 'text', label: '文本', valueType: 'string' },
			],
		},
	],
};

class Widget extends VisibleWidget {
	constructor(props) {
		super(props);

		this.refresh = 0;
		this.configJSON = props.configJSON;
		this.config = this._prase(this.configJSON);

	}

	_prase = (json) => {
		try {
			return JSON.parse(json);
		} catch (SyntaxError) {
			this.widgetError('配置表格式错误，将使用默认配置');
			return JSON.parse(`\
{
    "背景颜色": "#EFF2F8",
    "高亮背景颜色": "#FFFFFF",
    "文本颜色": "#61626B",
    "高亮文本颜色": "#33383D",
    "高亮按钮序号": 1,
    "按钮配置": [
        {
            "文本": "主页",
            "图标": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-house' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207l-5-5-5 5V13.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7.207Z'/%3E%3C/svg%3E"
        },
        {
            "文本": "短视频",
            "图标": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-camera-reels' viewBox='0 0 16 16'%3E%3Cpath d='M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z'/%3E%3Cpath d='M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z'/%3E%3Cpath d='M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z'/%3E%3C/svg%3E"
        },
        {
            "文本": "购物",
            "图标": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-bag-check' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z'/%3E%3Cpath d='M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z'/%3E%3C/svg%3E"
        },
        {
            "文本": "好友",
            "图标": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-people' viewBox='0 0 16 16'%3E%3Cpath d='M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z'/%3E%3C/svg%3E"
        },
        {
            "文本": "我的",
            "图标": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-person' viewBox='0 0 16 16'%3E%3Cpath d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z'/%3E%3C/svg%3E"
        }
    ]
}\
`);
		};
	}

	setHighLight = (number) => { this.config['高亮按钮序号'] = number; this.setProps({ refresh: 0 }); }
	getHighLight = () => { return this.config['高亮按钮序号']; }

	onClick = (event) => { this.setHighLight(Number(event.currentTarget.getAttribute('data-number'))); this.emit('onClick', event.currentTarget.getAttribute('data-number'), event.currentTarget.getAttribute('data-text')); }

	render() {
		return (
			<div
				style={{
					width: '100%',
					height: '100%',
					zIndex: 114514,
					display: 'flex',
				}}
			>
				{
					this.config['按钮配置'].map((item, index) => {
						return (
							<div
								key={item['文本']}
								data-text={item['文本']}
								data-number={index + 1}
								onClick={this.onClick}
								style={{
									display: 'block',
									padding: '8px 0',
									flex: 1,
									backgroundColor: this.config[this.config['高亮按钮序号'] === index + 1 ? '高亮背景颜色' : '背景颜色'],
									textAlign: 'center',
								}}
							>
								<div
									style={{
										display: 'inline-block',
										textAlign: 'center',
									}}
								>
									<img
										src={item['图标']}
										style={{
											display: 'inline-block',
											width: '1.4em',
											height: '1.4em',
										}}
									></img>
									<p
										style={{
											fontSize: '10px',
											lineHeight: 1.4,
											color: this.config[this.config['高亮按钮序号'] === index + 1 ? '高亮文本颜色' : '文本颜色'],
										}}
									>
										{item['文本']}
									</p>
								</div>
							</div>)
					})
				}
			</div >
		);
	}
}

exports.types = types;
exports.widget = Widget;
