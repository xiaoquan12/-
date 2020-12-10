<!-- 退货 -->
<template>
	<view>
		<view class="goods_wrap">
			<AfterSaleGoods :isShowSelectNum="true" @sub="subNum" @add="addNum" :goods="{}"></AfterSaleGoods>
		</view>
		

		<ReturnOrExchangeGoods></ReturnOrExchangeGoods>
		<view class="address flex-column-center">
			<view class="">
				胡哈哈
			</view>
			<view class="">
				18920***765
			</view>
		</view>

		<view class="upload" @click="submit">
			提交申请
		</view>
	</view>

</template>

<script>
	import AfterSaleGoods from '../../components/afterSaleGoods.vue'
	import ReturnOrExchangeGoods from '../../components/ReturnOrExchangeGoodsForm.vue'
	export default {
		components: {
			AfterSaleGoods,
			ReturnOrExchangeGoods
		},
		data() {
			return {

			};
		},
		mounted() {

		},
		methods: {
			subNum(e) {
				console.log(e)
			},
			addNum(e) {
				console.log(e)
			},
			submit(){
				this.$common.redirect('/pages/afterSale/afterSaleSubmitSuccess')
			}
		}
	}
</script>

<style scoped lang="scss">
	page {
		background-color: #F6F6F6;
	}

	.goods_wrap {
		background-color: white;
		padding: 32rpx;
	}

	.address {
		margin: 24rpx 32rpx;

		margin-bottom: 128rpx;
		box-sizing: border-box;
		background-color: #FFFFFF;
		display: flex;

		view {
			padding: 32rpx 24rpx;
		}

		view:nth-child(1) {
			border-bottom: 2rpx solid #EEEEEE;
		}

	}

	.upload {
		width: 100%;
		height: 98rpx;
		line-height: 98rpx;
		text-align: center;
		background: #2B2C3E;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		color: #FFFFFF;
		font-size: 32rpx;
		font-weight: 600;
	}
</style>
