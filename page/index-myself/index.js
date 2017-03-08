Page({
	data:{
		arr:[{"name":"我的关注","value":"20"},
					{"name":"我的粉丝","value":"890"},
						{"name":"我的打赏","value":"1850"}],
		list:[{"con":"我的秀"},
		            {"con":"我的消息"},
			            {"con":"我的钱包"}],
	    listTwo:[{"con":"我的评论"},
			        {"con":"我赞过的秀"}],
	    src:'',
	    aList:['xiu/xiu',"my-message/my-message","my-money/my-money"],
	    aList2:["comment/comment","good/good"]
	},
	onLoad:function(){
		console.log('onLoad');
		var that=this;
		wx.login({
			success:function(res){
				
				wx.getUserInfo({
					success:function(res){
						that.setData({
							src:res.userInfo
						})
					}
				})
			},
			fail:function(res){
				console.log(res)
			}
		})
	},
	

})