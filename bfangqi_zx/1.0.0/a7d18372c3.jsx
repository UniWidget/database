//制作：ZX
var document = this.document
var window = this.window
const types = {
    isInvisibleWidget: false,
    type: "bfangqi_zx",
    icon: "",
    title: "播放器_zx",
    version: "1.0.0",
    isGlobalWidget: false,
    properties: [
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
        {
            key: 'radius',
            label: '总圆角',
            valueType: 'number',
            defaultValue: 10,
        },
        {
            key: 'bgc_color',
            label: '背景颜色',
            valueType: 'color',
            defaultValue: '#FFF',
        },
        {
            key: 'icon',
            label: '歌曲图片',
            valueType: 'string',
            defaultValue: 'https://static.codemao.cn/pickduck/B10rBV321x.png?hash=Fi6oBmc8KgH3hHjOnbkbmYv_Aubx',
        },
        {
            key: 'icon_radius',
            label: '歌曲图片圆角',
            valueType: 'number',
            defaultValue: 5,
        },
        {
            key: 'titles',
            label: '区域1文本',
            valueType: 'string',
            defaultValue: '标题',
        },
        {
            key: 'title_size',
            label: '区域1文本大小',
            valueType: 'number',
            defaultValue: 16,
        },
        {
            key: 'content',
            label: '区域2文本',
            valueType: 'string',
            defaultValue: '歌曲信息',
        },
        {
            key: 'content_size',
            label: '区域2文本大小',
            valueType: 'number',
            defaultValue: 12,
        },
        {
            key: 'content_color',
            label: '区域2文本颜色',
            valueType: 'color',
            defaultValue: "#000",
        },
        {
            key: 'svg_size',
            label: 'svg大小',
            valueType: 'number',
            defaultValue: 30,
        },
        {
            key: 'is_play',
            label: '是否播放',
            valueType: 'boolean',
            defaultValue: false,
        },
    ],
    methods: [],
    events: [
        {
            key: 'onclick',
            label: '点击',
            params:[],
            subTypes: [
                {
                    key: 'click',
                    defaultValue: 'click',
                    dropdown: [
                        { label: '一号', value: 'one' },
                        { label: '二号', value: 'two' },
                        { label: '三号', value: 'three' },
                    ]
                }
            ],
        }
    ],
};
class Widget extends VisibleWidget {
    constructor(props) {
        super(props);
        Object.assign(this, props) 
    }
    render() {
        return (
            <>
               <div id={this.id} style={{display:'flex', width: "100%", height: "100%", backgroundColor: this.bgc_color,borderRadius: this.radius, }}>
                    <div className="img" style={{backgroundColor: this.bgc_color,width:this.__height+'px',height:'100%', backgroundImage: `url(${this.icon})`,borderRadius:this.icon_radius+'px',backgroundSize:'cover' }}></div>
                    <div style={{ borderRadius: this.radius,backgroundColor: this.bgc_color,flex:1,display:'flex',justifyContent:'space-between',height:'100%',paddingLeft:'10px'}}>
                        <div style={{display:'flex',flexDirection:'column',justifyContent:'',alignItems:'center'}}>
                            <div className="title" style={{fontSize:this.title_size+'px'}}>
                                {this.titles}
                            </div>
                            <div className="content" style={{fontSize:this.content_size+'px',color:this.content_color}}>
                                {this.content}
                            </div>
                        </div>
                        <div style={{display:'flex',height:'100%',alignItems:'center'}}>
                            <svg onClick= {()=>{this.emit('onclickone');}} t="1742714664997" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2608" width={this.svg_size} height={this.svg_size}><path d="M561.92 192a47.36 47.36 0 0 1 0 64l-256 256 256 256a47.36 47.36 0 0 1-64 64L206.08 545.92A50.56 50.56 0 0 1 192 512a47.36 47.36 0 0 1 14.08-33.28L494.72 192a47.36 47.36 0 0 1 67.2 0z" p-id="2609"></path><path d="M817.92 192a47.36 47.36 0 0 1 0 64l-256 256 256 256a47.36 47.36 0 0 1-64 64L462.08 545.92A50.56 50.56 0 0 1 448 512a47.36 47.36 0 0 1 14.08-33.28L750.72 192a47.36 47.36 0 0 1 67.2 0z" p-id="2610"></path></svg>
                            <svg onClick={()=>{this.emit('onclicktwo')}} style={{display:this.is_play?'none':'block'}} t="1742714827111" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3622" width={this.svg_size} height={this.svg_size}><path d="M893.035 463.821679C839.00765 429.699141 210.584253 28.759328 179.305261 8.854514 139.495634-16.737389 99.686007 17.385148 99.686007 57.194775v909.934329c0 45.496716 42.653172 68.245075 76.775709 48.340262 45.496716-28.435448 676.763657-429.375262 716.573284-454.967165 34.122537-22.748358 34.122537-76.775709 0-96.680522z" fill="#666666" p-id="3623"></path></svg>
                            <svg onClick={()=>{this.emit('onclicktwo')}} style={{display:this.is_play?'block':'none'}} t="1742714951644" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5467" width={this.svg_size} height={this.svg_size}><path d="M128 106.858667C128 94.976 137.621333 85.333333 149.12 85.333333h85.76c11.648 0 21.12 9.6 21.12 21.525334V917.12c0 11.882667-9.621333 21.525333-21.12 21.525333H149.12A21.290667 21.290667 0 0 1 128 917.141333V106.88z m640 0c0-11.882667 9.621333-21.525333 21.12-21.525334h85.76c11.648 0 21.12 9.6 21.12 21.525334V917.12c0 11.882667-9.621333 21.525333-21.12 21.525333h-85.76a21.290667 21.290667 0 0 1-21.12-21.525333V106.88z" fill="#3D3D3D" p-id="5468"></path></svg>
                            <svg onClick={()=>{this.emit('onclickthree')}} t="1742716015919" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7311" width={this.svg_size} height={this.svg_size}><path d="M462.08 192a47.36 47.36 0 0 0 0 64l256 256-256 256a47.36 47.36 0 1 0 64 64l288.64-288.64A50.56 50.56 0 0 0 832 512a47.36 47.36 0 0 0-14.08-33.28L529.28 192a47.36 47.36 0 0 0-67.2 0z" p-id="7312"></path><path d="M206.08 192a47.36 47.36 0 0 0 0 64l256 256-256 256a47.36 47.36 0 1 0 64 64l291.84-286.08A50.56 50.56 0 0 0 576 512a47.36 47.36 0 0 0-14.08-33.28L273.28 192a47.36 47.36 0 0 0-67.2 0z" p-id="7313"></path></svg>
                        </div>
                    </div>
               </div>
            </>
        )
    }
}
exports.types = types;
exports.widget = Widget;
