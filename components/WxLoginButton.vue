<!-- 授权登陆组件 -->
<template>
	<div>
		<!--  #ifdef MP-WEIXIN -->
		<button v-if="!isLogin" class="button-layer" open-type="getUserInfo" lang="zh_CN" @getuserinfo.stop="wxLogin"></button>
		<!--  #endif -->
		<!-- #ifdef MP-ALIPAY -->
		<button v-if="!isLogin" class="button-layer" open-type="getAuthorize" scope="userInfo" @getAuthorize="zfbWxLogin"></button>
		<!-- #endif -->
		<!-- <button a:if="{{canIUseAuthButton}}" open-type="getAuthorize" 
		onGetAuthorize="onGetAuthorize" onError="onAuthError" 
		scope='userInfo'>
		    会员基础信息授权
		</button> -->
	</div>
</template>
<script>
import { SET_USER_TOKEN } from '@/store/modules/auth';
const app = getApp();
export default {
	props: {
		returnUrl: String,
		isComplete: false
	},
	computed: {
		isLogin() {
			return this.$store.getters.isLogin;
		}
	},
	methods: {
		//★ 获取微信小程序openid
		getOpenid(js_code) {
			return new Promise((resolve, reject) => {
				this.$api.common
					.get('api/json/weixin/weixin.ashx?action=getopenid', {
						js_code: js_code,
						isCheck:true
						// city: app.globalData.locate.city == '九江市' ? '九江市' : app.globalData.locate.cityData
					})
					.then(res => {
						app.globalData.openid = res.data.openid;
						resolve(res);
					})
					.catch(err => {
						reject(err);
					});
			});
		},

		zfbWxLogin(e) {
			my.getOpenUserInfo({
				fail: res => {},
				success: res => {
					let userInfo = JSON.parse(res.response).response; // 以下方的报文格式解析两层 response
					console.log("userInfo",userInfo);
					uni.login({
						success: res => {
							if (!res.code) {
								this.$ui.showToast(res.errMsg);
								return;
							}
							console.log('res', res);
							if (!userInfo) return;
							// const param={ js_code: res.code,
							//           cartKey: this.$store.getters.cartKey,
							//           headimgurl: userInfo.avatar,
							//           nickname: userInfo.nickName,
							//           sex: userInfo.gender=="m"?1:0,
							//           loading: false,
							//           isHeader: true,
							//  code:res.code
							//  };
							// console.log("param",param);
							// return;
							this.getOpenid(res.code).then(res => {
								uni.login({
									success: res => {
										this.$api.common
											.get('api/json/weixin/weixin.ashx?action=xcxlogin', {
												js_code: res.code,
												cartKey: this.$store.getters.cartKey,
												headimgurl: userInfo.avatar,
												nickname: userInfo.nickName,
												sex: userInfo.gender=="m"?1:0,
												loading: false,
												isHeader: true,
												city: app.globalData.locate.city == '九江市' ? '九江市' : app.globalData.locate.cityData
											})
											.then(res => {
												console.log(res);
												var data = res.data;
												if (data.status <= 0) {
													this.$ui.showToast(data.returnMsg);
												} else {
													if (res.header['Set-Cookie'].length > 200) {
														//将获取到的cookies进行格式化，并保存到全局变量中
														var logincookie = res.header['Set-Cookie'];
														logincookie = logincookie
															.replace(/path=\/,/g, '')
															.replace(/path=\/;/g, '')
															.replace(/path=\//g, '')
															.replace(/HttpOnly,/g, '')
															.replace(/\s+/g, '');
														this.$store.commit(SET_USER_TOKEN, logincookie);
														app.globalData.userInfo = data;
														console.log('app.globalData.userInfo', app.globalData.userInfo);
														console.log('isLogin', this.$store.getters.isLogin);
														// this.$store.commit("isLogin", true);
													}
													this.$ui.showToast('登录成功');
													this.$emit('success');
												}
											});
									}
								});
							});
						}
					});
				}
			});
			console.log('e', e);
		},
		/**
		 * 授权登录
		 * @author 空心科技-王效玉
		 * @date 2020-06-22
		 * @param {微信接口返回数据} e
		 * @returns 无
		 */
		wxLogin(e) {
			console.log('e', e);
			uni.login({
				success: res => {
					if (!res.code) {
						this.$ui.showToast(res.errMsg);
						return;
					}
					if (!e.mp.detail.userInfo) return;
					// const param={ js_code: res.code,
					//           cartKey: this.$store.getters.cartKey,
					//           headimgurl: e.mp.detail.userInfo.avatarUrl,
					//           nickname: e.mp.detail.userInfo.nickName,
					//           sex: e.mp.detail.userInfo.gender,
					//           loading: false,
					//           isHeader: true,
					//  code:res.code
					//  };
					// console.log("param",param);
					// return;
					this.getOpenid(res.code).then(res => {
						uni.login({
							success: res => {
								this.$api.common
									.get('api/json/weixin/weixin.ashx?action=xcxlogin', {
										js_code: res.code,
										cartKey: this.$store.getters.cartKey,
										headimgurl: e.mp.detail.userInfo.avatarUrl,
										nickname: e.mp.detail.userInfo.nickName,
										sex: e.mp.detail.userInfo.gender,
										loading: false,
										isHeader: true,
										city: app.globalData.locate.city == '九江市' ? '九江市' : app.globalData.locate.cityData
									})
									.then(res => {
										console.log(res);
										var data = res.data;
										if (data.status <= 0) {
											this.$ui.showToast(data.returnMsg);
										} else {
											if (res.header['Set-Cookie'].length > 200) {
												//将获取到的cookies进行格式化，并保存到全局变量中
												var logincookie = res.header['Set-Cookie'];
												logincookie = logincookie
													.replace(/path=\/,/g, '')
													.replace(/path=\/;/g, '')
													.replace(/path=\//g, '')
													.replace(/HttpOnly,/g, '')
													.replace(/\s+/g, '');
												this.$store.commit(SET_USER_TOKEN, logincookie);
												app.globalData.userInfo = data;
												console.log('app.globalData.userInfo', app.globalData.userInfo);
												console.log('isLogin', this.$store.getters.isLogin);
												// this.$store.commit("isLogin", true);
											}
											this.$ui.showToast('登录成功');
											this.$emit('success');
										}
									});
							}
						});
					});
				}
			});
		}
	}
};
</script>

<style scoped>
.button-layer {
	width: 100%;
	height: 100%;
	padding: 0;
	margin: 0;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 999;
	background: rgba(3, 20, 255, 0);
}

button::after {
	border: none;
}
</style>
