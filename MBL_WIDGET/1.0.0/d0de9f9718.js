const types = {
	isInvisibleWidget: false,
	type: "MBL_WIDGET",
	icon: "icon-toolbox-feature",
	title: "毛玻璃",
	version: "1.0.0",
	isGlobalWidget: false,
	properties: [
		{
			key: 'radius_px',
			label: '圆角大小（px）',
			valueType: 'number',
			defaultValue: 40,
		},
		{
			key: '__width',
			label: '宽度',
			valueType: 'number',
			defaultValue: 200,
			blockOptions: {
				generateBlock: false,
			},
		},
		{
			key: '__height',
			label: '高度',
			valueType: 'number',
			defaultValue: 150,
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

types['properties'].push({
	key: 'blur_px',
	label: '模糊程度(px)',
	valueType: 'number',
	defaultValue: 25,
})

class Widget extends VisibleWidget {
	constructor(props) {
		super(props);
		this.__width = props.__width;
		this.__height = props.__height;
		this.blur_px = props.blur_px;
		this.radius_px = props.radius_px;

	}
	render() {
		return (
			React.createElement("div", {
				style: {
					'border-radius': this.radius_px + 'px',
					'display': 'flex',
					'justify-content': 'center',
					'align-items': 'center',
					'font-size': '60px',
					'letter-spacing': '0.5em',
					'backdrop-filter': `blur(${this.blur_px}px)`,
					'color': '#fff',
					'box-shadow': '0 0 30px 10px rgba(0, 0, 0, .3)',
					'width': '100%',
					'height': '100%'
				},
			}, [])
		);

	}
}

exports.types = types;
exports.widget = Widget;
