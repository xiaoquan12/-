<template>
	<view class="submit_wrap">
		<view class="flex-column-center">
			<image src="" mode="aspectFill"></image>
			<text class="status_text">提交成功</text>
		</view>

		<view class="btn">
			<view class="">
				返回首页
			</view>
			<view class="">
				查看状态
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
	.submit_wrap {
		height: 100%;
		width: 100%;
		padding: 32rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
			
			image{
				margin-top: 188rpx;
				width: 210rpx;
				height: 210rpx;
			}
		.status_text {
			text-align: center;
			font-size: 40rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #2B2C3E;
			line-height: 56rpx;

		}

		.btn {
			margin-top: 242rpx;
			display: flex;

			view {
				width: 326rpx;
				height: 104rpx;
				font-size: 40rpx;
				font-weight: 400;
				line-height: 104rpx;
				border: 2rpx solid #2B2C3E;
				text-align: center;
			}

			view:nth-child(1) {
				color: #2B2C3E;
				margin-right: 17rpx;
			}

			view:nth-child(2) {
				margin-left: 17rpx;
				background-color: #2B2C3E;
				color: #FFFFFF;
			}
		}
	}
</style>
