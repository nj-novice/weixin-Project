Page({
	data:{
		items: [
	      {name: 'USA', value: '搞笑'},
	      {name: 'CHN', value: '女神',checked: 'true'},
	      {name: 'BRA', value: '职业'},
	      {name: 'JPN', value: '趣味'},
	    ],
	    h1:"在这么冷的冬天没有比吹着空调敷着面膜躺在沙发上晒太阳在轻松快乐的事情了",
	    btm:"-1000px",
	    photo:"",
	    video:"",
	    text:"",
	    add_show:"block",
	    add_text:"block",
	    add_video:"block",
	    photo_show:"none",
	    video_show:"none",
	    text_show:"none",
	    container:"",
	 	text_show_one:"none",
	 	none:"",
	 	toggle:"http://tfwk.cn/image/fabu_bg.jpg"
	},
	 checkboxChange:function(e){
	 	var arr=this.data.items,target=e.detail.value,b=[];
	 	for(var i=0;i<target.length;i++){
	 		for(var j=0;j<arr.length;j++){
	 			arr[j].checked=''
	 			if(target[i] == arr[j].name){
	 				b.push(j);
	 			}

	 		}
	 	
	 	}
	 	if(b.length<1){
	 		for(var k=0;k<arr.length;k++){
	 			arr[k].checked="";
	 		}
	 		this.setData({
		 		items:arr
		 	})
	 		return false;
	 	}
	 	for(var h=0;h<b.length;h++){
	 		var l=b[h];
	 		arr[l].checked='ture'
	 	}
	 	
	 	this.setData({
	 		items:arr
	 	})
	 },
	 tap:function(){
	 	this.setData({
		 		btm:"0px"
		 	})
	 },
	 hide:function(){
	 	this.setData({
		 		btm:"-1000px"
		 	})
	 },
	 addphoto:function(){
		 	var has=this.data.photo;
		 	if(has.length>0){
		 		return false;
		 	}
		 	var tempFilePaths=null,dom=[],_that=this;
		 	wx.chooseImage({
			  count: 1,
			  sizeType: ['original', 'compressed'],
			  sourceType: ['album', 'camera'],
			  success: function (res) {
			     tempFilePaths= res.tempFilePaths;
			     _that.setData({
					photo:tempFilePaths,
					btm:"-1000px",
					photo_show:"block",
					add_show:"none"
				})
			  }
			})
	 },
	 photo_hide:function(){
		 	this.setData({
		 		photo:"",
		 		photo_show:"none",
		 		add_show:"block"
		 	})
	 },
	 addvideo:function(){
			var that = this;
			var has=this.data.video;
		 	if(has.length>0){
		 		return false;
		 	}
	        wx.chooseVideo({
	            sourceType: ['album','camera'],
	            maxDuration: 1860,
	            camera: 'back',
	            success: function(res) {
	                that.setData({
	                    video:res.tempFilePath,
	                    video_show:"block",
	                    btm:"-1000px",
	                    add_video:"none"
	                })
	            }
	        })
	 },
	 video_hide:function(){
	 	this.setData({
		 		video:"",
		 		video_show:"none",
		 		add_video:"block"
		 	})
	 },
	 addtext:function(){
	 	this.setData({
	 		text_show:"block",
	 		add_text:"none",
	 		btm:"-1000px",
	 		none:""
	 	})
	 },
	 write_val:function(){
	 	var a=this.data.container;
	 	if(a.length<1){
	 		this.setData({
		 		text:a,
		 		text_show:"none",
		 		add_text:"block"
		 	})
	 		return false;
	 	}
	 	this.setData({
	 		text:a,
	 		text_show:"none",
	 		text_show_one:"block",
	 		add_text:"none"
	 	})
	 },
	 container:function(e){
	 	var a=e.detail.value;
	 	this.setData({
	 		container:a
	 	})
	 },
	 text_hide:function(){
	 	this.setData({
	 		text_show:"none",
	 		add_text:"block",
	 		text_show_one:"none"
	 	})
	 },
	 stop:function(){
	 	console.log(1);
	 },
	 toggle:function(){
	 	var that=this;
	 	wx.chooseImage({
		  count: 1, 
		  sizeType: ['original', 'compressed'], 
		  sourceType: ['album', 'camera'], 
		  success: function (res) {
		    var tempFilePaths = res.tempFilePaths;
		    that.setData({
		    	toggle:tempFilePaths
		    })
		  }
		})
	 }
})