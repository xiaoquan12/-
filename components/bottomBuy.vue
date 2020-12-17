<template>
	<view class="flex bottom_buy">
		<view class="icon">
			<image src="../static/images/icon_24＊24pt_kefu@2x.png" mode=""></image>
		</view>
		<view class="icon">
			<image src="../static/images/icon_24＊24pt_gouwuche@2x.png" mode=""></image>
		</view>
		<view class="addCar">
			加入购物车
		</view>
		<view class="buy">
			立即购买
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
	.bottom_buy {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: white;

		box-shadow: 4rpx 0px 4rpx 0px rgba(0, 18, 84, 0.2);

		view {
			display: flex;
			align-items: center;
			justify-content: center;
			position: relative;
		}

		.icon {
			flex: 1;
		}

		view:nth-child(2)::before,
		view:nth-child(1)::before {
			
			content: " ";
			position: absolute;
			right: 0;
			top: 20rpx;
			bottom: 20rpx;
			width: 1rpx;
			background: #EEEEEE;
		}
	}

	image {
		width: 36rpx;
		height: 42rpx;
	}






	.buy,
	.addCar {
		width: 250rpx;
		height: 98rpx;
		line-height: 98rpx;
		font-size: 32rpx;
		background: #2B2C3E;
		font-weight: 600;
		color: #FFFFFF;
		text-align: center;
	}

	.addCar {

		background: #FFFFFF;
		color: #333333;
	}
</style>
