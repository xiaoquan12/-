export default {
	/**
	 * 公用提示框
	 * @author 空心科技-王效玉
	 * @date 2020-06-22
	 * @param 弹出消息内容 msg
	 * @param 弹出框持续时间（秒） duration
	 */
	showToast(msg, duration) {
		uni.showToast({
			title: msg,
			icon: 'none',
			duration: duration || 3000
		})
	},
	/**
	 *  隐藏提示框
	 * @author 空心科技-王效玉
	 * @date 2020-06-22
	 */
	hideToast() {
		uni.hideToast()
	},
	showModal(content,title='提示', showCancel = false) {
		return new Promise((resolve, reject) => {
			uni.showModal({
				title: title,
				content: content,
				showCancel: showCancel,
				success: res => {
                   resolve(res)
				},
				fail:res =>{
					reject(res)
				}
			})
		})
	},
	/**
	 * 公用加载loading
	 * @author 空心科技-王效玉
	 * @date 2020-06-22
	 * @param loading文字 msg
	 */
	showLoading(msg) {
		uni.showLoading({
			title: msg || '加载中',
			mask: true
		})
	},
	/**
	 * 公用隐藏loading
	 * @author 空心科技-王效玉
	 * @date 2020-06-22
	 */
	hideLoading() {
		setTimeout(() => {
			uni.hideLoading()
		}, 500)
	},
	//预览图片
	previewImage({urls,current}){
		urls.forEach((item,index)=>{
					  if(item.indexOf("https:")==-1){
						  urls[index]='https:'+item;
					  }
		})
       return new Promise((resolve,reject)=>{
		   uni.previewImage({
			   current:current,
			   urls: urls,
			   success(res) {
			   	  resolve(res)
			   }
		   })
		  
	   })		
	}
}
