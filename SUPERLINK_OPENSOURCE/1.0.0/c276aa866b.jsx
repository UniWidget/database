/////////////////////////////////////////////////////////////////
//Opensource Edition V1.0.0 by 刘lyxAndy                       //
//本文件开源，允许再创作，但禁止发布与分享（如控件商城、QQ群等）。  //
//如再创作，请在字段中更改'author'的值。                         //
//请勿更改'base_author'和'base_version'。                      //
//请勿修改以上内容。                                            //
////////////////////////////////////////////////////////////////
const types= {
    type: 'SUPERLINK_OPENSOURCE',
    icon: 'icon-widget-button',
    title: '超链接(开源)',
    base_author: '刘lyxAndy',    //请勿更改此项
    base_version : 1000,         //请勿更改此项
    author: '',                  //请更改此项
    version: null,               //请更改此项
    isInvisibleWidget: false,
    isGlobalWidget: false,
    properties: [
        {
            key: 'content',
            label: '链接文案',
            valueType: 'string',
            defaultValue: '文本',
        },
        {
            key: 'href',
            label: '目标URL',
            valueType: 'string',
            defaultValue: '/',
        },
    ],
    methods: [],
    events: [],
}

class SuperLink_Open extends VisibleWidget
{
    constructor(props)
    {
        super(props)
        this.content=props.content
        this.href=props.href
    }


    render()
    {
        return(
            <a 
                href={this.href}>
                {this.content}
            </a>
        )
    }
}

exports.types=types;
exports.widget=SuperLink_Open;