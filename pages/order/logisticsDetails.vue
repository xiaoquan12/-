<!-- 物流详情 -->
<template>
	<view>
		<view class="header">
			查看物流
		</view>
		<view class="order_wrap flex-column-center">
			<view class="order flex flexbetween">
				<view class="">
					中通快递：202005081325283003
				</view>
				<view class="copy">
					复制
				</view>
			</view>
			<view class="createTime">
				创建时间：2020-07-01 16:25:56
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
	.header {
		width: 100%;
		height: 200rpx;
		background: #2B2C3E;
		padding: 32rpx;
		box-sizing: border-box;
		font-size: 40rpx;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: #FFFFFF;
		display: flex;
		align-items: center;

	}

	.order_wrap {
		padding: 32rpx;

		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #666666;
		border-bottom: 2rpx solid #EEEEEE;
		.createTime {
			padding-top: 24rpx;
		}

		.copy {
			color: #000000;
		}
	}
</style>
