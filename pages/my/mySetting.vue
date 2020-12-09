<template>
	<view>
		<view class="">
			<view class="item flexbetween" @click="changePhoto">
				<view class="title">
					账号安全
				</view>
				<view class="content">

					<image src="../../static/images/access_right.png" mode="aspectFill" class="access"></image>
				</view>
			</view>
			<view class="item flexbetween">
				<view class="title">
					意见与反馈
				</view>
				<view class="content">

					<image src="../../static/images/access_right.png" mode="aspectFill" class="access"></image>
				</view>
			</view>
			<view class="item flexbetween">
				<view class="title">
					版本更新
				</view>
				<view class="content">
					<text class="version">已是最新版本</text>
					<image src="../../static/images/access_right.png" mode="aspectFill" class="access"></image>
				</view>
			</view>
			<view class="item flexbetween">
				<view class="title">
					清除缓存
				</view>
				<view class="content">
					<text class="version">23MB</text>
					<image src="../../static/images/access_right.png" mode="aspectFill" class="access"></image>
				</view>
			</view>
			<view class="line">

			</view>

			<view class="btn_wrap">

				<view class="logout_btn">
					退出登录
				</view>
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

<style scoped lang="scss">
	
	page {
		background: #FFFFFF;
	}

	.item {
		padding: 48rpx 32rpx;
		align-items: center;
		box-sizing: border-box;
		

		.title {
			color: #333333;
			font-size: 32rpx;
		}

		.content {
			display: flex;
			align-items: center;

			.version {
				color: #999999;
				font-size: 24rpx;
			}
		}

		.access {
			width: 32rpx;
			height: 32rpx;
		}
	}


	// .item:first-child {
	// 	margin-top: 10rpx;
	// }

	.item:not(:last-child) {
		border-bottom: 1rpx solid #EEEEEE;
	}

	.line {
		height: 10rpx;
		width: 100%;
		background-color: #f6f6f6;
	}


	.btn_wrap {
		padding: 80rpx 32rpx;
	
		.logout_btn {
			font-size: 32rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #2B2C3E;
			border: 2px solid #2B2C3E;
			text-align: center;
			line-height: 98rpx;
			height: 98rpx;
			border: 2px solid #e3e0e5;


		}
	}
</style>
