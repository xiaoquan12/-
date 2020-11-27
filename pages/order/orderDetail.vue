<template>
	<view class="detail ">
		<view class="status_wrap flex-column-center">
			<view class="status">
				待收货
			</view>
			<view class="status_desc">
				货物已发出，请注意收货
			</view>
		</view>
		<view class="address_wrap">
			<view class="info flexbetween">
				<view class="">
					收件人：胡哈哈
				</view>
				<view class="">
					18722***101
				</view>
			</view>
			<view class="address">
				天津-天津市-东丽区-华明家园**********
			</view>
		</view>
		<view class="goods_wrap">
			<GoodsShow></GoodsShow>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.status_wrap {

		background: #2B2C3E;
		padding: 48rpx 32rpx;

		.status {

			font-size: 40rpx;
			font-weight: 600;
			color: #FFFFFF;

		}

		.status_desc {

			font-size: 28rpx;
			font-weight: 400;
			color: #FFFFFF;
			padding-top: 8rpx;

		}
	}

	.address_wrap {
		padding: 34rpx 32rpx;

		.info {

			font-size: 32rpx;
			font-weight: 600;
			color: #333333;

		}

		.address {

			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #666666;
			padding-top: 16rpx;

		}
	}

	.goods_wrap {

		// background: #F6F6F6;
		border: 10rpx solid #F6F6F6;
		border-width: 10rpx 0;
	}
</style>
