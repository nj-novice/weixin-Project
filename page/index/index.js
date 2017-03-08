Page({
  tap: function(e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 200
        })
        break
      }
    }
  },
  data:{
  	imgUrls: [
      'http://www.tfwk.cn/image/index-banner.jpg',
      'http://www.tfwk.cn/image/index-banner2.jpg',
      'http://www.tfwk.cn/image/index-banner3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    indexImgs:[
    "http://www.tfwk.cn/image/listImg1.jpg",
    "http://www.tfwk.cn/image/listImg2.jpg",
    "http://www.tfwk.cn/image/listImg3.jpg"
    ],
    tf:[true,false,true,true,true,true],
    heads:["关注","热点","搞笑","女神","趣味","职业"],
    ion:[,"ion",,,,,],
    follow:[{src:"http://www.tfwk.cn/image/list-img1.png",con:"这个世界上，只有克服了恐惧和别人的眼光，你才能成长 ",xin:"25",comment:"13"}],
    list:[{src:"http://tfwk.cn/image/random1.png",h1:"心情好心情坏，每天坚持做运动，啦啦啦，啦啦啦!",like:"34",comment:"18",photo:"http://tfwk.cn/image/photo1.png"},],
    xiu:[{src:'http://tfwk.cn/image/xiu_img01.jpg',h1:'达人秀',zan:501,watch:1022},
      {src:'http://tfwk.cn/image/xiu_img02.png',h1:'面膜',zan:111,watch:252},
      {src:'http://tfwk.cn/image/xiu_img03.jpg',h1:'照片墙',zan:51,watch:80},
      {src:'http://tfwk.cn/image/xiu_img04.png',h1:'俞敏洪',zan:11,watch:77}],
   quwei:[{name:"小希",first:"推荐",two:"女神",three:"达人",h1:"今天给大家发福利咯，专业的祛痘小方法，不看会后悔哦！",time:"2016.11.07",xin:"855",yan:"233",src:"http://tfwk.cn/image/photo1.png",con:"http://tfwk.cn/image/fx_tj_img01.png"}]


  },
  onLoad: function(options) {
     
  },
  tapName:function(e){
  	console.log(1);
  },
  tabBar:function(e){
     const id= parseInt(e.target.id);
     if(!/\d/.test(id)){
        return false;
     }
     const head=[],ion=[];
     for(let i=0,len=this.data.tf.length;i<len;i++){
        head[i]=true;
        ion[i]='';
     };
     head[id]=false;
     ion[id]='ion';
     this.setData({
        tf : head,
        ion: ion
     })
  },
  onPullDownRefresh:function(){
    console.log(1);
  }
})
