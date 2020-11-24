<!-- 授权手机号组件 -->
<template>
  <!-- #ifdef MP-WEIXIN -->
  <button class="button-layer" lang="zh_CN" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber"></button>
  <!-- #endif -->
  <!-- #ifdef MP-ALIPAY -->
  <button class="button-layer" open-type="getAuthorize" scope="phoneNumber" @getAuthorize="getZfbPhoneNumber"></button>
  <!-- #endif -->
</template>

<script>
export default {
  props: {
    memberId: null,
    isSave: {
      type: Boolean,
      default: false
    },
	
  },
  methods: {
	  getZfbPhoneNumber(e){
		  my.getPhoneNumber({
		      success: (res) => {
		          let encryptedData = res.response;
		          console.log("encryptedData",encryptedData);
		      },
		      fail: (res) => {
		          console.log(res);
		          console.log('getPhoneNumber_fail');
		      },
		  });
		  return;
		  uni.login({
		    success: res => {
		      if (!res.code) {
		        this.$ui.showToast(res.errMsg)
		        return
		      }
		  
		      this.$api.common
		        .post('api/json/weixin/weixin.ashx?action=encrypteddata', {
		          js_code: res.code,
		          encrypteddata: e.mp.detail.encryptedData,
		          iv: e.mp.detail.iv,
		          loading: false,
		          memberid: this.memberId,
		  			  city:app.globalData.locate.city=="九江市"?"九江市":app.globalData.locate.cityData,
		        })
		        .then(res => {
		          if (res.status == 0) {
		            this.$ui.showToast(res.returnMsg)
		            return
		          }
		  
		          this.$emit('success', res.data.purePhoneNumber)
		        })
		    }
		  })
	  },
    /**
     * 获取手机号
     * @author 空心科技-王效玉
     * @date 2020-06-22
     * @param {微信接口返回数据} e
     * @returns 无
     */
    getPhoneNumber(e) {
      if (!e.mp.detail.encryptedData) {
        return
      }
      uni.login({
        success: res => {
          if (!res.code) {
            this.$ui.showToast(res.errMsg)
            return
          }

          this.$api.common
            .post('api/json/weixin/weixin.ashx?action=encrypteddata', {
              js_code: res.code,
              encrypteddata: e.mp.detail.encryptedData,
              iv: e.mp.detail.iv,
              loading: false,
              memberid: this.memberId,
			  city:app.globalData.locate.city=="九江市"?"九江市":app.globalData.locate.cityData,
            })
            .then(res => {
              if (res.status == 0) {
                this.$ui.showToast(res.returnMsg)
                return
              }

              this.$emit('success', res.data.purePhoneNumber)
            })
        }
      })
    }
  }
}
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
  background: rgba(250, 0, 0, 0);
}
button::after {
  border: none;
}
</style>