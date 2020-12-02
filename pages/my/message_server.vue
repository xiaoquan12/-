<template>
	<view class="list flex-column-center">
		<view v-for="(item,index) in [1,2,3]" :key="index" class="flex-column-center item">
			<view class="title">
				订单支付成功通知
			</view>
			<view class="amount">
				支付金额：3.80元
			</view>
			<view class="orderId">
				订单编号：dd-538382379912266240
			</view>
			<view class="payTime">
				支付时间：2020-06-25 09:59:26
			</view>
			<view class="createTime">
				2020-06-25
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	page {

		background: #F6F6F6;
	}

	.list {
		padding: 32rpx;
		box-sizing: border-box;
	}

	.item {
		background-color: #FFFFFF;
		border-radius: 8rpx;
		margin-bottom: 24rpx;

		.title {

			font-size: 32rpx;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;
			color: #333333;

			padding: 32rpx 24rpx;
		}

		view:not(first-child) {
			padding: 0 24rpx;
			padding-bottom: 16rpx;
			
			color: #666666;
			font-size: 28rpx;
			box-sizing: border-box;
		}
		
		.payTime{
			padding-bottom: 32rpx;
			border-bottom: 1rpx solid #EEEEEE;
		}
		
		.createTime{
			padding: 32rpx 24rpx;
		}
	}
</style>
