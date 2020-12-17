<!-- 最近购买 -->
<template>
	<view>
		<view class="goods_wrap">
			<AfterSaleGoods :isShowSelectNum="false" :isShowPriceAndNum="false" :goods="{}"></AfterSaleGoods>
		</view>

		<view class="list">
			<view v-for="(item,index) in new Array(100)" :key="index">
				<RecentPurchaseItem></RecentPurchaseItem>
			</view>
		</view>
	</view>
</template>

<script>
	import RecentPurchaseItem from '../../components/recentPurchaseItem.vue'
	export default {
		components: {
			RecentPurchaseItem,
			AfterSaleGoods: () => import('../../components/afterSaleGoods.vue')

		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	page {
		background-color: $uni-bg-color-grey;
	}

	.goods_wrap {
		padding: 32rpx;
		background-color: white;
	}

	.list {
		padding: 32rpx;
		background-color: white;
		border-top: 1rpx solid #f6f6f6;
	}
</style>
