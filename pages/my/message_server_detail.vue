<template>
	<view>
		<view class="price_wrap flex-column-center">
			<view class="price">
				199元
			</view>
			<view class="status">
				支付成功
			</view>
		</view>
		<view class="detail">
			<view class="col flexbetween">
				<view class="">
					商品名称：
				</view>
				<view class="">
					Vintara Red（干红/13度)
				</view>
			</view>
			<view class="col flexbetween">
				<view class="">
					订单编号：
				</view>
				<view class="">
					dd-538382379912266240
				</view>
			</view>
			<view class="col flexbetween">
				<view class="">
					支付方式：
				</view>
				<view class="">
					微信
				</view>
			</view>
			<view class="col flexbetween">
				<view class="">
					支付时间：
				</view>
				<view class="">
					2020-06-25 09:59:26
				</view>
			</view>
		</view>

		<view class="btn_wrap">
			<button type="default">查看商品</button>
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
	.price_wrap {
		padding: 80rpx 0;
		margin: 0 32rpx;
		align-items: center;
		border-bottom: 2rpx solid #EEEEEE;
	}

	.price {

		font-size: 60rpx;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: #333333;
		line-height: 84rpx;

	}

	.status {

		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		line-height: 40rpx;
		padding-top: 16rpx;

	}

	.detail {
		padding: 80rpx 32rpx 160rpx;

		.col {
			padding-bottom: 32rpx;

			view:nth-child(1) {

				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #666666;
				line-height: 40rpx;


			}

			view:nth-child(2) {

				font-size: 28rpx;
				font-family: PingFangSC-Semibold, PingFang SC;
				font-weight: 600;
				color: #333333;
				line-height: 40rpx;

			}
		}
	}

	.btn_wrap {
		padding: 0 32rpx;

		button {
			border-radius: 0;
			color: #2B2C3E;
		}

		button:after {
			border-radius: 0;
			border: 4rpx solid #999999;
			color: #2B2C3E;
		}
	}
</style>
