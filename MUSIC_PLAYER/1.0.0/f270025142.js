/*axios({
  method:"get",
  url:"",

})
.then((response)=>{

})
.catch((error)=>{
  if (error.response) {

  } else if (error.request) {

  } else {

  }
})*/
const types = {
    type: "MUSIC_PLAYER",
    title: "音乐播放器",
    icon: "https://svgmix.com/uploads/nimble-tiny-flat/1f19b5-cd-music.svg",
    version: "1.0.0",
    docs:"",
    isInvisibleWidget: true,
    isGlobalWidget: true,
    platforms:["web", "android", "ios"],
    properties: [],
    methods: [
    {
        key:"Search",
        label:"搜索",
        parent:[
            {
                key:"SearchKeyword",
                label:"关键词",
                valueType:"string",
                defaultValue:"",
            }
        ]
    }
  ],
    events: [],
}

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
    }

    Search = (SearchKeyword) => {
        axios({
            method:"get",
            url:"https://apis.netstart.cn/music/cloudsearch?keywords=" + SearchKeyword,
        })
        .then((response)=>{
            console.log(response.data.result.songs);
        })
        .catch((error)=>{
            if (error.response) {
                console.log(error.response);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log(error);
            }
        })
    }
}

exports.types = types;
exports.widget = Widget;