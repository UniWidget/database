window = this.window;
const types = {
    title: '打印控件',
    type: 'PRINT_WIDGET',
    icon: 'https://creation.codemao.cn/716/appcraft/IMAGE_KEhDmgt7G_1661316503848.svg',
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    methods: [
        {
            key: 'printThisWindow',
            label: '打印此窗口',
            params: [],
        },
        {
            key: 'print',
            label: '打印',
            params: [
                {
                    key: 'text',
                    label: 'HTML',
                    valueType: 'string',
                    defaultValue: '<h1>hello world</h1>'
                }
            ],
        }
    ],
    events: [],
}
class Widget extends InvisibleWidget{
    constructor(props){
        super(props)
        console.log("V1010 by 刘lyxAndy")
    }
    printThisWindow=()=>{
        window.print()
    }
    print=(text)=>{
        let wind = window.open("about:blank","print")
        wind.document.write(text)
        wind.stop()
        wind.print()
    }
}
exports.types=types;
exports.widget=Widget;