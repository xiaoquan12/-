 <!--商品提问-->
<template>
  <div class="small-line-top">
	  <view class="goods_wrap">
	  	<AfterSaleGoods isShowSelectNum="false"  isShowPriceAndNum="false" :goods="{}"></AfterSaleGoods>
	  </view>
    <!---->
    <div class="ask-box">
      <textarea cols="30" rows="6" :value='valueInput' @input='valueInput=$event.detail.value' placeholder="商品好不好问问大家？"></textarea>
    </div>
    <div class="ask-btn" @click='ask'>
      发布问题
    </div>
  </div>
</template>
<script>
	import RecentPurchaseItem from '../../components/recentPurchaseItem.vue'
	import AfterSaleGoods from '../../components/afterSaleGoods.vue'
export default {
  components: {
  	RecentPurchaseItem,
  	AfterSaleGoods
  },
  data() {
    return {
		valueInput:""
	}
  },
  methods:{
	  ask(){
		  this.$ui.showToast("提问成功");
		  uni.navigateBack();
	  }
  }
}
</script>
<style lang="scss" scoped>
	.goods_wrap {
		padding: 32rpx;
		background-color: white;
	}
</style>