import config from '@/config'
import store from '@/store'
import qs from './qs'
import ui from './ui'
import storage from './storage'
import router from '@/router'
import {
	SET_USER_TOKEN
} from '@/store/modules/auth'
import md5 from './md5.js'

/**
 * 公用请求方法
 * @author 空心科技-王效玉
 * @date 2020-06-22
 * @param "页面地址" url
 * @param "请求方式post/get" method
 * @param {get请求参数} params
 * @param {post请求参数} data}
 */
export default function request({
	url,
	method,
	params,
	data
}) {
	data=data||{};
	params = params || {};
	params.companyid = 9724;
	console.log("params",params);
	if(params.isCheck||data.isCheck){
		var timestamp = Date.parse(new Date())
		timestamp = timestamp / 1000
		params.timestamp = timestamp
		var token = 'D323BA054DF5DBB50D26E269E4E48AA5';
		if (params && params.isUpDate) {
			var code = md5(token + params.cartId + timestamp);
			delete params["isUpDate"];
		} else {
			var code = md5(token + timestamp);
		}
		params.code = code;
		console.log("params",params);
		if(method=='post'){
			delete data["isCheck"];
		}
		if(method=='get'){
			delete params["isCheck"];
		}
	}
	if(params.isOnlyId){
		delete params["code"];
		delete params["timestamp"];
		delete params["isOnlyId"];
		console.log(params);
	}
	url = qs.merge(url, params);
	let loading = params.loading != false;
	// if(params["isHeader"]){
	// 	console.log("params",params);
		
	// 	return;
	// }
	return new Promise((resolve, reject) => {
		if (loading) {
			ui.showLoading()
		}
		var header = {}
		if (store.getters.isLogin) {
			header['cookie'] = store.getters.userToken
		}
		// header['content-type'] = 'application/x-www-form-urlencoded'
       	if(method=="post"||method=="POST"){
			header['content-type'] = 'application/x-www-form-urlencoded'
		}
		// uni.setStorageSync("header",header)
		uni.request({
			url: config.apiBaseUrl + url,
			method: method,
			data: data,
			header: header,
			success: res => {
				if (loading) {
					ui.hideLoading()
				}
				if (res.statusCode === 401) {
					ui.showToast('登录失效，请重新登录')
					store.commit(SET_USER_TOKEN, null)
					setTimeout(() => {
						router.switchTab('/pages/home/my')
					}, 1000)
					return
				}
				if (params.isHeader) {
					resolve(res)
				} else {
					resolve(res.data)
				}
			},
			fail: res => {
				if (loading) {
					ui.hideLoading()
				}

				reject(res)
			},
			complete: () => {
				if(params.isUpDate){
					delete params.cartId;
					delete params.isUpDate;
				}
			}
		})
	})
}
