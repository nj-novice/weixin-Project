Page({
	data:{
		disabled:true,
		next:"next",
		a:''
	},
	next:function (e) {
		
		var value=e.detail.value;
		if(value.length>0){
			this.setData({
				disabled:false,
				next:"next red",
				a:"../res-success/res-success"
			})
		}else{
			this.setData({
				disabled:true,
				next:"next"
			})
		}
		// return {
		// 	value:e.detail.value
		// }
	},
	formSubmit: function(e) {
    	console.log('form发生了submit事件，携带数据为：', e)
  	},	
})