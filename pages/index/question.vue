 <!--商品提问-->
<template>
  <div class="small-line-top">
	  <view class="question">
	  	这葡萄酒可以么？
	  </view>
    <!---->
    <div class="ask-box">
      <textarea cols="30" rows="6" :value='valueInput' @input='valueInput=$event.detail.value' placeholder="商品好不好问问大家？"></textarea>
    </div>
    <div class="ask-btn" @click='ask'>
      回答问题
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
	.question{
		margin-top: 24rpx;
		margin-left: 32rpx;
		font-size: 28rpx;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: #333333;
	}
	.goods_wrap {
		padding: 32rpx;
		background-color: white;
	}
</style>