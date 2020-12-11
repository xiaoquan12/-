<!-- 账号与安全 -->
<template>
	<view>
		<view class="phone_wrap p32 bgWhite flex">
			<view class="left">
				<view class="bindPhone">
					绑定手机
				</view>
				<view class="phone">
					189207***66
				</view>
			</view>
			<view class="right ">
				<text>更换号码</text>
				<image src="../../static/images/access_right.png" mode="aspectFill" class="access"></image>
			</view>
		</view>
		<view class="">

			<view class="bindsj p32">
				社交账号绑定
			</view>

			<view class="sj_item bgWhite p32">
				<view class="">
					<image src="../../static/images/icon_qq@2x.png" mode="aspectFill"></image>
					<text  class="txt">Q Q</text>
				</view>
				<view class="bind_btn" :class="{bind:isBind}">
					{{isBind?"触绑":"绑定"}}
				</view>
			</view>
			<view class="sj_item bgWhite p32">
				<view class="">
					<image src="../../static/images/icon_weixin@2x.png" mode="aspectFill"></image>
					<text class="txt">微信</text>
				</view>
				<view class="bind_btn" :class="{bind:!isBind}">
					{{!isBind?"触绑":"绑定"}}
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				isBind: true
			};
		}
	}
</script>

<style lang="scss">
	page {
		background-color: $uni-bg-color-grey;
	}

	.phone_wrap {
		display: flex;
		align-items: center;
		justify-content: space-between;

		.left {

			.bindPhone {

				font-size: 32rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #333333;

			}

			.phone {
				margin-top: 8rpx;
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #999999;

			}
		}

		.right {
			// display: flex;
			// align-items: center;
			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #999999;

		}
	}

	.bindsj {
		padding-top: 48rpx;

		font-size: 24rpx;
		font-family: PingFangSC;
		color: #666666;

	}

	.sj_item {
		display: flex;
		justify-content: space-between;

		image {
			width: 35rpx;
			height: 38rpx;
		}
		
			
		.txt{
			margin-left: 18rpx;
		}
	}

	.sj_item:nth-child(2) {
		border-bottom: 1rpx solid #EEEEEE;
	}

	.bind_btn {
		width: 80rpx;
		height: 50rpx;
		background: #2B2C3E;
		color: white;
		font-size: 24rpx;
		font-family: PingFangSC;
		color: #FFFFFF;
		line-height: 50rpx;
		text-align: center;
	}

	.bind {

		border: 2rpx solid #EEEEEE;
		color: #BBBBBB;
		background-color: transparent;
	}
</style>
