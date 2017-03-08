Page({
	data:{
		disabled:true,
		next:"next",
		a:'../get_success/get_success'
	},
	next:function (e) {
		
		var value=e.detail.value;
		if(value.length>0){
			this.setData({
				disabled:false,
				next:"next red",
				a:"../get-success/get-success"
			})
		}else{
			this.setData({
				disabled:true,
				next:"next"
			})
		}
	},
	formSubmit: function(e) {
    	console.log('form发生了submit事件，携带数据为：', e)
  	},
})